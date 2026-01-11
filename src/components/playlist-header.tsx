import { Image } from "@unpic/react"
import { DotIcon, MusicIcon } from "lucide-react"
import type { getPlaylistById } from "~/server-fns/get-playlist-by-id"
import PlaylistDescription from "./playlist-description"

type Props = {
  playlist: NonNullable<Awaited<ReturnType<typeof getPlaylistById>>>
}

export default function PlaylistHeader({ playlist }: Props) {
  return (
    <div className="flex items-end gap-6">
      {(playlist.images?.length ?? 0) > 0 ? (
        <Image
          alt={playlist.name}
          className="h-64 w-64 rounded-lg object-cover shadow-xl ring-1 ring-border"
          height={256}
          src={playlist.images?.[0].url || "/placeholder.svg"}
          width={256}
        />
      ) : (
        <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-muted shadow-xl ring-1 ring-border">
          <MusicIcon className="h-24 w-24 text-muted-foreground" />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h5 className="font-bold text-muted-foreground text-xs uppercase">
          {playlist.type}
        </h5>
        <h2 className="font-bold text-6xl">{playlist.name}</h2>

        {playlist.description && playlist.description !== "null" && (
          <PlaylistDescription description={playlist.description} />
        )}

        <div className="flex items-center font-semibold text-sm">
          <span className="text-muted-foreground">
            {playlist.owner?.display_name}
          </span>
          {playlist.tracks.length > 0 && (
            <>
              <DotIcon className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {playlist.tracks.length.toLocaleString()} songs
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
