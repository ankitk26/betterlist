import { j as e, k as h, m as u, L as p, r as f } from "./main-2PW7nLE1.js";
import { u as j, Q as g, d as N, I as b, S as d } from "./skeleton-HHK49xas.js";
import "./utils-BQHNewu7.js";
function x(a, l) {
	return j(
		{
			...a,
			enabled: !0,
			suspense: !0,
			throwOnError: N,
			placeholderData: void 0,
		},
		g,
	);
}
const v = (a) => {
	let l = "";
	const s = {};
	let n = 0;
	for (const r of a) {
		s[r] === void 0 ? (s[r] = 1) : s[r]++;
		const i = s[r];
		i > n && ((l = r), (n = i));
	}
	return l;
};
function w() {
	return e.jsx("div", {
		className: "absolute inset-0 overflow-hidden",
		children: e.jsx("div", {
			className: "absolute top-0 left-0 h-full w-full",
			children: e.jsxs("svg", {
				viewBox: "0 0 400 600",
				className: "h-full w-full",
				"aria-labelledby": "wrappedBackgroundTitle",
				children: [
					e.jsx("title", {
						id: "wrappedBackgroundTitle",
						children: "Decorative pink and rose flowing background",
					}),
					e.jsxs("defs", {
						children: [
							e.jsxs("linearGradient", {
								id: "pinkGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									e.jsx("stop", { offset: "0%", stopColor: "#5a0a0a" }),
									e.jsx("stop", { offset: "50%", stopColor: "#6b1423" }),
									e.jsx("stop", { offset: "100%", stopColor: "#3d0a0a" }),
								],
							}),
							e.jsxs("linearGradient", {
								id: "lightPinkGradient",
								x1: "0%",
								y1: "0%",
								x2: "100%",
								y2: "100%",
								children: [
									e.jsx("stop", { offset: "0%", stopColor: "#6b2020" }),
									e.jsx("stop", { offset: "50%", stopColor: "#5a1515" }),
									e.jsx("stop", { offset: "100%", stopColor: "#4a0f0f" }),
								],
							}),
						],
					}),
					e.jsx("path", {
						d: "M0,100 Q100,50 200,100 T400,100 L400,200 Q300,150 200,200 T0,200 Z",
						fill: "url(#pinkGradient)",
						opacity: "0.5",
					}),
					e.jsx("path", {
						d: "M0,250 Q150,200 300,250 T400,250 L400,350 Q250,300 100,350 T0,350 Z",
						fill: "#2a0a0a",
						opacity: "0.4",
					}),
					e.jsx("path", {
						d: "M100,0 Q200,50 300,0 T500,0 L500,100 Q400,150 300,100 T100,100 Z",
						fill: "url(#lightPinkGradient)",
						opacity: "0.45",
					}),
					e.jsx("path", {
						d: "M0,400 Q100,350 200,400 T400,400 L400,500 Q300,450 200,500 T0,500 Z",
						fill: "url(#pinkGradient)",
						opacity: "0.4",
					}),
				],
			}),
		}),
	});
}
function y(a) {
	switch (a) {
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
function c(a) {
	const { data: l } = x(h({ limit: 5, range: a.range })),
		{ data: s } = x(u({ range: a.range })),
		n = s?.[0].images.length,
		r = Math.floor(Math.random() * (n ?? 1)),
		i = s?.flatMap((t) => t.genres).filter((t) => t !== void 0),
		m = v(i ?? ["NA"]);
	return e.jsxs("div", {
		className:
			"relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-900 bg-black text-white",
		children: [
			e.jsx(w, {}),
			e.jsxs("div", {
				className: "relative z-10 p-6",
				children: [
					e.jsx("div", {
						className: "mb-6 text-center",
						children: e.jsx("h1", {
							className: "text-2xl font-bold text-white",
							children: y(a.range),
						}),
					}),
					e.jsx("div", {
						className: "mb-8 flex justify-center",
						children: e.jsx("div", {
							className: "h-48 w-48 rounded-lg bg-white p-2 shadow-lg",
							children: e.jsx(b, {
								alt: s?.[0].name,
								className: "h-full w-full rounded object-contain",
								height: 180,
								src: s?.[0].images[r].url || "",
								width: 180,
							}),
						}),
					}),
					e.jsxs("div", {
						className: "space-y-6",
						children: [
							e.jsxs("div", {
								className: "grid grid-cols-2 gap-6",
								children: [
									e.jsxs("div", {
										children: [
											e.jsx("h2", {
												className: "mb-3 text-lg font-bold text-rose-50",
												children: "Top Artists",
											}),
											e.jsx("div", {
												className: "space-y-1 text-sm",
												children: s
													?.slice(0, 5)
													.map((t, o) =>
														e.jsxs(
															"div",
															{
																className: "flex items-center gap-2",
																children: [
																	e.jsxs("span", {
																		className: "font-bold text-white",
																		children: ["#", o + 1],
																	}),
																	e.jsx(p, {
																		to: "/artists/$artistId",
																		params: { artistId: t.id },
																		className: "text-white",
																		children: t.name,
																	}),
																],
															},
															t.id,
														),
													),
											}),
										],
									}),
									e.jsxs("div", {
										children: [
											e.jsx("h2", {
												className: "mb-3 text-lg font-bold text-rose-50",
												children: "Top Songs",
											}),
											e.jsx("div", {
												className: "space-y-1 text-sm",
												children: l?.map((t, o) =>
													e.jsxs(
														"div",
														{
															className: "flex gap-2",
															children: [
																e.jsxs("span", {
																	className: "font-bold text-white",
																	children: ["#", o + 1],
																}),
																e.jsx("span", {
																	className: "text-white",
																	children: t.name,
																}),
															],
														},
														t.id,
													),
												),
											}),
										],
									}),
								],
							}),
							e.jsx("div", {
								className: "flex justify-center",
								children: e.jsxs("div", {
									className: "text-center",
									children: [
										e.jsx("h2", {
											className: "mb-2 text-lg font-bold text-rose-200",
											children: "Top Genre",
										}),
										e.jsx("div", {
											className: "text-3xl font-bold text-white capitalize",
											children: m,
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
function G() {
	return e.jsxs("section", {
		className: "flex w-full flex-col items-stretch",
		children: [
			e.jsx("h1", {
				className: "mb-5 text-3xl font-bold",
				children: "Your Stats",
			}),
			e.jsx("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: e.jsxs(f.Suspense, {
					fallback: e.jsxs(e.Fragment, {
						children: [
							e.jsx(d, { className: "h-140" }),
							e.jsx(d, { className: "h-140" }),
							e.jsx(d, { className: "h-140" }),
						],
					}),
					children: [
						e.jsx(c, { range: "short_term" }),
						e.jsx(c, { range: "medium_term" }),
						e.jsx(c, { range: "long_term" }),
					],
				}),
			}),
		],
	});
}
export { G as component };
