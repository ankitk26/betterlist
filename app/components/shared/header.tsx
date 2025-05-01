import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, User2 } from "lucide-react";
import { authClient } from "~/lib/auth-client";
import logo from "~/static/spotify_logo.png?url";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import SearchInput from "./search-input";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-2 mx-4 rounded-lg">
      <Link to="/">
        <img src={logo} width={125} height={50} alt="Spotify logo" />
      </Link>

      <SearchInput />

      <div className="flex items-center gap-3">
        {isPending && (
          <div className="flex items-center gap-2">
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        )}

        {!isPending && (
          <div className="flex items-center gap-3 border border-border pr-3 pl-1 py-1 rounded-full bg-secondary">
            {session?.user.image ? (
              <img
                src={session?.user.image as string}
                className="object-contain w-8 h-8 rounded-full"
                alt={session?.user?.name}
                height={32}
                width={32}
              />
            ) : (
              <User2 className="p-1 rounded-full" />
            )}
            <span className="text-sm">{session?.user.name}</span>
          </div>
        )}

        <Button
          size="icon"
          variant="secondary"
          onClick={async () => {
            await authClient.signOut();
            await navigate({ to: "/login" });
          }}
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
