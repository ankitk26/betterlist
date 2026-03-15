import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";
import { env } from "cloudflare:workers";
import { getUserAccount } from "./get-user-account";

export const auth = betterAuth({
	database: env.DB,
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
		cookieCache: {
			enabled: true,
			maxAge: 10 * 60, // cache duration in seconds
		},
	},

	socialProviders: {
		spotify: {
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
			scope: [
				"user-read-recently-played",
				"user-read-playback-state",
				"user-top-read",
				"user-modify-playback-state",
				"user-read-currently-playing",
				"user-follow-read",
				"playlist-read-private",
				"user-read-email",
				"user-read-private",
				"user-library-read",
				"playlist-read-collaborative",
				"playlist-modify-public",
				"playlist-modify-private",
			],
		},
	},

	plugins: [
		customSession(async ({ session: authSession, user: authUser }) => {
			const { token, accountId } = await getUserAccount({ data: authSession });
			return {
				user: {
					...authUser,
					accessToken: token,
					accountId,
				},
				session: authSession,
			};
		}),
	],
});
