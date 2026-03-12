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
const getArtistTopTracks_createServerFn_handler = createServerRpc(
	{
		id: "a2d5bb7304e768c3e5684b02f0555929a2a6c7b36a678a990a91b0aa56230f70",
		name: "getArtistTopTracks",
		filename: "src/server-fns/get-artist-top-tracks.ts",
	},
	(opts) => getArtistTopTracks.__executeServer(opts),
);
const getArtistTopTracks = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		getArtistTopTracks_createServerFn_handler,
		async ({ data: artistId }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/artists/${artistId}/top-tracks?market=from_token`;
			const res = await betterFetch(endpoint, {
				baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			return res.data?.tracks;
		},
	);
export { getArtistTopTracks_createServerFn_handler };
