import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import { getAuthSession } from "./get-auth-session";

export const renamePlaylist = createServerFn({ method: "POST" })
	.inputValidator(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	)
	.handler(async ({ data: { id, name } }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		const endpoint = `/playlists/${id}`;

		const { error } = await betterFetch(endpoint, {
			method: "PUT",
			baseURL: SPOTIFY_API_BASE_URL,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
			body: {
				name,
			},
		});

		if (error) {
			console.error(error);
			throw new Error("Something went wrong");
		}

		return name;
	});
