import CreatePlaylistDialog from "./create-playlist-dialog"
import LibraryBadge from "./library-badge"
import SidebarAlbums from "./sidebar-albums"
import SidebarArtists from "./sidebar-artists"
import SidebarPlaylists from "./sidebar-playlists"
import { ScrollArea } from "./ui/scroll-area"

export default function SideBar() {
  return (
    <aside className="col-span-2 flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden rounded-lg border bg-card px-2 text-card-foreground dark:border-none">
      <div className="mt-2 flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg px-2 py-4">
        <CreatePlaylistDialog />

        <div className="my-6 grid grid-cols-3 items-center gap-2">
          <LibraryBadge type="playlists" />
          <LibraryBadge type="albums" />
          <LibraryBadge type="artists" />
        </div>

        <div className="min-w-0 flex-1 overflow-hidden">
          <ScrollArea className="h-[calc(100dvh-15rem)] w-full pr-3 [&>div]:overflow-x-hidden!">
            <div className="w-full space-y-2 pr-1">
              <SidebarPlaylists />
              <SidebarAlbums />
              <SidebarArtists />
            </div>
          </ScrollArea>
        </div>
      </div>
    </aside>
  )
}
