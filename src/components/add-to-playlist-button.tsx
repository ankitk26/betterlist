import { SpinnerIcon } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
	likedSongsCountQuery,
	likedSongsInfiniteQuery,
	playlistByIdQuery,
	userPlaylistsQuery,
} from "~/queries";
import { addTracksToPlaylist } from "~/server-fns/add-tracks-to-playlist";
import { updateLikedTracks } from "~/server-fns/update-liked-tracks";
import { LIKED_SONGS_PLAYLIST_COVER_IMAGE } from "~/static/constants";
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import { AddToPlaylistItem } from "./add-to-playlist-item";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
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
import { Separator } from "./ui/separator";
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
	const [addToLikedSongs, setAddToLikedSongs] = useState(false);
	const queryClient = useQueryClient();

	const { data: allPlaylists, isPending } = useQuery(userPlaylistsQuery);

	const addTracksToPlaylistsMutation = useMutation({
		mutationFn: addTracksToPlaylist,
	});

	const updateLikedTracksMutation = useMutation({
		mutationFn: updateLikedTracks,
	});

	const handleTracksAddition = async () => {
		const hasPlaylists = selectedPlaylists.size > 0;
		const hasLikedSongs = addToLikedSongs;

		if (!hasPlaylists && !hasLikedSongs) return;

		try {
			const promises: Promise<unknown>[] = [];

			if (hasPlaylists) {
				promises.push(
					addTracksToPlaylistsMutation.mutateAsync({
						data: {
							playlistIds: [...selectedPlaylists],
							trackIds: [...selectedTrackIds],
						},
					}),
				);
			}

			if (hasLikedSongs) {
				promises.push(
					updateLikedTracksMutation.mutateAsync({
						data: { trackIds: [...selectedTrackIds], action: "ADD" },
					}),
				);
			}

			await Promise.all(promises);

			// Success - invalidate queries
			if (hasPlaylists) {
				for (const playlistId of selectedPlaylists) {
					queryClient.invalidateQueries({
						queryKey: playlistByIdQuery(playlistId).queryKey,
					});
				}
				queryClient.invalidateQueries({
					queryKey: userPlaylistsQuery.queryKey,
				});
			}

			if (hasLikedSongs) {
				queryClient.invalidateQueries({
					queryKey: likedSongsCountQuery.queryKey,
				});
				queryClient.invalidateQueries({
					queryKey: likedSongsInfiniteQuery.queryKey,
				});
			}

			// Clear all state
			setSelectedPlaylists(new Set());
			setAddToLikedSongs(false);
			clearAll();

			toast.success("Tracks added");
		} catch {
			toast.error("Failed to add tracks");
		}
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
	const hasSelection = selectionCount > 0 || addToLikedSongs;

	const isAnyMutationPending =
		addTracksToPlaylistsMutation.isPending ||
		updateLikedTracksMutation.isPending;

	const getButtonText = () => {
		if (isAnyMutationPending) {
			return (
				<>
					<SpinnerIcon className="animate-spin" />
					Adding...
				</>
			);
		}

		const parts: string[] = [];
		if (addToLikedSongs) {
			parts.push("Liked Songs");
		}
		if (selectionCount > 0) {
			parts.push(
				`${selectionCount} playlist${selectionCount !== 1 ? "s" : ""}`,
			);
		}

		if (parts.length === 0) return "Add";
		if (parts.length === 1) return `Add to ${parts[0]}`;
		return `Add to ${parts.join(" and ")}`;
	};

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

				{/* Liked Songs - Special option outside of MAX 5 limit */}
				<div
					className="flex cursor-pointer items-center gap-3 border border-border bg-card p-3 transition-colors hover:bg-accent/50"
					onClick={() =>
						!updateLikedTracksMutation.isPending &&
						setAddToLikedSongs((prevState) => !prevState)
					}
				>
					<Checkbox
						checked={addToLikedSongs}
						className="shrink-0"
						disabled={updateLikedTracksMutation.isPending}
						onCheckedChange={() =>
							setAddToLikedSongs((prevState) => !prevState)
						}
					/>
					<img
						src={LIKED_SONGS_PLAYLIST_COVER_IMAGE}
						alt="Liked Songs cover"
						className="h-12 w-12 object-cover"
					/>
					<div className="flex-1">
						<div className="text-sm font-medium">Liked Songs</div>
						<div className="text-xs text-muted-foreground">
							Save to your library
						</div>
					</div>
					{updateLikedTracksMutation.isPending && (
						<SpinnerIcon className="h-4 w-4 animate-spin text-muted-foreground" />
					)}
				</div>

				<Separator className="my-2" />

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
						disabled={!hasSelection || isAnyMutationPending}
					>
						{getButtonText()}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
