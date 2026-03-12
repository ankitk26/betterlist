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
const createPlaylist_createServerFn_handler = createServerRpc(
	{
		id: "363cdb5c11c9d0c740d941ea8775661365f1ef30b231b0155e2544d43b7efb32",
		name: "createPlaylist",
		filename: "src/server-fns/create-playlist.ts",
	},
	(opts) => createPlaylist.__executeServer(opts),
);
const createPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(z.string())
	.handler(
		createPlaylist_createServerFn_handler,
		async ({ data: playlistName }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/users/${session.user.accountId}/playlists`;
			const { data: newPlaylist, error } = await betterFetch(endpoint, {
				method: "POST",
				baseURL: spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
				body: {
					name: playlistName,
				},
			});
			if (error) {
				console.error(error);
				throw new Error("Something went wrong");
			}
			if (!newPlaylist) {
				return null;
			}
			const formattedPlaylist = {
				id: newPlaylist.id,
				images: newPlaylist.images,
				name: newPlaylist.name,
				owner: newPlaylist.owner,
				tracks: newPlaylist.tracks,
				type: newPlaylist.type,
				description: newPlaylist.description,
				items: newPlaylist.items,
				total: newPlaylist.total,
			};
			return formattedPlaylist;
		},
	);
export { createPlaylist_createServerFn_handler };
