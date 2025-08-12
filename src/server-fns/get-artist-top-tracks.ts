import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Track } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getArtistTopTracks = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data: artistId }) => {
    const session = await getAuthSession();

    const endpoint = `/artists/${artistId}/top-tracks?market=from_token`;

    const res = await betterFetch<{ tracks: Track[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return res.data?.tracks;
  });
