import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { artistAlbumsQuery } from "~/queries";
import CardItem from "../shared/card-item";
import SquareSkeletons from "../shared/square-skeleton";

export default function ArtistAlbums() {
  const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
  const { data, isPending } = useQuery(artistAlbumsQuery(artistId));

  if (isPending) {
    return <SquareSkeletons />;
  }

  if (data && data.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>Albums</h1>
      <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
        {data?.map((album) => (
          <CardItem
            item={{
              id: album.id,
              title: album.name,
              subtitle: album.artists[0].name ?? "",
              image: album.images.length > 0 ? album.images[0].url : "",
              type: "albums",
            }}
            key={album.id}
          />
        ))}
      </div>
    </div>
  );
}
