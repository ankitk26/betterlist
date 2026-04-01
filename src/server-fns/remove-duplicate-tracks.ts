import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SPOTIFY_API_BASE_URL } from "~/static/constants";
import { getAuthSession } from "./get-auth-session";

export const removeDuplicateTracks = createServerFn({ method: "POST" })
	.inputValidator(
		z.object({
			playlistId: z.string(),
			duplicates: z.array(
				z.object({
					trackId: z.string(),
					allPositions: z.array(z.number()),
					positionsToKeep: z.array(z.number()),
				}),
			),
		}),
	)
	.handler(async ({ data }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		if (!data.playlistId) {
			throw new Error("Need playlist");
		}

		if (data.duplicates.length === 0) {
			throw new Error("Need duplicates");
		}

		// Filter to only process tracks where user selected at least one position to keep
		// If no positions selected for a track, leave it completely untouched
		const duplicatesToProcess = data.duplicates.filter(
			(d) => d.positionsToKeep.length > 0,
		);

		if (duplicatesToProcess.length === 0) {
			return { success: true, tracksReAdded: 0 };
		}

		// Step 1: Delete duplicate track instances (only for tracks being processed)
		const allTrackIdsToDelete = duplicatesToProcess.map((d) => d.trackId);

		// Process deletions in batches of 100
		const batchSize = 100;
		for (let i = 0; i < allTrackIdsToDelete.length; i += batchSize) {
			const trackBatch = allTrackIdsToDelete.slice(i, i + batchSize);
			const formattedTrackIds = trackBatch.map((trackId) => ({
				uri: `spotify:track:${trackId}`,
			}));

			const deleteEndpoint = `/playlists/${data.playlistId}/items`;

			const { error: deleteError } = await betterFetch(deleteEndpoint, {
				method: "DELETE",
				baseURL: SPOTIFY_API_BASE_URL,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
				body: {
					items: formattedTrackIds,
				},
			});

			if (deleteError) {
				console.error("Error deleting tracks:", deleteError);
				throw new Error("Failed to delete tracks");
			}
		}

		// Step 2: Collect all positions to keep with their track IDs
		const tracksToReAdd = duplicatesToProcess.flatMap((d) =>
			d.positionsToKeep.map((position) => ({
				trackId: d.trackId,
				originalPosition: position,
			})),
		);

		// Sort by original position to process in order
		tracksToReAdd.sort((a, b) => a.originalPosition - b.originalPosition);

		// Step 3: Calculate adjusted positions and re-add tracks
		// Only consider deleted positions from tracks being processed
		const allDeletedPositions = duplicatesToProcess.flatMap(
			(d) => d.allPositions,
		);
		allDeletedPositions.sort((a, b) => a - b);

		// Add tracks one by one with calculated positions
		let insertedCount = 0;

		for (const trackToAdd of tracksToReAdd) {
			// Calculate adjusted position:
			// (original position - how many deleted before it) + how many already inserted
			const deletedBeforePosition = allDeletedPositions.filter(
				(pos) => pos < trackToAdd.originalPosition,
			).length;

			const adjustedPosition =
				trackToAdd.originalPosition - deletedBeforePosition + insertedCount;

			const formattedTrackId = `spotify:track:${trackToAdd.trackId}`;
			const addEndpoint = `/playlists/${data.playlistId}/items`;

			const { error: addError } = await betterFetch(addEndpoint, {
				method: "POST",
				baseURL: SPOTIFY_API_BASE_URL,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
				body: {
					uris: [formattedTrackId],
					position: adjustedPosition,
				},
			});

			if (addError) {
				console.error("Error adding track:", addError);
				throw new Error("Failed to add track");
			}

			insertedCount++;
		}

		return { success: true, tracksReAdded: tracksToReAdd.length };
	});
