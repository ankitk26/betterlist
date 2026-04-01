import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { auth } from "~/lib/auth";

export const getAuthSession = createServerFn({ method: "GET" }).handler(
	async () => {
		const request = getRequest();
		if (!request) {
			return null;
		}

		try {
			const session = await auth.api.getSession({ headers: request.headers });
			if (!session?.user.accessToken) {
				return null;
			}

			return session;
		} catch (error) {
			console.error(
				`[${new Date().toISOString()}] [error fetching auth session]`,
			);
			console.error(error);
			return null;
		}
	},
);
