import { Link } from "@tanstack/react-router";
import { cn } from "~/lib/utils";
import { useSidebarStore } from "~/stores/use-sidebar-store";

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
      to={href}
      className="flex items-center p-2 gap-3 rounded-md hover:bg-secondary"
      activeProps={{
        className: "bg-secondary",
      }}
    >
      <img
        src={image}
        alt={title}
        height={50}
        width={50}
        className={cn(
          "aspect-square object-cover",
          library === "artists" ? "rounded-full" : "rounded-md"
        )}
      />

      <div className="truncate">
        <h6 className="w-full text-sm font-semibold truncate">{title}</h6>
        {library !== "artists" && (
          <span className="mt-1 text-xs font-medium text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}
