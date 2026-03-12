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
const getPlaylistById_createServerFn_handler = createServerRpc(
	{
		id: "025caab3224966d1f821c8e8d9321fa8cc60cfd90d2c7c9ba5040fd2d69d7a34",
		name: "getPlaylistById",
		filename: "src/server-fns/get-playlist-by-id.ts",
	},
	(opts) => getPlaylistById.__executeServer(opts),
);
const getPlaylistById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		getPlaylistById_createServerFn_handler,
		async ({ data: playlistId }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/playlists/${playlistId}`;
			const res = await betterFetch(endpoint, {
				baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			const resData = res.data;
			if (!resData) {
				return null;
			}
			const playlist = {
				...resData,
				tracks: resData.tracks.items.map((item) => item.track),
				count: resData.tracks.total,
			};
			let currUrl = resData.tracks.next;
			while (currUrl !== null) {
				if (!currUrl) {
					break;
				}
				const nextSetResponse = await betterFetch(currUrl, {
					baseURL: currUrl.startsWith("https") ? "" : spotifyApiBaseUrl,
					headers: {
						Authorization: `Bearer ${session.user.accessToken}`,
					},
				});
				const nextSetData = nextSetResponse.data;
				if (nextSetData) {
					playlist.tracks.push(...nextSetData.items.map((item) => item.track));
				}
				currUrl = nextSetData?.next;
			}
			return playlist;
		},
	);
export { getPlaylistById_createServerFn_handler };
