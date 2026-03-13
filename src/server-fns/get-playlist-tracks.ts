import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { spotifyApiBaseUrl } from "~/static/constants";
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

		const endpoint = `/playlists/${playlistId}/tracks?offset=${offset}&limit=${PAGE_SIZE}`;

		const res = await betterFetch<PlaylistTracksResponse>(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});

		const resData = res.data;

		if (!resData) {
			return { tracks: [], nextOffset: null, total: 0 };
		}

		return {
			tracks: resData.items
				.map((item) => item.track)
				.filter((track) => track !== null),
			nextOffset: resData.next ? offset + PAGE_SIZE : null,
			total: resData.total,
		};
	});
