import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import type { Session } from "better-auth";
import { env } from "cloudflare:workers";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { z } from "zod";
import { account } from "~/db/auth-schema";

const getNewExpiryDate = (expiresIn: number) => {
	const currentTime = Date.now();
	const expiryTime = currentTime + expiresIn * 1000;
	return new Date(expiryTime).toISOString();
};

const refreshTokenFromSpotify = createServerFn({ method: "POST" })
	.inputValidator(
		z.object({
			refreshToken: z.string(),
			userId: z.string(),
		}),
	)
	.handler(async ({ data: { refreshToken, userId } }) => {
		const db = drizzle(env.DB);

		const { data: responseData, error } = await betterFetch<{
			access_token: string;
			expires_in: number;
			refresh_token?: string;
		}>("https://accounts.spotify.com/api/token", {
			method: "POST",
			timeout: 10000,
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				Authorization:
					"Basic " +
					Buffer.from(
						`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`,
					).toString("base64"),
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: refreshToken,
			}),
		});

		if (error) {
			console.error(error);
			return null;
		}

		const updatedExpiryDate = getNewExpiryDate(responseData.expires_in);
		try {
			await db
				.update(account)
				.set({
					accessToken: responseData.access_token,
					accessTokenExpiresAt: updatedExpiryDate,
					refreshToken: responseData.refresh_token ?? refreshToken,
				})
				.where(eq(account.userId, userId));
		} catch (e) {
			console.error(e);
			return null;
		}

		return responseData.access_token;
	});

export const getUserAccount = createServerFn({ method: "GET" })
	.inputValidator((session: Session) => session)
	.handler(async ({ data: session }) => {
		const db = drizzle(env.DB);

		let accountData;
		try {
			accountData = await db
				.select({
					accountId: account.accountId,
					accessToken: account.accessToken,
					accessTokenExpiresAt: account.accessTokenExpiresAt,
					refreshToken: account.refreshToken,
				})
				.from(account)
				.where(eq(account.userId, session.userId))
				.limit(1)
				.then((res) => res[0]);
		} catch (error) {
			console.error(error);
			return { token: null, accountId: null };
		}

		// Return null if no account is found
		if (!accountData) {
			return { token: null, accountId: null };
		}

		let tokenExpiry = Date.now();
		if (accountData.accessTokenExpiresAt) {
			tokenExpiry = new Date(accountData.accessTokenExpiresAt).getTime();
		}
		const currentTime = Date.now();

		if (currentTime > tokenExpiry) {
			if (!accountData.refreshToken) {
				return { token: null, accountId: accountData.accountId };
			}

			let newAccessToken;
			try {
				newAccessToken = await refreshTokenFromSpotify({
					data: {
						refreshToken: accountData.refreshToken,
						userId: session.userId,
					},
				});
			} catch (error) {
				console.error(error);
				return { token: null, accountId: accountData.accountId };
			}

			if (!newAccessToken) {
				return { token: null, accountId: accountData.accountId };
			}

			return { token: newAccessToken, accountId: accountData.accountId };
		}

		return { token: accountData.accessToken, accountId: accountData.accountId };
	});
