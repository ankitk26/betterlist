import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import TracksTable from "~/components/shared/tracks-table";
import TracksTableSkeleton from "~/components/shared/tracks-table-skeleton";
import { searchItemsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/search/$query/tracks")({
  component: RouteComponent,
});

function RouteComponent() {
  const { query } = Route.useParams();
  const { data, isPending, isError, error } = useQuery(
    searchItemsQuery({ query, type: "track", limit: 50 })
  );

  if (isPending) {
    return <TracksTableSkeleton />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return <TracksTable showCover showSubtitle tracks={data.tracks ?? []} />;
}
