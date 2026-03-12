import { c as y } from "./button-C4bOsGCm.js";
import {
	n,
	j as e,
	x as g,
	y as p,
	A as h,
	B as x,
	C as f,
} from "./main-2PW7nLE1.js";
import { u as d, e as v } from "./MusicNote.es-CaD4f649.js";
import { S as a, I as j } from "./skeleton-HHK49xas.js";
import { S as o, C as l } from "./square-skeleton-C8c3tJef.js";
import { T } from "./tracks-table-actions-CGvUpuKK.js";
import { a as k, T as I } from "./tracks-table-DvyCG6-L.js";
import { c as N, m as w } from "./useRenderElement-Vjd4_1MR.js";
import { c as b } from "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./label-CuWnyJxi.js";
function A() {
	const { artistId: r } = n({ from: "/_protected/artists/$artistId" }),
		{ data: s, isPending: i } = d(g(r));
	return i
		? e.jsx(o, {})
		: s && s.length === 0
			? null
			: e.jsxs("div", {
					children: [
						e.jsx("h1", { children: "Appears On" }),
						e.jsx("div", {
							className: "mt-4 grid grid-cols-5 items-stretch gap-8",
							children: s?.map((t) =>
								e.jsx(
									l,
									{
										item: {
											id: t.id,
											title: t.name,
											subtitle: t.artists[0].name ?? "",
											image: t.images.length > 0 ? t.images[0].url : "",
											type: "albums",
										},
									},
									t.id,
								),
							),
						}),
					],
				});
}
function S() {
	const { artistId: r } = n({ from: "/_protected/artists/$artistId" }),
		{ data: s, isPending: i } = d(p(r));
	return i
		? e.jsx(o, {})
		: s && s.length === 0
			? null
			: e.jsxs("div", {
					children: [
						e.jsx("h1", { children: "Compilation" }),
						e.jsx("div", {
							className: "mt-4 grid grid-cols-5 items-stretch gap-8",
							children: s?.map((t) =>
								e.jsx(
									l,
									{
										item: {
											id: t.id,
											title: t.name,
											subtitle: t.artists[0].name ?? "",
											image: t.images.length > 0 ? t.images[0].url : "",
											type: "albums",
										},
									},
									t.id,
								),
							),
						}),
					],
				});
}
function C() {
	const { artistId: r } = n({ from: "/_protected/artists/$artistId" }),
		{ data: s, isPending: i } = d(h(r));
	return i
		? e.jsx(o, {})
		: s && s.length === 0
			? null
			: e.jsxs("div", {
					children: [
						e.jsx("h1", { children: "Discography" }),
						e.jsx("div", {
							className: "mt-4 grid grid-cols-5 items-stretch gap-8",
							children: s?.map((t) => {
								const m = new Date(t.release_date).toLocaleString("en-US", {
									month: "short",
									year: "numeric",
								});
								let c = "";
								t.album_type &&
									(c =
										t.album_type[0].toUpperCase() + t.album_type?.substring(1));
								const u = `${c} (${m})`;
								return e.jsx(
									l,
									{
										item: {
											id: t.id,
											title: t.name,
											subtitle: u,
											image: t.images.length > 0 ? t.images[0].url : "",
											type: "albums",
										},
									},
									t.id,
								);
							}),
						}),
					],
				});
}
function _(r) {
	return N(r.defaultTagName ?? "div", r, r);
}
const P = y(
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
		defaultVariants: { variant: "default" },
	},
);
function $({ className: r, variant: s = "default", render: i, ...t }) {
	return _({
		defaultTagName: "span",
		props: w({ className: b(P({ variant: s }), r) }, t),
		render: i,
		state: { slot: "badge", variant: s },
	});
}
function Q() {
	const { artistId: r } = n({ from: "/_protected/artists/$artistId" }),
		{ data: s, isPending: i } = d(x(r));
	return i
		? e.jsx("div", {
				children: e.jsxs("div", {
					className: "flex items-end gap-4",
					children: [
						e.jsx(a, { className: "aspect-square w-64 rounded-full" }),
						e.jsxs("div", {
							className: "flex-1 space-y-4",
							children: [
								e.jsx(a, { className: "h-6 w-3/4" }),
								e.jsx(a, { className: "h-6 w-32" }),
								e.jsxs("div", {
									className: "flex items-center gap-4",
									children: [
										e.jsx(a, { className: "h-6 w-16" }),
										e.jsx(a, { className: "h-6 w-16" }),
										e.jsx(a, { className: "h-6 w-16" }),
									],
								}),
							],
						}),
					],
				}),
			})
		: e.jsx("div", {
				className: "flex items-end gap-6",
				children:
					s &&
					e.jsxs(e.Fragment, {
						children: [
							s.images.length > 0
								? e.jsx(j, {
										alt: s.name,
										className:
											"ring-border h-64 w-64 rounded-full object-cover shadow-xl ring-1",
										height: 256,
										src: s.images[0].url,
										width: 256,
									})
								: e.jsx("div", {
										className: "h-40 w-full",
										children: e.jsx(v, {
											className: "bg-card h-full w-full",
											size: 160,
										}),
									}),
							e.jsxs("div", {
								className: "flex flex-col items-start gap-3",
								children: [
									e.jsx("h2", {
										className: "text-5xl font-bold",
										children: s.name,
									}),
									e.jsxs("span", {
										className: "text-muted-foreground text-sm",
										children: [
											s.followers?.total.toLocaleString(),
											" followers",
										],
									}),
									e.jsx("div", {
										className: "flex items-center gap-5 text-sm",
										children: s?.genres?.map((t) =>
											e.jsx($, { variant: "secondary", children: t }, t),
										),
									}),
								],
							}),
						],
					}),
			});
}
function D() {
	const { artistId: r } = n({ from: "/_protected/artists/$artistId" }),
		{ data: s, isPending: i } = d(f(r));
	return i
		? e.jsx(k, {})
		: s && s.length === 0
			? null
			: e.jsxs("div", {
					className: "space-y-4",
					children: [
						e.jsx("h1", { children: "Popular" }),
						e.jsxs("div", {
							className: "space-y-1",
							children: [
								e.jsx(T, {}),
								e.jsx(I, { showCover: !0, tracks: s ?? [] }),
							],
						}),
					],
				});
}
function G() {
	return e.jsxs("div", {
		className: "space-y-16",
		children: [
			e.jsx(Q, {}),
			e.jsx(D, {}),
			e.jsx(C, {}),
			e.jsx(A, {}),
			e.jsx(S, {}),
		],
	});
}
export { G as component };
