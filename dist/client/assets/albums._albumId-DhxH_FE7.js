import { t as r } from "./Dot.es-DtR0t2Jl.js";
import { j as s, L as i, D as o, E as n } from "./main-2PW7nLE1.js";
import { e as l, u as c } from "./MusicNote.es-CaD4f649.js";
import { I as m } from "./skeleton-HHK49xas.js";
import { S as d } from "./square-cover-page-skeleton-DzJzGlef.js";
import { T as h } from "./tracks-table-actions-CGvUpuKK.js";
import { T as x } from "./tracks-table-DvyCG6-L.js";
import "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./useRenderElement-Vjd4_1MR.js";
import "./label-CuWnyJxi.js";
import "./button-C4bOsGCm.js";
function p({ album: e }) {
	return s.jsxs("div", {
		className: "flex items-end gap-6",
		children: [
			e.images && e.images.length > 0
				? s.jsx(m, {
						alt: e.name,
						className:
							"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
						height: 256,
						src: e.images[0].url ?? "",
						width: 256,
					})
				: s.jsx("div", {
						className: "h-40 w-full",
						children: s.jsx(l, { className: "h-full w-full", size: 160 }),
					}),
			s.jsxs("div", {
				className: "flex flex-col gap-3",
				children: [
					s.jsx("h5", {
						className: "text-xs font-bold uppercase",
						children: e.album_type,
					}),
					s.jsx("h2", { className: "text-5xl font-bold", children: e.name }),
					s.jsxs("div", {
						className:
							"text-muted-foreground flex items-center text-sm font-semibold",
						children: [
							s.jsx(i, {
								className: "hover:underline",
								params: { artistId: e.artists[0].id },
								to: "/artists/$artistId",
								children: e.artists[0].name,
							}),
							s.jsx(r, {}),
							s.jsx("span", {
								children: new Date(e.release_date).getFullYear(),
							}),
							e.tracks &&
								e.tracks.items.length > 0 &&
								s.jsxs(s.Fragment, {
									children: [
										s.jsx(r, {}),
										s.jsxs("span", { children: [e.tracks.total, " songs"] }),
									],
								}),
						],
					}),
				],
			}),
		],
	});
}
function P() {
	const { albumId: e } = o.useParams(),
		{ data: t, isPending: a } = c(n(e));
	return a
		? s.jsx(d, {})
		: s.jsxs("div", {
				className: "space-y-8",
				children: [
					t && s.jsx(p, { album: t }),
					s.jsxs("div", {
						className: "space-y-1",
						children: [
							s.jsx(h, {}),
							s.jsx(x, {
								showHeader: !0,
								showSubtitle: !0,
								tracks: t ? t.tracks.items : [],
							}),
						],
					}),
				],
			});
}
export { P as component };
