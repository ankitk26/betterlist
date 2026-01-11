import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Album } from "~/types"
import { getAuthSession } from "./get-auth-session"

export const getArtistCompilation = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data: artistId }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = `/artists/${artistId}/albums?include_groups=compilation`

    const res = await betterFetch<{ items: Album[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data?.items
  })
