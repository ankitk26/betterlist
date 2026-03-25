import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import type { Artist } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getUserArtists = createServerFn({ method: "GET" }).handler(
	async () => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = "/me/following?type=artist&limit=50";

		const { data: responseData, error } = await betterFetch<{
			artists: { items: Artist[] };
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

		return responseData.artists.items;
	},
);
