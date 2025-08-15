import { Music } from "lucide-react";
import type { Track } from "~/types";

type Props = {
  tracks: Track[];
};

export default function TrackCards({ tracks }: Props) {
  return (
    <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
      {tracks
        ?.filter((track) => track !== null)
        .map((track: Track) => (
          <div
            className="group/item h-full rounded-lg border bg-input/30 p-4 text-secondary-foreground transition duration-300 hover:bg-secondary dark:border-none"
            key={track.id}
          >
            <div className="relative">
              {track.album.images.length > 0 ? (
                <img
                  alt={track.name}
                  className="aspect-square w-full rounded-md object-cover"
                  height={160}
                  src={track.album.images[0].url}
                  width={160}
                />
              ) : (
                <div className="h-40 w-full">
                  <Music className="h-full w-full bg-secondary" />
                </div>
              )}
            </div>
            <h3 className="mt-5 truncate font-bold">{track.name}</h3>
            <h6 className="mt-1 truncate font-semibold text-muted-foreground text-xs">
              {track.artists[0].name}
            </h6>
          </div>
        ))}
    </div>
  );
}
