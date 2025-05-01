import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import CardItem from "~/components/shared/card-item";
import SquareSkeletons from "~/components/shared/square-skeleton";
import { searchItemsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/search/$query/albums")({
  component: RouteComponent,
});

function RouteComponent() {
  const { query } = Route.useParams();
  const { data, isPending, isError, error } = useQuery(
    searchItemsQuery({ query, type: "album", limit: 50 })
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
      {data.albums.map((album) => (
        <CardItem
          key={"search_results_album_" + query}
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
        />
      ))}
    </div>
  );
}
