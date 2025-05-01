import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { betterFetch } from "@better-fetch/fetch";
import { spotifyApiBaseUrl } from "~/static/constants";
import { getAuthSession } from "./get-auth-session";
import { Track } from "~/types";

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
