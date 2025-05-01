import { useQuery } from "@tanstack/react-query";
import { recentlyPlayedQuery } from "~/queries";
import TrackCards from "./track-cards";
import { Skeleton } from "../ui/skeleton";

export default async function RecentlyPlayed() {
  const { data, isPending } = useQuery(recentlyPlayedQuery);

  if (isPending) {
    return (
      <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={"recently_played_" + index}
            className="aspect-square col-span-1 w-full rounded-md"
          />
        ))}
      </div>
    );
  }

  return <TrackCards tracks={data ?? []} />;
}
