import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { artistTopTracksQuery } from "~/queries";
import TracksTable from "../shared/tracks-table";
import TracksTableSkeleton from "../shared/tracks-table-skeleton";

export default function ArtistTopTracks() {
  const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
  const { data, isPending } = useQuery(artistTopTracksQuery(artistId));

  if (isPending) {
    return <TracksTableSkeleton />;
  }

  if (data && data.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <h1>Popular</h1>
      <TracksTable showCover tracks={data ?? []} />
    </div>
  );
}
