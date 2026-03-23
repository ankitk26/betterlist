import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { likedSongsCountQuery } from "~/queries";
import { likesSongsPlaylistCoverImage } from "~/static/constants";
import { useSidebarStore } from "~/stores/sidebar-store";
import { Skeleton } from "./ui/skeleton";

export default function SidebarLikedSongs() {
	const library = useSidebarStore((store) => store.library);

	const { data, isPending } = useQuery({
		...likedSongsCountQuery,
		enabled: library === "playlists",
	});

	return (
		<Link
			activeProps={{
				className: "bg-secondary",
			}}
			className="flex w-full min-w-0 items-center gap-3 overflow-hidden p-2 hover:bg-secondary"
			to="/collection/tracks"
		>
			<Image
				alt="Liked playlist cover"
				className="shrink-0"
				height={50}
				src={likesSongsPlaylistCoverImage}
				width={50}
			/>

			<div className="flex min-w-0 flex-1 flex-col gap-1 overflow-hidden">
				<h6 className="truncate text-sm font-medium">Liked Songs</h6>
				<span className="block truncate text-xs text-muted-foreground">
					{isPending ? (
						<Skeleton className="h-3 w-1/2" />
					) : (
						`${data?.count} songs`
					)}
				</span>
			</div>
		</Link>
	);
}
