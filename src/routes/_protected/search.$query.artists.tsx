import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import CardItem from "~/components/card-item"
import SquareSkeletons from "~/components/square-skeleton"
import { searchItemsQuery } from "~/queries"

export const Route = createFileRoute("/_protected/search/$query/artists")({
  component: RouteComponent,
})

function RouteComponent() {
  const { query } = Route.useParams()
  const { data, isPending, isError, error } = useQuery(
    searchItemsQuery({ query, type: "artist", limit: 50 }),
  )

  if (isPending) {
    return <SquareSkeletons count={10} />
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  if (!data) {
    return null
  }

  return (
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
  )
}
