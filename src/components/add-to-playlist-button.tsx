import { CheckIcon, SpinnerIcon, MusicNoteIcon } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "~/lib/utils";
import { playlistByIdQuery, userPlaylistsQuery } from "~/queries";
import { addTracksToPlaylist } from "~/server-fns/add-tracks-to-playlist";
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
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
import { Skeleton } from "./ui/skeleton";

export default function AddToPlaylistButton() {
	const isTracksSelected = usePlaylistEditorStore(
		(store) => store.selectedTrackIds.size === 0,
	);
	const selectedTracks = usePlaylistEditorStore(
		(store) => store.selectedTrackIds,
	);
	const clearAll = usePlaylistEditorStore((store) => store.clearAll);
	const [selectedPlaylists, setSelectedPlaylists] = useState<string[]>([]);
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
			setSelectedPlaylists([]);
			clearAll();
		},
		onError: () => {
			toast.error("Tracks not added");
		},
	});

	const handleTracksAddition = () => {
		addTracksToPlaylistsMutation.mutate({
			data: {
				playlistIds: selectedPlaylists,
				trackIds: [...selectedTracks],
			},
		});
	};

	const togglePlaylistSelection = (playlistId: string) => {
		setSelectedPlaylists((prev) => {
			if (prev.includes(playlistId)) {
				return prev.filter((id) => id !== playlistId);
			} else if (prev.length < 5) {
				return [...prev, playlistId];
			}
			return prev;
		});
	};

	return (
		<Dialog>
			<DialogTrigger
				render={
					<Button
						disabled={isTracksSelected}
						size="sm"
						className="text-xs"
						variant="secondary"
					>
						Add to playlist
					</Button>
				}
			/>
			<DialogContent className="max-w-md">
				<DialogTitle>Add selected tracks to other playlists</DialogTitle>
				<DialogDescription>Can select 5 playlists at a time</DialogDescription>
				<div className="max-h-96 overflow-y-auto">
					{isPending ? (
						<div className="space-y-3">
							<Skeleton className="h-16 w-full" />
							<Skeleton className="h-16 w-full" />
							<Skeleton className="h-16 w-full" />
						</div>
					) : (
						<div className="space-y-2">
							{allPlaylists?.map((playlist) => {
								const isSelected = selectedPlaylists.includes(playlist.id);
								const coverImage = playlist.images?.[0]?.url;

								return (
									<button
										key={playlist.id}
										type="button"
										onClick={() => togglePlaylistSelection(playlist.id)}
										disabled={!isSelected && selectedPlaylists.length >= 5}
										className={cn(
											"hover:bg-accent/50 flex w-full items-center gap-3 rounded-lg border p-3 transition-all",
											isSelected
												? "bg-primary/10 border-primary"
												: "bg-card border-border hover:border-accent-foreground/20",
											!isSelected &&
												selectedPlaylists.length >= 5 &&
												"cursor-not-allowed opacity-50",
										)}
									>
										<div className="relative">
											{coverImage ? (
												<img
													src={coverImage || "/placeholder.svg"}
													alt={`${playlist.name} cover`}
													className="h-12 w-12 rounded object-cover"
												/>
											) : (
												<div className="bg-muted flex h-12 w-12 items-center justify-center rounded">
													<span className="text-muted-foreground text-xs">
														<MusicNoteIcon />
													</span>
												</div>
											)}
											{isSelected && (
												<div className="bg-primary absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full">
													<CheckIcon className="text-primary-foreground h-3 w-3" />
												</div>
											)}
										</div>
										<div className="flex-1 text-left">
											<div className="line-clamp-1 text-sm font-medium">
												{playlist.name}
											</div>
										</div>
									</button>
								);
							})}
						</div>
					)}
				</div>

				<DialogFooter>
					<DialogClose render={<Button variant="outline">Cancel</Button>} />
					<Button
						onClick={handleTracksAddition}
						disabled={
							selectedPlaylists.length === 0 ||
							addTracksToPlaylistsMutation.isPending
						}
					>
						{addTracksToPlaylistsMutation.isPending ? (
							<>
								<SpinnerIcon className="animate-spin" />
								Adding...
							</>
						) : (
							`Add to ${selectedPlaylists.length} playlist${
								selectedPlaylists.length !== 1 ? "s" : ""
							}`
						)}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
