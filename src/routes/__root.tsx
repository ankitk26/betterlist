/// <reference types="vite/client" />
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "better-themes";
import type { ReactNode } from "react";
import { Toaster } from "~/components/ui/sonner";
import { authSessionQuery } from "~/queries";
import type { getAuthSession } from "~/server-fns/get-auth-session";
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
				title: "betterlist",
			},
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	component: RootComponent,
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
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange
					enableSystem
				>
					{children}
					<Toaster style={{ fontFamily: "inherit" }} />
					<ReactQueryDevtools buttonPosition="bottom-right" />
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
