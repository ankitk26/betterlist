import { QueryClient } from "@tanstack/react-query"
import { createRouter } from "@tanstack/react-router"
import { routerWithQueryClient } from "@tanstack/react-router-with-query"
import { routeTree } from "./routeTree.gen"

export function getRouter() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // do not refetch after 5 minutes from the initial query
        staleTime: 1000 * 60 * 5,
      },
    },
  })

  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    context: { queryClient, session: null },
    defaultPreload: "intent",
    defaultNotFoundComponent: () => <p>Not found</p>,
  })

  return routerWithQueryClient(router, queryClient)
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
