import { createFileRoute } from "@tanstack/react-router";
import RecentlyPlayed from "~/components/home/recently-played";
import TimeCapsule from "~/components/home/time-capsule";
import UserTopArtists from "~/components/home/user-top-artists";
import UserTopTracks from "~/components/home/user-top-tracks";
import { Button } from "~/components/ui/button";
import { getGreeting } from "~/lib/get-greeting";

export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  const greeting = getGreeting();

  return (
    <section className="flex w-full flex-col items-stretch">
      <h1 className="mb-5 font-bold text-3xl">Good {greeting}</h1>

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

      <section className="mt-16">
        <h1>Recently played</h1>
        <RecentlyPlayed />
      </section>

      <h1 className="mt-16">Time Capsule</h1>
      <TimeCapsule />

      <h1 className="mt-16">Top Artists</h1>
      <UserTopArtists />
    </section>
  );
}

