import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Artist } from "~/types"
import { getAuthSession } from "./get-auth-session"

export const getUserArtists = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = "/me/following?type=artist&limit=50"

    const res = await betterFetch<{ artists: { items: Artist[] } }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data?.artists.items
  },
)
