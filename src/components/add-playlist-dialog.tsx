import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlusIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { userPlaylistsQuery } from "~/queries";
import { createPlaylist } from "~/server-fns/create-playlist";
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

export default function AddPlaylistDialog() {
  const [playlistName, setPlaylistName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const createPlaylistMutation = useMutation({
    mutationFn: createPlaylist,
    onSuccess: async (data) => {
      if (!data) {
        toast.error("Something went wrong");
        return;
      }
      toast.info("Creating playlist");
      await queryClient.invalidateQueries({
        queryKey: userPlaylistsQuery.queryKey,
      });
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
      setIsOpen(false);
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
        <DialogHeader>
          <DialogTitle>Create New Playlist</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="playlist-name">Playlist Name</Label>
            <Input
              autoFocus
              id="playlist-name"
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Enter playlist name..."
              value={playlistName}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              onClick={() => setIsOpen(false)}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button disabled={!playlistName.trim()} type="submit">
              Create Playlist
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
