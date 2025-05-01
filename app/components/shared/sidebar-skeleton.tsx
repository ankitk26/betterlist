import { Skeleton } from "../ui/skeleton";

export default function SidebarSkeleton() {
  return Array.from({ length: 5 }).map((_, index) => (
    <div
      key={"sidebar_playlist_skeleton_" + index}
      className="flex items-center mt-4 gap-2 w-full px-2"
    >
      <Skeleton className="size-12 aspect-square" />
      <div className="flex flex-col flex-1 gap-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ));
}
