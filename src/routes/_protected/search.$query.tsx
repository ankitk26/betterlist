import { createFileRoute, Outlet } from "@tanstack/react-router";
import SearchFilters from "~/components/search-filters";

export const Route = createFileRoute("/_protected/search/$query")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-stretch gap-8">
      <SearchFilters />
      <Outlet />
    </div>
  );
}
