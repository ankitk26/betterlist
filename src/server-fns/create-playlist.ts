import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import type { Playlist } from "~/types";
import { getAuthSession } from "./get-auth-session";

export const createPlaylist = createServerFn({ method: "POST" })
  .validator((data: string) => data)
  .handler(async ({ data: playlistName }) => {
    const session = await getAuthSession();
    if (!session) {
      throw new Error("Invalid request");
    }

    const endpoint = `/users/${session.user.accountId}/playlists`;

    const { data: newPlaylist, error } = await betterFetch<Playlist>(endpoint, {
      method: "POST",
      baseURL: spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
      body: {
        name: playlistName,
      },
    });

    if (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }

    if (!newPlaylist) {
      return null;
    }

    const formattedPlaylist: Playlist = {
      id: newPlaylist.id,
      images: newPlaylist.images,
      name: newPlaylist.name,
      owner: newPlaylist.owner,
      tracks: newPlaylist.tracks,
      type: newPlaylist.type,
      description: newPlaylist.description,
      items: newPlaylist.items,
      total: newPlaylist.total,
    };

    return formattedPlaylist;
  });
