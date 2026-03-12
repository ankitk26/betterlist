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
const getAlbumById_createServerFn_handler = createServerRpc(
	{
		id: "5752ecb259387305714e99c3edd316ae3635dc78d3de14b6128f8841e3f57074",
		name: "getAlbumById",
		filename: "src/server-fns/get-album-by-id.ts",
	},
	(opts) => getAlbumById.__executeServer(opts),
);
const getAlbumById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(getAlbumById_createServerFn_handler, async ({ data: albumId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		const endpoint = `/albums/${albumId}`;
		const res = await betterFetch(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});
		return res.data;
	});
export { getAlbumById_createServerFn_handler };
