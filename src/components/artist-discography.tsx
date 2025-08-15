import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { artistDiscographyQuery } from "~/queries";
import CardItem from "./card-item";
import SquareSkeletons from "./square-skeleton";

export default function ArtistDiscography() {
  const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
  const { data, isPending } = useQuery(artistDiscographyQuery(artistId));

  if (isPending) {
    return <SquareSkeletons />;
  }

  if (data && data.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>Discography</h1>
      <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
        {data?.map((album) => {
          const formatteReleaseDate = new Date(
            album.release_date
          ).toLocaleString("en-US", {
            month: "short",
            year: "numeric",
          });

          let formattedSubtitle = "";
          if (album.album_type) {
            formattedSubtitle =
              album.album_type[0].toUpperCase() +
              album.album_type?.substring(1);
          }

          const subtitle = `${formattedSubtitle} (${formatteReleaseDate})`;
          return (
            <CardItem
              item={{
                id: album.id,
                title: album.name,
                subtitle,
                image: album.images.length > 0 ? album.images[0].url : "",
                type: "albums",
              }}
              key={album.id}
            />
          );
        })}
      </div>
    </div>
  );
}
