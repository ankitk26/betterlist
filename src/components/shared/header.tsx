import { Link, useNavigate } from "@tanstack/react-router";
import { LogOut, User2 } from "lucide-react";
import { authClient } from "~/lib/auth-client";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import SearchInput from "./search-input";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 mx-4 flex items-center justify-between rounded-lg p-2">
      <Link to="/">
        <img
          alt="Spotify logo"
          height={50}
          src="https://res.cloudinary.com/drnu1myuq/image/upload/v1754937393/spotify_logo_xmxgc6.png"
          width={125}
        />
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
          <div className="flex items-center gap-3 rounded-full border border-border bg-secondary py-1 pr-3 pl-1">
            {session?.user.image ? (
              <img
                alt={session?.user?.name}
                className="h-8 w-8 rounded-full object-contain"
                height={32}
                src={session?.user.image as string}
                width={32}
              />
            ) : (
              <User2 className="rounded-full p-1" />
            )}
            <span className="text-sm">{session?.user.name}</span>
          </div>
        )}

        <Button
          onClick={async () => {
            await authClient.signOut();
            await navigate({ to: "/login" });
          }}
          size="icon"
          variant="secondary"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
