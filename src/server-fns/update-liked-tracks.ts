import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { spotifyApiBaseUrl } from "~/static/constants";
import { getAuthSession } from "./get-auth-session";

export const updateLikedTracks = createServerFn({ method: "POST" })
	.inputValidator(
		z.object({
			trackIds: z.array(z.string()),
			action: z.enum(["ADD", "DELETE"]),
		}),
	)
	.handler(async ({ data }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		if (data.trackIds.length === 0) {
			throw new Error("Need tracks");
		}

		// Process tracks in batches of 40
		const batchSize = 40;
		const trackBatches = [];

		for (let i = 0; i < data.trackIds.length; i += batchSize) {
			trackBatches.push(data.trackIds.slice(i, i + batchSize));
		}

		for (const trackBatch of trackBatches) {
			const formattedTrackIds = trackBatch.map(
				(trackId) => `spotify:track:${trackId}`,
			);

			const endpoint = `/me/library`;

			const { error } = await betterFetch(endpoint, {
				method: data.action === "ADD" ? "PUT" : "DELETE",
				baseURL: spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
				query: {
					uris: formattedTrackIds.join(","),
				},
			});

			if (error) {
				console.error(error);
				throw new Error("Something went wrong");
			}
		}
	});
