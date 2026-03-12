import { r as t, p as re, j as a, L as le } from "./main-2PW7nLE1.js";
import { e as it } from "./MusicNote.es-CaD4f649.js";
import { S as x, I as Ke } from "./skeleton-HHK49xas.js";
import {
	n as Oe,
	C as ce,
	E as Ge,
	y as qe,
	x as _e,
	u as ae,
	z as We,
	B as Je,
	F as Ue,
	v as Xe,
	c as Ye,
	q as Qe,
	w as De,
	h as et,
	j as tt,
	S as at,
} from "./useField-F5sWYpCd.js";
import {
	f as ie,
	y as oe,
	b as F,
	x as nt,
	u as st,
	N as ne,
	a as rt,
	m as lt,
	E as ct,
	c as de,
} from "./useRenderElement-Vjd4_1MR.js";
import { c as A } from "./utils-BQHNewu7.js";
const ot = new Map([
		[
			"bold",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
				}),
			),
		],
		[
			"duotone",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
					opacity: "0.2",
				}),
				t.createElement("path", {
					d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
				}),
			),
		],
		[
			"fill",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
				}),
			),
		],
		[
			"light",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
				}),
			),
		],
		[
			"regular",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
				}),
			),
		],
		[
			"thin",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
				}),
			),
		],
	]),
	dt = new Map([
		[
			"bold",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
				}),
			),
		],
		[
			"duotone",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
					opacity: "0.2",
				}),
				t.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
				}),
			),
		],
		[
			"fill",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
				}),
			),
		],
		[
			"light",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z",
				}),
			),
		],
		[
			"regular",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
				}),
			),
		],
		[
			"thin",
			t.createElement(
				t.Fragment,
				null,
				t.createElement("path", {
					d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z",
				}),
			),
		],
	]),
	ue = t.forwardRef((e, n) =>
		t.createElement(re, { ref: n, ...e, weights: ot }),
	);
