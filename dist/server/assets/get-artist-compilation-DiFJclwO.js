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
const getArtistCompilation_createServerFn_handler = createServerRpc(
	{
		id: "1424f9fc0d937433ea3c701e92b4d9492a2efcd28a7145e78fb245ebc833ee7b",
		name: "getArtistCompilation",
		filename: "src/server-fns/get-artist-compilation.ts",
	},
	(opts) => getArtistCompilation.__executeServer(opts),
);
const getArtistCompilation = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(
		getArtistCompilation_createServerFn_handler,
		async ({ data: artistId }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/artists/${artistId}/albums?include_groups=compilation`;
			const res = await betterFetch(endpoint, {
				baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
			});
			return res.data?.items;
		},
	);
export { getArtistCompilation_createServerFn_handler };
