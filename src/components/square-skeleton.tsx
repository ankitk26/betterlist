import { Skeleton } from "./ui/skeleton";

export default function SquareSkeletons({ count = 5 }: { count?: number }) {
  return (
    <div className="mt-4 grid grid-cols-5 items-stretch gap-8">
      {Array.from({ length: count }).map(() => (
        <Skeleton
          className="col-span-1 aspect-square w-full rounded-md"
          key={`recently_played_${crypto.randomUUID()}`}
        />
      ))}
    </div>
  );
}
