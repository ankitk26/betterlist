import { Skeleton } from "./ui/skeleton"

export default function SidebarSkeleton() {
  return Array.from({ length: 5 }).map(() => (
    <div
      className="mt-4 flex w-full items-center gap-2 px-2"
      key={`sidebar_playlist_skeleton_${crypto.randomUUID()}`}
    >
      <Skeleton className="aspect-square size-12" />
      <div className="flex flex-1 flex-col gap-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ))
}
