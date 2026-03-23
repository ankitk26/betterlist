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
	return new Date(expiryTime);
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
			refresh_token: string;
		}>("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"content-type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				grant_type: "refresh_token",
				refresh_token: refreshToken,
				client_id: env.SPOTIFY_CLIENT_ID,
			}),
		});

		if (error) {
			console.error(
				`[${new Date().toISOString()}] [error in refreshing token]`,
			);
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
					refreshToken: responseData.refresh_token,
				})
				.where(eq(account.userId, userId));
		} catch (e) {
			console.error(
				`[${new Date().toISOString()}] [error updating account in database]`,
			);
			console.error(e);
			return null;
		}

		return responseData.access_token;
	});

export const getUserAccount = createServerFn({ method: "GET" })
	.inputValidator((session: Session) => session)
	.handler(async ({ data: session }) => {
		const db = drizzle(env.DB);

		console.log(`[${new Date().toISOString()}] [fetching account data]`);

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
			console.error(
				`[${new Date().toISOString()}] [error fetching account data from database]`,
			);
			console.error(error);
			return { token: null, accountId: null };
		}

		console.log(`[${new Date().toISOString()}] [received account data]`);

		// Return null if no account is found
		if (!accountData) {
			console.log(`[${new Date().toISOString()}] [account data is null]`);
			return { token: null, accountId: null };
		}

		// check expiry date of access token
		console.log(
			`[${new Date().toISOString()}] [checking token expiration date]`,
		);
		const tokenExpiry = new Date(
			accountData.accessTokenExpiresAt ?? Date.now(),
		).getTime();
		const currentTime = Date.now();

		if (currentTime >= tokenExpiry) {
			// Refresh token if it expired
			console.log(`[${new Date().toISOString()}] [token is expired]`);

			// Check if refresh token exists
			if (!accountData.refreshToken) {
				console.error(
					`[${new Date().toISOString()}] [no refresh token available]`,
				);
				return { token: null, accountId: accountData.accountId };
			}

			console.log(`[${new Date().toISOString()}] [refreshing token]`);

			let newAccessToken;
			try {
				newAccessToken = await refreshTokenFromSpotify({
					data: {
						refreshToken: accountData.refreshToken,
						userId: session.userId,
					},
				});
			} catch (error) {
				console.error(`[${new Date().toISOString()}] [error refreshing token]`);
				console.error(error);
				return { token: null, accountId: accountData.accountId };
			}

			if (!newAccessToken) {
				console.error(
					`[${new Date().toISOString()}] [token refresh failed. null token received]`,
				);
				return { token: null, accountId: accountData.accountId };
			}

			console.log(`[${new Date().toISOString()}] [token refreshed]`);
			return { token: newAccessToken, accountId: accountData.accountId };
		}

		console.log(`[${new Date().toISOString()}] [token is not expired]`);
		return { token: accountData.accessToken, accountId: accountData.accountId };
	});
