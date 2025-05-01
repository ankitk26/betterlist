import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import CardItem from "~/components/shared/card-item";
import SquareSkeletons from "~/components/shared/square-skeleton";
import { searchItemsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/search/$query/artists")({
  component: RouteComponent,
});

function RouteComponent() {
  const { query } = Route.useParams();
  const { data, isPending, isError, error } = useQuery(
    searchItemsQuery({ query, type: "artist", limit: 50 })
  );

  if (isPending) {
    return <SquareSkeletons count={10} />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data) return null;

  return (
    <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
      {data.artists.map((artist) => (
        <CardItem
          key={"search_results_artist_" + query + "_" + artist.id}
          item={{
            id: artist.id,
            image:
              artist.images && artist.images.length > 0
                ? artist.images[0].url
                : "",
            title: artist.name,
            type: "artists",
          }}
        />
      ))}
    </div>
  );
}
