import { useNavigate } from "@tanstack/react-router";
import { LogOut, User2 } from "lucide-react";
import { authClient } from "~/lib/auth-client";
import ThemeHandler from "./theme-handler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function HeaderAvatar() {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    navigate({ to: "/login" });
    await authClient.signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3 rounded-full border border-border bg-card py-1 pr-3 pl-1 transition-colors hover:bg-accent">
          {session?.user.image ? (
            <img
              alt={session?.user?.name}
              className="size-6 rounded-full object-contain"
              height={28}
              src={(session?.user.image as string) || "/placeholder.svg"}
              width={28}
            />
          ) : (
            <User2 className="rounded-full p-1" />
          )}
          <span className="text-xs">{session?.user.name}</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 border-border bg-card">
        <DropdownMenuLabel className="font-medium text-muted-foreground text-sm">
          Preferences
        </DropdownMenuLabel>

        <div className="px-2 py-2">
          <ThemeHandler />
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 text-sm"
          onClick={async () => {
            await handleSignOut();
            await navigate({ to: "/login" });
          }}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
