import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Dot, Music } from "lucide-react";
import PlaylistDescription from "~/components/playlist/playlist-description";
import TracksTable from "~/components/shared/tracks-table";
import TracksTableSkeleton from "~/components/shared/tracks-table-skeleton";
import { Skeleton } from "~/components/ui/skeleton";
import { playlistByIdQuery } from "~/queries";

export const Route = createFileRoute("/_protected/playlists/$playlistId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { playlistId } = Route.useParams();
  const { data: playlist, isPending } = useQuery(playlistByIdQuery(playlistId));

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
    <>
      <div className="flex items-end gap-6">
        {playlist && (
          <>
            {playlist.images.length > 0 ? (
              <img
                alt={playlist.name}
                className="h-60 w-60 rounded-sm object-contain"
                height={240}
                src={playlist.images[0].url}
                width={240}
              />
            ) : (
              <div className="h-40 w-full">
                <Music className="h-full w-full bg-neutral-800" size={160} />
              </div>
            )}

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-xs uppercase">{playlist.type}</h5>
              <h2 className="font-bold text-6xl">{playlist.name}</h2>

              {playlist.description && (
                <PlaylistDescription description={playlist.description} />
              )}

              <div className="flex items-center font-semibold text-sm">
                <span>{playlist.owner?.display_name}</span>
                {playlist.followers.total > 0 && (
                  <>
                    <Dot />
                    <span>
                      {playlist.followers.total.toLocaleString()} {" "}
                      {playlist.followers.total > 1 ? "likes" : "like"}
                    </span>
                  </>
                )}
                {playlist.tracks.length > 0 && (
                  <>
                    <Dot />
                    <span>{playlist.tracks.length.toLocaleString()} songs</span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-8">
        {playlist?.tracks && (
          <TracksTable
            showAlbum
            showCover
            showHeader
            showSubtitle
            tracks={playlist?.tracks.filter((track) => track !== null)}
          />
        )}
      </div>
    </>
  );
}

