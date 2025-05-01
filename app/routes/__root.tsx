import type { QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

import { authSessionQuery } from "~/queries";
import { getAuthSession } from "~/server-fns/get-auth-session";
import appCss from "../app.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  session: Awaited<ReturnType<typeof getAuthSession>>;
}>()({
  beforeLoad: async ({ context }) => {
    const session = await context.queryClient.fetchQuery(authSessionQuery);
    return { session };
  },
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Tan-Spotify",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap",
      },
    ],
  }),
  component: RootComponent,
  pendingMinMs: 0,
  pendingComponent: undefined,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
        <Scripts />
      </body>
    </html>
  );
}
