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
const getArtistDiscography_createServerFn_handler = createServerRpc(
	{
		id: "c6ca6a3ecbf482583230a78730b69a0999fac3480e176a845871e860308dae58",
		name: "getArtistDiscography",
		filename: "src/server-fns/get-artist-discography.ts",
	},
	(opts) => getArtistDiscography.__executeServer(opts),
);
const getArtistDiscography = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		getArtistDiscography_createServerFn_handler,
		async ({ data: artistId }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const albumsEndpoint = `/artists/${artistId}/albums?include_groups=album`;
			const singlesEndpoint = `/artists/${artistId}/albums?include_groups=single`;
			const albumResponse = await betterFetch(albumsEndpoint, {
				baseURL: albumsEndpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			const singleResponse = await betterFetch(singlesEndpoint, {
				baseURL: singlesEndpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			const albums = albumResponse.data?.items;
			const singles = singleResponse.data?.items;
			const merged = [
				...(Array.isArray(albums) ? albums : []),
				...(Array.isArray(singles) ? singles : []),
			];
			merged.sort((a, b) => {
				const dateA = new Date(a.release_date);
				const dateB = new Date(b.release_date);
				return dateB.getTime() - dateA.getTime();
			});
			return merged;
		},
	);
export { getArtistDiscography_createServerFn_handler };
