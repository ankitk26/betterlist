import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Album } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getAlbumById = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data: albumId }) => {
    const session = await getAuthSession();

    const endpoint = `/albums/${albumId}`;

    const res = await betterFetch<Album>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return res.data;
  });
