import { createFileRoute } from "@tanstack/react-router";
import ArtistAppearsOn from "~/components/artist-appears-on";
import ArtistCompilation from "~/components/artist-compilation";
import ArtistDiscography from "~/components/artist-discography";
import ArtistHero from "~/components/artist-hero";
import ArtistTopTracks from "~/components/artist-top-tracks";

export const Route = createFileRoute("/_protected/artists/$artistId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-16">
      <ArtistHero />
      <ArtistTopTracks />
      <ArtistDiscography />
      <ArtistAppearsOn />
      <ArtistCompilation />
    </div>
  );
}
