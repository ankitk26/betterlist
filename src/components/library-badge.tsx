import {
  type SidebarLibrary,
  updateSidebarLibrary,
  useSidebarStore,
} from "~/stores/sidebar-store";
import { Button } from "./ui/button";

export default function LibraryBadge({ type }: { type: SidebarLibrary }) {
  const library = useSidebarStore((store) => store.library);

  return (
    <Button
      className="rounded-full px-3 text-xs"
      onClick={() => updateSidebarLibrary(type)}
      size="sm"
      variant={type === library ? "default" : "secondary"}
    >
      {type[0].toUpperCase().concat(type.substring(1))}
    </Button>
  );
}
