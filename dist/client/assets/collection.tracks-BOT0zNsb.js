import { a as x } from "./auth-client-B5QT9dPC.js";
import { t as c } from "./Dot.es-DtR0t2Jl.js";
import { j as s, w as i } from "./main-2PW7nLE1.js";
import { u as n } from "./MusicNote.es-CaD4f649.js";
import { S as e, I as o } from "./skeleton-HHK49xas.js";
import { a as m, T as d } from "./tracks-table-DvyCG6-L.js";
import "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./useRenderElement-Vjd4_1MR.js";
function k() {
	const { data: a, isPending: t } = n(i),
		{ data: r, isPending: l } = x.useSession();
	return t || l
		? s.jsxs("section", {
				className: "space-y-20",
				children: [
					s.jsxs("div", {
						className: "flex items-end gap-4",
						children: [
							s.jsx(e, { className: "aspect-square w-64" }),
							s.jsxs("div", {
								className: "flex-1 space-y-4",
								children: [
									s.jsx(e, { className: "h-6 w-32" }),
									s.jsx(e, { className: "h-6 w-3/4" }),
									s.jsxs("div", {
										className: "flex items-center gap-4",
										children: [
											s.jsx(e, { className: "h-6 w-32" }),
											s.jsx(e, { className: "h-6 w-32" }),
											s.jsx(e, { className: "h-6 w-32" }),
										],
									}),
								],
							}),
						],
					}),
					s.jsx(m, {}),
				],
			})
		: s.jsxs(s.Fragment, {
				children: [
					s.jsxs("div", {
						className: "flex items-end gap-6",
						children: [
							s.jsx(o, {
								alt: "Liked Songs",
								className:
									"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
								height: 256,
								src: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
								width: 256,
							}),
							s.jsxs("div", {
								className: "flex flex-col gap-3",
								children: [
									s.jsx("h5", {
										className: "text-sm font-bold",
										children: "Playlist",
									}),
									s.jsx("h2", {
										className: "mt-2 text-6xl font-bold",
										children: "Liked Songs",
									}),
									s.jsxs("div", {
										className: "flex items-center text-sm font-semibold",
										children: [
											s.jsx("span", { children: r?.user.name }),
											a?.total &&
												a.total > 0 &&
												s.jsxs(s.Fragment, {
													children: [
														s.jsx(c, {}),
														s.jsxs("span", { children: [a.total, " songs"] }),
													],
												}),
										],
									}),
								],
							}),
						],
					}),
					a?.items &&
						s.jsx(d, {
							showAlbum: !0,
							showCover: !0,
							showHeader: !0,
							showSubtitle: !0,
							tracks: a.items,
						}),
				],
			});
}
export { k as component };
