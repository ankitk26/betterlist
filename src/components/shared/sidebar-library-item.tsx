import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import { useSidebarStore } from "~/stores/sidebar-store";

type Props = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
};

export default function SidebarLibraryItem({
  id,
  image,
  title,
  subtitle,
}: Props) {
  const library = useSidebarStore((store) => store.library);

  const href = `/${library}/${id}`;

  return (
    <Link
      activeProps={{
        className: "bg-secondary",
      }}
      className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary"
      to={href}
    >
      <img
        alt={title}
        className={cn(
          "aspect-square object-cover",
          library === "artists" ? "rounded-full" : "rounded-md"
        )}
        height={50}
        src={image}
        width={50}
      />

      <div className="truncate">
        <h6 className="w-full truncate font-semibold text-sm">{title}</h6>
        {library !== "artists" && (
          <span className="mt-1 font-medium text-muted-foreground text-xs">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}
