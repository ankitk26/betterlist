import { r as p, j as z } from "./main-2PW7nLE1.js";
import { u as _, c as V } from "./useRenderElement-Vjd4_1MR.js";
import { a as y, c as k } from "./utils-BQHNewu7.js";
const N = p.forwardRef(function (t, e) {
		const {
				render: r,
				className: u,
				disabled: s = !1,
				focusableWhenDisabled: c = !1,
				nativeButton: l = !0,
				...v
			} = t,
			{ getButtonProps: n, buttonRef: i } = _({
				disabled: s,
				focusableWhenDisabled: c,
				native: l,
			});
		return V("button", t, {
			state: { disabled: s },
			ref: [e, i],
			props: [v, n],
		});
	}),
	x = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
	f = y,
	j = (a, t) => (e) => {
		var r;
		if (t?.variants == null) return f(a, e?.class, e?.className);
		const { variants: u, defaultVariants: s } = t,
			c = Object.keys(u).map((n) => {
				const i = e?.[n],
					d = s?.[n];
				if (i === null) return null;
				const o = x(i) || x(d);
				return u[n][o];
			}),
			l =
				e &&
				Object.entries(e).reduce((n, i) => {
					let [d, o] = i;
					return (o === void 0 || (n[d] = o), n);
				}, {}),
			v =
				t == null || (r = t.compoundVariants) === null || r === void 0
					? void 0
					: r.reduce((n, i) => {
							let { class: d, className: o, ...m } = i;
							return Object.entries(m).every((h) => {
								let [b, g] = h;
								return Array.isArray(g)
									? g.includes({ ...s, ...l }[b])
									: { ...s, ...l }[b] === g;
							})
								? [...n, d, o]
								: n;
						}, []);
		return f(a, c, v, e?.class, e?.className);
	},
	B = j(
		"group/button focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-xs/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
		{
			variants: {
				variant: {
					default: "bg-primary text-primary-foreground hover:bg-primary/80",
					outline:
						"border-border hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30",
					secondary:
						"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
					ghost:
						"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
					destructive:
						"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
					link: "text-primary underline-offset-4 hover:underline",
				},
				size: {
					default:
						"h-7 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
					xs: "h-5 gap-1 rounded-sm px-2 text-[0.625rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
					sm: "h-6 gap-1 px-2 text-xs/relaxed has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
					lg: "h-8 gap-1 px-2.5 text-xs/relaxed has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
					icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
					"icon-xs": "size-5 rounded-sm [&_svg:not([class*='size-'])]:size-2.5",
					"icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
					"icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4",
				},
			},
			defaultVariants: { variant: "default", size: "default" },
		},
	);
function w({
	className: a,
	variant: t = "default",
	size: e = "default",
	...r
}) {
	return z.jsx(N, {
		"data-slot": "button",
		className: k(B({ variant: t, size: e, className: a })),
		...r,
	});
}
export { w as B, j as c };
