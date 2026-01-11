import { Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import { MusicIcon } from "lucide-react"
import { Fragment } from "react/jsx-runtime"
import { cn } from "~/lib/utils"
import type { Track } from "~/types"

type Props = {
  track: Track
  showAlbum?: boolean
  showCover?: boolean
  showSubtitle?: boolean
}

export default function TracksTableTitleColumn({
  track,
  showAlbum,
  showCover,
  showSubtitle,
}: Props) {
  return (
    <div
      className={cn(
        "flex w-full items-center",
        showAlbum ? "col-span-6" : "col-span-10",
      )}
    >
      <div className="flex w-full items-center gap-4">
        {showCover &&
          (track.album.images && track.album.images.length > 0 ? (
            <div className="h-10 w-10 shrink-0">
              <Image
                alt={track.name}
                className="h-10 w-10 rounded object-contain"
                height={40}
                src={track.album.images?.[0].url as string}
                width={40}
              />
            </div>
          ) : (
            <MusicIcon
              className="h-10 w-10 rounded bg-input/30 p-2"
              size={16}
            />
          ))}

        <div className="w-full truncate pr-3">
          <span className="w-10/12 truncate font-medium text-sm">
            {track.name}
          </span>

          {showSubtitle && (
            <div className="flex w-full flex-wrap items-center gap-1 pr-3 text-muted-foreground text-sm">
              <span className="truncate">
                {track.artists.map((artist, index) => (
                  <Fragment key={artist.id + track.id}>
                    <Link
                      className="hover:underline"
                      key={artist.id + track.id}
                      params={{ artistId: artist.id }}
                      to="/artists/$artistId"
                    >
                      {artist.name}
                    </Link>
                    {index !== track.artists.length - 1 && ", "}
                  </Fragment>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
