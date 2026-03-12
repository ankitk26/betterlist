import { betterFetch } from "@better-fetch/fetch";
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
const getLikedSongsCount_createServerFn_handler = createServerRpc(
	{
		id: "80dcf5b23bdbbe977496ffd856f47f7ab5ee3c1d18dd3d1c155982b005cfd520",
		name: "getLikedSongsCount",
		filename: "src/server-fns/get-liked-songs-count.ts",
	},
	(opts) => getLikedSongsCount.__executeServer(opts),
);
const getLikedSongsCount = createServerFn({
	method: "GET",
}).handler(getLikedSongsCount_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/tracks?limit=50";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	if (!res.data) {
		return {
			count: 0,
		};
	}
	return {
		count: res.data.total,
	};
});
export { getLikedSongsCount_createServerFn_handler };
