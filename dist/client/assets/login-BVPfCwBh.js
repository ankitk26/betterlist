import { a as n } from "./auth-client-B5QT9dPC.js";
import { B as o } from "./button-C4bOsGCm.js";
import { r as a, j as e, o as i } from "./main-2PW7nLE1.js";
import "./utils-BQHNewu7.js";
import "./useRenderElement-Vjd4_1MR.js";
function x() {
	const [s, t] = a.useState(!1);
	return e.jsxs("div", {
		className: "flex h-[100dvh] flex-col items-center justify-center gap-6",
		children: [
			e.jsxs("div", {
				className: "flex flex-col items-center gap-2",
				children: [
					e.jsx("h1", {
						className: "text-3xl font-semibold",
						children: "betterlist",
					}),
					e.jsx("p", {
						className: "text-muted-foreground",
						children: "Manage Spotify playlists effortlessly",
					}),
				],
			}),
			e.jsx(o, {
				className: "w-[200px]",
				onClick: async () => {
					(t(!0), await n.signIn.social({ provider: "spotify" }));
				},
				size: "lg",
				children: s ? e.jsx(i, { className: "animate-spin" }) : "Login",
			}),
		],
	});
}
export { x as component };
