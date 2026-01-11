import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import Header from "~/components/header"
import Sidebar from "~/components/sidebar"
import { ScrollArea } from "~/components/ui/scroll-area"

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context }) => {
    const session = context.session

    if (!session) {
      throw redirect({ to: "/login" })
    }

    return { session }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="mb-2 grid flex-1 grid-cols-10 gap-4 overflow-hidden p-4 pt-0">
        <Sidebar />
        <div className="col-span-8 flex flex-col rounded-lg border bg-card text-card-foreground dark:border-none">
          <ScrollArea className="h-[calc(100dvh-6rem)]">
            <main className="mx-8 my-8">
              <Outlet />
            </main>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
