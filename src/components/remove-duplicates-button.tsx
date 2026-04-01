import { useState } from "react";
import type { Track } from "~/types";
import DuplicateTrackItem from "./duplicate-track-item";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

type Props = {
	tracks: Track[];
};

export default function RemoveDuplicatesButton({ tracks }: Props) {
	// Calculate the duplicate tracks
	const trackCheckMap: Record<string, { firstPosition: number; track: Track }> =
		{};
	const duplicateTracks: Record<string, number[]> = {};

	for (let i = 0; i < tracks.length; i++) {
		const track = tracks[i];
		if (trackCheckMap[track.id] === undefined) {
			trackCheckMap[track.id] = { firstPosition: i, track };
		} else {
			if (duplicateTracks[track.id] === undefined) {
				duplicateTracks[track.id] = [trackCheckMap[track.id].firstPosition, i];
			} else {
				duplicateTracks[track.id].push(i);
			}
		}
	}

	// State to track the selected positions to keep for each duplicate track
	const [selectedPositions, setSelectedPositions] = useState<
		Record<string, number[]>
	>(() => {
		const initial: Record<string, number[]> = {};
		for (const [trackId, positions] of Object.entries(duplicateTracks)) {
			initial[trackId] = [...positions];
		}
		return initial;
	});

	// This state will decide if user wants to just remove duplicates and doesn't care about the positions it's placed in after
	const [removeAllMode, setRemoveAllMode] = useState(false);

	// Logic to set the state for tracking positions selected to keep
	const handlePositionToggle = (trackId: string, position: number) => {
		setSelectedPositions((prev) => {
			const current = prev[trackId] || [];
			const isSelected = current.includes(position);
			if (isSelected) {
				return {
					...prev,
					[trackId]: current.filter((p) => p !== position),
				};
			}
			return {
				...prev,
				[trackId]: [...current, position],
			};
		});
	};

	// Final handler that will call the mutation to remove the duplicates
	// TODO: Add the mutation calls here
	const handleDuplicatesRemoval = () => {
		const tracksToRemove: Array<{ trackId: string; position: number }> = [];

		for (const [trackId, allPositions] of Object.entries(duplicateTracks)) {
			const selected = selectedPositions[trackId] || [];

			for (const position of allPositions) {
				if (selected.includes(position)) {
					tracksToRemove.push({ trackId, position });
				}
			}
		}

		console.log("Tracks to keep:", tracksToRemove);
		return tracksToRemove;
	};

	const doesPlaylistHaveDuplicates = Object.keys(duplicateTracks).length > 0;

	return (
		<Dialog>
			<DialogTrigger
				render={
					<Button variant="destructive" disabled={!doesPlaylistHaveDuplicates}>
						Remove duplicates
					</Button>
				}
			/>
			<DialogContent className="flex max-h-[90vh] max-w-none! flex-col sm:w-150!">
				<DialogHeader>
					<DialogTitle>Remove duplicates</DialogTitle>
					<DialogDescription>
						For each track, select the position to keep
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4 overflow-hidden">
					<div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
						<div className="space-y-1">
							<Label htmlFor="remove-all" className="cursor-pointer">
								Remove all duplicates automatically
							</Label>
							<p className="text-muted-foreground">
								This will place below tracks at the end of the playlist
							</p>
						</div>
						<Switch
							id="remove-all"
							checked={removeAllMode}
							onCheckedChange={setRemoveAllMode}
						/>
					</div>
					<div className="max-h-[50vh] overflow-hidden overflow-y-auto rounded-lg border">
						{Object.entries(duplicateTracks).map(([trackId, positions]) => (
							<DuplicateTrackItem
								key={trackId}
								track={trackCheckMap[trackId].track}
								positions={positions}
								selectedPositions={selectedPositions[trackId] || []}
								onPositionToggle={handlePositionToggle}
								disabled={removeAllMode}
							/>
						))}
					</div>
				</div>
				<DialogFooter>
					<DialogClose
						render={
							<Button type="button" variant="outline">
								Cancel
							</Button>
						}
					/>
					<Button type="submit" onClick={handleDuplicatesRemoval}>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
