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
const getLikedSongs_createServerFn_handler = createServerRpc(
	{
		id: "5db58611bdde2b2256eb3bef7e693e8a3e5025c87b03815ca3c7cd6ad4194f65",
		name: "getLikedSongs",
		filename: "src/server-fns/get-liked-songs.ts",
	},
	(opts) => getLikedSongs.__executeServer(opts),
);
const getLikedSongs = createServerFn({
	method: "GET",
}).handler(getLikedSongs_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/tracks?limit=5";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	const resData = res.data;
	if (!resData) {
		return {
			total: 0,
			tracks: [],
		};
	}
	const finalData = {
		total: resData.total,
		items: resData.items,
	};
	return {
		total: finalData.total,
		items: finalData.items.map((item) => item.track),
	};
});
export { getLikedSongs_createServerFn_handler };
