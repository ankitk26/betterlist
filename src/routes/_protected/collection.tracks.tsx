import { DotIcon } from "@phosphor-icons/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { useMemo } from "react";
import AddToPlaylistButton from "~/components/add-to-playlist-button";
import DeletePlaylistTracksButton from "~/components/delete-playlist-tracks-button";
import RemoveDuplicatesButton from "~/components/remove-duplicates-button";
import TracksTable from "~/components/tracks-table";
import TracksTableSkeleton from "~/components/tracks-table-skeleton";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { likedSongsInfiniteQuery } from "~/queries";
import { LIKED_SONGS_PLAYLIST_ID } from "~/static/constants";

export const Route = createFileRoute("/_protected/collection/tracks")({
	component: RouteComponent,
});

function RouteComponent() {
	const { session } = useRouteContext({ from: "/_protected" });
	const {
		data: tracksData,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isPending: isTracksPending,
	} = useInfiniteQuery(likedSongsInfiniteQuery);

	const tracks = useMemo(() => {
		if (!tracksData) return [];
		return tracksData.pages.flatMap((page) => page.tracks);
	}, [tracksData]);

	const totalTracks = tracksData?.pages[0]?.total ?? 0;

	if (isTracksPending) {
		return (
			<section className="space-y-20">
				<div className="flex items-end gap-4">
					<Skeleton className="aspect-square w-64" />
					<div className="flex-1 space-y-4">
						<Skeleton className="h-6 w-32" />
						<Skeleton className="h-6 w-3/4" />
						<div className="flex items-center gap-4">
							<Skeleton className="h-6 w-32" />
							<Skeleton className="h-6 w-32" />
							<Skeleton className="h-6 w-32" />
						</div>
					</div>
				</div>
				<TracksTableSkeleton />
			</section>
		);
	}

	return (
		<section className="space-y-8">
			<div className="flex items-end gap-6">
				<Image
					alt="Liked Songs"
					className="h-64 w-64 object-cover shadow-xl ring-1 ring-border"
					height={256}
					src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
					width={256}
				/>
				<div className="flex flex-col gap-3">
					<h5 className="text-xs text-muted-foreground uppercase">Playlist</h5>
					<h2 className="text-5xl font-medium">Liked Songs</h2>

					<div className="flex items-center text-sm">
						<span className="text-muted-foreground">{session.user.name}</span>
						{totalTracks > 0 && (
							<>
								<DotIcon className="text-muted-foreground" />
								<span className="text-muted-foreground">
									{totalTracks.toLocaleString()} songs
								</span>
							</>
						)}
					</div>
				</div>
			</div>

			<div className="flex items-center gap-4">
				<AddToPlaylistButton />
				<DeletePlaylistTracksButton playlistId={LIKED_SONGS_PLAYLIST_ID} />
				<RemoveDuplicatesButton tracks={tracks ?? []} />
			</div>

			{tracks.length > 0 && (
				<div className="space-y-4">
					<TracksTable
						showAlbum
						showCover
						showHeader
						showSubtitle
						tracks={tracks}
					/>
					{hasNextPage && (
						<div className="flex justify-center pt-4">
							<Button
								onClick={() => fetchNextPage()}
								disabled={isFetchingNextPage}
								variant="outline"
							>
								{isFetchingNextPage
									? "Loading..."
									: `Load More (${tracks.length} / ${totalTracks})`}
							</Button>
						</div>
					)}
				</div>
			)}

			{tracks.length === 0 && (
				<div className="mt-12 bg-muted p-12 shadow-sm">
					<div className="flex flex-col items-center space-y-3 text-center">
						<p className="text-foreground">No liked songs yet</p>
						<p className="text-sm text-muted-foreground">
							Start liking songs to see them here
						</p>
					</div>
				</div>
			)}
		</section>
	);
}
