import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { spotifyApiBaseUrl } from "~/static/constants"
import { getAuthSession } from "./get-auth-session"

export const addTracksToPlaylist = createServerFn({ method: "POST" })
  .validator(
    z.object({
      trackIds: z.array(z.string()),
      playlistIds: z.array(z.string()),
    }),
  )
  .handler(async ({ data }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    if (data.playlistIds.length === 0) {
      throw new Error("Need playlists")
    }

    if (data.trackIds.length === 0) {
      throw new Error("Need tracks")
    }

    if (data.playlistIds.length > 5) {
      throw new Error("Can select 5 playlists at a time")
    }

    // Process tracks in batches of 100
    const batchSize = 100
    const trackBatches = []

    for (let i = 0; i < data.trackIds.length; i += batchSize) {
      trackBatches.push(data.trackIds.slice(i, i + batchSize))
    }

    for (const playlistId of data.playlistIds) {
      for (const trackBatch of trackBatches) {
        const formattedTrackIds = trackBatch.map(
          (trackId) => `spotify:track:${trackId}`,
        )

        const endpoint = `/playlists/${playlistId}/tracks`

        const { error } = await betterFetch(endpoint, {
          method: "POST",
          baseURL: spotifyApiBaseUrl,
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: {
            uris: formattedTrackIds,
          },
        })

        if (error) {
          console.error(error)
          throw new Error("Something went wrong")
        }
      }
    }
  })
