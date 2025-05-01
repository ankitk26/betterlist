import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";
import logo from "~/static/spotify_logo.png?url";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[100dvh] flex flex-col gap-12 items-center justify-center">
      <img src={logo} width={320} height={96} />
      <Button
        size="lg"
        onClick={async () => {
          await authClient.signIn.social({ provider: "spotify" });
        }}
      >
        Login
      </Button>
    </div>
  );
}
