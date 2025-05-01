import { useQuery } from "@tanstack/react-query";
import { userTopTracksQuery } from "~/queries";
import { Skeleton } from "../ui/skeleton";
import TrackCards from "./track-cards";

export default async function TimeCapsule() {
  const { data, isPending } = useQuery(
    userTopTracksQuery({ limit: 10, range: "long_term" })
  );

  if (isPending) {
    return (
      <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={"time_capsule_" + index}
            className="aspect-square col-span-1 w-full rounded-md"
          />
        ))}
      </div>
    );
  }

  return <TrackCards tracks={data ?? []} />;
}
