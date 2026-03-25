import { SpinnerIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import {
	likedSongsCountQuery,
	likedSongsInfiniteQuery,
	playlistByIdQuery,
	userPlaylistsQuery,
} from "~/queries";
import { deleteTracksFromPlaylist } from "~/server-fns/delete-tracks-from-playlist";
import { updateLikedTracks } from "~/server-fns/update-liked-tracks";
import { LIKED_SONGS_PLAYLIST_ID } from "~/static/constants";
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

export default function DeletePlaylistTracksButton({
	playlistId,
}: {
	playlistId: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const selectedTrackIds = usePlaylistEditorStore(
		(store) => store.selectedTrackIds,
	);
	const clearAll = usePlaylistEditorStore((store) => store.clearAll);

	const queryClient = useQueryClient();

	const isTracksSelected = selectedTrackIds.size > 0;
	const selectedCount = selectedTrackIds.size;

	const deleteTracksMutation = useMutation({
		mutationFn: deleteTracksFromPlaylist,
		onSuccess: () => {
			toast("Deleting tracks");
			queryClient.invalidateQueries({
				queryKey: playlistByIdQuery(playlistId).queryKey,
			});
			queryClient.invalidateQueries({
				queryKey: userPlaylistsQuery.queryKey,
			});
			clearAll();
			setIsOpen(false);
			toast.success("Tracks deleted");
		},
		onError: (error) => {
			toast.error("Failed to remove tracks. Please try again.");
			console.error("Error deleting tracks:", error);
		},
	});

	const updateLikedTracksMutation = useMutation({
		mutationFn: updateLikedTracks,
		onSuccess: () => {
			toast("Deleting tracks");
			queryClient.invalidateQueries({
				queryKey: likedSongsCountQuery.queryKey,
			});
			queryClient.invalidateQueries({
				queryKey: likedSongsInfiniteQuery.queryKey,
			});
			clearAll();
			setIsOpen(false);
			toast.success("Tracks deleted");
		},
		onError: (error) => {
			toast.error("Failed to remove tracks. Please try again.");
			console.error("Error deleting tracks:", error);
		},
	});

	const handleDeleteTracks = () => {
		if (playlistId !== LIKED_SONGS_PLAYLIST_ID) {
			deleteTracksMutation.mutate({
				data: {
					playlistId,
					trackIds: [...selectedTrackIds],
				},
			});
			return;
		}

		updateLikedTracksMutation.mutate({
			data: { trackIds: [...selectedTrackIds], action: "DELETE" },
		});
	};

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger
				render={
					<Button disabled={!isTracksSelected} variant="destructive">
						Remove from playlist
					</Button>
				}
			/>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Remove tracks from playlist</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to remove {selectedCount} track
						{selectedCount !== 1 ? "s" : ""} from this playlist? This action
						cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel
						disabled={
							deleteTracksMutation.isPending ||
							updateLikedTracksMutation.isPending
						}
					>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						disabled={
							deleteTracksMutation.isPending ||
							updateLikedTracksMutation.isPending
						}
						onClick={handleDeleteTracks}
						variant="destructive"
					>
						{deleteTracksMutation.isPending ||
						updateLikedTracksMutation.isPending ? (
							<>
								<SpinnerIcon className="animate-spin" />
								Removing...
							</>
						) : (
							"Remove tracks"
						)}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
