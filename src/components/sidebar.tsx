import { LayersIcon } from "lucide-react";
import { useSidebarStore } from "~/stores/sidebar-store";
import CreatePlaylistDialog from "./create-playlist-dialog";
import LibraryBadge from "./library-badge";
import SidebarAlbums from "./sidebar-albums";
import SidebarArtists from "./sidebar-artists";
import SidebarPlaylists from "./sidebar-playlists";
import { ScrollArea } from "./ui/scroll-area";

export default function SideBar() {
  const library = useSidebarStore((store) => store.library);

  return (
    <aside className="col-span-2 flex h-[calc(100dvh-5.5rem)] flex-col rounded-lg border bg-card px-2 text-card-foreground dark:border-none">
      <div className="mt-2 flex flex-col rounded-lg px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <LayersIcon className="size-5" />
            <h4 className="text-sm">Your Library</h4>
          </div>
          {library === "playlists" && <CreatePlaylistDialog />}
        </div>

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
