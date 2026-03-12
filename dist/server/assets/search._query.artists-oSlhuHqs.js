import { useQuery } from "@tanstack/react-query";
import { jsx } from "react/jsx-runtime";
import { c as Route, s as searchItemsQuery } from "./router-DnCUH2Rc.js";
import {
	S as SquareSkeletons,
	C as CardItem,
} from "./square-skeleton-miX3v30i.js";
import "@tanstack/react-router";
import "@unpic/react";
import "@phosphor-icons/react";
import "./skeleton-CZt9RIoG.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
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
function RouteComponent() {
	const { query } = Route.useParams();
	const { data, isPending, isError, error } = useQuery(
		searchItemsQuery({
			query,
			type: "artist",
			limit: 50,
		}),
	);
	if (isPending) {
		return /* @__PURE__ */ jsx(SquareSkeletons, { count: 10 });
	}
	if (isError) {
		return /* @__PURE__ */ jsx("p", { children: error.message });
	}
	if (!data) {
		return null;
	}
	return /* @__PURE__ */ jsx("div", {
		className: "mt-4 grid grid-cols-5 items-stretch gap-8",
		children: data.artists.map((artist) =>
			/* @__PURE__ */ jsx(
				CardItem,
				{
					item: {
						id: artist.id,
						image:
							artist.images && artist.images.length > 0
								? artist.images[0].url
								: "",
						title: artist.name,
						type: "artists",
					},
				},
				`search_results_artist_${query}_${artist.id}`,
			),
		),
	});
}
export { RouteComponent as component };
