import { betterFetch } from "@better-fetch/fetch"
import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"
import { spotifyApiBaseUrl } from "~/static/constants"
import { getAuthSession } from "./get-auth-session"

export const deleteTracksFromPlaylist = createServerFn({ method: "POST" })
  .validator(
    z.object({
      trackIds: z.array(z.string()),
      playlistId: z.string(),
    }),
  )
  .handler(async ({ data }) => {
    const session = await getAuthSession()
    if (!session) {
      throw new Error("Invalid request")
    }

    if (!data.playlistId) {
      throw new Error("Need playlist")
    }

    if (data.trackIds.length === 0) {
      throw new Error("Need tracks")
    }

    // Process tracks in batches of 100
    const batchSize = 100
    const trackBatches = []

    for (let i = 0; i < data.trackIds.length; i += batchSize) {
      trackBatches.push(data.trackIds.slice(i, i + batchSize))
    }

    for (const trackBatch of trackBatches) {
      const formattedTrackIds = trackBatch.map((trackId) => ({
        uri: `spotify:track:${trackId}`,
      }))

      const endpoint = `/playlists/${data.playlistId}/tracks`

      const { error } = await betterFetch(endpoint, {
        method: "DELETE",
        baseURL: spotifyApiBaseUrl,
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        body: {
          tracks: formattedTrackIds,
        },
      })

      if (error) {
        console.error(error)
        throw new Error("Something went wrong")
      }
    }
  })
