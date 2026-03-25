import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import type { Track } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getArtistTopTracks = createServerFn({ method: "GET" })
	.inputValidator(z.string())
	.handler(async ({ data: artistId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = `/artists/${artistId}/top-tracks?market=from_token`;

		const { data: responseData, error } = await betterFetch<{
			tracks: Track[];
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

		return responseData.tracks;
	});
