import { useSidebarStore } from "~/stores/use-sidebar-store";
import SidebarLikedSongs from "./sidebar-liked-songs";
import UserPlaylists from "./user-playlists";

export default function SidebarPlaylists() {
  const library = useSidebarStore((store) => store.library);

  if (library !== "playlists") {
    return null;
  }

  return (
    <>
      <SidebarLikedSongs />
      <UserPlaylists />
    </>
  );
}
