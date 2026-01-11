import { useQuery } from "@tanstack/react-query"
import { userPlaylistsQuery } from "~/queries"
import { useSidebarStore } from "~/stores/sidebar-store"
import SidebarLibraryItem from "./sidebar-library-item"
import SidebarSkeleton from "./sidebar-skeleton"

export default function UserPlaylists() {
  const library = useSidebarStore((store) => store.library)

  const { data, isPending } = useQuery({
    ...userPlaylistsQuery,
    enabled: library === "playlists",
  })

  if (isPending) {
    return <SidebarSkeleton />
  }

  return data?.map((playlist) => (
    <SidebarLibraryItem
      id={playlist.id}
      image={playlist.images?.[0]?.url ?? ""}
      key={`playlist__${playlist.id}`}
      title={playlist.name ?? ""}
    />
  ))
}
