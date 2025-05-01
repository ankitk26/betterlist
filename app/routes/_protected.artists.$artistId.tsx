import { createFileRoute } from "@tanstack/react-router";
import ArtistAlbums from "~/components/artist/artist-albums";
import ArtistAppearsOn from "~/components/artist/artist-appears-on";
import ArtistCompilation from "~/components/artist/artist-compilation";
import ArtistHero from "~/components/artist/artist-hero";
import ArtistSingles from "~/components/artist/artist-singles";
import ArtistTopTracks from "~/components/artist/artist-top-tracks";

export const Route = createFileRoute("/_protected/artists/$artistId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-16">
      <ArtistHero />
      <ArtistTopTracks />
      <ArtistAlbums />
      <ArtistSingles />
      <ArtistAppearsOn />
      <ArtistCompilation />
    </div>
  );
}
