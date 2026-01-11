import { useQuery } from "@tanstack/react-query"
import { userArtistsQuery } from "~/queries"
import { useSidebarStore } from "~/stores/sidebar-store"
import SidebarLibraryItem from "./sidebar-library-item"
import SidebarSkeleton from "./sidebar-skeleton"

export default function SidebarArtists() {
  const library = useSidebarStore((store) => store.library)

  const { data, isPending } = useQuery({
    ...userArtistsQuery,
    enabled: library === "artists",
  })

  if (library !== "artists") {
    return null
  }

  if (isPending) {
    return <SidebarSkeleton />
  }

  return data?.map((artist) => (
    <SidebarLibraryItem
      id={artist.id}
      image={artist.images[0].url}
      key={`sidebar_artist_${artist.id}`}
      title={artist.name}
    />
  ))
}
