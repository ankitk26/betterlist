import {
  SidebarLibrary,
  updateSidebarLibrary,
  useSidebarStore,
} from "~/stores/use-sidebar-store";
import { Button } from "../ui/button";

export default function LibraryBadge({ type }: { type: SidebarLibrary }) {
  const library = useSidebarStore((store) => store.library);

  return (
    <Button
      className="rounded-full px-3 text-xs"
      variant={type === library ? "default" : "secondary"}
      size="sm"
      onClick={() => updateSidebarLibrary(type)}
    >
      {type[0].toUpperCase().concat(type.substring(1))}
    </Button>
  );
}
