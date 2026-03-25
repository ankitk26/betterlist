import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import type { Track } from "~/types";
import { getAuthSession } from "./get-auth-session";

type PlaylistTracksResponse = {
	items: { track: Track }[];
	next: string | null;
	total: number;
};

const PAGE_SIZE = 50;

export const getPlaylistTracks = createServerFn({ method: "GET" })
	.inputValidator(
		z.object({
			playlistId: z.string(),
			offset: z.number().default(0),
		}),
	)
	.handler(async ({ data: { playlistId, offset } }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = `/playlists/${playlistId}/items?offset=${offset}&limit=${PAGE_SIZE}`;

		const { data: responseData, error } =
			await betterFetch<PlaylistTracksResponse>(endpoint, {
				baseURL: endpoint.startsWith("https") ? "" : SPOTIFY_API_BASE_URL,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});

		if (error) {
			console.log(error);
			return { tracks: [], nextOffset: null, total: 0 };
		}

		return {
			tracks: responseData.items
				.map((item) => item.track)
				.filter((track) => track !== null),
			nextOffset: responseData.next ? offset + PAGE_SIZE : null,
			total: responseData.total,
		};
	});
