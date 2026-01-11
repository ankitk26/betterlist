import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Artist } from "~/types"
import { getAuthSession } from "./get-auth-session"

const paramSchema = z.object({
  range: z
    .enum(["long_term", "short_term", "medium_term"])
    .default("short_term"),
  limit: z.number().default(50),
})

export type UserTopArtistsParams = z.input<typeof paramSchema>

export const getUserTopArtists = createServerFn({ method: "GET" })
  .validator(paramSchema)
  .handler(async ({ data }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = `/me/top/artists?time_range=${data.range}&limit=${data.limit}`

    const res = await betterFetch<{ items: Artist[] }>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data?.items
  })
