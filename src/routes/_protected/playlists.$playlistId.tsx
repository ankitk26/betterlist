import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import PlaylistHeader from "~/components/playlist-header";
import SquareCoverPageSkeleton from "~/components/square-cover-page-skeleton";
import TracksTable from "~/components/tracks-table";
import TracksTableActions from "~/components/tracks-table-actions";
import { playlistByIdQuery } from "~/queries";

export const Route = createFileRoute("/_protected/playlists/$playlistId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { playlistId } = Route.useParams();
  const { data: playlist, isPending } = useQuery(playlistByIdQuery(playlistId));

  if (isPending) {
    return <SquareCoverPageSkeleton />;
  }

  return (
    <div className="space-y-8">
      {playlist && <PlaylistHeader playlist={playlist} />}

      {playlist?.tracks && playlist?.tracks.length === 0 && (
        <div className="mt-12 rounded-lg bg-muted p-12 shadow-sm">
          <div className="flex flex-col items-center space-y-3 text-center">
            <p className="text-foreground">No tracks yet</p>
            <p className="text-muted-foreground text-sm">
              This playlist is empty
            </p>
          </div>
        </div>
      )}

      {playlist?.tracks && playlist?.tracks.length !== 0 && (
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
      )}
    </div>
  );
}
