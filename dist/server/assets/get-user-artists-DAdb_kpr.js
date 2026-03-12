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
const getUserArtists_createServerFn_handler = createServerRpc(
	{
		id: "75e2d9934b7cdc5fa1f312fb614febaf72937143a997684e1a01616b508d9184",
		name: "getUserArtists",
		filename: "src/server-fns/get-user-artists.ts",
	},
	(opts) => getUserArtists.__executeServer(opts),
);
const getUserArtists = createServerFn({
	method: "GET",
}).handler(getUserArtists_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/following?type=artist&limit=50";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	return res.data?.artists.items;
});
export { getUserArtists_createServerFn_handler };
