import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import UserTopArtists from "~/components/user-top-artists";
import UserTopTracks from "~/components/user-top-tracks";

export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex w-full flex-col items-stretch">
      <h1 className="mb-5 font-bold text-3xl">Your Stats</h1>

      <section className="mt-8">
        <div className="flex w-full items-center justify-between">
          <h1>Top Tracks</h1>
          {/* <Link to="/"> */}
          <Button variant="link">View all</Button>
          {/* </Link> */}
        </div>

        <div className="mt-4 grid w-full grid-cols-12 gap-4">
          <UserTopTracks />
        </div>
      </section>

      <h1 className="mt-16">Top Artists</h1>
      <UserTopArtists />
    </section>
  );
}
