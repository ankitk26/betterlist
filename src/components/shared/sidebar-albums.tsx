import { useQuery } from "@tanstack/react-query";
import { userAlbumsQuery } from "~/queries";
import { useSidebarStore } from "~/stores/use-sidebar-store";
import SidebarLibraryItem from "./sidebar-library-item";
import SidebarSkeleton from "./sidebar-skeleton";

export default function SidebarAlbums() {
  const library = useSidebarStore((store) => store.library);

  const { data, isPending } = useQuery({
    ...userAlbumsQuery,
    enabled: library === "albums",
  });

  if (library !== "albums") {
    return null;
  }

  if (isPending) {
    return <SidebarSkeleton />;
  }

  return data?.map((album) => (
    <SidebarLibraryItem
      id={album.album.id}
      image={album.album.images[0].url}
      key={`album_${album.album.id}`}
      subtitle={
        album.album.artists.length > 0 ? album.album.artists[0].name : ""
      }
      title={album.album.name}
    />
  ));
}
