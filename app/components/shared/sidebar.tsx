import { Layers } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import LibraryBadge from "./library-badge";
import SidebarAlbums from "./sidebar-albums";
import SidebarPlaylists from "./sidebar-playlists";
import SidebarArtists from "./sidebar-artists";

export default function SideBar() {
  return (
    <aside className="flex flex-col h-[calc(100dvh-5.5rem)] col-span-2 px-2 bg-card text-card-foreground rounded-lg">
      <div className="flex flex-col px-2 py-4 mt-2 rounded-lg">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Layers className="size-5" />
          <h4 className="text-sm">Your Library</h4>
        </div>

        <div className="grid grid-cols-3 my-6 items-center gap-2">
          <LibraryBadge type="playlists" />
          <LibraryBadge type="albums" />
          <LibraryBadge type="artists" />
        </div>

        <div>
          <ScrollArea className="w-full pr-3 h-[calc(100dvh-15rem)]">
            <SidebarPlaylists />
            <SidebarAlbums />
            <SidebarArtists />
          </ScrollArea>
        </div>
      </div>
    </aside>
  );
}
