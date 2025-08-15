import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Dot, Music } from "lucide-react";
import TracksTable from "~/components/tracks-table";
import TracksTableSkeleton from "~/components/tracks-table-skeleton";
import { Skeleton } from "~/components/ui/skeleton";
import { albumByIdQuery } from "~/queries";

export const Route = createFileRoute("/_protected/albums/$albumId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { albumId } = Route.useParams();
  const { data: album, isPending } = useQuery(albumByIdQuery(albumId));

  if (isPending) {
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
    <div className="space-y-8">
      <div className="flex items-end gap-6">
        {album && (
          <>
            {album.images && album.images.length > 0 ? (
              <img
                alt={album.name}
                className="aspect-square w-64 rounded-sm object-cover"
                height={208}
                src={album.images[0].url ?? ""}
                width={208}
              />
            ) : (
              <div className="h-40 w-full">
                <Music className="h-full w-full" size={160} />
              </div>
            )}
            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-xs uppercase">
                {album.album_type}
              </h5>
              <h2 className="font-bold text-5xl">{album.name}</h2>

              <div className="flex items-center font-semibold text-sm">
                <Link
                  className="hover:underline"
                  params={{ artistId: album.artists[0].id }}
                  to="/artists/$artistId"
                >
                  {album.artists[0].name}
                </Link>
                <Dot />
                <span>{new Date(album.release_date).getFullYear()}</span>
                {album.tracks && album.tracks.items.length > 0 && (
                  <>
                    <Dot />
                    <span>{album.tracks.total} songs</span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <TracksTable
        showHeader
        showSubtitle
        tracks={album ? album.tracks.items : []}
      />
    </div>
  );
}
