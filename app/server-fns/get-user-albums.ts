import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import { Album } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const getUserAlbums = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession();

    const endpoint = "/me/albums?market=from_token&limit=50";

    const res = await betterFetch<{ items: { album: Album }[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    return res.data?.items;
  }
);
