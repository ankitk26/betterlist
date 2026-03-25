import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import type { Playlist } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getUserPlaylists = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = "/me/playlists";

		const { data: responseData, error } = await betterFetch<{
			items: Playlist[];
		}>(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : SPOTIFY_API_BASE_URL,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});

		if (error) {
			console.log(error);
			return [];
		}

		return responseData.items;
	},
);
