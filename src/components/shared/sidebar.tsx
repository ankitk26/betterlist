import { Layers } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import LibraryBadge from "./library-badge";
import SidebarAlbums from "./sidebar-albums";
import SidebarArtists from "./sidebar-artists";
import SidebarPlaylists from "./sidebar-playlists";

export default function SideBar() {
  return (
    <aside className="col-span-2 flex h-[calc(100dvh-5.5rem)] flex-col rounded-lg bg-card px-2 text-card-foreground">
      <div className="mt-2 flex flex-col rounded-lg px-2 py-4">
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <Layers className="size-5" />
          <h4 className="text-sm">Your Library</h4>
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
