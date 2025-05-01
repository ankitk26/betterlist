import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Dot } from "lucide-react";
import TracksTable from "~/components/shared/tracks-table";
import TracksTableSkeleton from "~/components/shared/tracks-table-skeleton";
import { Skeleton } from "~/components/ui/skeleton";
import { authClient } from "~/lib/auth-client";
import { likedSongsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/collection/tracks")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isPending } = useQuery(likedSongsQuery);
  const { data: authData, isPending: authIsPending } = authClient.useSession();

  if (isPending || authIsPending) {
    return (
      <section className="space-y-20">
        <div className="flex items-end gap-4">
          <Skeleton className="w-64 aspect-square" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-3/4" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
        </div>
        <TracksTableSkeleton />
      </section>
    );
  }

  return (
    <>
      <div className="flex items-end gap-6">
        <img
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          alt="Liked Songs"
          height={208}
          width={208}
        />
        <div className="flex flex-col gap-3">
          <h5 className="text-sm font-bold">Playlist</h5>
          <h2 className="mt-2 text-6xl font-bold">Liked Songs</h2>

          <div className="flex items-center text-sm font-semibold">
            <span>{authData?.user.name}</span>
            {data?.total && data.total > 0 && (
              <>
                <Dot />
                <span>{data.total} songs</span>
              </>
            )}
          </div>
        </div>
      </div>

      {data && data.items && (
        <TracksTable
          tracks={data.items}
          showHeader
          showAlbum
          showCover
          showSubtitle
        />
      )}
    </>
  );
}
