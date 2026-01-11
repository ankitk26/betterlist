import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import AlbumHeader from "~/components/album-header"
import SquareCoverPageSkeleton from "~/components/square-cover-page-skeleton"
import TracksTable from "~/components/tracks-table"
import TracksTableActions from "~/components/tracks-table-actions"
import { albumByIdQuery } from "~/queries"

export const Route = createFileRoute("/_protected/albums/$albumId")({
  component: RouteComponent,
})

function RouteComponent() {
  const { albumId } = Route.useParams()
  const { data: album, isPending } = useQuery(albumByIdQuery(albumId))

  if (isPending) {
    return <SquareCoverPageSkeleton />
  }

  return (
    <div className="space-y-8">
      {album && <AlbumHeader album={album} />}

      <div className="space-y-1">
        <TracksTableActions />
        <TracksTable
          showHeader
          showSubtitle
          tracks={album ? album.tracks.items : []}
        />
      </div>
    </div>
  )
}
