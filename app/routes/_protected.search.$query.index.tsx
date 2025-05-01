import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import CardItem from "~/components/shared/card-item";
import SquareSkeletons from "~/components/shared/square-skeleton";
import TracksTable from "~/components/shared/tracks-table";
import TracksTableSkeleton from "~/components/shared/tracks-table-skeleton";
import { searchItemsQuery } from "~/queries";

export const Route = createFileRoute("/_protected/search/$query/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { query } = Route.useParams();
  const { data, isPending } = useQuery(
    searchItemsQuery({ query, type: "all" })
  );

  if (isPending) {
    return (
      <div className="space-y-10">
        <TracksTableSkeleton />
        <SquareSkeletons />
        <SquareSkeletons />
      </div>
    );
  }

  if (!data) {
    return <div className="flex flex-col items-stretch gap-8">No results</div>;
  }

  return (
    <>
      {data.tracks && data.tracks.length > 0 && (
        <div className="flex flex-col items-stretch">
          <h1>Tracks</h1>
          <TracksTable tracks={data.tracks} showAlbum showCover showSubtitle />
        </div>
      )}

      {data.artists && data.artists.length > 0 && (
        <div>
          <h1>Artists</h1>
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
        </div>
      )}

      {data.albums && data.albums.length > 0 && (
        <div>
          <h1>Albums</h1>
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
        </div>
      )}

      {data.playlists && data.playlists.length > 0 && (
        <div>
          <h1>Playlists</h1>
          <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
            {data.playlists
              .filter((playlist) => playlist !== null)
              .map((playlist) => (
                <CardItem
                  key={"search_results_playlist_" + query}
                  item={{
                    id: playlist.id,
                    image: playlist.images[0].url ?? "",
                    title: playlist.name,
                    subtitle: playlist.description,
                    type: "playlists",
                  }}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
