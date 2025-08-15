import { useQuery } from "@tanstack/react-query";
import { userTopArtistsQuery } from "~/queries";
import CardItem from "../shared/card-item";

export default function UserTopArtists() {
  const { data, isPending } = useQuery(userTopArtistsQuery({ limit: 10 }));

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
      {data?.map((artist) => (
        <CardItem
          item={{
            id: artist.id,
            title: artist.name,
            image: artist.images.length > 0 ? artist.images[0].url : "",
            type: "artists",
          }}
          key={artist.id}
        />
      ))}
    </div>
  );
}
