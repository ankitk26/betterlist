import { useQuery } from "@tanstack/react-query";
import { AlbumIcon } from "lucide-react";
import { userTopTracksQuery } from "~/queries";
import { Skeleton } from "./ui/skeleton";

export default function UserTopTracks() {
  const { data, isPending } = useQuery(userTopTracksQuery({ limit: 9 }));

  if (isPending) {
    return Array.from({ length: 6 }).map(() => (
      <Skeleton
        className="col-span-4 h-16 w-full rounded-md"
        key={`top_tracks_${crypto.randomUUID()}`}
      />
    ));
  }

  return data?.map((track) => (
    <div
      className="group/item col-span-4 flex items-center justify-between truncate rounded-md border bg-input/30 pr-4 text-secondary-foreground hover:bg-secondary dark:border-none"
      key={track.id}
    >
      <div className="flex items-center gap-4">
        {track.album.images && track.album.images.length > 0 ? (
          <img
            alt={track.name}
            className="aspect-square h-full rounded-tl-md rounded-bl-md object-cover"
            height={72}
            src={track.album.images[0].url}
            width={72}
          />
        ) : (
          <AlbumIcon size={20} />
        )}
        <h3 className="truncate font-semibold">{track.name}</h3>
      </div>
    </div>
  ));
}
