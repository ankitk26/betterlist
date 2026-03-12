import { betterFetch } from "@better-fetch/fetch";
import { z } from "zod";
import { c as createServerFn } from "../server.js";
import { s as spotifyApiBaseUrl } from "./constants-thbEqHwL.js";
import { c as createServerRpc } from "./createServerRpc-Bd3B-Ah9.js";
import { g as getAuthSession } from "./get-auth-session-C8yCND15.js";
import "./createSsrRpc-DFX_9v9X.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const deleteTracksFromPlaylist_createServerFn_handler = createServerRpc(
	{
		id: "384249be7689a7dac4d121c177afad1a5d680df2ec171ead8a177b9e338a5625",
		name: "deleteTracksFromPlaylist",
		filename: "src/server-fns/delete-tracks-from-playlist.ts",
	},
	(opts) => deleteTracksFromPlaylist.__executeServer(opts),
);
const deleteTracksFromPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			trackIds: z.array(z.string()),
			playlistId: z.string(),
		}),
	)
	.handler(
		deleteTracksFromPlaylist_createServerFn_handler,
		async ({ data }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			if (!data.playlistId) {
				throw new Error("Need playlist");
			}
			if (data.trackIds.length === 0) {
				throw new Error("Need tracks");
			}
			const batchSize = 100;
			const trackBatches = [];
			for (let i = 0; i < data.trackIds.length; i += batchSize) {
				trackBatches.push(data.trackIds.slice(i, i + batchSize));
			}
			for (const trackBatch of trackBatches) {
				const formattedTrackIds = trackBatch.map((trackId) => ({
					uri: `spotify:track:${trackId}`,
				}));
				const endpoint = `/playlists/${data.playlistId}/tracks`;
				const { error } = await betterFetch(endpoint, {
					method: "DELETE",
					baseURL: spotifyApiBaseUrl,
					headers: {
						Authorization: `Bearer ${session.user.accessToken}`,
					},
					body: {
						tracks: formattedTrackIds,
					},
				});
				if (error) {
					console.error(error);
					throw new Error("Something went wrong");
				}
			}
		},
	);
export { deleteTracksFromPlaylist_createServerFn_handler };
