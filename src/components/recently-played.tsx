import { useQuery } from "@tanstack/react-query";
import { recentlyPlayedQuery } from "~/queries";
import TrackCards from "./track-cards";
import { Skeleton } from "./ui/skeleton";

export default function RecentlyPlayed() {
  const { data, isPending } = useQuery(recentlyPlayedQuery);

  if (isPending) {
    return (
      <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
        {Array.from({ length: 5 }).map(() => (
          <Skeleton
            className="col-span-1 aspect-square w-full rounded-md"
            key={`recently_played_${crypto.randomUUID()}`}
          />
        ))}
      </div>
    );
  }

  return <TrackCards tracks={data ?? []} />;
}
