import { MusicNoteIcon, DotIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import DOMPurify from "dompurify";
import parse, { attributesToProps, domToReact } from "html-react-parser";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { g as Route, p as playlistByIdQuery } from "./router-DnCUH2Rc.js";
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
import "@tanstack/react-router";
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
function PlaylistDescription({ description }) {
	return /* @__PURE__ */ jsx("p", {
		className: "text-muted-foreground mt-3 text-sm font-medium",
		children: parse(DOMPurify.sanitize(description), {
			replace: (domNode) => {
				if (
					typeof domNode === "object" &&
					"name" in domNode &&
					domNode.name === "a"
				) {
					const node = domNode;
					const props = node.attribs ? attributesToProps(node.attribs) : {};
					return /* @__PURE__ */ jsx("a", {
						...props,
						className: "text-sky-500 hover:underline",
						rel: "noopener noreferrer",
						target: "_blank",
						children: node.children ? domToReact(node.children) : null,
					});
				}
				return domNode;
			},
		}),
	});
}
function PlaylistHeader({ playlist }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-end gap-6",
		children: [
			(playlist.images?.length ?? 0) > 0
				? /* @__PURE__ */ jsx(Image, {
						alt: playlist.name,
						className:
							"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
						height: 256,
						src: playlist.images?.[0].url || "/placeholder.svg",
						width: 256,
					})
				: /* @__PURE__ */ jsx("div", {
						className:
							"bg-muted ring-border flex h-64 w-64 items-center justify-center rounded-lg shadow-xl ring-1",
						children: /* @__PURE__ */ jsx(MusicNoteIcon, {
							className: "text-muted-foreground h-24 w-24",
						}),
					}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsx("h5", {
						className: "text-muted-foreground text-xs font-bold uppercase",
						children: playlist.type,
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-6xl font-bold",
						children: playlist.name,
					}),
					playlist.description &&
						playlist.description !== "null" &&
						/* @__PURE__ */ jsx(PlaylistDescription, {
							description: playlist.description,
						}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center text-sm font-semibold",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: playlist.owner?.display_name,
							}),
							playlist.tracks.length > 0 &&
								/* @__PURE__ */ jsxs(Fragment, {
									children: [
										/* @__PURE__ */ jsx(DotIcon, {
											className: "text-muted-foreground",
										}),
										/* @__PURE__ */ jsxs("span", {
											className: "text-muted-foreground",
											children: [
												playlist.tracks.length.toLocaleString(),
												" songs",
											],
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
	const { playlistId } = Route.useParams();
	const { data: playlist, isPending } = useQuery(playlistByIdQuery(playlistId));
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareCoverPageSkeleton, {});
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8",
		children: [
			playlist && /* @__PURE__ */ jsx(PlaylistHeader, { playlist }),
			playlist?.tracks &&
				playlist?.tracks.length === 0 &&
				/* @__PURE__ */ jsx("div", {
					className: "bg-muted mt-12 rounded-lg p-12 shadow-sm",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center space-y-3 text-center",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-foreground",
								children: "No tracks yet",
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground text-sm",
								children: "This playlist is empty",
							}),
						],
					}),
				}),
			playlist?.tracks &&
				playlist?.tracks.length !== 0 &&
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ jsx(TracksTableActions, {
							playlistId: playlist?.id,
							playlistName: playlist?.name,
							tracks: playlist.tracks.filter((track) => track !== null),
						}),
						/* @__PURE__ */ jsx(TracksTable, {
							showAlbum: true,
							showCover: true,
							showHeader: true,
							showSubtitle: true,
							tracks: playlist?.tracks.filter((track) => track !== null),
						}),
					],
				}),
		],
	});
}
export { RouteComponent as component };
