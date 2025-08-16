import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { StatsWrapped } from "~/components/stats-wrapped";
import { Skeleton } from "~/components/ui/skeleton";

export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex w-full flex-col items-stretch">
      <h1 className="mb-5 font-bold text-3xl">Your Stats</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <Suspense
          fallback={
            <>
              <Skeleton className="h-140" />
              <Skeleton className="h-140" />
              <Skeleton className="h-140" />
            </>
          }
        >
          <StatsWrapped range="short_term" />
          <StatsWrapped range="medium_term" />
          <StatsWrapped range="long_term" />
        </Suspense>
      </div>
    </section>
  );
}
