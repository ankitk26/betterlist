import { useParams } from "@tanstack/react-router";
import TracksTable from "../shared/tracks-table";
import { useQuery } from "@tanstack/react-query";
import { artistTopTracksQuery } from "~/queries";
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
      <TracksTable tracks={data ?? []} showCover />
    </div>
  );
}
