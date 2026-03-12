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
const getUserPlaylists_createServerFn_handler = createServerRpc(
	{
		id: "1f37ddb89f07acc8dd84608be7e784a04cba6e0181085e959514b86c5380f439",
		name: "getUserPlaylists",
		filename: "src/server-fns/get-user-playlists.ts",
	},
	(opts) => getUserPlaylists.__executeServer(opts),
);
const getUserPlaylists = createServerFn({
	method: "GET",
}).handler(getUserPlaylists_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/playlists";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	return res.data?.items;
});
export { getUserPlaylists_createServerFn_handler };
