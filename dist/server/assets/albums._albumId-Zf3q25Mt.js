import { MusicNoteIcon, DotIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { e as Route, f as albumByIdQuery } from "./router-DnCUH2Rc.js";
import { S as SquareCoverPageSkeleton } from "./square-cover-page-skeleton-Eh5V38oD.js";
import { T as TracksTableActions } from "./tracks-table-actions-0jJgI6lS.js";
import { a as TracksTable } from "./tracks-table-DrB7FpSt.js";
import "./skeleton-CZt9RIoG.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "zustand";
import "@base-ui/react/checkbox";
import "@base-ui/react/separator";
import "react";
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
import "./button-CJdb3Z05.js";
import "@base-ui/react/button";
import "class-variance-authority";
import "./label-B4egPdzO.js";
import "@base-ui/react/input";
import "@base-ui/react/dialog";
import "@base-ui/react/alert-dialog";
import "@tanstack/react-router-with-query";
import "next-themes";
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
function AlbumHeader({ album }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-end gap-6",
		children: [
			album.images && album.images.length > 0
				? /* @__PURE__ */ jsx(Image, {
						alt: album.name,
						className:
							"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
						height: 256,
						src: album.images[0].url ?? "",
						width: 256,
					})
				: /* @__PURE__ */ jsx("div", {
						className: "h-40 w-full",
						children: /* @__PURE__ */ jsx(MusicNoteIcon, {
							className: "h-full w-full",
							size: 160,
						}),
					}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx("h5", {
						className: "text-xs font-bold uppercase",
						children: album.album_type,
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-5xl font-bold",
						children: album.name,
					}),
					/* @__PURE__ */ jsxs("div", {
						className:
							"text-muted-foreground flex items-center text-sm font-semibold",
						children: [
							/* @__PURE__ */ jsx(Link, {
								className: "hover:underline",
								params: { artistId: album.artists[0].id },
								to: "/artists/$artistId",
								children: album.artists[0].name,
							}),
							/* @__PURE__ */ jsx(DotIcon, {}),
							/* @__PURE__ */ jsx("span", {
								children: new Date(album.release_date).getFullYear(),
							}),
							album.tracks &&
								album.tracks.items.length > 0 &&
								/* @__PURE__ */ jsxs(Fragment, {
									children: [
										/* @__PURE__ */ jsx(DotIcon, {}),
										/* @__PURE__ */ jsxs("span", {
											children: [album.tracks.total, " songs"],
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
function RouteComponent() {
	const { albumId } = Route.useParams();
	const { data: album, isPending } = useQuery(albumByIdQuery(albumId));
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareCoverPageSkeleton, {});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8",
		children: [
			album && /* @__PURE__ */ jsx(AlbumHeader, { album }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ jsx(TracksTableActions, {}),
					/* @__PURE__ */ jsx(TracksTable, {
						showHeader: true,
						showSubtitle: true,
						tracks: album ? album.tracks.items : [],
					}),
				],
			}),
		],
	});
}
export { RouteComponent as component };
