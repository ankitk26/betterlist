import { SpinnerIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className="flex h-[100dvh] flex-col items-center justify-center gap-6">
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-3xl font-semibold">betterlist</h1>
				<p className="text-muted-foreground">
					Manage Spotify playlists effortlessly
				</p>
			</div>
			<Button
				className="w-[200px]"
				onClick={async () => {
					setIsLoading(true);
					await authClient.signIn.social({ provider: "spotify" });
				}}
				size="lg"
			>
				{isLoading ? <SpinnerIcon className="animate-spin" /> : "Login"}
			</Button>
		</div>
	);
}
