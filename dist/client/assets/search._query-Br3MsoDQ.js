import { n as r, j as s, L as a, O as n } from "./main-2PW7nLE1.js";
const i = [
	{ link: "", label: "All" },
	{ link: "/tracks", label: "Songs" },
	{ link: "/albums", label: "Albums" },
	{ link: "/artists", label: "Artists" },
	{ link: "/playlists", label: "Playlists" },
];
function o() {
	const { query: l } = r({ from: "/_protected/search/$query" });
	return s.jsx("div", {
		className: "flex items-center gap-2 text-sm",
		children: i.map((e) => {
			const t = `/search/$query/${e.link}`;
			return s.jsx(
				a,
				{
					className:
						"bg-secondary rounded-full px-4 py-1 font-medium transition-colors",
					params: { query: l },
					to: t,
					children: e.label,
				},
				e.label,
			);
		}),
	});
}
function m() {
	return s.jsxs("div", {
		className: "flex flex-col items-stretch gap-8",
		children: [s.jsx(o, {}), s.jsx(n, {})],
	});
}
export { m as component };
