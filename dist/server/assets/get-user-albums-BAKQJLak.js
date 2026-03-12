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
const getUserAlbums_createServerFn_handler = createServerRpc(
	{
		id: "56c966ddcd29e9e01ec92571559dc2af6685a4d2f6ec2781df39c32408736144",
		name: "getUserAlbums",
		filename: "src/server-fns/get-user-albums.ts",
	},
	(opts) => getUserAlbums.__executeServer(opts),
);
const getUserAlbums = createServerFn({
	method: "GET",
}).handler(getUserAlbums_createServerFn_handler, async () => {
	const session = await getAuthSession();
	if (!session) {
		throw new Error("Invalid request");
	}
	const endpoint = "/me/albums?market=from_token&limit=50";
	const res = await betterFetch(endpoint, {
		baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
		headers: {
			Authorization: `Bearer ${session.user.accessToken}`,
		},
	});
	return res.data?.items;
});
export { getUserAlbums_createServerFn_handler };
