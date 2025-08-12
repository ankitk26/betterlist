import { Clock3 } from "lucide-react";
import { cn } from "~/lib/utils";
import { Separator } from "../ui/separator";

export default function TracksTableHeader({
  showAlbum,
}: {
  showAlbum: boolean;
}) {
  return (
    <>
      <header className="grid grid-cols-12 gap-2 p-4 pb-1 text-muted-foreground">
        <div className="col-span-1 text-left font-semibold uppercase tracking-wider">
          #
        </div>

        <div
          className={cn(
            "text-left font-semibold text-sm",
            showAlbum ? "col-span-6" : "col-span-10"
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
          <Clock3 size={16} />
        </div>
      </header>

      {/* Divider */}
      <Separator />
    </>
  );
}
