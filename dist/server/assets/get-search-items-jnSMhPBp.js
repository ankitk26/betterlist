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
const paramSchema = z.object({
	type: z.enum(["artist", "album", "track", "playlist", "all"]).default("all"),
	query: z.string(),
	limit: z.number().default(5),
});
const getSearchItems_createServerFn_handler = createServerRpc(
	{
		id: "d54b0dc0381cf89927b3b255db57a5b1d4f21644e6521ef4d1f02187b51f5f06",
		name: "getSearchItems",
		filename: "src/server-fns/get-search-items.ts",
	},
	(opts) => getSearchItems.__executeServer(opts),
);
const getSearchItems = createServerFn({
	method: "GET",
})
	.inputValidator(paramSchema)
	.handler(getSearchItems_createServerFn_handler, async ({ data }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		let searchType = data.type;
		if (data.type === "all") {
			searchType = "album,artist,track,playlist";
		}
		const endpoint = `/search?q=${data.query}&market=from_token&type=${searchType}&limit=${data.limit}`;
		const res = await betterFetch(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});
		return {
			tracks: res.data?.tracks?.items ?? [],
			artists: res.data?.artists?.items ?? [],
			albums: res.data?.albums?.items ?? [],
			playlists: res.data?.playlists?.items ?? [],
		};
	});
export { getSearchItems_createServerFn_handler };
