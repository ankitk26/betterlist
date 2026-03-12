import { useParams, Link, Outlet } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const searchFilterTags = [
	{ link: "", label: "All" },
	{ link: "/tracks", label: "Songs" },
	{ link: "/albums", label: "Albums" },
	{ link: "/artists", label: "Artists" },
	{ link: "/playlists", label: "Playlists" },
];
function SearchFilters() {
	const { query } = useParams({ from: "/_protected/search/$query" });
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-2 text-sm",
		children: searchFilterTags.map((tag) => {
			const href = `/search/$query/${tag.link}`;
			return /* @__PURE__ */ jsx(
				Link,
				{
					className:
						"bg-secondary rounded-full px-4 py-1 font-medium transition-colors",
					params: { query },
					to: href,
					children: tag.label,
				},
				tag.label,
			);
		}),
	});
}
function RouteComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-stretch gap-8",
		children: [
			/* @__PURE__ */ jsx(SearchFilters, {}),
			/* @__PURE__ */ jsx(Outlet, {}),
		],
	});
}
export { RouteComponent as component };
