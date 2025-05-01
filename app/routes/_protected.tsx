import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Header from "~/components/shared/header";
import Sidebar from "~/components/shared/sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";

export const Route = createFileRoute("/_protected")({
  beforeLoad: async ({ context }) => {
    const session = context.session;

    if (!session) {
      throw redirect({ to: "/login" });
    }

    return { session };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="grid flex-1 grid-cols-10 p-4 mb-2 pt-0 gap-4 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col col-span-8 rounded-lg bg-card text-card-foreground">
          <ScrollArea className="h-[calc(100dvh-6rem)]">
            <main className="mx-8 my-8">
              <Outlet />
            </main>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
