import { createFileRoute } from "@tanstack/react-router";
import ArtistAppearsOn from "~/components/artist/artist-appears-on";
import ArtistCompilation from "~/components/artist/artist-compilation";
import ArtistDiscography from "~/components/artist/artist-discography";
import ArtistHero from "~/components/artist/artist-hero";
import ArtistTopTracks from "~/components/artist/artist-top-tracks";

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
