import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Album, Artist, Playlist, Track } from "~/types"
import { getAuthSession } from "./get-auth-session"

const paramSchema = z.object({
  type: z.enum(["artist", "album", "track", "playlist", "all"]).default("all"),
  query: z.string(),
  limit: z.number().default(5),
})

export type SearchItemsParams = z.input<typeof paramSchema>

type SearchResults = {
  tracks: {
    items: Track[]
  }
  artists: {
    items: Artist[]
  }
  albums: {
    items: Album[]
  }
  playlists: {
    items: Playlist[] | null[]
  }
}

export const getSearchItems = createServerFn({ method: "GET" })
  .inputValidator(paramSchema)
  .handler(async ({ data }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    let searchType: string = data.type
    if (data.type === "all") {
      searchType = "album,artist,track,playlist"
    }

    const endpoint = `/search?q=${data.query}&market=from_token&type=${searchType}&limit=${data.limit}`

    const res = await betterFetch<SearchResults>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return {
      tracks: res.data?.tracks?.items ?? [],
      artists: res.data?.artists?.items ?? [],
      albums: res.data?.albums?.items ?? [],
      playlists: res.data?.playlists?.items ?? [],
    }
  })
