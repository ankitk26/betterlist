import { DotIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { a as authClient } from "./auth-client-Txudls8a.js";
import { l as likedSongsQuery } from "./router-DnCUH2Rc.js";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import {
	T as TracksTableSkeleton,
	a as TracksTable,
} from "./tracks-table-DrB7FpSt.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "zustand";
import "@base-ui/react/checkbox";
import "@base-ui/react/separator";
import "@tanstack/react-router";
import "react";
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
import "zod";
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
import "nanostores";
import "@better-auth/core/utils/string";
import "@tanstack/react-router-with-query";
import "next-themes";
import "sonner";
import "./get-auth-session-C8yCND15.js";
function RouteComponent() {
	const { data, isPending } = useQuery(likedSongsQuery);
	const { data: authData, isPending: authIsPending } = authClient.useSession();
	if (isPending || authIsPending) {
		return /* @__PURE__ */ jsxs("section", {
			className: "space-y-20",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-end gap-4",
					children: [
						/* @__PURE__ */ jsx(Skeleton, { className: "aspect-square w-64" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1 space-y-4",
							children: [
								/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
								/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-3/4" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [
										/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
										/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
										/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
									],
								}),
							],
						}),
					],
				}),
				/* @__PURE__ */ jsx(TracksTableSkeleton, {}),
			],
		});
	}
	return /* @__PURE__ */ jsxs(Fragment, {
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-end gap-6",
				children: [
					/* @__PURE__ */ jsx(Image, {
						alt: "Liked Songs",
						className:
							"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
						height: 256,
						src: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
						width: 256,
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ jsx("h5", {
								className: "text-sm font-bold",
								children: "Playlist",
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-6xl font-bold",
								children: "Liked Songs",
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center text-sm font-semibold",
								children: [
									/* @__PURE__ */ jsx("span", {
										children: authData?.user.name,
									}),
									data?.total &&
										data.total > 0 &&
										/* @__PURE__ */ jsxs(Fragment, {
											children: [
												/* @__PURE__ */ jsx(DotIcon, {}),
												/* @__PURE__ */ jsxs("span", {
													children: [data.total, " songs"],
												}),
											],
										}),
								],
							}),
						],
					}),
				],
			}),
			data?.items &&
				/* @__PURE__ */ jsx(TracksTable, {
					showAlbum: true,
					showCover: true,
					showHeader: true,
					showSubtitle: true,
					tracks: data.items,
				}),
		],
	});
}
export { RouteComponent as component };
