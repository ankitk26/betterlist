import { r as a, U as oe } from "./main-2PW7nLE1.js";
function C() {
	return typeof window < "u";
}
function x(e) {
	return K(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function w(e) {
	var t;
	return (
		(e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
		window
	);
}
function re(e) {
	var t;
	return (t = (K(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement;
}
function K(e) {
	return C() ? e instanceof Node || e instanceof w(e).Node : !1;
}
function $(e) {
	return C() ? e instanceof Element || e instanceof w(e).Element : !1;
}
function A(e) {
	return C() ? e instanceof HTMLElement || e instanceof w(e).HTMLElement : !1;
}
function T(e) {
	return !C() || typeof ShadowRoot > "u"
		? !1
		: e instanceof ShadowRoot || e instanceof w(e).ShadowRoot;
}
function j(e) {
	const { overflow: t, overflowX: n, overflowY: r, display: o } = _(e);
	return (
		/auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
		o !== "inline" &&
		o !== "contents"
	);
}
function $e(e) {
	return /^(table|td|th)$/.test(x(e));
}
function se(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
const ce = /transform|translate|scale|rotate|perspective|filter/,
	ie = /paint|layout|strict|content/,
	y = (e) => !!e && e !== "none";
let N;
function ue(e) {
	const t = $(e) ? _(e) : e;
	return (
		y(t.transform) ||
		y(t.translate) ||
		y(t.scale) ||
		y(t.rotate) ||
		y(t.perspective) ||
		(!ae() && (y(t.backdropFilter) || y(t.filter))) ||
		ce.test(t.willChange || "") ||
		ie.test(t.contain || "")
	);
}
function je(e) {
	let t = D(e);
	for (; A(t) && !W(t); ) {
		if (ue(t)) return t;
		if (se(t)) return null;
		t = D(t);
	}
	return null;
}
function ae() {
	return (
		N == null &&
			(N =
				typeof CSS < "u" &&
				CSS.supports &&
				CSS.supports("-webkit-backdrop-filter", "none")),
		N
	);
}
function W(e) {
	return /^(html|body|#document)$/.test(x(e));
}
function _(e) {
	return w(e).getComputedStyle(e);
}
function We(e) {
	return $(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function D(e) {
	if (x(e) === "html") return e;
	const t = e.assignedSlot || e.parentNode || (T(e) && e.host) || re(e);
	return T(t) ? t.host : t;
}
function V(e) {
	const t = D(e);
	return W(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: A(t) && j(t)
			? t
			: V(t);
}
function L(e, t, n) {
	var r;
	(t === void 0 && (t = []), n === void 0 && (n = !0));
	const o = V(e),
		s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		i = w(o);
	if (s) {
		const f = le(i);
		return t.concat(
			i,
			i.visualViewport || [],
			j(o) ? o : [],
			f && n ? L(f) : [],
		);
	} else return t.concat(o, L(o, [], n));
}
function le(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const O = {};
function I(e, t) {
	const n = a.useRef(O);
	return (n.current === O && (n.current = e(t)), n);
}
const k = oe[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
	fe = k && k !== a.useLayoutEffect ? k : (e) => e();
function M(e) {
	const t = I(de).current;
	return ((t.next = e), fe(t.effect), t.trampoline);
}
function de() {
	const e = {
		next: void 0,
		callback: be,
		trampoline: (...t) => e.callback?.(...t),
		effect: () => {
			e.callback = e.next;
		},
	};
	return e;
}
function be() {}
const pe = () => {},
	ye = typeof document < "u" ? a.useLayoutEffect : pe;
function P(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e || t) return { ...e, ...t };
}
const h = {};
function Y(e, t, n, r, o) {
	let s = { ...S(e, h) };
	return (t && (s = g(s, t)), n && (s = g(s, n)), r && (s = g(s, r)), s);
}
function me(e) {
	if (e.length === 0) return h;
	if (e.length === 1) return S(e[0], h);
	let t = { ...S(e[0], h) };
	for (let n = 1; n < e.length; n += 1) t = g(t, e[n]);
	return t;
}
function g(e, t) {
	return F(t) ? t(e) : we(e, t);
}
function we(e, t) {
	if (!t) return e;
	for (const n in t) {
		const r = t[n];
		switch (n) {
			case "style": {
				e[n] = P(e.style, r);
				break;
			}
			case "className": {
				e[n] = z(e.className, r);
				break;
			}
			default:
				he(n, r) ? (e[n] = Ee(e[n], r)) : (e[n] = r);
		}
	}
	return e;
}
function he(e, t) {
	const n = e.charCodeAt(0),
		r = e.charCodeAt(1),
		o = e.charCodeAt(2);
	return (
		n === 111 &&
		r === 110 &&
		o >= 65 &&
		o <= 90 &&
		(typeof t == "function" || typeof t > "u")
	);
}
function F(e) {
	return typeof e == "function";
}
function S(e, t) {
	return F(e) ? e(t) : (e ?? h);
}
function Ee(e, t) {
	return t
		? e
			? (n) => {
					if (ge(n)) {
						const o = n;
						v(o);
						const s = t(o);
						return (o.baseUIHandlerPrevented || e?.(o), s);
					}
					const r = t(n);
					return (e?.(n), r);
				}
			: t
		: e;
}
function v(e) {
	return (
		(e.preventBaseUIHandler = () => {
			e.baseUIHandlerPrevented = !0;
		}),
		e
	);
}
function z(e, t) {
	return t ? (e ? t + " " + e : t) : e;
}
function ge(e) {
	return e != null && typeof e == "object" && "nativeEvent" in e;
}
function H(e, ...t) {
	const n = new URL("https://base-ui.com/production-error");
	return (
		n.searchParams.set("code", e.toString()),
		t.forEach((r) => n.searchParams.append("args[]", r)),
		`Base UI error #${e}; visit ${n} for the full message.`
	);
}
const Ce = a.createContext(void 0);
function Ne(e = !1) {
	const t = a.useContext(Ce);
	if (t === void 0 && !e) throw new Error(H(16));
	return t;
}
function ke(e) {
	const {
			focusableWhenDisabled: t,
			disabled: n,
			composite: r = !1,
			tabIndex: o = 0,
			isNativeButton: s,
		} = e,
		i = r && t !== !1,
		f = r && t === !1;
	return {
		props: a.useMemo(() => {
			const u = {
				onKeyDown(p) {
					n && t && p.key !== "Tab" && p.preventDefault();
				},
			};
			return (
				r || ((u.tabIndex = o), !s && n && (u.tabIndex = t ? o : -1)),
				((s && (t || i)) || (!s && n)) && (u["aria-disabled"] = n),
				s && (!t || f) && (u.disabled = n),
				u
			);
		}, [r, n, t, i, f, s, o]),
	};
}
function _e(e = {}) {
	const {
			disabled: t = !1,
			focusableWhenDisabled: n,
			tabIndex: r = 0,
			native: o = !0,
		} = e,
		s = a.useRef(null),
		i = Ne(!0) !== void 0,
		f = M(() => {
			const d = s.current;
			return !!(d?.tagName === "A" && d?.href);
		}),
		{ props: b } = ke({
			focusableWhenDisabled: n,
			disabled: t,
			composite: i,
			tabIndex: r,
			isNativeButton: o,
		}),
		u = a.useCallback(() => {
			const d = s.current;
			De(d) &&
				i &&
				t &&
				b.disabled === void 0 &&
				d.disabled &&
				(d.disabled = !1);
		}, [t, b.disabled, i]);
	ye(u, [u]);
	const p = a.useCallback(
			(d = {}) => {
				const {
					onClick: l,
					onMouseDown: Z,
					onKeyUp: q,
					onKeyDown: J,
					onPointerDown: Q,
					...ee
				} = d;
				return Y(
					{
						type: o ? "button" : void 0,
						onClick(c) {
							if (t) {
								c.preventDefault();
								return;
							}
							l?.(c);
						},
						onMouseDown(c) {
							t || Z?.(c);
						},
						onKeyDown(c) {
							if ((t || (v(c), J?.(c)), c.baseUIHandlerPrevented)) return;
							const te = c.target === c.currentTarget && !o && !f() && !t,
								R = c.key === "Enter",
								ne = c.key === " ";
							te && ((ne || R) && c.preventDefault(), R && l?.(c));
						},
						onKeyUp(c) {
							(t || (v(c), q?.(c)),
								!c.baseUIHandlerPrevented &&
									c.target === c.currentTarget &&
									!o &&
									!t &&
									c.key === " " &&
									l?.(c));
						},
						onPointerDown(c) {
							if (t) {
								c.preventDefault();
								return;
							}
							Q?.(c);
						},
					},
					o ? void 0 : { role: "button" },
					b,
					ee,
				);
			},
			[t, b, o, f],
		),
		E = M((d) => {
			((s.current = d), u());
		});
	return { getButtonProps: p, buttonRef: E };
}
function De(e) {
	return A(e) && e.tagName === "BUTTON";
}
function B(e, t, n, r) {
	const o = I(G).current;
	return (Se(o, e, t, n, r) && X(o, [e, t, n, r]), o.callback);
}
function Pe(e) {
	const t = I(G).current;
	return (ve(t, e) && X(t, e), t.callback);
}
function G() {
	return { callback: null, cleanup: null, refs: [] };
}
function Se(e, t, n, r, o) {
	return (
		e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== o
	);
}
function ve(e, t) {
	return e.refs.length !== t.length || e.refs.some((n, r) => n !== t[r]);
}
function X(e, t) {
	if (((e.refs = t), t.every((n) => n == null))) {
		e.callback = null;
		return;
	}
	e.callback = (n) => {
		if ((e.cleanup && (e.cleanup(), (e.cleanup = null)), n != null)) {
			const r = Array(t.length).fill(null);
			for (let o = 0; o < t.length; o += 1) {
				const s = t[o];
				if (s != null)
					switch (typeof s) {
						case "function": {
							const i = s(n);
							typeof i == "function" && (r[o] = i);
							break;
						}
						case "object": {
							s.current = n;
							break;
						}
					}
			}
			e.cleanup = () => {
				for (let o = 0; o < t.length; o += 1) {
					const s = t[o];
					if (s != null)
						switch (typeof s) {
							case "function": {
								const i = r[o];
								typeof i == "function" ? i() : s(null);
								break;
							}
							case "object": {
								s.current = null;
								break;
							}
						}
				}
			};
		}
	};
}
const xe = parseInt(a.version, 10);
function Ae(e) {
	return xe >= e;
}
function U(e) {
	if (!a.isValidElement(e)) return null;
	const t = e,
		n = t.props;
	return (Ae(19) ? n?.ref : t.ref) ?? null;
}
function Ie(e, t) {
	const n = {};
	for (const r in e) {
		const o = e[r];
		if (t?.hasOwnProperty(r)) {
			const s = t[r](o);
			s != null && Object.assign(n, s);
			continue;
		}
		o === !0
			? (n[`data-${r.toLowerCase()}`] = "")
			: o && (n[`data-${r.toLowerCase()}`] = o.toString());
	}
	return n;
}
function Re(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Te(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Ve() {}
const Ye = Object.freeze([]),
	m = Object.freeze({});
function Fe(e, t, n = {}) {
	const r = t.render,
		o = Le(t, n);
	if (n.enabled === !1) return null;
	const s = n.state ?? m;
	return Me(e, r, o, s);
}
function Le(e, t = {}) {
	const { className: n, style: r, render: o } = e,
		{
			state: s = m,
			ref: i,
			props: f,
			stateAttributesMapping: b,
			enabled: u = !0,
		} = t,
		p = u ? Re(n, s) : void 0,
		E = u ? Te(r, s) : void 0,
		d = u ? Ie(s, b) : m,
		l = u ? (P(d, Array.isArray(f) ? me(f) : f) ?? m) : m;
	return (
		typeof document < "u" &&
			(u
				? Array.isArray(i)
					? (l.ref = Pe([l.ref, U(o), ...i]))
					: (l.ref = B(l.ref, U(o), i))
				: B(null, null)),
		u
			? (p !== void 0 && (l.className = z(l.className, p)),
				E !== void 0 && (l.style = P(l.style, E)),
				l)
			: m
	);
}
const Oe = Symbol.for("react.lazy");
function Me(e, t, n, r) {
	if (t) {
		if (typeof t == "function") return t(n, r);
		const o = Y(n, t.props);
		o.ref = n.ref;
		let s = t;
		return (
			s?.$$typeof === Oe && (s = a.Children.toArray(t)[0]), a.cloneElement(s, o)
		);
	}
	if (e && typeof e == "string") return Be(e, n);
	throw new Error(H(8));
}
function Be(e, t) {
	return e === "button"
		? a.createElement("button", { type: "button", ...t, key: t.key })
		: e === "img"
			? a.createElement("img", { alt: "", ...t, key: t.key })
			: a.createElement(e, t);
}
export {
	Ne as A,
	T as B,
	K as C,
	Ae as D,
	m as E,
	Ve as N,
	B as a,
	ye as b,
	Fe as c,
	re as d,
	w as e,
	H as f,
	L as g,
	le as h,
	$ as i,
	_ as j,
	A as k,
	ae as l,
	Y as m,
	se as n,
	D as o,
	W as p,
	$e as q,
	ue as r,
	je as s,
	x as t,
	_e as u,
	j as v,
	We as w,
	I as x,
	M as y,
	Ye as z,
};
