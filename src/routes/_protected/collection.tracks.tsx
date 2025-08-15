import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Dot } from "lucide-react";
import TracksTable from "~/components/tracks-table";
import TracksTableSkeleton from "~/components/tracks-table-skeleton";
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
          <Skeleton className="aspect-square w-64" />
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
          alt="Liked Songs"
          height={208}
          src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          width={208}
        />
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-sm">Playlist</h5>
          <h2 className="mt-2 font-bold text-6xl">Liked Songs</h2>

          <div className="flex items-center font-semibold text-sm">
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

      {data?.items && (
        <TracksTable
          showAlbum
          showCover
          showHeader
          showSubtitle
          tracks={data.items}
        />
      )}
    </>
  );
}
