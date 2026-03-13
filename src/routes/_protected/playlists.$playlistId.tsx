import { useInfiniteQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import PlaylistHeader from "~/components/playlist-header";
import SquareCoverPageSkeleton from "~/components/square-cover-page-skeleton";
import TracksTable from "~/components/tracks-table";
import TracksTableActions from "~/components/tracks-table-actions";
import { Button } from "~/components/ui/button";
import { playlistByIdQuery, playlistTracksInfiniteQuery } from "~/queries";

export const Route = createFileRoute("/_protected/playlists/$playlistId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { playlistId } = Route.useParams();
	const { data: playlist, isPending: isPlaylistPending } = useQuery(
		playlistByIdQuery(playlistId),
	);

	const {
		data: tracksData,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isPending: isTracksPending,
	} = useInfiniteQuery(playlistTracksInfiniteQuery(playlistId));

	const tracks = useMemo(() => {
		if (!tracksData) return [];
		return tracksData.pages.flatMap((page) => page.tracks);
	}, [tracksData]);

	const totalTracks = tracksData?.pages[0]?.total ?? 0;

	if (isPlaylistPending || isTracksPending) {
		return <SquareCoverPageSkeleton />;
	}

	return (
		<div className="space-y-8">
			{playlist && (
				<PlaylistHeader playlist={playlist} trackCount={totalTracks} />
			)}

			{tracks.length === 0 && (
				<div className="bg-muted mt-12 rounded-lg p-12 shadow-sm">
					<div className="flex flex-col items-center space-y-3 text-center">
						<p className="text-foreground">No tracks yet</p>
						<p className="text-muted-foreground text-sm">
							This playlist is empty
						</p>
					</div>
				</div>
			)}

			{tracks.length > 0 && (
				<div className="space-y-4">
					<TracksTableActions
						playlistId={playlistId}
						playlistName={playlist?.name ?? ""}
						tracks={tracks}
					/>
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
		</div>
	);
}
