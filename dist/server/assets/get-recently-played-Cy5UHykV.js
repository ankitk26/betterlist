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
const getRecentlyPlayed_createServerFn_handler = createServerRpc(
	{
		id: "f6aaafb19c1b7b0933f39636c0583ee7257a0033b20bf9b43f6784d6fd4fa46f",
		name: "getRecentlyPlayed",
		filename: "src/server-fns/get-recently-played.ts",
	},
	(opts) => getRecentlyPlayed.__executeServer(opts),
);
const getRecentlyPlayed = createServerFn({
	method: "GET",
}).handler(getRecentlyPlayed_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/player/recently-played?limit=10";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	return res.data?.items.map((item) => item.track);
});
export { getRecentlyPlayed_createServerFn_handler };
