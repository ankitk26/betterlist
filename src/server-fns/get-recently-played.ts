import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Track } from "~/types"
import { getAuthSession } from "./get-auth-session"

export const getRecentlyPlayed = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = "/me/player/recently-played?limit=10"

    const res = await betterFetch<{ items: { track: Track }[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data?.items.map((item) => item.track)
  },
)
