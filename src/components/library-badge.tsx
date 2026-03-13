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
			className="px-3"
			onClick={() => updateSidebarLibrary(type)}
			variant={type === library ? "secondary" : "outline"}
		>
			{type[0].toUpperCase().concat(type.substring(1))}
		</Button>
	);
}
