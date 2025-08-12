import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Playlist, Track } from "~/types";
import { getAuthSession } from "./get-auth-session";

type PlaylistItem = {
  items: { track: Track }[];
  next?: string;
};

export const getPlaylistById = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data: playlistId }) => {
    const session = await getAuthSession();

    const endpoint = `/playlists/${playlistId}`;

    const res = await betterFetch<Playlist>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    });

    const resData = res.data;

    if (!resData) {
      return null;
    }

    const playlist = {
      ...resData,
      tracks: resData.tracks.items.map((item) => item.track),
      count: resData.tracks.total,
    };

    let currUrl = resData.tracks.next;

    while (currUrl !== null) {
      if (!currUrl) {
        break;
      }
      // biome-ignore lint/nursery/noAwaitInLoop: ignore lint
      const nextSetResponse = await betterFetch<PlaylistItem>(currUrl, {
        baseURL: currUrl.startsWith("https") ? "" : spotifyApiBaseUrl,
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      });

      const nextSetData = nextSetResponse.data;

      if (nextSetData) {
        playlist.tracks.push(...nextSetData.items.map((item) => item.track));
      }

      currUrl = nextSetData?.next;
    }

    return playlist;
  });
