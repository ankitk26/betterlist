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
const getArtistById_createServerFn_handler = createServerRpc(
	{
		id: "7ae46e726d2be4145426871e3793e78518b09a2dfefb5980c482a931f3628239",
		name: "getArtistById",
		filename: "src/server-fns/get-artist-by-id.ts",
	},
	(opts) => getArtistById.__executeServer(opts),
);
const getArtistById = createServerFn({
	method: "GET",
})
	.inputValidator(z.string())
	.handler(getArtistById_createServerFn_handler, async ({ data: artistId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		const endpoint = `/artists/${artistId}`;
		const res = await betterFetch(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});
		return res.data;
	});
export { getArtistById_createServerFn_handler };
