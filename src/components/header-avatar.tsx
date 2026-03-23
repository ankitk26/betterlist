import { SignOutIcon, UserIcon } from "@phosphor-icons/react";
import { useNavigate, useRouteContext } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { authClient } from "~/lib/auth-client";
import ThemeHandler from "./theme-handler";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function HeaderAvatar() {
	const { session } = useRouteContext({ from: "/_protected" });
	const navigate = useNavigate();

	const handleSignOut = async () => {
		navigate({ to: "/login" });
		await authClient.signOut();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<button className="flex cursor-pointer items-center gap-3 border border-border bg-card py-1 pr-3 pl-1 transition-colors hover:bg-accent">
						{session.user.image ? (
							<Image
								alt={session.user.name}
								className="size-6 object-contain"
								height={28}
								src={(session.user.image as string) || "/placeholder.svg"}
								width={28}
							/>
						) : (
							<UserIcon className="p-1" />
						)}
						<span className="text-xs">{session.user.name}</span>
					</button>
				}
			/>

			<DropdownMenuContent align="end" className="w-64 border-border bg-card">
				<DropdownMenuGroup>
					<DropdownMenuLabel className="text-sm font-medium text-muted-foreground">
						Preferences
					</DropdownMenuLabel>

					<div className="px-2 py-2">
						<ThemeHandler />
					</div>

					<DropdownMenuSeparator />

					<DropdownMenuItem
						className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground"
						onClick={async () => {
							await handleSignOut();
							await navigate({ to: "/login" });
						}}
					>
						<SignOutIcon className="size-3" />
						Sign Out
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
