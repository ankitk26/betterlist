import { useMutation } from "@tanstack/react-query";
import { useRouteContext } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { playlistTracksInfiniteQuery } from "~/queries";
import { addTracksToPlaylist } from "~/server-fns/add-tracks-to-playlist";
import { deleteTracksFromPlaylist } from "~/server-fns/delete-tracks-from-playlist";
import { removeDuplicateTracks } from "~/server-fns/remove-duplicate-tracks";
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
	playlistId: string;
	tracks: Track[];
};

export default function RemoveDuplicatesButton({ playlistId, tracks }: Props) {
	const { queryClient } = useRouteContext({ from: "/_protected" });

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

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// State to track the selected positions to keep for each duplicate track
	// None selected by default - user must choose which positions to keep
	const [selectedPositions, setSelectedPositions] = useState<
		Record<string, number[]>
	>(() => {
		const initial: Record<string, number[]> = {};
		for (const trackId of Object.keys(duplicateTracks)) {
			initial[trackId] = [];
		}
		return initial;
	});

	// This state will decide if user wants to just remove duplicates and doesn't care about the positions it's placed in after
	const [removeAllMode, setRemoveAllMode] = useState(false);

	// Mutations to delete and add tracks to playlist
	const deleteTracksMutation = useMutation({
		mutationFn: deleteTracksFromPlaylist,
	});
	const addTracksMutation = useMutation({
		mutationFn: addTracksToPlaylist,
	});
	const removeDuplicatesMutation = useMutation({
		mutationFn: removeDuplicateTracks,
	});

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

	const simplyRemoveAllDuplicates = async () => {
		const trackIds = Object.keys(duplicateTracks);
		toast.info("Removing duplicates...");
		try {
			await deleteTracksMutation.mutateAsync({
				data: { trackIds, playlistId },
			});
			await addTracksMutation.mutateAsync({
				data: { trackIds, playlistIds: [playlistId] },
			});
			queryClient.invalidateQueries({
				queryKey: playlistTracksInfiniteQuery(playlistId).queryKey,
			});
			toast.success("Duplicates are removed!");

			setIsDialogOpen(false);
		} catch {
			toast.error("Error in removing duplicates", {
				description: "Try again later",
			});
		}
	};

	const removeDuplicatesWithPositions = async () => {
		// Build the duplicates array for the server function
		const duplicates = Object.entries(duplicateTracks).map(
			([trackId, allPositions]) => ({
				trackId,
				allPositions,
				positionsToKeep: selectedPositions[trackId] || [],
			}),
		);

		toast.info("Removing duplicates...");
		try {
			await removeDuplicatesMutation.mutateAsync({
				data: { playlistId, duplicates },
			});
			queryClient.invalidateQueries({
				queryKey: playlistTracksInfiniteQuery(playlistId).queryKey,
			});
			toast.success("Duplicates are removed!");
			setIsDialogOpen(false);
		} catch {
			toast.error("Error in removing duplicates", {
				description: "Try again later",
			});
		}
	};

	// Final handler that will call the mutation to remove the duplicates
	const handleDuplicatesRemoval = async () => {
		if (removeAllMode) {
			await simplyRemoveAllDuplicates();
		} else {
			await removeDuplicatesWithPositions();
		}
	};

	const doesPlaylistHaveDuplicates = Object.keys(duplicateTracks).length > 0;

	// Check if any positions are selected (only relevant in manual mode)
	const hasSelectedPositions = Object.values(selectedPositions).some(
		(positions) => positions.length > 0,
	);

	// Disable confirm button in manual mode if no positions selected
	const isConfirmDisabled =
		deleteTracksMutation.isPending ||
		addTracksMutation.isPending ||
		removeDuplicatesMutation.isPending ||
		(!removeAllMode && !hasSelectedPositions);

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
					<Button
						type="submit"
						onClick={handleDuplicatesRemoval}
						disabled={isConfirmDisabled}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
