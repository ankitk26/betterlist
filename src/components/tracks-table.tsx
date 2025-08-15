import type { Track } from "~/types";
import TracksTableActions from "./tracks-table-actions";
import TracksTableHeader from "./tracks-table-header";
import TracksTableRow from "./tracks-table-row";

type Props = {
  tracks: Track[];
  showHeader?: boolean;
  showCover?: boolean;
  showAlbum?: boolean;
  showSubtitle?: boolean;
};

export default function TracksTable({
  tracks,
  showSubtitle = false,
  showCover = false,
  showHeader = false,
  showAlbum = false,
}: Props) {
  return (
    <div className="space-y-1">
      <TracksTableActions />

      {showHeader && <TracksTableHeader showAlbum={showAlbum} />}

      <div className="col-span-12 w-full">
        {tracks
          ?.filter((track) => track.name.trim().length > 0)
          .map((track, index) => (
            <TracksTableRow
              index={index}
              key={track.id}
              showAlbum={showAlbum}
              showCover={showCover}
              showSubtitle={showSubtitle}
              track={track}
            />
          ))}
      </div>
    </div>
  );
}
