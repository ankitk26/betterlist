import { Skeleton } from "../ui/skeleton";

export default function TracksTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 justify-between gap-4">
        <Skeleton className="col-span-1 h-4 w-full" />
        <Skeleton className="col-span-5 h-4 w-full" />
        <Skeleton className="col-span-5 h-4 w-full" />
        <Skeleton className="col-span-1 h-4 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}
