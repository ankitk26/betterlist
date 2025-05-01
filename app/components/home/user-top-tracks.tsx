import { useQuery } from "@tanstack/react-query";
import { Album } from "lucide-react";
import { userTopTracksQuery } from "~/queries";
import { Skeleton } from "../ui/skeleton";

export default function UserTopTracks() {
  const { data, isPending } = useQuery(userTopTracksQuery({ limit: 9 }));

  if (isPending) {
    return Array.from({ length: 6 }).map((_, index) => (
      <Skeleton
        key={"top_tracks_" + index}
        className="h-16 col-span-4 w-full rounded-md"
      />
    ));
  }

  return data?.map((track) => (
    <div
      key={track.id}
      className="flex items-center justify-between col-span-4 pr-4 truncate bg-input/30 hover:bg-secondary text-secondary-foreground rounded-md group/item"
    >
      <div className="flex items-center gap-4">
        {track.album.images && track.album.images.length > 0 ? (
          <img
            src={track.album.images[0].url}
            alt={track.name}
            width={72}
            height={72}
            className="object-cover h-full rounded-tl-md rounded-bl-md aspect-square"
          />
        ) : (
          <Album size={20} />
        )}
        <h3 className="font-semibold truncate">{track.name}</h3>
      </div>
    </div>
  ));
}
