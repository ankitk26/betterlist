import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import { Playlist } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getUserPlaylists = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession();

    const endpoint = "/me/playlists";

    const res = await betterFetch<{ items: Playlist[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return res.data?.items;
  }
);
