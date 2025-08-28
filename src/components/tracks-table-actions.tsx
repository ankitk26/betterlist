import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import AddToPlaylistButton from "./add-to-playlist-button";
import DeletePlaylistTracksButton from "./delete-playlist-tracks-button";
import RenamePlaylistDialog from "./rename-playlist-dialog";
import { Button } from "./ui/button";

type Props = {
  playlistId?: string;
  playlistName?: string;
};

export default function TracksTableActions(props: Props) {
  const isTracksSelected = usePlaylistEditorStore(
    (store) => store.selectedTrackIds.size === 0
  );

  return (
    <div className="flex items-center gap-4">
      <AddToPlaylistButton />
      {props.playlistId && (
        <>
          <RenamePlaylistDialog
            currentName={props.playlistName ?? ""}
            playlistId={props.playlistId}
          />
          <DeletePlaylistTracksButton playlistId={props.playlistId} />
          <Button disabled={isTracksSelected} size="sm" variant="destructive">
            Remove duplicates
          </Button>
        </>
      )}
    </div>
  );
}