ue.displayName = "CheckIcon";
const me = t.forwardRef((e, n) =>
	t.createElement(re, { ref: n, ...e, weights: dt }),
);
me.displayName = "ClockIcon";
const ut = t.createContext({ disabled: !1 });
function mt() {
	return t.useContext(ut);
}
const pt = t.createContext(void 0);
function ft(e = !0) {
	const n = t.useContext(pt);
	if (n === void 0 && !e) throw new Error(ie(3));
	return n;
}
function Rt() {
	return a.jsxs("div", {
		className: "space-y-4",
		children: [
			a.jsxs("div", {
				className: "grid grid-cols-12 justify-between gap-4",
				children: [
					a.jsx(x, { className: "col-span-1 h-4 w-full" }),
					a.jsx(x, { className: "col-span-5 h-4 w-full" }),
					a.jsx(x, { className: "col-span-5 h-4 w-full" }),
					a.jsx(x, { className: "col-span-1 h-4 w-full" }),
				],
			}),
			a.jsx(x, { className: "h-10 w-full" }),
			a.jsx(x, { className: "h-10 w-full" }),
			a.jsx(x, { className: "h-10 w-full" }),
			a.jsx(x, { className: "h-10 w-full" }),
		],
	});
}
const k = Oe((e, n) => ({
	selectedTrackIds: new Set(),
	add: (s) =>
		e((l) => {
			const r = new Set(l.selectedTrackIds);
			return (r.add(s), { selectedTrackIds: r });
		}),
	addAll: (s) => e(() => ({ selectedTrackIds: new Set(s) })),
	remove: (s) =>
		e((l) => {
			const r = new Set(l.selectedTrackIds);
			return (r.delete(s), { selectedTrackIds: r });
		}),
	toggle: (s) =>
		e((l) => {
			const r = new Set(l.selectedTrackIds);
			return (r.has(s) ? r.delete(s) : r.add(s), { selectedTrackIds: r });
		}),
	getSelected: () => Array.from(n().selectedTrackIds),
	clearAll: () => e({ selectedTrackIds: new Set() }),
}));
let se = (function (e) {
	return (
		(e.checked = "data-checked"),
		(e.unchecked = "data-unchecked"),
		(e.indeterminate = "data-indeterminate"),
		(e.disabled = "data-disabled"),
		(e.readonly = "data-readonly"),
		(e.required = "data-required"),
		(e.valid = "data-valid"),
		(e.invalid = "data-invalid"),
		(e.touched = "data-touched"),
		(e.dirty = "data-dirty"),
		(e.filled = "data-filled"),
		(e.focused = "data-focused"),
		e
	);
})({});
function pe(e) {
	return t.useMemo(
		() => ({
			checked(n) {
				return e.indeterminate
					? {}
					: n
						? { [se.checked]: "" }
						: { [se.unchecked]: "" };
			},
			...ce,
		}),
		[e.indeterminate],
	);
}
const fe = t.createContext(void 0);
function ht() {
	const e = t.useContext(fe);
	if (e === void 0) throw new Error(ie(14));
	return e;
}
function xt(e, n) {
	const s = t.useRef(e),
		l = oe(n);
	(F(() => {
		s.current !== e && l(s.current);
	}, [e, l]),
		F(() => {
			s.current = e;
		}, [e]));
}
const gt = "data-parent",
	vt = t.forwardRef(function (n, s) {
		const {
				checked: l,
				className: r,
				defaultChecked: c = !1,
				disabled: d = !1,
				id: f,
				indeterminate: g = !1,
				inputRef: H,
				name: $,
				onCheckedChange: z,
				parent: p = !1,
				readOnly: C = !1,
				render: B,
				required: j = !1,
				uncheckedValue: M,
				value: y,
				nativeButton: L = !1,
				...xe
			} = n,
			{ clearErrors: ge } = Ge(),
			{
				disabled: ve,
				name: be,
				setDirty: ke,
				setFilled: K,
				setFocused: W,
				setTouched: Ce,
				state: J,
				validationMode: je,
				validityData: ye,
				shouldValidateOnChange: Ee,
				validation: we,
			} = qe(),
			Ne = mt(),
			{
				labelId: Ie,
				controlId: Te,
				registerControlId: E,
				getDescriptionProps: U,
			} = _e(),
			i = ft(),
			I = i?.parent,
			S = I && i.allValues,
			v = ve || Ne.disabled || i?.disabled || d,
			b = be ?? $,
			u = y ?? b,
			X = ae(),
			Me = ae();
		let w = Te;
		S ? (w = p ? Me : `${I.id}-${u}`) : f && (w = f);
		let O = {};
		S &&
			(p
				? (O = i.parent.getParentProps())
				: u && (O = i.parent.getChildProps(u)));
		const Se = oe(z),
			{ checked: Y = l, indeterminate: P = g, onCheckedChange: Pe, ...Ve } = O,
			N = i?.value,
			Q = i?.setValue,
			D = i?.defaultValue,
			G = t.useRef(null),
			V = nt(() => Symbol("checkbox-control")),
			q = t.useRef(!1),
			{ getButtonProps: Re, buttonRef: Ze } = st({ disabled: v, native: L }),
			h = i?.validation ?? we,
			[m, Fe] = We({
				controlled: u && N && !p ? N.includes(u) : Y,
				default: u && D && !p ? D.includes(u) : c,
				name: "Checkbox",
				state: "checked",
			});
		(F(() => {
			E !== ne && ((q.current = !0), E(V.current, w));
		}, [w, i, E, p, V]),
			t.useEffect(() => {
				const o = V.current;
				return () => {
					!q.current || E === ne || ((q.current = !1), E(o, void 0));
				};
			}, [E, V]),
			Je({
				enabled: !i,
				id: X,
				commit: h.commit,
				value: m,
				controlRef: G,
				name: b,
				getValue: () => m,
			}));
		const T = t.useRef(null),
			Ae = rt(H, T, h.inputRef);
		(F(() => {
			T.current && ((T.current.indeterminate = P), m && K(!0));
		}, [m, P, K]),
			xt(m, () => {
				(i && !p) ||
					(ge(b),
					K(m),
					ke(m !== ye.initialValue),
					Ee() ? h.commit(m) : h.commit(m, !0));
			}));
		const He = lt(
				{
					checked: m,
					disabled: v,
					name: p ? void 0 : b,
					id: L ? void 0 : (w ?? void 0),
					required: j,
					ref: Ae,
					style: b ? Ue : Xe,
					tabIndex: -1,
					type: "checkbox",
					"aria-hidden": !0,
					onChange(o) {
						if (o.nativeEvent.defaultPrevented) return;
						const R = o.target.checked,
							Z = Ye(Qe, o.nativeEvent);
						if (
							(Pe?.(R, Z),
							Se(R, Z),
							!Z.isCanceled && (Fe(R), u && N && Q && !p))
						) {
							const Be = R ? [...N, u] : N.filter((Le) => Le !== u);
							Q(Be, Z);
						}
					},
					onFocus() {
						G.current?.focus();
					},
				},
				y !== void 0 ? { value: (i ? m && y : y) || "" } : ct,
				U,
				i ? h.getValidationProps : h.getInputValidationProps,
			),
			ee = S ? !!Y : m,
			te = (S && P) || g;
		t.useEffect(() => {
			if (!I || !u) return;
			const o = I.disabledStatesRef.current;
			return (
				o.set(u, v),
				() => {
					o.delete(u);
				}
			);
		}, [I, v, u]);
		const _ = t.useMemo(
				() => ({
					...J,
					checked: ee,
					disabled: v,
					readOnly: C,
					required: j,
					indeterminate: te,
				}),
				[J, ee, v, C, j, te],
			),
			$e = pe(_),
			ze = de("span", n, {
				state: _,
				ref: [Ze, G, s, i?.registerControlRef],
				props: [
					{
						id: L ? (w ?? void 0) : X,
						role: "checkbox",
						"aria-checked": P ? "mixed" : m,
						"aria-readonly": C || void 0,
						"aria-required": j || void 0,
						"aria-labelledby": Ie,
						[gt]: p ? "" : void 0,
						onFocus() {
							W(!0);
						},
						onBlur() {
							const o = T.current;
							o &&
								(Ce(!0), W(!1), je === "onBlur" && h.commit(i ? N : o.checked));
						},
						onClick(o) {
							C ||
								v ||
								(o.preventDefault(),
								T.current?.dispatchEvent(
									new PointerEvent("click", {
										bubbles: !0,
										shiftKey: o.shiftKey,
										ctrlKey: o.ctrlKey,
										altKey: o.altKey,
										metaKey: o.metaKey,
									}),
								));
						},
					},
					U,
					h.getValidationProps,
					xe,
					Ve,
					Re,
				],
				stateAttributesMapping: $e,
			});
		return a.jsxs(fe.Provider, {
			value: _,
			children: [
				ze,
				!m &&
					!i &&
					b &&
					!p &&
					M !== void 0 &&
					a.jsx("input", { type: "hidden", name: b, value: M }),
				a.jsx("input", { ...He }),
			],
		});
	}),
	bt = t.forwardRef(function (n, s) {
		const { render: l, className: r, keepMounted: c = !1, ...d } = n,
			f = ht(),
			g = f.checked || f.indeterminate,
			{ mounted: H, transitionStatus: $, setMounted: z } = De(g),
			p = t.useRef(null),
			C = { ...f, transitionStatus: $ };
		et({
			open: g,
			ref: p,
			onComplete() {
				g || z(!1);
			},
		});
		const B = pe(f),
			j = t.useMemo(() => ({ ...B, ...tt, ...ce }), [B]),
			M = c || H,
			y = de("span", n, {
				ref: [s, p],
				state: C,
				stateAttributesMapping: j,
				props: d,
			});
		return M ? y : null;
	});
