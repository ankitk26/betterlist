import { createServerFn } from "@tanstack/react-start";
import type { Session } from "better-auth";
import { env } from "cloudflare:workers";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { account } from "~/db/auth-schema";

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

		let tokenExpiry = Date.now();
		if (accountData.accessTokenExpiresAt) {
			tokenExpiry = new Date(accountData.accessTokenExpiresAt).getTime();
		}
		const currentTime = Date.now();

		if (currentTime > tokenExpiry) {
			console.log(`[${new Date().toISOString()}] [token is expired]`);
			return { token: null, accountId: accountData.accountId };
		}

		console.log(`[${new Date().toISOString()}] [token is not expired]`);
		return { token: accountData.accessToken, accountId: accountData.accountId };
	});
