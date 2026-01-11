import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoaderIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { playlistByIdQuery, userPlaylistsQuery } from "~/queries"
import { deleteTracksFromPlaylist } from "~/server-fns/delete-tracks-from-playlist"
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store"
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
} from "./ui/alert-dialog"
import { Button } from "./ui/button"

export default function DeletePlaylistTracksButton({
  playlistId,
}: {
  playlistId: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedTrackIds = usePlaylistEditorStore(
    (store) => store.selectedTrackIds,
  )
  const clearAll = usePlaylistEditorStore((store) => store.clearAll)

  const queryClient = useQueryClient()

  const isTracksSelected = selectedTrackIds.size > 0
  const selectedCount = selectedTrackIds.size

  const deleteTracksMutation = useMutation({
    mutationFn: deleteTracksFromPlaylist,
    onSuccess: async () => {
      toast("Deleting tracks")
      await queryClient.invalidateQueries({
        queryKey: playlistByIdQuery(playlistId).queryKey,
      })
      queryClient.invalidateQueries({
        queryKey: userPlaylistsQuery.queryKey,
      })
      clearAll()
      setIsOpen(false)
      toast.success("Tracks deleted")
    },
    onError: (error) => {
      toast.error("Failed to remove tracks. Please try again.")
      console.error("Error deleting tracks:", error)
    },
  })

  const handleDeleteTracks = () => {
    deleteTracksMutation.mutate({
      data: {
        playlistId,
        trackIds: [...selectedTrackIds],
      },
    })
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          disabled={!isTracksSelected}
          size="sm"
          className="text-xs"
          variant="destructive"
        >
          Remove from playlist
        </Button>
      </AlertDialogTrigger>
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
          <AlertDialogCancel disabled={deleteTracksMutation.isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              disabled={deleteTracksMutation.isPending}
              onClick={handleDeleteTracks}
            >
              {deleteTracksMutation.isPending ? (
                <>
                  <LoaderIcon className="animate-spin" />
                  Removing...
                </>
              ) : (
                "Remove tracks"
              )}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
