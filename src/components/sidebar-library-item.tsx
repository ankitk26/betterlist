import { Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"
import { MusicIcon } from "lucide-react"
import { cn } from "~/lib/utils"
import { useSidebarStore } from "~/stores/sidebar-store"

type Props = {
  id: string
  image: string
  title: string
  subtitle?: string
}

export default function SidebarLibraryItem({
  id,
  image,
  title,
  subtitle,
}: Props) {
  const library = useSidebarStore((store) => store.library)

  const href = `/${library}/${id}`

  return (
    <Link
      activeProps={{
        className: "bg-secondary",
      }}
      className="flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-md p-2 hover:bg-secondary"
      to={href}
    >
      {image ? (
        <Image
          alt={title}
          className={cn(
            "aspect-square shrink-0 object-cover",
            library === "artists" ? "rounded-full" : "rounded-md",
          )}
          height={48}
          src={image}
          width={48}
        />
      ) : (
        <div className="flex aspect-square h-12 shrink-0 items-center justify-center rounded-md border bg-muted dark:border-muted">
          <MusicIcon className="size-6 rounded-md" />
        </div>
      )}

      <div className="min-w-0 flex-1 overflow-hidden">
        <h6 className="truncate font-semibold text-sm">{title}</h6>
        {library !== "artists" && (
          <span className="mt-1 block truncate font-medium text-muted-foreground text-xs">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  )
}
