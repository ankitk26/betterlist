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
const paramSchema = z.object({
	range: z
		.enum(["long_term", "short_term", "medium_term"])
		.default("short_term"),
	limit: z.number().default(50),
});
const getUserTopTracks_createServerFn_handler = createServerRpc(
	{
		id: "5157fd1d2a101d6e979caac7aa4b254b4a84a99ab9baafc093b4db50f476af86",
		name: "getUserTopTracks",
		filename: "src/server-fns/get-user-top-tracks.ts",
	},
	(opts) => getUserTopTracks.__executeServer(opts),
);
const getUserTopTracks = createServerFn({
	method: "GET",
})
	.inputValidator(paramSchema)
	.handler(getUserTopTracks_createServerFn_handler, async ({ data }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}
		const endpoint = `/me/top/tracks?time_range=${data.range}&limit=${data.limit}`;
		const res = await betterFetch(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});
		return res.data?.items;
	});
export { getUserTopTracks_createServerFn_handler };
