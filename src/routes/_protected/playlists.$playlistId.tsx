import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { DotIcon, MusicIcon } from "lucide-react";
import PlaylistDescription from "~/components/playlist-description";
import TracksTable from "~/components/tracks-table";
import TracksTableActions from "~/components/tracks-table-actions";
import TracksTableSkeleton from "~/components/tracks-table-skeleton";
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
    <div className="space-y-8">
      <div className="flex items-end gap-6">
        {playlist && (
          <>
            {(playlist.images?.length ?? 0) > 0 ? (
              <Image
                alt={playlist.name}
                className="h-64 w-64 rounded-lg object-cover shadow-xl ring-1 ring-border"
                height={256}
                src={playlist.images?.[0].url || "/placeholder.svg"}
                width={256}
              />
            ) : (
              <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-muted shadow-xl ring-1 ring-border">
                <MusicIcon className="h-24 w-24 text-muted-foreground" />
              </div>
            )}

            <div className="flex flex-col gap-3">
              <h5 className="font-bold text-muted-foreground text-xs uppercase">
                {playlist.type}
              </h5>
              <h2 className="font-bold text-6xl">{playlist.name}</h2>

              {playlist.description && playlist.description !== "null" && (
                <PlaylistDescription description={playlist.description} />
              )}

              <div className="flex items-center font-semibold text-sm">
                <span>{playlist.owner?.display_name}</span>
                {playlist.tracks.length > 0 && (
                  <>
                    <DotIcon />
                    <span className="text-muted-foreground">
                      {playlist.tracks.length.toLocaleString()} songs
                    </span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {playlist?.tracks && playlist?.tracks.length > 0 ? (
        <div className="space-y-1">
          <TracksTableActions
            playlistId={playlist?.id}
            playlistName={playlist?.name}
            tracks={playlist.tracks.filter((track) => track !== null)}
          />
          <TracksTable
            showAlbum
            showCover
            showHeader
            showSubtitle
            tracks={playlist?.tracks.filter((track) => track !== null)}
          />
        </div>
      ) : (
        <div className="mt-12 rounded-lg bg-muted p-12 shadow-sm">
          <div className="flex flex-col items-center space-y-3 text-center">
            <p className="text-foreground">No tracks yet</p>
            <p className="text-muted-foreground text-sm">
              This playlist is empty
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
