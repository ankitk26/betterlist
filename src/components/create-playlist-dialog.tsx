import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoaderIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { userPlaylistsQuery } from "~/queries";
import { createPlaylist } from "~/server-fns/create-playlist";
import type { Playlist } from "~/types";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CreatePlaylistDialog() {
  const [playlistName, setPlaylistName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const createPlaylistMutation = useMutation({
    mutationFn: createPlaylist,
    onSuccess: (newPlaylist) => {
      if (!newPlaylist) {
        toast.error("Something went wrong");
        return;
      }
      queryClient.setQueryData<Playlist[]>(
        userPlaylistsQuery.queryKey,
        (old = []) => [newPlaylist, ...old]
      );
      setIsOpen(false);
      toast.success("Playlist created");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playlistName.trim()) {
      createPlaylistMutation.mutate({ data: playlistName });
      setPlaylistName("");
    }
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="size-7" size="icon" variant="ghost">
          <PlusIcon className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="pb-4">
          <DialogTitle>Create New Playlist</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <Label htmlFor="playlist-name">Playlist Name</Label>
            <Input
              autoFocus
              className="h-11"
              id="playlist-name"
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name..."
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
                !playlistName.trim() || createPlaylistMutation.isPending
              }
              type="submit"
            >
              {createPlaylistMutation.isPending ? (
                <LoaderIcon className="size-4 animate-spin" />
              ) : (
                "Create Playlist"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
