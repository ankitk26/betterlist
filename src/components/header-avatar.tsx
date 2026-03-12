import { useNavigate } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { LogOutIcon, User2Icon } from "lucide-react";
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
				<div className="border-border bg-card hover:bg-accent flex cursor-pointer items-center gap-3 rounded-full border py-1 pr-3 pl-1 transition-colors">
					{session?.user.image ? (
						<Image
							alt={session?.user?.name}
							className="size-6 rounded-full object-contain"
							height={28}
							src={(session?.user.image as string) || "/placeholder.svg"}
							width={28}
						/>
					) : (
						<User2Icon className="rounded-full p-1" />
					)}
					<span className="text-xs">{session?.user.name}</span>
				</div>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="border-border bg-card w-64">
				<DropdownMenuLabel className="text-muted-foreground text-sm font-medium">
					Preferences
				</DropdownMenuLabel>

				<div className="px-2 py-2">
					<ThemeHandler />
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					className="text-muted-foreground flex cursor-pointer items-center gap-2 text-xs"
					onClick={async () => {
						await handleSignOut();
						await navigate({ to: "/login" });
					}}
				>
					<LogOutIcon className="size-3" />
					Sign Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
