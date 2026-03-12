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
const addTracksToPlaylist_createServerFn_handler = createServerRpc(
	{
		id: "e23d587e243ebaac1e4a08a905c15826df2c2d3c0870b971d8ca6f1b578906fa",
		name: "addTracksToPlaylist",
		filename: "src/server-fns/add-tracks-to-playlist.ts",
	},
	(opts) => addTracksToPlaylist.__executeServer(opts),
);
const addTracksToPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			trackIds: z.array(z.string()),
			playlistIds: z.array(z.string()),
		}),
	)
	.handler(addTracksToPlaylist_createServerFn_handler, async ({ data }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		if (data.playlistIds.length === 0) {
			throw new Error("Need playlists");
		}
		if (data.trackIds.length === 0) {
			throw new Error("Need tracks");
		}
		if (data.playlistIds.length > 5) {
			throw new Error("Can select 5 playlists at a time");
		}
		const batchSize = 100;
		const trackBatches = [];
		for (let i = 0; i < data.trackIds.length; i += batchSize) {
			trackBatches.push(data.trackIds.slice(i, i + batchSize));
		}
		for (const playlistId of data.playlistIds) {
			for (const trackBatch of trackBatches) {
				const formattedTrackIds = trackBatch.map(
					(trackId) => `spotify:track:${trackId}`,
				);
				const endpoint = `/playlists/${playlistId}/tracks`;
				const { error } = await betterFetch(endpoint, {
					method: "POST",
					baseURL: spotifyApiBaseUrl,
					headers: {
						Authorization: `Bearer ${session.user.accessToken}`,
					},
					body: {
						uris: formattedTrackIds,
					},
				});
				if (error) {
					console.error(error);
					throw new Error("Something went wrong");
				}
			}
		}
	});
export { addTracksToPlaylist_createServerFn_handler };
