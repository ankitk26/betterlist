import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { spotifyApiBaseUrl } from "~/static/constants"
import type { Album } from "~/types"
import { getAuthSession } from "./get-auth-session"
import { z } from "zod"

export const getAlbumById = createServerFn({ method: "GET" })
  .inputValidator(z.string())
  .handler(async ({ data: albumId }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    const endpoint = `/albums/${albumId}`

    const res = await betterFetch<Album>(endpoint, {
      baseURL: endpoint.startsWith("https") ? "" : spotifyApiBaseUrl,
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })

    return res.data
  })
