import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoaderIcon } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { renamePlaylist } from "~/server-fns/rename-playlist"
import type { Playlist } from "~/types"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

type Props = {
  playlistId: string
  currentName: string
}

export default function RenamePlaylistDialog({
  playlistId,
  currentName,
}: Props) {
  const [playlistName, setPlaylistName] = useState(currentName)
  const [isOpen, setIsOpen] = useState(false)

  const queryClient = useQueryClient()

  const renamePlaylistMutation = useMutation({
    mutationFn: renamePlaylist,
    onSuccess: () => {
      toast.info("Renaming playlist…")

      // update the playlists list
      queryClient.setQueryData<Playlist[]>(
        ["user_playlists"],
        (oldRecord = []) =>
          oldRecord.map((playlist) =>
            playlist.id === playlistId
              ? { ...playlist, name: playlistName }
              : playlist,
          ),
      )

      // update the individual playlist cache
      queryClient.setQueryData<Playlist>(
        ["playlist", playlistId],
        (oldRecord) =>
          oldRecord ? { ...oldRecord, name: playlistName } : oldRecord,
      )

      setIsOpen(false)
      toast.success("Playlist renamed")
    },
    onError: () => {
      toast.error("Something went wrong")
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (playlistName.trim() && playlistName.trim() !== currentName) {
      renamePlaylistMutation.mutate({
        data: {
          id: playlistId,
          name: playlistName.trim(),
        },
      })
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      setPlaylistName(currentName)
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary" className="text-xs">
          Rename playlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="pb-4">
          <DialogTitle>Rename Playlist</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <Label htmlFor="playlist-name">Playlist Name</Label>
            <Input
              autoFocus
              className="h-11"
              id="playlist-name"
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter new playlist name..."
              value={playlistName}
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              className="px-6"
              onClick={() => setIsOpen(false)}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className="px-6"
              disabled={
                !playlistName.trim() ||
                playlistName.trim() === currentName ||
                renamePlaylistMutation.isPending
              }
              type="submit"
            >
              {renamePlaylistMutation.isPending ? (
                <LoaderIcon className="size-4 animate-spin" />
              ) : (
                "Rename Playlist"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
