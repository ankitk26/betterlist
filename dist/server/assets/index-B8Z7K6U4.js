import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { Suspense } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import {
	u as userTopTracksQuery,
	h as userTopArtistsQuery,
} from "./router-DnCUH2Rc.js";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import "@tanstack/react-router-with-query";
import "next-themes";
import "@phosphor-icons/react";
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
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const getMostFrequentGenre = (genres) => {
	let mostFrequentGenre = "";
	const genreFrequencyMap = {};
	let maxCounter = 0;
	for (const genre of genres) {
		if (genreFrequencyMap[genre] === void 0) {
			genreFrequencyMap[genre] = 1;
		} else {
			genreFrequencyMap[genre]++;
		}
		const currCounter = genreFrequencyMap[genre];
		if (currCounter > maxCounter) {
			mostFrequentGenre = genre;
			maxCounter = currCounter;
		}
	}
	return mostFrequentGenre;
};
function WrappedBackgroundDesign() {
	return /* @__PURE__ */ jsx("div", {
		className: "absolute inset-0 overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "absolute top-0 left-0 h-full w-full",
			children: /* @__PURE__ */ jsxs("svg", {
				viewBox: "0 0 400 600",
				className: "h-full w-full",
				"aria-labelledby": "wrappedBackgroundTitle",
				children: [
					/* @__PURE__ */ jsx("title", {
						id: "wrappedBackgroundTitle",
						children: "Decorative pink and rose flowing background",
					}),
					/* @__PURE__ */ jsxs("defs", {
						children: [
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "pinkGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#5a0a0a",
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#6b1423",
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#3d0a0a",
									}),
								],
							}),
							/* @__PURE__ */ jsxs("linearGradient", {
								id: "lightPinkGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									/* @__PURE__ */ jsx("stop", {
										offset: "0%",
										stopColor: "#6b2020",
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "50%",
										stopColor: "#5a1515",
									}),
									/* @__PURE__ */ jsx("stop", {
										offset: "100%",
										stopColor: "#4a0f0f",
									}),
								],
							}),
						],
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M0,100 Q100,50 200,100 T400,100 L400,200 Q300,150 200,200 T0,200 Z",
						fill: "url(#pinkGradient)",
						opacity: "0.5",
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M0,250 Q150,200 300,250 T400,250 L400,350 Q250,300 100,350 T0,350 Z",
						fill: "#2a0a0a",
						opacity: "0.4",
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M100,0 Q200,50 300,0 T500,0 L500,100 Q400,150 300,100 T100,100 Z",
						fill: "url(#lightPinkGradient)",
						opacity: "0.45",
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M0,400 Q100,350 200,400 T400,400 L400,500 Q300,450 200,500 T0,500 Z",
						fill: "url(#pinkGradient)",
						opacity: "0.4",
					}),
				],
			}),
		}),
	});
}
function getRangeTitle(range) {
	switch (range) {
		case "short_term":
			return "Last Month";
		case "medium_term":
			return "Last 6 Months";
		case "long_term":
			return "Last Year";
		default:
			return "Your Stats";
	}
}
function StatsWrapped(props) {
	const { data: tracks } = useSuspenseQuery(
		userTopTracksQuery({ limit: 5, range: props.range }),
	);
	const { data: artists } = useSuspenseQuery(
		userTopArtistsQuery({ range: props.range }),
	);
	const topArtistImages = artists?.[0].images.length;
	const randomIndex = Math.floor(Math.random() * (topArtistImages ?? 1));
	const allGenres = artists
		?.flatMap((artist) => artist.genres)
		.filter((genre) => genre !== void 0);
	const topGenre = getMostFrequentGenre(allGenres ?? ["NA"]);
	return /* @__PURE__ */ jsxs("div", {
		className:
			"relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-900 bg-black text-white",
		children: [
			/* @__PURE__ */ jsx(WrappedBackgroundDesign, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 p-6",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "mb-6 text-center",
						children: /* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-bold text-white",
							children: getRangeTitle(props.range),
						}),
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mb-8 flex justify-center",
						children: /* @__PURE__ */ jsx("div", {
							className: "h-48 w-48 rounded-lg bg-white p-2 shadow-lg",
							children: /* @__PURE__ */ jsx(Image, {
								alt: artists?.[0].name,
								className: "h-full w-full rounded object-contain",
								height: 180,
								src: artists?.[0].images[randomIndex].url || "",
								width: 180,
							}),
						}),
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										children: [
											/* @__PURE__ */ jsx("h2", {
												className: "mb-3 text-lg font-bold text-rose-50",
												children: "Top Artists",
											}),
											/* @__PURE__ */ jsx("div", {
												className: "space-y-1 text-sm",
												children: artists?.slice(0, 5).map((artist, index) =>
													/* @__PURE__ */ jsxs(
														"div",
														{
															className: "flex items-center gap-2",
															children: [
																/* @__PURE__ */ jsxs("span", {
																	className: "font-bold text-white",
																	children: ["#", index + 1],
																}),
																/* @__PURE__ */ jsx(Link, {
																	to: "/artists/$artistId",
																	params: { artistId: artist.id },
																	className: "text-white",
																	children: artist.name,
																}),
															],
														},
														artist.id,
													),
												),
											}),
										],
									}),
									/* @__PURE__ */ jsxs("div", {
										children: [
											/* @__PURE__ */ jsx("h2", {
												className: "mb-3 text-lg font-bold text-rose-50",
												children: "Top Songs",
											}),
											/* @__PURE__ */ jsx("div", {
												className: "space-y-1 text-sm",
												children: tracks?.map((track, index) =>
													/* @__PURE__ */ jsxs(
														"div",
														{
															className: "flex gap-2",
															children: [
																/* @__PURE__ */ jsxs("span", {
																	className: "font-bold text-white",
																	children: ["#", index + 1],
																}),
																/* @__PURE__ */ jsx("span", {
																	className: "text-white",
																	children: track.name,
																}),
															],
														},
														track.id,
													),
												),
											}),
										],
									}),
								],
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex justify-center",
								children: /* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ jsx("h2", {
											className: "mb-2 text-lg font-bold text-rose-200",
											children: "Top Genre",
										}),
										/* @__PURE__ */ jsx("div", {
											className: "text-3xl font-bold text-white capitalize",
											children: topGenre,
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
		],
	});
}
function RouteComponent() {
	return /* @__PURE__ */ jsxs("section", {
		className: "flex w-full flex-col items-stretch",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "mb-5 text-3xl font-bold",
				children: "Your Stats",
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: /* @__PURE__ */ jsxs(Suspense, {
					fallback: /* @__PURE__ */ jsxs(Fragment, {
						children: [
							/* @__PURE__ */ jsx(Skeleton, { className: "h-140" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-140" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-140" }),
						],
					}),
					children: [
						/* @__PURE__ */ jsx(StatsWrapped, { range: "short_term" }),
						/* @__PURE__ */ jsx(StatsWrapped, { range: "medium_term" }),
						/* @__PURE__ */ jsx(StatsWrapped, { range: "long_term" }),
					],
				}),
			}),
		],
	});
}
export { RouteComponent as component };
