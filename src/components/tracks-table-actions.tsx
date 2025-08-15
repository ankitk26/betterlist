import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import { Button } from "./ui/button";

export default function TracksTableActions() {
  const isTracksSelected = usePlaylistEditorStore(
    (store) => store.selectedTrackIds.size === 0
  );

  return (
    <div className="flex items-center gap-4">
      <Button disabled={isTracksSelected} size="sm" variant="secondary">
        Add to playlist
      </Button>
      <Button disabled={isTracksSelected} size="sm" variant="destructive">
        Remove from playlist
      </Button>
      <Button disabled={isTracksSelected} size="sm" variant="destructive">
        Remove duplicates
      </Button>
    </div>
  );
}
