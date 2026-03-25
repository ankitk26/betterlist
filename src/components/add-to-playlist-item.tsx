import { MusicNoteIcon } from "@phosphor-icons/react";
import { cn } from "~/lib/utils";
import type { Playlist } from "~/types";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface AddToPlaylistItemProps {
	playlist: Playlist;
	isSelected: boolean;
	isDisabled: boolean;
	onToggle: (playlistId: string) => void;
}

export function AddToPlaylistItem({
	playlist,
	isSelected,
	isDisabled,
	onToggle,
}: AddToPlaylistItemProps) {
	const coverImage = playlist.images?.[0]?.url;

	return (
		<Card
			className={cn(
				"cursor-pointer flex-row items-center gap-3 border p-3 transition-colors hover:bg-accent/50",
				isSelected
					? "border-primary bg-primary/10"
					: "border-border bg-card hover:border-accent-foreground/20",
				isDisabled && "cursor-not-allowed opacity-50",
			)}
			onClick={() => !isDisabled && onToggle(playlist.id)}
			data-size="sm"
		>
			<Checkbox
				checked={isSelected}
				disabled={isDisabled}
				className="shrink-0"
				onCheckedChange={() => onToggle(playlist.id)}
			/>
			{coverImage ? (
				<img
					src={coverImage}
					alt={`${playlist.name} cover`}
					className="h-12 w-12 object-cover"
				/>
			) : (
				<div className="flex h-12 w-12 shrink-0 items-center justify-center bg-muted">
					<MusicNoteIcon className="text-muted-foreground" />
				</div>
			)}
			<CardContent className="flex-1 p-0">
				<div className="line-clamp-1 text-sm font-medium">{playlist.name}</div>
			</CardContent>
		</Card>
	);
}
