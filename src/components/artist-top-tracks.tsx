import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { artistTopTracksQuery } from "~/queries"
import TracksTable from "./tracks-table"
import TracksTableActions from "./tracks-table-actions"
import TracksTableSkeleton from "./tracks-table-skeleton"

export default function ArtistTopTracks() {
  const { artistId } = useParams({ from: "/_protected/artists/$artistId" })
  const { data, isPending } = useQuery(artistTopTracksQuery(artistId))

  if (isPending) {
    return <TracksTableSkeleton />
  }

  if (data && data.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h1>Popular</h1>
      <div className="space-y-1">
        <TracksTableActions />
        <TracksTable showCover tracks={data ?? []} />
      </div>
    </div>
  )
}
