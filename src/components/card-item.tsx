import { Link } from "@tanstack/react-router";
import CardItemContent from "./card-item-content";

type Props = {
  item: {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    type: string;
  };
};

export default function CardItem({ item }: Props) {
  const content = <CardItemContent item={item} />;

  if (item.type === "categories") {
    return content;
  }

  if (item.type === "artists") {
    return (
      <Link params={{ artistId: item.id }} to="/artists/$artistId">
        {content}
      </Link>
    );
  }

  if (item.type === "albums") {
    return (
      <Link params={{ albumId: item.id }} to="/albums/$albumId">
        {content}
      </Link>
    );
  }

  return (
    <Link params={{ playlistId: item.id }} to="/playlists/$playlistId">
      {content}
    </Link>
  );
}
