import { memo } from "react";
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import { Checkbox } from "./ui/checkbox";

type Props = {
	index: number;
	trackId: string;
};

function PureTracksTableRowCheckbox({ index, trackId }: Props) {
	const isSelected = usePlaylistEditorStore((s) =>
		s.selectedTrackIds.has(trackId),
	);

	const addTrack = usePlaylistEditorStore((store) => store.add);
	const removeTrack = usePlaylistEditorStore((store) => store.remove);

	const toggle = () => {
		if (isSelected) {
			removeTrack(trackId);
		} else {
			addTrack(trackId);
		}
	};

	return (
		<div
			className="group/checkbox relative col-span-1 flex cursor-pointer items-center"
			onClick={toggle}
		>
			<span
				className={`text-muted-foreground text-sm transition-opacity duration-100 ease-out ${
					isSelected ? "opacity-0" : "group-hover:opacity-0"
				}`}
			>
				{index + 1}
			</span>
			<div
				className={`pointer-events-none absolute inset-0 flex items-center transition-opacity ${
					isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
				}`}
			>
				<Checkbox
					checked={isSelected}
					onCheckedChange={(checked) => {
						if (checked) {
							addTrack(trackId);
						} else {
							removeTrack(trackId);
						}
					}}
				/>
			</div>
		</div>
	);
}

const TracksTableRowCheckbox = memo(
	PureTracksTableRowCheckbox,
	(prev, next) => prev.trackId === next.trackId && prev.index === next.index,
);

export default TracksTableRowCheckbox;
