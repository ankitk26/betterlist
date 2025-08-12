import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import CardItem from "~/components/shared/card-item";
import SquareSkeletons from "~/components/shared/square-skeleton";
import { searchItemsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/search/$query/playlists")({
  component: RouteComponent,
});

function RouteComponent() {
  const { query } = Route.useParams();
  const { data, isPending, isError, error } = useQuery(
    searchItemsQuery({ query, type: "playlist", limit: 50 })
  );

  if (isPending) {
    return <SquareSkeletons count={10} />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
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
  );
}
