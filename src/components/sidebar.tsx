import CreatePlaylistDialog from "./create-playlist-dialog";
import LibraryBadge from "./library-badge";
import SidebarAlbums from "./sidebar-albums";
import SidebarArtists from "./sidebar-artists";
import SidebarPlaylists from "./sidebar-playlists";
import { ScrollArea } from "./ui/scroll-area";

export default function SideBar() {
  return (
    <aside className="col-span-2 flex h-[calc(100dvh-5.5rem)] flex-col rounded-lg border bg-card px-2 text-card-foreground dark:border-none">
      <div className="mt-2 flex flex-col rounded-lg px-2 py-4">
        <CreatePlaylistDialog />

        <div className="my-6 grid grid-cols-3 items-center gap-2">
          <LibraryBadge type="playlists" />
          <LibraryBadge type="albums" />
          <LibraryBadge type="artists" />
        </div>

        <div>
          <ScrollArea className="h-[calc(100dvh-15rem)] w-full pr-3">
            <div className="space-y-2">
              <SidebarPlaylists />
              <SidebarAlbums />
              <SidebarArtists />
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
}
