import { Link } from "@tanstack/react-router";
import { formatMs } from "~/lib/format-ms";
import { cn } from "~/lib/utils";
import type { Track } from "~/types";
import TracksTableRowCheckbox from "./tracks-table-row-checkbox";
import TracksTableTitleColumn from "./tracks-table-title-column";

type Props = {
	index: number;
	track: Track;
	showAlbum: boolean;
	showCover: boolean;
	showSubtitle: boolean;
	canSelect?: boolean;
};

export default function TracksTableRow({
	index,
	track,
	showAlbum,
	showCover,
	showSubtitle,
	canSelect = true,
}: Props) {
	return (
		<div
			className={cn(
				"group grid grid-cols-12 px-4 py-2 transition-colors",
				canSelect ? "hover:bg-muted/50" : "",
			)}
		>
			<TracksTableRowCheckbox
				canSelect={canSelect}
				index={index}
				trackId={track.id}
			/>

			<TracksTableTitleColumn
				showAlbum={showAlbum}
				showCover={showCover}
				showSubtitle={showSubtitle}
				track={track}
			/>

			{showAlbum && (
				<div className="col-span-4 flex w-10/12 items-center text-sm text-muted-foreground">
					<Link
						className="truncate hover:underline"
						params={{ albumId: track.album.id }}
						to="/albums/$albumId"
					>
						{track.album.name}
					</Link>
				</div>
			)}

			<small className="col-span-1 flex items-center text-xs text-muted-foreground">
				{formatMs(track.duration_ms)}
			</small>
		</div>
	);
}
