import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
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
      <Button disabled={isTracksSelected} size="sm" variant="secondary">
        Add to playlist
      </Button>
      {props.playlistId && (
        <RenamePlaylistDialog
          currentName={props.playlistName ?? ""}
          playlistId={props.playlistId}
        />
      )}
      <Button disabled={isTracksSelected} size="sm" variant="destructive">
        Remove from playlist
      </Button>
      <Button disabled={isTracksSelected} size="sm" variant="destructive">
        Remove duplicates
      </Button>
    </div>
  );
}
