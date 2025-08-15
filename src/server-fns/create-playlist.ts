import { betterFetch } from "@better-fetch/fetch";
import { createServerFn } from "@tanstack/react-start";
import { spotifyApiBaseUrl } from "~/static/constants";
import { getAuthSession } from "./get-auth-session";

export const createPlaylist = createServerFn({ method: "POST" })
  .validator((data: string) => data)
  .handler(async ({ data: playlistName }) => {
    const session = await getAuthSession();

    const endpoint = `/users/${session?.user.accountId}/playlists`;

    const { error } = await betterFetch(endpoint, {
      method: "POST",
      baseURL: spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
      body: {
        name: playlistName,
      },
    });

    if (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }

    return 201;
  });
