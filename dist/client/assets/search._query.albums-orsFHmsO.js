import { Y as o, Q as n, j as s } from "./main-2PW7nLE1.js";
import { u } from "./MusicNote.es-CaD4f649.js";
import { S as p, C as c } from "./square-skeleton-C8c3tJef.js";
import "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
function h() {
	const { query: r } = o.useParams(),
		{
			data: t,
			isPending: i,
			isError: a,
			error: m,
		} = u(n({ query: r, type: "album", limit: 50 }));
	return i
		? s.jsx(p, { count: 10 })
		: a
			? s.jsx("p", { children: m.message })
			: t
				? s.jsx("div", {
						className: "mt-4 grid grid-cols-5 items-stretch gap-8",
						children: t.albums.map((e) =>
							s.jsx(
								c,
								{
									item: {
										id: e.id,
										image:
											e.images && e.images.length > 0 ? e.images[0].url : "",
										title: e.name,
										subtitle: e.artists[0].name ?? "",
										type: "albums",
									},
								},
								`search_results_album_${r}`,
							),
						),
					})
				: null;
}
export { h as component };
