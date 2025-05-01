import { Music } from "lucide-react";
import { Track } from "~/types";

type Props = {
  tracks: Track[];
};

export default function TrackCards({ tracks }: Props) {
  return (
    <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
      {tracks
        ?.filter((track) => track !== null)
        .map((track: Track) => (
          <div
            key={track.id}
            className="h-full p-4 transition duration-300 rounded-lg group/item bg-input/30 text-secondary-foreground hover:bg-secondary"
          >
            <div className="relative">
              {track.album.images.length > 0 ? (
                <img
                  src={track.album.images[0].url}
                  alt={track.name}
                  height={160}
                  width={160}
                  className="object-cover w-full rounded-md aspect-square"
                />
              ) : (
                <div className="w-full h-40">
                  <Music className="w-full h-full bg-secondary" />
                </div>
              )}
            </div>
            <h3 className="mt-5 font-bold truncate">{track.name}</h3>
            <h6 className="mt-1 text-xs font-semibold truncate text-muted-foreground">
              {track.artists[0].name}
            </h6>
          </div>
        ))}
    </div>
  );
}
