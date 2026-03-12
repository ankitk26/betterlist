import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { likedSongsCountQuery } from "~/queries";
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
			className="hover:bg-secondary flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-md p-2"
			to="/collection/tracks"
		>
			<Image
				alt="Liked playlist cover"
				className="shrink-0 rounded-md"
				height={50}
				src="https://res.cloudinary.com/drnu1myuq/image/upload/v1754937393/liked_cover_x3ach0.jpg"
				width={50}
			/>

			<div className="min-w-0 flex-1 overflow-hidden">
				<h6 className="truncate text-sm font-medium">Liked Songs</h6>
				<span className="text-muted-foreground block truncate text-xs">
					{isPending ? (
						<Skeleton className="h-4 w-full" />
					) : (
						`${data?.count} songs`
					)}
				</span>
			</div>
		</Link>
	);
}
