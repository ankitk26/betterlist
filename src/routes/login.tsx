import { createFileRoute } from "@tanstack/react-router";
import { LoaderIcon } from "lucide-react";
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
      <div className="flex flex-col gap-2 items-center">
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
        {isLoading ? <LoaderIcon className="animate-spin" /> : "Login"}
      </Button>
    </div>
  );
}
