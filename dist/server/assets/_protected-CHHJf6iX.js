import { Menu } from "@base-ui/react/menu";
import { ScrollArea as ScrollArea$1 } from "@base-ui/react/scroll-area";
import {
	SunIcon,
	MonitorIcon,
	MoonIcon,
	UserIcon,
	SignOutIcon,
	CaretLeftIcon,
	PlusIcon,
	SpinnerIcon,
	MusicNoteIcon,
} from "@phosphor-icons/react";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
	useNavigate,
	useCanGoBack,
	useRouter,
	Link,
	Outlet,
} from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { toast } from "sonner";
import { z } from "zod";
import { create } from "zustand";
import { c as createServerFn } from "../server.js";
import { a as authClient } from "./auth-client-Txudls8a.js";
import { B as Button } from "./button-CJdb3Z05.js";
import { c as createSsrRpc } from "./createSsrRpc-DFX_9v9X.js";
import {
	I as Input,
	D as Dialog,
	a as DialogTrigger,
	b as DialogContent,
	g as DialogHeader,
	c as DialogTitle,
	L as Label,
} from "./label-B4egPdzO.js";
import {
	o as userPlaylistsQuery,
	q as userAlbumsQuery,
	r as userArtistsQuery,
	t as likedSongsCountQuery,
} from "./router-DnCUH2Rc.js";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import { c as cn } from "./utils-H80jjgLf.js";
import "./auth-QHBGbWNS.js";
import "@better-auth/core/env";
import "@better-auth/core/error";
import "@better-auth/utils/random";
import "@better-auth/utils/hex";
import "@better-auth/utils/hash";
import "@better-auth/utils";
import "@noble/ciphers/chacha.js";
import "@noble/ciphers/utils.js";
import "@better-auth/core/db";
import "@better-auth/core/utils/db";
import "@noble/hashes/hkdf.js";
import "@noble/hashes/sha2.js";
import "jose";
import "@better-auth/core/utils/json";
import "@better-auth/utils/base64";
import "@better-auth/utils/binary";
import "@better-auth/utils/hmac";
import "@better-auth/core/context";
import "better-call";
import "@better-auth/core/utils/url";
import "@better-auth/core/api";
import "@better-auth/core/utils/deprecate";
import "@better-auth/core/utils/ip";
import "@better-auth/core/utils/id";
import "defu";
import "@better-auth/core/social-providers";
import "jose/errors";
import "@better-auth/kysely-adapter";
import "@better-auth/core/db/adapter";
import "kysely";
import "@noble/hashes/scrypt.js";
import "@noble/hashes/utils.js";
import "@better-auth/telemetry";
import "@better-auth/core";
import "@better-auth/core/oauth2";
import "@better-auth/core/utils/error-codes";
import "@better-auth/drizzle-adapter";
import "@better-fetch/fetch";
import "@better-auth/core/utils/fetch-metadata";
import "@better-auth/utils/otp";
import "drizzle-orm/postgres-js";
import "postgres";
import "drizzle-orm/pg-core";
import "nanostores";
import "@better-auth/core/utils/string";
import "@base-ui/react/button";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@base-ui/react/input";
import "@base-ui/react/dialog";
import "@tanstack/react-router-with-query";
import "./get-auth-session-C8yCND15.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
function ThemeHandler() {
	const { theme, setTheme } = useTheme();
	const handleThemeChange = (newTheme) => {
		setTheme(newTheme);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center justify-between",
		children: [
			/* @__PURE__ */ jsx("span", { className: "text-sm", children: "Theme" }),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-muted flex items-center gap-1 rounded-md p-1",
				children: [
					/* @__PURE__ */ jsx(Button, {
						className: "size-6 p-0",
						onClick: () => handleThemeChange("light"),
						size: "sm",
						variant: theme === "light" ? "default" : "ghost",
						children: /* @__PURE__ */ jsx(SunIcon, { className: "size-3" }),
					}),
					/* @__PURE__ */ jsx(Button, {
						className: "size-6 p-0",
						onClick: () => handleThemeChange("system"),
						size: "sm",
						variant: theme === "system" ? "default" : "ghost",
						children: /* @__PURE__ */ jsx(MonitorIcon, { className: "size-3" }),
					}),
					/* @__PURE__ */ jsx(Button, {
						className: "size-6 p-0",
						onClick: () => handleThemeChange("dark"),
						size: "sm",
						variant: theme === "dark" ? "default" : "ghost",
						children: /* @__PURE__ */ jsx(MoonIcon, { className: "size-3" }),
					}),
				],
			}),
		],
	});
}
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Root, {
		"data-slot": "dropdown-menu",
		...props,
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props,
	});
}
function DropdownMenuContent({
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 4,
	className,
	...props
}) {
	return /* @__PURE__ */ jsx(Menu.Portal, {
		children: /* @__PURE__ */ jsx(Menu.Positioner, {
			className: "isolate z-50 outline-none",
			align,
			alignOffset,
			side,
			sideOffset,
			children: /* @__PURE__ */ jsx(Menu.Popup, {
				"data-slot": "dropdown-menu-content",
				className: cn(
					"bg-popover text-popover-foreground ring-foreground/10 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg p-1 shadow-md ring-1 duration-100 outline-none data-closed:overflow-hidden",
					className,
				),
				...props,
			}),
		}),
	});
}
function DropdownMenuLabel({ className, inset, ...props }) {
	return /* @__PURE__ */ jsx(Menu.GroupLabel, {
		"data-slot": "dropdown-menu-label",
		"data-inset": inset,
		className: cn(
			"text-muted-foreground px-2 py-1.5 text-xs data-inset:pl-7.5",
			className,
		),
		...props,
	});
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn(
			"group/dropdown-menu-item focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:*:[svg]:text-destructive relative flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
			className,
		),
		...props,
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("bg-border/50 -mx-1 my-1 h-px", className),
		...props,
	});
}
function HeaderAvatar() {
	const { data: session } = authClient.useSession();
	const navigate = useNavigate();
	const handleSignOut = async () => {
		navigate({ to: "/login" });
		await authClient.signOut();
	};
	return /* @__PURE__ */ jsxs(DropdownMenu, {
		children: [
			/* @__PURE__ */ jsx(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs("div", {
					className:
						"border-border bg-card hover:bg-accent flex cursor-pointer items-center gap-3 rounded-full border py-1 pr-3 pl-1 transition-colors",
					children: [
						session?.user.image
							? /* @__PURE__ */ jsx(Image, {
									alt: session?.user?.name,
									className: "size-6 rounded-full object-contain",
									height: 28,
									src: session?.user.image || "/placeholder.svg",
									width: 28,
								})
							: /* @__PURE__ */ jsx(UserIcon, {
									className: "rounded-full p-1",
								}),
						/* @__PURE__ */ jsx("span", {
							className: "text-xs",
							children: session?.user.name,
						}),
					],
				}),
			}),
			/* @__PURE__ */ jsxs(DropdownMenuContent, {
				align: "end",
				className: "border-border bg-card w-64",
				children: [
					/* @__PURE__ */ jsx(DropdownMenuLabel, {
						className: "text-muted-foreground text-sm font-medium",
						children: "Preferences",
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-2 py-2",
						children: /* @__PURE__ */ jsx(ThemeHandler, {}),
					}),
					/* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
					/* @__PURE__ */ jsxs(DropdownMenuItem, {
						className:
							"text-muted-foreground flex cursor-pointer items-center gap-2 text-xs",
						onClick: async () => {
							await handleSignOut();
							await navigate({ to: "/login" });
						},
						children: [
							/* @__PURE__ */ jsx(SignOutIcon, { className: "size-3" }),
							"Sign Out",
						],
					}),
				],
			}),
		],
	});
}
const useGlobalStore = create()(() => ({
	searchInput: "",
}));
const setSearchInput = (val) => {
	useGlobalStore.setState({ searchInput: val });
};
function SearchInput() {
	const navigate = useNavigate();
	const searchInput = useGlobalStore((store) => store.searchInput);
	const handleSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (searchInput !== "") {
			navigate({ to: "/search/$query", params: { query: searchInput } });
		}
	};
	return /* @__PURE__ */ jsx("form", {
		className:
			"flex flex-1 items-center justify-between gap-3 rounded-full px-3 py-1.5",
		onSubmit: handleSubmit,
		children: /* @__PURE__ */ jsx(Input, {
			className: "border-border w-full flex-grow dark:border-none",
			onChange: (e) => setSearchInput(e.target.value),
			placeholder: "Artists, Songs, Playlists",
			spellCheck: false,
			value: searchInput,
		}),
	});
}
function Header() {
	const { isPending } = authClient.useSession();
	const canGoBack = useCanGoBack();
	const router = useRouter();
	return /* @__PURE__ */ jsxs("header", {
		className:
			"sticky top-0 z-50 mx-4 flex items-center justify-between rounded-lg p-2",
		children: [
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				children: /* @__PURE__ */ jsx("h1", { children: "betterlist" }),
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex w-1/2 items-center gap-2",
				children: [
					canGoBack &&
						/* @__PURE__ */ jsxs(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => {
								router.history.back();
							},
							children: [/* @__PURE__ */ jsx(CaretLeftIcon, {}), "Back"],
						}),
					/* @__PURE__ */ jsx(SearchInput, {}),
				],
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [
					isPending &&
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ jsx(Skeleton, {
									className: "size-10 rounded-full",
								}),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
							],
						}),
					!isPending && /* @__PURE__ */ jsx(HeaderAvatar, {}),
				],
			}),
		],
	});
}
const createPlaylist = createServerFn({
	method: "POST",
})
	.inputValidator(z.string())
	.handler(
		createSsrRpc(
			"363cdb5c11c9d0c740d941ea8775661365f1ef30b231b0155e2544d43b7efb32",
		),
	);
