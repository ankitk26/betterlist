import { Clock3Icon } from "lucide-react"
import { cn } from "~/lib/utils"
import { usePlaylistEditorStore } from "~/stores/playlist-editor-store"
import type { Track } from "~/types"
import { Checkbox } from "./ui/checkbox"
import { Separator } from "./ui/separator"

export default function TracksTableHeader({
  showAlbum,
  tracks,
}: {
  showAlbum: boolean
  tracks: Track[]
}) {
  const areAllTracksSelected = usePlaylistEditorStore(
    (s) => s.selectedTrackIds.size === tracks.length,
  )
  const areTracksSelected = usePlaylistEditorStore(
    (s) => s.selectedTrackIds.size > 0,
  )
  const addAll = usePlaylistEditorStore((s) => s.addAll)
  const clearAll = usePlaylistEditorStore((s) => s.clearAll)

  return (
    <>
      <header className="grid grid-cols-12 gap-2 p-4 pb-1 text-muted-foreground">
        <div className="group relative col-span-1 flex items-center text-left font-semibold uppercase tracking-wider">
          <span
            className={`text-muted-foreground text-sm transition-opacity duration-100 ease-out ${
              areTracksSelected ? "opacity-0" : "group-hover:opacity-0"
            }`}
          >
            #
          </span>
          <div
            className={`absolute inset-0 flex items-center transition-opacity ${
              areTracksSelected
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <Checkbox
              checked={areAllTracksSelected}
              onCheckedChange={(checked) => {
                if (checked) {
                  addAll(tracks.map((track) => track.id))
                } else {
                  clearAll()
                }
              }}
            />
          </div>
        </div>

        <div
          className={cn(
            "text-left font-semibold text-sm",
            showAlbum ? "col-span-6" : "col-span-10",
          )}
        >
          Title
        </div>

        {showAlbum && (
          <div className="col-span-4 text-left font-semibold text-sm">
            Album
          </div>
        )}

        <div className="col-span-1 text-left font-semibold">
          <Clock3Icon size={16} />
        </div>
      </header>

      {/* Divider */}
      <Separator />
    </>
  )
}