function he({ className: e, ...n }) {
	return a.jsx(vt, {
		"data-slot": "checkbox",
		className: A(
			"peer border-input focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2",
			e,
		),
		...n,
		children: a.jsx(bt, {
			"data-slot": "checkbox-indicator",
			className:
				"grid place-content-center text-current transition-none [&>svg]:size-3.5",
			children: a.jsx(ue, {}),
		}),
	});
}
function kt({ className: e, orientation: n = "horizontal", ...s }) {
	return a.jsx(at, {
		"data-slot": "separator",
		orientation: n,
		className: A(
			"bg-border shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
			e,
		),
		...s,
	});
}
function Ct({ showAlbum: e, tracks: n }) {
	const s = k((d) => d.selectedTrackIds.size === n.length),
		l = k((d) => d.selectedTrackIds.size > 0),
		r = k((d) => d.addAll),
		c = k((d) => d.clearAll);
	return a.jsxs(a.Fragment, {
		children: [
			a.jsxs("header", {
				className: "text-muted-foreground grid grid-cols-12 gap-2 p-4 pb-1",
				children: [
					a.jsxs("div", {
						className:
							"group relative col-span-1 flex items-center text-left font-semibold tracking-wider uppercase",
						children: [
							a.jsx("span", {
								className: `text-muted-foreground text-sm transition-opacity duration-100 ease-out ${l ? "opacity-0" : "group-hover:opacity-0"}`,
								children: "#",
							}),
							a.jsx("div", {
								className: `absolute inset-0 flex items-center transition-opacity ${l ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
								children: a.jsx(he, {
									checked: s,
									onCheckedChange: (d) => {
										d ? r(n.map((f) => f.id)) : c();
									},
								}),
							}),
						],
					}),
					a.jsx("div", {
						className: A(
							"text-left text-sm font-semibold",
							e ? "col-span-6" : "col-span-10",
						),
						children: "Title",
					}),
					e &&
						a.jsx("div", {
							className: "col-span-4 text-left text-sm font-semibold",
							children: "Album",
						}),
					a.jsx("div", {
						className: "col-span-1 text-left font-semibold",
						children: a.jsx(me, { size: 16 }),
					}),
				],
			}),
			a.jsx(kt, {}),
		],
	});
}
const jt = (e) => new Date(e).toISOString().substring(15, 19);
function yt({ index: e, trackId: n }) {
	const s = k((c) => c.selectedTrackIds.has(n)),
		l = k((c) => c.add),
		r = k((c) => c.remove);
	return a.jsxs("div", {
		className: "relative col-span-1 flex items-center",
		children: [
			a.jsx("span", {
				className: `text-muted-foreground text-sm transition-opacity duration-100 ease-out ${s ? "opacity-0" : "group-hover:opacity-0"}`,
				children: e + 1,
			}),
			a.jsx("div", {
				className: `absolute inset-0 flex items-center transition-opacity ${s ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
				children: a.jsx(he, {
					checked: s,
					onCheckedChange: (c) => {
						c ? l(n) : r(n);
					},
				}),
			}),
		],
	});
}
const Et = t.memo(yt, (e, n) => e.trackId === n.trackId && e.index === n.index);
function wt({ track: e, showAlbum: n, showCover: s, showSubtitle: l }) {
	return a.jsx("div", {
		className: A("flex w-full items-center", n ? "col-span-6" : "col-span-10"),
		children: a.jsxs("div", {
			className: "flex w-full items-center gap-4",
			children: [
				s &&
					(e.album.images && e.album.images.length > 0
						? a.jsx("div", {
								className: "h-10 w-10 shrink-0",
								children: a.jsx(Ke, {
									alt: e.name,
									className: "h-10 w-10 rounded object-contain",
									height: 40,
									src: e.album.images?.[0].url,
									width: 40,
								}),
							})
						: a.jsx(it, {
								className: "bg-input/30 h-10 w-10 rounded p-2",
								size: 16,
							})),
				a.jsxs("div", {
					className: "w-full truncate pr-3",
					children: [
						a.jsx("span", {
							className: "w-10/12 truncate text-sm font-medium",
							children: e.name,
						}),
						l &&
							a.jsx("div", {
								className:
									"text-muted-foreground flex w-full flex-wrap items-center gap-1 pr-3 text-sm",
								children: a.jsx("span", {
									className: "truncate",
									children: e.artists.map((r, c) =>
										a.jsxs(
											a.Fragment,
											{
												children: [
													a.jsx(
														le,
														{
															className: "hover:underline",
															params: { artistId: r.id },
															to: "/artists/$artistId",
															children: r.name,
														},
														r.id + e.id,
													),
													c !== e.artists.length - 1 && ", ",
												],
											},
											r.id + e.id,
										),
									),
								}),
							}),
					],
				}),
			],
		}),
	});
}
function Nt({
	index: e,
	track: n,
	showAlbum: s,
	showCover: l,
	showSubtitle: r,
}) {
	return a.jsxs("div", {
		className:
			"group hover:bg-muted/50 grid grid-cols-12 rounded-lg px-4 py-2 transition-colors",
		children: [
			a.jsx(Et, { index: e, trackId: n.id }),
			a.jsx(wt, { showAlbum: s, showCover: l, showSubtitle: r, track: n }),
			s &&
				a.jsx("div", {
					className:
						"text-muted-foreground col-span-4 flex w-10/12 items-center text-sm",
					children: a.jsx(le, {
						className: "truncate hover:underline",
						params: { albumId: n.album.id },
						to: "/albums/$albumId",
						children: n.album.name,
					}),
				}),
			a.jsx("small", {
				className:
					"text-muted-foreground col-span-1 flex items-center text-sm font-medium",
				children: jt(n.duration_ms),
			}),
		],
	});
}
function Zt({
	tracks: e,
	showSubtitle: n = !1,
	showCover: s = !1,
	showHeader: l = !1,
	showAlbum: r = !1,
}) {
	return a.jsxs(a.Fragment, {
		children: [
			l && a.jsx(Ct, { showAlbum: r, tracks: e }),
			a.jsx("div", {
				className: "col-span-12 w-full",
				children: e
					?.filter((c) => c.name.trim().length > 0)
					.map((c, d) =>
						a.jsx(
							Nt,
							{
								index: d,
								showAlbum: r,
								showCover: s,
								showSubtitle: n,
								track: c,
							},
							`${c.id}_${d}`,
						),
					),
			}),
		],
	});
}
export { Zt as T, Rt as a, ue as o, k as u };
