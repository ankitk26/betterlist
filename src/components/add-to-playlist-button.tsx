import { SpinnerIcon } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { playlistByIdQuery, userPlaylistsQuery } from "~/queries";
import { addTracksToPlaylist } from "~/server-fns/add-tracks-to-playlist";
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import { AddToPlaylistItem } from "./add-to-playlist-item";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

const MAX_SELECTIONS = 5;

export default function AddToPlaylistButton() {
	const selectedTrackIds = usePlaylistEditorStore(
		(store) => store.selectedTrackIds,
	);
	const clearAll = usePlaylistEditorStore((store) => store.clearAll);
	const [selectedPlaylists, setSelectedPlaylists] = useState<Set<string>>(
		new Set(),
	);
	const queryClient = useQueryClient();

	const { data: allPlaylists, isPending } = useQuery(userPlaylistsQuery);

	const addTracksToPlaylistsMutation = useMutation({
		mutationFn: addTracksToPlaylist,
		onSuccess: () => {
			toast.success("Tracks added");
			for (const playlistId of selectedPlaylists) {
				queryClient.invalidateQueries({
					queryKey: playlistByIdQuery(playlistId).queryKey,
				});
			}
			queryClient.invalidateQueries({
				queryKey: userPlaylistsQuery.queryKey,
			});
			setSelectedPlaylists(new Set());
			clearAll();
		},
		onError: () => {
			toast.error("Tracks not added");
		},
	});

	const handleTracksAddition = () => {
		addTracksToPlaylistsMutation.mutate({
			data: {
				playlistIds: [...selectedPlaylists],
				trackIds: [...selectedTrackIds],
			},
		});
	};

	const togglePlaylistSelection = (playlistId: string) => {
		setSelectedPlaylists((prev) => {
			const next = new Set(prev);
			if (next.has(playlistId)) {
				next.delete(playlistId);
			} else if (next.size < MAX_SELECTIONS) {
				next.add(playlistId);
			}
			return next;
		});
	};

	const selectionCount = selectedPlaylists.size;
	const isAtLimit = selectionCount >= MAX_SELECTIONS;

	return (
		<Dialog>
			<DialogTrigger
				render={
					<Button disabled={selectedTrackIds.size === 0} variant="secondary">
						Add to playlist
					</Button>
				}
			/>
			<DialogContent className="max-w-2xl min-w-xl">
				<DialogTitle>Add selected tracks to other playlists</DialogTitle>
				<div className="flex items-center gap-2">
					<DialogDescription>
						Can select 5 playlists at a time
					</DialogDescription>
					<Badge variant={isAtLimit ? "default" : "secondary"}>
						{selectionCount}/{MAX_SELECTIONS}
					</Badge>
				</div>
				<ScrollArea className="h-96">
					{isPending ? (
						<div className="space-y-3 pr-3">
							<Skeleton className="h-16 w-full" />
							<Skeleton className="h-16 w-full" />
							<Skeleton className="h-16 w-full" />
						</div>
					) : (
						<div className="space-y-2 pr-3">
							{allPlaylists?.map((playlist) => (
								<AddToPlaylistItem
									key={playlist.id}
									playlist={playlist}
									isSelected={selectedPlaylists.has(playlist.id)}
									isDisabled={!selectedPlaylists.has(playlist.id) && isAtLimit}
									onToggle={togglePlaylistSelection}
								/>
							))}
						</div>
					)}
				</ScrollArea>

				<DialogFooter>
					<DialogClose render={<Button variant="outline">Cancel</Button>} />
					<Button
						onClick={handleTracksAddition}
						disabled={
							selectionCount === 0 || addTracksToPlaylistsMutation.isPending
						}
					>
						{addTracksToPlaylistsMutation.isPending ? (
							<>
								<SpinnerIcon className="animate-spin" />
								Adding...
							</>
						) : (
							`Add to ${selectionCount} playlist${selectionCount !== 1 ? "s" : ""}`
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
