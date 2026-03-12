import { T as i, Q as n, j as r } from "./main-2PW7nLE1.js";
import { u } from "./MusicNote.es-CaD4f649.js";
import { a as m, T as p } from "./tracks-table-DvyCG6-L.js";
import "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./useRenderElement-Vjd4_1MR.js";
function h() {
	const { query: e } = i.useParams(),
		{
			data: t,
			isPending: s,
			isError: o,
			error: a,
		} = u(n({ query: e, type: "track", limit: 50 }));
	return s
		? r.jsx(m, {})
		: o
			? r.jsx("p", { children: a.message })
			: t
				? r.jsx(p, { showCover: !0, showSubtitle: !0, tracks: t.tracks ?? [] })
				: null;
}
export { h as component };
