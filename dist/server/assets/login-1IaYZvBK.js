import { SpinnerIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { jsxs, jsx } from "react/jsx-runtime";
import { a as authClient } from "./auth-client-Txudls8a.js";
import { B as Button } from "./button-CJdb3Z05.js";
import "@base-ui/react/button";
import "class-variance-authority";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
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
import "@tanstack/react-router";
import "nanostores";
import "@better-auth/core/utils/string";
function RouteComponent() {
	const [isLoading, setIsLoading] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex h-[100dvh] flex-col items-center justify-center gap-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center gap-2",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-semibold",
						children: "betterlist",
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground",
						children: "Manage Spotify playlists effortlessly",
					}),
				],
			}),
			/* @__PURE__ */ jsx(Button, {
				className: "w-[200px]",
				onClick: async () => {
					setIsLoading(true);
					await authClient.signIn.social({
						provider: "spotify",
					});
				},
				size: "lg",
				children: isLoading
					? /* @__PURE__ */ jsx(SpinnerIcon, { className: "animate-spin" })
					: "Login",
			}),
		],
	});
}
export { RouteComponent as component };
