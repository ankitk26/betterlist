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
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-12">
      <img
        alt="spotify logo"
        height={96}
        src="https://res.cloudinary.com/drnu1myuq/image/upload/v1754937393/spotify_logo_xmxgc6.png"
        width={320}
      />
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
