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
const renamePlaylist_createServerFn_handler = createServerRpc(
	{
		id: "30ad9d80671907ccf8192d6e3f9fc91115401a75fd6270515e6f65762c4e9a7a",
		name: "renamePlaylist",
		filename: "src/server-fns/rename-playlist.ts",
	},
	(opts) => renamePlaylist.__executeServer(opts),
);
const renamePlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	)
	.handler(
		renamePlaylist_createServerFn_handler,
		async ({ data: { id, name } }) => {
			const session = await getAuthSession();
			if (!session) {
				throw new Error("Invalid request");
			}
			const endpoint = `/playlists/${id}`;
			const { error } = await betterFetch(endpoint, {
				method: "PUT",
				baseURL: spotifyApiBaseUrl,
				headers: {
					Authorization: `Bearer ${session.user.accessToken}`,
				},
				body: {
					name,
				},
			});
			if (error) {
				console.error(error);
				throw new Error("Something went wrong");
			}
			return name;
		},
	);
export { renamePlaylist_createServerFn_handler };
