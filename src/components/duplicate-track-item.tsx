import { Track } from "~/types";
import { Button } from "./ui/button";

type Props = {
	track: Track;
	positions: number[];
	selectedPositions: number[];
	onPositionToggle: (trackId: string, position: number) => void;
	disabled?: boolean;
};

export default function DuplicateTrackItem({
	track,
	positions,
	selectedPositions,
	onPositionToggle,
	disabled,
}: Props) {
	const artistNames = track.artists.map((a) => a.name).join(", ");

	return (
		<div className="flex items-center gap-4 border-b p-3 last:border-b-0">
			<img
				src={track.album.images[0]?.url}
				alt={track.album.name}
				className="h-12 w-12 rounded object-cover"
			/>
			<div className="min-w-0 flex-1">
				<div className="truncate font-medium">{track.name}</div>
				<div className="truncate text-muted-foreground">
					{artistNames} — {track.album.name}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<span className="mr-2 text-xs text-muted-foreground">Keep:</span>
				{positions.map((position) => {
					const isSelected = selectedPositions.includes(position);
					return (
						<Button
							key={`${track.id}_${position}`}
							size="sm"
							variant={isSelected ? "default" : "outline"}
							className="h-8 w-8 p-0"
							onClick={() => onPositionToggle(track.id, position)}
							disabled={disabled}
						>
							{position + 1}
						</Button>
					);
				})}
			</div>
		</div>
	);
}
