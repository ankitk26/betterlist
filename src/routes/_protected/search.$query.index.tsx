import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import CardItem from "~/components/card-item"
import SquareSkeletons from "~/components/square-skeleton"
import TracksTable from "~/components/tracks-table"
import TracksTableSkeleton from "~/components/tracks-table-skeleton"
import { searchItemsQuery } from "~/queries"

export const Route = createFileRoute("/_protected/search/$query/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { query } = Route.useParams()
  const { data, isPending } = useQuery(searchItemsQuery({ query, type: "all" }))

  if (isPending) {
    return (
      <div className="space-y-10">
        <TracksTableSkeleton />
        <SquareSkeletons />
        <SquareSkeletons />
      </div>
    )
  }

  if (!data) {
    return <div className="flex flex-col items-stretch gap-8">No results</div>
  }

  return (
    <>
      {data.tracks && data.tracks.length > 0 && (
        <div className="flex flex-col items-stretch">
          <h1>Tracks</h1>
          <TracksTable showAlbum showCover showSubtitle tracks={data.tracks} />
        </div>
      )}

      {data.artists && data.artists.length > 0 && (
        <div>
          <h1>Artists</h1>
          <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
            {data.artists.map((artist) => (
              <CardItem
                item={{
                  id: artist.id,
                  image:
                    artist.images && artist.images.length > 0
                      ? artist.images[0].url
                      : "",
                  title: artist.name,
                  type: "artists",
                }}
                key={`search_results_artist_${query}_${artist.id}`}
              />
            ))}
          </div>
        </div>
      )}

      {data.albums && data.albums.length > 0 && (
        <div>
          <h1>Albums</h1>
          <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
            {data.albums.map((album) => (
              <CardItem
                item={{
                  id: album.id,
                  image:
                    album.images && album.images.length > 0
                      ? album.images[0].url
                      : "",
                  title: album.name,
                  subtitle: album.artists[0].name ?? "",
                  type: "albums",
                }}
                key={`search_results_album_${query}`}
              />
            ))}
          </div>
        </div>
      )}

      {data.playlists && data.playlists.length > 0 && (
        <div>
          <h1>Playlists</h1>
          <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
            {data.playlists
              .filter((playlist) => playlist !== null)
              .map((playlist) => (
                <CardItem
                  item={{
                    id: playlist.id,
                    image: playlist.images[0].url ?? "",
                    title: playlist.name,
                    subtitle: playlist.description,
                    type: "playlists",
                  }}
                  key={`search_results_playlist_${query}`}
                />
              ))}
          </div>
        </div>
      )}
    </>
  )
}
