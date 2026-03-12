import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { MusicNoteIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { cva } from "class-variance-authority";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import {
	i as artistAppearsOnQuery,
	j as artistCompilationQuery,
	k as artistDiscographyQuery,
	m as artistByIdQuery,
	n as artistTopTracksQuery,
} from "./router-DnCUH2Rc.js";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import {
	S as SquareSkeletons,
	C as CardItem,
} from "./square-skeleton-miX3v30i.js";
import { T as TracksTableActions } from "./tracks-table-actions-0jJgI6lS.js";
import {
	T as TracksTableSkeleton,
	a as TracksTable,
} from "./tracks-table-DrB7FpSt.js";
import { c as cn } from "./utils-H80jjgLf.js";
import "@tanstack/react-router-with-query";
import "next-themes";
import "sonner";
import "./createSsrRpc-DFX_9v9X.js";
import "../server.js";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "h3-v2";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "zod";
import "./get-auth-session-C8yCND15.js";
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
import "clsx";
import "tailwind-merge";
import "zustand";
import "@base-ui/react/checkbox";
import "@base-ui/react/separator";
import "react";
import "./button-CJdb3Z05.js";
import "@base-ui/react/button";
import "./label-B4egPdzO.js";
import "@base-ui/react/input";
import "@base-ui/react/dialog";
import "@base-ui/react/alert-dialog";
function ArtistAppearsOn() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data, isPending } = useQuery(artistAppearsOnQuery(artistId));
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareSkeletons, {});
	}
	if (data && data.length === 0) {
		return null;
	}
	return /* @__PURE__ */ jsxs("div", {
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Appears On" }),
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 grid grid-cols-5 items-stretch gap-8",
				children: data?.map((album) =>
					/* @__PURE__ */ jsx(
						CardItem,
						{
							item: {
								id: album.id,
								title: album.name,
								subtitle: album.artists[0].name ?? "",
								image: album.images.length > 0 ? album.images[0].url : "",
								type: "albums",
							},
						},
						album.id,
					),
				),
			}),
		],
	});
}
function ArtistCompilation() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data, isPending } = useQuery(artistCompilationQuery(artistId));
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareSkeletons, {});
	}
	if (data && data.length === 0) {
		return null;
	}
	return /* @__PURE__ */ jsxs("div", {
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Compilation" }),
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 grid grid-cols-5 items-stretch gap-8",
				children: data?.map((album) =>
					/* @__PURE__ */ jsx(
						CardItem,
						{
							item: {
								id: album.id,
								title: album.name,
								subtitle: album.artists[0].name ?? "",
								image: album.images.length > 0 ? album.images[0].url : "",
								type: "albums",
							},
						},
						album.id,
					),
				),
			}),
		],
	});
}
function ArtistDiscography() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data, isPending } = useQuery(artistDiscographyQuery(artistId));
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareSkeletons, {});
	}
	if (data && data.length === 0) {
		return null;
	}
	return /* @__PURE__ */ jsxs("div", {
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Discography" }),
			/* @__PURE__ */ jsx("div", {
				className: "mt-4 grid grid-cols-5 items-stretch gap-8",
				children: data?.map((album) => {
					const formatteReleaseDate = new Date(
						album.release_date,
					).toLocaleString("en-US", {
						month: "short",
						year: "numeric",
					});
					let formattedSubtitle = "";
					if (album.album_type) {
						formattedSubtitle =
							album.album_type[0].toUpperCase() +
							album.album_type?.substring(1);
					}
					const subtitle = `${formattedSubtitle} (${formatteReleaseDate})`;
					return /* @__PURE__ */ jsx(
						CardItem,
						{
							item: {
								id: album.id,
								title: album.name,
								subtitle,
								image: album.images.length > 0 ? album.images[0].url : "",
								type: "albums",
							},
						},
						album.id,
					);
				}),
			}),
		],
	});
}
const badgeVariants = cva(
	"group/badge focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all focus-visible:ring-[3px] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-2.5!",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
				destructive:
					"bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
				outline:
					"border-border bg-input/20 text-foreground dark:bg-input/30 [a]:hover:bg-muted [a]:hover:text-muted-foreground",
				ghost:
					"hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
function Badge({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps(
			{
				className: cn(badgeVariants({ variant }), className),
			},
			props,
		),
		render,
		state: {
			slot: "badge",
			variant,
		},
	});
}
function ArtistHero() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data: artist, isPending } = useQuery(artistByIdQuery(artistId));
	if (isPending) {
		return /* @__PURE__ */ jsx("div", {
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-end gap-4",
				children: [
					/* @__PURE__ */ jsx(Skeleton, {
						className: "aspect-square w-64 rounded-full",
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-4",
						children: [
							/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-3/4" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16" }),
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16" }),
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-16" }),
								],
							}),
						],
					}),
				],
			}),
		});
	}
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-end gap-6",
		children:
			artist &&
			/* @__PURE__ */ jsxs(Fragment, {
				children: [
					artist.images.length > 0
						? /* @__PURE__ */ jsx(Image, {
								alt: artist.name,
								className:
									"ring-border h-64 w-64 rounded-full object-cover shadow-xl ring-1",
								height: 256,
								src: artist.images[0].url,
								width: 256,
							})
						: /* @__PURE__ */ jsx("div", {
								className: "h-40 w-full",
								children: /* @__PURE__ */ jsx(MusicNoteIcon, {
									className: "bg-card h-full w-full",
									size: 160,
								}),
							}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-start gap-3",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-5xl font-bold",
								children: artist.name,
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-muted-foreground text-sm",
								children: [
									artist.followers?.total.toLocaleString(),
									" followers",
								],
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-5 text-sm",
								children: artist?.genres?.map((genre) =>
									/* @__PURE__ */ jsx(
										Badge,
										{ variant: "secondary", children: genre },
										genre,
									),
								),
							}),
						],
					}),
				],
			}),
	});
}
function ArtistTopTracks() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data, isPending } = useQuery(artistTopTracksQuery(artistId));
	if (isPending) {
		return /* @__PURE__ */ jsx(TracksTableSkeleton, {});
	}
	if (data && data.length === 0) {
		return null;
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Popular" }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsx(TracksTableActions, {}),
					/* @__PURE__ */ jsx(TracksTable, {
						showCover: true,
						tracks: data ?? [],
					}),
				],
			}),
		],
	});
}
function RouteComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-16",
		children: [
			/* @__PURE__ */ jsx(ArtistHero, {}),
			/* @__PURE__ */ jsx(ArtistTopTracks, {}),
			/* @__PURE__ */ jsx(ArtistDiscography, {}),
			/* @__PURE__ */ jsx(ArtistAppearsOn, {}),
			/* @__PURE__ */ jsx(ArtistCompilation, {}),
		],
	});
}
export { RouteComponent as component };
