import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Album } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getAlbumById = createServerFn({ method: "GET" })
	.inputValidator(z.string())
	.handler(async ({ data: albumId }) => {
		const session = await getAuthSession();
		if (!session) {
			throw new Error("Invalid request");
		}

		const endpoint = `/albums/${albumId}`;

		const { data: responseData, error } = await betterFetch<Album>(endpoint, {
			baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
			headers: {
				Authorization: `Bearer ${session.user.accessToken}`,
			},
		});

		if (error) {
			console.log(error);
			return null;
		}

		return responseData;
	});
