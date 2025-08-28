import type { Track } from "~/types";
import AddToPlaylistButton from "./add-to-playlist-button";
import DeletePlaylistTracksButton from "./delete-playlist-tracks-button";
import RemoveDuplicatesButton from "./remove-duplicates-button";
import RenamePlaylistDialog from "./rename-playlist-dialog";

type Props = {
  playlistId?: string;
  playlistName?: string;
  tracks?: Track[];
};

export default function TracksTableActions(props: Props) {
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
          <RemoveDuplicatesButton tracks={props.tracks ?? []} />
        </>
      )}
    </div>
  );
}
