import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import type { Playlist } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getPlaylistById = createServerFn({ method: "GET" })
	.inputValidator(z.string())
	.handler(async ({ data: playlistId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = `/playlists/${playlistId}`;

		const { data: responseData, error } = await betterFetch<Playlist>(
			endpoint,
			{
				baseURL: endpoint.startsWith("https") ? "" : SPOTIFY_API_BASE_URL,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			},
		);

		if (error) {
			console.log(error);
			return null;
		}

		const playlist = {
			...responseData,
			tracks: [],
			count: responseData.tracks.total,
		};

		return playlist;
	});
