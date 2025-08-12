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

export const getLikedSongs = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession();

    const endpoint = "/me/tracks?limit=50";

    const res = await betterFetch<LikedSongs>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    const resData = res.data;

    if (!resData) {
      return {
        total: 0,
        tracks: [] as Track[],
      };
    }

    const finalData = { total: resData.total, items: resData.items };
    let currUrl = resData?.next;

    while (currUrl !== null) {
      // biome-ignore lint/nursery/noAwaitInLoop: Ignore lint
      const nextData = await betterFetch<LikedSongs>(currUrl, {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      }).then((nextRes) => nextRes.data);

      if (!nextData) {
        continue;
      }

      finalData.items.push(...nextData.items);
      currUrl = nextData.next;
    }

    return {
      total: finalData.total,
      items: finalData.items.map((item) => item.track),
    };
  }
);
