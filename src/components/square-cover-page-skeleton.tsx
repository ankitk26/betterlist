import TracksTableSkeleton from "./tracks-table-skeleton"
import { Skeleton } from "./ui/skeleton"

export default function SquareCoverPageSkeleton() {
  return (
    <section className="space-y-20">
      <div className="flex items-end gap-4">
        <Skeleton className="aspect-square w-64" />
        <div className="flex-1 space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-3/4" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
      </div>
      <TracksTableSkeleton />
    </section>
  )
}
