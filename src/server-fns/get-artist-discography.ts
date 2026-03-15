import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Album } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getArtistDiscography = createServerFn({ method: "GET" })
	.inputValidator(z.string())
	.handler(async ({ data: artistId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const albumsEndpoint = `/artists/${artistId}/albums?include_groups=album`;
		const singlesEndpoint = `/artists/${artistId}/albums?include_groups=single`;

		const { data: albumData, error: albumError } = await betterFetch<{
			items: Album[];
		}>(albumsEndpoint, {
			baseURL: albumsEndpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});

		const { data: singleData, error: singleError } = await betterFetch<{
			items: Album[];
		}>(singlesEndpoint, {
			baseURL: singlesEndpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});

		if (albumError) {
			console.log(albumError);
		}

		if (singleError) {
			console.log(singleError);
		}

		const albums = albumData?.items;
		const singles = singleData?.items;

		// Merge albums and singles
		const merged = [
			...(Array.isArray(albums) ? albums : []),
			...(Array.isArray(singles) ? singles : []),
		];

		// Sort by release_date in descending order (most recent first)
		merged.sort((a, b) => {
			// Convert release_date to Date objects for accurate comparison
			const dateA = new Date(a.release_date);
			const dateB = new Date(b.release_date);
			return dateB.getTime() - dateA.getTime();
		});

		return merged;
	});
