import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Track } from "~/types";
import { getAuthSession } from "./get-auth-session";

export type LikedSongs = {
  total: number;
  items: {
    track: Track;
  }[];
  next: string | null;
};

export const getLikedSongsCount = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession();

    const endpoint = "/me/tracks?limit=50";

    const res = await betterFetch<LikedSongs>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    if (!res.data) {
      return {
        count: 0,
      };
    }

    return {
      count: res.data.total,
    };
  }
);
