import { useQuery } from "@tanstack/react-query";
import { userTopArtistsQuery } from "~/queries";
import CardItem from "../shared/card-item";

export default function UserTopArtists() {
  const { data, isPending } = useQuery(userTopArtistsQuery({ limit: 15 }));

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid items-stretch gap-8 mt-4 grid-cols-5">
      {data?.map((artist) => (
        <CardItem
          key={artist.id}
          item={{
            id: artist.id,
            title: artist.name,
            image: artist.images.length > 0 ? artist.images[0].url : "",
            type: "artists",
          }}
        />
      ))}
    </div>
  );
}
