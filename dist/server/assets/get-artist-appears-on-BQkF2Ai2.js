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
const getArtistAppearsOn_createServerFn_handler = createServerRpc(
	{
		id: "1e30eab7ba86e9a14339424dba5fdcaf9a72cd77dfb32d305a32e4546f8bc002",
		name: "getArtistAppearsOn",
		filename: "src/server-fns/get-artist-appears-on.ts",
	},
	(opts) => getArtistAppearsOn.__executeServer(opts),
);
const getArtistAppearsOn = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		getArtistAppearsOn_createServerFn_handler,
		async ({ data: artistId }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/artists/${artistId}/albums?include_groups=appears_on`;
			const res = await betterFetch(endpoint, {
				baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			return res.data?.items;
		},
	);
export { getArtistAppearsOn_createServerFn_handler };