function CreatePlaylistDialog() {
	const [playlistName, setPlaylistName] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const queryClient = useQueryClient();
	const createPlaylistMutation = useMutation({
		mutationFn: createPlaylist,
		onSuccess: (newPlaylist) => {
			if (!newPlaylist) {
				toast.error("Something went wrong");
				return;
			}
			queryClient.setQueryData(userPlaylistsQuery.queryKey, (old = []) => [
				newPlaylist,
				...old,
			]);
			setIsOpen(false);
			toast.success("Playlist created");
		},
		onError: () => {
			toast.error("Something went wrong");
		},
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		if (playlistName.trim()) {
			createPlaylistMutation.mutate({ data: playlistName });
			setPlaylistName("");
		}
	};
	return /* @__PURE__ */ jsxs(Dialog, {
		onOpenChange: setIsOpen,
		open: isOpen,
		children: [
			/* @__PURE__ */ jsx(DialogTrigger, {
				asChild: true,
				children: /* @__PURE__ */ jsxs(Button, {
					size: "lg",
					children: [
						/* @__PURE__ */ jsx(PlusIcon, { className: "size-4" }),
						"Create playlist",
					],
				}),
			}),
			/* @__PURE__ */ jsxs(DialogContent, {
				className: "sm:max-w-md",
				children: [
					/* @__PURE__ */ jsx(DialogHeader, {
						className: "pb-4",
						children: /* @__PURE__ */ jsx(DialogTitle, {
							children: "Create New Playlist",
						}),
					}),
					/* @__PURE__ */ jsxs("form", {
						className: "space-y-6",
						onSubmit: handleSubmit,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ jsx(Label, {
										htmlFor: "playlist-name",
										children: "Playlist Name",
									}),
									/* @__PURE__ */ jsx(Input, {
										autoFocus: true,
										id: "playlist-name",
										onChange: (e) => setPlaylistName(e.target.value),
										placeholder: "Enter playlist name...",
										value: playlistName,
									}),
								],
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-end gap-3 pt-2",
								children: [
									/* @__PURE__ */ jsx(Button, {
										className: "px-6",
										onClick: () => setIsOpen(false),
										type: "button",
										variant: "outline",
										children: "Cancel",
									}),
									/* @__PURE__ */ jsx(Button, {
										className: "px-6",
										disabled:
											!playlistName.trim() || createPlaylistMutation.isPending,
										type: "submit",
										children: createPlaylistMutation.isPending
											? /* @__PURE__ */ jsx(SpinnerIcon, {
													className: "size-4 animate-spin",
												})
											: "Create Playlist",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
const useSidebarStore = create()(() => ({
	library: "playlists",
}));
const updateSidebarLibrary = (updatedLibrary) => {
	useSidebarStore.setState({ library: updatedLibrary });
};
function LibraryBadge({ type }) {
	const library = useSidebarStore((store) => store.library);
	return /* @__PURE__ */ jsx(Button, {
		className: "rounded-lg px-3 text-xs",
		onClick: () => updateSidebarLibrary(type),
		size: "sm",
		variant: type === library ? "secondary" : "outline",
		children: type[0].toUpperCase().concat(type.substring(1)),
	});
}
function SidebarLibraryItem({ id, image, title, subtitle }) {
	const library = useSidebarStore((store) => store.library);
	const href = `/${library}/${id}`;
	return /* @__PURE__ */ jsxs(Link, {
		activeProps: {
			className: "bg-secondary",
		},
		className:
			"hover:bg-secondary flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-md p-2",
		to: href,
		children: [
			image
				? /* @__PURE__ */ jsx(Image, {
						alt: title,
						className: cn(
							"aspect-square shrink-0 object-cover",
							library === "artists" ? "rounded-full" : "rounded-md",
						),
						height: 48,
						src: image,
						width: 48,
					})
				: /* @__PURE__ */ jsx("div", {
						className:
							"bg-muted dark:border-muted flex aspect-square h-12 shrink-0 items-center justify-center rounded-md border",
						children: /* @__PURE__ */ jsx(MusicNoteIcon, {
							className: "size-6 rounded-md",
						}),
					}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("h6", {
						className: "truncate text-sm font-semibold",
						children: title,
					}),
					library !== "artists" &&
						/* @__PURE__ */ jsx("span", {
							className:
								"text-muted-foreground mt-1 block truncate text-xs font-medium",
							children: subtitle,
						}),
				],
			}),
		],
	});
}
function SidebarSkeleton() {
	return Array.from({ length: 5 }).map(() =>
		/* @__PURE__ */ jsxs(
			"div",
			{
				className: "mt-4 flex w-full items-center gap-2 px-2",
				children: [
					/* @__PURE__ */ jsx(Skeleton, { className: "aspect-square size-12" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" }),
						],
					}),
				],
			},
			`sidebar_playlist_skeleton_${crypto.randomUUID()}`,
		),
	);
}
function SidebarAlbums() {
	const library = useSidebarStore((store) => store.library);
	const { data, isPending } = useQuery({
		...userAlbumsQuery,
		enabled: library === "albums",
	});
	if (library !== "albums") {
		return null;
	}
	if (isPending) {
		return /* @__PURE__ */ jsx(SidebarSkeleton, {});
	}
	return data?.map((album) =>
		/* @__PURE__ */ jsx(
			SidebarLibraryItem,
			{
				id: album.album.id,
				image: album.album.images[0].url,
				subtitle:
					album.album.artists.length > 0 ? album.album.artists[0].name : "",
				title: album.album.name,
			},
			`album_${album.album.id}`,
		),
	);
}
function SidebarArtists() {
	const library = useSidebarStore((store) => store.library);
	const { data, isPending } = useQuery({
		...userArtistsQuery,
		enabled: library === "artists",
	});
	if (library !== "artists") {
		return null;
	}
	if (isPending) {
		return /* @__PURE__ */ jsx(SidebarSkeleton, {});
	}
	return data?.map((artist) =>
		/* @__PURE__ */ jsx(
			SidebarLibraryItem,
			{
				id: artist.id,
				image: artist.images[0].url,
				title: artist.name,
			},
			`sidebar_artist_${artist.id}`,
		),
	);
}
function SidebarLikedSongs() {
	const library = useSidebarStore((store) => store.library);
	const { data, isPending } = useQuery({
		...likedSongsCountQuery,
		enabled: library === "playlists",
	});
	return /* @__PURE__ */ jsxs(Link, {
		activeProps: {
			className: "bg-secondary",
		},
		className:
			"hover:bg-secondary flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-md p-2",
		to: "/collection/tracks",
		children: [
			/* @__PURE__ */ jsx(Image, {
				alt: "Liked playlist cover",
				className: "shrink-0 rounded-md",
				height: 50,
				src: "https://res.cloudinary.com/drnu1myuq/image/upload/v1754937393/liked_cover_x3ach0.jpg",
				width: 50,
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "min-w-0 flex-1 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("h6", {
						className: "truncate text-sm font-medium",
						children: "Liked Songs",
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground block truncate text-xs",
						children: isPending
							? /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
							: `${data?.count} songs`,
					}),
				],
			}),
		],
	});
}
function UserPlaylists() {
	const library = useSidebarStore((store) => store.library);
	const { data, isPending } = useQuery({
		...userPlaylistsQuery,
		enabled: library === "playlists",
	});
	if (isPending) {
		return /* @__PURE__ */ jsx(SidebarSkeleton, {});
	}
	return data?.map((playlist) =>
		/* @__PURE__ */ jsx(
			SidebarLibraryItem,
			{
				id: playlist.id,
				image: playlist.images?.[0]?.url ?? "",
				title: playlist.name ?? "",
			},
			`playlist__${playlist.id}`,
		),
	);
}
function SidebarPlaylists() {
	const library = useSidebarStore((store) => store.library);
	if (library !== "playlists") {
		return null;
	}
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsx(SidebarLikedSongs, {}),
			/* @__PURE__ */ jsx(UserPlaylists, {}),
		],
	});
}
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(ScrollArea$1.Root, {
		"data-slot": "scroll-area",
		className: cn("relative", className),
		...props,
		children: [
			/* @__PURE__ */ jsx(ScrollArea$1.Viewport, {
				"data-slot": "scroll-area-viewport",
				className:
					"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
				children,
			}),
			/* @__PURE__ */ jsx(ScrollBar, {}),
			/* @__PURE__ */ jsx(ScrollArea$1.Corner, {}),
		],
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(ScrollArea$1.Scrollbar, {
		"data-slot": "scroll-area-scrollbar",
		"data-orientation": orientation,
		orientation,
		className: cn(
			"flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
			className,
		),
		...props,
		children: /* @__PURE__ */ jsx(ScrollArea$1.Thumb, {
			"data-slot": "scroll-area-thumb",
			className: "bg-border relative flex-1 rounded-full",
		}),
	});
}
function SideBar() {
	return /* @__PURE__ */ jsx("aside", {
		className:
			"bg-card text-card-foreground col-span-2 flex h-[calc(100dvh-5.5rem)] flex-col overflow-hidden rounded-lg border px-2 dark:border-none",
		children: /* @__PURE__ */ jsxs("div", {
			className:
				"mt-2 flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg px-2 py-4",
			children: [
				/* @__PURE__ */ jsx(CreatePlaylistDialog, {}),
				/* @__PURE__ */ jsxs("div", {
					className: "my-6 grid grid-cols-3 items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(LibraryBadge, { type: "playlists" }),
						/* @__PURE__ */ jsx(LibraryBadge, { type: "albums" }),
						/* @__PURE__ */ jsx(LibraryBadge, { type: "artists" }),
					],
				}),
				/* @__PURE__ */ jsx("div", {
					className: "min-w-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ jsx(ScrollArea, {
						className:
							"h-[calc(100dvh-15rem)] w-full pr-3 [&>div]:overflow-x-hidden!",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full space-y-2 pr-1",
							children: [
								/* @__PURE__ */ jsx(SidebarPlaylists, {}),
								/* @__PURE__ */ jsx(SidebarAlbums, {}),
								/* @__PURE__ */ jsx(SidebarArtists, {}),
							],
						}),
					}),
				}),
			],
		}),
	});
}
function RouteComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("div", {
				className:
					"mb-2 grid flex-1 grid-cols-10 gap-4 overflow-hidden p-4 pt-0",
				children: [
					/* @__PURE__ */ jsx(SideBar, {}),
					/* @__PURE__ */ jsx("div", {
						className:
							"bg-card text-card-foreground col-span-8 flex flex-col rounded-lg border dark:border-none",
						children: /* @__PURE__ */ jsx(ScrollArea, {
							className: "h-[calc(100dvh-6rem)]",
							children: /* @__PURE__ */ jsx("main", {
								className: "mx-8 my-8",
								children: /* @__PURE__ */ jsx(Outlet, {}),
							}),
						}),
					}),
				],
			}),
		],
	});
}
export { RouteComponent as component };
