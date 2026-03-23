import { DotIcon } from "@phosphor-icons/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { useMemo } from "react";
import TracksTable from "~/components/tracks-table";
import TracksTableSkeleton from "~/components/tracks-table-skeleton";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { likedSongsInfiniteQuery } from "~/queries";

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
					className="ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1"
					height={256}
					src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
					width={256}
				/>
				<div className="flex flex-col gap-3">
					<h5 className="text-sm font-bold">Playlist</h5>
					<h2 className="mt-2 text-6xl font-bold">Liked Songs</h2>

					<div className="flex items-center text-sm font-semibold">
						<span>{session.user.name}</span>
						{totalTracks > 0 && (
							<>
								<DotIcon />
								<span>{totalTracks.toLocaleString()} songs</span>
							</>
						)}
					</div>
				</div>
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
				<div className="bg-muted mt-12 rounded-lg p-12 shadow-sm">
					<div className="flex flex-col items-center space-y-3 text-center">
						<p className="text-foreground">No liked songs yet</p>
						<p className="text-muted-foreground text-sm">
							Start liking songs to see them here
						</p>
					</div>
				</div>
			)}
		</section>
	);
}
