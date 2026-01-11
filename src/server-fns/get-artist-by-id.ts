import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Artist } from "~/types"
import { getAuthSession } from "./get-auth-session"

export const getArtistById = createServerFn({ method: "GET" })
  .inputValidator(z.string())
  .handler(async ({ data: artistId }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = `/artists/${artistId}`

    const res = await betterFetch<Artist>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data
  })
