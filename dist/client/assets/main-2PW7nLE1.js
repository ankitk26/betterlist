const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			"assets/login-BVPfCwBh.js",
			"assets/button-C4bOsGCm.js",
			"assets/utils-BQHNewu7.js",
			"assets/useRenderElement-Vjd4_1MR.js",
			"assets/auth-client-B5QT9dPC.js",
			"assets/_protected-DFireDKu.js",
			"assets/skeleton-HHK49xas.js",
			"assets/label-CuWnyJxi.js",
			"assets/useField-F5sWYpCd.js",
			"assets/MusicNote.es-CaD4f649.js",
			"assets/index-BkLVTC-s.js",
			"assets/playlists._playlistId-BDDGwPt0.js",
			"assets/Dot.es-DtR0t2Jl.js",
			"assets/square-cover-page-skeleton-DzJzGlef.js",
			"assets/tracks-table-DvyCG6-L.js",
			"assets/tracks-table-actions-CGvUpuKK.js",
			"assets/collection.tracks-BOT0zNsb.js",
			"assets/artists._artistId-DSrSnbru.js",
			"assets/square-skeleton-C8c3tJef.js",
			"assets/albums._albumId-DhxH_FE7.js",
			"assets/search._query.index-c0rK5Kue.js",
			"assets/search._query.tracks-DmhjR7BY.js",
			"assets/search._query.playlists-DZVERlUL.js",
			"assets/search._query.artists-D5k_MinV.js",
			"assets/search._query.albums-orsFHmsO.js",
		]),
) => i.map((i) => d[i]);
function wv(n, i) {
	for (var l = 0; l < i.length; l++) {
		const r = i[l];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const c in r)
				if (c !== "default" && !(c in n)) {
					const f = Object.getOwnPropertyDescriptor(r, c);
					f &&
						Object.defineProperty(
							n,
							c,
							f.get ? f : { enumerable: !0, get: () => r[c] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
	);
}
function Q1(n) {
	return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
		? n.default
		: n;
}
var Lc = { exports: {} },
	ds = {};
var Om;
function Tv() {
	if (Om) return ds;
	Om = 1;
	var n = Symbol.for("react.transitional.element"),
		i = Symbol.for("react.fragment");
	function l(r, c, f) {
		var d = null;
		if (
			(f !== void 0 && (d = "" + f),
			c.key !== void 0 && (d = "" + c.key),
			"key" in c)
		) {
			f = {};
			for (var m in c) m !== "key" && (f[m] = c[m]);
		} else f = c;
		return (
			(c = f.ref),
			{ $$typeof: n, type: r, key: d, ref: c !== void 0 ? c : null, props: f }
		);
	}
	return ((ds.Fragment = i), (ds.jsx = l), (ds.jsxs = l), ds);
}
var Cm;
function Rv() {
	return (Cm || ((Cm = 1), (Lc.exports = Tv())), Lc.exports);
}
var $ = Rv(),
	Nc = { exports: {} },
	ht = {};
var zm;
function Av() {
	if (zm) return ht;
	zm = 1;
	var n = Symbol.for("react.transitional.element"),
		i = Symbol.for("react.portal"),
		l = Symbol.for("react.fragment"),
		r = Symbol.for("react.strict_mode"),
		c = Symbol.for("react.profiler"),
		f = Symbol.for("react.consumer"),
		d = Symbol.for("react.context"),
		m = Symbol.for("react.forward_ref"),
		g = Symbol.for("react.suspense"),
		h = Symbol.for("react.memo"),
		v = Symbol.for("react.lazy"),
		y = Symbol.for("react.activity"),
		b = Symbol.iterator;
	function E(M) {
		return M === null || typeof M != "object"
			? null
			: ((M = (b && M[b]) || M["@@iterator"]),
				typeof M == "function" ? M : null);
	}
	var w = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		x = Object.assign,
		R = {};
	function O(M, G, P) {
		((this.props = M),
			(this.context = G),
			(this.refs = R),
			(this.updater = P || w));
	}
	((O.prototype.isReactComponent = {}),
		(O.prototype.setState = function (M, G) {
			if (typeof M != "object" && typeof M != "function" && M != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, M, G, "setState");
		}),
		(O.prototype.forceUpdate = function (M) {
			this.updater.enqueueForceUpdate(this, M, "forceUpdate");
		}));
	function H() {}
	H.prototype = O.prototype;
	function q(M, G, P) {
		((this.props = M),
			(this.context = G),
			(this.refs = R),
			(this.updater = P || w));
	}
	var Q = (q.prototype = new H());
	((Q.constructor = q), x(Q, O.prototype), (Q.isPureReactComponent = !0));
	var F = Array.isArray;
	function J() {}
	var X = { H: null, A: null, T: null, S: null },
		Y = Object.prototype.hasOwnProperty;
	function W(M, G, P) {
		var I = P.ref;
		return {
			$$typeof: n,
			type: M,
			key: G,
			ref: I !== void 0 ? I : null,
			props: P,
		};
	}
	function ct(M, G) {
		return W(M.type, G, M.props);
	}
	function it(M) {
		return typeof M == "object" && M !== null && M.$$typeof === n;
	}
	function at(M) {
		var G = { "=": "=0", ":": "=2" };
		return (
			"$" +
			M.replace(/[=:]/g, function (P) {
				return G[P];
			})
		);
	}
	var wt = /\/+/g;
	function Tt(M, G) {
		return typeof M == "object" && M !== null && M.key != null
			? at("" + M.key)
			: G.toString(36);
	}
	function qt(M) {
		switch (M.status) {
			case "fulfilled":
				return M.value;
			case "rejected":
				throw M.reason;
			default:
				switch (
					(typeof M.status == "string"
						? M.then(J, J)
						: ((M.status = "pending"),
							M.then(
								function (G) {
									M.status === "pending" &&
										((M.status = "fulfilled"), (M.value = G));
								},
								function (G) {
									M.status === "pending" &&
										((M.status = "rejected"), (M.reason = G));
								},
							)),
					M.status)
				) {
					case "fulfilled":
						return M.value;
					case "rejected":
						throw M.reason;
				}
		}
		throw M;
	}
	function L(M, G, P, I, et) {
		var ot = typeof M;
		(ot === "undefined" || ot === "boolean") && (M = null);
		var gt = !1;
		if (M === null) gt = !0;
		else
			switch (ot) {
				case "bigint":
				case "string":
				case "number":
					gt = !0;
					break;
				case "object":
					switch (M.$$typeof) {
						case n:
						case i:
							gt = !0;
							break;
						case v:
							return ((gt = M._init), L(gt(M._payload), G, P, I, et));
					}
			}
		if (gt)
			return (
				(et = et(M)),
				(gt = I === "" ? "." + Tt(M, 0) : I),
				F(et)
					? ((P = ""),
						gt != null && (P = gt.replace(wt, "$&/") + "/"),
						L(et, G, P, "", function (ze) {
							return ze;
						}))
					: et != null &&
						(it(et) &&
							(et = ct(
								et,
								P +
									(et.key == null || (M && M.key === et.key)
										? ""
										: ("" + et.key).replace(wt, "$&/") + "/") +
									gt,
							)),
						G.push(et)),
				1
			);
		gt = 0;
		var ft = I === "" ? "." : I + ":";
		if (F(M))
			for (var At = 0; At < M.length; At++)
				((I = M[At]), (ot = ft + Tt(I, At)), (gt += L(I, G, P, ot, et)));
		else if (((At = E(M)), typeof At == "function"))
			for (M = At.call(M), At = 0; !(I = M.next()).done; )
				((I = I.value), (ot = ft + Tt(I, At++)), (gt += L(I, G, P, ot, et)));
		else if (ot === "object") {
			if (typeof M.then == "function") return L(qt(M), G, P, I, et);
			throw (
				(G = String(M)),
				Error(
					"Objects are not valid as a React child (found: " +
						(G === "[object Object]"
							? "object with keys {" + Object.keys(M).join(", ") + "}"
							: G) +
						"). If you meant to render a collection of children, use an array instead.",
				)
			);
		}
		return gt;
	}
	function k(M, G, P) {
		if (M == null) return M;
		var I = [],
			et = 0;
		return (
			L(M, I, "", "", function (ot) {
				return G.call(P, ot, et++);
			}),
			I
		);
	}
	function st(M) {
		if (M._status === -1) {
			var G = M._result;
			((G = G()),
				G.then(
					function (P) {
						(M._status === 0 || M._status === -1) &&
							((M._status = 1), (M._result = P));
					},
					function (P) {
						(M._status === 0 || M._status === -1) &&
							((M._status = 2), (M._result = P));
					},
				),
				M._status === -1 && ((M._status = 0), (M._result = G)));
		}
		if (M._status === 1) return M._result.default;
		throw M._result;
	}
	var vt =
			typeof reportError == "function"
				? reportError
				: function (M) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var G = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof M == "object" &&
									M !== null &&
									typeof M.message == "string"
										? String(M.message)
										: String(M),
								error: M,
							});
							if (!window.dispatchEvent(G)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", M);
							return;
						}
						console.error(M);
					},
		mt = {
			map: k,
			forEach: function (M, G, P) {
				k(
					M,
					function () {
						G.apply(this, arguments);
					},
					P,
				);
			},
			count: function (M) {
				var G = 0;
				return (
					k(M, function () {
						G++;
					}),
					G
				);
			},
			toArray: function (M) {
				return (
					k(M, function (G) {
						return G;
					}) || []
				);
			},
			only: function (M) {
				if (!it(M))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return M;
			},
		};
	return (
		(ht.Activity = y),
		(ht.Children = mt),
		(ht.Component = O),
		(ht.Fragment = l),
		(ht.Profiler = c),
		(ht.PureComponent = q),
		(ht.StrictMode = r),
		(ht.Suspense = g),
		(ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
		(ht.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (M) {
				return X.H.useMemoCache(M);
			},
		}),
		(ht.cache = function (M) {
			return function () {
				return M.apply(null, arguments);
			};
		}),
		(ht.cacheSignal = function () {
			return null;
		}),
		(ht.cloneElement = function (M, G, P) {
			if (M == null)
				throw Error(
					"The argument must be a React element, but you passed " + M + ".",
				);
			var I = x({}, M.props),
				et = M.key;
			if (G != null)
				for (ot in (G.key !== void 0 && (et = "" + G.key), G))
					!Y.call(G, ot) ||
						ot === "key" ||
						ot === "__self" ||
						ot === "__source" ||
						(ot === "ref" && G.ref === void 0) ||
						(I[ot] = G[ot]);
			var ot = arguments.length - 2;
			if (ot === 1) I.children = P;
			else if (1 < ot) {
				for (var gt = Array(ot), ft = 0; ft < ot; ft++)
					gt[ft] = arguments[ft + 2];
				I.children = gt;
			}
			return W(M.type, et, I);
		}),
		(ht.createContext = function (M) {
			return (
				(M = {
					$$typeof: d,
					_currentValue: M,
					_currentValue2: M,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
				}),
				(M.Provider = M),
				(M.Consumer = { $$typeof: f, _context: M }),
				M
			);
		}),
		(ht.createElement = function (M, G, P) {
			var I,
				et = {},
				ot = null;
			if (G != null)
				for (I in (G.key !== void 0 && (ot = "" + G.key), G))
					Y.call(G, I) &&
						I !== "key" &&
						I !== "__self" &&
						I !== "__source" &&
						(et[I] = G[I]);
			var gt = arguments.length - 2;
			if (gt === 1) et.children = P;
			else if (1 < gt) {
				for (var ft = Array(gt), At = 0; At < gt; At++)
					ft[At] = arguments[At + 2];
				et.children = ft;
			}
			if (M && M.defaultProps)
				for (I in ((gt = M.defaultProps), gt))
					et[I] === void 0 && (et[I] = gt[I]);
			return W(M, ot, et);
		}),
		(ht.createRef = function () {
			return { current: null };
		}),
		(ht.forwardRef = function (M) {
			return { $$typeof: m, render: M };
		}),
		(ht.isValidElement = it),
		(ht.lazy = function (M) {
			return { $$typeof: v, _payload: { _status: -1, _result: M }, _init: st };
		}),
		(ht.memo = function (M, G) {
			return { $$typeof: h, type: M, compare: G === void 0 ? null : G };
		}),
		(ht.startTransition = function (M) {
			var G = X.T,
				P = {};
			X.T = P;
			try {
				var I = M(),
					et = X.S;
				(et !== null && et(P, I),
					typeof I == "object" &&
						I !== null &&
						typeof I.then == "function" &&
						I.then(J, vt));
			} catch (ot) {
				vt(ot);
			} finally {
				(G !== null && P.types !== null && (G.types = P.types), (X.T = G));
			}
		}),
		(ht.unstable_useCacheRefresh = function () {
			return X.H.useCacheRefresh();
		}),
		(ht.use = function (M) {
			return X.H.use(M);
		}),
		(ht.useActionState = function (M, G, P) {
			return X.H.useActionState(M, G, P);
		}),
		(ht.useCallback = function (M, G) {
			return X.H.useCallback(M, G);
		}),
		(ht.useContext = function (M) {
			return X.H.useContext(M);
		}),
		(ht.useDebugValue = function () {}),
		(ht.useDeferredValue = function (M, G) {
			return X.H.useDeferredValue(M, G);
		}),
		(ht.useEffect = function (M, G) {
			return X.H.useEffect(M, G);
		}),
		(ht.useEffectEvent = function (M) {
			return X.H.useEffectEvent(M);
		}),
		(ht.useId = function () {
			return X.H.useId();
		}),
		(ht.useImperativeHandle = function (M, G, P) {
			return X.H.useImperativeHandle(M, G, P);
		}),
		(ht.useInsertionEffect = function (M, G) {
			return X.H.useInsertionEffect(M, G);
		}),
		(ht.useLayoutEffect = function (M, G) {
			return X.H.useLayoutEffect(M, G);
		}),
		(ht.useMemo = function (M, G) {
			return X.H.useMemo(M, G);
		}),
		(ht.useOptimistic = function (M, G) {
			return X.H.useOptimistic(M, G);
		}),
		(ht.useReducer = function (M, G, P) {
			return X.H.useReducer(M, G, P);
		}),
		(ht.useRef = function (M) {
			return X.H.useRef(M);
		}),
		(ht.useState = function (M) {
			return X.H.useState(M);
		}),
		(ht.useSyncExternalStore = function (M, G, P) {
			return X.H.useSyncExternalStore(M, G, P);
		}),
		(ht.useTransition = function () {
			return X.H.useTransition();
		}),
		(ht.version = "19.2.4"),
		ht
	);
}
var Dm;
function xs() {
	return (Dm || ((Dm = 1), (Nc.exports = Av())), Nc.exports);
}
var z = xs();
const tt = Q1(z),
	xv = wv({ __proto__: null, default: tt }, [z]);
var Uc = { exports: {} },
	hs = {},
	jc = { exports: {} },
	Bc = {};
var Lm;
function Mv() {
	return (
		Lm ||
			((Lm = 1),
			(function (n) {
				function i(L, k) {
					var st = L.length;
					L.push(k);
					t: for (; 0 < st; ) {
						var vt = (st - 1) >>> 1,
							mt = L[vt];
						if (0 < c(mt, k)) ((L[vt] = k), (L[st] = mt), (st = vt));
						else break t;
					}
				}
				function l(L) {
					return L.length === 0 ? null : L[0];
				}
				function r(L) {
					if (L.length === 0) return null;
					var k = L[0],
						st = L.pop();
					if (st !== k) {
						L[0] = st;
						t: for (var vt = 0, mt = L.length, M = mt >>> 1; vt < M; ) {
							var G = 2 * (vt + 1) - 1,
								P = L[G],
								I = G + 1,
								et = L[I];
							if (0 > c(P, st))
								I < mt && 0 > c(et, P)
									? ((L[vt] = et), (L[I] = st), (vt = I))
									: ((L[vt] = P), (L[G] = st), (vt = G));
							else if (I < mt && 0 > c(et, st))
								((L[vt] = et), (L[I] = st), (vt = I));
							else break t;
						}
					}
					return k;
				}
				function c(L, k) {
					var st = L.sortIndex - k.sortIndex;
					return st !== 0 ? st : L.id - k.id;
				}
				if (
					((n.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var f = performance;
					n.unstable_now = function () {
						return f.now();
					};
				} else {
					var d = Date,
						m = d.now();
					n.unstable_now = function () {
						return d.now() - m;
					};
				}
				var g = [],
					h = [],
					v = 1,
					y = null,
					b = 3,
					E = !1,
					w = !1,
					x = !1,
					R = !1,
					O = typeof setTimeout == "function" ? setTimeout : null,
					H = typeof clearTimeout == "function" ? clearTimeout : null,
					q = typeof setImmediate < "u" ? setImmediate : null;
				function Q(L) {
					for (var k = l(h); k !== null; ) {
						if (k.callback === null) r(h);
						else if (k.startTime <= L)
							(r(h), (k.sortIndex = k.expirationTime), i(g, k));
						else break;
						k = l(h);
					}
				}
				function F(L) {
					if (((x = !1), Q(L), !w))
						if (l(g) !== null) ((w = !0), J || ((J = !0), at()));
						else {
							var k = l(h);
							k !== null && qt(F, k.startTime - L);
						}
				}
				var J = !1,
					X = -1,
					Y = 5,
					W = -1;
				function ct() {
					return R ? !0 : !(n.unstable_now() - W < Y);
				}
				function it() {
					if (((R = !1), J)) {
						var L = n.unstable_now();
						W = L;
						var k = !0;
						try {
							t: {
								((w = !1), x && ((x = !1), H(X), (X = -1)), (E = !0));
								var st = b;
								try {
									e: {
										for (
											Q(L), y = l(g);
											y !== null && !(y.expirationTime > L && ct());
										) {
											var vt = y.callback;
											if (typeof vt == "function") {
												((y.callback = null), (b = y.priorityLevel));
												var mt = vt(y.expirationTime <= L);
												if (((L = n.unstable_now()), typeof mt == "function")) {
													((y.callback = mt), Q(L), (k = !0));
													break e;
												}
												(y === l(g) && r(g), Q(L));
											} else r(g);
											y = l(g);
										}
										if (y !== null) k = !0;
										else {
											var M = l(h);
											(M !== null && qt(F, M.startTime - L), (k = !1));
										}
									}
									break t;
								} finally {
									((y = null), (b = st), (E = !1));
								}
								k = void 0;
							}
						} finally {
							k ? at() : (J = !1);
						}
					}
				}
				var at;
				if (typeof q == "function")
					at = function () {
						q(it);
					};
				else if (typeof MessageChannel < "u") {
					var wt = new MessageChannel(),
						Tt = wt.port2;
					((wt.port1.onmessage = it),
						(at = function () {
							Tt.postMessage(null);
						}));
				} else
					at = function () {
						O(it, 0);
					};
				function qt(L, k) {
					X = O(function () {
						L(n.unstable_now());
					}, k);
				}
				((n.unstable_IdlePriority = 5),
					(n.unstable_ImmediatePriority = 1),
					(n.unstable_LowPriority = 4),
					(n.unstable_NormalPriority = 3),
					(n.unstable_Profiling = null),
					(n.unstable_UserBlockingPriority = 2),
					(n.unstable_cancelCallback = function (L) {
						L.callback = null;
					}),
					(n.unstable_forceFrameRate = function (L) {
						0 > L || 125 < L
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (Y = 0 < L ? Math.floor(1e3 / L) : 5);
					}),
					(n.unstable_getCurrentPriorityLevel = function () {
						return b;
					}),
					(n.unstable_next = function (L) {
						switch (b) {
							case 1:
							case 2:
							case 3:
								var k = 3;
								break;
							default:
								k = b;
						}
						var st = b;
						b = k;
						try {
							return L();
						} finally {
							b = st;
						}
					}),
					(n.unstable_requestPaint = function () {
						R = !0;
					}),
					(n.unstable_runWithPriority = function (L, k) {
						switch (L) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								L = 3;
						}
						var st = b;
						b = L;
						try {
							return k();
						} finally {
							b = st;
						}
					}),
					(n.unstable_scheduleCallback = function (L, k, st) {
						var vt = n.unstable_now();
						switch (
							(typeof st == "object" && st !== null
								? ((st = st.delay),
									(st = typeof st == "number" && 0 < st ? vt + st : vt))
								: (st = vt),
							L)
						) {
							case 1:
								var mt = -1;
								break;
							case 2:
								mt = 250;
								break;
							case 5:
								mt = 1073741823;
								break;
							case 4:
								mt = 1e4;
								break;
							default:
								mt = 5e3;
						}
						return (
							(mt = st + mt),
							(L = {
								id: v++,
								callback: k,
								priorityLevel: L,
								startTime: st,
								expirationTime: mt,
								sortIndex: -1,
							}),
							st > vt
								? ((L.sortIndex = st),
									i(h, L),
									l(g) === null &&
										L === l(h) &&
										(x ? (H(X), (X = -1)) : (x = !0), qt(F, st - vt)))
								: ((L.sortIndex = mt),
									i(g, L),
									w || E || ((w = !0), J || ((J = !0), at()))),
							L
						);
					}),
					(n.unstable_shouldYield = ct),
					(n.unstable_wrapCallback = function (L) {
						var k = b;
						return function () {
							var st = b;
							b = k;
							try {
								return L.apply(this, arguments);
							} finally {
								b = st;
							}
						};
					}));
			})(Bc)),
		Bc
	);
}
var Nm;
function Ov() {
	return (Nm || ((Nm = 1), (jc.exports = Mv())), jc.exports);
}
var Hc = { exports: {} },
	we = {};
var Um;
function Cv() {
	if (Um) return we;
	Um = 1;
	var n = xs();
	function i(g) {
		var h = "https://react.dev/errors/" + g;
		if (1 < arguments.length) {
			h += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var v = 2; v < arguments.length; v++)
				h += "&args[]=" + encodeURIComponent(arguments[v]);
		}
		return (
			"Minified React error #" +
			g +
			"; visit " +
			h +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function l() {}
	var r = {
			d: {
				f: l,
				r: function () {
					throw Error(i(522));
				},
				D: l,
				C: l,
				L: l,
				m: l,
				X: l,
				S: l,
				M: l,
			},
			p: 0,
			findDOMNode: null,
		},
		c = Symbol.for("react.portal");
	function f(g, h, v) {
		var y =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: c,
			key: y == null ? null : "" + y,
			children: g,
			containerInfo: h,
			implementation: v,
		};
	}
	var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function m(g, h) {
		if (g === "font") return "";
		if (typeof h == "string") return h === "use-credentials" ? h : "";
	}
	return (
		(we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
		(we.createPortal = function (g, h) {
			var v =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
				throw Error(i(299));
			return f(g, h, null, v);
		}),
		(we.flushSync = function (g) {
			var h = d.T,
				v = r.p;
			try {
				if (((d.T = null), (r.p = 2), g)) return g();
			} finally {
				((d.T = h), (r.p = v), r.d.f());
			}
		}),
		(we.preconnect = function (g, h) {
			typeof g == "string" &&
				(h
					? ((h = h.crossOrigin),
						(h =
							typeof h == "string"
								? h === "use-credentials"
									? h
									: ""
								: void 0))
					: (h = null),
				r.d.C(g, h));
		}),
		(we.prefetchDNS = function (g) {
			typeof g == "string" && r.d.D(g);
		}),
		(we.preinit = function (g, h) {
			if (typeof g == "string" && h && typeof h.as == "string") {
				var v = h.as,
					y = m(v, h.crossOrigin),
					b = typeof h.integrity == "string" ? h.integrity : void 0,
					E = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
				v === "style"
					? r.d.S(g, typeof h.precedence == "string" ? h.precedence : void 0, {
							crossOrigin: y,
							integrity: b,
							fetchPriority: E,
						})
					: v === "script" &&
						r.d.X(g, {
							crossOrigin: y,
							integrity: b,
							fetchPriority: E,
							nonce: typeof h.nonce == "string" ? h.nonce : void 0,
						});
			}
		}),
		(we.preinitModule = function (g, h) {
			if (typeof g == "string")
				if (typeof h == "object" && h !== null) {
					if (h.as == null || h.as === "script") {
						var v = m(h.as, h.crossOrigin);
						r.d.M(g, {
							crossOrigin: v,
							integrity: typeof h.integrity == "string" ? h.integrity : void 0,
							nonce: typeof h.nonce == "string" ? h.nonce : void 0,
						});
					}
				} else h == null && r.d.M(g);
		}),
		(we.preload = function (g, h) {
			if (
				typeof g == "string" &&
				typeof h == "object" &&
				h !== null &&
				typeof h.as == "string"
			) {
				var v = h.as,
					y = m(v, h.crossOrigin);
				r.d.L(g, v, {
					crossOrigin: y,
					integrity: typeof h.integrity == "string" ? h.integrity : void 0,
					nonce: typeof h.nonce == "string" ? h.nonce : void 0,
					type: typeof h.type == "string" ? h.type : void 0,
					fetchPriority:
						typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
					referrerPolicy:
						typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
					imageSrcSet:
						typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
					imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
					media: typeof h.media == "string" ? h.media : void 0,
				});
			}
		}),
		(we.preloadModule = function (g, h) {
			if (typeof g == "string")
				if (h) {
					var v = m(h.as, h.crossOrigin);
					r.d.m(g, {
						as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
						crossOrigin: v,
						integrity: typeof h.integrity == "string" ? h.integrity : void 0,
					});
				} else r.d.m(g);
		}),
		(we.requestFormReset = function (g) {
			r.d.r(g);
		}),
		(we.unstable_batchedUpdates = function (g, h) {
			return g(h);
		}),
		(we.useFormState = function (g, h, v) {
			return d.H.useFormState(g, h, v);
		}),
		(we.useFormStatus = function () {
			return d.H.useHostTransitionStatus();
		}),
		(we.version = "19.2.4"),
		we
	);
}
var jm;
function Y1() {
	if (jm) return Hc.exports;
	jm = 1;
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (i) {
				console.error(i);
			}
	}
	return (n(), (Hc.exports = Cv()), Hc.exports);
}
var Bm;
function zv() {
	if (Bm) return hs;
	Bm = 1;
	var n = Ov(),
		i = xs(),
		l = Y1();
	function r(t) {
		var e = "https://react.dev/errors/" + t;
		if (1 < arguments.length) {
			e += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var a = 2; a < arguments.length; a++)
				e += "&args[]=" + encodeURIComponent(arguments[a]);
		}
		return (
			"Minified React error #" +
			t +
			"; visit " +
			e +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function c(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function f(t) {
		var e = t,
			a = t;
		if (t.alternate) for (; e.return; ) e = e.return;
		else {
			t = e;
			do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
			while (t);
		}
		return e.tag === 3 ? a : null;
	}
	function d(t) {
		if (t.tag === 13) {
			var e = t.memoizedState;
			if (
				(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
				e !== null)
			)
				return e.dehydrated;
		}
		return null;
	}
	function m(t) {
		if (t.tag === 31) {
			var e = t.memoizedState;
			if (
				(e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
				e !== null)
			)
				return e.dehydrated;
		}
		return null;
	}
	function g(t) {
		if (f(t) !== t) throw Error(r(188));
	}
	function h(t) {
		var e = t.alternate;
		if (!e) {
			if (((e = f(t)), e === null)) throw Error(r(188));
			return e !== t ? null : t;
		}
		for (var a = t, s = e; ; ) {
			var o = a.return;
			if (o === null) break;
			var u = o.alternate;
			if (u === null) {
				if (((s = o.return), s !== null)) {
					a = s;
					continue;
				}
				break;
			}
			if (o.child === u.child) {
				for (u = o.child; u; ) {
					if (u === a) return (g(o), t);
					if (u === s) return (g(o), e);
					u = u.sibling;
				}
				throw Error(r(188));
			}
			if (a.return !== s.return) ((a = o), (s = u));
			else {
				for (var p = !1, S = o.child; S; ) {
					if (S === a) {
						((p = !0), (a = o), (s = u));
						break;
					}
					if (S === s) {
						((p = !0), (s = o), (a = u));
						break;
					}
					S = S.sibling;
				}
				if (!p) {
					for (S = u.child; S; ) {
						if (S === a) {
							((p = !0), (a = u), (s = o));
							break;
						}
						if (S === s) {
							((p = !0), (s = u), (a = o));
							break;
						}
						S = S.sibling;
					}
					if (!p) throw Error(r(189));
				}
			}
			if (a.alternate !== s) throw Error(r(190));
		}
		if (a.tag !== 3) throw Error(r(188));
		return a.stateNode.current === a ? t : e;
	}
	function v(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t;
		for (t = t.child; t !== null; ) {
			if (((e = v(t)), e !== null)) return e;
			t = t.sibling;
		}
		return null;
	}
	var y = Object.assign,
		b = Symbol.for("react.element"),
		E = Symbol.for("react.transitional.element"),
		w = Symbol.for("react.portal"),
		x = Symbol.for("react.fragment"),
		R = Symbol.for("react.strict_mode"),
		O = Symbol.for("react.profiler"),
		H = Symbol.for("react.consumer"),
		q = Symbol.for("react.context"),
		Q = Symbol.for("react.forward_ref"),
		F = Symbol.for("react.suspense"),
		J = Symbol.for("react.suspense_list"),
		X = Symbol.for("react.memo"),
		Y = Symbol.for("react.lazy"),
		W = Symbol.for("react.activity"),
		ct = Symbol.for("react.memo_cache_sentinel"),
		it = Symbol.iterator;
	function at(t) {
		return t === null || typeof t != "object"
			? null
			: ((t = (it && t[it]) || t["@@iterator"]),
				typeof t == "function" ? t : null);
	}
	var wt = Symbol.for("react.client.reference");
	function Tt(t) {
		if (t == null) return null;
		if (typeof t == "function")
			return t.$$typeof === wt ? null : t.displayName || t.name || null;
		if (typeof t == "string") return t;
		switch (t) {
			case x:
				return "Fragment";
			case O:
				return "Profiler";
			case R:
				return "StrictMode";
			case F:
				return "Suspense";
			case J:
				return "SuspenseList";
			case W:
				return "Activity";
		}
		if (typeof t == "object")
			switch (t.$$typeof) {
				case w:
					return "Portal";
				case q:
					return t.displayName || "Context";
				case H:
					return (t._context.displayName || "Context") + ".Consumer";
				case Q:
					var e = t.render;
					return (
						(t = t.displayName),
						t ||
							((t = e.displayName || e.name || ""),
							(t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
						t
					);
				case X:
					return (
						(e = t.displayName || null), e !== null ? e : Tt(t.type) || "Memo"
					);
				case Y:
					((e = t._payload), (t = t._init));
					try {
						return Tt(t(e));
					} catch {}
			}
		return null;
	}
	var qt = Array.isArray,
		L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		k = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		st = { pending: !1, data: null, method: null, action: null },
		vt = [],
		mt = -1;
	function M(t) {
		return { current: t };
	}
	function G(t) {
		0 > mt || ((t.current = vt[mt]), (vt[mt] = null), mt--);
	}
	function P(t, e) {
		(mt++, (vt[mt] = t.current), (t.current = e));
	}
	var I = M(null),
		et = M(null),
		ot = M(null),
		gt = M(null);
	function ft(t, e) {
		switch ((P(ot, e), P(et, t), P(I, null), e.nodeType)) {
			case 9:
			case 11:
				t = (t = e.documentElement) && (t = t.namespaceURI) ? $0(t) : 0;
				break;
			default:
				if (((t = e.tagName), (e = e.namespaceURI)))
					((e = $0(e)), (t = W0(e, t)));
				else
					switch (t) {
						case "svg":
							t = 1;
							break;
						case "math":
							t = 2;
							break;
						default:
							t = 0;
					}
		}
		(G(I), P(I, t));
	}
	function At() {
		(G(I), G(et), G(ot));
	}
	function ze(t) {
		t.memoizedState !== null && P(gt, t);
		var e = I.current,
			a = W0(e, t.type);
		e !== a && (P(et, t), P(I, a));
	}
	function De(t) {
		(et.current === t && (G(I), G(et)),
			gt.current === t && (G(gt), (os._currentValue = st)));
	}
	var Re, qa;
	function Le(t) {
		if (Re === void 0)
			try {
				throw Error();
			} catch (a) {
				var e = a.stack.trim().match(/\n( *(at )?)/);
				((Re = (e && e[1]) || ""),
					(qa =
						-1 <
						a.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < a.stack.indexOf("@")
								? "@unknown:0:0"
								: ""));
			}
		return (
			`
` +
			Re +
			t +
			qa
		);
	}
	var Za = !1;
	function zn(t, e) {
		if (!t || Za) return "";
		Za = !0;
		var a = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var s = {
				DetermineComponentFrameRoot: function () {
					try {
						if (e) {
							var K = function () {
								throw Error();
							};
							if (
								(Object.defineProperty(K.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(K, []);
								} catch (B) {
									var j = B;
								}
								Reflect.construct(t, [], K);
							} else {
								try {
									K.call();
								} catch (B) {
									j = B;
								}
								t.call(K.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (B) {
								j = B;
							}
							(K = t()) &&
								typeof K.catch == "function" &&
								K.catch(function () {});
						}
					} catch (B) {
						if (B && j && typeof B.stack == "string") return [B.stack, j.stack];
					}
					return [null, null];
				},
			};
			s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var o = Object.getOwnPropertyDescriptor(
				s.DetermineComponentFrameRoot,
				"name",
			);
			o &&
				o.configurable &&
				Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var u = s.DetermineComponentFrameRoot(),
				p = u[0],
				S = u[1];
			if (p && S) {
				var A = p.split(`
`),
					U = S.split(`
`);
				for (
					o = s = 0;
					s < A.length && !A[s].includes("DetermineComponentFrameRoot");
				)
					s++;
				for (; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); )
					o++;
				if (s === A.length || o === U.length)
					for (
						s = A.length - 1, o = U.length - 1;
						1 <= s && 0 <= o && A[s] !== U[o];
					)
						o--;
				for (; 1 <= s && 0 <= o; s--, o--)
					if (A[s] !== U[o]) {
						if (s !== 1 || o !== 1)
							do
								if ((s--, o--, 0 > o || A[s] !== U[o])) {
									var Z =
										`
` + A[s].replace(" at new ", " at ");
									return (
										t.displayName &&
											Z.includes("<anonymous>") &&
											(Z = Z.replace("<anonymous>", t.displayName)),
										Z
									);
								}
							while (1 <= s && 0 <= o);
						break;
					}
			}
		} finally {
			((Za = !1), (Error.prepareStackTrace = a));
		}
		return (a = t ? t.displayName || t.name : "") ? Le(a) : "";
	}
	function En(t, e) {
		switch (t.tag) {
			case 26:
			case 27:
			case 5:
				return Le(t.type);
			case 16:
				return Le("Lazy");
			case 13:
				return t.child !== e && e !== null
					? Le("Suspense Fallback")
					: Le("Suspense");
			case 19:
				return Le("SuspenseList");
			case 0:
			case 15:
				return zn(t.type, !1);
			case 11:
				return zn(t.type.render, !1);
			case 1:
				return zn(t.type, !0);
			case 31:
				return Le("Activity");
			default:
				return "";
		}
	}
	function nn(t) {
		try {
			var e = "",
				a = null;
			do ((e += En(t, a)), (a = t), (t = t.return));
			while (t);
			return e;
		} catch (s) {
			return (
				`
Error generating stack: ` +
				s.message +
				`
` +
				s.stack
			);
		}
	}
	var fe = Object.prototype.hasOwnProperty,
		Xe = n.unstable_scheduleCallback,
		Qa = n.unstable_cancelCallback,
		de = n.unstable_shouldYield,
		pn = n.unstable_requestPaint,
		he = n.unstable_now,
		wi = n.unstable_getCurrentPriorityLevel,
		xt = n.unstable_ImmediatePriority,
		Kt = n.unstable_UserBlockingPriority,
		ae = n.unstable_NormalPriority,
		na = n.unstable_LowPriority,
		Dn = n.unstable_IdlePriority,
		Os = n.log,
		aa = n.unstable_setDisableYieldValue,
		Ya = null,
		Ae = null;
	function yn(t) {
		if (
			(typeof Os == "function" && aa(t),
			Ae && typeof Ae.setStrictMode == "function")
		)
			try {
				Ae.setStrictMode(Ya, t);
			} catch {}
	}
	var Ee = Math.clz32 ? Math.clz32 : _n,
		_o = Math.log,
		_l = Math.LN2;
	function _n(t) {
		return ((t >>>= 0), t === 0 ? 32 : (31 - ((_o(t) / _l) | 0)) | 0);
	}
	var Ti = 256,
		Ri = 262144,
		Va = 4194304;
	function wn(t) {
		var e = t & 42;
		if (e !== 0) return e;
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
				return t & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return t & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return t;
		}
	}
	function dt(t, e, a) {
		var s = t.pendingLanes;
		if (s === 0) return 0;
		var o = 0,
			u = t.suspendedLanes,
			p = t.pingedLanes;
		t = t.warmLanes;
		var S = s & 134217727;
		return (
			S !== 0
				? ((s = S & ~u),
					s !== 0
						? (o = wn(s))
						: ((p &= S),
							p !== 0
								? (o = wn(p))
								: a || ((a = S & ~t), a !== 0 && (o = wn(a)))))
				: ((S = s & ~u),
					S !== 0
						? (o = wn(S))
						: p !== 0
							? (o = wn(p))
							: a || ((a = s & ~t), a !== 0 && (o = wn(a)))),
			o === 0
				? 0
				: e !== 0 &&
					  e !== o &&
					  (e & u) === 0 &&
					  ((u = o & -o),
					  (a = e & -e),
					  u >= a || (u === 32 && (a & 4194048) !== 0))
					? e
					: o
		);
	}
	function Yt(t, e) {
		return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
	}
	function oe(t, e) {
		switch (t) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return e + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function _e() {
		var t = Va;
		return ((Va <<= 1), (Va & 62914560) === 0 && (Va = 4194304), t);
	}
	function ia(t) {
		for (var e = [], a = 0; 31 > a; a++) e.push(t);
		return e;
	}
	function Xt(t, e) {
		((t.pendingLanes |= e),
			e !== 268435456 &&
				((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
	}
	function Ne(t, e, a, s, o, u) {
		var p = t.pendingLanes;
		((t.pendingLanes = a),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.warmLanes = 0),
			(t.expiredLanes &= a),
			(t.entangledLanes &= a),
			(t.errorRecoveryDisabledLanes &= a),
			(t.shellSuspendCounter = 0));
		var S = t.entanglements,
			A = t.expirationTimes,
			U = t.hiddenUpdates;
		for (a = p & ~a; 0 < a; ) {
			var Z = 31 - Ee(a),
				K = 1 << Z;
			((S[Z] = 0), (A[Z] = -1));
			var j = U[Z];
			if (j !== null)
				for (U[Z] = null, Z = 0; Z < j.length; Z++) {
					var B = j[Z];
					B !== null && (B.lane &= -536870913);
				}
			a &= ~K;
		}
		(s !== 0 && Ga(t, s, 0),
			u !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(p & ~e)));
	}
	function Ga(t, e, a) {
		((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
		var s = 31 - Ee(e);
		((t.entangledLanes |= e),
			(t.entanglements[s] = t.entanglements[s] | 1073741824 | (a & 261930)));
	}
	function Ue(t, e) {
		var a = (t.entangledLanes |= e);
		for (t = t.entanglements; a; ) {
			var s = 31 - Ee(a),
				o = 1 << s;
			((o & e) | (t[s] & e) && (t[s] |= e), (a &= ~o));
		}
	}
	function je(t, e) {
		var a = e & -e;
		return (
			(a = (a & 42) !== 0 ? 1 : Ai(a)),
			(a & (t.suspendedLanes | e)) !== 0 ? 0 : a
		);
	}
	function Ai(t) {
		switch (t) {
			case 2:
				t = 1;
				break;
			case 8:
				t = 4;
				break;
			case 32:
				t = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				t = 128;
				break;
			case 268435456:
				t = 134217728;
				break;
			default:
				t = 0;
		}
		return t;
	}
	function gn(t) {
		return (
			(t &= -t),
			2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function wo() {
		var t = k.p;
		return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : _m(t.type));
	}
	function Hf(t, e) {
		var a = k.p;
		try {
			return ((k.p = t), e());
		} finally {
			k.p = a;
		}
	}
	var la = Math.random().toString(36).slice(2),
		me = "__reactFiber$" + la,
		Be = "__reactProps$" + la,
		xi = "__reactContainer$" + la,
		To = "__reactEvents$" + la,
		dy = "__reactListeners$" + la,
		hy = "__reactHandles$" + la,
		qf = "__reactResources$" + la,
		wl = "__reactMarker$" + la;
	function Ro(t) {
		(delete t[me], delete t[Be], delete t[To], delete t[dy], delete t[hy]);
	}
	function Mi(t) {
		var e = t[me];
		if (e) return e;
		for (var a = t.parentNode; a; ) {
			if ((e = a[xi] || a[me])) {
				if (
					((a = e.alternate),
					e.child !== null || (a !== null && a.child !== null))
				)
					for (t = sm(t); t !== null; ) {
						if ((a = t[me])) return a;
						t = sm(t);
					}
				return e;
			}
			((t = a), (a = t.parentNode));
		}
		return null;
	}
	function Oi(t) {
		if ((t = t[me] || t[xi])) {
			var e = t.tag;
			if (
				e === 5 ||
				e === 6 ||
				e === 13 ||
				e === 31 ||
				e === 26 ||
				e === 27 ||
				e === 3
			)
				return t;
		}
		return null;
	}
	function Tl(t) {
		var e = t.tag;
		if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
		throw Error(r(33));
	}
	function Ci(t) {
		var e = t[qf];
		return (
			e ||
				(e = t[qf] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			e
		);
	}
	function ue(t) {
		t[wl] = !0;
	}
	var Zf = new Set(),
		Qf = {};
	function Xa(t, e) {
		(zi(t, e), zi(t + "Capture", e));
	}
	function zi(t, e) {
		for (Qf[t] = e, t = 0; t < e.length; t++) Zf.add(e[t]);
	}
	var my = RegExp(
			"^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
		),
		Yf = {},
		Vf = {};
	function py(t) {
		return fe.call(Vf, t)
			? !0
			: fe.call(Yf, t)
				? !1
				: my.test(t)
					? (Vf[t] = !0)
					: ((Yf[t] = !0), !1);
	}
	function Cs(t, e, a) {
		if (py(e))
			if (a === null) t.removeAttribute(e);
			else {
				switch (typeof a) {
					case "undefined":
					case "function":
					case "symbol":
						t.removeAttribute(e);
						return;
					case "boolean":
						var s = e.toLowerCase().slice(0, 5);
						if (s !== "data-" && s !== "aria-") {
							t.removeAttribute(e);
							return;
						}
				}
				t.setAttribute(e, "" + a);
			}
	}
	function zs(t, e, a) {
		if (a === null) t.removeAttribute(e);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(e);
					return;
			}
			t.setAttribute(e, "" + a);
		}
	}
	function Ln(t, e, a, s) {
		if (s === null) t.removeAttribute(a);
		else {
			switch (typeof s) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					t.removeAttribute(a);
					return;
			}
			t.setAttributeNS(e, a, "" + s);
		}
	}
	function an(t) {
		switch (typeof t) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return t;
			case "object":
				return t;
			default:
				return "";
		}
	}
	function Gf(t) {
		var e = t.type;
		return (
			(t = t.nodeName) &&
			t.toLowerCase() === "input" &&
			(e === "checkbox" || e === "radio")
		);
	}
	function yy(t, e, a) {
		var s = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
		if (
			!t.hasOwnProperty(e) &&
			typeof s < "u" &&
			typeof s.get == "function" &&
			typeof s.set == "function"
		) {
			var o = s.get,
				u = s.set;
			return (
				Object.defineProperty(t, e, {
					configurable: !0,
					get: function () {
						return o.call(this);
					},
					set: function (p) {
						((a = "" + p), u.call(this, p));
					},
				}),
				Object.defineProperty(t, e, { enumerable: s.enumerable }),
				{
					getValue: function () {
						return a;
					},
					setValue: function (p) {
						a = "" + p;
					},
					stopTracking: function () {
						((t._valueTracker = null), delete t[e]);
					},
				}
			);
		}
	}
	function Ao(t) {
		if (!t._valueTracker) {
			var e = Gf(t) ? "checked" : "value";
			t._valueTracker = yy(t, e, "" + t[e]);
		}
	}
	function Xf(t) {
		if (!t) return !1;
		var e = t._valueTracker;
		if (!e) return !0;
		var a = e.getValue(),
			s = "";
		return (
			t && (s = Gf(t) ? (t.checked ? "true" : "false") : t.value),
			(t = s),
			t !== a ? (e.setValue(t), !0) : !1
		);
	}
	function Ds(t) {
		if (
			((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
		)
			return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	var gy = /[\n"\\]/g;
	function ln(t) {
		return t.replace(gy, function (e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function xo(t, e, a, s, o, u, p, S) {
		((t.name = ""),
			p != null &&
			typeof p != "function" &&
			typeof p != "symbol" &&
			typeof p != "boolean"
				? (t.type = p)
				: t.removeAttribute("type"),
			e != null
				? p === "number"
					? ((e === 0 && t.value === "") || t.value != e) &&
						(t.value = "" + an(e))
					: t.value !== "" + an(e) && (t.value = "" + an(e))
				: (p !== "submit" && p !== "reset") || t.removeAttribute("value"),
			e != null
				? Mo(t, p, an(e))
				: a != null
					? Mo(t, p, an(a))
					: s != null && t.removeAttribute("value"),
			o == null && u != null && (t.defaultChecked = !!u),
			o != null &&
				(t.checked = o && typeof o != "function" && typeof o != "symbol"),
			S != null &&
			typeof S != "function" &&
			typeof S != "symbol" &&
			typeof S != "boolean"
				? (t.name = "" + an(S))
				: t.removeAttribute("name"));
	}
	function Kf(t, e, a, s, o, u, p, S) {
		if (
			(u != null &&
				typeof u != "function" &&
				typeof u != "symbol" &&
				typeof u != "boolean" &&
				(t.type = u),
			e != null || a != null)
		) {
			if (!((u !== "submit" && u !== "reset") || e != null)) {
				Ao(t);
				return;
			}
			((a = a != null ? "" + an(a) : ""),
				(e = e != null ? "" + an(e) : a),
				S || e === t.value || (t.value = e),
				(t.defaultValue = e));
		}
		((s = s ?? o),
			(s = typeof s != "function" && typeof s != "symbol" && !!s),
			(t.checked = S ? t.checked : !!s),
			(t.defaultChecked = !!s),
			p != null &&
				typeof p != "function" &&
				typeof p != "symbol" &&
				typeof p != "boolean" &&
				(t.name = p),
			Ao(t));
	}
	function Mo(t, e, a) {
		(e === "number" && Ds(t.ownerDocument) === t) ||
			t.defaultValue === "" + a ||
			(t.defaultValue = "" + a);
	}
	function Di(t, e, a, s) {
		if (((t = t.options), e)) {
			e = {};
			for (var o = 0; o < a.length; o++) e["$" + a[o]] = !0;
			for (a = 0; a < t.length; a++)
				((o = e.hasOwnProperty("$" + t[a].value)),
					t[a].selected !== o && (t[a].selected = o),
					o && s && (t[a].defaultSelected = !0));
		} else {
			for (a = "" + an(a), e = null, o = 0; o < t.length; o++) {
				if (t[o].value === a) {
					((t[o].selected = !0), s && (t[o].defaultSelected = !0));
					return;
				}
				e !== null || t[o].disabled || (e = t[o]);
			}
			e !== null && (e.selected = !0);
		}
	}
	function Pf(t, e, a) {
		if (
			e != null &&
			((e = "" + an(e)), e !== t.value && (t.value = e), a == null)
		) {
			t.defaultValue !== e && (t.defaultValue = e);
			return;
		}
		t.defaultValue = a != null ? "" + an(a) : "";
	}
	function kf(t, e, a, s) {
		if (e == null) {
			if (s != null) {
				if (a != null) throw Error(r(92));
				if (qt(s)) {
					if (1 < s.length) throw Error(r(93));
					s = s[0];
				}
				a = s;
			}
			(a == null && (a = ""), (e = a));
		}
		((a = an(e)),
			(t.defaultValue = a),
			(s = t.textContent),
			s === a && s !== "" && s !== null && (t.value = s),
			Ao(t));
	}
	function Li(t, e) {
		if (e) {
			var a = t.firstChild;
			if (a && a === t.lastChild && a.nodeType === 3) {
				a.nodeValue = e;
				return;
			}
		}
		t.textContent = e;
	}
	var vy = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Ff(t, e, a) {
		var s = e.indexOf("--") === 0;
		a == null || typeof a == "boolean" || a === ""
			? s
				? t.setProperty(e, "")
				: e === "float"
					? (t.cssFloat = "")
					: (t[e] = "")
			: s
				? t.setProperty(e, a)
				: typeof a != "number" || a === 0 || vy.has(e)
					? e === "float"
						? (t.cssFloat = a)
						: (t[e] = ("" + a).trim())
					: (t[e] = a + "px");
	}
	function Jf(t, e, a) {
		if (e != null && typeof e != "object") throw Error(r(62));
		if (((t = t.style), a != null)) {
			for (var s in a)
				!a.hasOwnProperty(s) ||
					(e != null && e.hasOwnProperty(s)) ||
					(s.indexOf("--") === 0
						? t.setProperty(s, "")
						: s === "float"
							? (t.cssFloat = "")
							: (t[s] = ""));
			for (var o in e)
				((s = e[o]), e.hasOwnProperty(o) && a[o] !== s && Ff(t, o, s));
		} else for (var u in e) e.hasOwnProperty(u) && Ff(t, u, e[u]);
	}
	function Oo(t) {
		if (t.indexOf("-") === -1) return !1;
		switch (t) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var by = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		Sy =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Ls(t) {
		return Sy.test("" + t)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: t;
	}
	function Nn() {}
	var Co = null;
	function zo(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var Ni = null,
		Ui = null;
	function If(t) {
		var e = Oi(t);
		if (e && (t = e.stateNode)) {
			var a = t[Be] || null;
			t: switch (((t = e.stateNode), e.type)) {
				case "input":
					if (
						(xo(
							t,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name,
						),
						(e = a.name),
						a.type === "radio" && e != null)
					) {
						for (a = t; a.parentNode; ) a = a.parentNode;
						for (
							a = a.querySelectorAll(
								'input[name="' + ln("" + e) + '"][type="radio"]',
							),
								e = 0;
							e < a.length;
							e++
						) {
							var s = a[e];
							if (s !== t && s.form === t.form) {
								var o = s[Be] || null;
								if (!o) throw Error(r(90));
								xo(
									s,
									o.value,
									o.defaultValue,
									o.defaultValue,
									o.checked,
									o.defaultChecked,
									o.type,
									o.name,
								);
							}
						}
						for (e = 0; e < a.length; e++)
							((s = a[e]), s.form === t.form && Xf(s));
					}
					break t;
				case "textarea":
					Pf(t, a.value, a.defaultValue);
					break t;
				case "select":
					((e = a.value), e != null && Di(t, !!a.multiple, e, !1));
			}
		}
	}
	var Do = !1;
	function $f(t, e, a) {
		if (Do) return t(e, a);
		Do = !0;
		try {
			var s = t(e);
			return s;
		} finally {
			if (
				((Do = !1),
				(Ni !== null || Ui !== null) &&
					(Sr(), Ni && ((e = Ni), (t = Ui), (Ui = Ni = null), If(e), t)))
			)
				for (e = 0; e < t.length; e++) If(t[e]);
		}
	}
	function Rl(t, e) {
		var a = t.stateNode;
		if (a === null) return null;
		var s = a[Be] || null;
		if (s === null) return null;
		a = s[e];
		t: switch (e) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				((s = !s.disabled) ||
					((t = t.type),
					(s = !(
						t === "button" ||
						t === "input" ||
						t === "select" ||
						t === "textarea"
					))),
					(t = !s));
				break t;
			default:
				t = !1;
		}
		if (t) return null;
		if (a && typeof a != "function") throw Error(r(231, e, typeof a));
		return a;
	}
	var Un = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		Lo = !1;
	if (Un)
		try {
			var Al = {};
			(Object.defineProperty(Al, "passive", {
				get: function () {
					Lo = !0;
				},
			}),
				window.addEventListener("test", Al, Al),
				window.removeEventListener("test", Al, Al));
		} catch {
			Lo = !1;
		}
	var sa = null,
		No = null,
		Ns = null;
	function Wf() {
		if (Ns) return Ns;
		var t,
			e = No,
			a = e.length,
			s,
			o = "value" in sa ? sa.value : sa.textContent,
			u = o.length;
		for (t = 0; t < a && e[t] === o[t]; t++);
		var p = a - t;
		for (s = 1; s <= p && e[a - s] === o[u - s]; s++);
		return (Ns = o.slice(t, 1 < s ? 1 - s : void 0));
	}
	function Us(t) {
		var e = t.keyCode;
		return (
			"charCode" in t
				? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
				: (t = e),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function js() {
		return !0;
	}
	function td() {
		return !1;
	}
	function He(t) {
		function e(a, s, o, u, p) {
			((this._reactName = a),
				(this._targetInst = o),
				(this.type = s),
				(this.nativeEvent = u),
				(this.target = p),
				(this.currentTarget = null));
			for (var S in t)
				t.hasOwnProperty(S) && ((a = t[S]), (this[S] = a ? a(u) : u[S]));
			return (
				(this.isDefaultPrevented = (
					u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
				)
					? js
					: td),
				(this.isPropagationStopped = td),
				this
			);
		}
		return (
			y(e.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var a = this.nativeEvent;
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != "unknown" && (a.returnValue = !1),
						(this.isDefaultPrevented = js));
				},
				stopPropagation: function () {
					var a = this.nativeEvent;
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
						(this.isPropagationStopped = js));
				},
				persist: function () {},
				isPersistent: js,
			}),
			e
		);
	}
	var Ka = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Bs = He(Ka),
		xl = y({}, Ka, { view: 0, detail: 0 }),
		Ey = He(xl),
		Uo,
		jo,
		Ml,
		Hs = y({}, xl, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Ho,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return "movementX" in t
					? t.movementX
					: (t !== Ml &&
							(Ml && t.type === "mousemove"
								? ((Uo = t.screenX - Ml.screenX), (jo = t.screenY - Ml.screenY))
								: (jo = Uo = 0),
							(Ml = t)),
						Uo);
			},
			movementY: function (t) {
				return "movementY" in t ? t.movementY : jo;
			},
		}),
		ed = He(Hs),
		_y = y({}, Hs, { dataTransfer: 0 }),
		wy = He(_y),
		Ty = y({}, xl, { relatedTarget: 0 }),
		Bo = He(Ty),
		Ry = y({}, Ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Ay = He(Ry),
		xy = y({}, Ka, {
			clipboardData: function (t) {
				return "clipboardData" in t ? t.clipboardData : window.clipboardData;
			},
		}),
		My = He(xy),
		Oy = y({}, Ka, { data: 0 }),
		nd = He(Oy),
		Cy = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		zy = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		Dy = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Ly(t) {
		var e = this.nativeEvent;
		return e.getModifierState
			? e.getModifierState(t)
			: (t = Dy[t])
				? !!e[t]
				: !1;
	}
	function Ho() {
		return Ly;
	}
	var Ny = y({}, xl, {
			key: function (t) {
				if (t.key) {
					var e = Cy[t.key] || t.key;
					if (e !== "Unidentified") return e;
				}
				return t.type === "keypress"
					? ((t = Us(t)), t === 13 ? "Enter" : String.fromCharCode(t))
					: t.type === "keydown" || t.type === "keyup"
						? zy[t.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Ho,
			charCode: function (t) {
				return t.type === "keypress" ? Us(t) : 0;
			},
			keyCode: function (t) {
				return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === "keypress"
					? Us(t)
					: t.type === "keydown" || t.type === "keyup"
						? t.keyCode
						: 0;
			},
		}),
		Uy = He(Ny),
		jy = y({}, Hs, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		ad = He(jy),
		By = y({}, xl, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Ho,
		}),
		Hy = He(By),
		qy = y({}, Ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Zy = He(qy),
		Qy = y({}, Hs, {
			deltaX: function (t) {
				return "deltaX" in t
					? t.deltaX
					: "wheelDeltaX" in t
						? -t.wheelDeltaX
						: 0;
			},
			deltaY: function (t) {
				return "deltaY" in t
					? t.deltaY
					: "wheelDeltaY" in t
						? -t.wheelDeltaY
						: "wheelDelta" in t
							? -t.wheelDelta
							: 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		Yy = He(Qy),
		Vy = y({}, Ka, { newState: 0, oldState: 0 }),
		Gy = He(Vy),
		Xy = [9, 13, 27, 32],
		qo = Un && "CompositionEvent" in window,
		Ol = null;
	Un && "documentMode" in document && (Ol = document.documentMode);
	var Ky = Un && "TextEvent" in window && !Ol,
		id = Un && (!qo || (Ol && 8 < Ol && 11 >= Ol)),
		ld = " ",
		sd = !1;
	function rd(t, e) {
		switch (t) {
			case "keyup":
				return Xy.indexOf(e.keyCode) !== -1;
			case "keydown":
				return e.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function od(t) {
		return (
			(t = t.detail), typeof t == "object" && "data" in t ? t.data : null
		);
	}
	var ji = !1;
	function Py(t, e) {
		switch (t) {
			case "compositionend":
				return od(e);
			case "keypress":
				return e.which !== 32 ? null : ((sd = !0), ld);
			case "textInput":
				return ((t = e.data), t === ld && sd ? null : t);
			default:
				return null;
		}
	}
	function ky(t, e) {
		if (ji)
			return t === "compositionend" || (!qo && rd(t, e))
				? ((t = Wf()), (Ns = No = sa = null), (ji = !1), t)
				: null;
		switch (t) {
			case "paste":
				return null;
			case "keypress":
				if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
					if (e.char && 1 < e.char.length) return e.char;
					if (e.which) return String.fromCharCode(e.which);
				}
				return null;
			case "compositionend":
				return id && e.locale !== "ko" ? null : e.data;
			default:
				return null;
		}
	}
	var Fy = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function ud(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return e === "input" ? !!Fy[t.type] : e === "textarea";
	}
	function cd(t, e, a, s) {
		(Ni ? (Ui ? Ui.push(s) : (Ui = [s])) : (Ni = s),
			(e = xr(e, "onChange")),
			0 < e.length &&
				((a = new Bs("onChange", "change", null, a, s)),
				t.push({ event: a, listeners: e })));
	}
	var Cl = null,
		zl = null;
	function Jy(t) {
		K0(t, 0);
	}
	function qs(t) {
		var e = Tl(t);
		if (Xf(e)) return t;
	}
	function fd(t, e) {
		if (t === "change") return e;
	}
	var dd = !1;
	if (Un) {
		var Zo;
		if (Un) {
			var Qo = "oninput" in document;
			if (!Qo) {
				var hd = document.createElement("div");
				(hd.setAttribute("oninput", "return;"),
					(Qo = typeof hd.oninput == "function"));
			}
			Zo = Qo;
		} else Zo = !1;
		dd = Zo && (!document.documentMode || 9 < document.documentMode);
	}
	function md() {
		Cl && (Cl.detachEvent("onpropertychange", pd), (zl = Cl = null));
	}
	function pd(t) {
		if (t.propertyName === "value" && qs(zl)) {
			var e = [];
			(cd(e, zl, t, zo(t)), $f(Jy, e));
		}
	}
	function Iy(t, e, a) {
		t === "focusin"
			? (md(), (Cl = e), (zl = a), Cl.attachEvent("onpropertychange", pd))
			: t === "focusout" && md();
	}
	function $y(t) {
		if (t === "selectionchange" || t === "keyup" || t === "keydown")
			return qs(zl);
	}
	function Wy(t, e) {
		if (t === "click") return qs(e);
	}
	function tg(t, e) {
		if (t === "input" || t === "change") return qs(e);
	}
	function eg(t, e) {
		return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
	}
	var Ke = typeof Object.is == "function" ? Object.is : eg;
	function Dl(t, e) {
		if (Ke(t, e)) return !0;
		if (
			typeof t != "object" ||
			t === null ||
			typeof e != "object" ||
			e === null
		)
			return !1;
		var a = Object.keys(t),
			s = Object.keys(e);
		if (a.length !== s.length) return !1;
		for (s = 0; s < a.length; s++) {
			var o = a[s];
			if (!fe.call(e, o) || !Ke(t[o], e[o])) return !1;
		}
		return !0;
	}
	function yd(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function gd(t, e) {
		var a = yd(t);
		t = 0;
		for (var s; a; ) {
			if (a.nodeType === 3) {
				if (((s = t + a.textContent.length), t <= e && s >= e))
					return { node: a, offset: e - t };
				t = s;
			}
			t: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling;
						break t;
					}
					a = a.parentNode;
				}
				a = void 0;
			}
			a = yd(a);
		}
	}
	function vd(t, e) {
		return t && e
			? t === e
				? !0
				: t && t.nodeType === 3
					? !1
					: e && e.nodeType === 3
						? vd(t, e.parentNode)
						: "contains" in t
							? t.contains(e)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(e) & 16)
								: !1
			: !1;
	}
	function bd(t) {
		t =
			t != null &&
			t.ownerDocument != null &&
			t.ownerDocument.defaultView != null
				? t.ownerDocument.defaultView
				: window;
		for (var e = Ds(t.document); e instanceof t.HTMLIFrameElement; ) {
			try {
				var a = typeof e.contentWindow.location.href == "string";
			} catch {
				a = !1;
			}
			if (a) t = e.contentWindow;
			else break;
			e = Ds(t.document);
		}
		return e;
	}
	function Yo(t) {
		var e = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			e &&
			((e === "input" &&
				(t.type === "text" ||
					t.type === "search" ||
					t.type === "tel" ||
					t.type === "url" ||
					t.type === "password")) ||
				e === "textarea" ||
				t.contentEditable === "true")
		);
	}
	var ng = Un && "documentMode" in document && 11 >= document.documentMode,
		Bi = null,
		Vo = null,
		Ll = null,
		Go = !1;
	function Sd(t, e, a) {
		var s =
			a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
		Go ||
			Bi == null ||
			Bi !== Ds(s) ||
			((s = Bi),
			"selectionStart" in s && Yo(s)
				? (s = { start: s.selectionStart, end: s.selectionEnd })
				: ((s = (
						(s.ownerDocument && s.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(s = {
						anchorNode: s.anchorNode,
						anchorOffset: s.anchorOffset,
						focusNode: s.focusNode,
						focusOffset: s.focusOffset,
					})),
			(Ll && Dl(Ll, s)) ||
				((Ll = s),
				(s = xr(Vo, "onSelect")),
				0 < s.length &&
					((e = new Bs("onSelect", "select", null, e, a)),
					t.push({ event: e, listeners: s }),
					(e.target = Bi))));
	}
	function Pa(t, e) {
		var a = {};
		return (
			(a[t.toLowerCase()] = e.toLowerCase()),
			(a["Webkit" + t] = "webkit" + e),
			(a["Moz" + t] = "moz" + e),
			a
		);
	}
	var Hi = {
			animationend: Pa("Animation", "AnimationEnd"),
			animationiteration: Pa("Animation", "AnimationIteration"),
			animationstart: Pa("Animation", "AnimationStart"),
			transitionrun: Pa("Transition", "TransitionRun"),
			transitionstart: Pa("Transition", "TransitionStart"),
			transitioncancel: Pa("Transition", "TransitionCancel"),
			transitionend: Pa("Transition", "TransitionEnd"),
		},
		Xo = {},
		Ed = {};
	Un &&
		((Ed = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Hi.animationend.animation,
			delete Hi.animationiteration.animation,
			delete Hi.animationstart.animation),
		"TransitionEvent" in window || delete Hi.transitionend.transition);
	function ka(t) {
		if (Xo[t]) return Xo[t];
		if (!Hi[t]) return t;
		var e = Hi[t],
			a;
		for (a in e) if (e.hasOwnProperty(a) && a in Ed) return (Xo[t] = e[a]);
		return t;
	}
	var _d = ka("animationend"),
		wd = ka("animationiteration"),
		Td = ka("animationstart"),
		ag = ka("transitionrun"),
		ig = ka("transitionstart"),
		lg = ka("transitioncancel"),
		Rd = ka("transitionend"),
		Ad = new Map(),
		Ko =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	Ko.push("scrollEnd");
	function vn(t, e) {
		(Ad.set(t, e), Xa(e, [t]));
	}
	var Zs =
			typeof reportError == "function"
				? reportError
				: function (t) {
						if (
							typeof window == "object" &&
							typeof window.ErrorEvent == "function"
						) {
							var e = new window.ErrorEvent("error", {
								bubbles: !0,
								cancelable: !0,
								message:
									typeof t == "object" &&
									t !== null &&
									typeof t.message == "string"
										? String(t.message)
										: String(t),
								error: t,
							});
							if (!window.dispatchEvent(e)) return;
						} else if (
							typeof process == "object" &&
							typeof process.emit == "function"
						) {
							process.emit("uncaughtException", t);
							return;
						}
						console.error(t);
					},
		sn = [],
		qi = 0,
		Po = 0;
	function Qs() {
		for (var t = qi, e = (Po = qi = 0); e < t; ) {
			var a = sn[e];
			sn[e++] = null;
			var s = sn[e];
			sn[e++] = null;
			var o = sn[e];
			sn[e++] = null;
			var u = sn[e];
			if (((sn[e++] = null), s !== null && o !== null)) {
				var p = s.pending;
				(p === null ? (o.next = o) : ((o.next = p.next), (p.next = o)),
					(s.pending = o));
			}
			u !== 0 && xd(a, o, u);
		}
	}
	function Ys(t, e, a, s) {
		((sn[qi++] = t),
			(sn[qi++] = e),
			(sn[qi++] = a),
			(sn[qi++] = s),
			(Po |= s),
			(t.lanes |= s),
			(t = t.alternate),
			t !== null && (t.lanes |= s));
	}
	function ko(t, e, a, s) {
		return (Ys(t, e, a, s), Vs(t));
	}
	function Fa(t, e) {
		return (Ys(t, null, null, e), Vs(t));
	}
	function xd(t, e, a) {
		t.lanes |= a;
		var s = t.alternate;
		s !== null && (s.lanes |= a);
		for (var o = !1, u = t.return; u !== null; )
			((u.childLanes |= a),
				(s = u.alternate),
				s !== null && (s.childLanes |= a),
				u.tag === 22 &&
					((t = u.stateNode), t === null || t._visibility & 1 || (o = !0)),
				(t = u),
				(u = u.return));
		return t.tag === 3
			? ((u = t.stateNode),
				o &&
					e !== null &&
					((o = 31 - Ee(a)),
					(t = u.hiddenUpdates),
					(s = t[o]),
					s === null ? (t[o] = [e]) : s.push(e),
					(e.lane = a | 536870912)),
				u)
			: null;
	}
	function Vs(t) {
		if (50 < es) throw ((es = 0), (ac = null), Error(r(185)));
		for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
		return t.tag === 3 ? t.stateNode : null;
	}
	var Zi = {};
	function sg(t, e, a, s) {
		((this.tag = t),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = e),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = s),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null));
	}
	function Pe(t, e, a, s) {
		return new sg(t, e, a, s);
	}
	function Fo(t) {
		return ((t = t.prototype), !(!t || !t.isReactComponent));
	}
	function jn(t, e) {
		var a = t.alternate;
		return (
			a === null
				? ((a = Pe(t.tag, e, t.key, t.mode)),
					(a.elementType = t.elementType),
					(a.type = t.type),
					(a.stateNode = t.stateNode),
					(a.alternate = t),
					(t.alternate = a))
				: ((a.pendingProps = e),
					(a.type = t.type),
					(a.flags = 0),
					(a.subtreeFlags = 0),
					(a.deletions = null)),
			(a.flags = t.flags & 65011712),
			(a.childLanes = t.childLanes),
			(a.lanes = t.lanes),
			(a.child = t.child),
			(a.memoizedProps = t.memoizedProps),
			(a.memoizedState = t.memoizedState),
			(a.updateQueue = t.updateQueue),
			(e = t.dependencies),
			(a.dependencies =
				e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
			(a.sibling = t.sibling),
			(a.index = t.index),
			(a.ref = t.ref),
			(a.refCleanup = t.refCleanup),
			a
		);
	}
	function Md(t, e) {
		t.flags &= 65011714;
		var a = t.alternate;
		return (
			a === null
				? ((t.childLanes = 0),
					(t.lanes = e),
					(t.child = null),
					(t.subtreeFlags = 0),
					(t.memoizedProps = null),
					(t.memoizedState = null),
					(t.updateQueue = null),
					(t.dependencies = null),
					(t.stateNode = null))
				: ((t.childLanes = a.childLanes),
					(t.lanes = a.lanes),
					(t.child = a.child),
					(t.subtreeFlags = 0),
					(t.deletions = null),
					(t.memoizedProps = a.memoizedProps),
					(t.memoizedState = a.memoizedState),
					(t.updateQueue = a.updateQueue),
					(t.type = a.type),
					(e = a.dependencies),
					(t.dependencies =
						e === null
							? null
							: { lanes: e.lanes, firstContext: e.firstContext })),
			t
		);
	}
	function Gs(t, e, a, s, o, u) {
		var p = 0;
		if (((s = t), typeof t == "function")) Fo(t) && (p = 1);
		else if (typeof t == "string")
			p = fv(t, a, I.current)
				? 26
				: t === "html" || t === "head" || t === "body"
					? 27
					: 5;
		else
			t: switch (t) {
				case W:
					return ((t = Pe(31, a, e, o)), (t.elementType = W), (t.lanes = u), t);
				case x:
					return Ja(a.children, o, u, e);
				case R:
					((p = 8), (o |= 24));
					break;
				case O:
					return (
						(t = Pe(12, a, e, o | 2)), (t.elementType = O), (t.lanes = u), t
					);
				case F:
					return ((t = Pe(13, a, e, o)), (t.elementType = F), (t.lanes = u), t);
				case J:
					return ((t = Pe(19, a, e, o)), (t.elementType = J), (t.lanes = u), t);
				default:
					if (typeof t == "object" && t !== null)
						switch (t.$$typeof) {
							case q:
								p = 10;
								break t;
							case H:
								p = 9;
								break t;
							case Q:
								p = 11;
								break t;
							case X:
								p = 14;
								break t;
							case Y:
								((p = 16), (s = null));
								break t;
						}
					((p = 29),
						(a = Error(r(130, t === null ? "null" : typeof t, ""))),
						(s = null));
			}
		return (
			(e = Pe(p, a, e, o)), (e.elementType = t), (e.type = s), (e.lanes = u), e
		);
	}
	function Ja(t, e, a, s) {
		return ((t = Pe(7, t, s, e)), (t.lanes = a), t);
	}
	function Jo(t, e, a) {
		return ((t = Pe(6, t, null, e)), (t.lanes = a), t);
	}
	function Od(t) {
		var e = Pe(18, null, null, 0);
		return ((e.stateNode = t), e);
	}
	function Io(t, e, a) {
		return (
			(e = Pe(4, t.children !== null ? t.children : [], t.key, e)),
			(e.lanes = a),
			(e.stateNode = {
				containerInfo: t.containerInfo,
				pendingChildren: null,
				implementation: t.implementation,
			}),
			e
		);
	}
	var Cd = new WeakMap();
	function rn(t, e) {
		if (typeof t == "object" && t !== null) {
			var a = Cd.get(t);
			return a !== void 0
				? a
				: ((e = { value: t, source: e, stack: nn(e) }), Cd.set(t, e), e);
		}
		return { value: t, source: e, stack: nn(e) };
	}
	var Qi = [],
		Yi = 0,
		Xs = null,
		Nl = 0,
		on = [],
		un = 0,
		ra = null,
		Tn = 1,
		Rn = "";
	function Bn(t, e) {
		((Qi[Yi++] = Nl), (Qi[Yi++] = Xs), (Xs = t), (Nl = e));
	}
	function zd(t, e, a) {
		((on[un++] = Tn), (on[un++] = Rn), (on[un++] = ra), (ra = t));
		var s = Tn;
		t = Rn;
		var o = 32 - Ee(s) - 1;
		((s &= ~(1 << o)), (a += 1));
		var u = 32 - Ee(e) + o;
		if (30 < u) {
			var p = o - (o % 5);
			((u = (s & ((1 << p) - 1)).toString(32)),
				(s >>= p),
				(o -= p),
				(Tn = (1 << (32 - Ee(e) + o)) | (a << o) | s),
				(Rn = u + t));
		} else ((Tn = (1 << u) | (a << o) | s), (Rn = t));
	}
	function $o(t) {
		t.return !== null && (Bn(t, 1), zd(t, 1, 0));
	}
	function Wo(t) {
		for (; t === Xs; )
			((Xs = Qi[--Yi]), (Qi[Yi] = null), (Nl = Qi[--Yi]), (Qi[Yi] = null));
		for (; t === ra; )
			((ra = on[--un]),
				(on[un] = null),
				(Rn = on[--un]),
				(on[un] = null),
				(Tn = on[--un]),
				(on[un] = null));
	}
	function Dd(t, e) {
		((on[un++] = Tn),
			(on[un++] = Rn),
			(on[un++] = ra),
			(Tn = e.id),
			(Rn = e.overflow),
			(ra = t));
	}
	var pe = null,
		Zt = null,
		Rt = !1,
		oa = null,
		cn = !1,
		tu = Error(r(519));
	function ua(t) {
		var e = Error(
			r(
				418,
				1 < arguments.length && arguments[1] !== void 0 && arguments[1]
					? "text"
					: "HTML",
				"",
			),
		);
		throw (Ul(rn(e, t)), tu);
	}
	function Ld(t) {
		var e = t.stateNode,
			a = t.type,
			s = t.memoizedProps;
		switch (((e[me] = t), (e[Be] = s), a)) {
			case "dialog":
				(St("cancel", e), St("close", e));
				break;
			case "iframe":
			case "object":
			case "embed":
				St("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < as.length; a++) St(as[a], e);
				break;
			case "source":
				St("error", e);
				break;
			case "img":
			case "image":
			case "link":
				(St("error", e), St("load", e));
				break;
			case "details":
				St("toggle", e);
				break;
			case "input":
				(St("invalid", e),
					Kf(
						e,
						s.value,
						s.defaultValue,
						s.checked,
						s.defaultChecked,
						s.type,
						s.name,
						!0,
					));
				break;
			case "select":
				St("invalid", e);
				break;
			case "textarea":
				(St("invalid", e), kf(e, s.value, s.defaultValue, s.children));
		}
		((a = s.children),
			(typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
			e.textContent === "" + a ||
			s.suppressHydrationWarning === !0 ||
			J0(e.textContent, a)
				? (s.popover != null && (St("beforetoggle", e), St("toggle", e)),
					s.onScroll != null && St("scroll", e),
					s.onScrollEnd != null && St("scrollend", e),
					s.onClick != null && (e.onclick = Nn),
					(e = !0))
				: (e = !1),
			e || ua(t, !0));
	}
	function Nd(t) {
		for (pe = t.return; pe; )
			switch (pe.tag) {
				case 5:
				case 31:
				case 13:
					cn = !1;
					return;
				case 27:
				case 3:
					cn = !0;
					return;
				default:
					pe = pe.return;
			}
	}
	function Vi(t) {
		if (t !== pe) return !1;
		if (!Rt) return (Nd(t), (Rt = !0), !1);
		var e = t.tag,
			a;
		if (
			((a = e !== 3 && e !== 27) &&
				((a = e === 5) &&
					((a = t.type),
					(a =
						!(a !== "form" && a !== "button") || vc(t.type, t.memoizedProps))),
				(a = !a)),
			a && Zt && ua(t),
			Nd(t),
			e === 13)
		) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(r(317));
			Zt = lm(t);
		} else if (e === 31) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
				throw Error(r(317));
			Zt = lm(t);
		} else
			e === 27
				? ((e = Zt), wa(t.type) ? ((t = wc), (wc = null), (Zt = t)) : (Zt = e))
				: (Zt = pe ? dn(t.stateNode.nextSibling) : null);
		return !0;
	}
	function Ia() {
		((Zt = pe = null), (Rt = !1));
	}
	function eu() {
		var t = oa;
		return (
			t !== null &&
				(Ye === null ? (Ye = t) : Ye.push.apply(Ye, t), (oa = null)),
			t
		);
	}
	function Ul(t) {
		oa === null ? (oa = [t]) : oa.push(t);
	}
	var nu = M(null),
		$a = null,
		Hn = null;
	function ca(t, e, a) {
		(P(nu, e._currentValue), (e._currentValue = a));
	}
	function qn(t) {
		((t._currentValue = nu.current), G(nu));
	}
	function au(t, e, a) {
		for (; t !== null; ) {
			var s = t.alternate;
			if (
				((t.childLanes & e) !== e
					? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
					: s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
				t === a)
			)
				break;
			t = t.return;
		}
	}
	function iu(t, e, a, s) {
		var o = t.child;
		for (o !== null && (o.return = t); o !== null; ) {
			var u = o.dependencies;
			if (u !== null) {
				var p = o.child;
				u = u.firstContext;
				t: for (; u !== null; ) {
					var S = u;
					u = o;
					for (var A = 0; A < e.length; A++)
						if (S.context === e[A]) {
							((u.lanes |= a),
								(S = u.alternate),
								S !== null && (S.lanes |= a),
								au(u.return, a, t),
								s || (p = null));
							break t;
						}
					u = S.next;
				}
			} else if (o.tag === 18) {
				if (((p = o.return), p === null)) throw Error(r(341));
				((p.lanes |= a),
					(u = p.alternate),
					u !== null && (u.lanes |= a),
					au(p, a, t),
					(p = null));
			} else p = o.child;
			if (p !== null) p.return = o;
			else
				for (p = o; p !== null; ) {
					if (p === t) {
						p = null;
						break;
					}
					if (((o = p.sibling), o !== null)) {
						((o.return = p.return), (p = o));
						break;
					}
					p = p.return;
				}
			o = p;
		}
	}
	function Gi(t, e, a, s) {
		t = null;
		for (var o = e, u = !1; o !== null; ) {
			if (!u) {
				if ((o.flags & 524288) !== 0) u = !0;
				else if ((o.flags & 262144) !== 0) break;
			}
			if (o.tag === 10) {
				var p = o.alternate;
				if (p === null) throw Error(r(387));
				if (((p = p.memoizedProps), p !== null)) {
					var S = o.type;
					Ke(o.pendingProps.value, p.value) ||
						(t !== null ? t.push(S) : (t = [S]));
				}
			} else if (o === gt.current) {
				if (((p = o.alternate), p === null)) throw Error(r(387));
				p.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
					(t !== null ? t.push(os) : (t = [os]));
			}
			o = o.return;
		}
		(t !== null && iu(e, t, a, s), (e.flags |= 262144));
	}
	function Ks(t) {
		for (t = t.firstContext; t !== null; ) {
			if (!Ke(t.context._currentValue, t.memoizedValue)) return !0;
			t = t.next;
		}
		return !1;
	}
	function Wa(t) {
		(($a = t),
			(Hn = null),
			(t = t.dependencies),
			t !== null && (t.firstContext = null));
	}
	function ye(t) {
		return Ud($a, t);
	}
	function Ps(t, e) {
		return ($a === null && Wa(t), Ud(t, e));
	}
	function Ud(t, e) {
		var a = e._currentValue;
		if (((e = { context: e, memoizedValue: a, next: null }), Hn === null)) {
			if (t === null) throw Error(r(308));
			((Hn = e),
				(t.dependencies = { lanes: 0, firstContext: e }),
				(t.flags |= 524288));
		} else Hn = Hn.next = e;
		return a;
	}
	var rg =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var t = [],
							e = (this.signal = {
								aborted: !1,
								addEventListener: function (a, s) {
									t.push(s);
								},
							});
						this.abort = function () {
							((e.aborted = !0),
								t.forEach(function (a) {
									return a();
								}));
						};
					},
		og = n.unstable_scheduleCallback,
		ug = n.unstable_NormalPriority,
		$t = {
			$$typeof: q,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function lu() {
		return { controller: new rg(), data: new Map(), refCount: 0 };
	}
	function jl(t) {
		(t.refCount--,
			t.refCount === 0 &&
				og(ug, function () {
					t.controller.abort();
				}));
	}
	var Bl = null,
		su = 0,
		Xi = 0,
		Ki = null;
	function cg(t, e) {
		if (Bl === null) {
			var a = (Bl = []);
			((su = 0),
				(Xi = uc()),
				(Ki = {
					status: "pending",
					value: void 0,
					then: function (s) {
						a.push(s);
					},
				}));
		}
		return (su++, e.then(jd, jd), e);
	}
	function jd() {
		if (--su === 0 && Bl !== null) {
			Ki !== null && (Ki.status = "fulfilled");
			var t = Bl;
			((Bl = null), (Xi = 0), (Ki = null));
			for (var e = 0; e < t.length; e++) (0, t[e])();
		}
	}
	function fg(t, e) {
		var a = [],
			s = {
				status: "pending",
				value: null,
				reason: null,
				then: function (o) {
					a.push(o);
				},
			};
		return (
			t.then(
				function () {
					((s.status = "fulfilled"), (s.value = e));
					for (var o = 0; o < a.length; o++) (0, a[o])(e);
				},
				function (o) {
					for (s.status = "rejected", s.reason = o, o = 0; o < a.length; o++)
						(0, a[o])(void 0);
				},
			),
			s
		);
	}
	var Bd = L.S;
	L.S = function (t, e) {
		((S0 = he()),
			typeof e == "object" &&
				e !== null &&
				typeof e.then == "function" &&
				cg(t, e),
			Bd !== null && Bd(t, e));
	};
	var ti = M(null);
	function ru() {
		var t = ti.current;
		return t !== null ? t : Bt.pooledCache;
	}
	function ks(t, e) {
		e === null ? P(ti, ti.current) : P(ti, e.pool);
	}
	function Hd() {
		var t = ru();
		return t === null ? null : { parent: $t._currentValue, pool: t };
	}
	var Pi = Error(r(460)),
		ou = Error(r(474)),
		Fs = Error(r(542)),
		Js = { then: function () {} };
	function qd(t) {
		return ((t = t.status), t === "fulfilled" || t === "rejected");
	}
	function Zd(t, e, a) {
		switch (
			((a = t[a]),
			a === void 0 ? t.push(e) : a !== e && (e.then(Nn, Nn), (e = a)),
			e.status)
		) {
			case "fulfilled":
				return e.value;
			case "rejected":
				throw ((t = e.reason), Yd(t), t);
			default:
				if (typeof e.status == "string") e.then(Nn, Nn);
				else {
					if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
						throw Error(r(482));
					((t = e),
						(t.status = "pending"),
						t.then(
							function (s) {
								if (e.status === "pending") {
									var o = e;
									((o.status = "fulfilled"), (o.value = s));
								}
							},
							function (s) {
								if (e.status === "pending") {
									var o = e;
									((o.status = "rejected"), (o.reason = s));
								}
							},
						));
				}
				switch (e.status) {
					case "fulfilled":
						return e.value;
					case "rejected":
						throw ((t = e.reason), Yd(t), t);
				}
				throw ((ni = e), Pi);
		}
	}
	function ei(t) {
		try {
			var e = t._init;
			return e(t._payload);
		} catch (a) {
			throw a !== null && typeof a == "object" && typeof a.then == "function"
				? ((ni = a), Pi)
				: a;
		}
	}
	var ni = null;
	function Qd() {
		if (ni === null) throw Error(r(459));
		var t = ni;
		return ((ni = null), t);
	}
	function Yd(t) {
		if (t === Pi || t === Fs) throw Error(r(483));
	}
	var ki = null,
		Hl = 0;
	function Is(t) {
		var e = Hl;
		return ((Hl += 1), ki === null && (ki = []), Zd(ki, t, e));
	}
	function ql(t, e) {
		((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
	}
	function $s(t, e) {
		throw e.$$typeof === b
			? Error(r(525))
			: ((t = Object.prototype.toString.call(e)),
				Error(
					r(
						31,
						t === "[object Object]"
							? "object with keys {" + Object.keys(e).join(", ") + "}"
							: t,
					),
				));
	}
	function Vd(t) {
		function e(D, C) {
			if (t) {
				var N = D.deletions;
				N === null ? ((D.deletions = [C]), (D.flags |= 16)) : N.push(C);
			}
		}
		function a(D, C) {
			if (!t) return null;
			for (; C !== null; ) (e(D, C), (C = C.sibling));
			return null;
		}
		function s(D) {
			for (var C = new Map(); D !== null; )
				(D.key !== null ? C.set(D.key, D) : C.set(D.index, D), (D = D.sibling));
			return C;
		}
		function o(D, C) {
			return ((D = jn(D, C)), (D.index = 0), (D.sibling = null), D);
		}
		function u(D, C, N) {
			return (
				(D.index = N),
				t
					? ((N = D.alternate),
						N !== null
							? ((N = N.index), N < C ? ((D.flags |= 67108866), C) : N)
							: ((D.flags |= 67108866), C))
					: ((D.flags |= 1048576), C)
			);
		}
		function p(D) {
			return (t && D.alternate === null && (D.flags |= 67108866), D);
		}
		function S(D, C, N, V) {
			return C === null || C.tag !== 6
				? ((C = Jo(N, D.mode, V)), (C.return = D), C)
				: ((C = o(C, N)), (C.return = D), C);
		}
		function A(D, C, N, V) {
			var rt = N.type;
			return rt === x
				? Z(D, C, N.props.children, V, N.key)
				: C !== null &&
					  (C.elementType === rt ||
							(typeof rt == "object" &&
								rt !== null &&
								rt.$$typeof === Y &&
								ei(rt) === C.type))
					? ((C = o(C, N.props)), ql(C, N), (C.return = D), C)
					: ((C = Gs(N.type, N.key, N.props, null, D.mode, V)),
						ql(C, N),
						(C.return = D),
						C);
		}
		function U(D, C, N, V) {
			return C === null ||
				C.tag !== 4 ||
				C.stateNode.containerInfo !== N.containerInfo ||
				C.stateNode.implementation !== N.implementation
				? ((C = Io(N, D.mode, V)), (C.return = D), C)
				: ((C = o(C, N.children || [])), (C.return = D), C);
		}
		function Z(D, C, N, V, rt) {
			return C === null || C.tag !== 7
				? ((C = Ja(N, D.mode, V, rt)), (C.return = D), C)
				: ((C = o(C, N)), (C.return = D), C);
		}
		function K(D, C, N) {
			if (
				(typeof C == "string" && C !== "") ||
				typeof C == "number" ||
				typeof C == "bigint"
			)
				return ((C = Jo("" + C, D.mode, N)), (C.return = D), C);
			if (typeof C == "object" && C !== null) {
				switch (C.$$typeof) {
					case E:
						return (
							(N = Gs(C.type, C.key, C.props, null, D.mode, N)),
							ql(N, C),
							(N.return = D),
							N
						);
					case w:
						return ((C = Io(C, D.mode, N)), (C.return = D), C);
					case Y:
						return ((C = ei(C)), K(D, C, N));
				}
				if (qt(C) || at(C))
					return ((C = Ja(C, D.mode, N, null)), (C.return = D), C);
				if (typeof C.then == "function") return K(D, Is(C), N);
				if (C.$$typeof === q) return K(D, Ps(D, C), N);
				$s(D, C);
			}
			return null;
		}
		function j(D, C, N, V) {
			var rt = C !== null ? C.key : null;
			if (
				(typeof N == "string" && N !== "") ||
				typeof N == "number" ||
				typeof N == "bigint"
			)
				return rt !== null ? null : S(D, C, "" + N, V);
			if (typeof N == "object" && N !== null) {
				switch (N.$$typeof) {
					case E:
						return N.key === rt ? A(D, C, N, V) : null;
					case w:
						return N.key === rt ? U(D, C, N, V) : null;
					case Y:
						return ((N = ei(N)), j(D, C, N, V));
				}
				if (qt(N) || at(N)) return rt !== null ? null : Z(D, C, N, V, null);
				if (typeof N.then == "function") return j(D, C, Is(N), V);
				if (N.$$typeof === q) return j(D, C, Ps(D, N), V);
				$s(D, N);
			}
			return null;
		}
		function B(D, C, N, V, rt) {
			if (
				(typeof V == "string" && V !== "") ||
				typeof V == "number" ||
				typeof V == "bigint"
			)
				return ((D = D.get(N) || null), S(C, D, "" + V, rt));
			if (typeof V == "object" && V !== null) {
				switch (V.$$typeof) {
					case E:
						return (
							(D = D.get(V.key === null ? N : V.key) || null), A(C, D, V, rt)
						);
					case w:
						return (
							(D = D.get(V.key === null ? N : V.key) || null), U(C, D, V, rt)
						);
					case Y:
						return ((V = ei(V)), B(D, C, N, V, rt));
				}
				if (qt(V) || at(V))
					return ((D = D.get(N) || null), Z(C, D, V, rt, null));
				if (typeof V.then == "function") return B(D, C, N, Is(V), rt);
				if (V.$$typeof === q) return B(D, C, N, Ps(C, V), rt);
				$s(C, V);
			}
			return null;
		}
		function nt(D, C, N, V) {
			for (
				var rt = null, Mt = null, lt = C, yt = (C = 0), _t = null;
				lt !== null && yt < N.length;
				yt++
			) {
				lt.index > yt ? ((_t = lt), (lt = null)) : (_t = lt.sibling);
				var Ot = j(D, lt, N[yt], V);
				if (Ot === null) {
					lt === null && (lt = _t);
					break;
				}
				(t && lt && Ot.alternate === null && e(D, lt),
					(C = u(Ot, C, yt)),
					Mt === null ? (rt = Ot) : (Mt.sibling = Ot),
					(Mt = Ot),
					(lt = _t));
			}
			if (yt === N.length) return (a(D, lt), Rt && Bn(D, yt), rt);
			if (lt === null) {
				for (; yt < N.length; yt++)
					((lt = K(D, N[yt], V)),
						lt !== null &&
							((C = u(lt, C, yt)),
							Mt === null ? (rt = lt) : (Mt.sibling = lt),
							(Mt = lt)));
				return (Rt && Bn(D, yt), rt);
			}
			for (lt = s(lt); yt < N.length; yt++)
				((_t = B(lt, D, yt, N[yt], V)),
					_t !== null &&
						(t &&
							_t.alternate !== null &&
							lt.delete(_t.key === null ? yt : _t.key),
						(C = u(_t, C, yt)),
						Mt === null ? (rt = _t) : (Mt.sibling = _t),
						(Mt = _t)));
			return (
				t &&
					lt.forEach(function (Ma) {
						return e(D, Ma);
					}),
				Rt && Bn(D, yt),
				rt
			);
		}
		function ut(D, C, N, V) {
			if (N == null) throw Error(r(151));
			for (
				var rt = null,
					Mt = null,
					lt = C,
					yt = (C = 0),
					_t = null,
					Ot = N.next();
				lt !== null && !Ot.done;
				yt++, Ot = N.next()
			) {
				lt.index > yt ? ((_t = lt), (lt = null)) : (_t = lt.sibling);
				var Ma = j(D, lt, Ot.value, V);
				if (Ma === null) {
					lt === null && (lt = _t);
					break;
				}
				(t && lt && Ma.alternate === null && e(D, lt),
					(C = u(Ma, C, yt)),
					Mt === null ? (rt = Ma) : (Mt.sibling = Ma),
					(Mt = Ma),
					(lt = _t));
			}
			if (Ot.done) return (a(D, lt), Rt && Bn(D, yt), rt);
			if (lt === null) {
				for (; !Ot.done; yt++, Ot = N.next())
					((Ot = K(D, Ot.value, V)),
						Ot !== null &&
							((C = u(Ot, C, yt)),
							Mt === null ? (rt = Ot) : (Mt.sibling = Ot),
							(Mt = Ot)));
				return (Rt && Bn(D, yt), rt);
			}
			for (lt = s(lt); !Ot.done; yt++, Ot = N.next())
				((Ot = B(lt, D, yt, Ot.value, V)),
					Ot !== null &&
						(t &&
							Ot.alternate !== null &&
							lt.delete(Ot.key === null ? yt : Ot.key),
						(C = u(Ot, C, yt)),
						Mt === null ? (rt = Ot) : (Mt.sibling = Ot),
						(Mt = Ot)));
			return (
				t &&
					lt.forEach(function (_v) {
						return e(D, _v);
					}),
				Rt && Bn(D, yt),
				rt
			);
		}
		function jt(D, C, N, V) {
			if (
				(typeof N == "object" &&
					N !== null &&
					N.type === x &&
					N.key === null &&
					(N = N.props.children),
				typeof N == "object" && N !== null)
			) {
				switch (N.$$typeof) {
					case E:
						t: {
							for (var rt = N.key; C !== null; ) {
								if (C.key === rt) {
									if (((rt = N.type), rt === x)) {
										if (C.tag === 7) {
											(a(D, C.sibling),
												(V = o(C, N.props.children)),
												(V.return = D),
												(D = V));
											break t;
										}
									} else if (
										C.elementType === rt ||
										(typeof rt == "object" &&
											rt !== null &&
											rt.$$typeof === Y &&
											ei(rt) === C.type)
									) {
										(a(D, C.sibling),
											(V = o(C, N.props)),
											ql(V, N),
											(V.return = D),
											(D = V));
										break t;
									}
									a(D, C);
									break;
								} else e(D, C);
								C = C.sibling;
							}
							N.type === x
								? ((V = Ja(N.props.children, D.mode, V, N.key)),
									(V.return = D),
									(D = V))
								: ((V = Gs(N.type, N.key, N.props, null, D.mode, V)),
									ql(V, N),
									(V.return = D),
									(D = V));
						}
						return p(D);
					case w:
						t: {
							for (rt = N.key; C !== null; ) {
								if (C.key === rt)
									if (
										C.tag === 4 &&
										C.stateNode.containerInfo === N.containerInfo &&
										C.stateNode.implementation === N.implementation
									) {
										(a(D, C.sibling),
											(V = o(C, N.children || [])),
											(V.return = D),
											(D = V));
										break t;
									} else {
										a(D, C);
										break;
									}
								else e(D, C);
								C = C.sibling;
							}
							((V = Io(N, D.mode, V)), (V.return = D), (D = V));
						}
						return p(D);
					case Y:
						return ((N = ei(N)), jt(D, C, N, V));
				}
				if (qt(N)) return nt(D, C, N, V);
				if (at(N)) {
					if (((rt = at(N)), typeof rt != "function")) throw Error(r(150));
					return ((N = rt.call(N)), ut(D, C, N, V));
				}
				if (typeof N.then == "function") return jt(D, C, Is(N), V);
				if (N.$$typeof === q) return jt(D, C, Ps(D, N), V);
				$s(D, N);
			}
			return (typeof N == "string" && N !== "") ||
				typeof N == "number" ||
				typeof N == "bigint"
				? ((N = "" + N),
					C !== null && C.tag === 6
						? (a(D, C.sibling), (V = o(C, N)), (V.return = D), (D = V))
						: (a(D, C), (V = Jo(N, D.mode, V)), (V.return = D), (D = V)),
					p(D))
				: a(D, C);
		}
		return function (D, C, N, V) {
			try {
				Hl = 0;
				var rt = jt(D, C, N, V);
				return ((ki = null), rt);
			} catch (lt) {
				if (lt === Pi || lt === Fs) throw lt;
				var Mt = Pe(29, lt, null, D.mode);
				return ((Mt.lanes = V), (Mt.return = D), Mt);
			}
		};
	}
	var ai = Vd(!0),
		Gd = Vd(!1),
		fa = !1;
	function uu(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function cu(t, e) {
		((t = t.updateQueue),
			e.updateQueue === t &&
				(e.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					callbacks: null,
				}));
	}
	function da(t) {
		return { lane: t, tag: 0, payload: null, callback: null, next: null };
	}
	function ha(t, e, a) {
		var s = t.updateQueue;
		if (s === null) return null;
		if (((s = s.shared), (zt & 2) !== 0)) {
			var o = s.pending;
			return (
				o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
				(s.pending = e),
				(e = Vs(t)),
				xd(t, null, a),
				e
			);
		}
		return (Ys(t, s, e, a), Vs(t));
	}
	function Zl(t, e, a) {
		if (
			((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
		) {
			var s = e.lanes;
			((s &= t.pendingLanes), (a |= s), (e.lanes = a), Ue(t, a));
		}
	}
	function fu(t, e) {
		var a = t.updateQueue,
			s = t.alternate;
		if (s !== null && ((s = s.updateQueue), a === s)) {
			var o = null,
				u = null;
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var p = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null,
					};
					(u === null ? (o = u = p) : (u = u.next = p), (a = a.next));
				} while (a !== null);
				u === null ? (o = u = e) : (u = u.next = e);
			} else o = u = e;
			((a = {
				baseState: s.baseState,
				firstBaseUpdate: o,
				lastBaseUpdate: u,
				shared: s.shared,
				callbacks: s.callbacks,
			}),
				(t.updateQueue = a));
			return;
		}
		((t = a.lastBaseUpdate),
			t === null ? (a.firstBaseUpdate = e) : (t.next = e),
			(a.lastBaseUpdate = e));
	}
	var du = !1;
	function Ql() {
		if (du) {
			var t = Ki;
			if (t !== null) throw t;
		}
	}
	function Yl(t, e, a, s) {
		du = !1;
		var o = t.updateQueue;
		fa = !1;
		var u = o.firstBaseUpdate,
			p = o.lastBaseUpdate,
			S = o.shared.pending;
		if (S !== null) {
			o.shared.pending = null;
			var A = S,
				U = A.next;
			((A.next = null), p === null ? (u = U) : (p.next = U), (p = A));
			var Z = t.alternate;
			Z !== null &&
				((Z = Z.updateQueue),
				(S = Z.lastBaseUpdate),
				S !== p &&
					(S === null ? (Z.firstBaseUpdate = U) : (S.next = U),
					(Z.lastBaseUpdate = A)));
		}
		if (u !== null) {
			var K = o.baseState;
			((p = 0), (Z = U = A = null), (S = u));
			do {
				var j = S.lane & -536870913,
					B = j !== S.lane;
				if (B ? (Et & j) === j : (s & j) === j) {
					(j !== 0 && j === Xi && (du = !0),
						Z !== null &&
							(Z = Z.next =
								{
									lane: 0,
									tag: S.tag,
									payload: S.payload,
									callback: null,
									next: null,
								}));
					t: {
						var nt = t,
							ut = S;
						j = e;
						var jt = a;
						switch (ut.tag) {
							case 1:
								if (((nt = ut.payload), typeof nt == "function")) {
									K = nt.call(jt, K, j);
									break t;
								}
								K = nt;
								break t;
							case 3:
								nt.flags = (nt.flags & -65537) | 128;
							case 0:
								if (
									((nt = ut.payload),
									(j = typeof nt == "function" ? nt.call(jt, K, j) : nt),
									j == null)
								)
									break t;
								K = y({}, K, j);
								break t;
							case 2:
								fa = !0;
						}
					}
					((j = S.callback),
						j !== null &&
							((t.flags |= 64),
							B && (t.flags |= 8192),
							(B = o.callbacks),
							B === null ? (o.callbacks = [j]) : B.push(j)));
				} else
					((B = {
						lane: j,
						tag: S.tag,
						payload: S.payload,
						callback: S.callback,
						next: null,
					}),
						Z === null ? ((U = Z = B), (A = K)) : (Z = Z.next = B),
						(p |= j));
				if (((S = S.next), S === null)) {
					if (((S = o.shared.pending), S === null)) break;
					((B = S),
						(S = B.next),
						(B.next = null),
						(o.lastBaseUpdate = B),
						(o.shared.pending = null));
				}
			} while (!0);
			(Z === null && (A = K),
				(o.baseState = A),
				(o.firstBaseUpdate = U),
				(o.lastBaseUpdate = Z),
				u === null && (o.shared.lanes = 0),
				(va |= p),
				(t.lanes = p),
				(t.memoizedState = K));
		}
	}
	function Xd(t, e) {
		if (typeof t != "function") throw Error(r(191, t));
		t.call(e);
	}
	function Kd(t, e) {
		var a = t.callbacks;
		if (a !== null)
			for (t.callbacks = null, t = 0; t < a.length; t++) Xd(a[t], e);
	}
	var Fi = M(null),
		Ws = M(0);
	function Pd(t, e) {
		((t = kn), P(Ws, t), P(Fi, e), (kn = t | e.baseLanes));
	}
	function hu() {
		(P(Ws, kn), P(Fi, Fi.current));
	}
	function mu() {
		((kn = Ws.current), G(Fi), G(Ws));
	}
	var ke = M(null),
		fn = null;
	function ma(t) {
		var e = t.alternate;
		(P(Jt, Jt.current & 1),
			P(ke, t),
			fn === null &&
				(e === null || Fi.current !== null || e.memoizedState !== null) &&
				(fn = t));
	}
	function pu(t) {
		(P(Jt, Jt.current), P(ke, t), fn === null && (fn = t));
	}
	function kd(t) {
		t.tag === 22
			? (P(Jt, Jt.current), P(ke, t), fn === null && (fn = t))
			: pa();
	}
	function pa() {
		(P(Jt, Jt.current), P(ke, ke.current));
	}
	function Fe(t) {
		(G(ke), fn === t && (fn = null), G(Jt));
	}
	var Jt = M(0);
	function tr(t) {
		for (var e = t; e !== null; ) {
			if (e.tag === 13) {
				var a = e.memoizedState;
				if (a !== null && ((a = a.dehydrated), a === null || Ec(a) || _c(a)))
					return e;
			} else if (
				e.tag === 19 &&
				(e.memoizedProps.revealOrder === "forwards" ||
					e.memoizedProps.revealOrder === "backwards" ||
					e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
					e.memoizedProps.revealOrder === "together")
			) {
				if ((e.flags & 128) !== 0) return e;
			} else if (e.child !== null) {
				((e.child.return = e), (e = e.child));
				continue;
			}
			if (e === t) break;
			for (; e.sibling === null; ) {
				if (e.return === null || e.return === t) return null;
				e = e.return;
			}
			((e.sibling.return = e.return), (e = e.sibling));
		}
		return null;
	}
	var Zn = 0,
		pt = null,
		Nt = null,
		Wt = null,
		er = !1,
		Ji = !1,
		ii = !1,
		nr = 0,
		Vl = 0,
		Ii = null,
		dg = 0;
	function Pt() {
		throw Error(r(321));
	}
	function yu(t, e) {
		if (e === null) return !1;
		for (var a = 0; a < e.length && a < t.length; a++)
			if (!Ke(t[a], e[a])) return !1;
		return !0;
	}
	function gu(t, e, a, s, o, u) {
		return (
			(Zn = u),
			(pt = e),
			(e.memoizedState = null),
			(e.updateQueue = null),
			(e.lanes = 0),
			(L.H = t === null || t.memoizedState === null ? zh : Du),
			(ii = !1),
			(u = a(s, o)),
			(ii = !1),
			Ji && (u = Jd(e, a, s, o)),
			Fd(t),
			u
		);
	}
	function Fd(t) {
		L.H = Kl;
		var e = Nt !== null && Nt.next !== null;
		if (((Zn = 0), (Wt = Nt = pt = null), (er = !1), (Vl = 0), (Ii = null), e))
			throw Error(r(300));
		t === null ||
			te ||
			((t = t.dependencies), t !== null && Ks(t) && (te = !0));
	}
	function Jd(t, e, a, s) {
		pt = t;
		var o = 0;
		do {
			if ((Ji && (Ii = null), (Vl = 0), (Ji = !1), 25 <= o))
				throw Error(r(301));
			if (((o += 1), (Wt = Nt = null), t.updateQueue != null)) {
				var u = t.updateQueue;
				((u.lastEffect = null),
					(u.events = null),
					(u.stores = null),
					u.memoCache != null && (u.memoCache.index = 0));
			}
			((L.H = Dh), (u = e(a, s)));
		} while (Ji);
		return u;
	}
	function hg() {
		var t = L.H,
			e = t.useState()[0];
		return (
			(e = typeof e.then == "function" ? Gl(e) : e),
			(t = t.useState()[0]),
			(Nt !== null ? Nt.memoizedState : null) !== t && (pt.flags |= 1024),
			e
		);
	}
	function vu() {
		var t = nr !== 0;
		return ((nr = 0), t);
	}
	function bu(t, e, a) {
		((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
	}
	function Su(t) {
		if (er) {
			for (t = t.memoizedState; t !== null; ) {
				var e = t.queue;
				(e !== null && (e.pending = null), (t = t.next));
			}
			er = !1;
		}
		((Zn = 0), (Wt = Nt = pt = null), (Ji = !1), (Vl = nr = 0), (Ii = null));
	}
	function xe() {
		var t = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return (Wt === null ? (pt.memoizedState = Wt = t) : (Wt = Wt.next = t), Wt);
	}
	function It() {
		if (Nt === null) {
			var t = pt.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = Nt.next;
		var e = Wt === null ? pt.memoizedState : Wt.next;
		if (e !== null) ((Wt = e), (Nt = t));
		else {
			if (t === null)
				throw pt.alternate === null ? Error(r(467)) : Error(r(310));
			((Nt = t),
				(t = {
					memoizedState: Nt.memoizedState,
					baseState: Nt.baseState,
					baseQueue: Nt.baseQueue,
					queue: Nt.queue,
					next: null,
				}),
				Wt === null ? (pt.memoizedState = Wt = t) : (Wt = Wt.next = t));
		}
		return Wt;
	}
	function ar() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function Gl(t) {
		var e = Vl;
		return (
			(Vl += 1),
			Ii === null && (Ii = []),
			(t = Zd(Ii, t, e)),
			(e = pt),
			(Wt === null ? e.memoizedState : Wt.next) === null &&
				((e = e.alternate),
				(L.H = e === null || e.memoizedState === null ? zh : Du)),
			t
		);
	}
	function ir(t) {
		if (t !== null && typeof t == "object") {
			if (typeof t.then == "function") return Gl(t);
			if (t.$$typeof === q) return ye(t);
		}
		throw Error(r(438, String(t)));
	}
	function Eu(t) {
		var e = null,
			a = pt.updateQueue;
		if ((a !== null && (e = a.memoCache), e == null)) {
			var s = pt.alternate;
			s !== null &&
				((s = s.updateQueue),
				s !== null &&
					((s = s.memoCache),
					s != null &&
						(e = {
							data: s.data.map(function (o) {
								return o.slice();
							}),
							index: 0,
						})));
		}
		if (
			(e == null && (e = { data: [], index: 0 }),
			a === null && ((a = ar()), (pt.updateQueue = a)),
			(a.memoCache = e),
			(a = e.data[e.index]),
			a === void 0)
		)
			for (a = e.data[e.index] = Array(t), s = 0; s < t; s++) a[s] = ct;
		return (e.index++, a);
	}
	function Qn(t, e) {
		return typeof e == "function" ? e(t) : e;
	}
	function lr(t) {
		var e = It();
		return _u(e, Nt, t);
	}
	function _u(t, e, a) {
		var s = t.queue;
		if (s === null) throw Error(r(311));
		s.lastRenderedReducer = a;
		var o = t.baseQueue,
			u = s.pending;
		if (u !== null) {
			if (o !== null) {
				var p = o.next;
				((o.next = u.next), (u.next = p));
			}
			((e.baseQueue = o = u), (s.pending = null));
		}
		if (((u = t.baseState), o === null)) t.memoizedState = u;
		else {
			e = o.next;
			var S = (p = null),
				A = null,
				U = e,
				Z = !1;
			do {
				var K = U.lane & -536870913;
				if (K !== U.lane ? (Et & K) === K : (Zn & K) === K) {
					var j = U.revertLane;
					if (j === 0)
						(A !== null &&
							(A = A.next =
								{
									lane: 0,
									revertLane: 0,
									gesture: null,
									action: U.action,
									hasEagerState: U.hasEagerState,
									eagerState: U.eagerState,
									next: null,
								}),
							K === Xi && (Z = !0));
					else if ((Zn & j) === j) {
						((U = U.next), j === Xi && (Z = !0));
						continue;
					} else
						((K = {
							lane: 0,
							revertLane: U.revertLane,
							gesture: null,
							action: U.action,
							hasEagerState: U.hasEagerState,
							eagerState: U.eagerState,
							next: null,
						}),
							A === null ? ((S = A = K), (p = u)) : (A = A.next = K),
							(pt.lanes |= j),
							(va |= j));
					((K = U.action),
						ii && a(u, K),
						(u = U.hasEagerState ? U.eagerState : a(u, K)));
				} else
					((j = {
						lane: K,
						revertLane: U.revertLane,
						gesture: U.gesture,
						action: U.action,
						hasEagerState: U.hasEagerState,
						eagerState: U.eagerState,
						next: null,
					}),
						A === null ? ((S = A = j), (p = u)) : (A = A.next = j),
						(pt.lanes |= K),
						(va |= K));
				U = U.next;
			} while (U !== null && U !== e);
			if (
				(A === null ? (p = u) : (A.next = S),
				!Ke(u, t.memoizedState) && ((te = !0), Z && ((a = Ki), a !== null)))
			)
				throw a;
			((t.memoizedState = u),
				(t.baseState = p),
				(t.baseQueue = A),
				(s.lastRenderedState = u));
		}
		return (o === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
	}
	function wu(t) {
		var e = It(),
			a = e.queue;
		if (a === null) throw Error(r(311));
		a.lastRenderedReducer = t;
		var s = a.dispatch,
			o = a.pending,
			u = e.memoizedState;
		if (o !== null) {
			a.pending = null;
			var p = (o = o.next);
			do ((u = t(u, p.action)), (p = p.next));
			while (p !== o);
			(Ke(u, e.memoizedState) || (te = !0),
				(e.memoizedState = u),
				e.baseQueue === null && (e.baseState = u),
				(a.lastRenderedState = u));
		}
		return [u, s];
	}
	function Id(t, e, a) {
		var s = pt,
			o = It(),
			u = Rt;
		if (u) {
			if (a === void 0) throw Error(r(407));
			a = a();
		} else a = e();
		var p = !Ke((Nt || o).memoizedState, a);
		if (
			(p && ((o.memoizedState = a), (te = !0)),
			(o = o.queue),
			Au(th.bind(null, s, o, t), [t]),
			o.getSnapshot !== e || p || (Wt !== null && Wt.memoizedState.tag & 1))
		) {
			if (
				((s.flags |= 2048),
				$i(9, { destroy: void 0 }, Wd.bind(null, s, o, a, e), null),
				Bt === null)
			)
				throw Error(r(349));
			u || (Zn & 127) !== 0 || $d(s, e, a);
		}
		return a;
	}
	function $d(t, e, a) {
		((t.flags |= 16384),
			(t = { getSnapshot: e, value: a }),
			(e = pt.updateQueue),
			e === null
				? ((e = ar()), (pt.updateQueue = e), (e.stores = [t]))
				: ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
	}
	function Wd(t, e, a, s) {
		((e.value = a), (e.getSnapshot = s), eh(e) && nh(t));
	}
	function th(t, e, a) {
		return a(function () {
			eh(e) && nh(t);
		});
	}
	function eh(t) {
		var e = t.getSnapshot;
		t = t.value;
		try {
			var a = e();
			return !Ke(t, a);
		} catch {
			return !0;
		}
	}
	function nh(t) {
		var e = Fa(t, 2);
		e !== null && Ve(e, t, 2);
	}
	function Tu(t) {
		var e = xe();
		if (typeof t == "function") {
			var a = t;
			if (((t = a()), ii)) {
				yn(!0);
				try {
					a();
				} finally {
					yn(!1);
				}
			}
		}
		return (
			(e.memoizedState = e.baseState = t),
			(e.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qn,
				lastRenderedState: t,
			}),
			e
		);
	}
	function ah(t, e, a, s) {
		return ((t.baseState = a), _u(t, Nt, typeof s == "function" ? s : Qn));
	}
	function mg(t, e, a, s, o) {
		if (or(t)) throw Error(r(485));
		if (((t = e.action), t !== null)) {
			var u = {
				payload: o,
				action: t,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (p) {
					u.listeners.push(p);
				},
			};
			(L.T !== null ? a(!0) : (u.isTransition = !1),
				s(u),
				(a = e.pending),
				a === null
					? ((u.next = e.pending = u), ih(e, u))
					: ((u.next = a.next), (e.pending = a.next = u)));
		}
	}
	function ih(t, e) {
		var a = e.action,
			s = e.payload,
			o = t.state;
		if (e.isTransition) {
			var u = L.T,
				p = {};
			L.T = p;
			try {
				var S = a(o, s),
					A = L.S;
				(A !== null && A(p, S), lh(t, e, S));
			} catch (U) {
				Ru(t, e, U);
			} finally {
				(u !== null && p.types !== null && (u.types = p.types), (L.T = u));
			}
		} else
			try {
				((u = a(o, s)), lh(t, e, u));
			} catch (U) {
				Ru(t, e, U);
			}
	}
	function lh(t, e, a) {
		a !== null && typeof a == "object" && typeof a.then == "function"
			? a.then(
					function (s) {
						sh(t, e, s);
					},
					function (s) {
						return Ru(t, e, s);
					},
				)
			: sh(t, e, a);
	}
	function sh(t, e, a) {
		((e.status = "fulfilled"),
			(e.value = a),
			rh(e),
			(t.state = a),
			(e = t.pending),
			e !== null &&
				((a = e.next),
				a === e ? (t.pending = null) : ((a = a.next), (e.next = a), ih(t, a))));
	}
	function Ru(t, e, a) {
		var s = t.pending;
		if (((t.pending = null), s !== null)) {
			s = s.next;
			do ((e.status = "rejected"), (e.reason = a), rh(e), (e = e.next));
			while (e !== s);
		}
		t.action = null;
	}
	function rh(t) {
		t = t.listeners;
		for (var e = 0; e < t.length; e++) (0, t[e])();
	}
	function oh(t, e) {
		return e;
	}
	function uh(t, e) {
		if (Rt) {
			var a = Bt.formState;
			if (a !== null) {
				t: {
					var s = pt;
					if (Rt) {
						if (Zt) {
							e: {
								for (var o = Zt, u = cn; o.nodeType !== 8; ) {
									if (!u) {
										o = null;
										break e;
									}
									if (((o = dn(o.nextSibling)), o === null)) {
										o = null;
										break e;
									}
								}
								((u = o.data), (o = u === "F!" || u === "F" ? o : null));
							}
							if (o) {
								((Zt = dn(o.nextSibling)), (s = o.data === "F!"));
								break t;
							}
						}
						ua(s);
					}
					s = !1;
				}
				s && (e = a[0]);
			}
		}
		return (
			(a = xe()),
			(a.memoizedState = a.baseState = e),
			(s = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: oh,
				lastRenderedState: e,
			}),
			(a.queue = s),
			(a = Mh.bind(null, pt, s)),
			(s.dispatch = a),
			(s = Tu(!1)),
			(u = zu.bind(null, pt, !1, s.queue)),
			(s = xe()),
			(o = { state: e, dispatch: null, action: t, pending: null }),
			(s.queue = o),
			(a = mg.bind(null, pt, o, u, a)),
			(o.dispatch = a),
			(s.memoizedState = t),
			[e, a, !1]
		);
	}
	function ch(t) {
		var e = It();
		return fh(e, Nt, t);
	}
	function fh(t, e, a) {
		if (
			((e = _u(t, e, oh)[0]),
			(t = lr(Qn)[0]),
			typeof e == "object" && e !== null && typeof e.then == "function")
		)
			try {
				var s = Gl(e);
			} catch (p) {
				throw p === Pi ? Fs : p;
			}
		else s = e;
		e = It();
		var o = e.queue,
			u = o.dispatch;
		return (
			a !== e.memoizedState &&
				((pt.flags |= 2048),
				$i(9, { destroy: void 0 }, pg.bind(null, o, a), null)),
			[s, u, t]
		);
	}
	function pg(t, e) {
		t.action = e;
	}
	function dh(t) {
		var e = It(),
			a = Nt;
		if (a !== null) return fh(e, a, t);
		(It(), (e = e.memoizedState), (a = It()));
		var s = a.queue.dispatch;
		return ((a.memoizedState = t), [e, s, !1]);
	}
	function $i(t, e, a, s) {
		return (
			(t = { tag: t, create: a, deps: s, inst: e, next: null }),
			(e = pt.updateQueue),
			e === null && ((e = ar()), (pt.updateQueue = e)),
			(a = e.lastEffect),
			a === null
				? (e.lastEffect = t.next = t)
				: ((s = a.next), (a.next = t), (t.next = s), (e.lastEffect = t)),
			t
		);
	}
	function hh() {
		return It().memoizedState;
	}
	function sr(t, e, a, s) {
		var o = xe();
		((pt.flags |= t),
			(o.memoizedState = $i(
				1 | e,
				{ destroy: void 0 },
				a,
				s === void 0 ? null : s,
			)));
	}
	function rr(t, e, a, s) {
		var o = It();
		s = s === void 0 ? null : s;
		var u = o.memoizedState.inst;
		Nt !== null && s !== null && yu(s, Nt.memoizedState.deps)
			? (o.memoizedState = $i(e, u, a, s))
			: ((pt.flags |= t), (o.memoizedState = $i(1 | e, u, a, s)));
	}
	function mh(t, e) {
		sr(8390656, 8, t, e);
	}
	function Au(t, e) {
		rr(2048, 8, t, e);
	}
	function yg(t) {
		pt.flags |= 4;
		var e = pt.updateQueue;
		if (e === null) ((e = ar()), (pt.updateQueue = e), (e.events = [t]));
		else {
			var a = e.events;
			a === null ? (e.events = [t]) : a.push(t);
		}
	}
	function ph(t) {
		var e = It().memoizedState;
		return (
			yg({ ref: e, nextImpl: t }),
			function () {
				if ((zt & 2) !== 0) throw Error(r(440));
				return e.impl.apply(void 0, arguments);
			}
		);
	}
	function yh(t, e) {
		return rr(4, 2, t, e);
	}
	function gh(t, e) {
		return rr(4, 4, t, e);
	}
	function vh(t, e) {
		if (typeof e == "function") {
			t = t();
			var a = e(t);
			return function () {
				typeof a == "function" ? a() : e(null);
			};
		}
		if (e != null)
			return (
				(t = t()),
				(e.current = t),
				function () {
					e.current = null;
				}
			);
	}
	function bh(t, e, a) {
		((a = a != null ? a.concat([t]) : null), rr(4, 4, vh.bind(null, e, t), a));
	}
	function xu() {}
	function Sh(t, e) {
		var a = It();
		e = e === void 0 ? null : e;
		var s = a.memoizedState;
		return e !== null && yu(e, s[1]) ? s[0] : ((a.memoizedState = [t, e]), t);
	}
	function Eh(t, e) {
		var a = It();
		e = e === void 0 ? null : e;
		var s = a.memoizedState;
		if (e !== null && yu(e, s[1])) return s[0];
		if (((s = t()), ii)) {
			yn(!0);
			try {
				t();
			} finally {
				yn(!1);
			}
		}
		return ((a.memoizedState = [s, e]), s);
	}
	function Mu(t, e, a) {
		return a === void 0 || ((Zn & 1073741824) !== 0 && (Et & 261930) === 0)
			? (t.memoizedState = e)
			: ((t.memoizedState = a), (t = _0()), (pt.lanes |= t), (va |= t), a);
	}
	function _h(t, e, a, s) {
		return Ke(a, e)
			? a
			: Fi.current !== null
				? ((t = Mu(t, a, s)), Ke(t, e) || (te = !0), t)
				: (Zn & 42) === 0 || ((Zn & 1073741824) !== 0 && (Et & 261930) === 0)
					? ((te = !0), (t.memoizedState = a))
					: ((t = _0()), (pt.lanes |= t), (va |= t), e);
	}
	function wh(t, e, a, s, o) {
		var u = k.p;
		k.p = u !== 0 && 8 > u ? u : 8;
		var p = L.T,
			S = {};
		((L.T = S), zu(t, !1, e, a));
		try {
			var A = o(),
				U = L.S;
			if (
				(U !== null && U(S, A),
				A !== null && typeof A == "object" && typeof A.then == "function")
			) {
				var Z = fg(A, s);
				Xl(t, e, Z, $e(t));
			} else Xl(t, e, s, $e(t));
		} catch (K) {
			Xl(t, e, { then: function () {}, status: "rejected", reason: K }, $e());
		} finally {
			((k.p = u),
				p !== null && S.types !== null && (p.types = S.types),
				(L.T = p));
		}
	}
	function gg() {}
	function Ou(t, e, a, s) {
		if (t.tag !== 5) throw Error(r(476));
		var o = Th(t).queue;
		wh(
			t,
			o,
			e,
			st,
			a === null
				? gg
				: function () {
						return (Rh(t), a(s));
					},
		);
	}
	function Th(t) {
		var e = t.memoizedState;
		if (e !== null) return e;
		e = {
			memoizedState: st,
			baseState: st,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Qn,
				lastRenderedState: st,
			},
			next: null,
		};
		var a = {};
		return (
			(e.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Qn,
					lastRenderedState: a,
				},
				next: null,
			}),
			(t.memoizedState = e),
			(t = t.alternate),
			t !== null && (t.memoizedState = e),
			e
		);
	}
	function Rh(t) {
		var e = Th(t);
		(e.next === null && (e = t.alternate.memoizedState),
			Xl(t, e.next.queue, {}, $e()));
	}
	function Cu() {
		return ye(os);
	}
	function Ah() {
		return It().memoizedState;
	}
	function xh() {
		return It().memoizedState;
	}
	function vg(t) {
		for (var e = t.return; e !== null; ) {
			switch (e.tag) {
				case 24:
				case 3:
					var a = $e();
					t = da(a);
					var s = ha(e, t, a);
					(s !== null && (Ve(s, e, a), Zl(s, e, a)),
						(e = { cache: lu() }),
						(t.payload = e));
					return;
			}
			e = e.return;
		}
	}
	function bg(t, e, a) {
		var s = $e();
		((a = {
			lane: s,
			revertLane: 0,
			gesture: null,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			or(t)
				? Oh(e, a)
				: ((a = ko(t, e, a, s)), a !== null && (Ve(a, t, s), Ch(a, e, s))));
	}
	function Mh(t, e, a) {
		var s = $e();
		Xl(t, e, a, s);
	}
	function Xl(t, e, a, s) {
		var o = {
			lane: s,
			revertLane: 0,
			gesture: null,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (or(t)) Oh(e, o);
		else {
			var u = t.alternate;
			if (
				t.lanes === 0 &&
				(u === null || u.lanes === 0) &&
				((u = e.lastRenderedReducer), u !== null)
			)
				try {
					var p = e.lastRenderedState,
						S = u(p, a);
					if (((o.hasEagerState = !0), (o.eagerState = S), Ke(S, p)))
						return (Ys(t, e, o, 0), Bt === null && Qs(), !1);
				} catch {}
			if (((a = ko(t, e, o, s)), a !== null))
				return (Ve(a, t, s), Ch(a, e, s), !0);
		}
		return !1;
	}
	function zu(t, e, a, s) {
		if (
			((s = {
				lane: 2,
				revertLane: uc(),
				gesture: null,
				action: s,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			or(t))
		) {
			if (e) throw Error(r(479));
		} else ((e = ko(t, a, s, 2)), e !== null && Ve(e, t, 2));
	}
	function or(t) {
		var e = t.alternate;
		return t === pt || (e !== null && e === pt);
	}
	function Oh(t, e) {
		Ji = er = !0;
		var a = t.pending;
		(a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
			(t.pending = e));
	}
	function Ch(t, e, a) {
		if ((a & 4194048) !== 0) {
			var s = e.lanes;
			((s &= t.pendingLanes), (a |= s), (e.lanes = a), Ue(t, a));
		}
	}
	var Kl = {
		readContext: ye,
		use: ir,
		useCallback: Pt,
		useContext: Pt,
		useEffect: Pt,
		useImperativeHandle: Pt,
		useLayoutEffect: Pt,
		useInsertionEffect: Pt,
		useMemo: Pt,
		useReducer: Pt,
		useRef: Pt,
		useState: Pt,
		useDebugValue: Pt,
		useDeferredValue: Pt,
		useTransition: Pt,
		useSyncExternalStore: Pt,
		useId: Pt,
		useHostTransitionStatus: Pt,
		useFormState: Pt,
		useActionState: Pt,
		useOptimistic: Pt,
		useMemoCache: Pt,
		useCacheRefresh: Pt,
	};
	Kl.useEffectEvent = Pt;
	var zh = {
			readContext: ye,
			use: ir,
			useCallback: function (t, e) {
				return ((xe().memoizedState = [t, e === void 0 ? null : e]), t);
			},
			useContext: ye,
			useEffect: mh,
			useImperativeHandle: function (t, e, a) {
				((a = a != null ? a.concat([t]) : null),
					sr(4194308, 4, vh.bind(null, e, t), a));
			},
			useLayoutEffect: function (t, e) {
				return sr(4194308, 4, t, e);
			},
			useInsertionEffect: function (t, e) {
				sr(4, 2, t, e);
			},
			useMemo: function (t, e) {
				var a = xe();
				e = e === void 0 ? null : e;
				var s = t();
				if (ii) {
					yn(!0);
					try {
						t();
					} finally {
						yn(!1);
					}
				}
				return ((a.memoizedState = [s, e]), s);
			},
			useReducer: function (t, e, a) {
				var s = xe();
				if (a !== void 0) {
					var o = a(e);
					if (ii) {
						yn(!0);
						try {
							a(e);
						} finally {
							yn(!1);
						}
					}
				} else o = e;
				return (
					(s.memoizedState = s.baseState = o),
					(t = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: o,
					}),
					(s.queue = t),
					(t = t.dispatch = bg.bind(null, pt, t)),
					[s.memoizedState, t]
				);
			},
			useRef: function (t) {
				var e = xe();
				return ((t = { current: t }), (e.memoizedState = t));
			},
			useState: function (t) {
				t = Tu(t);
				var e = t.queue,
					a = Mh.bind(null, pt, e);
				return ((e.dispatch = a), [t.memoizedState, a]);
			},
			useDebugValue: xu,
			useDeferredValue: function (t, e) {
				var a = xe();
				return Mu(a, t, e);
			},
			useTransition: function () {
				var t = Tu(!1);
				return (
					(t = wh.bind(null, pt, t.queue, !0, !1)),
					(xe().memoizedState = t),
					[!1, t]
				);
			},
			useSyncExternalStore: function (t, e, a) {
				var s = pt,
					o = xe();
				if (Rt) {
					if (a === void 0) throw Error(r(407));
					a = a();
				} else {
					if (((a = e()), Bt === null)) throw Error(r(349));
					(Et & 127) !== 0 || $d(s, e, a);
				}
				o.memoizedState = a;
				var u = { value: a, getSnapshot: e };
				return (
					(o.queue = u),
					mh(th.bind(null, s, u, t), [t]),
					(s.flags |= 2048),
					$i(9, { destroy: void 0 }, Wd.bind(null, s, u, a, e), null),
					a
				);
			},
			useId: function () {
				var t = xe(),
					e = Bt.identifierPrefix;
				if (Rt) {
					var a = Rn,
						s = Tn;
					((a = (s & ~(1 << (32 - Ee(s) - 1))).toString(32) + a),
						(e = "_" + e + "R_" + a),
						(a = nr++),
						0 < a && (e += "H" + a.toString(32)),
						(e += "_"));
				} else ((a = dg++), (e = "_" + e + "r_" + a.toString(32) + "_"));
				return (t.memoizedState = e);
			},
			useHostTransitionStatus: Cu,
			useFormState: uh,
			useActionState: uh,
			useOptimistic: function (t) {
				var e = xe();
				e.memoizedState = e.baseState = t;
				var a = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(e.queue = a),
					(e = zu.bind(null, pt, !0, a)),
					(a.dispatch = e),
					[t, e]
				);
			},
			useMemoCache: Eu,
			useCacheRefresh: function () {
				return (xe().memoizedState = vg.bind(null, pt));
			},
			useEffectEvent: function (t) {
				var e = xe(),
					a = { impl: t };
				return (
					(e.memoizedState = a),
					function () {
						if ((zt & 2) !== 0) throw Error(r(440));
						return a.impl.apply(void 0, arguments);
					}
				);
			},
		},
		Du = {
			readContext: ye,
			use: ir,
			useCallback: Sh,
			useContext: ye,
			useEffect: Au,
			useImperativeHandle: bh,
			useInsertionEffect: yh,
			useLayoutEffect: gh,
			useMemo: Eh,
			useReducer: lr,
			useRef: hh,
			useState: function () {
				return lr(Qn);
			},
			useDebugValue: xu,
			useDeferredValue: function (t, e) {
				var a = It();
				return _h(a, Nt.memoizedState, t, e);
			},
			useTransition: function () {
				var t = lr(Qn)[0],
					e = It().memoizedState;
				return [typeof t == "boolean" ? t : Gl(t), e];
			},
			useSyncExternalStore: Id,
			useId: Ah,
			useHostTransitionStatus: Cu,
			useFormState: ch,
			useActionState: ch,
			useOptimistic: function (t, e) {
				var a = It();
				return ah(a, Nt, t, e);
			},
			useMemoCache: Eu,
			useCacheRefresh: xh,
		};
	Du.useEffectEvent = ph;
	var Dh = {
		readContext: ye,
		use: ir,
		useCallback: Sh,
		useContext: ye,
		useEffect: Au,
		useImperativeHandle: bh,
		useInsertionEffect: yh,
		useLayoutEffect: gh,
		useMemo: Eh,
		useReducer: wu,
		useRef: hh,
		useState: function () {
			return wu(Qn);
		},
		useDebugValue: xu,
		useDeferredValue: function (t, e) {
			var a = It();
			return Nt === null ? Mu(a, t, e) : _h(a, Nt.memoizedState, t, e);
		},
		useTransition: function () {
			var t = wu(Qn)[0],
				e = It().memoizedState;
			return [typeof t == "boolean" ? t : Gl(t), e];
		},
		useSyncExternalStore: Id,
		useId: Ah,
		useHostTransitionStatus: Cu,
		useFormState: dh,
		useActionState: dh,
		useOptimistic: function (t, e) {
			var a = It();
			return Nt !== null
				? ah(a, Nt, t, e)
				: ((a.baseState = t), [t, a.queue.dispatch]);
		},
		useMemoCache: Eu,
		useCacheRefresh: xh,
	};
	Dh.useEffectEvent = ph;
	function Lu(t, e, a, s) {
		((e = t.memoizedState),
			(a = a(s, e)),
			(a = a == null ? e : y({}, e, a)),
			(t.memoizedState = a),
			t.lanes === 0 && (t.updateQueue.baseState = a));
	}
	var Nu = {
		enqueueSetState: function (t, e, a) {
			t = t._reactInternals;
			var s = $e(),
				o = da(s);
			((o.payload = e),
				a != null && (o.callback = a),
				(e = ha(t, o, s)),
				e !== null && (Ve(e, t, s), Zl(e, t, s)));
		},
		enqueueReplaceState: function (t, e, a) {
			t = t._reactInternals;
			var s = $e(),
				o = da(s);
			((o.tag = 1),
				(o.payload = e),
				a != null && (o.callback = a),
				(e = ha(t, o, s)),
				e !== null && (Ve(e, t, s), Zl(e, t, s)));
		},
		enqueueForceUpdate: function (t, e) {
			t = t._reactInternals;
			var a = $e(),
				s = da(a);
			((s.tag = 2),
				e != null && (s.callback = e),
				(e = ha(t, s, a)),
				e !== null && (Ve(e, t, a), Zl(e, t, a)));
		},
	};
	function Lh(t, e, a, s, o, u, p) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == "function"
				? t.shouldComponentUpdate(s, u, p)
				: e.prototype && e.prototype.isPureReactComponent
					? !Dl(a, s) || !Dl(o, u)
					: !0
		);
	}
	function Nh(t, e, a, s) {
		((t = e.state),
			typeof e.componentWillReceiveProps == "function" &&
				e.componentWillReceiveProps(a, s),
			typeof e.UNSAFE_componentWillReceiveProps == "function" &&
				e.UNSAFE_componentWillReceiveProps(a, s),
			e.state !== t && Nu.enqueueReplaceState(e, e.state, null));
	}
	function li(t, e) {
		var a = e;
		if ("ref" in e) {
			a = {};
			for (var s in e) s !== "ref" && (a[s] = e[s]);
		}
		if ((t = t.defaultProps)) {
			a === e && (a = y({}, a));
			for (var o in t) a[o] === void 0 && (a[o] = t[o]);
		}
		return a;
	}
	function Uh(t) {
		Zs(t);
	}
	function jh(t) {
		console.error(t);
	}
	function Bh(t) {
		Zs(t);
	}
	function ur(t, e) {
		try {
			var a = t.onUncaughtError;
			a(e.value, { componentStack: e.stack });
		} catch (s) {
			setTimeout(function () {
				throw s;
			});
		}
	}
	function Hh(t, e, a) {
		try {
			var s = t.onCaughtError;
			s(a.value, {
				componentStack: a.stack,
				errorBoundary: e.tag === 1 ? e.stateNode : null,
			});
		} catch (o) {
			setTimeout(function () {
				throw o;
			});
		}
	}
	function Uu(t, e, a) {
		return (
			(a = da(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				ur(t, e);
			}),
			a
		);
	}
	function qh(t) {
		return ((t = da(t)), (t.tag = 3), t);
	}
	function Zh(t, e, a, s) {
		var o = a.type.getDerivedStateFromError;
		if (typeof o == "function") {
			var u = s.value;
			((t.payload = function () {
				return o(u);
			}),
				(t.callback = function () {
					Hh(e, a, s);
				}));
		}
		var p = a.stateNode;
		p !== null &&
			typeof p.componentDidCatch == "function" &&
			(t.callback = function () {
				(Hh(e, a, s),
					typeof o != "function" &&
						(ba === null ? (ba = new Set([this])) : ba.add(this)));
				var S = s.stack;
				this.componentDidCatch(s.value, {
					componentStack: S !== null ? S : "",
				});
			});
	}
	function Sg(t, e, a, s, o) {
		if (
			((a.flags |= 32768),
			s !== null && typeof s == "object" && typeof s.then == "function")
		) {
			if (
				((e = a.alternate),
				e !== null && Gi(e, a, o, !0),
				(a = ke.current),
				a !== null)
			) {
				switch (a.tag) {
					case 31:
					case 13:
						return (
							fn === null ? Er() : a.alternate === null && kt === 0 && (kt = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = o),
							s === Js
								? (a.flags |= 16384)
								: ((e = a.updateQueue),
									e === null ? (a.updateQueue = new Set([s])) : e.add(s),
									sc(t, s, o)),
							!1
						);
					case 22:
						return (
							(a.flags |= 65536),
							s === Js
								? (a.flags |= 16384)
								: ((e = a.updateQueue),
									e === null
										? ((e = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([s]),
											}),
											(a.updateQueue = e))
										: ((a = e.retryQueue),
											a === null ? (e.retryQueue = new Set([s])) : a.add(s)),
									sc(t, s, o)),
							!1
						);
				}
				throw Error(r(435, a.tag));
			}
			return (sc(t, s, o), Er(), !1);
		}
		if (Rt)
			return (
				(e = ke.current),
				e !== null
					? ((e.flags & 65536) === 0 && (e.flags |= 256),
						(e.flags |= 65536),
						(e.lanes = o),
						s !== tu && ((t = Error(r(422), { cause: s })), Ul(rn(t, a))))
					: (s !== tu && ((e = Error(r(423), { cause: s })), Ul(rn(e, a))),
						(t = t.current.alternate),
						(t.flags |= 65536),
						(o &= -o),
						(t.lanes |= o),
						(s = rn(s, a)),
						(o = Uu(t.stateNode, s, o)),
						fu(t, o),
						kt !== 4 && (kt = 2)),
				!1
			);
		var u = Error(r(520), { cause: s });
		if (
			((u = rn(u, a)),
			ts === null ? (ts = [u]) : ts.push(u),
			kt !== 4 && (kt = 2),
			e === null)
		)
			return !0;
		((s = rn(s, a)), (a = e));
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(t = o & -o),
						(a.lanes |= t),
						(t = Uu(a.stateNode, s, t)),
						fu(a, t),
						!1
					);
				case 1:
					if (
						((e = a.type),
						(u = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof e.getDerivedStateFromError == "function" ||
								(u !== null &&
									typeof u.componentDidCatch == "function" &&
									(ba === null || !ba.has(u)))))
					)
						return (
							(a.flags |= 65536),
							(o &= -o),
							(a.lanes |= o),
							(o = qh(o)),
							Zh(o, t, a, s),
							fu(a, o),
							!1
						);
			}
			a = a.return;
		} while (a !== null);
		return !1;
	}
	var ju = Error(r(461)),
		te = !1;
	function ge(t, e, a, s) {
		e.child = t === null ? Gd(e, null, a, s) : ai(e, t.child, a, s);
	}
	function Qh(t, e, a, s, o) {
		a = a.render;
		var u = e.ref;
		if ("ref" in s) {
			var p = {};
			for (var S in s) S !== "ref" && (p[S] = s[S]);
		} else p = s;
		return (
			Wa(e),
			(s = gu(t, e, a, p, u, o)),
			(S = vu()),
			t !== null && !te
				? (bu(t, e, o), Yn(t, e, o))
				: (Rt && S && $o(e), (e.flags |= 1), ge(t, e, s, o), e.child)
		);
	}
	function Yh(t, e, a, s, o) {
		if (t === null) {
			var u = a.type;
			return typeof u == "function" &&
				!Fo(u) &&
				u.defaultProps === void 0 &&
				a.compare === null
				? ((e.tag = 15), (e.type = u), Vh(t, e, u, s, o))
				: ((t = Gs(a.type, null, s, e, e.mode, o)),
					(t.ref = e.ref),
					(t.return = e),
					(e.child = t));
		}
		if (((u = t.child), !Gu(t, o))) {
			var p = u.memoizedProps;
			if (
				((a = a.compare), (a = a !== null ? a : Dl), a(p, s) && t.ref === e.ref)
			)
				return Yn(t, e, o);
		}
		return (
			(e.flags |= 1),
			(t = jn(u, s)),
			(t.ref = e.ref),
			(t.return = e),
			(e.child = t)
		);
	}
	function Vh(t, e, a, s, o) {
		if (t !== null) {
			var u = t.memoizedProps;
			if (Dl(u, s) && t.ref === e.ref)
				if (((te = !1), (e.pendingProps = s = u), Gu(t, o)))
					(t.flags & 131072) !== 0 && (te = !0);
				else return ((e.lanes = t.lanes), Yn(t, e, o));
		}
		return Bu(t, e, a, s, o);
	}
	function Gh(t, e, a, s) {
		var o = s.children,
			u = t !== null ? t.memoizedState : null;
		if (
			(t === null &&
				e.stateNode === null &&
				(e.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			s.mode === "hidden")
		) {
			if ((e.flags & 128) !== 0) {
				if (((u = u !== null ? u.baseLanes | a : a), t !== null)) {
					for (s = e.child = t.child, o = 0; s !== null; )
						((o = o | s.lanes | s.childLanes), (s = s.sibling));
					s = o & ~u;
				} else ((s = 0), (e.child = null));
				return Xh(t, e, u, a, s);
			}
			if ((a & 536870912) !== 0)
				((e.memoizedState = { baseLanes: 0, cachePool: null }),
					t !== null && ks(e, u !== null ? u.cachePool : null),
					u !== null ? Pd(e, u) : hu(),
					kd(e));
			else
				return (
					(s = e.lanes = 536870912),
					Xh(t, e, u !== null ? u.baseLanes | a : a, a, s)
				);
		} else
			u !== null
				? (ks(e, u.cachePool), Pd(e, u), pa(), (e.memoizedState = null))
				: (t !== null && ks(e, null), hu(), pa());
		return (ge(t, e, o, a), e.child);
	}
	function Pl(t, e) {
		return (
			(t !== null && t.tag === 22) ||
				e.stateNode !== null ||
				(e.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null,
				}),
			e.sibling
		);
	}
	function Xh(t, e, a, s, o) {
		var u = ru();
		return (
			(u = u === null ? null : { parent: $t._currentValue, pool: u }),
			(e.memoizedState = { baseLanes: a, cachePool: u }),
			t !== null && ks(e, null),
			hu(),
			kd(e),
			t !== null && Gi(t, e, s, !0),
			(e.childLanes = o),
			null
		);
	}
	function cr(t, e) {
		return (
			(e = dr({ mode: e.mode, children: e.children }, t.mode)),
			(e.ref = t.ref),
			(t.child = e),
			(e.return = t),
			e
		);
	}
	function Kh(t, e, a) {
		return (
			ai(e, t.child, null, a),
			(t = cr(e, e.pendingProps)),
			(t.flags |= 2),
			Fe(e),
			(e.memoizedState = null),
			t
		);
	}
	function Eg(t, e, a) {
		var s = e.pendingProps,
			o = (e.flags & 128) !== 0;
		if (((e.flags &= -129), t === null)) {
			if (Rt) {
				if (s.mode === "hidden")
					return ((t = cr(e, s)), (e.lanes = 536870912), Pl(null, t));
				if (
					(pu(e),
					(t = Zt)
						? ((t = im(t, cn)),
							(t = t !== null && t.data === "&" ? t : null),
							t !== null &&
								((e.memoizedState = {
									dehydrated: t,
									treeContext: ra !== null ? { id: Tn, overflow: Rn } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(a = Od(t)),
								(a.return = e),
								(e.child = a),
								(pe = e),
								(Zt = null)))
						: (t = null),
					t === null)
				)
					throw ua(e);
				return ((e.lanes = 536870912), null);
			}
			return cr(e, s);
		}
		var u = t.memoizedState;
		if (u !== null) {
			var p = u.dehydrated;
			if ((pu(e), o))
				if (e.flags & 256) ((e.flags &= -257), (e = Kh(t, e, a)));
				else if (e.memoizedState !== null)
					((e.child = t.child), (e.flags |= 128), (e = null));
				else throw Error(r(558));
			else if (
				(te || Gi(t, e, a, !1), (o = (a & t.childLanes) !== 0), te || o)
			) {
				if (
					((s = Bt),
					s !== null && ((p = je(s, a)), p !== 0 && p !== u.retryLane))
				)
					throw ((u.retryLane = p), Fa(t, p), Ve(s, t, p), ju);
				(Er(), (e = Kh(t, e, a)));
			} else
				((t = u.treeContext),
					(Zt = dn(p.nextSibling)),
					(pe = e),
					(Rt = !0),
					(oa = null),
					(cn = !1),
					t !== null && Dd(e, t),
					(e = cr(e, s)),
					(e.flags |= 4096));
			return e;
		}
		return (
			(t = jn(t.child, { mode: s.mode, children: s.children })),
			(t.ref = e.ref),
			(e.child = t),
			(t.return = e),
			t
		);
	}
	function fr(t, e) {
		var a = e.ref;
		if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
		else {
			if (typeof a != "function" && typeof a != "object") throw Error(r(284));
			(t === null || t.ref !== a) && (e.flags |= 4194816);
		}
	}
	function Bu(t, e, a, s, o) {
		return (
			Wa(e),
			(a = gu(t, e, a, s, void 0, o)),
			(s = vu()),
			t !== null && !te
				? (bu(t, e, o), Yn(t, e, o))
				: (Rt && s && $o(e), (e.flags |= 1), ge(t, e, a, o), e.child)
		);
	}
	function Ph(t, e, a, s, o, u) {
		return (
			Wa(e),
			(e.updateQueue = null),
			(a = Jd(e, s, a, o)),
			Fd(t),
			(s = vu()),
			t !== null && !te
				? (bu(t, e, u), Yn(t, e, u))
				: (Rt && s && $o(e), (e.flags |= 1), ge(t, e, a, u), e.child)
		);
	}
	function kh(t, e, a, s, o) {
		if ((Wa(e), e.stateNode === null)) {
			var u = Zi,
				p = a.contextType;
			(typeof p == "object" && p !== null && (u = ye(p)),
				(u = new a(s, u)),
				(e.memoizedState =
					u.state !== null && u.state !== void 0 ? u.state : null),
				(u.updater = Nu),
				(e.stateNode = u),
				(u._reactInternals = e),
				(u = e.stateNode),
				(u.props = s),
				(u.state = e.memoizedState),
				(u.refs = {}),
				uu(e),
				(p = a.contextType),
				(u.context = typeof p == "object" && p !== null ? ye(p) : Zi),
				(u.state = e.memoizedState),
				(p = a.getDerivedStateFromProps),
				typeof p == "function" && (Lu(e, a, p, s), (u.state = e.memoizedState)),
				typeof a.getDerivedStateFromProps == "function" ||
					typeof u.getSnapshotBeforeUpdate == "function" ||
					(typeof u.UNSAFE_componentWillMount != "function" &&
						typeof u.componentWillMount != "function") ||
					((p = u.state),
					typeof u.componentWillMount == "function" && u.componentWillMount(),
					typeof u.UNSAFE_componentWillMount == "function" &&
						u.UNSAFE_componentWillMount(),
					p !== u.state && Nu.enqueueReplaceState(u, u.state, null),
					Yl(e, s, u, o),
					Ql(),
					(u.state = e.memoizedState)),
				typeof u.componentDidMount == "function" && (e.flags |= 4194308),
				(s = !0));
		} else if (t === null) {
			u = e.stateNode;
			var S = e.memoizedProps,
				A = li(a, S);
			u.props = A;
			var U = u.context,
				Z = a.contextType;
			((p = Zi), typeof Z == "object" && Z !== null && (p = ye(Z)));
			var K = a.getDerivedStateFromProps;
			((Z =
				typeof K == "function" ||
				typeof u.getSnapshotBeforeUpdate == "function"),
				(S = e.pendingProps !== S),
				Z ||
					(typeof u.UNSAFE_componentWillReceiveProps != "function" &&
						typeof u.componentWillReceiveProps != "function") ||
					((S || U !== p) && Nh(e, u, s, p)),
				(fa = !1));
			var j = e.memoizedState;
			((u.state = j),
				Yl(e, s, u, o),
				Ql(),
				(U = e.memoizedState),
				S || j !== U || fa
					? (typeof K == "function" && (Lu(e, a, K, s), (U = e.memoizedState)),
						(A = fa || Lh(e, a, A, s, j, U, p))
							? (Z ||
									(typeof u.UNSAFE_componentWillMount != "function" &&
										typeof u.componentWillMount != "function") ||
									(typeof u.componentWillMount == "function" &&
										u.componentWillMount(),
									typeof u.UNSAFE_componentWillMount == "function" &&
										u.UNSAFE_componentWillMount()),
								typeof u.componentDidMount == "function" &&
									(e.flags |= 4194308))
							: (typeof u.componentDidMount == "function" &&
									(e.flags |= 4194308),
								(e.memoizedProps = s),
								(e.memoizedState = U)),
						(u.props = s),
						(u.state = U),
						(u.context = p),
						(s = A))
					: (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
						(s = !1)));
		} else {
			((u = e.stateNode),
				cu(t, e),
				(p = e.memoizedProps),
				(Z = li(a, p)),
				(u.props = Z),
				(K = e.pendingProps),
				(j = u.context),
				(U = a.contextType),
				(A = Zi),
				typeof U == "object" && U !== null && (A = ye(U)),
				(S = a.getDerivedStateFromProps),
				(U =
					typeof S == "function" ||
					typeof u.getSnapshotBeforeUpdate == "function") ||
					(typeof u.UNSAFE_componentWillReceiveProps != "function" &&
						typeof u.componentWillReceiveProps != "function") ||
					((p !== K || j !== A) && Nh(e, u, s, A)),
				(fa = !1),
				(j = e.memoizedState),
				(u.state = j),
				Yl(e, s, u, o),
				Ql());
			var B = e.memoizedState;
			p !== K ||
			j !== B ||
			fa ||
			(t !== null && t.dependencies !== null && Ks(t.dependencies))
				? (typeof S == "function" && (Lu(e, a, S, s), (B = e.memoizedState)),
					(Z =
						fa ||
						Lh(e, a, Z, s, j, B, A) ||
						(t !== null && t.dependencies !== null && Ks(t.dependencies)))
						? (U ||
								(typeof u.UNSAFE_componentWillUpdate != "function" &&
									typeof u.componentWillUpdate != "function") ||
								(typeof u.componentWillUpdate == "function" &&
									u.componentWillUpdate(s, B, A),
								typeof u.UNSAFE_componentWillUpdate == "function" &&
									u.UNSAFE_componentWillUpdate(s, B, A)),
							typeof u.componentDidUpdate == "function" && (e.flags |= 4),
							typeof u.getSnapshotBeforeUpdate == "function" &&
								(e.flags |= 1024))
						: (typeof u.componentDidUpdate != "function" ||
								(p === t.memoizedProps && j === t.memoizedState) ||
								(e.flags |= 4),
							typeof u.getSnapshotBeforeUpdate != "function" ||
								(p === t.memoizedProps && j === t.memoizedState) ||
								(e.flags |= 1024),
							(e.memoizedProps = s),
							(e.memoizedState = B)),
					(u.props = s),
					(u.state = B),
					(u.context = A),
					(s = Z))
				: (typeof u.componentDidUpdate != "function" ||
						(p === t.memoizedProps && j === t.memoizedState) ||
						(e.flags |= 4),
					typeof u.getSnapshotBeforeUpdate != "function" ||
						(p === t.memoizedProps && j === t.memoizedState) ||
						(e.flags |= 1024),
					(s = !1));
		}
		return (
			(u = s),
			fr(t, e),
			(s = (e.flags & 128) !== 0),
			u || s
				? ((u = e.stateNode),
					(a =
						s && typeof a.getDerivedStateFromError != "function"
							? null
							: u.render()),
					(e.flags |= 1),
					t !== null && s
						? ((e.child = ai(e, t.child, null, o)),
							(e.child = ai(e, null, a, o)))
						: ge(t, e, a, o),
					(e.memoizedState = u.state),
					(t = e.child))
				: (t = Yn(t, e, o)),
			t
		);
	}
	function Fh(t, e, a, s) {
		return (Ia(), (e.flags |= 256), ge(t, e, a, s), e.child);
	}
	var Hu = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function qu(t) {
		return { baseLanes: t, cachePool: Hd() };
	}
	function Zu(t, e, a) {
		return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Ie), t);
	}
	function Jh(t, e, a) {
		var s = e.pendingProps,
			o = !1,
			u = (e.flags & 128) !== 0,
			p;
		if (
			((p = u) ||
				(p =
					t !== null && t.memoizedState === null ? !1 : (Jt.current & 2) !== 0),
			p && ((o = !0), (e.flags &= -129)),
			(p = (e.flags & 32) !== 0),
			(e.flags &= -33),
			t === null)
		) {
			if (Rt) {
				if (
					(o ? ma(e) : pa(),
					(t = Zt)
						? ((t = im(t, cn)),
							(t = t !== null && t.data !== "&" ? t : null),
							t !== null &&
								((e.memoizedState = {
									dehydrated: t,
									treeContext: ra !== null ? { id: Tn, overflow: Rn } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(a = Od(t)),
								(a.return = e),
								(e.child = a),
								(pe = e),
								(Zt = null)))
						: (t = null),
					t === null)
				)
					throw ua(e);
				return (_c(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
			}
			var S = s.children;
			return (
				(s = s.fallback),
				o
					? (pa(),
						(o = e.mode),
						(S = dr({ mode: "hidden", children: S }, o)),
						(s = Ja(s, o, a, null)),
						(S.return = e),
						(s.return = e),
						(S.sibling = s),
						(e.child = S),
						(s = e.child),
						(s.memoizedState = qu(a)),
						(s.childLanes = Zu(t, p, a)),
						(e.memoizedState = Hu),
						Pl(null, s))
					: (ma(e), Qu(e, S))
			);
		}
		var A = t.memoizedState;
		if (A !== null && ((S = A.dehydrated), S !== null)) {
			if (u)
				e.flags & 256
					? (ma(e), (e.flags &= -257), (e = Yu(t, e, a)))
					: e.memoizedState !== null
						? (pa(), (e.child = t.child), (e.flags |= 128), (e = null))
						: (pa(),
							(S = s.fallback),
							(o = e.mode),
							(s = dr({ mode: "visible", children: s.children }, o)),
							(S = Ja(S, o, a, null)),
							(S.flags |= 2),
							(s.return = e),
							(S.return = e),
							(s.sibling = S),
							(e.child = s),
							ai(e, t.child, null, a),
							(s = e.child),
							(s.memoizedState = qu(a)),
							(s.childLanes = Zu(t, p, a)),
							(e.memoizedState = Hu),
							(e = Pl(null, s)));
			else if ((ma(e), _c(S))) {
				if (((p = S.nextSibling && S.nextSibling.dataset), p)) var U = p.dgst;
				((p = U),
					(s = Error(r(419))),
					(s.stack = ""),
					(s.digest = p),
					Ul({ value: s, source: null, stack: null }),
					(e = Yu(t, e, a)));
			} else if (
				(te || Gi(t, e, a, !1), (p = (a & t.childLanes) !== 0), te || p)
			) {
				if (
					((p = Bt),
					p !== null && ((s = je(p, a)), s !== 0 && s !== A.retryLane))
				)
					throw ((A.retryLane = s), Fa(t, s), Ve(p, t, s), ju);
				(Ec(S) || Er(), (e = Yu(t, e, a)));
			} else
				Ec(S)
					? ((e.flags |= 192), (e.child = t.child), (e = null))
					: ((t = A.treeContext),
						(Zt = dn(S.nextSibling)),
						(pe = e),
						(Rt = !0),
						(oa = null),
						(cn = !1),
						t !== null && Dd(e, t),
						(e = Qu(e, s.children)),
						(e.flags |= 4096));
			return e;
		}
		return o
			? (pa(),
				(S = s.fallback),
				(o = e.mode),
				(A = t.child),
				(U = A.sibling),
				(s = jn(A, { mode: "hidden", children: s.children })),
				(s.subtreeFlags = A.subtreeFlags & 65011712),
				U !== null ? (S = jn(U, S)) : ((S = Ja(S, o, a, null)), (S.flags |= 2)),
				(S.return = e),
				(s.return = e),
				(s.sibling = S),
				(e.child = s),
				Pl(null, s),
				(s = e.child),
				(S = t.child.memoizedState),
				S === null
					? (S = qu(a))
					: ((o = S.cachePool),
						o !== null
							? ((A = $t._currentValue),
								(o = o.parent !== A ? { parent: A, pool: A } : o))
							: (o = Hd()),
						(S = { baseLanes: S.baseLanes | a, cachePool: o })),
				(s.memoizedState = S),
				(s.childLanes = Zu(t, p, a)),
				(e.memoizedState = Hu),
				Pl(t.child, s))
			: (ma(e),
				(a = t.child),
				(t = a.sibling),
				(a = jn(a, { mode: "visible", children: s.children })),
				(a.return = e),
				(a.sibling = null),
				t !== null &&
					((p = e.deletions),
					p === null ? ((e.deletions = [t]), (e.flags |= 16)) : p.push(t)),
				(e.child = a),
				(e.memoizedState = null),
				a);
	}
	function Qu(t, e) {
		return (
			(e = dr({ mode: "visible", children: e }, t.mode)),
			(e.return = t),
			(t.child = e)
		);
	}
	function dr(t, e) {
		return ((t = Pe(22, t, null, e)), (t.lanes = 0), t);
	}
	function Yu(t, e, a) {
		return (
			ai(e, t.child, null, a),
			(t = Qu(e, e.pendingProps.children)),
			(t.flags |= 2),
			(e.memoizedState = null),
			t
		);
	}
	function Ih(t, e, a) {
		t.lanes |= e;
		var s = t.alternate;
		(s !== null && (s.lanes |= e), au(t.return, e, a));
	}
	function Vu(t, e, a, s, o, u) {
		var p = t.memoizedState;
		p === null
			? (t.memoizedState = {
					isBackwards: e,
					rendering: null,
					renderingStartTime: 0,
					last: s,
					tail: a,
					tailMode: o,
					treeForkCount: u,
				})
			: ((p.isBackwards = e),
				(p.rendering = null),
				(p.renderingStartTime = 0),
				(p.last = s),
				(p.tail = a),
				(p.tailMode = o),
				(p.treeForkCount = u));
	}
	function $h(t, e, a) {
		var s = e.pendingProps,
			o = s.revealOrder,
			u = s.tail;
		s = s.children;
		var p = Jt.current,
			S = (p & 2) !== 0;
		if (
			(S ? ((p = (p & 1) | 2), (e.flags |= 128)) : (p &= 1),
			P(Jt, p),
			ge(t, e, s, a),
			(s = Rt ? Nl : 0),
			!S && t !== null && (t.flags & 128) !== 0)
		)
			t: for (t = e.child; t !== null; ) {
				if (t.tag === 13) t.memoizedState !== null && Ih(t, a, e);
				else if (t.tag === 19) Ih(t, a, e);
				else if (t.child !== null) {
					((t.child.return = t), (t = t.child));
					continue;
				}
				if (t === e) break t;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) break t;
					t = t.return;
				}
				((t.sibling.return = t.return), (t = t.sibling));
			}
		switch (o) {
			case "forwards":
				for (a = e.child, o = null; a !== null; )
					((t = a.alternate),
						t !== null && tr(t) === null && (o = a),
						(a = a.sibling));
				((a = o),
					a === null
						? ((o = e.child), (e.child = null))
						: ((o = a.sibling), (a.sibling = null)),
					Vu(e, !1, o, a, u, s));
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (a = null, o = e.child, e.child = null; o !== null; ) {
					if (((t = o.alternate), t !== null && tr(t) === null)) {
						e.child = o;
						break;
					}
					((t = o.sibling), (o.sibling = a), (a = o), (o = t));
				}
				Vu(e, !0, a, null, u, s);
				break;
			case "together":
				Vu(e, !1, null, null, void 0, s);
				break;
			default:
				e.memoizedState = null;
		}
		return e.child;
	}
	function Yn(t, e, a) {
		if (
			(t !== null && (e.dependencies = t.dependencies),
			(va |= e.lanes),
			(a & e.childLanes) === 0)
		)
			if (t !== null) {
				if ((Gi(t, e, a, !1), (a & e.childLanes) === 0)) return null;
			} else return null;
		if (t !== null && e.child !== t.child) throw Error(r(153));
		if (e.child !== null) {
			for (
				t = e.child, a = jn(t, t.pendingProps), e.child = a, a.return = e;
				t.sibling !== null;
			)
				((t = t.sibling),
					(a = a.sibling = jn(t, t.pendingProps)),
					(a.return = e));
			a.sibling = null;
		}
		return e.child;
	}
	function Gu(t, e) {
		return (t.lanes & e) !== 0
			? !0
			: ((t = t.dependencies), !!(t !== null && Ks(t)));
	}
	function _g(t, e, a) {
		switch (e.tag) {
			case 3:
				(ft(e, e.stateNode.containerInfo),
					ca(e, $t, t.memoizedState.cache),
					Ia());
				break;
			case 27:
			case 5:
				ze(e);
				break;
			case 4:
				ft(e, e.stateNode.containerInfo);
				break;
			case 10:
				ca(e, e.type, e.memoizedProps.value);
				break;
			case 31:
				if (e.memoizedState !== null) return ((e.flags |= 128), pu(e), null);
				break;
			case 13:
				var s = e.memoizedState;
				if (s !== null)
					return s.dehydrated !== null
						? (ma(e), (e.flags |= 128), null)
						: (a & e.child.childLanes) !== 0
							? Jh(t, e, a)
							: (ma(e), (t = Yn(t, e, a)), t !== null ? t.sibling : null);
				ma(e);
				break;
			case 19:
				var o = (t.flags & 128) !== 0;
				if (
					((s = (a & e.childLanes) !== 0),
					s || (Gi(t, e, a, !1), (s = (a & e.childLanes) !== 0)),
					o)
				) {
					if (s) return $h(t, e, a);
					e.flags |= 128;
				}
				if (
					((o = e.memoizedState),
					o !== null &&
						((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
					P(Jt, Jt.current),
					s)
				)
					break;
				return null;
			case 22:
				return ((e.lanes = 0), Gh(t, e, a, e.pendingProps));
			case 24:
				ca(e, $t, t.memoizedState.cache);
		}
		return Yn(t, e, a);
	}
	function Wh(t, e, a) {
		if (t !== null)
			if (t.memoizedProps !== e.pendingProps) te = !0;
			else {
				if (!Gu(t, a) && (e.flags & 128) === 0) return ((te = !1), _g(t, e, a));
				te = (t.flags & 131072) !== 0;
			}
		else ((te = !1), Rt && (e.flags & 1048576) !== 0 && zd(e, Nl, e.index));
		switch (((e.lanes = 0), e.tag)) {
			case 16:
				t: {
					var s = e.pendingProps;
					if (((t = ei(e.elementType)), (e.type = t), typeof t == "function"))
						Fo(t)
							? ((s = li(t, s)), (e.tag = 1), (e = kh(null, e, t, s, a)))
							: ((e.tag = 0), (e = Bu(null, e, t, s, a)));
					else {
						if (t != null) {
							var o = t.$$typeof;
							if (o === Q) {
								((e.tag = 11), (e = Qh(null, e, t, s, a)));
								break t;
							} else if (o === X) {
								((e.tag = 14), (e = Yh(null, e, t, s, a)));
								break t;
							}
						}
						throw ((e = Tt(t) || t), Error(r(306, e, "")));
					}
				}
				return e;
			case 0:
				return Bu(t, e, e.type, e.pendingProps, a);
			case 1:
				return ((s = e.type), (o = li(s, e.pendingProps)), kh(t, e, s, o, a));
			case 3:
				t: {
					if ((ft(e, e.stateNode.containerInfo), t === null))
						throw Error(r(387));
					s = e.pendingProps;
					var u = e.memoizedState;
					((o = u.element), cu(t, e), Yl(e, s, null, a));
					var p = e.memoizedState;
					if (
						((s = p.cache),
						ca(e, $t, s),
						s !== u.cache && iu(e, [$t], a, !0),
						Ql(),
						(s = p.element),
						u.isDehydrated)
					)
						if (
							((u = { element: s, isDehydrated: !1, cache: p.cache }),
							(e.updateQueue.baseState = u),
							(e.memoizedState = u),
							e.flags & 256)
						) {
							e = Fh(t, e, s, a);
							break t;
						} else if (s !== o) {
							((o = rn(Error(r(424)), e)), Ul(o), (e = Fh(t, e, s, a)));
							break t;
						} else
							for (
								t = e.stateNode.containerInfo,
									t.nodeType === 9
										? (t = t.body)
										: (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
									Zt = dn(t.firstChild),
									pe = e,
									Rt = !0,
									oa = null,
									cn = !0,
									a = Gd(e, null, s, a),
									e.child = a;
								a;
							)
								((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
					else {
						if ((Ia(), s === o)) {
							e = Yn(t, e, a);
							break t;
						}
						ge(t, e, s, a);
					}
					e = e.child;
				}
				return e;
			case 26:
				return (
					fr(t, e),
					t === null
						? (a = cm(e.type, null, e.pendingProps, null))
							? (e.memoizedState = a)
							: Rt ||
								((a = e.type),
								(t = e.pendingProps),
								(s = Mr(ot.current).createElement(a)),
								(s[me] = e),
								(s[Be] = t),
								ve(s, a, t),
								ue(s),
								(e.stateNode = s))
						: (e.memoizedState = cm(
								e.type,
								t.memoizedProps,
								e.pendingProps,
								t.memoizedState,
							)),
					null
				);
			case 27:
				return (
					ze(e),
					t === null &&
						Rt &&
						((s = e.stateNode = rm(e.type, e.pendingProps, ot.current)),
						(pe = e),
						(cn = !0),
						(o = Zt),
						wa(e.type) ? ((wc = o), (Zt = dn(s.firstChild))) : (Zt = o)),
					ge(t, e, e.pendingProps.children, a),
					fr(t, e),
					t === null && (e.flags |= 4194304),
					e.child
				);
			case 5:
				return (
					t === null &&
						Rt &&
						((o = s = Zt) &&
							((s = $g(s, e.type, e.pendingProps, cn)),
							s !== null
								? ((e.stateNode = s),
									(pe = e),
									(Zt = dn(s.firstChild)),
									(cn = !1),
									(o = !0))
								: (o = !1)),
						o || ua(e)),
					ze(e),
					(o = e.type),
					(u = e.pendingProps),
					(p = t !== null ? t.memoizedProps : null),
					(s = u.children),
					vc(o, u) ? (s = null) : p !== null && vc(o, p) && (e.flags |= 32),
					e.memoizedState !== null &&
						((o = gu(t, e, hg, null, null, a)), (os._currentValue = o)),
					fr(t, e),
					ge(t, e, s, a),
					e.child
				);
			case 6:
				return (
					t === null &&
						Rt &&
						((t = a = Zt) &&
							((a = Wg(a, e.pendingProps, cn)),
							a !== null
								? ((e.stateNode = a), (pe = e), (Zt = null), (t = !0))
								: (t = !1)),
						t || ua(e)),
					null
				);
			case 13:
				return Jh(t, e, a);
			case 4:
				return (
					ft(e, e.stateNode.containerInfo),
					(s = e.pendingProps),
					t === null ? (e.child = ai(e, null, s, a)) : ge(t, e, s, a),
					e.child
				);
			case 11:
				return Qh(t, e, e.type, e.pendingProps, a);
			case 7:
				return (ge(t, e, e.pendingProps, a), e.child);
			case 8:
				return (ge(t, e, e.pendingProps.children, a), e.child);
			case 12:
				return (ge(t, e, e.pendingProps.children, a), e.child);
			case 10:
				return (
					(s = e.pendingProps),
					ca(e, e.type, s.value),
					ge(t, e, s.children, a),
					e.child
				);
			case 9:
				return (
					(o = e.type._context),
					(s = e.pendingProps.children),
					Wa(e),
					(o = ye(o)),
					(s = s(o)),
					(e.flags |= 1),
					ge(t, e, s, a),
					e.child
				);
			case 14:
				return Yh(t, e, e.type, e.pendingProps, a);
			case 15:
				return Vh(t, e, e.type, e.pendingProps, a);
			case 19:
				return $h(t, e, a);
			case 31:
				return Eg(t, e, a);
			case 22:
				return Gh(t, e, a, e.pendingProps);
			case 24:
				return (
					Wa(e),
					(s = ye($t)),
					t === null
						? ((o = ru()),
							o === null &&
								((o = Bt),
								(u = lu()),
								(o.pooledCache = u),
								u.refCount++,
								u !== null && (o.pooledCacheLanes |= a),
								(o = u)),
							(e.memoizedState = { parent: s, cache: o }),
							uu(e),
							ca(e, $t, o))
						: ((t.lanes & a) !== 0 && (cu(t, e), Yl(e, null, null, a), Ql()),
							(o = t.memoizedState),
							(u = e.memoizedState),
							o.parent !== s
								? ((o = { parent: s, cache: s }),
									(e.memoizedState = o),
									e.lanes === 0 &&
										(e.memoizedState = e.updateQueue.baseState = o),
									ca(e, $t, s))
								: ((s = u.cache),
									ca(e, $t, s),
									s !== o.cache && iu(e, [$t], a, !0))),
					ge(t, e, e.pendingProps.children, a),
					e.child
				);
			case 29:
				throw e.pendingProps;
		}
		throw Error(r(156, e.tag));
	}
	function Vn(t) {
		t.flags |= 4;
	}
	function Xu(t, e, a, s, o) {
		if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
			if (((t.flags |= 16777216), (o & 335544128) === o))
				if (t.stateNode.complete) t.flags |= 8192;
				else if (A0()) t.flags |= 8192;
				else throw ((ni = Js), ou);
		} else t.flags &= -16777217;
	}
	function t0(t, e) {
		if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
			t.flags &= -16777217;
		else if (((t.flags |= 16777216), !pm(e)))
			if (A0()) t.flags |= 8192;
			else throw ((ni = Js), ou);
	}
	function hr(t, e) {
		(e !== null && (t.flags |= 4),
			t.flags & 16384 &&
				((e = t.tag !== 22 ? _e() : 536870912), (t.lanes |= e), (nl |= e)));
	}
	function kl(t, e) {
		if (!Rt)
			switch (t.tailMode) {
				case "hidden":
					e = t.tail;
					for (var a = null; e !== null; )
						(e.alternate !== null && (a = e), (e = e.sibling));
					a === null ? (t.tail = null) : (a.sibling = null);
					break;
				case "collapsed":
					a = t.tail;
					for (var s = null; a !== null; )
						(a.alternate !== null && (s = a), (a = a.sibling));
					s === null
						? e || t.tail === null
							? (t.tail = null)
							: (t.tail.sibling = null)
						: (s.sibling = null);
			}
	}
	function Qt(t) {
		var e = t.alternate !== null && t.alternate.child === t.child,
			a = 0,
			s = 0;
		if (e)
			for (var o = t.child; o !== null; )
				((a |= o.lanes | o.childLanes),
					(s |= o.subtreeFlags & 65011712),
					(s |= o.flags & 65011712),
					(o.return = t),
					(o = o.sibling));
		else
			for (o = t.child; o !== null; )
				((a |= o.lanes | o.childLanes),
					(s |= o.subtreeFlags),
					(s |= o.flags),
					(o.return = t),
					(o = o.sibling));
		return ((t.subtreeFlags |= s), (t.childLanes = a), e);
	}
	function wg(t, e, a) {
		var s = e.pendingProps;
		switch ((Wo(e), e.tag)) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (Qt(e), null);
			case 1:
				return (Qt(e), null);
			case 3:
				return (
					(a = e.stateNode),
					(s = null),
					t !== null && (s = t.memoizedState.cache),
					e.memoizedState.cache !== s && (e.flags |= 2048),
					qn($t),
					At(),
					a.pendingContext &&
						((a.context = a.pendingContext), (a.pendingContext = null)),
					(t === null || t.child === null) &&
						(Vi(e)
							? Vn(e)
							: t === null ||
								(t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
								((e.flags |= 1024), eu())),
					Qt(e),
					null
				);
			case 26:
				var o = e.type,
					u = e.memoizedState;
				return (
					t === null
						? (Vn(e),
							u !== null ? (Qt(e), t0(e, u)) : (Qt(e), Xu(e, o, null, s, a)))
						: u
							? u !== t.memoizedState
								? (Vn(e), Qt(e), t0(e, u))
								: (Qt(e), (e.flags &= -16777217))
							: ((t = t.memoizedProps),
								t !== s && Vn(e),
								Qt(e),
								Xu(e, o, t, s, a)),
					null
				);
			case 27:
				if (
					(De(e),
					(a = ot.current),
					(o = e.type),
					t !== null && e.stateNode != null)
				)
					t.memoizedProps !== s && Vn(e);
				else {
					if (!s) {
						if (e.stateNode === null) throw Error(r(166));
						return (Qt(e), null);
					}
					((t = I.current),
						Vi(e) ? Ld(e) : ((t = rm(o, s, a)), (e.stateNode = t), Vn(e)));
				}
				return (Qt(e), null);
			case 5:
				if ((De(e), (o = e.type), t !== null && e.stateNode != null))
					t.memoizedProps !== s && Vn(e);
				else {
					if (!s) {
						if (e.stateNode === null) throw Error(r(166));
						return (Qt(e), null);
					}
					if (((u = I.current), Vi(e))) Ld(e);
					else {
						var p = Mr(ot.current);
						switch (u) {
							case 1:
								u = p.createElementNS("http://www.w3.org/2000/svg", o);
								break;
							case 2:
								u = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
								break;
							default:
								switch (o) {
									case "svg":
										u = p.createElementNS("http://www.w3.org/2000/svg", o);
										break;
									case "math":
										u = p.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											o,
										);
										break;
									case "script":
										((u = p.createElement("div")),
											(u.innerHTML = "<script><\/script>"),
											(u = u.removeChild(u.firstChild)));
										break;
									case "select":
										((u =
											typeof s.is == "string"
												? p.createElement("select", { is: s.is })
												: p.createElement("select")),
											s.multiple
												? (u.multiple = !0)
												: s.size && (u.size = s.size));
										break;
									default:
										u =
											typeof s.is == "string"
												? p.createElement(o, { is: s.is })
												: p.createElement(o);
								}
						}
						((u[me] = e), (u[Be] = s));
						t: for (p = e.child; p !== null; ) {
							if (p.tag === 5 || p.tag === 6) u.appendChild(p.stateNode);
							else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
								((p.child.return = p), (p = p.child));
								continue;
							}
							if (p === e) break t;
							for (; p.sibling === null; ) {
								if (p.return === null || p.return === e) break t;
								p = p.return;
							}
							((p.sibling.return = p.return), (p = p.sibling));
						}
						e.stateNode = u;
						t: switch ((ve(u, o, s), o)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								s = !!s.autoFocus;
								break t;
							case "img":
								s = !0;
								break t;
							default:
								s = !1;
						}
						s && Vn(e);
					}
				}
				return (
					Qt(e),
					Xu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
					null
				);
			case 6:
				if (t && e.stateNode != null) t.memoizedProps !== s && Vn(e);
				else {
					if (typeof s != "string" && e.stateNode === null) throw Error(r(166));
					if (((t = ot.current), Vi(e))) {
						if (
							((t = e.stateNode),
							(a = e.memoizedProps),
							(s = null),
							(o = pe),
							o !== null)
						)
							switch (o.tag) {
								case 27:
								case 5:
									s = o.memoizedProps;
							}
						((t[me] = e),
							(t = !!(
								t.nodeValue === a ||
								(s !== null && s.suppressHydrationWarning === !0) ||
								J0(t.nodeValue, a)
							)),
							t || ua(e, !0));
					} else
						((t = Mr(t).createTextNode(s)), (t[me] = e), (e.stateNode = t));
				}
				return (Qt(e), null);
			case 31:
				if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
					if (((s = Vi(e)), a !== null)) {
						if (t === null) {
							if (!s) throw Error(r(318));
							if (
								((t = e.memoizedState),
								(t = t !== null ? t.dehydrated : null),
								!t)
							)
								throw Error(r(557));
							t[me] = e;
						} else
							(Ia(),
								(e.flags & 128) === 0 && (e.memoizedState = null),
								(e.flags |= 4));
						(Qt(e), (t = !1));
					} else
						((a = eu()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = a),
							(t = !0));
					if (!t) return e.flags & 256 ? (Fe(e), e) : (Fe(e), null);
					if ((e.flags & 128) !== 0) throw Error(r(558));
				}
				return (Qt(e), null);
			case 13:
				if (
					((s = e.memoizedState),
					t === null ||
						(t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (((o = Vi(e)), s !== null && s.dehydrated !== null)) {
						if (t === null) {
							if (!o) throw Error(r(318));
							if (
								((o = e.memoizedState),
								(o = o !== null ? o.dehydrated : null),
								!o)
							)
								throw Error(r(317));
							o[me] = e;
						} else
							(Ia(),
								(e.flags & 128) === 0 && (e.memoizedState = null),
								(e.flags |= 4));
						(Qt(e), (o = !1));
					} else
						((o = eu()),
							t !== null &&
								t.memoizedState !== null &&
								(t.memoizedState.hydrationErrors = o),
							(o = !0));
					if (!o) return e.flags & 256 ? (Fe(e), e) : (Fe(e), null);
				}
				return (
					Fe(e),
					(e.flags & 128) !== 0
						? ((e.lanes = a), e)
						: ((a = s !== null),
							(t = t !== null && t.memoizedState !== null),
							a &&
								((s = e.child),
								(o = null),
								s.alternate !== null &&
									s.alternate.memoizedState !== null &&
									s.alternate.memoizedState.cachePool !== null &&
									(o = s.alternate.memoizedState.cachePool.pool),
								(u = null),
								s.memoizedState !== null &&
									s.memoizedState.cachePool !== null &&
									(u = s.memoizedState.cachePool.pool),
								u !== o && (s.flags |= 2048)),
							a !== t && a && (e.child.flags |= 8192),
							hr(e, e.updateQueue),
							Qt(e),
							null)
				);
			case 4:
				return (At(), t === null && hc(e.stateNode.containerInfo), Qt(e), null);
			case 10:
				return (qn(e.type), Qt(e), null);
			case 19:
				if ((G(Jt), (s = e.memoizedState), s === null)) return (Qt(e), null);
				if (((o = (e.flags & 128) !== 0), (u = s.rendering), u === null))
					if (o) kl(s, !1);
					else {
						if (kt !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = e.child; t !== null; ) {
								if (((u = tr(t)), u !== null)) {
									for (
										e.flags |= 128,
											kl(s, !1),
											t = u.updateQueue,
											e.updateQueue = t,
											hr(e, t),
											e.subtreeFlags = 0,
											t = a,
											a = e.child;
										a !== null;
									)
										(Md(a, t), (a = a.sibling));
									return (
										P(Jt, (Jt.current & 1) | 2),
										Rt && Bn(e, s.treeForkCount),
										e.child
									);
								}
								t = t.sibling;
							}
						s.tail !== null &&
							he() > vr &&
							((e.flags |= 128), (o = !0), kl(s, !1), (e.lanes = 4194304));
					}
				else {
					if (!o)
						if (((t = tr(u)), t !== null)) {
							if (
								((e.flags |= 128),
								(o = !0),
								(t = t.updateQueue),
								(e.updateQueue = t),
								hr(e, t),
								kl(s, !0),
								s.tail === null &&
									s.tailMode === "hidden" &&
									!u.alternate &&
									!Rt)
							)
								return (Qt(e), null);
						} else
							2 * he() - s.renderingStartTime > vr &&
								a !== 536870912 &&
								((e.flags |= 128), (o = !0), kl(s, !1), (e.lanes = 4194304));
					s.isBackwards
						? ((u.sibling = e.child), (e.child = u))
						: ((t = s.last),
							t !== null ? (t.sibling = u) : (e.child = u),
							(s.last = u));
				}
				return s.tail !== null
					? ((t = s.tail),
						(s.rendering = t),
						(s.tail = t.sibling),
						(s.renderingStartTime = he()),
						(t.sibling = null),
						(a = Jt.current),
						P(Jt, o ? (a & 1) | 2 : a & 1),
						Rt && Bn(e, s.treeForkCount),
						t)
					: (Qt(e), null);
			case 22:
			case 23:
				return (
					Fe(e),
					mu(),
					(s = e.memoizedState !== null),
					t !== null
						? (t.memoizedState !== null) !== s && (e.flags |= 8192)
						: s && (e.flags |= 8192),
					s
						? (a & 536870912) !== 0 &&
							(e.flags & 128) === 0 &&
							(Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
						: Qt(e),
					(a = e.updateQueue),
					a !== null && hr(e, a.retryQueue),
					(a = null),
					t !== null &&
						t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					(s = null),
					e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(s = e.memoizedState.cachePool.pool),
					s !== a && (e.flags |= 2048),
					t !== null && G(ti),
					null
				);
			case 24:
				return (
					(a = null),
					t !== null && (a = t.memoizedState.cache),
					e.memoizedState.cache !== a && (e.flags |= 2048),
					qn($t),
					Qt(e),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(r(156, e.tag));
	}
	function Tg(t, e) {
		switch ((Wo(e), e.tag)) {
			case 1:
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 3:
				return (
					qn($t),
					At(),
					(t = e.flags),
					(t & 65536) !== 0 && (t & 128) === 0
						? ((e.flags = (t & -65537) | 128), e)
						: null
				);
			case 26:
			case 27:
			case 5:
				return (De(e), null);
			case 31:
				if (e.memoizedState !== null) {
					if ((Fe(e), e.alternate === null)) throw Error(r(340));
					Ia();
				}
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 13:
				if (
					(Fe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
				) {
					if (e.alternate === null) throw Error(r(340));
					Ia();
				}
				return (
					(t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 19:
				return (G(Jt), null);
			case 4:
				return (At(), null);
			case 10:
				return (qn(e.type), null);
			case 22:
			case 23:
				return (
					Fe(e),
					mu(),
					t !== null && G(ti),
					(t = e.flags),
					t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
				);
			case 24:
				return (qn($t), null);
			case 25:
				return null;
			default:
				return null;
		}
	}
	function e0(t, e) {
		switch ((Wo(e), e.tag)) {
			case 3:
				(qn($t), At());
				break;
			case 26:
			case 27:
			case 5:
				De(e);
				break;
			case 4:
				At();
				break;
			case 31:
				e.memoizedState !== null && Fe(e);
				break;
			case 13:
				Fe(e);
				break;
			case 19:
				G(Jt);
				break;
			case 10:
				qn(e.type);
				break;
			case 22:
			case 23:
				(Fe(e), mu(), t !== null && G(ti));
				break;
			case 24:
				qn($t);
		}
	}
	function Fl(t, e) {
		try {
			var a = e.updateQueue,
				s = a !== null ? a.lastEffect : null;
			if (s !== null) {
				var o = s.next;
				a = o;
				do {
					if ((a.tag & t) === t) {
						s = void 0;
						var u = a.create,
							p = a.inst;
						((s = u()), (p.destroy = s));
					}
					a = a.next;
				} while (a !== o);
			}
		} catch (S) {
			Lt(e, e.return, S);
		}
	}
	function ya(t, e, a) {
		try {
			var s = e.updateQueue,
				o = s !== null ? s.lastEffect : null;
			if (o !== null) {
				var u = o.next;
				s = u;
				do {
					if ((s.tag & t) === t) {
						var p = s.inst,
							S = p.destroy;
						if (S !== void 0) {
							((p.destroy = void 0), (o = e));
							var A = a,
								U = S;
							try {
								U();
							} catch (Z) {
								Lt(o, A, Z);
							}
						}
					}
					s = s.next;
				} while (s !== u);
			}
		} catch (Z) {
			Lt(e, e.return, Z);
		}
	}
	function n0(t) {
		var e = t.updateQueue;
		if (e !== null) {
			var a = t.stateNode;
			try {
				Kd(e, a);
			} catch (s) {
				Lt(t, t.return, s);
			}
		}
	}
	function a0(t, e, a) {
		((a.props = li(t.type, t.memoizedProps)), (a.state = t.memoizedState));
		try {
			a.componentWillUnmount();
		} catch (s) {
			Lt(t, e, s);
		}
	}
	function Jl(t, e) {
		try {
			var a = t.ref;
			if (a !== null) {
				switch (t.tag) {
					case 26:
					case 27:
					case 5:
						var s = t.stateNode;
						break;
					case 30:
						s = t.stateNode;
						break;
					default:
						s = t.stateNode;
				}
				typeof a == "function" ? (t.refCleanup = a(s)) : (a.current = s);
			}
		} catch (o) {
			Lt(t, e, o);
		}
	}
	function An(t, e) {
		var a = t.ref,
			s = t.refCleanup;
		if (a !== null)
			if (typeof s == "function")
				try {
					s();
				} catch (o) {
					Lt(t, e, o);
				} finally {
					((t.refCleanup = null),
						(t = t.alternate),
						t != null && (t.refCleanup = null));
				}
			else if (typeof a == "function")
				try {
					a(null);
				} catch (o) {
					Lt(t, e, o);
				}
			else a.current = null;
	}
	function i0(t) {
		var e = t.type,
			a = t.memoizedProps,
			s = t.stateNode;
		try {
			t: switch (e) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					a.autoFocus && s.focus();
					break t;
				case "img":
					a.src ? (s.src = a.src) : a.srcSet && (s.srcset = a.srcSet);
			}
		} catch (o) {
			Lt(t, t.return, o);
		}
	}
	function Ku(t, e, a) {
		try {
			var s = t.stateNode;
			(Kg(s, t.type, a, e), (s[Be] = e));
		} catch (o) {
			Lt(t, t.return, o);
		}
	}
	function l0(t) {
		return (
			t.tag === 5 ||
			t.tag === 3 ||
			t.tag === 26 ||
			(t.tag === 27 && wa(t.type)) ||
			t.tag === 4
		);
	}
	function Pu(t) {
		t: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || l0(t.return)) return null;
				t = t.return;
			}
			for (
				t.sibling.return = t.return, t = t.sibling;
				t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
			) {
				if (
					(t.tag === 27 && wa(t.type)) ||
					t.flags & 2 ||
					t.child === null ||
					t.tag === 4
				)
					continue t;
				((t.child.return = t), (t = t.child));
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function ku(t, e, a) {
		var s = t.tag;
		if (s === 5 || s === 6)
			((t = t.stateNode),
				e
					? (a.nodeType === 9
							? a.body
							: a.nodeName === "HTML"
								? a.ownerDocument.body
								: a
						).insertBefore(t, e)
					: ((e =
							a.nodeType === 9
								? a.body
								: a.nodeName === "HTML"
									? a.ownerDocument.body
									: a),
						e.appendChild(t),
						(a = a._reactRootContainer),
						a != null || e.onclick !== null || (e.onclick = Nn)));
		else if (
			s !== 4 &&
			(s === 27 && wa(t.type) && ((a = t.stateNode), (e = null)),
			(t = t.child),
			t !== null)
		)
			for (ku(t, e, a), t = t.sibling; t !== null; )
				(ku(t, e, a), (t = t.sibling));
	}
	function mr(t, e, a) {
		var s = t.tag;
		if (s === 5 || s === 6)
			((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
		else if (
			s !== 4 &&
			(s === 27 && wa(t.type) && (a = t.stateNode), (t = t.child), t !== null)
		)
			for (mr(t, e, a), t = t.sibling; t !== null; )
				(mr(t, e, a), (t = t.sibling));
	}
	function s0(t) {
		var e = t.stateNode,
			a = t.memoizedProps;
		try {
			for (var s = t.type, o = e.attributes; o.length; )
				e.removeAttributeNode(o[0]);
			(ve(e, s, a), (e[me] = t), (e[Be] = a));
		} catch (u) {
			Lt(t, t.return, u);
		}
	}
	var Gn = !1,
		ee = !1,
		Fu = !1,
		r0 = typeof WeakSet == "function" ? WeakSet : Set,
		ce = null;
	function Rg(t, e) {
		if (((t = t.containerInfo), (yc = Ur), (t = bd(t)), Yo(t))) {
			if ("selectionStart" in t)
				var a = { start: t.selectionStart, end: t.selectionEnd };
			else
				t: {
					a = ((a = t.ownerDocument) && a.defaultView) || window;
					var s = a.getSelection && a.getSelection();
					if (s && s.rangeCount !== 0) {
						a = s.anchorNode;
						var o = s.anchorOffset,
							u = s.focusNode;
						s = s.focusOffset;
						try {
							(a.nodeType, u.nodeType);
						} catch {
							a = null;
							break t;
						}
						var p = 0,
							S = -1,
							A = -1,
							U = 0,
							Z = 0,
							K = t,
							j = null;
						e: for (;;) {
							for (
								var B;
								K !== a || (o !== 0 && K.nodeType !== 3) || (S = p + o),
									K !== u || (s !== 0 && K.nodeType !== 3) || (A = p + s),
									K.nodeType === 3 && (p += K.nodeValue.length),
									(B = K.firstChild) !== null;
							)
								((j = K), (K = B));
							for (;;) {
								if (K === t) break e;
								if (
									(j === a && ++U === o && (S = p),
									j === u && ++Z === s && (A = p),
									(B = K.nextSibling) !== null)
								)
									break;
								((K = j), (j = K.parentNode));
							}
							K = B;
						}
						a = S === -1 || A === -1 ? null : { start: S, end: A };
					} else a = null;
				}
			a = a || { start: 0, end: 0 };
		} else a = null;
		for (
			gc = { focusedElem: t, selectionRange: a }, Ur = !1, ce = e;
			ce !== null;
		)
			if (
				((e = ce), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
			)
				((t.return = e), (ce = t));
			else
				for (; ce !== null; ) {
					switch (((e = ce), (u = e.alternate), (t = e.flags), e.tag)) {
						case 0:
							if (
								(t & 4) !== 0 &&
								((t = e.updateQueue),
								(t = t !== null ? t.events : null),
								t !== null)
							)
								for (a = 0; a < t.length; a++)
									((o = t[a]), (o.ref.impl = o.nextImpl));
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((t & 1024) !== 0 && u !== null) {
								((t = void 0),
									(a = e),
									(o = u.memoizedProps),
									(u = u.memoizedState),
									(s = a.stateNode));
								try {
									var nt = li(a.type, o);
									((t = s.getSnapshotBeforeUpdate(nt, u)),
										(s.__reactInternalSnapshotBeforeUpdate = t));
								} catch (ut) {
									Lt(a, a.return, ut);
								}
							}
							break;
						case 3:
							if ((t & 1024) !== 0) {
								if (
									((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
								)
									Sc(t);
								else if (a === 1)
									switch (t.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											Sc(t);
											break;
										default:
											t.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((t & 1024) !== 0) throw Error(r(163));
					}
					if (((t = e.sibling), t !== null)) {
						((t.return = e.return), (ce = t));
						break;
					}
					ce = e.return;
				}
	}
	function o0(t, e, a) {
		var s = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				(Kn(t, a), s & 4 && Fl(5, a));
				break;
			case 1:
				if ((Kn(t, a), s & 4))
					if (((t = a.stateNode), e === null))
						try {
							t.componentDidMount();
						} catch (p) {
							Lt(a, a.return, p);
						}
					else {
						var o = li(a.type, e.memoizedProps);
						e = e.memoizedState;
						try {
							t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
						} catch (p) {
							Lt(a, a.return, p);
						}
					}
				(s & 64 && n0(a), s & 512 && Jl(a, a.return));
				break;
			case 3:
				if ((Kn(t, a), s & 64 && ((t = a.updateQueue), t !== null))) {
					if (((e = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								e = a.child.stateNode;
								break;
							case 1:
								e = a.child.stateNode;
						}
					try {
						Kd(t, e);
					} catch (p) {
						Lt(a, a.return, p);
					}
				}
				break;
			case 27:
				e === null && s & 4 && s0(a);
			case 26:
			case 5:
				(Kn(t, a), e === null && s & 4 && i0(a), s & 512 && Jl(a, a.return));
				break;
			case 12:
				Kn(t, a);
				break;
			case 31:
				(Kn(t, a), s & 4 && f0(t, a));
				break;
			case 13:
				(Kn(t, a),
					s & 4 && d0(t, a),
					s & 64 &&
						((t = a.memoizedState),
						t !== null &&
							((t = t.dehydrated),
							t !== null && ((a = Ng.bind(null, a)), tv(t, a)))));
				break;
			case 22:
				if (((s = a.memoizedState !== null || Gn), !s)) {
					((e = (e !== null && e.memoizedState !== null) || ee), (o = Gn));
					var u = ee;
					((Gn = s),
						(ee = e) && !u ? Pn(t, a, (a.subtreeFlags & 8772) !== 0) : Kn(t, a),
						(Gn = o),
						(ee = u));
				}
				break;
			case 30:
				break;
			default:
				Kn(t, a);
		}
	}
	function u0(t) {
		var e = t.alternate;
		(e !== null && ((t.alternate = null), u0(e)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 && ((e = t.stateNode), e !== null && Ro(e)),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null));
	}
	var Vt = null,
		qe = !1;
	function Xn(t, e, a) {
		for (a = a.child; a !== null; ) (c0(t, e, a), (a = a.sibling));
	}
	function c0(t, e, a) {
		if (Ae && typeof Ae.onCommitFiberUnmount == "function")
			try {
				Ae.onCommitFiberUnmount(Ya, a);
			} catch {}
		switch (a.tag) {
			case 26:
				(ee || An(a, e),
					Xn(t, e, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
				break;
			case 27:
				ee || An(a, e);
				var s = Vt,
					o = qe;
				(wa(a.type) && ((Vt = a.stateNode), (qe = !1)),
					Xn(t, e, a),
					ls(a.stateNode),
					(Vt = s),
					(qe = o));
				break;
			case 5:
				ee || An(a, e);
			case 6:
				if (
					((s = Vt),
					(o = qe),
					(Vt = null),
					Xn(t, e, a),
					(Vt = s),
					(qe = o),
					Vt !== null)
				)
					if (qe)
						try {
							(Vt.nodeType === 9
								? Vt.body
								: Vt.nodeName === "HTML"
									? Vt.ownerDocument.body
									: Vt
							).removeChild(a.stateNode);
						} catch (u) {
							Lt(a, e, u);
						}
					else
						try {
							Vt.removeChild(a.stateNode);
						} catch (u) {
							Lt(a, e, u);
						}
				break;
			case 18:
				Vt !== null &&
					(qe
						? ((t = Vt),
							nm(
								t.nodeType === 9
									? t.body
									: t.nodeName === "HTML"
										? t.ownerDocument.body
										: t,
								a.stateNode,
							),
							cl(t))
						: nm(Vt, a.stateNode));
				break;
			case 4:
				((s = Vt),
					(o = qe),
					(Vt = a.stateNode.containerInfo),
					(qe = !0),
					Xn(t, e, a),
					(Vt = s),
					(qe = o));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				(ya(2, a, e), ee || ya(4, a, e), Xn(t, e, a));
				break;
			case 1:
				(ee ||
					(An(a, e),
					(s = a.stateNode),
					typeof s.componentWillUnmount == "function" && a0(a, e, s)),
					Xn(t, e, a));
				break;
			case 21:
				Xn(t, e, a);
				break;
			case 22:
				((ee = (s = ee) || a.memoizedState !== null), Xn(t, e, a), (ee = s));
				break;
			default:
				Xn(t, e, a);
		}
	}
	function f0(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
		) {
			t = t.dehydrated;
			try {
				cl(t);
			} catch (a) {
				Lt(e, e.return, a);
			}
		}
	}
	function d0(t, e) {
		if (
			e.memoizedState === null &&
			((t = e.alternate),
			t !== null &&
				((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
		)
			try {
				cl(t);
			} catch (a) {
				Lt(e, e.return, a);
			}
	}
	function Ag(t) {
		switch (t.tag) {
			case 31:
			case 13:
			case 19:
				var e = t.stateNode;
				return (e === null && (e = t.stateNode = new r0()), e);
			case 22:
				return (
					(t = t.stateNode),
					(e = t._retryCache),
					e === null && (e = t._retryCache = new r0()),
					e
				);
			default:
				throw Error(r(435, t.tag));
		}
	}
	function pr(t, e) {
		var a = Ag(t);
		e.forEach(function (s) {
			if (!a.has(s)) {
				a.add(s);
				var o = Ug.bind(null, t, s);
				s.then(o, o);
			}
		});
	}
	function Ze(t, e) {
		var a = e.deletions;
		if (a !== null)
			for (var s = 0; s < a.length; s++) {
				var o = a[s],
					u = t,
					p = e,
					S = p;
				t: for (; S !== null; ) {
					switch (S.tag) {
						case 27:
							if (wa(S.type)) {
								((Vt = S.stateNode), (qe = !1));
								break t;
							}
							break;
						case 5:
							((Vt = S.stateNode), (qe = !1));
							break t;
						case 3:
						case 4:
							((Vt = S.stateNode.containerInfo), (qe = !0));
							break t;
					}
					S = S.return;
				}
				if (Vt === null) throw Error(r(160));
				(c0(u, p, o),
					(Vt = null),
					(qe = !1),
					(u = o.alternate),
					u !== null && (u.return = null),
					(o.return = null));
			}
		if (e.subtreeFlags & 13886)
			for (e = e.child; e !== null; ) (h0(e, t), (e = e.sibling));
	}
	var bn = null;
	function h0(t, e) {
		var a = t.alternate,
			s = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				(Ze(e, t),
					Qe(t),
					s & 4 && (ya(3, t, t.return), Fl(3, t), ya(5, t, t.return)));
				break;
			case 1:
				(Ze(e, t),
					Qe(t),
					s & 512 && (ee || a === null || An(a, a.return)),
					s & 64 &&
						Gn &&
						((t = t.updateQueue),
						t !== null &&
							((s = t.callbacks),
							s !== null &&
								((a = t.shared.hiddenCallbacks),
								(t.shared.hiddenCallbacks = a === null ? s : a.concat(s))))));
				break;
			case 26:
				var o = bn;
				if (
					(Ze(e, t),
					Qe(t),
					s & 512 && (ee || a === null || An(a, a.return)),
					s & 4)
				) {
					var u = a !== null ? a.memoizedState : null;
					if (((s = t.memoizedState), a === null))
						if (s === null)
							if (t.stateNode === null) {
								t: {
									((s = t.type),
										(a = t.memoizedProps),
										(o = o.ownerDocument || o));
									e: switch (s) {
										case "title":
											((u = o.getElementsByTagName("title")[0]),
												(!u ||
													u[wl] ||
													u[me] ||
													u.namespaceURI === "http://www.w3.org/2000/svg" ||
													u.hasAttribute("itemprop")) &&
													((u = o.createElement(s)),
													o.head.insertBefore(
														u,
														o.querySelector("head > title"),
													)),
												ve(u, s, a),
												(u[me] = t),
												ue(u),
												(s = u));
											break t;
										case "link":
											var p = hm("link", "href", o).get(s + (a.href || ""));
											if (p) {
												for (var S = 0; S < p.length; S++)
													if (
														((u = p[S]),
														u.getAttribute("href") ===
															(a.href == null || a.href === ""
																? null
																: a.href) &&
															u.getAttribute("rel") ===
																(a.rel == null ? null : a.rel) &&
															u.getAttribute("title") ===
																(a.title == null ? null : a.title) &&
															u.getAttribute("crossorigin") ===
																(a.crossOrigin == null ? null : a.crossOrigin))
													) {
														p.splice(S, 1);
														break e;
													}
											}
											((u = o.createElement(s)),
												ve(u, s, a),
												o.head.appendChild(u));
											break;
										case "meta":
											if (
												(p = hm("meta", "content", o).get(
													s + (a.content || ""),
												))
											) {
												for (S = 0; S < p.length; S++)
													if (
														((u = p[S]),
														u.getAttribute("content") ===
															(a.content == null ? null : "" + a.content) &&
															u.getAttribute("name") ===
																(a.name == null ? null : a.name) &&
															u.getAttribute("property") ===
																(a.property == null ? null : a.property) &&
															u.getAttribute("http-equiv") ===
																(a.httpEquiv == null ? null : a.httpEquiv) &&
															u.getAttribute("charset") ===
																(a.charSet == null ? null : a.charSet))
													) {
														p.splice(S, 1);
														break e;
													}
											}
											((u = o.createElement(s)),
												ve(u, s, a),
												o.head.appendChild(u));
											break;
										default:
											throw Error(r(468, s));
									}
									((u[me] = t), ue(u), (s = u));
								}
								t.stateNode = s;
							} else mm(o, t.type, t.stateNode);
						else t.stateNode = dm(o, s, t.memoizedProps);
					else
						u !== s
							? (u === null
									? a.stateNode !== null &&
										((a = a.stateNode), a.parentNode.removeChild(a))
									: u.count--,
								s === null
									? mm(o, t.type, t.stateNode)
									: dm(o, s, t.memoizedProps))
							: s === null &&
								t.stateNode !== null &&
								Ku(t, t.memoizedProps, a.memoizedProps);
				}
				break;
			case 27:
				(Ze(e, t),
					Qe(t),
					s & 512 && (ee || a === null || An(a, a.return)),
					a !== null && s & 4 && Ku(t, t.memoizedProps, a.memoizedProps));
				break;
			case 5:
				if (
					(Ze(e, t),
					Qe(t),
					s & 512 && (ee || a === null || An(a, a.return)),
					t.flags & 32)
				) {
					o = t.stateNode;
					try {
						Li(o, "");
					} catch (nt) {
						Lt(t, t.return, nt);
					}
				}
				(s & 4 &&
					t.stateNode != null &&
					((o = t.memoizedProps), Ku(t, o, a !== null ? a.memoizedProps : o)),
					s & 1024 && (Fu = !0));
				break;
			case 6:
				if ((Ze(e, t), Qe(t), s & 4)) {
					if (t.stateNode === null) throw Error(r(162));
					((s = t.memoizedProps), (a = t.stateNode));
					try {
						a.nodeValue = s;
					} catch (nt) {
						Lt(t, t.return, nt);
					}
				}
				break;
			case 3:
				if (
					((zr = null),
					(o = bn),
					(bn = Or(e.containerInfo)),
					Ze(e, t),
					(bn = o),
					Qe(t),
					s & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						cl(e.containerInfo);
					} catch (nt) {
						Lt(t, t.return, nt);
					}
				Fu && ((Fu = !1), m0(t));
				break;
			case 4:
				((s = bn),
					(bn = Or(t.stateNode.containerInfo)),
					Ze(e, t),
					Qe(t),
					(bn = s));
				break;
			case 12:
				(Ze(e, t), Qe(t));
				break;
			case 31:
				(Ze(e, t),
					Qe(t),
					s & 4 &&
						((s = t.updateQueue),
						s !== null && ((t.updateQueue = null), pr(t, s))));
				break;
			case 13:
				(Ze(e, t),
					Qe(t),
					t.child.flags & 8192 &&
						(t.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(gr = he()),
					s & 4 &&
						((s = t.updateQueue),
						s !== null && ((t.updateQueue = null), pr(t, s))));
				break;
			case 22:
				o = t.memoizedState !== null;
				var A = a !== null && a.memoizedState !== null,
					U = Gn,
					Z = ee;
				if (
					((Gn = U || o),
					(ee = Z || A),
					Ze(e, t),
					(ee = Z),
					(Gn = U),
					Qe(t),
					s & 8192)
				)
					t: for (
						e = t.stateNode,
							e._visibility = o ? e._visibility & -2 : e._visibility | 1,
							o && (a === null || A || Gn || ee || si(t)),
							a = null,
							e = t;
						;
					) {
						if (e.tag === 5 || e.tag === 26) {
							if (a === null) {
								A = a = e;
								try {
									if (((u = A.stateNode), o))
										((p = u.style),
											typeof p.setProperty == "function"
												? p.setProperty("display", "none", "important")
												: (p.display = "none"));
									else {
										S = A.stateNode;
										var K = A.memoizedProps.style,
											j =
												K != null && K.hasOwnProperty("display")
													? K.display
													: null;
										S.style.display =
											j == null || typeof j == "boolean" ? "" : ("" + j).trim();
									}
								} catch (nt) {
									Lt(A, A.return, nt);
								}
							}
						} else if (e.tag === 6) {
							if (a === null) {
								A = e;
								try {
									A.stateNode.nodeValue = o ? "" : A.memoizedProps;
								} catch (nt) {
									Lt(A, A.return, nt);
								}
							}
						} else if (e.tag === 18) {
							if (a === null) {
								A = e;
								try {
									var B = A.stateNode;
									o ? am(B, !0) : am(A.stateNode, !1);
								} catch (nt) {
									Lt(A, A.return, nt);
								}
							}
						} else if (
							((e.tag !== 22 && e.tag !== 23) ||
								e.memoizedState === null ||
								e === t) &&
							e.child !== null
						) {
							((e.child.return = e), (e = e.child));
							continue;
						}
						if (e === t) break t;
						for (; e.sibling === null; ) {
							if (e.return === null || e.return === t) break t;
							(a === e && (a = null), (e = e.return));
						}
						(a === e && (a = null),
							(e.sibling.return = e.return),
							(e = e.sibling));
					}
				s & 4 &&
					((s = t.updateQueue),
					s !== null &&
						((a = s.retryQueue),
						a !== null && ((s.retryQueue = null), pr(t, a))));
				break;
			case 19:
				(Ze(e, t),
					Qe(t),
					s & 4 &&
						((s = t.updateQueue),
						s !== null && ((t.updateQueue = null), pr(t, s))));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				(Ze(e, t), Qe(t));
		}
	}
	function Qe(t) {
		var e = t.flags;
		if (e & 2) {
			try {
				for (var a, s = t.return; s !== null; ) {
					if (l0(s)) {
						a = s;
						break;
					}
					s = s.return;
				}
				if (a == null) throw Error(r(160));
				switch (a.tag) {
					case 27:
						var o = a.stateNode,
							u = Pu(t);
						mr(t, u, o);
						break;
					case 5:
						var p = a.stateNode;
						a.flags & 32 && (Li(p, ""), (a.flags &= -33));
						var S = Pu(t);
						mr(t, S, p);
						break;
					case 3:
					case 4:
						var A = a.stateNode.containerInfo,
							U = Pu(t);
						ku(t, U, A);
						break;
					default:
						throw Error(r(161));
				}
			} catch (Z) {
				Lt(t, t.return, Z);
			}
			t.flags &= -3;
		}
		e & 4096 && (t.flags &= -4097);
	}
	function m0(t) {
		if (t.subtreeFlags & 1024)
			for (t = t.child; t !== null; ) {
				var e = t;
				(m0(e),
					e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
					(t = t.sibling));
			}
	}
	function Kn(t, e) {
		if (e.subtreeFlags & 8772)
			for (e = e.child; e !== null; ) (o0(t, e.alternate, e), (e = e.sibling));
	}
	function si(t) {
		for (t = t.child; t !== null; ) {
			var e = t;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					(ya(4, e, e.return), si(e));
					break;
				case 1:
					An(e, e.return);
					var a = e.stateNode;
					(typeof a.componentWillUnmount == "function" && a0(e, e.return, a),
						si(e));
					break;
				case 27:
					ls(e.stateNode);
				case 26:
				case 5:
					(An(e, e.return), si(e));
					break;
				case 22:
					e.memoizedState === null && si(e);
					break;
				case 30:
					si(e);
					break;
				default:
					si(e);
			}
			t = t.sibling;
		}
	}
	function Pn(t, e, a) {
		for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
			var s = e.alternate,
				o = t,
				u = e,
				p = u.flags;
			switch (u.tag) {
				case 0:
				case 11:
				case 15:
					(Pn(o, u, a), Fl(4, u));
					break;
				case 1:
					if (
						(Pn(o, u, a),
						(s = u),
						(o = s.stateNode),
						typeof o.componentDidMount == "function")
					)
						try {
							o.componentDidMount();
						} catch (U) {
							Lt(s, s.return, U);
						}
					if (((s = u), (o = s.updateQueue), o !== null)) {
						var S = s.stateNode;
						try {
							var A = o.shared.hiddenCallbacks;
							if (A !== null)
								for (o.shared.hiddenCallbacks = null, o = 0; o < A.length; o++)
									Xd(A[o], S);
						} catch (U) {
							Lt(s, s.return, U);
						}
					}
					(a && p & 64 && n0(u), Jl(u, u.return));
					break;
				case 27:
					s0(u);
				case 26:
				case 5:
					(Pn(o, u, a), a && s === null && p & 4 && i0(u), Jl(u, u.return));
					break;
				case 12:
					Pn(o, u, a);
					break;
				case 31:
					(Pn(o, u, a), a && p & 4 && f0(o, u));
					break;
				case 13:
					(Pn(o, u, a), a && p & 4 && d0(o, u));
					break;
				case 22:
					(u.memoizedState === null && Pn(o, u, a), Jl(u, u.return));
					break;
				case 30:
					break;
				default:
					Pn(o, u, a);
			}
			e = e.sibling;
		}
	}
	function Ju(t, e) {
		var a = null;
		(t !== null &&
			t.memoizedState !== null &&
			t.memoizedState.cachePool !== null &&
			(a = t.memoizedState.cachePool.pool),
			(t = null),
			e.memoizedState !== null &&
				e.memoizedState.cachePool !== null &&
				(t = e.memoizedState.cachePool.pool),
			t !== a && (t != null && t.refCount++, a != null && jl(a)));
	}
	function Iu(t, e) {
		((t = null),
			e.alternate !== null && (t = e.alternate.memoizedState.cache),
			(e = e.memoizedState.cache),
			e !== t && (e.refCount++, t != null && jl(t)));
	}
	function Sn(t, e, a, s) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) (p0(t, e, a, s), (e = e.sibling));
	}
	function p0(t, e, a, s) {
		var o = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				(Sn(t, e, a, s), o & 2048 && Fl(9, e));
				break;
			case 1:
				Sn(t, e, a, s);
				break;
			case 3:
				(Sn(t, e, a, s),
					o & 2048 &&
						((t = null),
						e.alternate !== null && (t = e.alternate.memoizedState.cache),
						(e = e.memoizedState.cache),
						e !== t && (e.refCount++, t != null && jl(t))));
				break;
			case 12:
				if (o & 2048) {
					(Sn(t, e, a, s), (t = e.stateNode));
					try {
						var u = e.memoizedProps,
							p = u.id,
							S = u.onPostCommit;
						typeof S == "function" &&
							S(
								p,
								e.alternate === null ? "mount" : "update",
								t.passiveEffectDuration,
								-0,
							);
					} catch (A) {
						Lt(e, e.return, A);
					}
				} else Sn(t, e, a, s);
				break;
			case 31:
				Sn(t, e, a, s);
				break;
			case 13:
				Sn(t, e, a, s);
				break;
			case 23:
				break;
			case 22:
				((u = e.stateNode),
					(p = e.alternate),
					e.memoizedState !== null
						? u._visibility & 2
							? Sn(t, e, a, s)
							: Il(t, e)
						: u._visibility & 2
							? Sn(t, e, a, s)
							: ((u._visibility |= 2),
								Wi(t, e, a, s, (e.subtreeFlags & 10256) !== 0 || !1)),
					o & 2048 && Ju(p, e));
				break;
			case 24:
				(Sn(t, e, a, s), o & 2048 && Iu(e.alternate, e));
				break;
			default:
				Sn(t, e, a, s);
		}
	}
	function Wi(t, e, a, s, o) {
		for (
			o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
			e !== null;
		) {
			var u = t,
				p = e,
				S = a,
				A = s,
				U = p.flags;
			switch (p.tag) {
				case 0:
				case 11:
				case 15:
					(Wi(u, p, S, A, o), Fl(8, p));
					break;
				case 23:
					break;
				case 22:
					var Z = p.stateNode;
					(p.memoizedState !== null
						? Z._visibility & 2
							? Wi(u, p, S, A, o)
							: Il(u, p)
						: ((Z._visibility |= 2), Wi(u, p, S, A, o)),
						o && U & 2048 && Ju(p.alternate, p));
					break;
				case 24:
					(Wi(u, p, S, A, o), o && U & 2048 && Iu(p.alternate, p));
					break;
				default:
					Wi(u, p, S, A, o);
			}
			e = e.sibling;
		}
	}
	function Il(t, e) {
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) {
				var a = t,
					s = e,
					o = s.flags;
				switch (s.tag) {
					case 22:
						(Il(a, s), o & 2048 && Ju(s.alternate, s));
						break;
					case 24:
						(Il(a, s), o & 2048 && Iu(s.alternate, s));
						break;
					default:
						Il(a, s);
				}
				e = e.sibling;
			}
	}
	var $l = 8192;
	function tl(t, e, a) {
		if (t.subtreeFlags & $l)
			for (t = t.child; t !== null; ) (y0(t, e, a), (t = t.sibling));
	}
	function y0(t, e, a) {
		switch (t.tag) {
			case 26:
				(tl(t, e, a),
					t.flags & $l &&
						t.memoizedState !== null &&
						dv(a, bn, t.memoizedState, t.memoizedProps));
				break;
			case 5:
				tl(t, e, a);
				break;
			case 3:
			case 4:
				var s = bn;
				((bn = Or(t.stateNode.containerInfo)), tl(t, e, a), (bn = s));
				break;
			case 22:
				t.memoizedState === null &&
					((s = t.alternate),
					s !== null && s.memoizedState !== null
						? ((s = $l), ($l = 16777216), tl(t, e, a), ($l = s))
						: tl(t, e, a));
				break;
			default:
				tl(t, e, a);
		}
	}
	function g0(t) {
		var e = t.alternate;
		if (e !== null && ((t = e.child), t !== null)) {
			e.child = null;
			do ((e = t.sibling), (t.sibling = null), (t = e));
			while (t !== null);
		}
	}
	function Wl(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var a = 0; a < e.length; a++) {
					var s = e[a];
					((ce = s), b0(s, t));
				}
			g0(t);
		}
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (v0(t), (t = t.sibling));
	}
	function v0(t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				(Wl(t), t.flags & 2048 && ya(9, t, t.return));
				break;
			case 3:
				Wl(t);
				break;
			case 12:
				Wl(t);
				break;
			case 22:
				var e = t.stateNode;
				t.memoizedState !== null &&
				e._visibility & 2 &&
				(t.return === null || t.return.tag !== 13)
					? ((e._visibility &= -3), yr(t))
					: Wl(t);
				break;
			default:
				Wl(t);
		}
	}
	function yr(t) {
		var e = t.deletions;
		if ((t.flags & 16) !== 0) {
			if (e !== null)
				for (var a = 0; a < e.length; a++) {
					var s = e[a];
					((ce = s), b0(s, t));
				}
			g0(t);
		}
		for (t = t.child; t !== null; ) {
			switch (((e = t), e.tag)) {
				case 0:
				case 11:
				case 15:
					(ya(8, e, e.return), yr(e));
					break;
				case 22:
					((a = e.stateNode),
						a._visibility & 2 && ((a._visibility &= -3), yr(e)));
					break;
				default:
					yr(e);
			}
			t = t.sibling;
		}
	}
	function b0(t, e) {
		for (; ce !== null; ) {
			var a = ce;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					ya(8, a, e);
					break;
				case 23:
				case 22:
					if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
						var s = a.memoizedState.cachePool.pool;
						s != null && s.refCount++;
					}
					break;
				case 24:
					jl(a.memoizedState.cache);
			}
			if (((s = a.child), s !== null)) ((s.return = a), (ce = s));
			else
				t: for (a = t; ce !== null; ) {
					s = ce;
					var o = s.sibling,
						u = s.return;
					if ((u0(s), s === a)) {
						ce = null;
						break t;
					}
					if (o !== null) {
						((o.return = u), (ce = o));
						break t;
					}
					ce = u;
				}
		}
	}
	var xg = {
			getCacheForType: function (t) {
				var e = ye($t),
					a = e.data.get(t);
				return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
			},
			cacheSignal: function () {
				return ye($t).controller.signal;
			},
		},
		Mg = typeof WeakMap == "function" ? WeakMap : Map,
		zt = 0,
		Bt = null,
		bt = null,
		Et = 0,
		Dt = 0,
		Je = null,
		ga = !1,
		el = !1,
		$u = !1,
		kn = 0,
		kt = 0,
		va = 0,
		ri = 0,
		Wu = 0,
		Ie = 0,
		nl = 0,
		ts = null,
		Ye = null,
		tc = !1,
		gr = 0,
		S0 = 0,
		vr = 1 / 0,
		br = null,
		ba = null,
		ie = 0,
		Sa = null,
		al = null,
		Fn = 0,
		ec = 0,
		nc = null,
		E0 = null,
		es = 0,
		ac = null;
	function $e() {
		return (zt & 2) !== 0 && Et !== 0 ? Et & -Et : L.T !== null ? uc() : wo();
	}
	function _0() {
		if (Ie === 0)
			if ((Et & 536870912) === 0 || Rt) {
				var t = Ri;
				((Ri <<= 1), (Ri & 3932160) === 0 && (Ri = 262144), (Ie = t));
			} else Ie = 536870912;
		return ((t = ke.current), t !== null && (t.flags |= 32), Ie);
	}
	function Ve(t, e, a) {
		(((t === Bt && (Dt === 2 || Dt === 9)) || t.cancelPendingCommit !== null) &&
			(il(t, 0), Ea(t, Et, Ie, !1)),
			Xt(t, a),
			((zt & 2) === 0 || t !== Bt) &&
				(t === Bt &&
					((zt & 2) === 0 && (ri |= a), kt === 4 && Ea(t, Et, Ie, !1)),
				xn(t)));
	}
	function w0(t, e, a) {
		if ((zt & 6) !== 0) throw Error(r(327));
		var s = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Yt(t, e),
			o = s ? zg(t, e) : lc(t, e, !0),
			u = s;
		do {
			if (o === 0) {
				el && !s && Ea(t, e, 0, !1);
				break;
			} else {
				if (((a = t.current.alternate), u && !Og(a))) {
					((o = lc(t, e, !1)), (u = !1));
					continue;
				}
				if (o === 2) {
					if (((u = e), t.errorRecoveryDisabledLanes & u)) var p = 0;
					else
						((p = t.pendingLanes & -536870913),
							(p = p !== 0 ? p : p & 536870912 ? 536870912 : 0));
					if (p !== 0) {
						e = p;
						t: {
							var S = t;
							o = ts;
							var A = S.current.memoizedState.isDehydrated;
							if ((A && (il(S, p).flags |= 256), (p = lc(S, p, !1)), p !== 2)) {
								if ($u && !A) {
									((S.errorRecoveryDisabledLanes |= u), (ri |= u), (o = 4));
									break t;
								}
								((u = Ye),
									(Ye = o),
									u !== null &&
										(Ye === null ? (Ye = u) : Ye.push.apply(Ye, u)));
							}
							o = p;
						}
						if (((u = !1), o !== 2)) continue;
					}
				}
				if (o === 1) {
					(il(t, 0), Ea(t, e, 0, !0));
					break;
				}
				t: {
					switch (((s = t), (u = o), u)) {
						case 0:
						case 1:
							throw Error(r(345));
						case 4:
							if ((e & 4194048) !== e) break;
						case 6:
							Ea(s, e, Ie, !ga);
							break t;
						case 2:
							Ye = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(r(329));
					}
					if ((e & 62914560) === e && ((o = gr + 300 - he()), 10 < o)) {
						if ((Ea(s, e, Ie, !ga), dt(s, 0, !0) !== 0)) break t;
						((Fn = e),
							(s.timeoutHandle = tm(
								T0.bind(
									null,
									s,
									a,
									Ye,
									br,
									tc,
									e,
									Ie,
									ri,
									nl,
									ga,
									u,
									"Throttled",
									-0,
									0,
								),
								o,
							)));
						break t;
					}
					T0(s, a, Ye, br, tc, e, Ie, ri, nl, ga, u, null, -0, 0);
				}
			}
			break;
		} while (!0);
		xn(t);
	}
	function T0(t, e, a, s, o, u, p, S, A, U, Z, K, j, B) {
		if (
			((t.timeoutHandle = -1),
			(K = e.subtreeFlags),
			K & 8192 || (K & 16785408) === 16785408)
		) {
			((K = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Nn,
			}),
				y0(e, u, K));
			var nt =
				(u & 62914560) === u ? gr - he() : (u & 4194048) === u ? S0 - he() : 0;
			if (((nt = hv(K, nt)), nt !== null)) {
				((Fn = u),
					(t.cancelPendingCommit = nt(
						D0.bind(null, t, e, u, a, s, o, p, S, A, Z, K, null, j, B),
					)),
					Ea(t, u, p, !U));
				return;
			}
		}
		D0(t, e, u, a, s, o, p, S, A);
	}
	function Og(t) {
		for (var e = t; ; ) {
			var a = e.tag;
			if (
				(a === 0 || a === 11 || a === 15) &&
				e.flags & 16384 &&
				((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
			)
				for (var s = 0; s < a.length; s++) {
					var o = a[s],
						u = o.getSnapshot;
					o = o.value;
					try {
						if (!Ke(u(), o)) return !1;
					} catch {
						return !1;
					}
				}
			if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
				((a.return = e), (e = a));
			else {
				if (e === t) break;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) return !0;
					e = e.return;
				}
				((e.sibling.return = e.return), (e = e.sibling));
			}
		}
		return !0;
	}
	function Ea(t, e, a, s) {
		((e &= ~Wu),
			(e &= ~ri),
			(t.suspendedLanes |= e),
			(t.pingedLanes &= ~e),
			s && (t.warmLanes |= e),
			(s = t.expirationTimes));
		for (var o = e; 0 < o; ) {
			var u = 31 - Ee(o),
				p = 1 << u;
			((s[u] = -1), (o &= ~p));
		}
		a !== 0 && Ga(t, a, e);
	}
	function Sr() {
		return (zt & 6) === 0 ? (ns(0), !1) : !0;
	}
	function ic() {
		if (bt !== null) {
			if (Dt === 0) var t = bt.return;
			else ((t = bt), (Hn = $a = null), Su(t), (ki = null), (Hl = 0), (t = bt));
			for (; t !== null; ) (e0(t.alternate, t), (t = t.return));
			bt = null;
		}
	}
	function il(t, e) {
		var a = t.timeoutHandle;
		(a !== -1 && ((t.timeoutHandle = -1), Fg(a)),
			(a = t.cancelPendingCommit),
			a !== null && ((t.cancelPendingCommit = null), a()),
			(Fn = 0),
			ic(),
			(Bt = t),
			(bt = a = jn(t.current, null)),
			(Et = e),
			(Dt = 0),
			(Je = null),
			(ga = !1),
			(el = Yt(t, e)),
			($u = !1),
			(nl = Ie = Wu = ri = va = kt = 0),
			(Ye = ts = null),
			(tc = !1),
			(e & 8) !== 0 && (e |= e & 32));
		var s = t.entangledLanes;
		if (s !== 0)
			for (t = t.entanglements, s &= e; 0 < s; ) {
				var o = 31 - Ee(s),
					u = 1 << o;
				((e |= t[o]), (s &= ~u));
			}
		return ((kn = e), Qs(), a);
	}
	function R0(t, e) {
		((pt = null),
			(L.H = Kl),
			e === Pi || e === Fs
				? ((e = Qd()), (Dt = 3))
				: e === ou
					? ((e = Qd()), (Dt = 4))
					: (Dt =
							e === ju
								? 8
								: e !== null &&
									  typeof e == "object" &&
									  typeof e.then == "function"
									? 6
									: 1),
			(Je = e),
			bt === null && ((kt = 1), ur(t, rn(e, t.current))));
	}
	function A0() {
		var t = ke.current;
		return t === null
			? !0
			: (Et & 4194048) === Et
				? fn === null
				: (Et & 62914560) === Et || (Et & 536870912) !== 0
					? t === fn
					: !1;
	}
	function x0() {
		var t = L.H;
		return ((L.H = Kl), t === null ? Kl : t);
	}
	function M0() {
		var t = L.A;
		return ((L.A = xg), t);
	}
	function Er() {
		((kt = 4),
			ga || ((Et & 4194048) !== Et && ke.current !== null) || (el = !0),
			((va & 134217727) === 0 && (ri & 134217727) === 0) ||
				Bt === null ||
				Ea(Bt, Et, Ie, !1));
	}
	function lc(t, e, a) {
		var s = zt;
		zt |= 2;
		var o = x0(),
			u = M0();
		((Bt !== t || Et !== e) && ((br = null), il(t, e)), (e = !1));
		var p = kt;
		t: do
			try {
				if (Dt !== 0 && bt !== null) {
					var S = bt,
						A = Je;
					switch (Dt) {
						case 8:
							(ic(), (p = 6));
							break t;
						case 3:
						case 2:
						case 9:
						case 6:
							ke.current === null && (e = !0);
							var U = Dt;
							if (((Dt = 0), (Je = null), ll(t, S, A, U), a && el)) {
								p = 0;
								break t;
							}
							break;
						default:
							((U = Dt), (Dt = 0), (Je = null), ll(t, S, A, U));
					}
				}
				(Cg(), (p = kt));
				break;
			} catch (Z) {
				R0(t, Z);
			}
		while (!0);
		return (
			e && t.shellSuspendCounter++,
			(Hn = $a = null),
			(zt = s),
			(L.H = o),
			(L.A = u),
			bt === null && ((Bt = null), (Et = 0), Qs()),
			p
		);
	}
	function Cg() {
		for (; bt !== null; ) O0(bt);
	}
	function zg(t, e) {
		var a = zt;
		zt |= 2;
		var s = x0(),
			o = M0();
		Bt !== t || Et !== e
			? ((br = null), (vr = he() + 500), il(t, e))
			: (el = Yt(t, e));
		t: do
			try {
				if (Dt !== 0 && bt !== null) {
					e = bt;
					var u = Je;
					e: switch (Dt) {
						case 1:
							((Dt = 0), (Je = null), ll(t, e, u, 1));
							break;
						case 2:
						case 9:
							if (qd(u)) {
								((Dt = 0), (Je = null), C0(e));
								break;
							}
							((e = function () {
								((Dt !== 2 && Dt !== 9) || Bt !== t || (Dt = 7), xn(t));
							}),
								u.then(e, e));
							break t;
						case 3:
							Dt = 7;
							break t;
						case 4:
							Dt = 5;
							break t;
						case 7:
							qd(u)
								? ((Dt = 0), (Je = null), C0(e))
								: ((Dt = 0), (Je = null), ll(t, e, u, 7));
							break;
						case 5:
							var p = null;
							switch (bt.tag) {
								case 26:
									p = bt.memoizedState;
								case 5:
								case 27:
									var S = bt;
									if (p ? pm(p) : S.stateNode.complete) {
										((Dt = 0), (Je = null));
										var A = S.sibling;
										if (A !== null) bt = A;
										else {
											var U = S.return;
											U !== null ? ((bt = U), _r(U)) : (bt = null);
										}
										break e;
									}
							}
							((Dt = 0), (Je = null), ll(t, e, u, 5));
							break;
						case 6:
							((Dt = 0), (Je = null), ll(t, e, u, 6));
							break;
						case 8:
							(ic(), (kt = 6));
							break t;
						default:
							throw Error(r(462));
					}
				}
				Dg();
				break;
			} catch (Z) {
				R0(t, Z);
			}
		while (!0);
		return (
			(Hn = $a = null),
			(L.H = s),
			(L.A = o),
			(zt = a),
			bt !== null ? 0 : ((Bt = null), (Et = 0), Qs(), kt)
		);
	}
	function Dg() {
		for (; bt !== null && !de(); ) O0(bt);
	}
	function O0(t) {
		var e = Wh(t.alternate, t, kn);
		((t.memoizedProps = t.pendingProps), e === null ? _r(t) : (bt = e));
	}
	function C0(t) {
		var e = t,
			a = e.alternate;
		switch (e.tag) {
			case 15:
			case 0:
				e = Ph(a, e, e.pendingProps, e.type, void 0, Et);
				break;
			case 11:
				e = Ph(a, e, e.pendingProps, e.type.render, e.ref, Et);
				break;
			case 5:
				Su(e);
			default:
				(e0(a, e), (e = bt = Md(e, kn)), (e = Wh(a, e, kn)));
		}
		((t.memoizedProps = t.pendingProps), e === null ? _r(t) : (bt = e));
	}
	function ll(t, e, a, s) {
		((Hn = $a = null), Su(e), (ki = null), (Hl = 0));
		var o = e.return;
		try {
			if (Sg(t, o, e, a, Et)) {
				((kt = 1), ur(t, rn(a, t.current)), (bt = null));
				return;
			}
		} catch (u) {
			if (o !== null) throw ((bt = o), u);
			((kt = 1), ur(t, rn(a, t.current)), (bt = null));
			return;
		}
		e.flags & 32768
			? (Rt || s === 1
					? (t = !0)
					: el || (Et & 536870912) !== 0
						? (t = !1)
						: ((ga = t = !0),
							(s === 2 || s === 9 || s === 3 || s === 6) &&
								((s = ke.current),
								s !== null && s.tag === 13 && (s.flags |= 16384))),
				z0(e, t))
			: _r(e);
	}
	function _r(t) {
		var e = t;
		do {
			if ((e.flags & 32768) !== 0) {
				z0(e, ga);
				return;
			}
			t = e.return;
			var a = wg(e.alternate, e, kn);
			if (a !== null) {
				bt = a;
				return;
			}
			if (((e = e.sibling), e !== null)) {
				bt = e;
				return;
			}
			bt = e = t;
		} while (e !== null);
		kt === 0 && (kt = 5);
	}
	function z0(t, e) {
		do {
			var a = Tg(t.alternate, t);
			if (a !== null) {
				((a.flags &= 32767), (bt = a));
				return;
			}
			if (
				((a = t.return),
				a !== null &&
					((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
				!e && ((t = t.sibling), t !== null))
			) {
				bt = t;
				return;
			}
			bt = t = a;
		} while (t !== null);
		((kt = 6), (bt = null));
	}
	function D0(t, e, a, s, o, u, p, S, A) {
		t.cancelPendingCommit = null;
		do wr();
		while (ie !== 0);
		if ((zt & 6) !== 0) throw Error(r(327));
		if (e !== null) {
			if (e === t.current) throw Error(r(177));
			if (
				((u = e.lanes | e.childLanes),
				(u |= Po),
				Ne(t, a, u, p, S, A),
				t === Bt && ((bt = Bt = null), (Et = 0)),
				(al = e),
				(Sa = t),
				(Fn = a),
				(ec = u),
				(nc = o),
				(E0 = s),
				(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
					? ((t.callbackNode = null),
						(t.callbackPriority = 0),
						jg(ae, function () {
							return (B0(), null);
						}))
					: ((t.callbackNode = null), (t.callbackPriority = 0)),
				(s = (e.flags & 13878) !== 0),
				(e.subtreeFlags & 13878) !== 0 || s)
			) {
				((s = L.T), (L.T = null), (o = k.p), (k.p = 2), (p = zt), (zt |= 4));
				try {
					Rg(t, e, a);
				} finally {
					((zt = p), (k.p = o), (L.T = s));
				}
			}
			((ie = 1), L0(), N0(), U0());
		}
	}
	function L0() {
		if (ie === 1) {
			ie = 0;
			var t = Sa,
				e = al,
				a = (e.flags & 13878) !== 0;
			if ((e.subtreeFlags & 13878) !== 0 || a) {
				((a = L.T), (L.T = null));
				var s = k.p;
				k.p = 2;
				var o = zt;
				zt |= 4;
				try {
					h0(e, t);
					var u = gc,
						p = bd(t.containerInfo),
						S = u.focusedElem,
						A = u.selectionRange;
					if (
						p !== S &&
						S &&
						S.ownerDocument &&
						vd(S.ownerDocument.documentElement, S)
					) {
						if (A !== null && Yo(S)) {
							var U = A.start,
								Z = A.end;
							if ((Z === void 0 && (Z = U), "selectionStart" in S))
								((S.selectionStart = U),
									(S.selectionEnd = Math.min(Z, S.value.length)));
							else {
								var K = S.ownerDocument || document,
									j = (K && K.defaultView) || window;
								if (j.getSelection) {
									var B = j.getSelection(),
										nt = S.textContent.length,
										ut = Math.min(A.start, nt),
										jt = A.end === void 0 ? ut : Math.min(A.end, nt);
									!B.extend && ut > jt && ((p = jt), (jt = ut), (ut = p));
									var D = gd(S, ut),
										C = gd(S, jt);
									if (
										D &&
										C &&
										(B.rangeCount !== 1 ||
											B.anchorNode !== D.node ||
											B.anchorOffset !== D.offset ||
											B.focusNode !== C.node ||
											B.focusOffset !== C.offset)
									) {
										var N = K.createRange();
										(N.setStart(D.node, D.offset),
											B.removeAllRanges(),
											ut > jt
												? (B.addRange(N), B.extend(C.node, C.offset))
												: (N.setEnd(C.node, C.offset), B.addRange(N)));
									}
								}
							}
						}
						for (K = [], B = S; (B = B.parentNode); )
							B.nodeType === 1 &&
								K.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
						for (
							typeof S.focus == "function" && S.focus(), S = 0;
							S < K.length;
							S++
						) {
							var V = K[S];
							((V.element.scrollLeft = V.left), (V.element.scrollTop = V.top));
						}
					}
					((Ur = !!yc), (gc = yc = null));
				} finally {
					((zt = o), (k.p = s), (L.T = a));
				}
			}
			((t.current = e), (ie = 2));
		}
	}
	function N0() {
		if (ie === 2) {
			ie = 0;
			var t = Sa,
				e = al,
				a = (e.flags & 8772) !== 0;
			if ((e.subtreeFlags & 8772) !== 0 || a) {
				((a = L.T), (L.T = null));
				var s = k.p;
				k.p = 2;
				var o = zt;
				zt |= 4;
				try {
					o0(t, e.alternate, e);
				} finally {
					((zt = o), (k.p = s), (L.T = a));
				}
			}
			ie = 3;
		}
	}
	function U0() {
		if (ie === 4 || ie === 3) {
			((ie = 0), pn());
			var t = Sa,
				e = al,
				a = Fn,
				s = E0;
			(e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
				? (ie = 5)
				: ((ie = 0), (al = Sa = null), j0(t, t.pendingLanes));
			var o = t.pendingLanes;
			if (
				(o === 0 && (ba = null),
				gn(a),
				(e = e.stateNode),
				Ae && typeof Ae.onCommitFiberRoot == "function")
			)
				try {
					Ae.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
				} catch {}
			if (s !== null) {
				((e = L.T), (o = k.p), (k.p = 2), (L.T = null));
				try {
					for (var u = t.onRecoverableError, p = 0; p < s.length; p++) {
						var S = s[p];
						u(S.value, { componentStack: S.stack });
					}
				} finally {
					((L.T = e), (k.p = o));
				}
			}
			((Fn & 3) !== 0 && wr(),
				xn(t),
				(o = t.pendingLanes),
				(a & 261930) !== 0 && (o & 42) !== 0
					? t === ac
						? es++
						: ((es = 0), (ac = t))
					: (es = 0),
				ns(0));
		}
	}
	function j0(t, e) {
		(t.pooledCacheLanes &= e) === 0 &&
			((e = t.pooledCache), e != null && ((t.pooledCache = null), jl(e)));
	}
	function wr() {
		return (L0(), N0(), U0(), B0());
	}
	function B0() {
		if (ie !== 5) return !1;
		var t = Sa,
			e = ec;
		ec = 0;
		var a = gn(Fn),
			s = L.T,
			o = k.p;
		try {
			((k.p = 32 > a ? 32 : a), (L.T = null), (a = nc), (nc = null));
			var u = Sa,
				p = Fn;
			if (((ie = 0), (al = Sa = null), (Fn = 0), (zt & 6) !== 0))
				throw Error(r(331));
			var S = zt;
			if (
				((zt |= 4),
				v0(u.current),
				p0(u, u.current, p, a),
				(zt = S),
				ns(0, !1),
				Ae && typeof Ae.onPostCommitFiberRoot == "function")
			)
				try {
					Ae.onPostCommitFiberRoot(Ya, u);
				} catch {}
			return !0;
		} finally {
			((k.p = o), (L.T = s), j0(t, e));
		}
	}
	function H0(t, e, a) {
		((e = rn(a, e)),
			(e = Uu(t.stateNode, e, 2)),
			(t = ha(t, e, 2)),
			t !== null && (Xt(t, 2), xn(t)));
	}
	function Lt(t, e, a) {
		if (t.tag === 3) H0(t, t, a);
		else
			for (; e !== null; ) {
				if (e.tag === 3) {
					H0(e, t, a);
					break;
				} else if (e.tag === 1) {
					var s = e.stateNode;
					if (
						typeof e.type.getDerivedStateFromError == "function" ||
						(typeof s.componentDidCatch == "function" &&
							(ba === null || !ba.has(s)))
					) {
						((t = rn(a, t)),
							(a = qh(2)),
							(s = ha(e, a, 2)),
							s !== null && (Zh(a, s, e, t), Xt(s, 2), xn(s)));
						break;
					}
				}
				e = e.return;
			}
	}
	function sc(t, e, a) {
		var s = t.pingCache;
		if (s === null) {
			s = t.pingCache = new Mg();
			var o = new Set();
			s.set(e, o);
		} else ((o = s.get(e)), o === void 0 && ((o = new Set()), s.set(e, o)));
		o.has(a) ||
			(($u = !0), o.add(a), (t = Lg.bind(null, t, e, a)), e.then(t, t));
	}
	function Lg(t, e, a) {
		var s = t.pingCache;
		(s !== null && s.delete(e),
			(t.pingedLanes |= t.suspendedLanes & a),
			(t.warmLanes &= ~a),
			Bt === t &&
				(Et & a) === a &&
				(kt === 4 || (kt === 3 && (Et & 62914560) === Et && 300 > he() - gr)
					? (zt & 2) === 0 && il(t, 0)
					: (Wu |= a),
				nl === Et && (nl = 0)),
			xn(t));
	}
	function q0(t, e) {
		(e === 0 && (e = _e()), (t = Fa(t, e)), t !== null && (Xt(t, e), xn(t)));
	}
	function Ng(t) {
		var e = t.memoizedState,
			a = 0;
		(e !== null && (a = e.retryLane), q0(t, a));
	}
	function Ug(t, e) {
		var a = 0;
		switch (t.tag) {
			case 31:
			case 13:
				var s = t.stateNode,
					o = t.memoizedState;
				o !== null && (a = o.retryLane);
				break;
			case 19:
				s = t.stateNode;
				break;
			case 22:
				s = t.stateNode._retryCache;
				break;
			default:
				throw Error(r(314));
		}
		(s !== null && s.delete(e), q0(t, a));
	}
	function jg(t, e) {
		return Xe(t, e);
	}
	var Tr = null,
		sl = null,
		rc = !1,
		Rr = !1,
		oc = !1,
		_a = 0;
	function xn(t) {
		(t !== sl &&
			t.next === null &&
			(sl === null ? (Tr = sl = t) : (sl = sl.next = t)),
			(Rr = !0),
			rc || ((rc = !0), Hg()));
	}
	function ns(t, e) {
		if (!oc && Rr) {
			oc = !0;
			do
				for (var a = !1, s = Tr; s !== null; ) {
					if (t !== 0) {
						var o = s.pendingLanes;
						if (o === 0) var u = 0;
						else {
							var p = s.suspendedLanes,
								S = s.pingedLanes;
							((u = (1 << (31 - Ee(42 | t) + 1)) - 1),
								(u &= o & ~(p & ~S)),
								(u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
						}
						u !== 0 && ((a = !0), V0(s, u));
					} else
						((u = Et),
							(u = dt(
								s,
								s === Bt ? u : 0,
								s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
							)),
							(u & 3) === 0 || Yt(s, u) || ((a = !0), V0(s, u)));
					s = s.next;
				}
			while (a);
			oc = !1;
		}
	}
	function Bg() {
		Z0();
	}
	function Z0() {
		Rr = rc = !1;
		var t = 0;
		_a !== 0 && kg() && (t = _a);
		for (var e = he(), a = null, s = Tr; s !== null; ) {
			var o = s.next,
				u = Q0(s, e);
			(u === 0
				? ((s.next = null),
					a === null ? (Tr = o) : (a.next = o),
					o === null && (sl = a))
				: ((a = s), (t !== 0 || (u & 3) !== 0) && (Rr = !0)),
				(s = o));
		}
		((ie !== 0 && ie !== 5) || ns(t), _a !== 0 && (_a = 0));
	}
	function Q0(t, e) {
		for (
			var a = t.suspendedLanes,
				s = t.pingedLanes,
				o = t.expirationTimes,
				u = t.pendingLanes & -62914561;
			0 < u;
		) {
			var p = 31 - Ee(u),
				S = 1 << p,
				A = o[p];
			(A === -1
				? ((S & a) === 0 || (S & s) !== 0) && (o[p] = oe(S, e))
				: A <= e && (t.expiredLanes |= S),
				(u &= ~S));
		}
		if (
			((e = Bt),
			(a = Et),
			(a = dt(
				t,
				t === e ? a : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			(s = t.callbackNode),
			a === 0 ||
				(t === e && (Dt === 2 || Dt === 9)) ||
				t.cancelPendingCommit !== null)
		)
			return (
				s !== null && s !== null && Qa(s),
				(t.callbackNode = null),
				(t.callbackPriority = 0)
			);
		if ((a & 3) === 0 || Yt(t, a)) {
			if (((e = a & -a), e === t.callbackPriority)) return e;
			switch ((s !== null && Qa(s), gn(a))) {
				case 2:
				case 8:
					a = Kt;
					break;
				case 32:
					a = ae;
					break;
				case 268435456:
					a = Dn;
					break;
				default:
					a = ae;
			}
			return (
				(s = Y0.bind(null, t)),
				(a = Xe(a, s)),
				(t.callbackPriority = e),
				(t.callbackNode = a),
				e
			);
		}
		return (
			s !== null && s !== null && Qa(s),
			(t.callbackPriority = 2),
			(t.callbackNode = null),
			2
		);
	}
	function Y0(t, e) {
		if (ie !== 0 && ie !== 5)
			return ((t.callbackNode = null), (t.callbackPriority = 0), null);
		var a = t.callbackNode;
		if (wr() && t.callbackNode !== a) return null;
		var s = Et;
		return (
			(s = dt(
				t,
				t === Bt ? s : 0,
				t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
			)),
			s === 0
				? null
				: (w0(t, s, e),
					Q0(t, he()),
					t.callbackNode != null && t.callbackNode === a
						? Y0.bind(null, t)
						: null)
		);
	}
	function V0(t, e) {
		if (wr()) return null;
		w0(t, e, !0);
	}
	function Hg() {
		Jg(function () {
			(zt & 6) !== 0 ? Xe(xt, Bg) : Z0();
		});
	}
	function uc() {
		if (_a === 0) {
			var t = Xi;
			(t === 0 && ((t = Ti), (Ti <<= 1), (Ti & 261888) === 0 && (Ti = 256)),
				(_a = t));
		}
		return _a;
	}
	function G0(t) {
		return t == null || typeof t == "symbol" || typeof t == "boolean"
			? null
			: typeof t == "function"
				? t
				: Ls("" + t);
	}
	function X0(t, e) {
		var a = e.ownerDocument.createElement("input");
		return (
			(a.name = e.name),
			(a.value = e.value),
			t.id && a.setAttribute("form", t.id),
			e.parentNode.insertBefore(a, e),
			(t = new FormData(t)),
			a.parentNode.removeChild(a),
			t
		);
	}
	function qg(t, e, a, s, o) {
		if (e === "submit" && a && a.stateNode === o) {
			var u = G0((o[Be] || null).action),
				p = s.submitter;
			p &&
				((e = (e = p[Be] || null)
					? G0(e.formAction)
					: p.getAttribute("formAction")),
				e !== null && ((u = e), (p = null)));
			var S = new Bs("action", "action", null, s, o);
			t.push({
				event: S,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (s.defaultPrevented) {
								if (_a !== 0) {
									var A = p ? X0(o, p) : new FormData(o);
									Ou(
										a,
										{ pending: !0, data: A, method: o.method, action: u },
										null,
										A,
									);
								}
							} else
								typeof u == "function" &&
									(S.preventDefault(),
									(A = p ? X0(o, p) : new FormData(o)),
									Ou(
										a,
										{ pending: !0, data: A, method: o.method, action: u },
										u,
										A,
									));
						},
						currentTarget: o,
					},
				],
			});
		}
	}
	for (var cc = 0; cc < Ko.length; cc++) {
		var fc = Ko[cc],
			Zg = fc.toLowerCase(),
			Qg = fc[0].toUpperCase() + fc.slice(1);
		vn(Zg, "on" + Qg);
	}
	(vn(_d, "onAnimationEnd"),
		vn(wd, "onAnimationIteration"),
		vn(Td, "onAnimationStart"),
		vn("dblclick", "onDoubleClick"),
		vn("focusin", "onFocus"),
		vn("focusout", "onBlur"),
		vn(ag, "onTransitionRun"),
		vn(ig, "onTransitionStart"),
		vn(lg, "onTransitionCancel"),
		vn(Rd, "onTransitionEnd"),
		zi("onMouseEnter", ["mouseout", "mouseover"]),
		zi("onMouseLeave", ["mouseout", "mouseover"]),
		zi("onPointerEnter", ["pointerout", "pointerover"]),
		zi("onPointerLeave", ["pointerout", "pointerover"]),
		Xa(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		Xa(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		Xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		Xa(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		Xa(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		Xa(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		));
	var as =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		Yg = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(as),
		);
	function K0(t, e) {
		e = (e & 4) !== 0;
		for (var a = 0; a < t.length; a++) {
			var s = t[a],
				o = s.event;
			s = s.listeners;
			t: {
				var u = void 0;
				if (e)
					for (var p = s.length - 1; 0 <= p; p--) {
						var S = s[p],
							A = S.instance,
							U = S.currentTarget;
						if (((S = S.listener), A !== u && o.isPropagationStopped()))
							break t;
						((u = S), (o.currentTarget = U));
						try {
							u(o);
						} catch (Z) {
							Zs(Z);
						}
						((o.currentTarget = null), (u = A));
					}
				else
					for (p = 0; p < s.length; p++) {
						if (
							((S = s[p]),
							(A = S.instance),
							(U = S.currentTarget),
							(S = S.listener),
							A !== u && o.isPropagationStopped())
						)
							break t;
						((u = S), (o.currentTarget = U));
						try {
							u(o);
						} catch (Z) {
							Zs(Z);
						}
						((o.currentTarget = null), (u = A));
					}
			}
		}
	}
	function St(t, e) {
		var a = e[To];
		a === void 0 && (a = e[To] = new Set());
		var s = t + "__bubble";
		a.has(s) || (P0(e, t, 2, !1), a.add(s));
	}
	function dc(t, e, a) {
		var s = 0;
		(e && (s |= 4), P0(a, t, s, e));
	}
	var Ar = "_reactListening" + Math.random().toString(36).slice(2);
	function hc(t) {
		if (!t[Ar]) {
			((t[Ar] = !0),
				Zf.forEach(function (a) {
					a !== "selectionchange" && (Yg.has(a) || dc(a, !1, t), dc(a, !0, t));
				}));
			var e = t.nodeType === 9 ? t : t.ownerDocument;
			e === null || e[Ar] || ((e[Ar] = !0), dc("selectionchange", !1, e));
		}
	}
	function P0(t, e, a, s) {
		switch (_m(e)) {
			case 2:
				var o = yv;
				break;
			case 8:
				o = gv;
				break;
			default:
				o = Mc;
		}
		((a = o.bind(null, e, a, t)),
			(o = void 0),
			!Lo ||
				(e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
				(o = !0),
			s
				? o !== void 0
					? t.addEventListener(e, a, { capture: !0, passive: o })
					: t.addEventListener(e, a, !0)
				: o !== void 0
					? t.addEventListener(e, a, { passive: o })
					: t.addEventListener(e, a, !1));
	}
	function mc(t, e, a, s, o) {
		var u = s;
		if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
			t: for (;;) {
				if (s === null) return;
				var p = s.tag;
				if (p === 3 || p === 4) {
					var S = s.stateNode.containerInfo;
					if (S === o) break;
					if (p === 4)
						for (p = s.return; p !== null; ) {
							var A = p.tag;
							if ((A === 3 || A === 4) && p.stateNode.containerInfo === o)
								return;
							p = p.return;
						}
					for (; S !== null; ) {
						if (((p = Mi(S)), p === null)) return;
						if (((A = p.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
							s = u = p;
							continue t;
						}
						S = S.parentNode;
					}
				}
				s = s.return;
			}
		$f(function () {
			var U = u,
				Z = zo(a),
				K = [];
			t: {
				var j = Ad.get(t);
				if (j !== void 0) {
					var B = Bs,
						nt = t;
					switch (t) {
						case "keypress":
							if (Us(a) === 0) break t;
						case "keydown":
						case "keyup":
							B = Uy;
							break;
						case "focusin":
							((nt = "focus"), (B = Bo));
							break;
						case "focusout":
							((nt = "blur"), (B = Bo));
							break;
						case "beforeblur":
						case "afterblur":
							B = Bo;
							break;
						case "click":
							if (a.button === 2) break t;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							B = ed;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							B = wy;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							B = Hy;
							break;
						case _d:
						case wd:
						case Td:
							B = Ay;
							break;
						case Rd:
							B = Zy;
							break;
						case "scroll":
						case "scrollend":
							B = Ey;
							break;
						case "wheel":
							B = Yy;
							break;
						case "copy":
						case "cut":
						case "paste":
							B = My;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							B = ad;
							break;
						case "toggle":
						case "beforetoggle":
							B = Gy;
					}
					var ut = (e & 4) !== 0,
						jt = !ut && (t === "scroll" || t === "scrollend"),
						D = ut ? (j !== null ? j + "Capture" : null) : j;
					ut = [];
					for (var C = U, N; C !== null; ) {
						var V = C;
						if (
							((N = V.stateNode),
							(V = V.tag),
							(V !== 5 && V !== 26 && V !== 27) ||
								N === null ||
								D === null ||
								((V = Rl(C, D)), V != null && ut.push(is(C, V, N))),
							jt)
						)
							break;
						C = C.return;
					}
					0 < ut.length &&
						((j = new B(j, nt, null, a, Z)),
						K.push({ event: j, listeners: ut }));
				}
			}
			if ((e & 7) === 0) {
				t: {
					if (
						((j = t === "mouseover" || t === "pointerover"),
						(B = t === "mouseout" || t === "pointerout"),
						j &&
							a !== Co &&
							(nt = a.relatedTarget || a.fromElement) &&
							(Mi(nt) || nt[xi]))
					)
						break t;
					if (
						(B || j) &&
						((j =
							Z.window === Z
								? Z
								: (j = Z.ownerDocument)
									? j.defaultView || j.parentWindow
									: window),
						B
							? ((nt = a.relatedTarget || a.toElement),
								(B = U),
								(nt = nt ? Mi(nt) : null),
								nt !== null &&
									((jt = f(nt)),
									(ut = nt.tag),
									nt !== jt || (ut !== 5 && ut !== 27 && ut !== 6)) &&
									(nt = null))
							: ((B = null), (nt = U)),
						B !== nt)
					) {
						if (
							((ut = ed),
							(V = "onMouseLeave"),
							(D = "onMouseEnter"),
							(C = "mouse"),
							(t === "pointerout" || t === "pointerover") &&
								((ut = ad),
								(V = "onPointerLeave"),
								(D = "onPointerEnter"),
								(C = "pointer")),
							(jt = B == null ? j : Tl(B)),
							(N = nt == null ? j : Tl(nt)),
							(j = new ut(V, C + "leave", B, a, Z)),
							(j.target = jt),
							(j.relatedTarget = N),
							(V = null),
							Mi(Z) === U &&
								((ut = new ut(D, C + "enter", nt, a, Z)),
								(ut.target = N),
								(ut.relatedTarget = jt),
								(V = ut)),
							(jt = V),
							B && nt)
						)
							e: {
								for (ut = Vg, D = B, C = nt, N = 0, V = D; V; V = ut(V)) N++;
								V = 0;
								for (var rt = C; rt; rt = ut(rt)) V++;
								for (; 0 < N - V; ) ((D = ut(D)), N--);
								for (; 0 < V - N; ) ((C = ut(C)), V--);
								for (; N--; ) {
									if (D === C || (C !== null && D === C.alternate)) {
										ut = D;
										break e;
									}
									((D = ut(D)), (C = ut(C)));
								}
								ut = null;
							}
						else ut = null;
						(B !== null && k0(K, j, B, ut, !1),
							nt !== null && jt !== null && k0(K, jt, nt, ut, !0));
					}
				}
				t: {
					if (
						((j = U ? Tl(U) : window),
						(B = j.nodeName && j.nodeName.toLowerCase()),
						B === "select" || (B === "input" && j.type === "file"))
					)
						var Mt = fd;
					else if (ud(j))
						if (dd) Mt = tg;
						else {
							Mt = $y;
							var lt = Iy;
						}
					else
						((B = j.nodeName),
							!B ||
							B.toLowerCase() !== "input" ||
							(j.type !== "checkbox" && j.type !== "radio")
								? U && Oo(U.elementType) && (Mt = fd)
								: (Mt = Wy));
					if (Mt && (Mt = Mt(t, U))) {
						cd(K, Mt, a, Z);
						break t;
					}
					(lt && lt(t, j, U),
						t === "focusout" &&
							U &&
							j.type === "number" &&
							U.memoizedProps.value != null &&
							Mo(j, "number", j.value));
				}
				switch (((lt = U ? Tl(U) : window), t)) {
					case "focusin":
						(ud(lt) || lt.contentEditable === "true") &&
							((Bi = lt), (Vo = U), (Ll = null));
						break;
					case "focusout":
						Ll = Vo = Bi = null;
						break;
					case "mousedown":
						Go = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						((Go = !1), Sd(K, a, Z));
						break;
					case "selectionchange":
						if (ng) break;
					case "keydown":
					case "keyup":
						Sd(K, a, Z);
				}
				var yt;
				if (qo)
					t: {
						switch (t) {
							case "compositionstart":
								var _t = "onCompositionStart";
								break t;
							case "compositionend":
								_t = "onCompositionEnd";
								break t;
							case "compositionupdate":
								_t = "onCompositionUpdate";
								break t;
						}
						_t = void 0;
					}
				else
					ji
						? rd(t, a) && (_t = "onCompositionEnd")
						: t === "keydown" &&
							a.keyCode === 229 &&
							(_t = "onCompositionStart");
				(_t &&
					(id &&
						a.locale !== "ko" &&
						(ji || _t !== "onCompositionStart"
							? _t === "onCompositionEnd" && ji && (yt = Wf())
							: ((sa = Z),
								(No = "value" in sa ? sa.value : sa.textContent),
								(ji = !0))),
					(lt = xr(U, _t)),
					0 < lt.length &&
						((_t = new nd(_t, t, null, a, Z)),
						K.push({ event: _t, listeners: lt }),
						yt
							? (_t.data = yt)
							: ((yt = od(a)), yt !== null && (_t.data = yt)))),
					(yt = Ky ? Py(t, a) : ky(t, a)) &&
						((_t = xr(U, "onBeforeInput")),
						0 < _t.length &&
							((lt = new nd("onBeforeInput", "beforeinput", null, a, Z)),
							K.push({ event: lt, listeners: _t }),
							(lt.data = yt))),
					qg(K, t, U, a, Z));
			}
			K0(K, e);
		});
	}
	function is(t, e, a) {
		return { instance: t, listener: e, currentTarget: a };
	}
	function xr(t, e) {
		for (var a = e + "Capture", s = []; t !== null; ) {
			var o = t,
				u = o.stateNode;
			if (
				((o = o.tag),
				(o !== 5 && o !== 26 && o !== 27) ||
					u === null ||
					((o = Rl(t, a)),
					o != null && s.unshift(is(t, o, u)),
					(o = Rl(t, e)),
					o != null && s.push(is(t, o, u))),
				t.tag === 3)
			)
				return s;
			t = t.return;
		}
		return [];
	}
	function Vg(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5 && t.tag !== 27);
		return t || null;
	}
	function k0(t, e, a, s, o) {
		for (var u = e._reactName, p = []; a !== null && a !== s; ) {
			var S = a,
				A = S.alternate,
				U = S.stateNode;
			if (((S = S.tag), A !== null && A === s)) break;
			((S !== 5 && S !== 26 && S !== 27) ||
				U === null ||
				((A = U),
				o
					? ((U = Rl(a, u)), U != null && p.unshift(is(a, U, A)))
					: o || ((U = Rl(a, u)), U != null && p.push(is(a, U, A)))),
				(a = a.return));
		}
		p.length !== 0 && t.push({ event: e, listeners: p });
	}
	var Gg = /\r\n?/g,
		Xg = /\u0000|\uFFFD/g;
	function F0(t) {
		return (typeof t == "string" ? t : "" + t)
			.replace(
				Gg,
				`
`,
			)
			.replace(Xg, "");
	}
	function J0(t, e) {
		return ((e = F0(e)), F0(t) === e);
	}
	function Ut(t, e, a, s, o, u) {
		switch (a) {
			case "children":
				typeof s == "string"
					? e === "body" || (e === "textarea" && s === "") || Li(t, s)
					: (typeof s == "number" || typeof s == "bigint") &&
						e !== "body" &&
						Li(t, "" + s);
				break;
			case "className":
				zs(t, "class", s);
				break;
			case "tabIndex":
				zs(t, "tabindex", s);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				zs(t, a, s);
				break;
			case "style":
				Jf(t, s, u);
				break;
			case "data":
				if (e !== "object") {
					zs(t, "data", s);
					break;
				}
			case "src":
			case "href":
				if (s === "" && (e !== "a" || a !== "href")) {
					t.removeAttribute(a);
					break;
				}
				if (
					s == null ||
					typeof s == "function" ||
					typeof s == "symbol" ||
					typeof s == "boolean"
				) {
					t.removeAttribute(a);
					break;
				}
				((s = Ls("" + s)), t.setAttribute(a, s));
				break;
			case "action":
			case "formAction":
				if (typeof s == "function") {
					t.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof u == "function" &&
						(a === "formAction"
							? (e !== "input" && Ut(t, e, "name", o.name, o, null),
								Ut(t, e, "formEncType", o.formEncType, o, null),
								Ut(t, e, "formMethod", o.formMethod, o, null),
								Ut(t, e, "formTarget", o.formTarget, o, null))
							: (Ut(t, e, "encType", o.encType, o, null),
								Ut(t, e, "method", o.method, o, null),
								Ut(t, e, "target", o.target, o, null)));
				if (s == null || typeof s == "symbol" || typeof s == "boolean") {
					t.removeAttribute(a);
					break;
				}
				((s = Ls("" + s)), t.setAttribute(a, s));
				break;
			case "onClick":
				s != null && (t.onclick = Nn);
				break;
			case "onScroll":
				s != null && St("scroll", t);
				break;
			case "onScrollEnd":
				s != null && St("scrollend", t);
				break;
			case "dangerouslySetInnerHTML":
				if (s != null) {
					if (typeof s != "object" || !("__html" in s)) throw Error(r(61));
					if (((a = s.__html), a != null)) {
						if (o.children != null) throw Error(r(60));
						t.innerHTML = a;
					}
				}
				break;
			case "multiple":
				t.multiple = s && typeof s != "function" && typeof s != "symbol";
				break;
			case "muted":
				t.muted = s && typeof s != "function" && typeof s != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					s == null ||
					typeof s == "function" ||
					typeof s == "boolean" ||
					typeof s == "symbol"
				) {
					t.removeAttribute("xlink:href");
					break;
				}
				((a = Ls("" + s)),
					t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				s != null && typeof s != "function" && typeof s != "symbol"
					? t.setAttribute(a, "" + s)
					: t.removeAttribute(a);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				s && typeof s != "function" && typeof s != "symbol"
					? t.setAttribute(a, "")
					: t.removeAttribute(a);
				break;
			case "capture":
			case "download":
				s === !0
					? t.setAttribute(a, "")
					: s !== !1 &&
						  s != null &&
						  typeof s != "function" &&
						  typeof s != "symbol"
						? t.setAttribute(a, s)
						: t.removeAttribute(a);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				s != null &&
				typeof s != "function" &&
				typeof s != "symbol" &&
				!isNaN(s) &&
				1 <= s
					? t.setAttribute(a, s)
					: t.removeAttribute(a);
				break;
			case "rowSpan":
			case "start":
				s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
					? t.removeAttribute(a)
					: t.setAttribute(a, s);
				break;
			case "popover":
				(St("beforetoggle", t), St("toggle", t), Cs(t, "popover", s));
				break;
			case "xlinkActuate":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
				break;
			case "xlinkArcrole":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
				break;
			case "xlinkRole":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
				break;
			case "xlinkShow":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
				break;
			case "xlinkTitle":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
				break;
			case "xlinkType":
				Ln(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
				break;
			case "xmlBase":
				Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
				break;
			case "xmlLang":
				Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
				break;
			case "xmlSpace":
				Ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
				break;
			case "is":
				Cs(t, "is", s);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < a.length) ||
					(a[0] !== "o" && a[0] !== "O") ||
					(a[1] !== "n" && a[1] !== "N")) &&
					((a = by.get(a) || a), Cs(t, a, s));
		}
	}
	function pc(t, e, a, s, o, u) {
		switch (a) {
			case "style":
				Jf(t, s, u);
				break;
			case "dangerouslySetInnerHTML":
				if (s != null) {
					if (typeof s != "object" || !("__html" in s)) throw Error(r(61));
					if (((a = s.__html), a != null)) {
						if (o.children != null) throw Error(r(60));
						t.innerHTML = a;
					}
				}
				break;
			case "children":
				typeof s == "string"
					? Li(t, s)
					: (typeof s == "number" || typeof s == "bigint") && Li(t, "" + s);
				break;
			case "onScroll":
				s != null && St("scroll", t);
				break;
			case "onScrollEnd":
				s != null && St("scrollend", t);
				break;
			case "onClick":
				s != null && (t.onclick = Nn);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Qf.hasOwnProperty(a))
					t: {
						if (
							a[0] === "o" &&
							a[1] === "n" &&
							((o = a.endsWith("Capture")),
							(e = a.slice(2, o ? a.length - 7 : void 0)),
							(u = t[Be] || null),
							(u = u != null ? u[a] : null),
							typeof u == "function" && t.removeEventListener(e, u, o),
							typeof s == "function")
						) {
							(typeof u != "function" &&
								u !== null &&
								(a in t
									? (t[a] = null)
									: t.hasAttribute(a) && t.removeAttribute(a)),
								t.addEventListener(e, s, o));
							break t;
						}
						a in t
							? (t[a] = s)
							: s === !0
								? t.setAttribute(a, "")
								: Cs(t, a, s);
					}
		}
	}
	function ve(t, e, a) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				(St("error", t), St("load", t));
				var s = !1,
					o = !1,
					u;
				for (u in a)
					if (a.hasOwnProperty(u)) {
						var p = a[u];
						if (p != null)
							switch (u) {
								case "src":
									s = !0;
									break;
								case "srcSet":
									o = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(r(137, e));
								default:
									Ut(t, e, u, p, a, null);
							}
					}
				(o && Ut(t, e, "srcSet", a.srcSet, a, null),
					s && Ut(t, e, "src", a.src, a, null));
				return;
			case "input":
				St("invalid", t);
				var S = (u = p = o = null),
					A = null,
					U = null;
				for (s in a)
					if (a.hasOwnProperty(s)) {
						var Z = a[s];
						if (Z != null)
							switch (s) {
								case "name":
									o = Z;
									break;
								case "type":
									p = Z;
									break;
								case "checked":
									A = Z;
									break;
								case "defaultChecked":
									U = Z;
									break;
								case "value":
									u = Z;
									break;
								case "defaultValue":
									S = Z;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (Z != null) throw Error(r(137, e));
									break;
								default:
									Ut(t, e, s, Z, a, null);
							}
					}
				Kf(t, u, S, A, U, p, o, !1);
				return;
			case "select":
				(St("invalid", t), (s = p = u = null));
				for (o in a)
					if (a.hasOwnProperty(o) && ((S = a[o]), S != null))
						switch (o) {
							case "value":
								u = S;
								break;
							case "defaultValue":
								p = S;
								break;
							case "multiple":
								s = S;
							default:
								Ut(t, e, o, S, a, null);
						}
				((e = u),
					(a = p),
					(t.multiple = !!s),
					e != null ? Di(t, !!s, e, !1) : a != null && Di(t, !!s, a, !0));
				return;
			case "textarea":
				(St("invalid", t), (u = o = s = null));
				for (p in a)
					if (a.hasOwnProperty(p) && ((S = a[p]), S != null))
						switch (p) {
							case "value":
								s = S;
								break;
							case "defaultValue":
								o = S;
								break;
							case "children":
								u = S;
								break;
							case "dangerouslySetInnerHTML":
								if (S != null) throw Error(r(91));
								break;
							default:
								Ut(t, e, p, S, a, null);
						}
				kf(t, s, o, u);
				return;
			case "option":
				for (A in a)
					a.hasOwnProperty(A) &&
						((s = a[A]), s != null) &&
						(A === "selected"
							? (t.selected =
									s && typeof s != "function" && typeof s != "symbol")
							: Ut(t, e, A, s, a, null));
				return;
			case "dialog":
				(St("beforetoggle", t),
					St("toggle", t),
					St("cancel", t),
					St("close", t));
				break;
			case "iframe":
			case "object":
				St("load", t);
				break;
			case "video":
			case "audio":
				for (s = 0; s < as.length; s++) St(as[s], t);
				break;
			case "image":
				(St("error", t), St("load", t));
				break;
			case "details":
				St("toggle", t);
				break;
			case "embed":
			case "source":
			case "link":
				(St("error", t), St("load", t));
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (U in a)
					if (a.hasOwnProperty(U) && ((s = a[U]), s != null))
						switch (U) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(r(137, e));
							default:
								Ut(t, e, U, s, a, null);
						}
				return;
			default:
				if (Oo(e)) {
					for (Z in a)
						a.hasOwnProperty(Z) &&
							((s = a[Z]), s !== void 0 && pc(t, e, Z, s, a, void 0));
					return;
				}
		}
		for (S in a)
			a.hasOwnProperty(S) && ((s = a[S]), s != null && Ut(t, e, S, s, a, null));
	}
	function Kg(t, e, a, s) {
		switch (e) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var o = null,
					u = null,
					p = null,
					S = null,
					A = null,
					U = null,
					Z = null;
				for (B in a) {
					var K = a[B];
					if (a.hasOwnProperty(B) && K != null)
						switch (B) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								A = K;
							default:
								s.hasOwnProperty(B) || Ut(t, e, B, null, s, K);
						}
				}
				for (var j in s) {
					var B = s[j];
					if (((K = a[j]), s.hasOwnProperty(j) && (B != null || K != null)))
						switch (j) {
							case "type":
								u = B;
								break;
							case "name":
								o = B;
								break;
							case "checked":
								U = B;
								break;
							case "defaultChecked":
								Z = B;
								break;
							case "value":
								p = B;
								break;
							case "defaultValue":
								S = B;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (B != null) throw Error(r(137, e));
								break;
							default:
								B !== K && Ut(t, e, j, B, s, K);
						}
				}
				xo(t, p, S, A, U, Z, u, o);
				return;
			case "select":
				B = p = S = j = null;
				for (u in a)
					if (((A = a[u]), a.hasOwnProperty(u) && A != null))
						switch (u) {
							case "value":
								break;
							case "multiple":
								B = A;
							default:
								s.hasOwnProperty(u) || Ut(t, e, u, null, s, A);
						}
				for (o in s)
					if (
						((u = s[o]),
						(A = a[o]),
						s.hasOwnProperty(o) && (u != null || A != null))
					)
						switch (o) {
							case "value":
								j = u;
								break;
							case "defaultValue":
								S = u;
								break;
							case "multiple":
								p = u;
							default:
								u !== A && Ut(t, e, o, u, s, A);
						}
				((e = S),
					(a = p),
					(s = B),
					j != null
						? Di(t, !!a, j, !1)
						: !!s != !!a &&
							(e != null ? Di(t, !!a, e, !0) : Di(t, !!a, a ? [] : "", !1)));
				return;
			case "textarea":
				B = j = null;
				for (S in a)
					if (
						((o = a[S]),
						a.hasOwnProperty(S) && o != null && !s.hasOwnProperty(S))
					)
						switch (S) {
							case "value":
								break;
							case "children":
								break;
							default:
								Ut(t, e, S, null, s, o);
						}
				for (p in s)
					if (
						((o = s[p]),
						(u = a[p]),
						s.hasOwnProperty(p) && (o != null || u != null))
					)
						switch (p) {
							case "value":
								j = o;
								break;
							case "defaultValue":
								B = o;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (o != null) throw Error(r(91));
								break;
							default:
								o !== u && Ut(t, e, p, o, s, u);
						}
				Pf(t, j, B);
				return;
			case "option":
				for (var nt in a)
					((j = a[nt]),
						a.hasOwnProperty(nt) &&
							j != null &&
							!s.hasOwnProperty(nt) &&
							(nt === "selected"
								? (t.selected = !1)
								: Ut(t, e, nt, null, s, j)));
				for (A in s)
					((j = s[A]),
						(B = a[A]),
						s.hasOwnProperty(A) &&
							j !== B &&
							(j != null || B != null) &&
							(A === "selected"
								? (t.selected =
										j && typeof j != "function" && typeof j != "symbol")
								: Ut(t, e, A, j, s, B)));
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var ut in a)
					((j = a[ut]),
						a.hasOwnProperty(ut) &&
							j != null &&
							!s.hasOwnProperty(ut) &&
							Ut(t, e, ut, null, s, j));
				for (U in s)
					if (
						((j = s[U]),
						(B = a[U]),
						s.hasOwnProperty(U) && j !== B && (j != null || B != null))
					)
						switch (U) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (j != null) throw Error(r(137, e));
								break;
							default:
								Ut(t, e, U, j, s, B);
						}
				return;
			default:
				if (Oo(e)) {
					for (var jt in a)
						((j = a[jt]),
							a.hasOwnProperty(jt) &&
								j !== void 0 &&
								!s.hasOwnProperty(jt) &&
								pc(t, e, jt, void 0, s, j));
					for (Z in s)
						((j = s[Z]),
							(B = a[Z]),
							!s.hasOwnProperty(Z) ||
								j === B ||
								(j === void 0 && B === void 0) ||
								pc(t, e, Z, j, s, B));
					return;
				}
		}
		for (var D in a)
			((j = a[D]),
				a.hasOwnProperty(D) &&
					j != null &&
					!s.hasOwnProperty(D) &&
					Ut(t, e, D, null, s, j));
		for (K in s)
			((j = s[K]),
				(B = a[K]),
				!s.hasOwnProperty(K) ||
					j === B ||
					(j == null && B == null) ||
					Ut(t, e, K, j, s, B));
	}
	function I0(t) {
		switch (t) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link":
				return !0;
			default:
				return !1;
		}
	}
	function Pg() {
		if (typeof performance.getEntriesByType == "function") {
			for (
				var t = 0, e = 0, a = performance.getEntriesByType("resource"), s = 0;
				s < a.length;
				s++
			) {
				var o = a[s],
					u = o.transferSize,
					p = o.initiatorType,
					S = o.duration;
				if (u && S && I0(p)) {
					for (p = 0, S = o.responseEnd, s += 1; s < a.length; s++) {
						var A = a[s],
							U = A.startTime;
						if (U > S) break;
						var Z = A.transferSize,
							K = A.initiatorType;
						Z &&
							I0(K) &&
							((A = A.responseEnd), (p += Z * (A < S ? 1 : (S - U) / (A - U))));
					}
					if ((--s, (e += (8 * (u + p)) / (o.duration / 1e3)), t++, 10 < t))
						break;
				}
			}
			if (0 < t) return e / t / 1e6;
		}
		return navigator.connection &&
			((t = navigator.connection.downlink), typeof t == "number")
			? t
			: 5;
	}
	var yc = null,
		gc = null;
	function Mr(t) {
		return t.nodeType === 9 ? t : t.ownerDocument;
	}
	function $0(t) {
		switch (t) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function W0(t, e) {
		if (t === 0)
			switch (e) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return t === 1 && e === "foreignObject" ? 0 : t;
	}
	function vc(t, e) {
		return (
			t === "textarea" ||
			t === "noscript" ||
			typeof e.children == "string" ||
			typeof e.children == "number" ||
			typeof e.children == "bigint" ||
			(typeof e.dangerouslySetInnerHTML == "object" &&
				e.dangerouslySetInnerHTML !== null &&
				e.dangerouslySetInnerHTML.__html != null)
		);
	}
	var bc = null;
	function kg() {
		var t = window.event;
		return t && t.type === "popstate"
			? t === bc
				? !1
				: ((bc = t), !0)
			: ((bc = null), !1);
	}
	var tm = typeof setTimeout == "function" ? setTimeout : void 0,
		Fg = typeof clearTimeout == "function" ? clearTimeout : void 0,
		em = typeof Promise == "function" ? Promise : void 0,
		Jg =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof em < "u"
					? function (t) {
							return em.resolve(null).then(t).catch(Ig);
						}
					: tm;
	function Ig(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function wa(t) {
		return t === "head";
	}
	function nm(t, e) {
		var a = e,
			s = 0;
		do {
			var o = a.nextSibling;
			if ((t.removeChild(a), o && o.nodeType === 8))
				if (((a = o.data), a === "/$" || a === "/&")) {
					if (s === 0) {
						(t.removeChild(o), cl(e));
						return;
					}
					s--;
				} else if (
					a === "$" ||
					a === "$?" ||
					a === "$~" ||
					a === "$!" ||
					a === "&"
				)
					s++;
				else if (a === "html") ls(t.ownerDocument.documentElement);
				else if (a === "head") {
					((a = t.ownerDocument.head), ls(a));
					for (var u = a.firstChild; u; ) {
						var p = u.nextSibling,
							S = u.nodeName;
						(u[wl] ||
							S === "SCRIPT" ||
							S === "STYLE" ||
							(S === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
							a.removeChild(u),
							(u = p));
					}
				} else a === "body" && ls(t.ownerDocument.body);
			a = o;
		} while (a);
		cl(e);
	}
	function am(t, e) {
		var a = t;
		t = 0;
		do {
			var s = a.nextSibling;
			if (
				(a.nodeType === 1
					? e
						? ((a._stashedDisplay = a.style.display),
							(a.style.display = "none"))
						: ((a.style.display = a._stashedDisplay || ""),
							a.getAttribute("style") === "" && a.removeAttribute("style"))
					: a.nodeType === 3 &&
						(e
							? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
							: (a.nodeValue = a._stashedText || "")),
				s && s.nodeType === 8)
			)
				if (((a = s.data), a === "/$")) {
					if (t === 0) break;
					t--;
				} else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
			a = s;
		} while (a);
	}
	function Sc(t) {
		var e = t.firstChild;
		for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
			var a = e;
			switch (((e = e.nextSibling), a.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					(Sc(a), Ro(a));
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (a.rel.toLowerCase() === "stylesheet") continue;
			}
			t.removeChild(a);
		}
	}
	function $g(t, e, a, s) {
		for (; t.nodeType === 1; ) {
			var o = a;
			if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
				if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
			} else if (s) {
				if (!t[wl])
					switch (e) {
						case "meta":
							if (!t.hasAttribute("itemprop")) break;
							return t;
						case "link":
							if (
								((u = t.getAttribute("rel")),
								u === "stylesheet" && t.hasAttribute("data-precedence"))
							)
								break;
							if (
								u !== o.rel ||
								t.getAttribute("href") !==
									(o.href == null || o.href === "" ? null : o.href) ||
								t.getAttribute("crossorigin") !==
									(o.crossOrigin == null ? null : o.crossOrigin) ||
								t.getAttribute("title") !== (o.title == null ? null : o.title)
							)
								break;
							return t;
						case "style":
							if (t.hasAttribute("data-precedence")) break;
							return t;
						case "script":
							if (
								((u = t.getAttribute("src")),
								(u !== (o.src == null ? null : o.src) ||
									t.getAttribute("type") !== (o.type == null ? null : o.type) ||
									t.getAttribute("crossorigin") !==
										(o.crossOrigin == null ? null : o.crossOrigin)) &&
									u &&
									t.hasAttribute("async") &&
									!t.hasAttribute("itemprop"))
							)
								break;
							return t;
						default:
							return t;
					}
			} else if (e === "input" && t.type === "hidden") {
				var u = o.name == null ? null : "" + o.name;
				if (o.type === "hidden" && t.getAttribute("name") === u) return t;
			} else return t;
			if (((t = dn(t.nextSibling)), t === null)) break;
		}
		return null;
	}
	function Wg(t, e, a) {
		if (e === "") return null;
		for (; t.nodeType !== 3; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!a) ||
				((t = dn(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function im(t, e) {
		for (; t.nodeType !== 8; )
			if (
				((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
					!e) ||
				((t = dn(t.nextSibling)), t === null)
			)
				return null;
		return t;
	}
	function Ec(t) {
		return t.data === "$?" || t.data === "$~";
	}
	function _c(t) {
		return (
			t.data === "$!" ||
			(t.data === "$?" && t.ownerDocument.readyState !== "loading")
		);
	}
	function tv(t, e) {
		var a = t.ownerDocument;
		if (t.data === "$~") t._reactRetry = e;
		else if (t.data !== "$?" || a.readyState !== "loading") e();
		else {
			var s = function () {
				(e(), a.removeEventListener("DOMContentLoaded", s));
			};
			(a.addEventListener("DOMContentLoaded", s), (t._reactRetry = s));
		}
	}
	function dn(t) {
		for (; t != null; t = t.nextSibling) {
			var e = t.nodeType;
			if (e === 1 || e === 3) break;
			if (e === 8) {
				if (
					((e = t.data),
					e === "$" ||
						e === "$!" ||
						e === "$?" ||
						e === "$~" ||
						e === "&" ||
						e === "F!" ||
						e === "F")
				)
					break;
				if (e === "/$" || e === "/&") return null;
			}
		}
		return t;
	}
	var wc = null;
	function lm(t) {
		t = t.nextSibling;
		for (var e = 0; t; ) {
			if (t.nodeType === 8) {
				var a = t.data;
				if (a === "/$" || a === "/&") {
					if (e === 0) return dn(t.nextSibling);
					e--;
				} else
					(a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
						e++;
			}
			t = t.nextSibling;
		}
		return null;
	}
	function sm(t) {
		t = t.previousSibling;
		for (var e = 0; t; ) {
			if (t.nodeType === 8) {
				var a = t.data;
				if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
					if (e === 0) return t;
					e--;
				} else (a !== "/$" && a !== "/&") || e++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	function rm(t, e, a) {
		switch (((e = Mr(a)), t)) {
			case "html":
				if (((t = e.documentElement), !t)) throw Error(r(452));
				return t;
			case "head":
				if (((t = e.head), !t)) throw Error(r(453));
				return t;
			case "body":
				if (((t = e.body), !t)) throw Error(r(454));
				return t;
			default:
				throw Error(r(451));
		}
	}
	function ls(t) {
		for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
		Ro(t);
	}
	var hn = new Map(),
		om = new Set();
	function Or(t) {
		return typeof t.getRootNode == "function"
			? t.getRootNode()
			: t.nodeType === 9
				? t
				: t.ownerDocument;
	}
	var Jn = k.d;
	k.d = { f: ev, r: nv, D: av, C: iv, L: lv, m: sv, X: ov, S: rv, M: uv };
	function ev() {
		var t = Jn.f(),
			e = Sr();
		return t || e;
	}
	function nv(t) {
		var e = Oi(t);
		e !== null && e.tag === 5 && e.type === "form" ? Rh(e) : Jn.r(t);
	}
	var rl = typeof document > "u" ? null : document;
	function um(t, e, a) {
		var s = rl;
		if (s && typeof e == "string" && e) {
			var o = ln(e);
			((o = 'link[rel="' + t + '"][href="' + o + '"]'),
				typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
				om.has(o) ||
					(om.add(o),
					(t = { rel: t, crossOrigin: a, href: e }),
					s.querySelector(o) === null &&
						((e = s.createElement("link")),
						ve(e, "link", t),
						ue(e),
						s.head.appendChild(e))));
		}
	}
	function av(t) {
		(Jn.D(t), um("dns-prefetch", t, null));
	}
	function iv(t, e) {
		(Jn.C(t, e), um("preconnect", t, e));
	}
	function lv(t, e, a) {
		Jn.L(t, e, a);
		var s = rl;
		if (s && t && e) {
			var o = 'link[rel="preload"][as="' + ln(e) + '"]';
			e === "image" && a && a.imageSrcSet
				? ((o += '[imagesrcset="' + ln(a.imageSrcSet) + '"]'),
					typeof a.imageSizes == "string" &&
						(o += '[imagesizes="' + ln(a.imageSizes) + '"]'))
				: (o += '[href="' + ln(t) + '"]');
			var u = o;
			switch (e) {
				case "style":
					u = ol(t);
					break;
				case "script":
					u = ul(t);
			}
			hn.has(u) ||
				((t = y(
					{
						rel: "preload",
						href: e === "image" && a && a.imageSrcSet ? void 0 : t,
						as: e,
					},
					a,
				)),
				hn.set(u, t),
				s.querySelector(o) !== null ||
					(e === "style" && s.querySelector(ss(u))) ||
					(e === "script" && s.querySelector(rs(u))) ||
					((e = s.createElement("link")),
					ve(e, "link", t),
					ue(e),
					s.head.appendChild(e)));
		}
	}
	function sv(t, e) {
		Jn.m(t, e);
		var a = rl;
		if (a && t) {
			var s = e && typeof e.as == "string" ? e.as : "script",
				o =
					'link[rel="modulepreload"][as="' + ln(s) + '"][href="' + ln(t) + '"]',
				u = o;
			switch (s) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					u = ul(t);
			}
			if (
				!hn.has(u) &&
				((t = y({ rel: "modulepreload", href: t }, e)),
				hn.set(u, t),
				a.querySelector(o) === null)
			) {
				switch (s) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (a.querySelector(rs(u))) return;
				}
				((s = a.createElement("link")),
					ve(s, "link", t),
					ue(s),
					a.head.appendChild(s));
			}
		}
	}
	function rv(t, e, a) {
		Jn.S(t, e, a);
		var s = rl;
		if (s && t) {
			var o = Ci(s).hoistableStyles,
				u = ol(t);
			e = e || "default";
			var p = o.get(u);
			if (!p) {
				var S = { loading: 0, preload: null };
				if ((p = s.querySelector(ss(u)))) S.loading = 5;
				else {
					((t = y({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
						(a = hn.get(u)) && Tc(t, a));
					var A = (p = s.createElement("link"));
					(ue(A),
						ve(A, "link", t),
						(A._p = new Promise(function (U, Z) {
							((A.onload = U), (A.onerror = Z));
						})),
						A.addEventListener("load", function () {
							S.loading |= 1;
						}),
						A.addEventListener("error", function () {
							S.loading |= 2;
						}),
						(S.loading |= 4),
						Cr(p, e, s));
				}
				((p = { type: "stylesheet", instance: p, count: 1, state: S }),
					o.set(u, p));
			}
		}
	}
	function ov(t, e) {
		Jn.X(t, e);
		var a = rl;
		if (a && t) {
			var s = Ci(a).hoistableScripts,
				o = ul(t),
				u = s.get(o);
			u ||
				((u = a.querySelector(rs(o))),
				u ||
					((t = y({ src: t, async: !0 }, e)),
					(e = hn.get(o)) && Rc(t, e),
					(u = a.createElement("script")),
					ue(u),
					ve(u, "link", t),
					a.head.appendChild(u)),
				(u = { type: "script", instance: u, count: 1, state: null }),
				s.set(o, u));
		}
	}
	function uv(t, e) {
		Jn.M(t, e);
		var a = rl;
		if (a && t) {
			var s = Ci(a).hoistableScripts,
				o = ul(t),
				u = s.get(o);
			u ||
				((u = a.querySelector(rs(o))),
				u ||
					((t = y({ src: t, async: !0, type: "module" }, e)),
					(e = hn.get(o)) && Rc(t, e),
					(u = a.createElement("script")),
					ue(u),
					ve(u, "link", t),
					a.head.appendChild(u)),
				(u = { type: "script", instance: u, count: 1, state: null }),
				s.set(o, u));
		}
	}
	function cm(t, e, a, s) {
		var o = (o = ot.current) ? Or(o) : null;
		if (!o) throw Error(r(446));
		switch (t) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof a.precedence == "string" && typeof a.href == "string"
					? ((e = ol(a.href)),
						(a = Ci(o).hoistableStyles),
						(s = a.get(e)),
						s ||
							((s = { type: "style", instance: null, count: 0, state: null }),
							a.set(e, s)),
						s)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					a.rel === "stylesheet" &&
					typeof a.href == "string" &&
					typeof a.precedence == "string"
				) {
					t = ol(a.href);
					var u = Ci(o).hoistableStyles,
						p = u.get(t);
					if (
						(p ||
							((o = o.ownerDocument || o),
							(p = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							u.set(t, p),
							(u = o.querySelector(ss(t))) &&
								!u._p &&
								((p.instance = u), (p.state.loading = 5)),
							hn.has(t) ||
								((a = {
									rel: "preload",
									as: "style",
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy,
								}),
								hn.set(t, a),
								u || cv(o, t, a, p.state))),
						e && s === null)
					)
						throw Error(r(528, ""));
					return p;
				}
				if (e && s !== null) throw Error(r(529, ""));
				return null;
			case "script":
				return (
					(e = a.async),
					(a = a.src),
					typeof a == "string" &&
					e &&
					typeof e != "function" &&
					typeof e != "symbol"
						? ((e = ul(a)),
							(a = Ci(o).hoistableScripts),
							(s = a.get(e)),
							s ||
								((s = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								a.set(e, s)),
							s)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(r(444, t));
		}
	}
	function ol(t) {
		return 'href="' + ln(t) + '"';
	}
	function ss(t) {
		return 'link[rel="stylesheet"][' + t + "]";
	}
	function fm(t) {
		return y({}, t, { "data-precedence": t.precedence, precedence: null });
	}
	function cv(t, e, a, s) {
		t.querySelector('link[rel="preload"][as="style"][' + e + "]")
			? (s.loading = 1)
			: ((e = t.createElement("link")),
				(s.preload = e),
				e.addEventListener("load", function () {
					return (s.loading |= 1);
				}),
				e.addEventListener("error", function () {
					return (s.loading |= 2);
				}),
				ve(e, "link", a),
				ue(e),
				t.head.appendChild(e));
	}
	function ul(t) {
		return '[src="' + ln(t) + '"]';
	}
	function rs(t) {
		return "script[async]" + t;
	}
	function dm(t, e, a) {
		if ((e.count++, e.instance === null))
			switch (e.type) {
				case "style":
					var s = t.querySelector('style[data-href~="' + ln(a.href) + '"]');
					if (s) return ((e.instance = s), ue(s), s);
					var o = y({}, a, {
						"data-href": a.href,
						"data-precedence": a.precedence,
						href: null,
						precedence: null,
					});
					return (
						(s = (t.ownerDocument || t).createElement("style")),
						ue(s),
						ve(s, "style", o),
						Cr(s, a.precedence, t),
						(e.instance = s)
					);
				case "stylesheet":
					o = ol(a.href);
					var u = t.querySelector(ss(o));
					if (u) return ((e.state.loading |= 4), (e.instance = u), ue(u), u);
					((s = fm(a)),
						(o = hn.get(o)) && Tc(s, o),
						(u = (t.ownerDocument || t).createElement("link")),
						ue(u));
					var p = u;
					return (
						(p._p = new Promise(function (S, A) {
							((p.onload = S), (p.onerror = A));
						})),
						ve(u, "link", s),
						(e.state.loading |= 4),
						Cr(u, a.precedence, t),
						(e.instance = u)
					);
				case "script":
					return (
						(u = ul(a.src)),
						(o = t.querySelector(rs(u)))
							? ((e.instance = o), ue(o), o)
							: ((s = a),
								(o = hn.get(u)) && ((s = y({}, a)), Rc(s, o)),
								(t = t.ownerDocument || t),
								(o = t.createElement("script")),
								ue(o),
								ve(o, "link", s),
								t.head.appendChild(o),
								(e.instance = o))
					);
				case "void":
					return null;
				default:
					throw Error(r(443, e.type));
			}
		else
			e.type === "stylesheet" &&
				(e.state.loading & 4) === 0 &&
				((s = e.instance), (e.state.loading |= 4), Cr(s, a.precedence, t));
		return e.instance;
	}
	function Cr(t, e, a) {
		for (
			var s = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				o = s.length ? s[s.length - 1] : null,
				u = o,
				p = 0;
			p < s.length;
			p++
		) {
			var S = s[p];
			if (S.dataset.precedence === e) u = S;
			else if (u !== o) break;
		}
		u
			? u.parentNode.insertBefore(t, u.nextSibling)
			: ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
	}
	function Tc(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.title == null && (t.title = e.title));
	}
	function Rc(t, e) {
		(t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
			t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
			t.integrity == null && (t.integrity = e.integrity));
	}
	var zr = null;
	function hm(t, e, a) {
		if (zr === null) {
			var s = new Map(),
				o = (zr = new Map());
			o.set(a, s);
		} else ((o = zr), (s = o.get(a)), s || ((s = new Map()), o.set(a, s)));
		if (s.has(t)) return s;
		for (
			s.set(t, null), a = a.getElementsByTagName(t), o = 0;
			o < a.length;
			o++
		) {
			var u = a[o];
			if (
				!(
					u[wl] ||
					u[me] ||
					(t === "link" && u.getAttribute("rel") === "stylesheet")
				) &&
				u.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var p = u.getAttribute(e) || "";
				p = t + p;
				var S = s.get(p);
				S ? S.push(u) : s.set(p, [u]);
			}
		}
		return s;
	}
	function mm(t, e, a) {
		((t = t.ownerDocument || t),
			t.head.insertBefore(
				a,
				e === "title" ? t.querySelector("head > title") : null,
			));
	}
	function fv(t, e, a) {
		if (a === 1 || e.itemProp != null) return !1;
		switch (t) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof e.precedence != "string" ||
					typeof e.href != "string" ||
					e.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof e.rel != "string" ||
					typeof e.href != "string" ||
					e.href === "" ||
					e.onLoad ||
					e.onError
				)
					break;
				return e.rel === "stylesheet"
					? ((t = e.disabled), typeof e.precedence == "string" && t == null)
					: !0;
			case "script":
				if (
					e.async &&
					typeof e.async != "function" &&
					typeof e.async != "symbol" &&
					!e.onLoad &&
					!e.onError &&
					e.src &&
					typeof e.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function pm(t) {
		return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
	}
	function dv(t, e, a, s) {
		if (
			a.type === "stylesheet" &&
			(typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
			(a.state.loading & 4) === 0
		) {
			if (a.instance === null) {
				var o = ol(s.href),
					u = e.querySelector(ss(o));
				if (u) {
					((e = u._p),
						e !== null &&
							typeof e == "object" &&
							typeof e.then == "function" &&
							(t.count++, (t = Dr.bind(t)), e.then(t, t)),
						(a.state.loading |= 4),
						(a.instance = u),
						ue(u));
					return;
				}
				((u = e.ownerDocument || e),
					(s = fm(s)),
					(o = hn.get(o)) && Tc(s, o),
					(u = u.createElement("link")),
					ue(u));
				var p = u;
				((p._p = new Promise(function (S, A) {
					((p.onload = S), (p.onerror = A));
				})),
					ve(u, "link", s),
					(a.instance = u));
			}
			(t.stylesheets === null && (t.stylesheets = new Map()),
				t.stylesheets.set(a, e),
				(e = a.state.preload) &&
					(a.state.loading & 3) === 0 &&
					(t.count++,
					(a = Dr.bind(t)),
					e.addEventListener("load", a),
					e.addEventListener("error", a)));
		}
	}
	var Ac = 0;
	function hv(t, e) {
		return (
			t.stylesheets && t.count === 0 && Nr(t, t.stylesheets),
			0 < t.count || 0 < t.imgCount
				? function (a) {
						var s = setTimeout(function () {
							if ((t.stylesheets && Nr(t, t.stylesheets), t.unsuspend)) {
								var u = t.unsuspend;
								((t.unsuspend = null), u());
							}
						}, 6e4 + e);
						0 < t.imgBytes && Ac === 0 && (Ac = 62500 * Pg());
						var o = setTimeout(
							function () {
								if (
									((t.waitingForImages = !1),
									t.count === 0 &&
										(t.stylesheets && Nr(t, t.stylesheets), t.unsuspend))
								) {
									var u = t.unsuspend;
									((t.unsuspend = null), u());
								}
							},
							(t.imgBytes > Ac ? 50 : 800) + e,
						);
						return (
							(t.unsuspend = a),
							function () {
								((t.unsuspend = null), clearTimeout(s), clearTimeout(o));
							}
						);
					}
				: null
		);
	}
	function Dr() {
		if (
			(this.count--,
			this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
		) {
			if (this.stylesheets) Nr(this, this.stylesheets);
			else if (this.unsuspend) {
				var t = this.unsuspend;
				((this.unsuspend = null), t());
			}
		}
	}
	var Lr = null;
	function Nr(t, e) {
		((t.stylesheets = null),
			t.unsuspend !== null &&
				(t.count++,
				(Lr = new Map()),
				e.forEach(mv, t),
				(Lr = null),
				Dr.call(t)));
	}
	function mv(t, e) {
		if (!(e.state.loading & 4)) {
			var a = Lr.get(t);
			if (a) var s = a.get(null);
			else {
				((a = new Map()), Lr.set(t, a));
				for (
					var o = t.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						u = 0;
					u < o.length;
					u++
				) {
					var p = o[u];
					(p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
						(a.set(p.dataset.precedence, p), (s = p));
				}
				s && a.set(null, s);
			}
			((o = e.instance),
				(p = o.getAttribute("data-precedence")),
				(u = a.get(p) || s),
				u === s && a.set(null, o),
				a.set(p, o),
				this.count++,
				(s = Dr.bind(this)),
				o.addEventListener("load", s),
				o.addEventListener("error", s),
				u
					? u.parentNode.insertBefore(o, u.nextSibling)
					: ((t = t.nodeType === 9 ? t.head : t),
						t.insertBefore(o, t.firstChild)),
				(e.state.loading |= 4));
		}
	}
	var os = {
		$$typeof: q,
		Provider: null,
		Consumer: null,
		_currentValue: st,
		_currentValue2: st,
		_threadCount: 0,
	};
	function pv(t, e, a, s, o, u, p, S, A) {
		((this.tag = 1),
			(this.containerInfo = t),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = ia(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = ia(0)),
			(this.hiddenUpdates = ia(null)),
			(this.identifierPrefix = s),
			(this.onUncaughtError = o),
			(this.onCaughtError = u),
			(this.onRecoverableError = p),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = A),
			(this.incompleteTransitions = new Map()));
	}
	function ym(t, e, a, s, o, u, p, S, A, U, Z, K) {
		return (
			(t = new pv(t, e, a, p, A, U, Z, K, S)),
			(e = 1),
			u === !0 && (e |= 24),
			(u = Pe(3, null, null, e)),
			(t.current = u),
			(u.stateNode = t),
			(e = lu()),
			e.refCount++,
			(t.pooledCache = e),
			e.refCount++,
			(u.memoizedState = { element: s, isDehydrated: a, cache: e }),
			uu(u),
			t
		);
	}
	function gm(t) {
		return t ? ((t = Zi), t) : Zi;
	}
	function vm(t, e, a, s, o, u) {
		((o = gm(o)),
			s.context === null ? (s.context = o) : (s.pendingContext = o),
			(s = da(e)),
			(s.payload = { element: a }),
			(u = u === void 0 ? null : u),
			u !== null && (s.callback = u),
			(a = ha(t, s, e)),
			a !== null && (Ve(a, t, e), Zl(a, t, e)));
	}
	function bm(t, e) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var a = t.retryLane;
			t.retryLane = a !== 0 && a < e ? a : e;
		}
	}
	function xc(t, e) {
		(bm(t, e), (t = t.alternate) && bm(t, e));
	}
	function Sm(t) {
		if (t.tag === 13 || t.tag === 31) {
			var e = Fa(t, 67108864);
			(e !== null && Ve(e, t, 67108864), xc(t, 67108864));
		}
	}
	function Em(t) {
		if (t.tag === 13 || t.tag === 31) {
			var e = $e();
			e = Ai(e);
			var a = Fa(t, e);
			(a !== null && Ve(a, t, e), xc(t, e));
		}
	}
	var Ur = !0;
	function yv(t, e, a, s) {
		var o = L.T;
		L.T = null;
		var u = k.p;
		try {
			((k.p = 2), Mc(t, e, a, s));
		} finally {
			((k.p = u), (L.T = o));
		}
	}
	function gv(t, e, a, s) {
		var o = L.T;
		L.T = null;
		var u = k.p;
		try {
			((k.p = 8), Mc(t, e, a, s));
		} finally {
			((k.p = u), (L.T = o));
		}
	}
	function Mc(t, e, a, s) {
		if (Ur) {
			var o = Oc(s);
			if (o === null) (mc(t, e, s, jr, a), wm(t, s));
			else if (bv(o, t, e, a, s)) s.stopPropagation();
			else if ((wm(t, s), e & 4 && -1 < vv.indexOf(t))) {
				for (; o !== null; ) {
					var u = Oi(o);
					if (u !== null)
						switch (u.tag) {
							case 3:
								if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
									var p = wn(u.pendingLanes);
									if (p !== 0) {
										var S = u;
										for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
											var A = 1 << (31 - Ee(p));
											((S.entanglements[1] |= A), (p &= ~A));
										}
										(xn(u), (zt & 6) === 0 && ((vr = he() + 500), ns(0)));
									}
								}
								break;
							case 31:
							case 13:
								((S = Fa(u, 2)), S !== null && Ve(S, u, 2), Sr(), xc(u, 2));
						}
					if (((u = Oc(s)), u === null && mc(t, e, s, jr, a), u === o)) break;
					o = u;
				}
				o !== null && s.stopPropagation();
			} else mc(t, e, s, null, a);
		}
	}
	function Oc(t) {
		return ((t = zo(t)), Cc(t));
	}
	var jr = null;
	function Cc(t) {
		if (((jr = null), (t = Mi(t)), t !== null)) {
			var e = f(t);
			if (e === null) t = null;
			else {
				var a = e.tag;
				if (a === 13) {
					if (((t = d(e)), t !== null)) return t;
					t = null;
				} else if (a === 31) {
					if (((t = m(e)), t !== null)) return t;
					t = null;
				} else if (a === 3) {
					if (e.stateNode.current.memoizedState.isDehydrated)
						return e.tag === 3 ? e.stateNode.containerInfo : null;
					t = null;
				} else e !== t && (t = null);
			}
		}
		return ((jr = t), null);
	}
	function _m(t) {
		switch (t) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (wi()) {
					case xt:
						return 2;
					case Kt:
						return 8;
					case ae:
					case na:
						return 32;
					case Dn:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var zc = !1,
		Ta = null,
		Ra = null,
		Aa = null,
		us = new Map(),
		cs = new Map(),
		xa = [],
		vv =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function wm(t, e) {
		switch (t) {
			case "focusin":
			case "focusout":
				Ta = null;
				break;
			case "dragenter":
			case "dragleave":
				Ra = null;
				break;
			case "mouseover":
			case "mouseout":
				Aa = null;
				break;
			case "pointerover":
			case "pointerout":
				us.delete(e.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				cs.delete(e.pointerId);
		}
	}
	function fs(t, e, a, s, o, u) {
		return t === null || t.nativeEvent !== u
			? ((t = {
					blockedOn: e,
					domEventName: a,
					eventSystemFlags: s,
					nativeEvent: u,
					targetContainers: [o],
				}),
				e !== null && ((e = Oi(e)), e !== null && Sm(e)),
				t)
			: ((t.eventSystemFlags |= s),
				(e = t.targetContainers),
				o !== null && e.indexOf(o) === -1 && e.push(o),
				t);
	}
	function bv(t, e, a, s, o) {
		switch (e) {
			case "focusin":
				return ((Ta = fs(Ta, t, e, a, s, o)), !0);
			case "dragenter":
				return ((Ra = fs(Ra, t, e, a, s, o)), !0);
			case "mouseover":
				return ((Aa = fs(Aa, t, e, a, s, o)), !0);
			case "pointerover":
				var u = o.pointerId;
				return (us.set(u, fs(us.get(u) || null, t, e, a, s, o)), !0);
			case "gotpointercapture":
				return (
					(u = o.pointerId), cs.set(u, fs(cs.get(u) || null, t, e, a, s, o)), !0
				);
		}
		return !1;
	}
	function Tm(t) {
		var e = Mi(t.target);
		if (e !== null) {
			var a = f(e);
			if (a !== null) {
				if (((e = a.tag), e === 13)) {
					if (((e = d(a)), e !== null)) {
						((t.blockedOn = e),
							Hf(t.priority, function () {
								Em(a);
							}));
						return;
					}
				} else if (e === 31) {
					if (((e = m(a)), e !== null)) {
						((t.blockedOn = e),
							Hf(t.priority, function () {
								Em(a);
							}));
						return;
					}
				} else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function Br(t) {
		if (t.blockedOn !== null) return !1;
		for (var e = t.targetContainers; 0 < e.length; ) {
			var a = Oc(t.nativeEvent);
			if (a === null) {
				a = t.nativeEvent;
				var s = new a.constructor(a.type, a);
				((Co = s), a.target.dispatchEvent(s), (Co = null));
			} else return ((e = Oi(a)), e !== null && Sm(e), (t.blockedOn = a), !1);
			e.shift();
		}
		return !0;
	}
	function Rm(t, e, a) {
		Br(t) && a.delete(e);
	}
	function Sv() {
		((zc = !1),
			Ta !== null && Br(Ta) && (Ta = null),
			Ra !== null && Br(Ra) && (Ra = null),
			Aa !== null && Br(Aa) && (Aa = null),
			us.forEach(Rm),
			cs.forEach(Rm));
	}
	function Hr(t, e) {
		t.blockedOn === e &&
			((t.blockedOn = null),
			zc ||
				((zc = !0),
				n.unstable_scheduleCallback(n.unstable_NormalPriority, Sv)));
	}
	var qr = null;
	function Am(t) {
		qr !== t &&
			((qr = t),
			n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
				qr === t && (qr = null);
				for (var e = 0; e < t.length; e += 3) {
					var a = t[e],
						s = t[e + 1],
						o = t[e + 2];
					if (typeof s != "function") {
						if (Cc(s || a) === null) continue;
						break;
					}
					var u = Oi(a);
					u !== null &&
						(t.splice(e, 3),
						(e -= 3),
						Ou(u, { pending: !0, data: o, method: a.method, action: s }, s, o));
				}
			}));
	}
	function cl(t) {
		function e(A) {
			return Hr(A, t);
		}
		(Ta !== null && Hr(Ta, t),
			Ra !== null && Hr(Ra, t),
			Aa !== null && Hr(Aa, t),
			us.forEach(e),
			cs.forEach(e));
		for (var a = 0; a < xa.length; a++) {
			var s = xa[a];
			s.blockedOn === t && (s.blockedOn = null);
		}
		for (; 0 < xa.length && ((a = xa[0]), a.blockedOn === null); )
			(Tm(a), a.blockedOn === null && xa.shift());
		if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
			for (s = 0; s < a.length; s += 3) {
				var o = a[s],
					u = a[s + 1],
					p = o[Be] || null;
				if (typeof u == "function") p || Am(a);
				else if (p) {
					var S = null;
					if (u && u.hasAttribute("formAction")) {
						if (((o = u), (p = u[Be] || null))) S = p.formAction;
						else if (Cc(o) !== null) continue;
					} else S = p.action;
					(typeof S == "function" ? (a[s + 1] = S) : (a.splice(s, 3), (s -= 3)),
						Am(a));
				}
			}
	}
	function xm() {
		function t(u) {
			u.canIntercept &&
				u.info === "react-transition" &&
				u.intercept({
					handler: function () {
						return new Promise(function (p) {
							return (o = p);
						});
					},
					focusReset: "manual",
					scroll: "manual",
				});
		}
		function e() {
			(o !== null && (o(), (o = null)), s || setTimeout(a, 20));
		}
		function a() {
			if (!s && !navigation.transition) {
				var u = navigation.currentEntry;
				u &&
					u.url != null &&
					navigation.navigate(u.url, {
						state: u.getState(),
						info: "react-transition",
						history: "replace",
					});
			}
		}
		if (typeof navigation == "object") {
			var s = !1,
				o = null;
			return (
				navigation.addEventListener("navigate", t),
				navigation.addEventListener("navigatesuccess", e),
				navigation.addEventListener("navigateerror", e),
				setTimeout(a, 100),
				function () {
					((s = !0),
						navigation.removeEventListener("navigate", t),
						navigation.removeEventListener("navigatesuccess", e),
						navigation.removeEventListener("navigateerror", e),
						o !== null && (o(), (o = null)));
				}
			);
		}
	}
	function Dc(t) {
		this._internalRoot = t;
	}
	((Zr.prototype.render = Dc.prototype.render =
		function (t) {
			var e = this._internalRoot;
			if (e === null) throw Error(r(409));
			var a = e.current,
				s = $e();
			vm(a, s, t, e, null, null);
		}),
		(Zr.prototype.unmount = Dc.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var e = t.containerInfo;
					(vm(t.current, 2, null, t, null, null), Sr(), (e[xi] = null));
				}
			}));
	function Zr(t) {
		this._internalRoot = t;
	}
	Zr.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var e = wo();
			t = { blockedOn: null, target: t, priority: e };
			for (var a = 0; a < xa.length && e !== 0 && e < xa[a].priority; a++);
			(xa.splice(a, 0, t), a === 0 && Tm(t));
		}
	};
	var Mm = i.version;
	if (Mm !== "19.2.4") throw Error(r(527, Mm, "19.2.4"));
	k.findDOMNode = function (t) {
		var e = t._reactInternals;
		if (e === void 0)
			throw typeof t.render == "function"
				? Error(r(188))
				: ((t = Object.keys(t).join(",")), Error(r(268, t)));
		return (
			(t = h(e)),
			(t = t !== null ? v(t) : null),
			(t = t === null ? null : t.stateNode),
			t
		);
	};
	var Ev = {
		bundleType: 0,
		version: "19.2.4",
		rendererPackageName: "react-dom",
		currentDispatcherRef: L,
		reconcilerVersion: "19.2.4",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Qr.isDisabled && Qr.supportsFiber)
			try {
				((Ya = Qr.inject(Ev)), (Ae = Qr));
			} catch {}
	}
	return (
		(hs.createRoot = function (t, e) {
			if (!c(t)) throw Error(r(299));
			var a = !1,
				s = "",
				o = Uh,
				u = jh,
				p = Bh;
			return (
				e != null &&
					(e.unstable_strictMode === !0 && (a = !0),
					e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
					e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
					e.onCaughtError !== void 0 && (u = e.onCaughtError),
					e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
				(e = ym(t, 1, !1, null, null, a, s, null, o, u, p, xm)),
				(t[xi] = e.current),
				hc(t),
				new Dc(e)
			);
		}),
		(hs.hydrateRoot = function (t, e, a) {
			if (!c(t)) throw Error(r(299));
			var s = !1,
				o = "",
				u = Uh,
				p = jh,
				S = Bh,
				A = null;
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (s = !0),
					a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
					a.onCaughtError !== void 0 && (p = a.onCaughtError),
					a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
					a.formState !== void 0 && (A = a.formState)),
				(e = ym(t, 1, !0, e, a ?? null, s, o, A, u, p, S, xm)),
				(e.context = gm(null)),
				(a = e.current),
				(s = $e()),
				(s = Ai(s)),
				(o = da(s)),
				(o.callback = null),
				ha(a, o, s),
				(a = s),
				(e.current.lanes = a),
				Xt(e, a),
				xn(e),
				(t[xi] = e.current),
				hc(t),
				new Zr(e)
			);
		}),
		(hs.version = "19.2.4"),
		hs
	);
}
var Hm;
function Dv() {
	if (Hm) return Uc.exports;
	Hm = 1;
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (i) {
				console.error(i);
			}
	}
	return (n(), (Uc.exports = zv()), Uc.exports);
}
var Lv = Dv(),
	Gt = ((n) => (
		(n[(n.None = 0)] = "None"),
		(n[(n.Mutable = 1)] = "Mutable"),
		(n[(n.Watching = 2)] = "Watching"),
		(n[(n.RecursedCheck = 4)] = "RecursedCheck"),
		(n[(n.Recursed = 8)] = "Recursed"),
		(n[(n.Dirty = 16)] = "Dirty"),
		(n[(n.Pending = 32)] = "Pending"),
		n
	))(Gt || {});
function V1({ update: n, notify: i, unwatched: l }) {
	return {
		link: r,
		unlink: c,
		propagate: f,
		checkDirty: d,
		shallowPropagate: m,
	};
	function r(h, v, y) {
		const b = v.depsTail;
		if (b !== void 0 && b.dep === h) return;
		const E = b !== void 0 ? b.nextDep : v.deps;
		if (E !== void 0 && E.dep === h) {
			((E.version = y), (v.depsTail = E));
			return;
		}
		const w = h.subsTail;
		if (w !== void 0 && w.version === y && w.sub === v) return;
		const x =
			(v.depsTail =
			h.subsTail =
				{
					version: y,
					dep: h,
					sub: v,
					prevDep: b,
					nextDep: E,
					prevSub: w,
					nextSub: void 0,
				});
		(E !== void 0 && (E.prevDep = x),
			b !== void 0 ? (b.nextDep = x) : (v.deps = x),
			w !== void 0 ? (w.nextSub = x) : (h.subs = x));
	}
	function c(h, v = h.sub) {
		const y = h.dep,
			b = h.prevDep,
			E = h.nextDep,
			w = h.nextSub,
			x = h.prevSub;
		return (
			E !== void 0 ? (E.prevDep = b) : (v.depsTail = b),
			b !== void 0 ? (b.nextDep = E) : (v.deps = E),
			w !== void 0 ? (w.prevSub = x) : (y.subsTail = x),
			x !== void 0 ? (x.nextSub = w) : (y.subs = w) === void 0 && l(y),
			E
		);
	}
	function f(h) {
		let v = h.nextSub,
			y;
		t: do {
			const b = h.sub;
			let E = b.flags;
			if (
				(E & 60
					? E & 12
						? E & 4
							? !(E & 48) && g(h, b)
								? ((b.flags = E | 40), (E &= 1))
								: (E = 0)
							: (b.flags = (E & -9) | 32)
						: (E = 0)
					: (b.flags = E | 32),
				E & 2 && i(b),
				E & 1)
			) {
				const w = b.subs;
				if (w !== void 0) {
					const x = (h = w).nextSub;
					x !== void 0 && ((y = { value: v, prev: y }), (v = x));
					continue;
				}
			}
			if ((h = v) !== void 0) {
				v = h.nextSub;
				continue;
			}
			for (; y !== void 0; )
				if (((h = y.value), (y = y.prev), h !== void 0)) {
					v = h.nextSub;
					continue t;
				}
			break;
		} while (!0);
	}
	function d(h, v) {
		let y,
			b = 0,
			E = !1;
		t: do {
			const w = h.dep,
				x = w.flags;
			if (v.flags & 16) E = !0;
			else if ((x & 17) === 17) {
				if (n(w)) {
					const R = w.subs;
					(R.nextSub !== void 0 && m(R), (E = !0));
				}
			} else if ((x & 33) === 33) {
				((h.nextSub !== void 0 || h.prevSub !== void 0) &&
					(y = { value: h, prev: y }),
					(h = w.deps),
					(v = w),
					++b);
				continue;
			}
			if (!E) {
				const R = h.nextDep;
				if (R !== void 0) {
					h = R;
					continue;
				}
			}
			for (; b--; ) {
				const R = v.subs,
					O = R.nextSub !== void 0;
				if ((O ? ((h = y.value), (y = y.prev)) : (h = R), E)) {
					if (n(v)) {
						(O && m(R), (v = h.sub));
						continue;
					}
					E = !1;
				} else v.flags &= -33;
				v = h.sub;
				const H = h.nextDep;
				if (H !== void 0) {
					h = H;
					continue t;
				}
			}
			return E;
		} while (!0);
	}
	function m(h) {
		do {
			const v = h.sub,
				y = v.flags;
			(y & 48) === 32 && ((v.flags = y | 16), (y & 6) === 2 && i(v));
		} while ((h = h.nextSub) !== void 0);
	}
	function g(h, v) {
		let y = v.depsTail;
		for (; y !== void 0; ) {
			if (y === h) return !0;
			y = y.prevDep;
		}
		return !1;
	}
}
let mf = 0,
	oi = 0,
	vs = 0;
const $n = [],
	{
		link: FE,
		unlink: G1,
		propagate: JE,
		checkDirty: Nv,
		shallowPropagate: IE,
	} = V1({
		update(n) {
			return n.depsTail !== void 0 ? Hv(n) : qv(n);
		},
		notify(n) {
			let i = vs,
				l = i;
			do
				if (
					(($n[i++] = n),
					(n.flags &= -3),
					(n = n.subs?.sub),
					n === void 0 || !(n.flags & 2))
				)
					break;
			while (!0);
			for (vs = i; l < --i; ) {
				const r = $n[l];
				(($n[l++] = $n[i]), ($n[i] = r));
			}
		},
		unwatched(n) {
			n.flags & 1
				? n.depsTail !== void 0 &&
					((n.depsTail = void 0), (n.flags = 17), co(n))
				: Yv.call(n);
		},
	});
function Uv() {
	return mf;
}
function jv() {
	++mf;
}
function Bv() {
	--mf || Qv();
}
function Hv(n) {
	((n.depsTail = void 0), (n.flags = 5));
	try {
		const i = n.value;
		return i !== (n.value = n.getter(i));
	} finally {
		((n.flags &= -5), co(n));
	}
}
function qv(n) {
	return ((n.flags = 1), n.currentValue !== (n.currentValue = n.pendingValue));
}
function Zv(n) {
	const i = n.flags;
	if (i & 16 || (i & 32 && Nv(n.deps, n))) {
		((n.depsTail = void 0), (n.flags = 6));
		try {
			n.fn();
		} finally {
			((n.flags &= -5), co(n));
		}
	} else n.flags = 2;
}
function Qv() {
	try {
		for (; oi < vs; ) {
			const n = $n[oi];
			(($n[oi++] = void 0), Zv(n));
		}
	} finally {
		for (; oi < vs; ) {
			const n = $n[oi];
			(($n[oi++] = void 0), (n.flags |= 10));
		}
		((oi = 0), (vs = 0));
	}
}
function Yv() {
	((this.depsTail = void 0), (this.flags = 0), co(this));
	const n = this.subs;
	n !== void 0 && G1(n);
}
function co(n) {
	const i = n.depsTail;
	let l = i !== void 0 ? i.nextDep : n.deps;
	for (; l !== void 0; ) l = G1(l, n);
}
function pf(n, i, l) {
	const r = typeof n == "object",
		c = r ? n : void 0;
	return {
		next: (r ? n.next : n)?.bind(c),
		error: (r ? n.error : i)?.bind(c),
		complete: (r ? n.complete : l)?.bind(c),
	};
}
const tf = [];
let kr = 0;
const {
	link: qm,
	unlink: Vv,
	propagate: Gv,
	checkDirty: X1,
	shallowPropagate: Zm,
} = V1({
	update(n) {
		return n._update();
	},
	notify(n) {
		((tf[ef++] = n), (n.flags &= ~Gt.Watching));
	},
	unwatched(n) {
		n.depsTail !== void 0 &&
			((n.depsTail = void 0), (n.flags = Gt.Mutable | Gt.Dirty), Wr(n));
	},
});
let Yr = 0,
	ef = 0,
	On;
function Wr(n) {
	const i = n.depsTail;
	let l = i !== void 0 ? i.nextDep : n.deps;
	for (; l !== void 0; ) l = Vv(l, n);
}
function K1() {
	if (!(Uv() > 0)) {
		for (; Yr < ef; ) {
			const n = tf[Yr];
			((tf[Yr++] = void 0), n.notify());
		}
		((Yr = 0), (ef = 0));
	}
}
function P1(n, i) {
	const l = typeof n == "function",
		r = n,
		c = {
			_snapshot: l ? void 0 : n,
			subs: void 0,
			subsTail: void 0,
			deps: void 0,
			depsTail: void 0,
			flags: l ? Gt.None : Gt.Mutable,
			get() {
				return (On !== void 0 && qm(c, On, kr), c._snapshot);
			},
			subscribe(f) {
				const d = pf(f),
					m = { current: !1 },
					g = Xv(() => {
						(c.get(), m.current ? d.next?.(c._snapshot) : (m.current = !0));
					});
				return {
					unsubscribe: () => {
						g.stop();
					},
				};
			},
			_update(f) {
				const d = On,
					m = Object.is;
				if (l) ((On = c), ++kr, (c.depsTail = void 0));
				else if (f === void 0) return !1;
				l && (c.flags = Gt.Mutable | Gt.RecursedCheck);
				try {
					const g = c._snapshot,
						h = typeof f == "function" ? f(g) : f === void 0 && l ? r(g) : f;
					return g === void 0 || !m(g, h) ? ((c._snapshot = h), !0) : !1;
				} finally {
					((On = d), l && (c.flags &= ~Gt.RecursedCheck), Wr(c));
				}
			},
		};
	return (
		l
			? ((c.flags = Gt.Mutable | Gt.Dirty),
				(c.get = function () {
					const f = c.flags;
					if (f & Gt.Dirty || (f & Gt.Pending && X1(c.deps, c))) {
						if (c._update()) {
							const d = c.subs;
							d !== void 0 && Zm(d);
						}
					} else f & Gt.Pending && (c.flags = f & ~Gt.Pending);
					return (On !== void 0 && qm(c, On, kr), c._snapshot);
				}))
			: (c.set = function (f) {
					if (c._update(f)) {
						const d = c.subs;
						d !== void 0 && (Gv(d), Zm(d), K1());
					}
				}),
		c
	);
}
function Xv(n) {
	const i = () => {
			const r = On;
			((On = l),
				++kr,
				(l.depsTail = void 0),
				(l.flags = Gt.Watching | Gt.RecursedCheck));
			try {
				return n();
			} finally {
				((On = r), (l.flags &= ~Gt.RecursedCheck), Wr(l));
			}
		},
		l = {
			deps: void 0,
			depsTail: void 0,
			subs: void 0,
			subsTail: void 0,
			flags: Gt.Watching | Gt.RecursedCheck,
			notify() {
				const r = this.flags;
				r & Gt.Dirty || (r & Gt.Pending && X1(this.deps, this))
					? i()
					: (this.flags = Gt.Watching);
			},
			stop() {
				((this.flags = Gt.None), (this.depsTail = void 0), Wr(this));
			},
		};
	return (i(), l);
}
class Kv {
	constructor(i) {
		this.atom = P1(i);
	}
	setState(i) {
		this.atom.set(i);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(i) {
		return this.atom.subscribe(pf(i));
	}
}
class Pv {
	constructor(i) {
		this.atom = P1(i);
	}
	get state() {
		return this.atom.get();
	}
	get() {
		return this.state;
	}
	subscribe(i) {
		return this.atom.subscribe(pf(i));
	}
}
function kv(n) {
	return typeof n == "function" ? new Pv(n) : new Kv(n);
}
function Fv(n) {
	try {
		(jv(), n());
	} finally {
		(Bv(), K1());
	}
}
const La = "__TSR_index",
	Qm = "popstate",
	Ym = "beforeunload";
function Jv(n) {
	let i = n.getLocation();
	const l = new Set(),
		r = (d) => {
			((i = n.getLocation()), l.forEach((m) => m({ location: i, action: d })));
		},
		c = (d) => {
			(n.notifyOnIndexChange ?? !0) ? r(d) : (i = n.getLocation());
		},
		f = async ({ task: d, navigateOpts: m, ...g }) => {
			if (m?.ignoreBlocker ?? !1) {
				d();
				return;
			}
			const v = n.getBlockers?.() ?? [],
				y = g.type === "PUSH" || g.type === "REPLACE";
			if (typeof document < "u" && v.length && y)
				for (const b of v) {
					const E = to(g.path, g.state);
					if (
						await b.blockerFn({
							currentLocation: i,
							nextLocation: E,
							action: g.type,
						})
					) {
						n.onBlocked?.();
						return;
					}
				}
			d();
		};
	return {
		get location() {
			return i;
		},
		get length() {
			return n.getLength();
		},
		subscribers: l,
		subscribe: (d) => (
			l.add(d),
			() => {
				l.delete(d);
			}
		),
		push: (d, m, g) => {
			const h = i.state[La];
			((m = Vm(h + 1, m)),
				f({
					task: () => {
						(n.pushState(d, m), r({ type: "PUSH" }));
					},
					navigateOpts: g,
					type: "PUSH",
					path: d,
					state: m,
				}));
		},
		replace: (d, m, g) => {
			const h = i.state[La];
			((m = Vm(h, m)),
				f({
					task: () => {
						(n.replaceState(d, m), r({ type: "REPLACE" }));
					},
					navigateOpts: g,
					type: "REPLACE",
					path: d,
					state: m,
				}));
		},
		go: (d, m) => {
			f({
				task: () => {
					(n.go(d), c({ type: "GO", index: d }));
				},
				navigateOpts: m,
				type: "GO",
			});
		},
		back: (d) => {
			f({
				task: () => {
					(n.back(d?.ignoreBlocker ?? !1), c({ type: "BACK" }));
				},
				navigateOpts: d,
				type: "BACK",
			});
		},
		forward: (d) => {
			f({
				task: () => {
					(n.forward(d?.ignoreBlocker ?? !1), c({ type: "FORWARD" }));
				},
				navigateOpts: d,
				type: "FORWARD",
			});
		},
		canGoBack: () => i.state[La] !== 0,
		createHref: (d) => n.createHref(d),
		block: (d) => {
			if (!n.setBlockers) return () => {};
			const m = n.getBlockers?.() ?? [];
			return (
				n.setBlockers([...m, d]),
				() => {
					const g = n.getBlockers?.() ?? [];
					n.setBlockers?.(g.filter((h) => h !== d));
				}
			);
		},
		flush: () => n.flush?.(),
		destroy: () => n.destroy?.(),
		notify: r,
	};
}
function Vm(n, i) {
	i || (i = {});
	const l = yf();
	return { ...i, key: l, __TSR_key: l, [La]: n };
}
function Iv(n) {
	const i = typeof document < "u" ? window : void 0,
		l = i.history.pushState,
		r = i.history.replaceState;
	let c = [];
	const f = () => c,
		d = (Y) => (c = Y),
		m = (Y) => Y,
		g = () =>
			to(
				`${i.location.pathname}${i.location.search}${i.location.hash}`,
				i.history.state,
			);
	if (!i.history.state?.__TSR_key && !i.history.state?.key) {
		const Y = yf();
		i.history.replaceState({ [La]: 0, key: Y, __TSR_key: Y }, "");
	}
	let h = g(),
		v,
		y = !1,
		b = !1,
		E = !1,
		w = !1;
	const x = () => h;
	let R, O;
	const H = () => {
			R &&
				((X._ignoreSubscribers = !0),
				(R.isPush ? i.history.pushState : i.history.replaceState)(
					R.state,
					"",
					R.href,
				),
				(X._ignoreSubscribers = !1),
				(R = void 0),
				(O = void 0),
				(v = void 0));
		},
		q = (Y, W, ct) => {
			const it = m(W);
			(O || (v = h),
				(h = to(W, ct)),
				(R = { href: it, state: ct, isPush: R?.isPush || Y === "push" }),
				O || (O = Promise.resolve().then(() => H())));
		},
		Q = (Y) => {
			((h = g()), X.notify({ type: Y }));
		},
		F = async () => {
			if (b) {
				b = !1;
				return;
			}
			const Y = g(),
				W = Y.state[La] - h.state[La],
				ct = W === 1,
				it = W === -1,
				at = (!ct && !it) || y;
			y = !1;
			const wt = at ? "GO" : it ? "BACK" : "FORWARD",
				Tt = at ? { type: "GO", index: W } : { type: it ? "BACK" : "FORWARD" };
			if (E) E = !1;
			else {
				const qt = f();
				if (typeof document < "u" && qt.length) {
					for (const L of qt)
						if (
							await L.blockerFn({
								currentLocation: h,
								nextLocation: Y,
								action: wt,
							})
						) {
							((b = !0), i.history.go(1), X.notify(Tt));
							return;
						}
				}
			}
			((h = g()), X.notify(Tt));
		},
		J = (Y) => {
			if (w) {
				w = !1;
				return;
			}
			let W = !1;
			const ct = f();
			if (typeof document < "u" && ct.length)
				for (const it of ct) {
					const at = it.enableBeforeUnload ?? !0;
					if (at === !0) {
						W = !0;
						break;
					}
					if (typeof at == "function" && at() === !0) {
						W = !0;
						break;
					}
				}
			if (W) return (Y.preventDefault(), (Y.returnValue = ""));
		},
		X = Jv({
			getLocation: x,
			getLength: () => i.history.length,
			pushState: (Y, W) => q("push", Y, W),
			replaceState: (Y, W) => q("replace", Y, W),
			back: (Y) => (Y && (E = !0), (w = !0), i.history.back()),
			forward: (Y) => {
				(Y && (E = !0), (w = !0), i.history.forward());
			},
			go: (Y) => {
				((y = !0), i.history.go(Y));
			},
			createHref: (Y) => m(Y),
			flush: H,
			destroy: () => {
				((i.history.pushState = l),
					(i.history.replaceState = r),
					i.removeEventListener(Ym, J, { capture: !0 }),
					i.removeEventListener(Qm, F));
			},
			onBlocked: () => {
				v && h !== v && (h = v);
			},
			getBlockers: f,
			setBlockers: d,
			notifyOnIndexChange: !1,
		});
	return (
		i.addEventListener(Ym, J, { capture: !0 }),
		i.addEventListener(Qm, F),
		(i.history.pushState = function (...Y) {
			const W = l.apply(i.history, Y);
			return (X._ignoreSubscribers || Q("PUSH"), W);
		}),
		(i.history.replaceState = function (...Y) {
			const W = r.apply(i.history, Y);
			return (X._ignoreSubscribers || Q("REPLACE"), W);
		}),
		X
	);
}
function $v(n) {
	let i = n.replace(/[\x00-\x1f\x7f]/g, "");
	return (i.startsWith("//") && (i = "/" + i.replace(/^\/+/, "")), i);
}
function to(n, i) {
	const l = $v(n),
		r = l.indexOf("#"),
		c = l.indexOf("?"),
		f = yf();
	return {
		href: l,
		pathname: l.substring(
			0,
			r > 0 ? (c > 0 ? Math.min(r, c) : r) : c > 0 ? c : l.length,
		),
		hash: r > -1 ? l.substring(r) : "",
		search: c > -1 ? l.slice(c, r === -1 ? void 0 : r) : "",
		state: i || { [La]: 0, key: f, __TSR_key: f },
	};
}
function yf() {
	return (Math.random() + 1).toString(36).substring(7);
}
const Wv = !1;
function pl(n) {
	let i;
	return (
		Fv(() => {
			i = n();
		}),
		i
	);
}
function Es(n) {
	return n[n.length - 1];
}
function t2(n) {
	return typeof n == "function";
}
function za(n, i) {
	return t2(n) ? n(i) : n;
}
const e2 = Object.prototype.hasOwnProperty,
	Gm = Object.prototype.propertyIsEnumerable,
	n2 = () => Object.create(null),
	ui = (n, i) => ci(n, i, n2);
function ci(n, i, l = () => ({}), r = 0) {
	if (n === i) return n;
	if (r > 500) return i;
	const c = i,
		f = Pm(n) && Pm(c);
	if (!f && !(eo(n) && eo(c))) return c;
	const d = f ? n : Xm(n);
	if (!d) return c;
	const m = f ? c : Xm(c);
	if (!m) return c;
	const g = d.length,
		h = m.length,
		v = f ? new Array(h) : l();
	let y = 0;
	for (let b = 0; b < h; b++) {
		const E = f ? b : m[b],
			w = n[E],
			x = c[E];
		if (w === x) {
			((v[E] = w), (f ? b < g : e2.call(n, E)) && y++);
			continue;
		}
		if (
			w === null ||
			x === null ||
			typeof w != "object" ||
			typeof x != "object"
		) {
			v[E] = x;
			continue;
		}
		const R = ci(w, x, l, r + 1);
		((v[E] = R), R === w && y++);
	}
	return g === h && y === g ? n : v;
}
function Xm(n) {
	const i = Object.getOwnPropertyNames(n);
	for (const c of i) if (!Gm.call(n, c)) return !1;
	const l = Object.getOwnPropertySymbols(n);
	if (l.length === 0) return i;
	const r = i;
	for (const c of l) {
		if (!Gm.call(n, c)) return !1;
		r.push(c);
	}
	return r;
}
function eo(n) {
	if (!Km(n)) return !1;
	const i = n.constructor;
	if (typeof i > "u") return !0;
	const l = i.prototype;
	return !(!Km(l) || !l.hasOwnProperty("isPrototypeOf"));
}
function Km(n) {
	return Object.prototype.toString.call(n) === "[object Object]";
}
function Pm(n) {
	return Array.isArray(n) && n.length === Object.keys(n).length;
}
function mi(n, i, l) {
	if (n === i) return !0;
	if (typeof n != typeof i) return !1;
	if (Array.isArray(n) && Array.isArray(i)) {
		if (n.length !== i.length) return !1;
		for (let r = 0, c = n.length; r < c; r++) if (!mi(n[r], i[r], l)) return !1;
		return !0;
	}
	if (eo(n) && eo(i)) {
		const r = l?.ignoreUndefined ?? !0;
		if (l?.partial) {
			for (const d in i)
				if ((!r || i[d] !== void 0) && !mi(n[d], i[d], l)) return !1;
			return !0;
		}
		let c = 0;
		if (!r) c = Object.keys(n).length;
		else for (const d in n) n[d] !== void 0 && c++;
		let f = 0;
		for (const d in i)
			if ((!r || i[d] !== void 0) && (f++, f > c || !mi(n[d], i[d], l)))
				return !1;
		return c === f;
	}
	return !1;
}
function gi(n) {
	let i, l;
	const r = new Promise((c, f) => {
		((i = c), (l = f));
	});
	return (
		(r.status = "pending"),
		(r.resolve = (c) => {
			((r.status = "resolved"), (r.value = c), i(c), n?.(c));
		}),
		(r.reject = (c) => {
			((r.status = "rejected"), l(c));
		}),
		r
	);
}
function a2(n) {
	return typeof n?.message != "string"
		? !1
		: n.message.startsWith("Failed to fetch dynamically imported module") ||
				n.message.startsWith("error loading dynamically imported module") ||
				n.message.startsWith("Importing a module script failed");
}
function _s(n) {
	return !!(n && typeof n == "object" && typeof n.then == "function");
}
function i2(n) {
	return n.replace(/[\x00-\x1f\x7f]/g, "");
}
function km(n) {
	let i;
	try {
		i = decodeURI(n);
	} catch {
		i = n.replaceAll(/%[0-9A-F]{2}/gi, (l) => {
			try {
				return decodeURI(l);
			} catch {
				return l;
			}
		});
	}
	return i2(i);
}
const l2 = ["http:", "https:", "mailto:", "tel:"];
function no(n, i) {
	if (!n) return !1;
	try {
		const l = new URL(n);
		return !i.has(l.protocol);
	} catch {
		return !1;
	}
}
const s2 = {
		"&": "\\u0026",
		">": "\\u003e",
		"<": "\\u003c",
		"\u2028": "\\u2028",
		"\u2029": "\\u2029",
	},
	r2 = /[&><\u2028\u2029]/g;
function o2(n) {
	return n.replace(r2, (i) => s2[i]);
}
function ms(n) {
	if (!n) return { path: n, handledProtocolRelativeURL: !1 };
	if (!/[%\\\x00-\x1f\x7f]/.test(n) && !n.startsWith("//"))
		return { path: n, handledProtocolRelativeURL: !1 };
	const i = /%25|%5C/gi;
	let l = 0,
		r = "",
		c;
	for (; (c = i.exec(n)) !== null; )
		((r += km(n.slice(l, c.index)) + c[0]), (l = i.lastIndex));
	r = r + km(l ? n.slice(l) : n);
	let f = !1;
	return (
		r.startsWith("//") && ((f = !0), (r = "/" + r.replace(/^\/+/, ""))),
		{ path: r, handledProtocolRelativeURL: f }
	);
}
function u2(n) {
	return /\s|[^\u0000-\u007F]/.test(n)
		? n.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
		: n;
}
var c2 = "Invariant failed";
function We(n, i) {
	if (!n) throw new Error(c2);
}
function ao(n) {
	const i = new Map();
	let l, r;
	const c = (f) => {
		f.next &&
			(f.prev
				? ((f.prev.next = f.next),
					(f.next.prev = f.prev),
					(f.next = void 0),
					r && ((r.next = f), (f.prev = r)))
				: ((f.next.prev = void 0),
					(l = f.next),
					(f.next = void 0),
					r && ((f.prev = r), (r.next = f))),
			(r = f));
	};
	return {
		get(f) {
			const d = i.get(f);
			if (d) return (c(d), d.value);
		},
		set(f, d) {
			if (i.size >= n && l) {
				const g = l;
				(i.delete(g.key),
					g.next && ((l = g.next), (g.next.prev = void 0)),
					g === r && (r = void 0));
			}
			const m = i.get(f);
			if (m) ((m.value = d), c(m));
			else {
				const g = { key: f, value: d, prev: r };
				(r && (r.next = g), (r = g), l || (l = g), i.set(f, g));
			}
		},
		clear() {
			(i.clear(), (l = void 0), (r = void 0));
		},
	};
}
const bl = 0,
	vi = 1,
	bi = 2,
	ws = 3,
	fi = 4,
	k1 = 5;
function f2(n) {
	const i = n.indexOf("{");
	if (i === -1) return null;
	const l = n.indexOf("}", i);
	return l === -1 || i + 1 >= n.length ? null : [i, l];
}
function gf(n, i, l = new Uint16Array(6)) {
	const r = n.indexOf("/", i),
		c = r === -1 ? n.length : r,
		f = n.substring(i, c);
	if (!f || !f.includes("$"))
		return (
			(l[0] = bl), (l[1] = i), (l[2] = i), (l[3] = c), (l[4] = c), (l[5] = c), l
		);
	if (f === "$") {
		const m = n.length;
		return (
			(l[0] = bi), (l[1] = i), (l[2] = i), (l[3] = m), (l[4] = m), (l[5] = m), l
		);
	}
	if (f.charCodeAt(0) === 36)
		return (
			(l[0] = vi),
			(l[1] = i),
			(l[2] = i + 1),
			(l[3] = c),
			(l[4] = c),
			(l[5] = c),
			l
		);
	const d = f2(f);
	if (d) {
		const [m, g] = d,
			h = f.charCodeAt(m + 1);
		if (h === 45) {
			if (m + 2 < f.length && f.charCodeAt(m + 2) === 36) {
				const v = m + 3,
					y = g;
				if (v < y)
					return (
						(l[0] = ws),
						(l[1] = i + m),
						(l[2] = i + v),
						(l[3] = i + y),
						(l[4] = i + g + 1),
						(l[5] = c),
						l
					);
			}
		} else if (h === 36) {
			const v = m + 1,
				y = m + 2;
			return y === g
				? ((l[0] = bi),
					(l[1] = i + m),
					(l[2] = i + v),
					(l[3] = i + y),
					(l[4] = i + g + 1),
					(l[5] = n.length),
					l)
				: ((l[0] = vi),
					(l[1] = i + m),
					(l[2] = i + y),
					(l[3] = i + g),
					(l[4] = i + g + 1),
					(l[5] = c),
					l);
		}
	}
	return (
		(l[0] = bl), (l[1] = i), (l[2] = i), (l[3] = c), (l[4] = c), (l[5] = c), l
	);
}
function fo(n, i, l, r, c, f, d) {
	d?.(l);
	let m = r;
	{
		const g = l.fullPath ?? l.from,
			h = g.length,
			v = l.options?.caseSensitive ?? n,
			y = !!(
				l.options?.params?.parse && l.options?.skipRouteOnParseError?.params
			);
		for (; m < h; ) {
			const E = gf(g, m, i);
			let w;
			const x = m,
				R = E[5];
			switch (((m = R + 1), f++, E[0])) {
				case bl: {
					const H = g.substring(E[2], E[3]);
					if (v) {
						const q = c.static?.get(H);
						if (q) w = q;
						else {
							c.static ??= new Map();
							const Q = di(l.fullPath ?? l.from);
							((Q.parent = c), (Q.depth = f), (w = Q), c.static.set(H, Q));
						}
					} else {
						const q = H.toLowerCase(),
							Q = c.staticInsensitive?.get(q);
						if (Q) w = Q;
						else {
							c.staticInsensitive ??= new Map();
							const F = di(l.fullPath ?? l.from);
							((F.parent = c),
								(F.depth = f),
								(w = F),
								c.staticInsensitive.set(q, F));
						}
					}
					break;
				}
				case vi: {
					const H = g.substring(x, E[1]),
						q = g.substring(E[4], R),
						Q = v && !!(H || q),
						F = H ? (Q ? H : H.toLowerCase()) : void 0,
						J = q ? (Q ? q : q.toLowerCase()) : void 0,
						X =
							!y &&
							c.dynamic?.find(
								(Y) =>
									!Y.skipOnParamError &&
									Y.caseSensitive === Q &&
									Y.prefix === F &&
									Y.suffix === J,
							);
					if (X) w = X;
					else {
						const Y = Zc(vi, l.fullPath ?? l.from, Q, F, J);
						((w = Y),
							(Y.depth = f),
							(Y.parent = c),
							(c.dynamic ??= []),
							c.dynamic.push(Y));
					}
					break;
				}
				case ws: {
					const H = g.substring(x, E[1]),
						q = g.substring(E[4], R),
						Q = v && !!(H || q),
						F = H ? (Q ? H : H.toLowerCase()) : void 0,
						J = q ? (Q ? q : q.toLowerCase()) : void 0,
						X =
							!y &&
							c.optional?.find(
								(Y) =>
									!Y.skipOnParamError &&
									Y.caseSensitive === Q &&
									Y.prefix === F &&
									Y.suffix === J,
							);
					if (X) w = X;
					else {
						const Y = Zc(ws, l.fullPath ?? l.from, Q, F, J);
						((w = Y),
							(Y.parent = c),
							(Y.depth = f),
							(c.optional ??= []),
							c.optional.push(Y));
					}
					break;
				}
				case bi: {
					const H = g.substring(x, E[1]),
						q = g.substring(E[4], R),
						Q = v && !!(H || q),
						F = H ? (Q ? H : H.toLowerCase()) : void 0,
						J = q ? (Q ? q : q.toLowerCase()) : void 0,
						X = Zc(bi, l.fullPath ?? l.from, Q, F, J);
					((w = X),
						(X.parent = c),
						(X.depth = f),
						(c.wildcard ??= []),
						c.wildcard.push(X));
				}
			}
			c = w;
		}
		if (
			y &&
			l.children &&
			!l.isRoot &&
			l.id &&
			l.id.charCodeAt(l.id.lastIndexOf("/") + 1) === 95
		) {
			const E = di(l.fullPath ?? l.from);
			((E.kind = k1),
				(E.parent = c),
				f++,
				(E.depth = f),
				(c.pathless ??= []),
				c.pathless.push(E),
				(c = E));
		}
		const b = (l.path || !l.children) && !l.isRoot;
		if (b && g.endsWith("/")) {
			const E = di(l.fullPath ?? l.from);
			((E.kind = fi),
				(E.parent = c),
				f++,
				(E.depth = f),
				(c.index = E),
				(c = E));
		}
		((c.parse = l.options?.params?.parse ?? null),
			(c.skipOnParamError = y),
			(c.parsingPriority = l.options?.skipRouteOnParseError?.priority ?? 0),
			b && !c.route && ((c.route = l), (c.fullPath = l.fullPath ?? l.from)));
	}
	if (l.children) for (const g of l.children) fo(n, i, g, m, c, f, d);
}
function qc(n, i) {
	if (n.skipOnParamError && !i.skipOnParamError) return -1;
	if (!n.skipOnParamError && i.skipOnParamError) return 1;
	if (
		n.skipOnParamError &&
		i.skipOnParamError &&
		(n.parsingPriority || i.parsingPriority)
	)
		return i.parsingPriority - n.parsingPriority;
	if (n.prefix && i.prefix && n.prefix !== i.prefix) {
		if (n.prefix.startsWith(i.prefix)) return -1;
		if (i.prefix.startsWith(n.prefix)) return 1;
	}
	if (n.suffix && i.suffix && n.suffix !== i.suffix) {
		if (n.suffix.endsWith(i.suffix)) return -1;
		if (i.suffix.endsWith(n.suffix)) return 1;
	}
	return n.prefix && !i.prefix
		? -1
		: !n.prefix && i.prefix
			? 1
			: n.suffix && !i.suffix
				? -1
				: !n.suffix && i.suffix
					? 1
					: n.caseSensitive && !i.caseSensitive
						? -1
						: !n.caseSensitive && i.caseSensitive
							? 1
							: 0;
}
function Oa(n) {
	if (n.pathless) for (const i of n.pathless) Oa(i);
	if (n.static) for (const i of n.static.values()) Oa(i);
	if (n.staticInsensitive) for (const i of n.staticInsensitive.values()) Oa(i);
	if (n.dynamic?.length) {
		n.dynamic.sort(qc);
		for (const i of n.dynamic) Oa(i);
	}
	if (n.optional?.length) {
		n.optional.sort(qc);
		for (const i of n.optional) Oa(i);
	}
	if (n.wildcard?.length) {
		n.wildcard.sort(qc);
		for (const i of n.wildcard) Oa(i);
	}
}
function di(n) {
	return {
		kind: bl,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath: n,
		parent: null,
		parse: null,
		skipOnParamError: !1,
		parsingPriority: 0,
	};
}
function Zc(n, i, l, r, c) {
	return {
		kind: n,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath: i,
		parent: null,
		parse: null,
		skipOnParamError: !1,
		parsingPriority: 0,
		caseSensitive: l,
		prefix: r,
		suffix: c,
	};
}
function d2(n, i) {
	const l = di("/"),
		r = new Uint16Array(6);
	for (const c of n) fo(!1, r, c, 1, l, 0);
	(Oa(l), (i.masksTree = l), (i.flatCache = ao(1e3)));
}
function h2(n, i) {
	n ||= "/";
	const l = i.flatCache.get(n);
	if (l) return l;
	const r = vf(n, i.masksTree);
	return (i.flatCache.set(n, r), r);
}
function m2(n, i, l, r, c) {
	((n ||= "/"), (r ||= "/"));
	const f = i ? `case\0${n}` : n;
	let d = c.singleCache.get(f);
	if (!d) {
		d = di("/");
		const m = new Uint16Array(6);
		(fo(i, m, { from: n }, 1, d, 0), c.singleCache.set(f, d));
	}
	return vf(r, d, l);
}
function p2(n, i, l = !1) {
	const r = l ? n : `nofuzz\0${n}`,
		c = i.matchCache.get(r);
	if (c !== void 0) return c;
	n ||= "/";
	let f;
	try {
		f = vf(n, i.segmentTree, l);
	} catch (d) {
		if (d instanceof URIError) f = null;
		else throw d;
	}
	return (f && (f.branch = v2(f.route)), i.matchCache.set(r, f), f);
}
function y2(n) {
	return n === "/" ? n : n.replace(/\/{1,}$/, "");
}
function g2(n, i = !1, l) {
	const r = di(n.fullPath),
		c = new Uint16Array(6),
		f = {},
		d = {};
	let m = 0;
	return (
		fo(i, c, n, 1, r, 0, (h) => {
			if (
				(l?.(h, m),
				We(!(h.id in f), `Duplicate routes found with id: ${String(h.id)}`),
				(f[h.id] = h),
				m !== 0 && h.path)
			) {
				const v = y2(h.fullPath);
				(!d[v] || h.fullPath.endsWith("/")) && (d[v] = h);
			}
			m++;
		}),
		Oa(r),
		{
			processedTree: {
				segmentTree: r,
				singleCache: ao(1e3),
				matchCache: ao(1e3),
				flatCache: null,
				masksTree: null,
			},
			routesById: f,
			routesByPath: d,
		}
	);
}
function vf(n, i, l = !1) {
	const r = n.split("/"),
		c = S2(n, r, i, l);
	if (!c) return null;
	const [f] = F1(n, r, c);
	return { route: c.node.route, rawParams: f, parsedParams: c.parsedParams };
}
function F1(n, i, l) {
	const r = b2(l.node);
	let c = null;
	const f = Object.create(null);
	let d = l.extract?.part ?? 0,
		m = l.extract?.node ?? 0,
		g = l.extract?.path ?? 0,
		h = l.extract?.segment ?? 0;
	for (; m < r.length; d++, m++, g++, h++) {
		const v = r[m];
		if (v.kind === fi) break;
		if (v.kind === k1) {
			(h--, d--, g--);
			continue;
		}
		const y = i[d],
			b = g;
		if ((y && (g += y.length), v.kind === vi)) {
			c ??= l.node.fullPath.split("/");
			const E = c[h],
				w = v.prefix?.length ?? 0;
			if (E.charCodeAt(w) === 123) {
				const R = v.suffix?.length ?? 0,
					O = E.substring(w + 2, E.length - R - 1),
					H = y.substring(w, y.length - R);
				f[O] = decodeURIComponent(H);
			} else {
				const R = E.substring(1);
				f[R] = decodeURIComponent(y);
			}
		} else if (v.kind === ws) {
			if (l.skipped & (1 << m)) {
				(d--, (g = b - 1));
				continue;
			}
			c ??= l.node.fullPath.split("/");
			const E = c[h],
				w = v.prefix?.length ?? 0,
				x = v.suffix?.length ?? 0,
				R = E.substring(w + 3, E.length - x - 1),
				O = v.suffix || v.prefix ? y.substring(w, y.length - x) : y;
			O && (f[R] = decodeURIComponent(O));
		} else if (v.kind === bi) {
			const E = v,
				w = n.substring(
					b + (E.prefix?.length ?? 0),
					n.length - (E.suffix?.length ?? 0),
				),
				x = decodeURIComponent(w);
			((f["*"] = x), (f._splat = x));
			break;
		}
	}
	return (
		l.rawParams && Object.assign(f, l.rawParams),
		[f, { part: d, node: m, path: g, segment: h }]
	);
}
function v2(n) {
	const i = [n];
	for (; n.parentRoute; ) ((n = n.parentRoute), i.push(n));
	return (i.reverse(), i);
}
function b2(n) {
	const i = Array(n.depth + 1);
	do ((i[n.depth] = n), (n = n.parent));
	while (n);
	return i;
}
function S2(n, i, l, r) {
	if (n === "/" && l.index) return { node: l.index, skipped: 0 };
	const c = !Es(i),
		f = c && n !== "/",
		d = i.length - (c ? 1 : 0),
		m = [
			{
				node: l,
				index: 1,
				skipped: 0,
				depth: 1,
				statics: 1,
				dynamics: 0,
				optionals: 0,
			},
		];
	let g = null,
		h = null,
		v = null;
	for (; m.length; ) {
		const y = m.pop(),
			{
				node: b,
				index: E,
				skipped: w,
				depth: x,
				statics: R,
				dynamics: O,
				optionals: H,
			} = y;
		let { extract: q, rawParams: Q, parsedParams: F } = y;
		if (b.skipOnParamError) {
			if (!Qc(n, i, y)) continue;
			((Q = y.rawParams), (q = y.extract), (F = y.parsedParams));
		}
		r && b.route && b.kind !== fi && ps(h, y) && (h = y);
		const J = E === d;
		if (
			J &&
			(b.route && !f && ps(v, y) && (v = y),
			!b.optional && !b.wildcard && !b.index && !b.pathless)
		)
			continue;
		const X = J ? void 0 : i[E];
		let Y;
		if (J && b.index) {
			const W = {
				node: b.index,
				index: E,
				skipped: w,
				depth: x + 1,
				statics: R,
				dynamics: O,
				optionals: H,
				extract: q,
				rawParams: Q,
				parsedParams: F,
			};
			let ct = !0;
			if ((b.index.skipOnParamError && (Qc(n, i, W) || (ct = !1)), ct)) {
				if (R === d && !O && !H && !w) return W;
				ps(v, W) && (v = W);
			}
		}
		if (b.wildcard && ps(g, y))
			for (const W of b.wildcard) {
				const { prefix: ct, suffix: it } = W;
				if (
					ct &&
					(J || !(W.caseSensitive ? X : (Y ??= X.toLowerCase())).startsWith(ct))
				)
					continue;
				if (it) {
					if (J) continue;
					const wt = i.slice(E).join("/").slice(-it.length);
					if ((W.caseSensitive ? wt : wt.toLowerCase()) !== it) continue;
				}
				const at = {
					node: W,
					index: d,
					skipped: w,
					depth: x,
					statics: R,
					dynamics: O,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				};
				if (!(W.skipOnParamError && !Qc(n, i, at))) {
					g = at;
					break;
				}
			}
		if (b.optional) {
			const W = w | (1 << x),
				ct = x + 1;
			for (let it = b.optional.length - 1; it >= 0; it--) {
				const at = b.optional[it];
				m.push({
					node: at,
					index: E,
					skipped: W,
					depth: ct,
					statics: R,
					dynamics: O,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				});
			}
			if (!J)
				for (let it = b.optional.length - 1; it >= 0; it--) {
					const at = b.optional[it],
						{ prefix: wt, suffix: Tt } = at;
					if (wt || Tt) {
						const qt = at.caseSensitive ? X : (Y ??= X.toLowerCase());
						if ((wt && !qt.startsWith(wt)) || (Tt && !qt.endsWith(Tt)))
							continue;
					}
					m.push({
						node: at,
						index: E + 1,
						skipped: w,
						depth: ct,
						statics: R,
						dynamics: O,
						optionals: H + 1,
						extract: q,
						rawParams: Q,
						parsedParams: F,
					});
				}
		}
		if (!J && b.dynamic && X)
			for (let W = b.dynamic.length - 1; W >= 0; W--) {
				const ct = b.dynamic[W],
					{ prefix: it, suffix: at } = ct;
				if (it || at) {
					const wt = ct.caseSensitive ? X : (Y ??= X.toLowerCase());
					if ((it && !wt.startsWith(it)) || (at && !wt.endsWith(at))) continue;
				}
				m.push({
					node: ct,
					index: E + 1,
					skipped: w,
					depth: x + 1,
					statics: R,
					dynamics: O + 1,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				});
			}
		if (!J && b.staticInsensitive) {
			const W = b.staticInsensitive.get((Y ??= X.toLowerCase()));
			W &&
				m.push({
					node: W,
					index: E + 1,
					skipped: w,
					depth: x + 1,
					statics: R + 1,
					dynamics: O,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				});
		}
		if (!J && b.static) {
			const W = b.static.get(X);
			W &&
				m.push({
					node: W,
					index: E + 1,
					skipped: w,
					depth: x + 1,
					statics: R + 1,
					dynamics: O,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				});
		}
		if (b.pathless) {
			const W = x + 1;
			for (let ct = b.pathless.length - 1; ct >= 0; ct--) {
				const it = b.pathless[ct];
				m.push({
					node: it,
					index: E,
					skipped: w,
					depth: W,
					statics: R,
					dynamics: O,
					optionals: H,
					extract: q,
					rawParams: Q,
					parsedParams: F,
				});
			}
		}
	}
	if (v && g) return ps(g, v) ? v : g;
	if (v) return v;
	if (g) return g;
	if (r && h) {
		let y = h.index;
		for (let E = 0; E < h.index; E++) y += i[E].length;
		const b = y === n.length ? "/" : n.slice(y);
		return (
			(h.rawParams ??= Object.create(null)),
			(h.rawParams["**"] = decodeURIComponent(b)),
			h
		);
	}
	return null;
}
function Qc(n, i, l) {
	try {
		const [r, c] = F1(n, i, l);
		((l.rawParams = r), (l.extract = c));
		const f = l.node.parse(r);
		return (
			(l.parsedParams = Object.assign(Object.create(null), l.parsedParams, f)),
			!0
		);
	} catch {
		return null;
	}
}
function ps(n, i) {
	return n
		? i.statics > n.statics ||
				(i.statics === n.statics &&
					(i.dynamics > n.dynamics ||
						(i.dynamics === n.dynamics &&
							(i.optionals > n.optionals ||
								(i.optionals === n.optionals &&
									((i.node.kind === fi) > (n.node.kind === fi) ||
										((i.node.kind === fi) == (n.node.kind === fi) &&
											i.depth > n.depth)))))))
		: !0;
}
function Fr(n) {
	return bf(n.filter((i) => i !== void 0).join("/"));
}
function bf(n) {
	return n.replace(/\/{2,}/g, "/");
}
function J1(n) {
	return n === "/" ? n : n.replace(/^\/{1,}/, "");
}
function Na(n) {
	const i = n.length;
	return i > 1 && n[i - 1] === "/" ? n.replace(/\/{1,}$/, "") : n;
}
function I1(n) {
	return Na(J1(n));
}
function io(n, i) {
	return n?.endsWith("/") && n !== "/" && n !== `${i}/` ? n.slice(0, -1) : n;
}
function E2(n, i, l) {
	return io(n, l) === io(i, l);
}
function _2({ base: n, to: i, trailingSlash: l = "never", cache: r }) {
	const c = i.startsWith("/"),
		f = !c && i === ".";
	let d;
	if (r) {
		d = c ? i : f ? n : n + "\0" + i;
		const y = r.get(d);
		if (y) return y;
	}
	let m;
	if (f) m = n.split("/");
	else if (c) m = i.split("/");
	else {
		for (m = n.split("/"); m.length > 1 && Es(m) === ""; ) m.pop();
		const y = i.split("/");
		for (let b = 0, E = y.length; b < E; b++) {
			const w = y[b];
			w === ""
				? b
					? b === E - 1 && m.push(w)
					: (m = [w])
				: w === ".."
					? m.pop()
					: w === "." || m.push(w);
		}
	}
	m.length > 1 &&
		(Es(m) === "" ? l === "never" && m.pop() : l === "always" && m.push(""));
	let g,
		h = "";
	for (let y = 0; y < m.length; y++) {
		y > 0 && (h += "/");
		const b = m[y];
		if (!b) continue;
		g = gf(b, 0, g);
		const E = g[0];
		if (E === bl) {
			h += b;
			continue;
		}
		const w = g[5],
			x = b.substring(0, g[1]),
			R = b.substring(g[4], w),
			O = b.substring(g[2], g[3]);
		E === vi
			? (h += x || R ? `${x}{$${O}}${R}` : `$${O}`)
			: E === bi
				? (h += x || R ? `${x}{$}${R}` : "$")
				: (h += `${x}{-$${O}}${R}`);
	}
	h = bf(h);
	const v = h || "/";
	return (d && r && r.set(d, v), v);
}
function w2(n) {
	const i = new Map(n.map((c) => [encodeURIComponent(c), c])),
		l = Array.from(i.keys())
			.map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
			.join("|"),
		r = new RegExp(l, "g");
	return (c) => c.replace(r, (f) => i.get(f) ?? f);
}
function Yc(n, i, l) {
	const r = i[n];
	return typeof r != "string"
		? r
		: n === "_splat"
			? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
				? r
				: r
						.split("/")
						.map((c) => Jm(c, l))
						.join("/")
			: Jm(r, l);
}
function Fm({ path: n, params: i, decoder: l, ...r }) {
	let c = !1;
	const f = Object.create(null);
	if (!n || n === "/")
		return { interpolatedPath: "/", usedParams: f, isMissingParams: c };
	if (!n.includes("$"))
		return { interpolatedPath: n, usedParams: f, isMissingParams: c };
	const d = n.length;
	let m = 0,
		g,
		h = "";
	for (; m < d; ) {
		const y = m;
		g = gf(n, y, g);
		const b = g[5];
		if (((m = b + 1), y === b)) continue;
		const E = g[0];
		if (E === bl) {
			h += "/" + n.substring(y, b);
			continue;
		}
		if (E === bi) {
			const w = i._splat;
			((f._splat = w), (f["*"] = w));
			const x = n.substring(y, g[1]),
				R = n.substring(g[4], b);
			if (!w) {
				((c = !0), (x || R) && (h += "/" + x + R));
				continue;
			}
			const O = Yc("_splat", i, l);
			h += "/" + x + O + R;
			continue;
		}
		if (E === vi) {
			const w = n.substring(g[2], g[3]);
			(!c && !(w in i) && (c = !0), (f[w] = i[w]));
			const x = n.substring(y, g[1]),
				R = n.substring(g[4], b),
				O = Yc(w, i, l) ?? "undefined";
			h += "/" + x + O + R;
			continue;
		}
		if (E === ws) {
			const w = n.substring(g[2], g[3]),
				x = i[w];
			if (x == null) continue;
			f[w] = x;
			const R = n.substring(y, g[1]),
				O = n.substring(g[4], b),
				H = Yc(w, i, l) ?? "";
			h += "/" + R + H + O;
			continue;
		}
	}
	return (
		n.endsWith("/") && (h += "/"),
		{ usedParams: f, interpolatedPath: h || "/", isMissingParams: c }
	);
}
function Jm(n, i) {
	const l = encodeURIComponent(n);
	return i?.(l) ?? l;
}
function Se(n) {
	return !!n?.isNotFound;
}
function T2() {
	try {
		if (typeof window < "u" && typeof window.sessionStorage == "object")
			return window.sessionStorage;
	} catch {}
}
const nf = "tsr-scroll-restoration-v1_3",
	R2 = (n, i) => {
		let l;
		return (...r) => {
			l ||
				(l = setTimeout(() => {
					(n(...r), (l = null));
				}, i));
		};
	};
function A2() {
	const n = T2();
	if (!n) return null;
	const i = n.getItem(nf);
	let l = i ? JSON.parse(i) : {};
	return {
		state: l,
		set: (r) => {
			l = za(r, l) || l;
			try {
				n.setItem(nf, JSON.stringify(l));
			} catch {
				console.warn(
					"[ts-router] Could not persist scroll restoration state to sessionStorage.",
				);
			}
		},
	};
}
const Vr = A2(),
	x2 = (n) => n.state.__TSR_key || n.href;
function M2(n) {
	const i = [];
	let l;
	for (; (l = n.parentNode); )
		(i.push(
			`${n.tagName}:nth-child(${Array.prototype.indexOf.call(l.children, n) + 1})`,
		),
			(n = l));
	return `${i.reverse().join(" > ")}`.toLowerCase();
}
let lo = !1;
function O2({
	storageKey: n,
	key: i,
	behavior: l,
	shouldScrollRestoration: r,
	scrollToTopSelectors: c,
	location: f,
}) {
	let d;
	try {
		d = JSON.parse(sessionStorage.getItem(n) || "{}");
	} catch (h) {
		console.error(h);
		return;
	}
	const m = i || window.history.state?.__TSR_key,
		g = d[m];
	lo = !0;
	t: {
		if (r && g && Object.keys(g).length > 0) {
			for (const y in g) {
				const b = g[y];
				if (y === "window")
					window.scrollTo({ top: b.scrollY, left: b.scrollX, behavior: l });
				else if (y) {
					const E = document.querySelector(y);
					E && ((E.scrollLeft = b.scrollX), (E.scrollTop = b.scrollY));
				}
			}
			break t;
		}
		const h = (f ?? window.location).hash.split("#", 2)[1];
		if (h) {
			const y = window.history.state?.__hashScrollIntoViewOptions ?? !0;
			if (y) {
				const b = document.getElementById(h);
				b && b.scrollIntoView(y);
			}
			break t;
		}
		const v = { top: 0, left: 0, behavior: l };
		if ((window.scrollTo(v), c))
			for (const y of c) {
				if (y === "window") continue;
				const b = typeof y == "function" ? y() : document.querySelector(y);
				b && b.scrollTo(v);
			}
	}
	lo = !1;
}
function C2(n, i) {
	if (
		!Vr ||
		((n.options.scrollRestoration ?? !1) && (n.isScrollRestoring = !0),
		n.isScrollRestorationSetup || !Vr)
	)
		return;
	((n.isScrollRestorationSetup = !0), (lo = !1));
	const r = n.options.getScrollRestorationKey || x2;
	window.history.scrollRestoration = "manual";
	const c = (f) => {
		if (lo || !n.isScrollRestoring) return;
		let d = "";
		if (f.target === document || f.target === window) d = "window";
		else {
			const g = f.target.getAttribute("data-scroll-restoration-id");
			g ? (d = `[data-scroll-restoration-id="${g}"]`) : (d = M2(f.target));
		}
		const m = r(n.state.location);
		Vr.set((g) => {
			const h = (g[m] ||= {}),
				v = (h[d] ||= {});
			if (d === "window")
				((v.scrollX = window.scrollX || 0), (v.scrollY = window.scrollY || 0));
			else if (d) {
				const y = document.querySelector(d);
				y && ((v.scrollX = y.scrollLeft || 0), (v.scrollY = y.scrollTop || 0));
			}
			return g;
		});
	};
	(typeof document < "u" && document.addEventListener("scroll", R2(c, 100), !0),
		n.subscribe("onRendered", (f) => {
			const d = r(f.toLocation);
			if (!n.resetNextScroll) {
				n.resetNextScroll = !0;
				return;
			}
			(typeof n.options.scrollRestoration == "function" &&
				!n.options.scrollRestoration({ location: n.latestLocation })) ||
				(O2({
					storageKey: nf,
					key: d,
					behavior: n.options.scrollRestorationBehavior,
					shouldScrollRestoration: n.isScrollRestoring,
					scrollToTopSelectors: n.options.scrollToTopSelectors,
					location: n.history.location,
				}),
				n.isScrollRestoring && Vr.set((m) => ((m[d] ||= {}), m)));
		}));
}
function z2(n) {
	if (typeof document < "u" && document.querySelector) {
		const i = n.state.location.state.__hashScrollIntoViewOptions ?? !0;
		if (i && n.state.location.hash !== "") {
			const l = document.getElementById(n.state.location.hash);
			l && l.scrollIntoView(i);
		}
	}
}
function $1(n, i = String) {
	const l = new URLSearchParams();
	for (const r in n) {
		const c = n[r];
		c !== void 0 && l.set(r, i(c));
	}
	return l.toString();
}
function Vc(n) {
	return n
		? n === "false"
			? !1
			: n === "true"
				? !0
				: +n * 0 === 0 && +n + "" === n
					? +n
					: n
		: "";
}
function D2(n) {
	const i = new URLSearchParams(n),
		l = Object.create(null);
	for (const [r, c] of i.entries()) {
		const f = l[r];
		f == null
			? (l[r] = Vc(c))
			: Array.isArray(f)
				? f.push(Vc(c))
				: (l[r] = [f, Vc(c)]);
	}
	return l;
}
const L2 = U2(JSON.parse),
	N2 = j2(JSON.stringify, JSON.parse);
function U2(n) {
	return (i) => {
		i[0] === "?" && (i = i.substring(1));
		const l = D2(i);
		for (const r in l) {
			const c = l[r];
			if (typeof c == "string")
				try {
					l[r] = n(c);
				} catch {}
		}
		return l;
	};
}
function j2(n, i) {
	const l = typeof i == "function";
	function r(c) {
		if (typeof c == "object" && c !== null)
			try {
				return n(c);
			} catch {}
		else if (l && typeof c == "string")
			try {
				return (i(c), n(c));
			} catch {}
		return c;
	}
	return (c) => {
		const f = $1(c, r);
		return f ? `?${f}` : "";
	};
}
const mn = "__root__";
function Sf(n) {
	if (
		((n.statusCode = n.statusCode || n.code || 307),
		!n._builtLocation && !n.reloadDocument && typeof n.href == "string")
	)
		try {
			(new URL(n.href), (n.reloadDocument = !0));
		} catch {}
	const i = new Headers(n.headers);
	n.href && i.get("Location") === null && i.set("Location", n.href);
	const l = new Response(null, { status: n.statusCode, headers: i });
	if (((l.options = n), n.throw)) throw l;
	return l;
}
function be(n) {
	return n instanceof Response && !!n.options;
}
function W1(n) {
	if (n !== null && typeof n == "object" && n.isSerializedRedirect)
		return Sf(n);
}
const af = (n) => {
		if (!n.rendered) return ((n.rendered = !0), n.onReady?.());
	},
	ho = (n, i) =>
		!!(n.preload && !n.router.state.matches.some((l) => l.id === i)),
	pi = (n, i, l = !0) => {
		const r = { ...(n.router.options.context ?? {}) },
			c = l ? i : i - 1;
		for (let f = 0; f <= c; f++) {
			const d = n.matches[f];
			if (!d) continue;
			const m = n.router.getMatch(d.id);
			m && Object.assign(r, m.__routeContext, m.__beforeLoadContext);
		}
		return r;
	},
	Im = (n, i) => {
		if (!n.matches.length) return;
		const l = i.routeId,
			r = n.matches.findIndex((d) => d.routeId === n.router.routeTree.id),
			c = r >= 0 ? r : 0;
		let f = l
			? n.matches.findIndex((d) => d.routeId === l)
			: (n.firstBadMatchIndex ?? n.matches.length - 1);
		f < 0 && (f = c);
		for (let d = f; d >= 0; d--) {
			const m = n.matches[d];
			if (n.router.looseRoutesById[m.routeId].options.notFoundComponent)
				return d;
		}
		return l ? f : c;
	},
	Da = (n, i, l) => {
		if (!(!be(l) && !Se(l)))
			throw (
				(be(l) && l.redirectHandled && !l.options.reloadDocument) ||
					(i &&
						(i._nonReactive.beforeLoadPromise?.resolve(),
						i._nonReactive.loaderPromise?.resolve(),
						(i._nonReactive.beforeLoadPromise = void 0),
						(i._nonReactive.loaderPromise = void 0),
						(i._nonReactive.error = l),
						n.updateMatch(i.id, (r) => ({
							...r,
							status: be(l)
								? "redirected"
								: r.status === "pending"
									? "success"
									: r.status,
							context: pi(n, i.index),
							isFetching: !1,
							error: l,
						})),
						Se(l) && !l.routeId && (l.routeId = i.routeId),
						i._nonReactive.loadPromise?.resolve()),
					be(l) &&
						((n.rendered = !0),
						(l.options._fromLocation = n.location),
						(l.redirectHandled = !0),
						(l = n.router.resolveRedirect(l)))),
				l
			);
	},
	tp = (n, i) => {
		const l = n.router.getMatch(i);
		return !!(!l || l._nonReactive.dehydrated);
	},
	$m = (n, i, l) => {
		const r = pi(n, l);
		n.updateMatch(i, (c) => ({ ...c, context: r }));
	},
	ys = (n, i, l, r) => {
		const { id: c, routeId: f } = n.matches[i],
			d = n.router.looseRoutesById[f];
		if (l instanceof Promise) throw l;
		((l.routerCode = r),
			(n.firstBadMatchIndex ??= i),
			Da(n, n.router.getMatch(c), l));
		try {
			d.options.onError?.(l);
		} catch (m) {
			((l = m), Da(n, n.router.getMatch(c), l));
		}
		(n.updateMatch(
			c,
			(m) => (
				m._nonReactive.beforeLoadPromise?.resolve(),
				(m._nonReactive.beforeLoadPromise = void 0),
				m._nonReactive.loadPromise?.resolve(),
				{
					...m,
					error: l,
					status: "error",
					isFetching: !1,
					updatedAt: Date.now(),
					abortController: new AbortController(),
				}
			),
		),
			!n.preload && !be(l) && !Se(l) && (n.serialError ??= l));
	},
	ep = (n, i, l, r) => {
		if (r._nonReactive.pendingTimeout !== void 0) return;
		const c = l.options.pendingMs ?? n.router.options.defaultPendingMs;
		if (
			!!(
				n.onReady &&
				!ho(n, i) &&
				(l.options.loader || l.options.beforeLoad || ap(l)) &&
				typeof c == "number" &&
				c !== 1 / 0 &&
				(l.options.pendingComponent ??
					n.router.options?.defaultPendingComponent)
			)
		) {
			const d = setTimeout(() => {
				af(n);
			}, c);
			r._nonReactive.pendingTimeout = d;
		}
	},
	B2 = (n, i, l) => {
		const r = n.router.getMatch(i);
		if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
			return;
		ep(n, i, l, r);
		const c = () => {
			const f = n.router.getMatch(i);
			f.preload &&
				(f.status === "redirected" || f.status === "notFound") &&
				Da(n, f, f.error);
		};
		return r._nonReactive.beforeLoadPromise
			? r._nonReactive.beforeLoadPromise.then(c)
			: c();
	},
	H2 = (n, i, l, r) => {
		const c = n.router.getMatch(i),
			f = c._nonReactive.loadPromise;
		c._nonReactive.loadPromise = gi(() => {
			f?.resolve();
		});
		const { paramsError: d, searchError: m } = c;
		(d && ys(n, l, d, "PARSE_PARAMS"),
			m && ys(n, l, m, "VALIDATE_SEARCH"),
			ep(n, i, r, c));
		const g = new AbortController();
		let h = !1;
		const v = () => {
				h ||
					((h = !0),
					n.updateMatch(i, (Q) => ({
						...Q,
						isFetching: "beforeLoad",
						fetchCount: Q.fetchCount + 1,
						abortController: g,
					})));
			},
			y = () => {
				(c._nonReactive.beforeLoadPromise?.resolve(),
					(c._nonReactive.beforeLoadPromise = void 0),
					n.updateMatch(i, (Q) => ({ ...Q, isFetching: !1 })));
			};
		if (!r.options.beforeLoad) {
			pl(() => {
				(v(), y());
			});
			return;
		}
		c._nonReactive.beforeLoadPromise = gi();
		const b = { ...pi(n, l, !1), ...c.__routeContext },
			{ search: E, params: w, cause: x } = c,
			R = ho(n, i),
			O = {
				search: E,
				abortController: g,
				params: w,
				preload: R,
				context: b,
				location: n.location,
				navigate: (Q) => n.router.navigate({ ...Q, _fromLocation: n.location }),
				buildLocation: n.router.buildLocation,
				cause: R ? "preload" : x,
				matches: n.matches,
				routeId: r.id,
				...n.router.options.additionalContext,
			},
			H = (Q) => {
				if (Q === void 0) {
					pl(() => {
						(v(), y());
					});
					return;
				}
				((be(Q) || Se(Q)) && (v(), ys(n, l, Q, "BEFORE_LOAD")),
					pl(() => {
						(v(),
							n.updateMatch(i, (F) => ({ ...F, __beforeLoadContext: Q })),
							y());
					}));
			};
		let q;
		try {
			if (((q = r.options.beforeLoad(O)), _s(q)))
				return (
					v(),
					q
						.catch((Q) => {
							ys(n, l, Q, "BEFORE_LOAD");
						})
						.then(H)
				);
		} catch (Q) {
			(v(), ys(n, l, Q, "BEFORE_LOAD"));
		}
		H(q);
	},
	q2 = (n, i) => {
		const { id: l, routeId: r } = n.matches[i],
			c = n.router.looseRoutesById[r],
			f = () => m(),
			d = () => H2(n, l, i, c),
			m = () => {
				if (tp(n, l)) return;
				const g = B2(n, l, c);
				return _s(g) ? g.then(d) : d();
			};
		return f();
	},
	Z2 = (n, i, l) => {
		const r = n.router.getMatch(i);
		if (!r || (!l.options.head && !l.options.scripts && !l.options.headers))
			return;
		const c = {
			ssr: n.router.options.ssr,
			matches: n.matches,
			match: r,
			params: r.params,
			loaderData: r.loaderData,
		};
		return Promise.all([
			l.options.head?.(c),
			l.options.scripts?.(c),
			l.options.headers?.(c),
		]).then(([f, d, m]) => {
			const g = f?.meta,
				h = f?.links,
				v = f?.scripts,
				y = f?.styles;
			return {
				meta: g,
				links: h,
				headScripts: v,
				headers: m,
				scripts: d,
				styles: y,
			};
		});
	},
	np = (n, i, l, r, c) => {
		const f = i[r - 1],
			{
				params: d,
				loaderDeps: m,
				abortController: g,
				cause: h,
			} = n.router.getMatch(l),
			v = pi(n, r),
			y = ho(n, l);
		return {
			params: d,
			deps: m,
			preload: !!y,
			parentMatchPromise: f,
			abortController: g,
			context: v,
			location: n.location,
			navigate: (b) => n.router.navigate({ ...b, _fromLocation: n.location }),
			cause: y ? "preload" : h,
			route: c,
			...n.router.options.additionalContext,
		};
	},
	Wm = async (n, i, l, r, c) => {
		try {
			const f = n.router.getMatch(l);
			try {
				(!(Wv ?? n.router.isServer) || f.ssr === !0) && Ts(c);
				const d = c.options.loader?.(np(n, i, l, r, c)),
					m = c.options.loader && _s(d);
				if (
					((m ||
						c._lazyPromise ||
						c._componentsPromise ||
						c.options.head ||
						c.options.scripts ||
						c.options.headers ||
						f._nonReactive.minPendingPromise) &&
						n.updateMatch(l, (v) => ({ ...v, isFetching: "loader" })),
					c.options.loader)
				) {
					const v = m ? await d : d;
					(Da(n, n.router.getMatch(l), v),
						v !== void 0 && n.updateMatch(l, (y) => ({ ...y, loaderData: v })));
				}
				c._lazyPromise && (await c._lazyPromise);
				const h = f._nonReactive.minPendingPromise;
				(h && (await h),
					c._componentsPromise && (await c._componentsPromise),
					n.updateMatch(l, (v) => ({
						...v,
						error: void 0,
						context: pi(n, r),
						status: "success",
						isFetching: !1,
						updatedAt: Date.now(),
					})));
			} catch (d) {
				let m = d;
				if (m?.name === "AbortError") {
					if (f.abortController.signal.aborted) {
						(f._nonReactive.loaderPromise?.resolve(),
							(f._nonReactive.loaderPromise = void 0));
						return;
					}
					n.updateMatch(l, (h) => ({
						...h,
						status: h.status === "pending" ? "success" : h.status,
						isFetching: !1,
						context: pi(n, r),
					}));
					return;
				}
				const g = f._nonReactive.minPendingPromise;
				(g && (await g),
					Se(d) && (await c.options.notFoundComponent?.preload?.()),
					Da(n, n.router.getMatch(l), d));
				try {
					c.options.onError?.(d);
				} catch (h) {
					((m = h), Da(n, n.router.getMatch(l), h));
				}
				(!be(m) && !Se(m) && (await Ts(c, ["errorComponent"])),
					n.updateMatch(l, (h) => ({
						...h,
						error: m,
						context: pi(n, r),
						status: "error",
						isFetching: !1,
					})));
			}
		} catch (f) {
			const d = n.router.getMatch(l);
			(d && (d._nonReactive.loaderPromise = void 0), Da(n, d, f));
		}
	},
	Q2 = async (n, i, l) => {
		async function r(y, b, E, w, x) {
			const R = Date.now() - b.updatedAt,
				O = y
					? (x.options.preloadStaleTime ??
						n.router.options.defaultPreloadStaleTime ??
						3e4)
					: (x.options.staleTime ?? n.router.options.defaultStaleTime ?? 0),
				H = x.options.shouldReload,
				q = typeof H == "function" ? H(np(n, i, c, l, x)) : H,
				{ status: Q, invalid: F } = w,
				J =
					R > O &&
					(!!n.forceStaleReload ||
						w.cause === "enter" ||
						(E !== void 0 && E !== w.id));
			((d = Q === "success" && (F || (q ?? J))),
				(y && x.options.preload === !1) ||
					(d && !n.sync
						? ((m = !0),
							(async () => {
								try {
									await Wm(n, i, c, l, x);
									const X = n.router.getMatch(c);
									(X._nonReactive.loaderPromise?.resolve(),
										X._nonReactive.loadPromise?.resolve(),
										(X._nonReactive.loaderPromise = void 0));
								} catch (X) {
									be(X) && (await n.router.navigate(X.options));
								}
							})())
						: Q !== "success" || (d && n.sync)
							? await Wm(n, i, c, l, x)
							: $m(n, c, l)));
		}
		const { id: c, routeId: f } = n.matches[l];
		let d = !1,
			m = !1;
		const g = n.router.looseRoutesById[f];
		if (tp(n, c)) {
			if (!n.router.getMatch(c)) return n.matches[l];
			$m(n, c, l);
		} else {
			const y = n.router.getMatch(c),
				b =
					n.router.state.matches[l]?.routeId === f
						? n.router.state.matches[l].id
						: n.router.state.matches.find((w) => w.routeId === f)?.id,
				E = ho(n, c);
			if (y._nonReactive.loaderPromise) {
				if (y.status === "success" && !n.sync && !y.preload) return y;
				await y._nonReactive.loaderPromise;
				const w = n.router.getMatch(c),
					x = w._nonReactive.error || w.error;
				(x && Da(n, w, x), w.status === "pending" && (await r(E, y, b, w, g)));
			} else {
				const w = E && !n.router.state.matches.some((R) => R.id === c),
					x = n.router.getMatch(c);
				((x._nonReactive.loaderPromise = gi()),
					w !== x.preload && n.updateMatch(c, (R) => ({ ...R, preload: w })),
					await r(E, y, b, x, g));
			}
		}
		const h = n.router.getMatch(c);
		(m ||
			(h._nonReactive.loaderPromise?.resolve(),
			h._nonReactive.loadPromise?.resolve()),
			clearTimeout(h._nonReactive.pendingTimeout),
			(h._nonReactive.pendingTimeout = void 0),
			m || (h._nonReactive.loaderPromise = void 0),
			(h._nonReactive.dehydrated = void 0));
		const v = m ? h.isFetching : !1;
		return v !== h.isFetching || h.invalid !== !1
			? (n.updateMatch(c, (y) => ({ ...y, isFetching: v, invalid: !1 })),
				n.router.getMatch(c))
			: h;
	};
async function t1(n) {
	const i = n,
		l = [];
	i.router.state.matches.some((b) => b._forcePending) && af(i);
	let r;
	for (let b = 0; b < i.matches.length; b++) {
		try {
			const E = q2(i, b);
			_s(E) && (await E);
		} catch (E) {
			if (be(E)) throw E;
			if (Se(E)) r = E;
			else if (!i.preload) throw E;
			break;
		}
		if (i.serialError) break;
	}
	const c = i.firstBadMatchIndex ?? i.matches.length,
		f = r && !i.preload ? Im(i, r) : void 0,
		d = r && i.preload ? 0 : f !== void 0 ? Math.min(f + 1, c) : c;
	let m, g;
	for (let b = 0; b < d; b++) l.push(Q2(i, l, b));
	try {
		await Promise.all(l);
	} catch {
		const b = await Promise.allSettled(l);
		for (const E of b) {
			if (E.status !== "rejected") continue;
			const w = E.reason;
			if (be(w)) throw w;
			Se(w) ? (m ??= w) : (g ??= w);
		}
		if (g !== void 0) throw g;
	}
	const h = m ?? (r && !i.preload ? r : void 0);
	let v = i.serialError ? (i.firstBadMatchIndex ?? 0) : i.matches.length - 1;
	if (!h && r && i.preload) return i.matches;
	if (h) {
		const b = Im(i, h);
		We(b !== void 0);
		const E = i.matches[b],
			w = i.router.looseRoutesById[E.routeId],
			x = i.router.options?.defaultNotFoundComponent;
		(!w.options.notFoundComponent && x && (w.options.notFoundComponent = x),
			(h.routeId = E.routeId));
		const R = E.routeId === i.router.routeTree.id;
		(i.updateMatch(E.id, (O) => ({
			...O,
			...(R
				? { status: "success", globalNotFound: !0, error: void 0 }
				: { status: "notFound", error: h }),
			isFetching: !1,
		})),
			(v = b),
			await Ts(w, ["notFoundComponent"]));
	} else if (!i.preload) {
		const b = i.matches[0];
		b.globalNotFound ||
			(i.router.getMatch(b.id)?.globalNotFound &&
				i.updateMatch(b.id, (w) => ({
					...w,
					globalNotFound: !1,
					error: void 0,
				})));
	}
	if (i.serialError && i.firstBadMatchIndex !== void 0) {
		const b = i.router.looseRoutesById[i.matches[i.firstBadMatchIndex].routeId];
		await Ts(b, ["errorComponent"]);
	}
	for (let b = 0; b <= v; b++) {
		const E = i.matches[b],
			{ id: w, routeId: x } = E,
			R = i.router.looseRoutesById[x];
		try {
			const O = Z2(i, w, R);
			if (O) {
				const H = await O;
				i.updateMatch(w, (q) => ({ ...q, ...H }));
			}
		} catch (O) {
			console.error(`Error executing head for route ${x}:`, O);
		}
	}
	const y = af(i);
	if ((_s(y) && (await y), h)) throw h;
	if (i.serialError && !i.preload && !i.onReady) throw i.serialError;
	return i.matches;
}
function e1(n, i) {
	const l = i.map((r) => n.options[r]?.preload?.()).filter(Boolean);
	if (l.length !== 0) return Promise.all(l);
}
function Ts(n, i = Jr) {
	!n._lazyLoaded &&
		n._lazyPromise === void 0 &&
		(n.lazyFn
			? (n._lazyPromise = n.lazyFn().then((r) => {
					const { id: c, ...f } = r.options;
					(Object.assign(n.options, f),
						(n._lazyLoaded = !0),
						(n._lazyPromise = void 0));
				}))
			: (n._lazyLoaded = !0));
	const l = () =>
		n._componentsLoaded
			? void 0
			: i === Jr
				? (() => {
						if (n._componentsPromise === void 0) {
							const r = e1(n, Jr);
							r
								? (n._componentsPromise = r.then(() => {
										((n._componentsLoaded = !0),
											(n._componentsPromise = void 0));
									}))
								: (n._componentsLoaded = !0);
						}
						return n._componentsPromise;
					})()
				: e1(n, i);
	return n._lazyPromise ? n._lazyPromise.then(l) : l();
}
function ap(n) {
	for (const i of Jr) if (n.options[i]?.preload) return !0;
	return !1;
}
const Jr = [
	"component",
	"errorComponent",
	"pendingComponent",
	"notFoundComponent",
];
function Y2(n) {
	return {
		input: ({ url: i }) => {
			for (const l of n) i = lf(l, i);
			return i;
		},
		output: ({ url: i }) => {
			for (let l = n.length - 1; l >= 0; l--) i = ip(n[l], i);
			return i;
		},
	};
}
function V2(n) {
	const i = I1(n.basepath),
		l = `/${i}`,
		r = `${l}/`,
		c = n.caseSensitive ? l : l.toLowerCase(),
		f = n.caseSensitive ? r : r.toLowerCase();
	return {
		input: ({ url: d }) => {
			const m = n.caseSensitive ? d.pathname : d.pathname.toLowerCase();
			return (
				m === c
					? (d.pathname = "/")
					: m.startsWith(f) && (d.pathname = d.pathname.slice(l.length)),
				d
			);
		},
		output: ({ url: d }) => ((d.pathname = Fr(["/", i, d.pathname])), d),
	};
}
function lf(n, i) {
	const l = n?.input?.({ url: i });
	if (l) {
		if (typeof l == "string") return new URL(l);
		if (l instanceof URL) return l;
	}
	return i;
}
function ip(n, i) {
	const l = n?.output?.({ url: i });
	if (l) {
		if (typeof l == "string") return new URL(l);
		if (l instanceof URL) return l;
	}
	return i;
}
function G2(n) {
	return n instanceof Error
		? { name: n.name, message: n.message }
		: { data: n };
}
function yi(n) {
	const i = n.resolvedLocation,
		l = n.location,
		r = i?.pathname !== l.pathname,
		c = i?.href !== l.href,
		f = i?.hash !== l.hash;
	return {
		fromLocation: i,
		toLocation: l,
		pathChanged: r,
		hrefChanged: c,
		hashChanged: f,
	};
}
function X2(n) {
	const i = n.filter((l) => l.status !== "redirected");
	return i.length === n.length ? n : i;
}
class K2 {
	constructor(i) {
		((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
			(this.resetNextScroll = !0),
			(this.shouldViewTransition = void 0),
			(this.isViewTransitionTypesSupported = void 0),
			(this.subscribers = new Set()),
			(this.isScrollRestoring = !1),
			(this.isScrollRestorationSetup = !1),
			(this.startTransition = (l) => l()),
			(this.update = (l) => {
				const r = this.options,
					c = this.basepath ?? r?.basepath ?? "/",
					f = this.basepath === void 0,
					d = r?.rewrite;
				if (
					((this.options = { ...r, ...l }),
					(this.isServer = this.options.isServer ?? typeof document > "u"),
					(this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
					this.options.pathParamsAllowedCharacters &&
						(this.pathParamsDecoder = w2(
							this.options.pathParamsAllowedCharacters,
						)),
					(!this.history ||
						(this.options.history && this.options.history !== this.history)) &&
						(this.options.history
							? (this.history = this.options.history)
							: (this.history = Iv())),
					(this.origin = this.options.origin),
					this.origin ||
						(window?.origin && window.origin !== "null"
							? (this.origin = window.origin)
							: (this.origin = "http://localhost")),
					this.history && this.updateLatestLocation(),
					this.options.routeTree !== this.routeTree)
				) {
					this.routeTree = this.options.routeTree;
					let b;
					((this.resolvePathCache = ao(1e3)),
						(b = this.buildRouteTree()),
						this.setRoutes(b));
				}
				!this.__store &&
					this.latestLocation &&
					((this.__store = kv(k2(this.latestLocation))), C2(this));
				let m = !1;
				const g = this.options.basepath ?? "/",
					h = this.options.rewrite;
				if (f || c !== g || d !== h) {
					this.basepath = g;
					const b = [],
						E = I1(g);
					(E && E !== "/" && b.push(V2({ basepath: g })),
						h && b.push(h),
						(this.rewrite =
							b.length === 0 ? void 0 : b.length === 1 ? b[0] : Y2(b)),
						this.history && this.updateLatestLocation(),
						(m = !0));
				}
				(m &&
					this.__store &&
					this.__store.setState((b) => ({
						...b,
						location: this.latestLocation,
					})),
					typeof window < "u" &&
						"CSS" in window &&
						typeof window.CSS?.supports == "function" &&
						(this.isViewTransitionTypesSupported = window.CSS.supports(
							"selector(:active-view-transition-type(a)",
						)));
			}),
			(this.updateLatestLocation = () => {
				this.latestLocation = this.parseLocation(
					this.history.location,
					this.latestLocation,
				);
			}),
			(this.buildRouteTree = () => {
				const l = g2(this.routeTree, this.options.caseSensitive, (r, c) => {
					r.init({ originalIndex: c });
				});
				return (
					this.options.routeMasks &&
						d2(this.options.routeMasks, l.processedTree),
					l
				);
			}),
			(this.subscribe = (l, r) => {
				const c = { eventType: l, fn: r };
				return (
					this.subscribers.add(c),
					() => {
						this.subscribers.delete(c);
					}
				);
			}),
			(this.emit = (l) => {
				this.subscribers.forEach((r) => {
					r.eventType === l.type && r.fn(l);
				});
			}),
			(this.parseLocation = (l, r) => {
				const c = ({ pathname: g, search: h, hash: v, href: y, state: b }) => {
						if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(g)) {
							const H = this.options.parseSearch(h),
								q = this.options.stringifySearch(H);
							return {
								href: g + q + v,
								publicHref: y,
								pathname: ms(g).path,
								external: !1,
								searchStr: q,
								search: ui(r?.search, H),
								hash: ms(v.slice(1)).path,
								state: ci(r?.state, b),
							};
						}
						const E = new URL(y, this.origin),
							w = lf(this.rewrite, E),
							x = this.options.parseSearch(w.search),
							R = this.options.stringifySearch(x);
						return (
							(w.search = R),
							{
								href: w.href.replace(w.origin, ""),
								publicHref: y,
								pathname: ms(w.pathname).path,
								external: !!this.rewrite && w.origin !== this.origin,
								searchStr: R,
								search: ui(r?.search, x),
								hash: ms(w.hash.slice(1)).path,
								state: ci(r?.state, b),
							}
						);
					},
					f = c(l),
					{ __tempLocation: d, __tempKey: m } = f.state;
				if (d && (!m || m === this.tempLocationKey)) {
					const g = c(d);
					return (
						(g.state.key = f.state.key),
						(g.state.__TSR_key = f.state.__TSR_key),
						delete g.state.__tempLocation,
						{ ...g, maskedLocation: f }
					);
				}
				return f;
			}),
			(this.resolvePathWithBase = (l, r) =>
				_2({
					base: l,
					to: bf(r),
					trailingSlash: this.options.trailingSlash,
					cache: this.resolvePathCache,
				})),
			(this.matchRoutes = (l, r, c) =>
				typeof l == "string"
					? this.matchRoutesInternal({ pathname: l, search: r }, c)
					: this.matchRoutesInternal(l, r)),
			(this.getMatchedRoutes = (l) =>
				F2({
					pathname: l,
					routesById: this.routesById,
					processedTree: this.processedTree,
				})),
			(this.cancelMatch = (l) => {
				const r = this.getMatch(l);
				r &&
					(r.abortController.abort(),
					clearTimeout(r._nonReactive.pendingTimeout),
					(r._nonReactive.pendingTimeout = void 0));
			}),
			(this.cancelMatches = () => {
				const l = this.state.matches.filter((f) => f.status === "pending"),
					r = this.state.matches.filter((f) => f.isFetching === "loader");
				new Set([...(this.state.pendingMatches ?? []), ...l, ...r]).forEach(
					(f) => {
						this.cancelMatch(f.id);
					},
				);
			}),
			(this.buildLocation = (l) => {
				const r = (f = {}) => {
						const d =
								f._fromLocation ||
								this.pendingBuiltLocation ||
								this.latestLocation,
							m = this.matchRoutesLightweight(d);
						f.from;
						const g =
								f.unsafeRelative === "path"
									? d.pathname
									: (f.from ?? m.fullPath),
							h = this.resolvePathWithBase(g, "."),
							v = m.search,
							y = Object.assign(Object.create(null), m.params),
							b = f.to
								? this.resolvePathWithBase(h, `${f.to}`)
								: this.resolvePathWithBase(h, "."),
							E =
								f.params === !1 || f.params === null
									? Object.create(null)
									: (f.params ?? !0) === !0
										? y
										: Object.assign(y, za(f.params, y)),
							w = this.getMatchedRoutes(b);
						let x = w.matchedRoutes;
						if (
							((!w.foundRoute ||
								(w.foundRoute.path !== "/" && w.routeParams["**"])) &&
								this.options.notFoundRoute &&
								(x = [...x, this.options.notFoundRoute]),
							Object.keys(E).length > 0)
						)
							for (const it of x) {
								const at =
									it.options.params?.stringify ?? it.options.stringifyParams;
								if (at)
									try {
										Object.assign(E, at(E));
									} catch {}
							}
						const O = l.leaveParams
							? b
							: ms(
									Fm({
										path: b,
										params: E,
										decoder: this.pathParamsDecoder,
										server: this.isServer,
									}).interpolatedPath,
								).path;
						let H = v;
						if (l._includeValidateSearch && this.options.search?.strict) {
							const it = {};
							(x.forEach((at) => {
								if (at.options.validateSearch)
									try {
										Object.assign(
											it,
											Ir(at.options.validateSearch, { ...it, ...H }),
										);
									} catch {}
							}),
								(H = it));
						}
						((H = J2({
							search: H,
							dest: f,
							destRoutes: x,
							_includeValidateSearch: l._includeValidateSearch,
						})),
							(H = ui(v, H)));
						const q = this.options.stringifySearch(H),
							Q = f.hash === !0 ? d.hash : f.hash ? za(f.hash, d.hash) : void 0,
							F = Q ? `#${Q}` : "";
						let J =
							f.state === !0 ? d.state : f.state ? za(f.state, d.state) : {};
						J = ci(d.state, J);
						const X = `${O}${q}${F}`;
						let Y,
							W,
							ct = !1;
						if (this.rewrite) {
							const it = new URL(X, this.origin),
								at = ip(this.rewrite, it);
							((Y = it.href.replace(it.origin, "")),
								at.origin !== this.origin
									? ((W = at.href), (ct = !0))
									: (W = at.pathname + at.search + at.hash));
						} else ((Y = u2(X)), (W = Y));
						return {
							publicHref: W,
							href: Y,
							pathname: O,
							search: H,
							searchStr: q,
							state: J,
							hash: Q ?? "",
							external: ct,
							unmaskOnReload: f.unmaskOnReload,
						};
					},
					c = (f = {}, d) => {
						const m = r(f);
						let g = d ? r(d) : void 0;
						if (!g) {
							const h = Object.create(null);
							if (this.options.routeMasks) {
								const v = h2(m.pathname, this.processedTree);
								if (v) {
									Object.assign(h, v.rawParams);
									const { from: y, params: b, ...E } = v.route,
										w =
											b === !1 || b === null
												? Object.create(null)
												: (b ?? !0) === !0
													? h
													: Object.assign(h, za(b, h));
									((d = { from: l.from, ...E, params: w }), (g = r(d)));
								}
							}
						}
						return (g && (m.maskedLocation = g), m);
					};
				return l.mask ? c(l, { from: l.from, ...l.mask }) : c(l);
			}),
			(this.commitLocation = async ({
				viewTransition: l,
				ignoreBlocker: r,
				...c
			}) => {
				const f = () => {
						const g = [
							"key",
							"__TSR_key",
							"__TSR_index",
							"__hashScrollIntoViewOptions",
						];
						g.forEach((v) => {
							c.state[v] = this.latestLocation.state[v];
						});
						const h = mi(c.state, this.latestLocation.state);
						return (
							g.forEach((v) => {
								delete c.state[v];
							}),
							h
						);
					},
					d = Na(this.latestLocation.href) === Na(c.href),
					m = this.commitLocationPromise;
				if (
					((this.commitLocationPromise = gi(() => {
						m?.resolve();
					})),
					d && f())
				)
					this.load();
				else {
					let { maskedLocation: g, hashScrollIntoView: h, ...v } = c;
					(g &&
						((v = {
							...g,
							state: {
								...g.state,
								__tempKey: void 0,
								__tempLocation: {
									...v,
									search: v.searchStr,
									state: {
										...v.state,
										__tempKey: void 0,
										__tempLocation: void 0,
										__TSR_key: void 0,
										key: void 0,
									},
								},
							},
						}),
						(v.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
							(v.state.__tempKey = this.tempLocationKey)),
						(v.state.__hashScrollIntoViewOptions =
							h ?? this.options.defaultHashScrollIntoView ?? !0),
						(this.shouldViewTransition = l),
						this.history[c.replace ? "replace" : "push"](
							v.publicHref,
							v.state,
							{ ignoreBlocker: r },
						));
				}
				return (
					(this.resetNextScroll = c.resetScroll ?? !0),
					this.history.subscribers.size || this.load(),
					this.commitLocationPromise
				);
			}),
			(this.buildAndCommitLocation = ({
				replace: l,
				resetScroll: r,
				hashScrollIntoView: c,
				viewTransition: f,
				ignoreBlocker: d,
				href: m,
				...g
			} = {}) => {
				if (m) {
					const y = this.history.location.state.__TSR_index,
						b = to(m, { __TSR_index: l ? y : y + 1 }),
						E = new URL(b.pathname, this.origin),
						w = lf(this.rewrite, E);
					((g.to = w.pathname),
						(g.search = this.options.parseSearch(b.search)),
						(g.hash = b.hash.slice(1)));
				}
				const h = this.buildLocation({ ...g, _includeValidateSearch: !0 });
				this.pendingBuiltLocation = h;
				const v = this.commitLocation({
					...h,
					viewTransition: f,
					replace: l,
					resetScroll: r,
					hashScrollIntoView: c,
					ignoreBlocker: d,
				});
				return (
					Promise.resolve().then(() => {
						this.pendingBuiltLocation === h &&
							(this.pendingBuiltLocation = void 0);
					}),
					v
				);
			}),
			(this.navigate = async ({
				to: l,
				reloadDocument: r,
				href: c,
				publicHref: f,
				...d
			}) => {
				let m = !1;
				if (c)
					try {
						(new URL(`${c}`), (m = !0));
					} catch {}
				if ((m && !r && (r = !0), r)) {
					if (l !== void 0 || !c) {
						const h = this.buildLocation({ to: l, ...d });
						((c = c ?? h.publicHref), (f = f ?? h.publicHref));
					}
					const g = !m && f ? f : c;
					if (no(g, this.protocolAllowlist)) return Promise.resolve();
					if (!d.ignoreBlocker) {
						const v = this.history.getBlockers?.() ?? [];
						for (const y of v)
							if (
								y?.blockerFn &&
								(await y.blockerFn({
									currentLocation: this.latestLocation,
									nextLocation: this.latestLocation,
									action: "PUSH",
								}))
							)
								return Promise.resolve();
					}
					return (
						d.replace ? window.location.replace(g) : (window.location.href = g),
						Promise.resolve()
					);
				}
				return this.buildAndCommitLocation({
					...d,
					href: c,
					to: l,
					_isNavigate: !0,
				});
			}),
			(this.beforeLoad = () => {
				(this.cancelMatches(), this.updateLatestLocation());
				const l = this.matchRoutes(this.latestLocation);
				this.__store.setState((r) => ({
					...r,
					status: "pending",
					statusCode: 200,
					isLoading: !0,
					location: this.latestLocation,
					pendingMatches: l,
					cachedMatches: r.cachedMatches.filter(
						(c) => !l.some((f) => f.id === c.id),
					),
				}));
			}),
			(this.load = async (l) => {
				let r, c, f;
				const d = this.state.resolvedLocation ?? this.state.location;
				for (
					f = new Promise((g) => {
						this.startTransition(async () => {
							try {
								this.beforeLoad();
								const h = this.latestLocation,
									v = this.state.resolvedLocation;
								(this.state.redirect ||
									this.emit({
										type: "onBeforeNavigate",
										...yi({ resolvedLocation: v, location: h }),
									}),
									this.emit({
										type: "onBeforeLoad",
										...yi({ resolvedLocation: v, location: h }),
									}),
									await t1({
										router: this,
										sync: l?.sync,
										forceStaleReload: d.href === h.href,
										matches: this.state.pendingMatches,
										location: h,
										updateMatch: this.updateMatch,
										onReady: async () => {
											this.startTransition(() => {
												this.startViewTransition(async () => {
													let y = [],
														b = [],
														E = [],
														w = [];
													(pl(() => {
														(this.__store.setState((x) => {
															const R = x.matches,
																O = x.pendingMatches || x.matches;
															return (
																(y = R.filter(
																	(H) => !O.some((q) => q.id === H.id),
																)),
																(b = R.filter(
																	(H) =>
																		!O.some((q) => q.routeId === H.routeId),
																)),
																(E = O.filter(
																	(H) =>
																		!R.some((q) => q.routeId === H.routeId),
																)),
																(w = O.filter((H) =>
																	R.some((q) => q.routeId === H.routeId),
																)),
																{
																	...x,
																	isLoading: !1,
																	loadedAt: Date.now(),
																	matches: O,
																	pendingMatches: void 0,
																	cachedMatches: [
																		...x.cachedMatches,
																		...y.filter(
																			(H) =>
																				H.status !== "error" &&
																				H.status !== "notFound" &&
																				H.status !== "redirected",
																		),
																	],
																}
															);
														}),
															this.clearExpiredCache());
													}),
														[
															[b, "onLeave"],
															[E, "onEnter"],
															[w, "onStay"],
														].forEach(([x, R]) => {
															x.forEach((O) => {
																this.looseRoutesById[O.routeId].options[R]?.(O);
															});
														}));
												});
											});
										},
									}));
							} catch (h) {
								(be(h)
									? ((r = h),
										this.navigate({
											...r.options,
											replace: !0,
											ignoreBlocker: !0,
										}))
									: Se(h) && (c = h),
									this.__store.setState((v) => ({
										...v,
										statusCode: r
											? r.status
											: c
												? 404
												: v.matches.some((y) => y.status === "error")
													? 500
													: 200,
										redirect: r,
									})));
							}
							(this.latestLoadPromise === f &&
								(this.commitLocationPromise?.resolve(),
								(this.latestLoadPromise = void 0),
								(this.commitLocationPromise = void 0)),
								g());
						});
					}),
						this.latestLoadPromise = f,
						await f;
					this.latestLoadPromise && f !== this.latestLoadPromise;
				)
					await this.latestLoadPromise;
				let m;
				(this.hasNotFoundMatch()
					? (m = 404)
					: this.__store.state.matches.some((g) => g.status === "error") &&
						(m = 500),
					m !== void 0 &&
						this.__store.setState((g) => ({ ...g, statusCode: m })));
			}),
			(this.startViewTransition = (l) => {
				const r =
					this.shouldViewTransition ?? this.options.defaultViewTransition;
				if (
					((this.shouldViewTransition = void 0),
					r &&
						typeof document < "u" &&
						"startViewTransition" in document &&
						typeof document.startViewTransition == "function")
				) {
					let c;
					if (typeof r == "object" && this.isViewTransitionTypesSupported) {
						const f = this.latestLocation,
							d = this.state.resolvedLocation,
							m =
								typeof r.types == "function"
									? r.types(yi({ resolvedLocation: d, location: f }))
									: r.types;
						if (m === !1) {
							l();
							return;
						}
						c = { update: l, types: m };
					} else c = l;
					document.startViewTransition(c);
				} else l();
			}),
			(this.updateMatch = (l, r) => {
				this.startTransition(() => {
					const c = this.state.pendingMatches?.some((f) => f.id === l)
						? "pendingMatches"
						: this.state.matches.some((f) => f.id === l)
							? "matches"
							: this.state.cachedMatches.some((f) => f.id === l)
								? "cachedMatches"
								: "";
					c &&
						(c === "cachedMatches"
							? this.__store.setState((f) => ({
									...f,
									cachedMatches: X2(
										f.cachedMatches.map((d) => (d.id === l ? r(d) : d)),
									),
								}))
							: this.__store.setState((f) => ({
									...f,
									[c]: f[c]?.map((d) => (d.id === l ? r(d) : d)),
								})));
				});
			}),
			(this.getMatch = (l) => {
				const r = (c) => c.id === l;
				return (
					this.state.cachedMatches.find(r) ??
					this.state.pendingMatches?.find(r) ??
					this.state.matches.find(r)
				);
			}),
			(this.invalidate = (l) => {
				const r = (c) =>
					(l?.filter?.(c) ?? !0)
						? {
								...c,
								invalid: !0,
								...(l?.forcePending ||
								c.status === "error" ||
								c.status === "notFound"
									? { status: "pending", error: void 0 }
									: void 0),
							}
						: c;
				return (
					this.__store.setState((c) => ({
						...c,
						matches: c.matches.map(r),
						cachedMatches: c.cachedMatches.map(r),
						pendingMatches: c.pendingMatches?.map(r),
					})),
					(this.shouldViewTransition = !1),
					this.load({ sync: l?.sync })
				);
			}),
			(this.getParsedLocationHref = (l) => l.publicHref || "/"),
			(this.resolveRedirect = (l) => {
				const r = l.headers.get("Location");
				if (!l.options.href || l.options._builtLocation) {
					const c = l.options._builtLocation ?? this.buildLocation(l.options),
						f = this.getParsedLocationHref(c);
					((l.options.href = f), l.headers.set("Location", f));
				} else if (r)
					try {
						const c = new URL(r);
						if (this.origin && c.origin === this.origin) {
							const f = c.pathname + c.search + c.hash;
							((l.options.href = f), l.headers.set("Location", f));
						}
					} catch {}
				if (
					l.options.href &&
					!l.options._builtLocation &&
					no(l.options.href, this.protocolAllowlist)
				)
					throw new Error("Redirect blocked: unsafe protocol");
				return (
					l.headers.get("Location") ||
						l.headers.set("Location", l.options.href),
					l
				);
			}),
			(this.clearCache = (l) => {
				const r = l?.filter;
				r !== void 0
					? this.__store.setState((c) => ({
							...c,
							cachedMatches: c.cachedMatches.filter((f) => !r(f)),
						}))
					: this.__store.setState((c) => ({ ...c, cachedMatches: [] }));
			}),
			(this.clearExpiredCache = () => {
				const l = (r) => {
					const c = this.looseRoutesById[r.routeId];
					if (!c.options.loader) return !0;
					const f =
						(r.preload
							? (c.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
							: (c.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
					return r.status === "error" ? !0 : Date.now() - r.updatedAt >= f;
				};
				this.clearCache({ filter: l });
			}),
			(this.loadRouteChunk = Ts),
			(this.preloadRoute = async (l) => {
				const r = l._builtLocation ?? this.buildLocation(l);
				let c = this.matchRoutes(r, { throwOnError: !0, preload: !0, dest: l });
				const f = new Set(
						[...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
							(m) => m.id,
						),
					),
					d = new Set([...f, ...this.state.cachedMatches.map((m) => m.id)]);
				pl(() => {
					c.forEach((m) => {
						d.has(m.id) ||
							this.__store.setState((g) => ({
								...g,
								cachedMatches: [...g.cachedMatches, m],
							}));
					});
				});
				try {
					return (
						(c = await t1({
							router: this,
							matches: c,
							location: r,
							preload: !0,
							updateMatch: (m, g) => {
								f.has(m)
									? (c = c.map((h) => (h.id === m ? g(h) : h)))
									: this.updateMatch(m, g);
							},
						})),
						c
					);
				} catch (m) {
					if (be(m))
						return m.options.reloadDocument
							? void 0
							: await this.preloadRoute({ ...m.options, _fromLocation: r });
					Se(m) || console.error(m);
					return;
				}
			}),
			(this.matchRoute = (l, r) => {
				const c = {
						...l,
						to: l.to ? this.resolvePathWithBase(l.from || "", l.to) : void 0,
						params: l.params || {},
						leaveParams: !0,
					},
					f = this.buildLocation(c);
				if (r?.pending && this.state.status !== "pending") return !1;
				const m = (r?.pending === void 0 ? !this.state.isLoading : r.pending)
						? this.latestLocation
						: this.state.resolvedLocation || this.state.location,
					g = m2(
						f.pathname,
						r?.caseSensitive ?? !1,
						r?.fuzzy ?? !1,
						m.pathname,
						this.processedTree,
					);
				return !g || (l.params && !mi(g.rawParams, l.params, { partial: !0 }))
					? !1
					: (r?.includeSearch ?? !0)
						? mi(m.search, f.search, { partial: !0 })
							? g.rawParams
							: !1
						: g.rawParams;
			}),
			(this.hasNotFoundMatch = () =>
				this.__store.state.matches.some(
					(l) => l.status === "notFound" || l.globalNotFound,
				)),
			this.update({
				defaultPreloadDelay: 50,
				defaultPendingMs: 1e3,
				defaultPendingMinMs: 500,
				context: void 0,
				...i,
				caseSensitive: i.caseSensitive ?? !1,
				notFoundMode: i.notFoundMode ?? "fuzzy",
				stringifySearch: i.stringifySearch ?? N2,
				parseSearch: i.parseSearch ?? L2,
				protocolAllowlist: i.protocolAllowlist ?? l2,
			}),
			typeof document < "u" && (self.__TSR_ROUTER__ = this));
	}
	isShell() {
		return !!this.options.isShell;
	}
	isPrerendering() {
		return !!this.options.isPrerendering;
	}
	get state() {
		return this.__store.state;
	}
	setRoutes({ routesById: i, routesByPath: l, processedTree: r }) {
		((this.routesById = i), (this.routesByPath = l), (this.processedTree = r));
		const c = this.options.notFoundRoute;
		c && (c.init({ originalIndex: 99999999999 }), (this.routesById[c.id] = c));
	}
	get looseRoutesById() {
		return this.routesById;
	}
	getParentContext(i) {
		return i?.id
			? (i.context ?? this.options.context ?? void 0)
			: (this.options.context ?? void 0);
	}
	matchRoutesInternal(i, l) {
		const r = this.getMatchedRoutes(i.pathname),
			{ foundRoute: c, routeParams: f, parsedParams: d } = r;
		let { matchedRoutes: m } = r,
			g = !1;
		(c ? c.path !== "/" && f["**"] : Na(i.pathname)) &&
			(this.options.notFoundRoute
				? (m = [...m, this.options.notFoundRoute])
				: (g = !0));
		const h = g ? $2(this.options.notFoundMode, m) : void 0,
			v = new Array(m.length),
			y = new Map(this.state.matches.map((b) => [b.routeId, b]));
		for (let b = 0; b < m.length; b++) {
			const E = m[b],
				w = v[b - 1];
			let x, R, O;
			{
				const Tt = w?.search ?? i.search,
					qt = w?._strictSearch ?? void 0;
				try {
					const L = Ir(E.options.validateSearch, { ...Tt }) ?? void 0;
					((x = { ...Tt, ...L }), (R = { ...qt, ...L }), (O = void 0));
				} catch (L) {
					let k = L;
					if (
						(L instanceof so || (k = new so(L.message, { cause: L })),
						l?.throwOnError)
					)
						throw k;
					((x = Tt), (R = {}), (O = k));
				}
			}
			const H = E.options.loaderDeps?.({ search: x }) ?? "",
				q = H ? JSON.stringify(H) : "",
				{ interpolatedPath: Q, usedParams: F } = Fm({
					path: E.fullPath,
					params: f,
					decoder: this.pathParamsDecoder,
					server: this.isServer,
				}),
				J = E.id + Q + q,
				X = this.getMatch(J),
				Y = y.get(E.id),
				W = X?._strictParams ?? F;
			let ct;
			if (!X)
				try {
					n1(E, F, d, W);
				} catch (Tt) {
					if (
						(Se(Tt) || be(Tt)
							? (ct = Tt)
							: (ct = new P2(Tt.message, { cause: Tt })),
						l?.throwOnError)
					)
						throw ct;
				}
			Object.assign(f, W);
			const it = Y ? "stay" : "enter";
			let at;
			if (X)
				at = {
					...X,
					cause: it,
					params: Y?.params ?? f,
					_strictParams: W,
					search: ui(Y ? Y.search : X.search, x),
					_strictSearch: R,
				};
			else {
				const Tt =
					E.options.loader || E.options.beforeLoad || E.lazyFn || ap(E)
						? "pending"
						: "success";
				at = {
					id: J,
					ssr: E.options.ssr,
					index: b,
					routeId: E.id,
					params: Y?.params ?? f,
					_strictParams: W,
					pathname: Q,
					updatedAt: Date.now(),
					search: Y ? ui(Y.search, x) : x,
					_strictSearch: R,
					searchError: void 0,
					status: Tt,
					isFetching: !1,
					error: void 0,
					paramsError: ct,
					__routeContext: void 0,
					_nonReactive: { loadPromise: gi() },
					__beforeLoadContext: void 0,
					context: {},
					abortController: new AbortController(),
					fetchCount: 0,
					cause: it,
					loaderDeps: Y ? ci(Y.loaderDeps, H) : H,
					invalid: !1,
					preload: !1,
					links: void 0,
					scripts: void 0,
					headScripts: void 0,
					meta: void 0,
					staticData: E.options.staticData || {},
					fullPath: E.fullPath,
				};
			}
			(l?.preload || (at.globalNotFound = h === E.id), (at.searchError = O));
			const wt = this.getParentContext(w);
			((at.context = {
				...wt,
				...at.__routeContext,
				...at.__beforeLoadContext,
			}),
				(v[b] = at));
		}
		for (let b = 0; b < v.length; b++) {
			const E = v[b],
				w = this.looseRoutesById[E.routeId],
				x = this.getMatch(E.id),
				R = y.get(E.routeId);
			if (((E.params = R ? ui(R.params, f) : f), !x)) {
				const O = v[b - 1],
					H = this.getParentContext(O);
				if (w.options.context) {
					const q = {
						deps: E.loaderDeps,
						params: E.params,
						context: H ?? {},
						location: i,
						navigate: (Q) => this.navigate({ ...Q, _fromLocation: i }),
						buildLocation: this.buildLocation,
						cause: E.cause,
						abortController: E.abortController,
						preload: !!E.preload,
						matches: v,
						routeId: w.id,
					};
					E.__routeContext = w.options.context(q) ?? void 0;
				}
				E.context = { ...H, ...E.__routeContext, ...E.__beforeLoadContext };
			}
		}
		return v;
	}
	matchRoutesLightweight(i) {
		const {
				matchedRoutes: l,
				routeParams: r,
				parsedParams: c,
			} = this.getMatchedRoutes(i.pathname),
			f = Es(l),
			d = { ...i.search };
		for (const v of l)
			try {
				Object.assign(d, Ir(v.options.validateSearch, d));
			} catch {}
		const m = Es(this.state.matches),
			g =
				m && m.routeId === f.id && i.pathname === this.state.location.pathname;
		let h;
		if (g) h = m.params;
		else {
			const v = Object.assign(Object.create(null), r);
			for (const y of l)
				try {
					n1(y, r, c ?? {}, v);
				} catch {}
			h = v;
		}
		return { matchedRoutes: l, fullPath: f.fullPath, search: d, params: h };
	}
}
class so extends Error {}
class P2 extends Error {}
function k2(n) {
	return {
		loadedAt: 0,
		isLoading: !1,
		isTransitioning: !1,
		status: "idle",
		resolvedLocation: void 0,
		location: n,
		matches: [],
		pendingMatches: [],
		cachedMatches: [],
		statusCode: 200,
	};
}
function Ir(n, i) {
	if (n == null) return {};
	if ("~standard" in n) {
		const l = n["~standard"].validate(i);
		if (l instanceof Promise) throw new so("Async validation not supported");
		if (l.issues)
			throw new so(JSON.stringify(l.issues, void 0, 2), { cause: l });
		return l.value;
	}
	return "parse" in n ? n.parse(i) : typeof n == "function" ? n(i) : {};
}
function F2({ pathname: n, routesById: i, processedTree: l }) {
	const r = Object.create(null),
		c = Na(n);
	let f, d;
	const m = p2(c, l, !0);
	return (
		m &&
			((f = m.route),
			Object.assign(r, m.rawParams),
			(d = Object.assign(Object.create(null), m.parsedParams))),
		{
			matchedRoutes: m?.branch || [i[mn]],
			routeParams: r,
			foundRoute: f,
			parsedParams: d,
		}
	);
}
function J2({ search: n, dest: i, destRoutes: l, _includeValidateSearch: r }) {
	return I2(l)(n, i, r ?? !1);
}
function I2(n) {
	const i = { dest: null, _includeValidateSearch: !1, middlewares: [] };
	for (const c of n) {
		if ("search" in c.options)
			c.options.search?.middlewares &&
				i.middlewares.push(...c.options.search.middlewares);
		else if (c.options.preSearchFilters || c.options.postSearchFilters) {
			const f = ({ search: d, next: m }) => {
				let g = d;
				"preSearchFilters" in c.options &&
					c.options.preSearchFilters &&
					(g = c.options.preSearchFilters.reduce((v, y) => y(v), d));
				const h = m(g);
				return "postSearchFilters" in c.options && c.options.postSearchFilters
					? c.options.postSearchFilters.reduce((v, y) => y(v), h)
					: h;
			};
			i.middlewares.push(f);
		}
		if (c.options.validateSearch) {
			const f = ({ search: d, next: m }) => {
				const g = m(d);
				if (!i._includeValidateSearch) return g;
				try {
					return { ...g, ...(Ir(c.options.validateSearch, g) ?? void 0) };
				} catch {
					return g;
				}
			};
			i.middlewares.push(f);
		}
	}
	const l = ({ search: c }) => {
		const f = i.dest;
		return f.search ? (f.search === !0 ? c : za(f.search, c)) : {};
	};
	i.middlewares.push(l);
	const r = (c, f, d) => {
		if (c >= d.length) return f;
		const m = d[c];
		return m({ search: f, next: (h) => r(c + 1, h, d) });
	};
	return function (f, d, m) {
		return (
			(i.dest = d), (i._includeValidateSearch = m), r(0, f, i.middlewares)
		);
	};
}
function $2(n, i) {
	if (n !== "root")
		for (let l = i.length - 1; l >= 0; l--) {
			const r = i[l];
			if (r.children) return r.id;
		}
	return mn;
}
function n1(n, i, l, r) {
	const c = n.options.params?.parse ?? n.options.parseParams;
	if (c)
		if (n.options.skipRouteOnParseError)
			for (const f in i) f in l && (r[f] = l[f]);
		else {
			const f = c(r);
			Object.assign(r, f);
		}
}
const Cn = Symbol.for("TSR_DEFERRED_PROMISE");
function W2(n, i) {
	const l = n;
	return (
		l[Cn] ||
			((l[Cn] = { status: "pending" }),
			l
				.then((r) => {
					((l[Cn].status = "success"), (l[Cn].data = r));
				})
				.catch((r) => {
					((l[Cn].status = "error"),
						(l[Cn].error = { data: G2(r), __isServerError: !0 }));
				})),
		l
	);
}
const tb = "Error preloading route! ☝️";
class lp {
	constructor(i) {
		if (
			((this.init = (l) => {
				this.originalIndex = l.originalIndex;
				const r = this.options,
					c = !r?.path && !r?.id;
				((this.parentRoute = this.options.getParentRoute?.()),
					c ? (this._path = mn) : this.parentRoute || We(!1));
				let f = c ? mn : r?.path;
				f && f !== "/" && (f = J1(f));
				const d = r?.id || f;
				let m = c
					? mn
					: Fr([this.parentRoute.id === mn ? "" : this.parentRoute.id, d]);
				(f === mn && (f = "/"), m !== mn && (m = Fr(["/", m])));
				const g = m === mn ? "/" : Fr([this.parentRoute.fullPath, f]);
				((this._path = f),
					(this._id = m),
					(this._fullPath = g),
					(this._to = Na(g)));
			}),
			(this.addChildren = (l) => this._addFileChildren(l)),
			(this._addFileChildren = (l) => (
				Array.isArray(l) && (this.children = l),
				typeof l == "object" &&
					l !== null &&
					(this.children = Object.values(l)),
				this
			)),
			(this._addFileTypes = () => this),
			(this.updateLoader = (l) => (Object.assign(this.options, l), this)),
			(this.update = (l) => (Object.assign(this.options, l), this)),
			(this.lazy = (l) => ((this.lazyFn = l), this)),
			(this.redirect = (l) => Sf({ from: this.fullPath, ...l })),
			(this.options = i || {}),
			(this.isRoot = !i?.getParentRoute),
			i?.id && i?.path)
		)
			throw new Error("Route cannot have both an 'id' and a 'path' option.");
	}
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
}
class eb extends lp {
	constructor(i) {
		super(i);
	}
}
var nb = ((n) => (
		(n[(n.AggregateError = 1)] = "AggregateError"),
		(n[(n.ArrowFunction = 2)] = "ArrowFunction"),
		(n[(n.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
		(n[(n.ObjectAssign = 8)] = "ObjectAssign"),
		(n[(n.BigIntTypedArray = 16)] = "BigIntTypedArray"),
		(n[(n.RegExp = 32)] = "RegExp"),
		n
	))(nb || {}),
	Wn = Symbol.asyncIterator,
	sp = Symbol.hasInstance,
	yl = Symbol.isConcatSpreadable,
	ta = Symbol.iterator,
	rp = Symbol.match,
	op = Symbol.matchAll,
	up = Symbol.replace,
	cp = Symbol.search,
	fp = Symbol.species,
	dp = Symbol.split,
	hp = Symbol.toPrimitive,
	gl = Symbol.toStringTag,
	mp = Symbol.unscopables,
	pp = {
		[Wn]: 0,
		[sp]: 1,
		[yl]: 2,
		[ta]: 3,
		[rp]: 4,
		[op]: 5,
		[up]: 6,
		[cp]: 7,
		[fp]: 8,
		[dp]: 9,
		[hp]: 10,
		[gl]: 11,
		[mp]: 12,
	},
	ab = {
		0: Wn,
		1: sp,
		2: yl,
		3: ta,
		4: rp,
		5: op,
		6: up,
		7: cp,
		8: fp,
		9: dp,
		10: hp,
		11: gl,
		12: mp,
	},
	_ = void 0,
	ib = {
		2: !0,
		3: !1,
		1: _,
		0: null,
		4: -0,
		5: Number.POSITIVE_INFINITY,
		6: Number.NEGATIVE_INFINITY,
		7: Number.NaN,
	},
	lb = {
		0: "Error",
		1: "EvalError",
		2: "RangeError",
		3: "ReferenceError",
		4: "SyntaxError",
		5: "TypeError",
		6: "URIError",
	},
	sb = {
		0: Error,
		1: EvalError,
		2: RangeError,
		3: ReferenceError,
		4: SyntaxError,
		5: TypeError,
		6: URIError,
	};
function Ct(n, i, l, r, c, f, d, m, g, h, v, y) {
	return {
		t: n,
		i,
		s: l,
		c: r,
		m: c,
		p: f,
		e: d,
		a: m,
		f: g,
		b: h,
		o: v,
		l: y,
	};
}
function Ua(n) {
	return Ct(2, _, n, _, _, _, _, _, _, _, _, _);
}
var yp = Ua(2),
	gp = Ua(3),
	rb = Ua(1),
	ob = Ua(0),
	ub = Ua(4),
	cb = Ua(5),
	fb = Ua(6),
	db = Ua(7);
function hb(n) {
	switch (n) {
		case '"':
			return '\\"';
		case "\\":
			return "\\\\";
		case `
`:
			return "\\n";
		case "\r":
			return "\\r";
		case "\b":
			return "\\b";
		case "	":
			return "\\t";
		case "\f":
			return "\\f";
		case "<":
			return "\\x3C";
		case "\u2028":
			return "\\u2028";
		case "\u2029":
			return "\\u2029";
		default:
			return _;
	}
}
function ja(n) {
	let i = "",
		l = 0,
		r;
	for (let c = 0, f = n.length; c < f; c++)
		((r = hb(n[c])), r && ((i += n.slice(l, c) + r), (l = c + 1)));
	return (l === 0 ? (i = n) : (i += n.slice(l)), i);
}
function mb(n) {
	switch (n) {
		case "\\\\":
			return "\\";
		case '\\"':
			return '"';
		case "\\n":
			return `
`;
		case "\\r":
			return "\r";
		case "\\b":
			return "\b";
		case "\\t":
			return "	";
		case "\\f":
			return "\f";
		case "\\x3C":
			return "<";
		case "\\u2028":
			return "\u2028";
		case "\\u2029":
			return "\u2029";
		default:
			return n;
	}
}
function Si(n) {
	return n.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, mb);
}
var Gr = "__SEROVAL_REFS__",
	vp = new Map(),
	ml = new Map();
function bp(n) {
	return vp.has(n);
}
function pb(n) {
	return ml.has(n);
}
function yb(n) {
	if (bp(n)) return vp.get(n);
	throw new Pb(n);
}
function gb(n) {
	if (pb(n)) return ml.get(n);
	throw new kb(n);
}
typeof globalThis < "u"
	? Object.defineProperty(globalThis, Gr, {
			value: ml,
			configurable: !0,
			writable: !1,
			enumerable: !1,
		})
	: typeof window < "u"
		? Object.defineProperty(window, Gr, {
				value: ml,
				configurable: !0,
				writable: !1,
				enumerable: !1,
			})
		: typeof self < "u"
			? Object.defineProperty(self, Gr, {
					value: ml,
					configurable: !0,
					writable: !1,
					enumerable: !1,
				})
			: typeof global < "u" &&
				Object.defineProperty(global, Gr, {
					value: ml,
					configurable: !0,
					writable: !1,
					enumerable: !1,
				});
function Ef(n) {
	return n instanceof EvalError
		? 1
		: n instanceof RangeError
			? 2
			: n instanceof ReferenceError
				? 3
				: n instanceof SyntaxError
					? 4
					: n instanceof TypeError
						? 5
						: n instanceof URIError
							? 6
							: 0;
}
function vb(n) {
	let i = lb[Ef(n)];
	return n.name !== i
		? { name: n.name }
		: n.constructor.name !== i
			? { name: n.constructor.name }
			: {};
}
function Sp(n, i) {
	let l = vb(n),
		r = Object.getOwnPropertyNames(n);
	for (let c = 0, f = r.length, d; c < f; c++)
		((d = r[c]),
			d !== "name" &&
				d !== "message" &&
				(d === "stack"
					? i & 4 && ((l = l || {}), (l[d] = n[d]))
					: ((l = l || {}), (l[d] = n[d]))));
	return l;
}
function Ep(n) {
	return Object.isFrozen(n)
		? 3
		: Object.isSealed(n)
			? 2
			: Object.isExtensible(n)
				? 0
				: 1;
}
function bb(n) {
	switch (n) {
		case Number.POSITIVE_INFINITY:
			return cb;
		case Number.NEGATIVE_INFINITY:
			return fb;
	}
	return n !== n
		? db
		: Object.is(n, -0)
			? ub
			: Ct(0, _, n, _, _, _, _, _, _, _, _, _);
}
function _p(n) {
	return Ct(1, _, ja(n), _, _, _, _, _, _, _, _, _);
}
function Sb(n) {
	return Ct(3, _, "" + n, _, _, _, _, _, _, _, _, _);
}
function Eb(n) {
	return Ct(4, n, _, _, _, _, _, _, _, _, _, _);
}
function _b(n, i) {
	let l = i.valueOf();
	return Ct(5, n, l !== l ? "" : i.toISOString(), _, _, _, _, _, _, _, _, _);
}
function wb(n, i) {
	return Ct(6, n, _, ja(i.source), i.flags, _, _, _, _, _, _, _);
}
function Tb(n, i) {
	return Ct(17, n, pp[i], _, _, _, _, _, _, _, _, _);
}
function Rb(n, i) {
	return Ct(18, n, ja(yb(i)), _, _, _, _, _, _, _, _, _);
}
function Ab(n, i, l) {
	return Ct(25, n, l, ja(i), _, _, _, _, _, _, _, _);
}
function xb(n, i, l) {
	return Ct(9, n, _, _, _, _, _, l, _, _, Ep(i), _);
}
function Mb(n, i) {
	return Ct(21, n, _, _, _, _, _, _, i, _, _, _);
}
function Ob(n, i, l) {
	return Ct(
		15,
		n,
		_,
		i.constructor.name,
		_,
		_,
		_,
		_,
		l,
		i.byteOffset,
		_,
		i.length,
	);
}
function Cb(n, i, l) {
	return Ct(
		16,
		n,
		_,
		i.constructor.name,
		_,
		_,
		_,
		_,
		l,
		i.byteOffset,
		_,
		i.byteLength,
	);
}
function zb(n, i, l) {
	return Ct(20, n, _, _, _, _, _, _, l, i.byteOffset, _, i.byteLength);
}
function Db(n, i, l) {
	return Ct(13, n, Ef(i), _, ja(i.message), l, _, _, _, _, _, _);
}
function Lb(n, i, l) {
	return Ct(14, n, Ef(i), _, ja(i.message), l, _, _, _, _, _, _);
}
function Nb(n, i) {
	return Ct(7, n, _, _, _, _, _, i, _, _, _, _);
}
function Ub(n, i) {
	return Ct(28, _, _, _, _, _, _, [n, i], _, _, _, _);
}
function jb(n, i) {
	return Ct(30, _, _, _, _, _, _, [n, i], _, _, _, _);
}
function Bb(n, i, l) {
	return Ct(31, n, _, _, _, _, _, l, i, _, _, _);
}
function Hb(n, i) {
	return Ct(32, n, _, _, _, _, _, _, i, _, _, _);
}
function qb(n, i) {
	return Ct(33, n, _, _, _, _, _, _, i, _, _, _);
}
function Zb(n, i) {
	return Ct(34, n, _, _, _, _, _, _, i, _, _, _);
}
function Qb(n, i, l, r) {
	return Ct(35, n, l, _, _, _, _, i, _, _, _, r);
}
var Yb = { parsing: 1, serialization: 2, deserialization: 3 };
function Vb(n) {
	return `Seroval Error (step: ${Yb[n]})`;
}
var Gb = (n, i) => Vb(n),
	wp = class extends Error {
		constructor(n, i) {
			(super(Gb(n)), (this.cause = i));
		}
	},
	a1 = class extends wp {
		constructor(i) {
			super("parsing", i);
		}
	},
	Xb = class extends wp {
		constructor(n) {
			super("deserialization", n);
		}
	};
function ea(n) {
	return `Seroval Error (specific: ${n})`;
}
var mo = class extends Error {
		constructor(i) {
			(super(ea(1)), (this.value = i));
		}
	},
	Tp = class extends Error {
		constructor(i) {
			super(ea(2));
		}
	},
	Kb = class extends Error {
		constructor(n) {
			super(ea(3));
		}
	},
	Ms = class extends Error {
		constructor(i) {
			super(ea(4));
		}
	},
	Pb = class extends Error {
		constructor(n) {
			(super(ea(5)), (this.value = n));
		}
	},
	kb = class extends Error {
		constructor(n) {
			super(ea(6));
		}
	},
	Fb = class extends Error {
		constructor(n) {
			super(ea(7));
		}
	},
	Ba = class extends Error {
		constructor(n) {
			super(ea(8));
		}
	},
	Jb = class extends Error {
		constructor(i) {
			super(ea(9));
		}
	},
	Ib = class {
		constructor(n, i) {
			((this.value = n), (this.replacement = i));
		}
	},
	po = () => {
		let n = { p: 0, s: 0, f: 0 };
		return (
			(n.p = new Promise((i, l) => {
				((n.s = i), (n.f = l));
			})),
			n
		);
	},
	$b = (n, i) => {
		(n.s(i), (n.p.s = 1), (n.p.v = i));
	},
	Wb = (n, i) => {
		(n.f(i), (n.p.s = 2), (n.p.v = i));
	};
po.toString();
$b.toString();
Wb.toString();
var tS = () => {
		let n = [],
			i = [],
			l = !0,
			r = !1,
			c = 0,
			f = (g, h, v) => {
				for (v = 0; v < c; v++) i[v] && i[v][h](g);
			},
			d = (g, h, v, y) => {
				for (h = 0, v = n.length; h < v; h++)
					((y = n[h]),
						!l && h === v - 1 ? g[r ? "return" : "throw"](y) : g.next(y));
			},
			m = (g, h) => (
				l && ((h = c++), (i[h] = g)),
				d(g),
				() => {
					l && ((i[h] = i[c]), (i[c--] = void 0));
				}
			);
		return {
			__SEROVAL_STREAM__: !0,
			on: (g) => m(g),
			next: (g) => {
				l && (n.push(g), f(g, "next"));
			},
			throw: (g) => {
				l && (n.push(g), f(g, "throw"), (l = !1), (r = !1), (i.length = 0));
			},
			return: (g) => {
				l && (n.push(g), f(g, "return"), (l = !1), (r = !0), (i.length = 0));
			},
		};
	},
	eS = (n) => (i) => () => {
		let l = 0,
			r = {
				[n]: () => r,
				next: () => {
					if (l > i.d) return { done: !0, value: void 0 };
					let c = l++,
						f = i.v[c];
					if (c === i.t) throw f;
					return { done: c === i.d, value: f };
				},
			};
		return r;
	},
	nS = (n, i) => (l) => () => {
		let r = 0,
			c = -1,
			f = !1,
			d = [],
			m = [],
			g = (v = 0, y = m.length) => {
				for (; v < y; v++) m[v].s({ done: !0, value: void 0 });
			};
		l.on({
			next: (v) => {
				let y = m.shift();
				(y && y.s({ done: !1, value: v }), d.push(v));
			},
			throw: (v) => {
				let y = m.shift();
				(y && y.f(v), g(), (c = d.length), (f = !0), d.push(v));
			},
			return: (v) => {
				let y = m.shift();
				(y && y.s({ done: !0, value: v }), g(), (c = d.length), d.push(v));
			},
		});
		let h = {
			[n]: () => h,
			next: () => {
				if (c === -1) {
					let b = r++;
					if (b >= d.length) {
						let E = i();
						return (m.push(E), E.p);
					}
					return { done: !1, value: d[b] };
				}
				if (r > c) return { done: !0, value: void 0 };
				let v = r++,
					y = d[v];
				if (v !== c) return { done: !1, value: y };
				if (f) throw y;
				return { done: !0, value: y };
			},
		};
		return h;
	},
	Rp = (n) => {
		let i = atob(n),
			l = i.length,
			r = new Uint8Array(l);
		for (let c = 0; c < l; c++) r[c] = i.charCodeAt(c);
		return r.buffer;
	};
Rp.toString();
function aS(n) {
	return "__SEROVAL_SEQUENCE__" in n;
}
function Ap(n, i, l) {
	return { __SEROVAL_SEQUENCE__: !0, v: n, t: i, d: l };
}
function iS(n) {
	let i = [],
		l = -1,
		r = -1,
		c = n[ta]();
	for (;;)
		try {
			let f = c.next();
			if ((i.push(f.value), f.done)) {
				r = i.length - 1;
				break;
			}
		} catch (f) {
			((l = i.length), i.push(f));
		}
	return Ap(i, l, r);
}
var lS = eS(ta);
function sS(n) {
	return lS(n);
}
var rS = {},
	oS = {},
	uS = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function yo(n) {
	return "__SEROVAL_STREAM__" in n;
}
function Ei() {
	return tS();
}
function cS(n) {
	let i = Ei(),
		l = n[Wn]();
	async function r() {
		try {
			let c = await l.next();
			c.done ? i.return(c.value) : (i.next(c.value), await r());
		} catch (c) {
			i.throw(c);
		}
	}
	return (r().catch(() => {}), i);
}
var fS = nS(Wn, po);
function dS(n) {
	return fS(n);
}
async function hS(n) {
	try {
		return [1, await n];
	} catch (i) {
		return [0, i];
	}
}
function mS(n, i) {
	return {
		plugins: i.plugins,
		mode: n,
		marked: new Set(),
		features: 63 ^ (i.disabledFeatures || 0),
		refs: i.refs || new Map(),
		depthLimit: i.depthLimit || 1e3,
	};
}
function $r(n, i) {
	n.marked.add(i);
}
function pS(n, i) {
	let l = n.refs.size;
	return (n.refs.set(i, l), l);
}
function go(n, i) {
	let l = n.refs.get(i);
	return l != null
		? ($r(n, l), { type: 1, value: Eb(l) })
		: { type: 0, value: pS(n, i) };
}
function _f(n, i) {
	let l = go(n, i);
	return l.type === 1 ? l : bp(i) ? { type: 2, value: Rb(l.value, i) } : l;
}
function hi(n, i) {
	let l = _f(n, i);
	if (l.type !== 0) return l.value;
	if (i in pp) return Tb(l.value, i);
	throw new mo(i);
}
function vo(n, i) {
	let l = go(n, uS[i]);
	return l.type === 1 ? l.value : Ct(26, l.value, i, _, _, _, _, _, _, _, _, _);
}
function yS(n) {
	let i = go(n, rS);
	return i.type === 1
		? i.value
		: Ct(27, i.value, _, _, _, _, _, _, hi(n, ta), _, _, _);
}
function gS(n) {
	let i = go(n, oS);
	return i.type === 1
		? i.value
		: Ct(29, i.value, _, _, _, _, _, [vo(n, 1), hi(n, Wn)], _, _, _, _);
}
function vS(n, i, l, r) {
	return Ct(l ? 11 : 10, n, _, _, _, r, _, _, _, _, Ep(i), _);
}
function bS(n, i, l, r) {
	return Ct(8, i, _, _, _, _, { k: l, v: r }, _, vo(n, 0), _, _, _);
}
function SS(n, i, l) {
	let r = new Uint8Array(l),
		c = "";
	for (let f = 0, d = r.length; f < d; f++) c += String.fromCharCode(r[f]);
	return Ct(19, i, ja(btoa(c)), _, _, _, _, _, vo(n, 5), _, _, _);
}
function ES(n, i) {
	return { base: mS(n, i), child: void 0 };
}
var _S = class {
	constructor(n, i) {
		((this._p = n), (this.depth = i));
	}
	parse(n) {
		return se(this._p, this.depth, n);
	}
};
async function wS(n, i, l) {
	let r = [];
	for (let c = 0, f = l.length; c < f; c++)
		c in l ? (r[c] = await se(n, i, l[c])) : (r[c] = 0);
	return r;
}
async function TS(n, i, l, r) {
	return xb(l, r, await wS(n, i, r));
}
async function wf(n, i, l) {
	let r = Object.entries(l),
		c = [],
		f = [];
	for (let d = 0, m = r.length; d < m; d++)
		(c.push(ja(r[d][0])), f.push(await se(n, i, r[d][1])));
	return (
		ta in l &&
			(c.push(hi(n.base, ta)), f.push(Ub(yS(n.base), await se(n, i, iS(l))))),
		Wn in l &&
			(c.push(hi(n.base, Wn)), f.push(jb(gS(n.base), await se(n, i, cS(l))))),
		gl in l && (c.push(hi(n.base, gl)), f.push(_p(l[gl]))),
		yl in l && (c.push(hi(n.base, yl)), f.push(l[yl] ? yp : gp)),
		{ k: c, v: f }
	);
}
async function Gc(n, i, l, r, c) {
	return vS(l, r, c, await wf(n, i, r));
}
async function RS(n, i, l, r) {
	return Mb(l, await se(n, i, r.valueOf()));
}
async function AS(n, i, l, r) {
	return Ob(l, r, await se(n, i, r.buffer));
}
async function xS(n, i, l, r) {
	return Cb(l, r, await se(n, i, r.buffer));
}
async function MS(n, i, l, r) {
	return zb(l, r, await se(n, i, r.buffer));
}
async function i1(n, i, l, r) {
	let c = Sp(r, n.base.features);
	return Db(l, r, c ? await wf(n, i, c) : _);
}
async function OS(n, i, l, r) {
	let c = Sp(r, n.base.features);
	return Lb(l, r, c ? await wf(n, i, c) : _);
}
async function CS(n, i, l, r) {
	let c = [],
		f = [];
	for (let [d, m] of r.entries())
		(c.push(await se(n, i, d)), f.push(await se(n, i, m)));
	return bS(n.base, l, c, f);
}
async function zS(n, i, l, r) {
	let c = [];
	for (let f of r.keys()) c.push(await se(n, i, f));
	return Nb(l, c);
}
async function xp(n, i, l, r) {
	let c = n.base.plugins;
	if (c)
		for (let f = 0, d = c.length; f < d; f++) {
			let m = c[f];
			if (m.parse.async && m.test(r))
				return Ab(l, m.tag, await m.parse.async(r, new _S(n, i), { id: l }));
		}
	return _;
}
async function DS(n, i, l, r) {
	let [c, f] = await hS(r);
	return Ct(12, l, c, _, _, _, _, _, await se(n, i, f), _, _, _);
}
function LS(n, i, l, r, c) {
	let f = [],
		d = l.on({
			next: (m) => {
				($r(this.base, i),
					se(this, n, m).then(
						(g) => {
							f.push(Hb(i, g));
						},
						(g) => {
							(c(g), d());
						},
					));
			},
			throw: (m) => {
				($r(this.base, i),
					se(this, n, m).then(
						(g) => {
							(f.push(qb(i, g)), r(f), d());
						},
						(g) => {
							(c(g), d());
						},
					));
			},
			return: (m) => {
				($r(this.base, i),
					se(this, n, m).then(
						(g) => {
							(f.push(Zb(i, g)), r(f), d());
						},
						(g) => {
							(c(g), d());
						},
					));
			},
		});
}
async function NS(n, i, l, r) {
	return Bb(l, vo(n.base, 4), await new Promise(LS.bind(n, i, l, r)));
}
async function US(n, i, l, r) {
	let c = [];
	for (let f = 0, d = r.v.length; f < d; f++) c[f] = await se(n, i, r.v[f]);
	return Qb(l, c, r.t, r.d);
}
async function jS(n, i, l, r) {
	if (Array.isArray(r)) return TS(n, i, l, r);
	if (yo(r)) return NS(n, i, l, r);
	if (aS(r)) return US(n, i, l, r);
	let c = r.constructor;
	if (c === Ib) return se(n, i, r.replacement);
	let f = await xp(n, i, l, r);
	if (f) return f;
	switch (c) {
		case Object:
			return Gc(n, i, l, r, !1);
		case _:
			return Gc(n, i, l, r, !0);
		case Date:
			return _b(l, r);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError:
			return i1(n, i, l, r);
		case Number:
		case Boolean:
		case String:
		case BigInt:
			return RS(n, i, l, r);
		case ArrayBuffer:
			return SS(n.base, l, r);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array:
			return AS(n, i, l, r);
		case DataView:
			return MS(n, i, l, r);
		case Map:
			return CS(n, i, l, r);
		case Set:
			return zS(n, i, l, r);
	}
	if (c === Promise || r instanceof Promise) return DS(n, i, l, r);
	let d = n.base.features;
	if (d & 32 && c === RegExp) return wb(l, r);
	if (d & 16)
		switch (c) {
			case BigInt64Array:
			case BigUint64Array:
				return xS(n, i, l, r);
		}
	if (
		d & 1 &&
		typeof AggregateError < "u" &&
		(c === AggregateError || r instanceof AggregateError)
	)
		return OS(n, i, l, r);
	if (r instanceof Error) return i1(n, i, l, r);
	if (ta in r || Wn in r) return Gc(n, i, l, r, !!c);
	throw new mo(r);
}
async function BS(n, i, l) {
	let r = _f(n.base, l);
	if (r.type !== 0) return r.value;
	let c = await xp(n, i, r.value, l);
	if (c) return c;
	throw new mo(l);
}
async function se(n, i, l) {
	switch (typeof l) {
		case "boolean":
			return l ? yp : gp;
		case "undefined":
			return rb;
		case "string":
			return _p(l);
		case "number":
			return bb(l);
		case "bigint":
			return Sb(l);
		case "object": {
			if (l) {
				let r = _f(n.base, l);
				return r.type === 0 ? await jS(n, i + 1, r.value, l) : r.value;
			}
			return ob;
		}
		case "symbol":
			return hi(n.base, l);
		case "function":
			return BS(n, i, l);
		default:
			throw new mo(l);
	}
}
async function HS(n, i) {
	try {
		return await se(n, 0, i);
	} catch (l) {
		throw l instanceof a1 ? l : new a1(l);
	}
}
var qS = ((n) => (
	(n[(n.Vanilla = 1)] = "Vanilla"), (n[(n.Cross = 2)] = "Cross"), n
))(qS || {});
function Mp(n, i) {
	for (let l = 0, r = i.length; l < r; l++) {
		let c = i[l];
		n.has(c) || (n.add(c), c.extends && Mp(n, c.extends));
	}
}
function Op(n) {
	if (n) {
		let i = new Set();
		return (Mp(i, n), [...i]);
	}
}
function ZS(n) {
	switch (n) {
		case "Int8Array":
			return Int8Array;
		case "Int16Array":
			return Int16Array;
		case "Int32Array":
			return Int32Array;
		case "Uint8Array":
			return Uint8Array;
		case "Uint16Array":
			return Uint16Array;
		case "Uint32Array":
			return Uint32Array;
		case "Uint8ClampedArray":
			return Uint8ClampedArray;
		case "Float32Array":
			return Float32Array;
		case "Float64Array":
			return Float64Array;
		case "BigInt64Array":
			return BigInt64Array;
		case "BigUint64Array":
			return BigUint64Array;
		default:
			throw new Fb(n);
	}
}
var QS = 1e6,
	YS = 1e4,
	VS = 2e4;
function Cp(n, i) {
	switch (i) {
		case 3:
			return Object.freeze(n);
		case 1:
			return Object.preventExtensions(n);
		case 2:
			return Object.seal(n);
		default:
			return n;
	}
}
var GS = 1e3;
function XS(n, i) {
	var l;
	return {
		mode: n,
		plugins: i.plugins,
		refs: i.refs || new Map(),
		features: (l = i.features) != null ? l : 63 ^ (i.disabledFeatures || 0),
		depthLimit: i.depthLimit || GS,
	};
}
function KS(n) {
	return { mode: 2, base: XS(2, n), child: _ };
}
var PS = class {
	constructor(n, i) {
		((this._p = n), (this.depth = i));
	}
	deserialize(n) {
		return Ht(this._p, this.depth, n);
	}
};
function zp(n, i) {
	if (i < 0 || !Number.isFinite(i) || !Number.isInteger(i))
		throw new Ba({ t: 4, i });
	if (n.refs.has(i)) throw new Error("Conflicted ref id: " + i);
}
function kS(n, i, l) {
	return (zp(n.base, i), n.state.marked.has(i) && n.base.refs.set(i, l), l);
}
function FS(n, i, l) {
	return (zp(n.base, i), n.base.refs.set(i, l), l);
}
function re(n, i, l) {
	return n.mode === 1 ? kS(n, i, l) : FS(n, i, l);
}
function sf(n, i, l) {
	if (Object.hasOwn(i, l)) return i[l];
	throw new Ba(n);
}
function JS(n, i) {
	return re(n, i.i, gb(Si(i.s)));
}
function IS(n, i, l) {
	let r = l.a,
		c = r.length,
		f = re(n, l.i, new Array(c));
	for (let d = 0, m; d < c; d++) ((m = r[d]), m && (f[d] = Ht(n, i, m)));
	return (Cp(f, l.o), f);
}
function $S(n) {
	switch (n) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__":
			return !1;
		default:
			return !0;
	}
}
function WS(n) {
	switch (n) {
		case Wn:
		case yl:
		case gl:
		case ta:
			return !0;
		default:
			return !1;
	}
}
function l1(n, i, l) {
	$S(i)
		? (n[i] = l)
		: Object.defineProperty(n, i, {
				value: l,
				configurable: !0,
				enumerable: !0,
				writable: !0,
			});
}
function t8(n, i, l, r, c) {
	if (typeof r == "string") l1(l, r, Ht(n, i, c));
	else {
		let f = Ht(n, i, r);
		switch (typeof f) {
			case "string":
				l1(l, f, Ht(n, i, c));
				break;
			case "symbol":
				WS(f) && (l[f] = Ht(n, i, c));
				break;
			default:
				throw new Ba(r);
		}
	}
}
function Dp(n, i, l, r) {
	let c = l.k;
	if (c.length > 0)
		for (let f = 0, d = l.v, m = c.length; f < m; f++) t8(n, i, r, c[f], d[f]);
	return r;
}
function e8(n, i, l) {
	let r = re(n, l.i, l.t === 10 ? {} : Object.create(null));
	return (Dp(n, i, l.p, r), Cp(r, l.o), r);
}
function n8(n, i) {
	return re(n, i.i, new Date(i.s));
}
function a8(n, i) {
	if (n.base.features & 32) {
		let l = Si(i.c);
		if (l.length > VS) throw new Ba(i);
		return re(n, i.i, new RegExp(l, i.m));
	}
	throw new Tp(i);
}
function i8(n, i, l) {
	let r = re(n, l.i, new Set());
	for (let c = 0, f = l.a, d = f.length; c < d; c++) r.add(Ht(n, i, f[c]));
	return r;
}
function l8(n, i, l) {
	let r = re(n, l.i, new Map());
	for (let c = 0, f = l.e.k, d = l.e.v, m = f.length; c < m; c++)
		r.set(Ht(n, i, f[c]), Ht(n, i, d[c]));
	return r;
}
function s8(n, i) {
	if (i.s.length > QS) throw new Ba(i);
	return re(n, i.i, Rp(Si(i.s)));
}
function r8(n, i, l) {
	var r;
	let c = ZS(l.c),
		f = Ht(n, i, l.f),
		d = (r = l.b) != null ? r : 0;
	if (d < 0 || d > f.byteLength) throw new Ba(l);
	return re(n, l.i, new c(f, d, l.l));
}
function o8(n, i, l) {
	var r;
	let c = Ht(n, i, l.f),
		f = (r = l.b) != null ? r : 0;
	if (f < 0 || f > c.byteLength) throw new Ba(l);
	return re(n, l.i, new DataView(c, f, l.l));
}
function Lp(n, i, l, r) {
	if (l.p) {
		let c = Dp(n, i, l.p, {});
		Object.defineProperties(r, Object.getOwnPropertyDescriptors(c));
	}
	return r;
}
function u8(n, i, l) {
	let r = re(n, l.i, new AggregateError([], Si(l.m)));
	return Lp(n, i, l, r);
}
function c8(n, i, l) {
	let r = sf(l, sb, l.s),
		c = re(n, l.i, new r(Si(l.m)));
	return Lp(n, i, l, c);
}
function f8(n, i, l) {
	let r = po(),
		c = re(n, l.i, r.p),
		f = Ht(n, i, l.f);
	return (l.s ? r.s(f) : r.f(f), c);
}
function d8(n, i, l) {
	return re(n, l.i, Object(Ht(n, i, l.f)));
}
function h8(n, i, l) {
	let r = n.base.plugins;
	if (r) {
		let c = Si(l.c);
		for (let f = 0, d = r.length; f < d; f++) {
			let m = r[f];
			if (m.tag === c)
				return re(n, l.i, m.deserialize(l.s, new PS(n, i), { id: l.i }));
		}
	}
	throw new Kb(l.c);
}
function m8(n, i) {
	return re(n, i.i, re(n, i.s, po()).p);
}
function p8(n, i, l) {
	let r = n.base.refs.get(l.i);
	if (r) return (r.s(Ht(n, i, l.a[1])), _);
	throw new Ms("Promise");
}
function y8(n, i, l) {
	let r = n.base.refs.get(l.i);
	if (r) return (r.f(Ht(n, i, l.a[1])), _);
	throw new Ms("Promise");
}
function g8(n, i, l) {
	Ht(n, i, l.a[0]);
	let r = Ht(n, i, l.a[1]);
	return sS(r);
}
function v8(n, i, l) {
	Ht(n, i, l.a[0]);
	let r = Ht(n, i, l.a[1]);
	return dS(r);
}
function b8(n, i, l) {
	let r = re(n, l.i, Ei()),
		c = l.a,
		f = c.length;
	if (f) for (let d = 0; d < f; d++) Ht(n, i, c[d]);
	return r;
}
function S8(n, i, l) {
	let r = n.base.refs.get(l.i);
	if (r && yo(r)) return (r.next(Ht(n, i, l.f)), _);
	throw new Ms("Stream");
}
function E8(n, i, l) {
	let r = n.base.refs.get(l.i);
	if (r && yo(r)) return (r.throw(Ht(n, i, l.f)), _);
	throw new Ms("Stream");
}
function _8(n, i, l) {
	let r = n.base.refs.get(l.i);
	if (r && yo(r)) return (r.return(Ht(n, i, l.f)), _);
	throw new Ms("Stream");
}
function w8(n, i, l) {
	return (Ht(n, i, l.f), _);
}
function T8(n, i, l) {
	return (Ht(n, i, l.a[1]), _);
}
function R8(n, i, l) {
	let r = re(n, l.i, Ap([], l.s, l.l));
	for (let c = 0, f = l.a.length; c < f; c++) r.v[c] = Ht(n, i, l.a[c]);
	return r;
}
function Ht(n, i, l) {
	if (i > n.base.depthLimit) throw new Jb(n.base.depthLimit);
	switch (((i += 1), l.t)) {
		case 2:
			return sf(l, ib, l.s);
		case 0:
			return Number(l.s);
		case 1:
			return Si(String(l.s));
		case 3:
			if (String(l.s).length > YS) throw new Ba(l);
			return BigInt(l.s);
		case 4:
			return n.base.refs.get(l.i);
		case 18:
			return JS(n, l);
		case 9:
			return IS(n, i, l);
		case 10:
		case 11:
			return e8(n, i, l);
		case 5:
			return n8(n, l);
		case 6:
			return a8(n, l);
		case 7:
			return i8(n, i, l);
		case 8:
			return l8(n, i, l);
		case 19:
			return s8(n, l);
		case 16:
		case 15:
			return r8(n, i, l);
		case 20:
			return o8(n, i, l);
		case 14:
			return u8(n, i, l);
		case 13:
			return c8(n, i, l);
		case 12:
			return f8(n, i, l);
		case 17:
			return sf(l, ab, l.s);
		case 21:
			return d8(n, i, l);
		case 25:
			return h8(n, i, l);
		case 22:
			return m8(n, l);
		case 23:
			return p8(n, i, l);
		case 24:
			return y8(n, i, l);
		case 28:
			return g8(n, i, l);
		case 30:
			return v8(n, i, l);
		case 31:
			return b8(n, i, l);
		case 32:
			return S8(n, i, l);
		case 33:
			return E8(n, i, l);
		case 34:
			return _8(n, i, l);
		case 27:
			return w8(n, i, l);
		case 29:
			return T8(n, i, l);
		case 35:
			return R8(n, i, l);
		default:
			throw new Tp(l);
	}
}
function A8(n, i) {
	try {
		return Ht(n, 0, i);
	} catch (l) {
		throw new Xb(l);
	}
}
var x8 = () => T;
x8.toString();
function Xc(n, i) {
	let l = Op(i.plugins),
		r = KS({
			plugins: l,
			refs: i.refs,
			features: i.features,
			disabledFeatures: i.disabledFeatures,
			depthLimit: i.depthLimit,
		});
	return A8(r, n);
}
async function M8(n, i = {}) {
	let l = Op(i.plugins),
		r = ES(1, { plugins: l, disabledFeatures: i.disabledFeatures });
	return {
		t: await HS(r, n),
		f: r.base.features,
		m: Array.from(r.base.marked),
	};
}
function O8(n) {
	return {
		tag: "$TSR/t/" + n.key,
		test: n.test,
		parse: {
			sync(i, l) {
				return l.parse(n.toSerializable(i));
			},
			async async(i, l) {
				return await l.parse(n.toSerializable(i));
			},
			stream(i, l) {
				return l.parse(n.toSerializable(i));
			},
		},
		serialize: void 0,
		deserialize(i, l) {
			return n.fromSerializable(l.deserialize(i));
		},
	};
}
var Ca = {},
	Np = (n) =>
		new ReadableStream({
			start: (i) => {
				n.on({
					next: (l) => {
						try {
							i.enqueue(l);
						} catch {}
					},
					throw: (l) => {
						i.error(l);
					},
					return: () => {
						try {
							i.close();
						} catch {}
					},
				});
			},
		}),
	C8 = {
		tag: "seroval-plugins/web/ReadableStreamFactory",
		test(n) {
			return n === Ca;
		},
		parse: {
			sync() {
				return Ca;
			},
			async async() {
				return await Promise.resolve(Ca);
			},
			stream() {
				return Ca;
			},
		},
		serialize() {
			return Np.toString();
		},
		deserialize() {
			return Ca;
		},
	};
function s1(n) {
	let i = Ei(),
		l = n.getReader();
	async function r() {
		try {
			let c = await l.read();
			c.done ? i.return(c.value) : (i.next(c.value), await r());
		} catch (c) {
			i.throw(c);
		}
	}
	return (r().catch(() => {}), i);
}
var z8 = {
		tag: "seroval/plugins/web/ReadableStream",
		extends: [C8],
		test(n) {
			return typeof ReadableStream > "u" ? !1 : n instanceof ReadableStream;
		},
		parse: {
			sync(n, i) {
				return { factory: i.parse(Ca), stream: i.parse(Ei()) };
			},
			async async(n, i) {
				return { factory: await i.parse(Ca), stream: await i.parse(s1(n)) };
			},
			stream(n, i) {
				return { factory: i.parse(Ca), stream: i.parse(s1(n)) };
			},
		},
		serialize(n, i) {
			return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
		},
		deserialize(n, i) {
			let l = i.deserialize(n.stream);
			return Np(l);
		},
	},
	D8 = z8;
const L8 = {
	tag: "$TSR/Error",
	test(n) {
		return n instanceof Error;
	},
	parse: {
		sync(n, i) {
			return { message: i.parse(n.message) };
		},
		async async(n, i) {
			return { message: await i.parse(n.message) };
		},
		stream(n, i) {
			return { message: i.parse(n.message) };
		},
	},
	serialize(n, i) {
		return "new Error(" + i.serialize(n.message) + ")";
	},
	deserialize(n, i) {
		return new Error(i.deserialize(n.message));
	},
};
class N8 {
	constructor(i, l) {
		((this.stream = i), (this.hint = l?.hint ?? "binary"));
	}
}
const ro = globalThis.Buffer,
	Up = !!ro && typeof ro.from == "function";
function jp(n) {
	if (n.length === 0) return "";
	if (Up) return ro.from(n).toString("base64");
	const i = 32768,
		l = [];
	for (let r = 0; r < n.length; r += i) {
		const c = n.subarray(r, r + i);
		l.push(String.fromCharCode.apply(null, c));
	}
	return btoa(l.join(""));
}
function Bp(n) {
	if (n.length === 0) return new Uint8Array(0);
	if (Up) {
		const r = ro.from(n, "base64");
		return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
	}
	const i = atob(n),
		l = new Uint8Array(i.length);
	for (let r = 0; r < i.length; r++) l[r] = i.charCodeAt(r);
	return l;
}
const bs = Object.create(null),
	Ss = Object.create(null),
	U8 = (n) =>
		new ReadableStream({
			start(i) {
				n.on({
					next(l) {
						try {
							i.enqueue(Bp(l));
						} catch {}
					},
					throw(l) {
						i.error(l);
					},
					return() {
						try {
							i.close();
						} catch {}
					},
				});
			},
		}),
	j8 = new TextEncoder(),
	B8 = (n) =>
		new ReadableStream({
			start(i) {
				n.on({
					next(l) {
						try {
							typeof l == "string"
								? i.enqueue(j8.encode(l))
								: i.enqueue(Bp(l.$b64));
						} catch {}
					},
					throw(l) {
						i.error(l);
					},
					return() {
						try {
							i.close();
						} catch {}
					},
				});
			},
		}),
	H8 =
		"(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
	q8 =
		"(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function r1(n) {
	const i = Ei(),
		l = n.getReader();
	return (
		(async () => {
			try {
				for (;;) {
					const { done: r, value: c } = await l.read();
					if (r) {
						i.return(void 0);
						break;
					}
					i.next(jp(c));
				}
			} catch (r) {
				i.throw(r);
			} finally {
				l.releaseLock();
			}
		})(),
		i
	);
}
function o1(n) {
	const i = Ei(),
		l = n.getReader(),
		r = new TextDecoder("utf-8", { fatal: !0 });
	return (
		(async () => {
			try {
				for (;;) {
					const { done: c, value: f } = await l.read();
					if (c) {
						try {
							const d = r.decode();
							d.length > 0 && i.next(d);
						} catch {}
						i.return(void 0);
						break;
					}
					try {
						const d = r.decode(f, { stream: !0 });
						d.length > 0 && i.next(d);
					} catch {
						i.next({ $b64: jp(f) });
					}
				}
			} catch (c) {
				i.throw(c);
			} finally {
				l.releaseLock();
			}
		})(),
		i
	);
}
const Z8 = {
		tag: "tss/RawStreamFactory",
		test(n) {
			return n === bs;
		},
		parse: {
			sync() {},
			async() {
				return Promise.resolve(void 0);
			},
			stream() {},
		},
		serialize() {
			return H8;
		},
		deserialize() {
			return bs;
		},
	},
	Q8 = {
		tag: "tss/RawStreamFactoryText",
		test(n) {
			return n === Ss;
		},
		parse: {
			sync() {},
			async() {
				return Promise.resolve(void 0);
			},
			stream() {},
		},
		serialize() {
			return q8;
		},
		deserialize() {
			return Ss;
		},
	},
	Y8 = {
		tag: "tss/RawStream",
		extends: [Z8, Q8],
		test(n) {
			return n instanceof N8;
		},
		parse: {
			sync(n, i) {
				const l = n.hint === "text" ? Ss : bs;
				return { hint: n.hint, factory: i.parse(l), stream: i.parse(Ei()) };
			},
			async async(n, i) {
				const l = n.hint === "text" ? Ss : bs,
					r = n.hint === "text" ? o1(n.stream) : r1(n.stream);
				return {
					hint: n.hint,
					factory: await i.parse(l),
					stream: await i.parse(r),
				};
			},
			stream(n, i) {
				const l = n.hint === "text" ? Ss : bs,
					r = n.hint === "text" ? o1(n.stream) : r1(n.stream);
				return { hint: n.hint, factory: i.parse(l), stream: i.parse(r) };
			},
		},
		serialize(n, i) {
			return "(" + i.serialize(n.factory) + ")(" + i.serialize(n.stream) + ")";
		},
		deserialize(n, i) {
			const l = i.deserialize(n.stream);
			return n.hint === "text" ? B8(l) : U8(l);
		},
	};
function V8(n) {
	return {
		tag: "tss/RawStream",
		test: () => !1,
		parse: {},
		serialize() {
			throw new Error(
				"RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
			);
		},
		deserialize(i) {
			return n(i.streamId);
		},
	};
}
const G8 = [L8, Y8, D8],
	X8 = "use",
	oo = xv[X8],
	Xr = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function Kc(n) {
	const i = z.useRef({ value: n, prev: null }),
		l = i.current.value;
	return (n !== l && (i.current = { value: n, prev: l }), i.current.prev);
}
function K8(n, i, l = {}, r = {}) {
	z.useEffect(() => {
		if (!n.current || r.disabled || typeof IntersectionObserver != "function")
			return;
		const c = new IntersectionObserver(([f]) => {
			i(f);
		}, l);
		return (
			c.observe(n.current),
			() => {
				c.disconnect();
			}
		);
	}, [i, l, r.disabled, n]);
}
function P8(n) {
	const i = z.useRef(null);
	return (z.useImperativeHandle(n, () => i.current, []), i);
}
function k8({ promise: n }) {
	if (oo) return oo(n);
	const i = W2(n);
	if (i[Cn].status === "pending") throw i;
	if (i[Cn].status === "error") throw i[Cn].error;
	return i[Cn].data;
}
function F8(n) {
	const i = $.jsx(J8, { ...n });
	return n.fallback
		? $.jsx(z.Suspense, { fallback: n.fallback, children: i })
		: i;
}
function J8(n) {
	const i = k8(n);
	return n.children(i);
}
function Tf(n) {
	const i = n.errorComponent ?? Rf;
	return $.jsx(I8, {
		getResetKey: n.getResetKey,
		onCatch: n.onCatch,
		children: ({ error: l, reset: r }) =>
			l ? z.createElement(i, { error: l, reset: r }) : n.children,
	});
}
class I8 extends z.Component {
	constructor() {
		(super(...arguments), (this.state = { error: null }));
	}
	static getDerivedStateFromProps(i) {
		return { resetKey: i.getResetKey() };
	}
	static getDerivedStateFromError(i) {
		return { error: i };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidUpdate(i, l) {
		l.error && l.resetKey !== this.state.resetKey && this.reset();
	}
	componentDidCatch(i, l) {
		this.props.onCatch && this.props.onCatch(i, l);
	}
	render() {
		return this.props.children({
			error:
				this.state.resetKey !== this.props.getResetKey()
					? null
					: this.state.error,
			reset: () => {
				this.reset();
			},
		});
	}
}
function Rf({ error: n }) {
	const [i, l] = z.useState(!1);
	return $.jsxs("div", {
		style: { padding: ".5rem", maxWidth: "100%" },
		children: [
			$.jsxs("div", {
				style: { display: "flex", alignItems: "center", gap: ".5rem" },
				children: [
					$.jsx("strong", {
						style: { fontSize: "1rem" },
						children: "Something went wrong!",
					}),
					$.jsx("button", {
						style: {
							appearance: "none",
							fontSize: ".6em",
							border: "1px solid currentColor",
							padding: ".1rem .2rem",
							fontWeight: "bold",
							borderRadius: ".25rem",
						},
						onClick: () => l((r) => !r),
						children: i ? "Hide Error" : "Show Error",
					}),
				],
			}),
			$.jsx("div", { style: { height: ".25rem" } }),
			i
				? $.jsx("div", {
						children: $.jsx("pre", {
							style: {
								fontSize: ".7em",
								border: "1px solid red",
								borderRadius: ".25rem",
								padding: ".3rem",
								color: "red",
								overflow: "auto",
							},
							children: n.message
								? $.jsx("code", { children: n.message })
								: null,
						}),
					})
				: null,
		],
	});
}
function $8({ children: n, fallback: i = null }) {
	return Af()
		? $.jsx(tt.Fragment, { children: n })
		: $.jsx(tt.Fragment, { children: i });
}
function Af() {
	return tt.useSyncExternalStore(
		W8,
		() => !0,
		() => !1,
	);
}
function W8() {
	return () => {};
}
var Pc = { exports: {} },
	kc = {},
	Fc = { exports: {} },
	Jc = {};
var u1;
function t4() {
	if (u1) return Jc;
	u1 = 1;
	var n = xs();
	function i(y, b) {
		return (y === b && (y !== 0 || 1 / y === 1 / b)) || (y !== y && b !== b);
	}
	var l = typeof Object.is == "function" ? Object.is : i,
		r = n.useState,
		c = n.useEffect,
		f = n.useLayoutEffect,
		d = n.useDebugValue;
	function m(y, b) {
		var E = b(),
			w = r({ inst: { value: E, getSnapshot: b } }),
			x = w[0].inst,
			R = w[1];
		return (
			f(
				function () {
					((x.value = E), (x.getSnapshot = b), g(x) && R({ inst: x }));
				},
				[y, E, b],
			),
			c(
				function () {
					return (
						g(x) && R({ inst: x }),
						y(function () {
							g(x) && R({ inst: x });
						})
					);
				},
				[y],
			),
			d(E),
			E
		);
	}
	function g(y) {
		var b = y.getSnapshot;
		y = y.value;
		try {
			var E = b();
			return !l(y, E);
		} catch {
			return !0;
		}
	}
	function h(y, b) {
		return b();
	}
	var v =
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
			? h
			: m;
	return (
		(Jc.useSyncExternalStore =
			n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v),
		Jc
	);
}
var c1;
function e4() {
	return (c1 || ((c1 = 1), (Fc.exports = t4())), Fc.exports);
}
var f1;
function n4() {
	if (f1) return kc;
	f1 = 1;
	var n = xs(),
		i = e4();
	function l(h, v) {
		return (h === v && (h !== 0 || 1 / h === 1 / v)) || (h !== h && v !== v);
	}
	var r = typeof Object.is == "function" ? Object.is : l,
		c = i.useSyncExternalStore,
		f = n.useRef,
		d = n.useEffect,
		m = n.useMemo,
		g = n.useDebugValue;
	return (
		(kc.useSyncExternalStoreWithSelector = function (h, v, y, b, E) {
			var w = f(null);
			if (w.current === null) {
				var x = { hasValue: !1, value: null };
				w.current = x;
			} else x = w.current;
			w = m(
				function () {
					function O(J) {
						if (!H) {
							if (((H = !0), (q = J), (J = b(J)), E !== void 0 && x.hasValue)) {
								var X = x.value;
								if (E(X, J)) return (Q = X);
							}
							return (Q = J);
						}
						if (((X = Q), r(q, J))) return X;
						var Y = b(J);
						return E !== void 0 && E(X, Y) ? ((q = J), X) : ((q = J), (Q = Y));
					}
					var H = !1,
						q,
						Q,
						F = y === void 0 ? null : y;
					return [
						function () {
							return O(v());
						},
						F === null
							? void 0
							: function () {
									return O(F());
								},
					];
				},
				[v, y, b, E],
			);
			var R = c(h, w[0], w[1]);
			return (
				d(
					function () {
						((x.hasValue = !0), (x.value = R));
					},
					[R],
				),
				g(R),
				R
			);
		}),
		kc
	);
}
var d1;
function a4() {
	return (d1 || ((d1 = 1), (Pc.exports = n4())), Pc.exports);
}
var i4 = a4();
function l4(n, i) {
	return n === i;
}
function s4(n, i, l = l4) {
	const r = z.useCallback(
			(d) => {
				if (!n) return () => {};
				const { unsubscribe: m } = n.subscribe(d);
				return m;
			},
			[n],
		),
		c = z.useCallback(() => n?.get(), [n]);
	return i4.useSyncExternalStoreWithSelector(r, c, c, i, l);
}
const Hp = z.createContext(null);
function Te(n) {
	const i = z.useContext(Hp);
	return (n?.warn, i);
}
function le(n) {
	const i = Te({ warn: n?.router === void 0 }),
		l = n?.router || i,
		r = z.useRef(void 0);
	return s4(l.__store, (c) => {
		if (n?.select) {
			if (n.structuralSharing ?? l.options.defaultStructuralSharing) {
				const f = ci(r.current, n.select(c));
				return ((r.current = f), f);
			}
			return n.select(c);
		}
		return c;
	});
}
const bo = z.createContext(void 0),
	r4 = z.createContext(void 0);
function Ha(n) {
	const i = z.useContext(n.from ? r4 : bo);
	return le({
		select: (r) => {
			const c = r.matches.find((f) =>
				n.from ? n.from === f.routeId : f.id === i,
			);
			if (
				(We(
					!((n.shouldThrow ?? !0) && !c),
					`Could not find ${n.from ? `an active match from "${n.from}"` : "a nearest match!"}`,
				),
				c !== void 0)
			)
				return n.select ? n.select(c) : c;
		},
		structuralSharing: n.structuralSharing,
	});
}
function xf(n) {
	return Ha({
		from: n.from,
		strict: n.strict,
		structuralSharing: n.structuralSharing,
		select: (i) => (n.select ? n.select(i.loaderData) : i.loaderData),
	});
}
function Mf(n) {
	const { select: i, ...l } = n;
	return Ha({ ...l, select: (r) => (i ? i(r.loaderDeps) : r.loaderDeps) });
}
function Of(n) {
	return Ha({
		from: n.from,
		shouldThrow: n.shouldThrow,
		structuralSharing: n.structuralSharing,
		strict: n.strict,
		select: (i) => {
			const l = n.strict === !1 ? i.params : i._strictParams;
			return n.select ? n.select(l) : l;
		},
	});
}
function Cf(n) {
	return Ha({
		from: n.from,
		strict: n.strict,
		shouldThrow: n.shouldThrow,
		structuralSharing: n.structuralSharing,
		select: (i) => (n.select ? n.select(i.search) : i.search),
	});
}
function zf(n) {
	const i = Te();
	return z.useCallback(
		(l) => i.navigate({ ...l, from: l.from ?? n?.from }),
		[n?.from, i],
	);
}
function Df(n) {
	return Ha({
		...n,
		select: (i) => (n.select ? n.select(i.context) : i.context),
	});
}
var qp = Y1();
const o4 = Q1(qp);
function u4(n, i) {
	const l = Te(),
		r = P8(i),
		{
			activeProps: c,
			inactiveProps: f,
			activeOptions: d,
			to: m,
			preload: g,
			preloadDelay: h,
			hashScrollIntoView: v,
			replace: y,
			startTransition: b,
			resetScroll: E,
			viewTransition: w,
			children: x,
			target: R,
			disabled: O,
			style: H,
			className: q,
			onClick: Q,
			onBlur: F,
			onFocus: J,
			onMouseEnter: X,
			onMouseLeave: Y,
			onTouchStart: W,
			ignoreBlocker: ct,
			params: it,
			search: at,
			hash: wt,
			state: Tt,
			mask: qt,
			reloadDocument: L,
			unsafeRelative: k,
			from: st,
			_fromLocation: vt,
			...mt
		} = n,
		M = Af(),
		G = le({
			select: (xt) => {
				const Kt = xt.matches[xt.matches.length - 1];
				return {
					search: Kt?.search,
					hash: xt.location.hash,
					path: Kt?.pathname,
				};
			},
			structuralSharing: !0,
		}),
		P = n.from,
		I = z.useMemo(
			() => ({ ...n, from: P }),
			[
				l,
				G,
				P,
				n._fromLocation,
				n.hash,
				n.to,
				n.search,
				n.params,
				n.state,
				n.mask,
				n.unsafeRelative,
			],
		),
		et = z.useMemo(() => l.buildLocation({ ...I }), [l, I]),
		ot = et.maskedLocation ? et.maskedLocation.publicHref : et.publicHref,
		gt = et.maskedLocation ? et.maskedLocation.external : et.external,
		ft = z.useMemo(() => p4(ot, gt, l.history, O), [O, gt, ot, l.history]),
		At = z.useMemo(() => {
			if (ft?.external)
				return no(ft.href, l.protocolAllowlist) ? void 0 : ft.href;
			if (!y4(m) && !(typeof m != "string" || m.indexOf(":") === -1))
				try {
					return (new URL(m), no(m, l.protocolAllowlist) ? void 0 : m);
				} catch {}
		}, [m, ft, l.protocolAllowlist]),
		ze = le({
			select: (xt) => {
				if (At) return !1;
				if (d?.exact) {
					if (!E2(xt.location.pathname, et.pathname, l.basepath)) return !1;
				} else {
					const Kt = io(xt.location.pathname, l.basepath),
						ae = io(et.pathname, l.basepath);
					if (
						!(
							Kt.startsWith(ae) &&
							(Kt.length === ae.length || Kt[ae.length] === "/")
						)
					)
						return !1;
				}
				return (d?.includeSearch ?? !0) &&
					!mi(xt.location.search, et.search, {
						partial: !d?.exact,
						ignoreUndefined: !d?.explicitUndefined,
					})
					? !1
					: d?.includeHash
						? M && xt.location.hash === et.hash
						: !0;
			},
		}),
		De = ze ? (za(c, {}) ?? c4) : Ic,
		Re = ze ? Ic : (za(f, {}) ?? Ic),
		qa = [q, De.className, Re.className].filter(Boolean).join(" "),
		Le = (H || De.style || Re.style) && { ...H, ...De.style, ...Re.style },
		[Za, zn] = z.useState(!1),
		En = z.useRef(!1),
		nn = n.reloadDocument || At ? !1 : (g ?? l.options.defaultPreload),
		fe = h ?? l.options.defaultPreloadDelay ?? 0,
		Xe = z.useCallback(() => {
			l.preloadRoute({ ...I, _builtLocation: et }).catch((xt) => {
				(console.warn(xt), console.warn(tb));
			});
		}, [l, I, et]),
		Qa = z.useCallback(
			(xt) => {
				xt?.isIntersecting && Xe();
			},
			[Xe],
		);
	(K8(r, Qa, m4, { disabled: !!O || nn !== "viewport" }),
		z.useEffect(() => {
			En.current || (!O && nn === "render" && (Xe(), (En.current = !0)));
		}, [O, Xe, nn]));
	const de = (xt) => {
		const Kt = xt.currentTarget.getAttribute("target"),
			ae = R !== void 0 ? R : Kt;
		if (
			!O &&
			!g4(xt) &&
			!xt.defaultPrevented &&
			(!ae || ae === "_self") &&
			xt.button === 0
		) {
			(xt.preventDefault(),
				qp.flushSync(() => {
					zn(!0);
				}));
			const na = l.subscribe("onResolved", () => {
				(na(), zn(!1));
			});
			l.navigate({
				...I,
				replace: y,
				resetScroll: E,
				hashScrollIntoView: v,
				startTransition: b,
				viewTransition: w,
				ignoreBlocker: ct,
			});
		}
	};
	if (At)
		return {
			...mt,
			ref: r,
			href: At,
			...(x && { children: x }),
			...(R && { target: R }),
			...(O && { disabled: O }),
			...(H && { style: H }),
			...(q && { className: q }),
			...(Q && { onClick: Q }),
			...(F && { onBlur: F }),
			...(J && { onFocus: J }),
			...(X && { onMouseEnter: X }),
			...(Y && { onMouseLeave: Y }),
			...(W && { onTouchStart: W }),
		};
	const pn = (xt) => {
			if (O || nn !== "intent") return;
			if (!fe) {
				Xe();
				return;
			}
			const Kt = xt.currentTarget;
			if (gs.has(Kt)) return;
			const ae = setTimeout(() => {
				(gs.delete(Kt), Xe());
			}, fe);
			gs.set(Kt, ae);
		},
		he = (xt) => {
			O || nn !== "intent" || Xe();
		},
		wi = (xt) => {
			if (O || !nn || !fe) return;
			const Kt = xt.currentTarget,
				ae = gs.get(Kt);
			ae && (clearTimeout(ae), gs.delete(Kt));
		};
	return {
		...mt,
		...De,
		...Re,
		href: ft?.href,
		ref: r,
		onClick: fl([Q, de]),
		onBlur: fl([F, wi]),
		onFocus: fl([J, pn]),
		onMouseEnter: fl([X, pn]),
		onMouseLeave: fl([Y, wi]),
		onTouchStart: fl([W, he]),
		disabled: !!O,
		target: R,
		...(Le && { style: Le }),
		...(qa && { className: qa }),
		...(O && f4),
		...(ze && d4),
		...(M && Za && h4),
	};
}
const Ic = {},
	c4 = { className: "active" },
	f4 = { role: "link", "aria-disabled": !0 },
	d4 = { "data-status": "active", "aria-current": "page" },
	h4 = { "data-transitioning": "transitioning" },
	gs = new WeakMap(),
	m4 = { rootMargin: "100px" },
	fl = (n) => (i) => {
		for (const l of n)
			if (l) {
				if (i.defaultPrevented) return;
				l(i);
			}
	};
function p4(n, i, l, r) {
	if (!r)
		return i
			? { href: n, external: !0 }
			: { href: l.createHref(n) || "/", external: !1 };
}
function y4(n) {
	if (typeof n != "string") return !1;
	const i = n.charCodeAt(0);
	return i === 47 ? n.charCodeAt(1) !== 47 : i === 46;
}
const Zp = z.forwardRef((n, i) => {
	const { _asChild: l, ...r } = n,
		{ type: c, ...f } = u4(r, i),
		d =
			typeof r.children == "function"
				? r.children({ isActive: f["data-status"] === "active" })
				: r.children;
	if (!l) {
		const { disabled: m, ...g } = f;
		return z.createElement("a", g, d);
	}
	return z.createElement(l, f, d);
});
function g4(n) {
	return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
let v4 = class extends lp {
	constructor(i) {
		(super(i),
			(this.useMatch = (l) =>
				Ha({
					select: l?.select,
					from: this.id,
					structuralSharing: l?.structuralSharing,
				})),
			(this.useRouteContext = (l) => Df({ ...l, from: this.id })),
			(this.useSearch = (l) =>
				Cf({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.id,
				})),
			(this.useParams = (l) =>
				Of({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.id,
				})),
			(this.useLoaderDeps = (l) => Mf({ ...l, from: this.id })),
			(this.useLoaderData = (l) => xf({ ...l, from: this.id })),
			(this.useNavigate = () => zf({ from: this.fullPath })),
			(this.Link = tt.forwardRef((l, r) =>
				$.jsx(Zp, { ref: r, from: this.fullPath, ...l }),
			)),
			(this.$$typeof = Symbol.for("react.memo")));
	}
};
function b4(n) {
	return new v4(n);
}
function S4() {
	return (n) => _4(n);
}
class E4 extends eb {
	constructor(i) {
		(super(i),
			(this.useMatch = (l) =>
				Ha({
					select: l?.select,
					from: this.id,
					structuralSharing: l?.structuralSharing,
				})),
			(this.useRouteContext = (l) => Df({ ...l, from: this.id })),
			(this.useSearch = (l) =>
				Cf({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.id,
				})),
			(this.useParams = (l) =>
				Of({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.id,
				})),
			(this.useLoaderDeps = (l) => Mf({ ...l, from: this.id })),
			(this.useLoaderData = (l) => xf({ ...l, from: this.id })),
			(this.useNavigate = () => zf({ from: this.fullPath })),
			(this.Link = tt.forwardRef((l, r) =>
				$.jsx(Zp, { ref: r, from: this.fullPath, ...l }),
			)),
			(this.$$typeof = Symbol.for("react.memo")));
	}
}
function _4(n) {
	return new E4(n);
}
function Ce(n) {
	return typeof n == "object"
		? new h1(n, { silent: !0 }).createRoute(n)
		: new h1(n, { silent: !0 }).createRoute;
}
class h1 {
	constructor(i, l) {
		((this.path = i),
			(this.createRoute = (r) => {
				const c = b4(r);
				return ((c.isRoot = !1), c);
			}),
			(this.silent = l?.silent));
	}
}
class m1 {
	constructor(i) {
		((this.useMatch = (l) =>
			Ha({
				select: l?.select,
				from: this.options.id,
				structuralSharing: l?.structuralSharing,
			})),
			(this.useRouteContext = (l) => Df({ ...l, from: this.options.id })),
			(this.useSearch = (l) =>
				Cf({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.options.id,
				})),
			(this.useParams = (l) =>
				Of({
					select: l?.select,
					structuralSharing: l?.structuralSharing,
					from: this.options.id,
				})),
			(this.useLoaderDeps = (l) => Mf({ ...l, from: this.options.id })),
			(this.useLoaderData = (l) => xf({ ...l, from: this.options.id })),
			(this.useNavigate = () => {
				const l = Te();
				return zf({ from: l.routesById[this.options.id].fullPath });
			}),
			(this.options = i),
			(this.$$typeof = Symbol.for("react.memo")));
	}
}
function p1(n) {
	return typeof n == "object" ? new m1(n) : (i) => new m1({ id: n, ...i });
}
function tn(n, i) {
	let l, r, c, f;
	const d = () => (
			l ||
				(l = n()
					.then((g) => {
						((l = void 0), (r = g[i]));
					})
					.catch((g) => {
						if (
							((c = g),
							a2(c) &&
								c instanceof Error &&
								typeof window < "u" &&
								typeof sessionStorage < "u")
						) {
							const h = `tanstack_router_reload:${c.message}`;
							sessionStorage.getItem(h) ||
								(sessionStorage.setItem(h, "1"), (f = !0));
						}
					})),
			l
		),
		m = function (h) {
			if (f) throw (window.location.reload(), new Promise(() => {}));
			if (c) throw c;
			if (!r)
				if (oo) oo(d());
				else throw d();
			return z.createElement(r, h);
		};
	return ((m.preload = d), m);
}
function w4() {
	const n = Te(),
		i = z.useRef({ router: n, mounted: !1 }),
		[l, r] = z.useState(!1),
		{ hasPendingMatches: c, isLoading: f } = le({
			select: (y) => ({
				isLoading: y.isLoading,
				hasPendingMatches: y.matches.some((b) => b.status === "pending"),
			}),
			structuralSharing: !0,
		}),
		d = Kc(f),
		m = f || l || c,
		g = Kc(m),
		h = f || c,
		v = Kc(h);
	return (
		(n.startTransition = (y) => {
			(r(!0),
				z.startTransition(() => {
					(y(), r(!1));
				}));
		}),
		z.useEffect(() => {
			const y = n.history.subscribe(n.load),
				b = n.buildLocation({
					to: n.latestLocation.pathname,
					search: !0,
					params: !0,
					hash: !0,
					state: !0,
					_includeValidateSearch: !0,
				});
			return (
				Na(n.latestLocation.publicHref) !== Na(b.publicHref) &&
					n.commitLocation({ ...b, replace: !0 }),
				() => {
					y();
				}
			);
		}, [n, n.history]),
		Xr(() => {
			if (
				(typeof window < "u" && n.ssr) ||
				(i.current.router === n && i.current.mounted)
			)
				return;
			((i.current = { router: n, mounted: !0 }),
				(async () => {
					try {
						await n.load();
					} catch (b) {
						console.error(b);
					}
				})());
		}, [n]),
		Xr(() => {
			d && !f && n.emit({ type: "onLoad", ...yi(n.state) });
		}, [d, n, f]),
		Xr(() => {
			v && !h && n.emit({ type: "onBeforeRouteMount", ...yi(n.state) });
		}, [h, v, n]),
		Xr(() => {
			if (g && !m) {
				const y = yi(n.state);
				(n.emit({ type: "onResolved", ...y }),
					n.__store.setState((b) => ({
						...b,
						status: "idle",
						resolvedLocation: b.location,
					})),
					y.hrefChanged && z2(n));
			}
		}, [m, g, n]),
		null
	);
}
function T4(n) {
	const i = le({
		select: (l) => `not-found-${l.location.pathname}-${l.status}`,
	});
	return $.jsx(Tf, {
		getResetKey: () => i,
		onCatch: (l, r) => {
			if (Se(l)) n.onCatch?.(l, r);
			else throw l;
		},
		errorComponent: ({ error: l }) => {
			if (Se(l)) return n.fallback?.(l);
			throw l;
		},
		children: n.children,
	});
}
function R4() {
	return $.jsx("p", { children: "Not Found" });
}
function hl(n) {
	return $.jsx($.Fragment, { children: n.children });
}
function Qp(n, i, l) {
	return i.options.notFoundComponent
		? $.jsx(i.options.notFoundComponent, { ...l })
		: n.options.defaultNotFoundComponent
			? $.jsx(n.options.defaultNotFoundComponent, { ...l })
			: $.jsx(R4, {});
}
function A4() {
	return (Te().isScrollRestoring, null);
}
const Yp = z.memo(function ({ matchId: i }) {
	const l = Te(),
		r = le({
			select: (x) => {
				const R = x.matches.findIndex((H) => H.id === i),
					O = x.matches[R];
				return (
					We(O),
					{
						routeId: O.routeId,
						ssr: O.ssr,
						_displayPending: O._displayPending,
						resetKey: x.loadedAt,
						parentRouteId: x.matches[R - 1]?.routeId,
					}
				);
			},
			structuralSharing: !0,
		}),
		c = l.routesById[r.routeId],
		f = c.options.pendingComponent ?? l.options.defaultPendingComponent,
		d = f ? $.jsx(f, {}) : null,
		m = c.options.errorComponent ?? l.options.defaultErrorComponent,
		g = c.options.onCatch ?? l.options.defaultOnCatch,
		h = c.isRoot
			? (c.options.notFoundComponent ??
				l.options.notFoundRoute?.options.component)
			: c.options.notFoundComponent,
		v = r.ssr === !1 || r.ssr === "data-only",
		y =
			(!c.isRoot || c.options.wrapInSuspense || v) &&
			(c.options.wrapInSuspense ??
				f ??
				(c.options.errorComponent?.preload || v))
				? z.Suspense
				: hl,
		b = m ? Tf : hl,
		E = h ? T4 : hl,
		w = c.isRoot ? (c.options.shellComponent ?? hl) : hl;
	return $.jsxs(w, {
		children: [
			$.jsx(bo.Provider, {
				value: i,
				children: $.jsx(y, {
					fallback: d,
					children: $.jsx(b, {
						getResetKey: () => r.resetKey,
						errorComponent: m || Rf,
						onCatch: (x, R) => {
							if (Se(x)) throw x;
							g?.(x, R);
						},
						children: $.jsx(E, {
							fallback: (x) => {
								if (
									!h ||
									(x.routeId && x.routeId !== r.routeId) ||
									(!x.routeId && !c.isRoot)
								)
									throw x;
								return z.createElement(h, x);
							},
							children:
								v || r._displayPending
									? $.jsx($8, {
											fallback: d,
											children: $.jsx(y1, { matchId: i }),
										})
									: $.jsx(y1, { matchId: i }),
						}),
					}),
				}),
			}),
			r.parentRouteId === mn && l.options.scrollRestoration
				? $.jsxs($.Fragment, { children: [$.jsx(x4, {}), $.jsx(A4, {})] })
				: null,
		],
	});
});
function x4() {
	const n = Te(),
		i = z.useRef(void 0);
	return $.jsx(
		"script",
		{
			suppressHydrationWarning: !0,
			ref: (l) => {
				l &&
					(i.current === void 0 || i.current.href !== n.latestLocation.href) &&
					(n.emit({ type: "onRendered", ...yi(n.state) }),
					(i.current = n.latestLocation));
			},
		},
		n.latestLocation.state.__TSR_key,
	);
}
const y1 = z.memo(function ({ matchId: i }) {
		const l = Te(),
			{
				match: r,
				key: c,
				routeId: f,
			} = le({
				select: (g) => {
					const h = g.matches.find((w) => w.id === i),
						v = h.routeId,
						b = (
							l.routesById[v].options.remountDeps ??
							l.options.defaultRemountDeps
						)?.({
							routeId: v,
							loaderDeps: h.loaderDeps,
							params: h._strictParams,
							search: h._strictSearch,
						});
					return {
						key: b ? JSON.stringify(b) : void 0,
						routeId: v,
						match: {
							id: h.id,
							status: h.status,
							error: h.error,
							invalid: h.invalid,
							_forcePending: h._forcePending,
							_displayPending: h._displayPending,
						},
					};
				},
				structuralSharing: !0,
			}),
			d = l.routesById[f],
			m = z.useMemo(() => {
				const g = d.options.component ?? l.options.defaultComponent;
				return g ? $.jsx(g, {}, c) : $.jsx(Vp, {});
			}, [c, d.options.component, l.options.defaultComponent]);
		if (r._displayPending)
			throw l.getMatch(r.id)?._nonReactive.displayPendingPromise;
		if (r._forcePending) throw l.getMatch(r.id)?._nonReactive.minPendingPromise;
		if (r.status === "pending") {
			const g = d.options.pendingMinMs ?? l.options.defaultPendingMinMs;
			if (g) {
				const h = l.getMatch(r.id);
				if (h && !h._nonReactive.minPendingPromise) {
					const v = gi();
					((h._nonReactive.minPendingPromise = v),
						setTimeout(() => {
							(v.resolve(), (h._nonReactive.minPendingPromise = void 0));
						}, g));
				}
			}
			throw l.getMatch(r.id)?._nonReactive.loadPromise;
		}
		if (r.status === "notFound") return (We(Se(r.error)), Qp(l, d, r.error));
		if (r.status === "redirected")
			throw (We(be(r.error)), l.getMatch(r.id)?._nonReactive.loadPromise);
		if (r.status === "error") throw r.error;
		return m;
	}),
	Vp = z.memo(function () {
		const i = Te(),
			l = z.useContext(bo),
			r = le({ select: (h) => h.matches.find((v) => v.id === l)?.routeId }),
			c = i.routesById[r],
			f = le({
				select: (h) => {
					const y = h.matches.find((b) => b.id === l);
					return (We(y), y.globalNotFound);
				},
			}),
			d = le({
				select: (h) => {
					const v = h.matches,
						y = v.findIndex((b) => b.id === l);
					return v[y + 1]?.id;
				},
			}),
			m = i.options.defaultPendingComponent
				? $.jsx(i.options.defaultPendingComponent, {})
				: null;
		if (f) return Qp(i, c, void 0);
		if (!d) return null;
		const g = $.jsx(Yp, { matchId: d });
		return r === mn ? $.jsx(z.Suspense, { fallback: m, children: g }) : g;
	});
function M4() {
	const n = Te(),
		l =
			n.routesById[mn].options.pendingComponent ??
			n.options.defaultPendingComponent,
		r = l ? $.jsx(l, {}) : null,
		c = typeof document < "u" && n.ssr ? hl : z.Suspense,
		f = $.jsxs(c, { fallback: r, children: [$.jsx(w4, {}), $.jsx(O4, {})] });
	return n.options.InnerWrap ? $.jsx(n.options.InnerWrap, { children: f }) : f;
}
function O4() {
	const n = Te(),
		i = le({ select: (c) => c.matches[0]?.id }),
		l = le({ select: (c) => c.loadedAt }),
		r = i ? $.jsx(Yp, { matchId: i }) : null;
	return $.jsx(bo.Provider, {
		value: i,
		children: n.options.disableGlobalCatchBoundary
			? r
			: $.jsx(Tf, {
					getResetKey: () => l,
					errorComponent: Rf,
					onCatch: void 0,
					children: r,
				}),
	});
}
const C4 = (n) => new z4(n);
class z4 extends K2 {
	constructor(i) {
		super(i);
	}
}
typeof globalThis < "u"
	? ((globalThis.createFileRoute = Ce), (globalThis.createLazyFileRoute = p1))
	: typeof window < "u" &&
		((window.createFileRoute = Ce), (window.createLazyFileRoute = p1));
function D4({ router: n, children: i, ...l }) {
	Object.keys(l).length > 0 &&
		n.update({
			...n.options,
			...l,
			context: { ...n.options.context, ...l.context },
		});
	const r = $.jsx(Hp.Provider, { value: n, children: i });
	return n.options.Wrap ? $.jsx(n.options.Wrap, { children: r }) : r;
}
function L4({ router: n, ...i }) {
	return $.jsx(D4, { router: n, ...i, children: $.jsx(M4, {}) });
}
function Gp({ tag: n, attrs: i, children: l, nonce: r }) {
	switch (n) {
		case "title":
			return $.jsx("title", {
				...i,
				suppressHydrationWarning: !0,
				children: l,
			});
		case "meta":
			return $.jsx("meta", { ...i, suppressHydrationWarning: !0 });
		case "link":
			return $.jsx("link", { ...i, nonce: r, suppressHydrationWarning: !0 });
		case "style":
			return $.jsx("style", {
				...i,
				dangerouslySetInnerHTML: { __html: l },
				nonce: r,
			});
		case "script":
			return $.jsx(N4, { attrs: i, children: l });
		default:
			return null;
	}
}
function N4({ attrs: n, children: i }) {
	Te();
	const l = Af(),
		r =
			typeof n?.type == "string" &&
			n.type !== "" &&
			n.type !== "text/javascript" &&
			n.type !== "module";
	if (
		(z.useEffect(() => {
			if (!r) {
				if (n?.src) {
					const c = (() => {
						try {
							const m = document.baseURI || window.location.href;
							return new URL(n.src, m).href;
						} catch {
							return n.src;
						}
					})();
					if (
						Array.from(document.querySelectorAll("script[src]")).find(
							(m) => m.src === c,
						)
					)
						return;
					const d = document.createElement("script");
					for (const [m, g] of Object.entries(n))
						m !== "suppressHydrationWarning" &&
							g !== void 0 &&
							g !== !1 &&
							d.setAttribute(m, typeof g == "boolean" ? "" : String(g));
					return (
						document.head.appendChild(d),
						() => {
							d.parentNode && d.parentNode.removeChild(d);
						}
					);
				}
				if (typeof i == "string") {
					const c = typeof n?.type == "string" ? n.type : "text/javascript",
						f = typeof n?.nonce == "string" ? n.nonce : void 0;
					if (
						Array.from(document.querySelectorAll("script:not([src])")).find(
							(g) => {
								if (!(g instanceof HTMLScriptElement)) return !1;
								const h = g.getAttribute("type") ?? "text/javascript",
									v = g.getAttribute("nonce") ?? void 0;
								return g.textContent === i && h === c && v === f;
							},
						)
					)
						return;
					const m = document.createElement("script");
					if (((m.textContent = i), n))
						for (const [g, h] of Object.entries(n))
							g !== "suppressHydrationWarning" &&
								h !== void 0 &&
								h !== !1 &&
								m.setAttribute(g, typeof h == "boolean" ? "" : String(h));
					return (
						document.head.appendChild(m),
						() => {
							m.parentNode && m.parentNode.removeChild(m);
						}
					);
				}
			}
		}, [n, i, r]),
		r && typeof i == "string")
	)
		return $.jsx("script", {
			...n,
			suppressHydrationWarning: !0,
			dangerouslySetInnerHTML: { __html: i },
		});
	if (!l) {
		if (n?.src) return $.jsx("script", { ...n, suppressHydrationWarning: !0 });
		if (typeof i == "string")
			return $.jsx("script", {
				...n,
				dangerouslySetInnerHTML: { __html: i },
				suppressHydrationWarning: !0,
			});
	}
	return null;
}
const U4 = () => {
	const n = Te(),
		i = n.options.ssr?.nonce,
		l = le({ select: (g) => g.matches.map((h) => h.meta).filter(Boolean) }),
		r = z.useMemo(() => {
			const g = [],
				h = {};
			let v;
			for (let y = l.length - 1; y >= 0; y--) {
				const b = l[y];
				for (let E = b.length - 1; E >= 0; E--) {
					const w = b[E];
					if (w)
						if (w.title) v || (v = { tag: "title", children: w.title });
						else if ("script:ld+json" in w)
							try {
								const x = JSON.stringify(w["script:ld+json"]);
								g.push({
									tag: "script",
									attrs: { type: "application/ld+json" },
									children: o2(x),
								});
							} catch {}
						else {
							const x = w.name ?? w.property;
							if (x) {
								if (h[x]) continue;
								h[x] = !0;
							}
							g.push({ tag: "meta", attrs: { ...w, nonce: i } });
						}
				}
			}
			return (
				v && g.push(v),
				i &&
					g.push({ tag: "meta", attrs: { property: "csp-nonce", content: i } }),
				g.reverse(),
				g
			);
		}, [l, i]),
		c = le({
			select: (g) => {
				const h = g.matches
						.map((b) => b.links)
						.filter(Boolean)
						.flat(1)
						.map((b) => ({ tag: "link", attrs: { ...b, nonce: i } })),
					v = n.ssr?.manifest,
					y = g.matches
						.map((b) => v?.routes[b.routeId]?.assets ?? [])
						.filter(Boolean)
						.flat(1)
						.filter((b) => b.tag === "link")
						.map((b) => ({
							tag: "link",
							attrs: { ...b.attrs, suppressHydrationWarning: !0, nonce: i },
						}));
				return [...h, ...y];
			},
			structuralSharing: !0,
		}),
		f = le({
			select: (g) => {
				const h = [];
				return (
					g.matches
						.map((v) => n.looseRoutesById[v.routeId])
						.forEach((v) =>
							n.ssr?.manifest?.routes[v.id]?.preloads
								?.filter(Boolean)
								.forEach((y) => {
									h.push({
										tag: "link",
										attrs: { rel: "modulepreload", href: y, nonce: i },
									});
								}),
						),
					h
				);
			},
			structuralSharing: !0,
		}),
		d = le({
			select: (g) =>
				g.matches
					.map((h) => h.styles)
					.flat(1)
					.filter(Boolean)
					.map(({ children: h, ...v }) => ({
						tag: "style",
						attrs: { ...v, nonce: i },
						children: h,
					})),
			structuralSharing: !0,
		}),
		m = le({
			select: (g) =>
				g.matches
					.map((h) => h.headScripts)
					.flat(1)
					.filter(Boolean)
					.map(({ children: h, ...v }) => ({
						tag: "script",
						attrs: { ...v, nonce: i },
						children: h,
					})),
			structuralSharing: !0,
		});
	return j4([...r, ...f, ...c, ...d, ...m], (g) => JSON.stringify(g));
};
function j4(n, i) {
	const l = new Set();
	return n.filter((r) => {
		const c = i(r);
		return l.has(c) ? !1 : (l.add(c), !0);
	});
}
function B4() {
	const n = U4(),
		l = Te().options.ssr?.nonce;
	return $.jsx($.Fragment, {
		children: n.map((r) =>
			z.createElement(Gp, {
				...r,
				key: `tsr-meta-${JSON.stringify(r)}`,
				nonce: l,
			}),
		),
	});
}
const H4 = () => {
	const n = Te(),
		i = n.options.ssr?.nonce,
		l = le({
			select: (d) => {
				const m = [],
					g = n.ssr?.manifest;
				return g
					? (d.matches
							.map((h) => n.looseRoutesById[h.routeId])
							.forEach((h) =>
								g.routes[h.id]?.assets
									?.filter((v) => v.tag === "script")
									.forEach((v) => {
										m.push({
											tag: "script",
											attrs: { ...v.attrs, nonce: i },
											children: v.children,
										});
									}),
							),
						m)
					: [];
			},
			structuralSharing: !0,
		}),
		{ scripts: r } = le({
			select: (d) => ({
				scripts: d.matches
					.map((m) => m.scripts)
					.flat(1)
					.filter(Boolean)
					.map(({ children: m, ...g }) => ({
						tag: "script",
						attrs: { ...g, suppressHydrationWarning: !0, nonce: i },
						children: m,
					})),
			}),
			structuralSharing: !0,
		});
	let c;
	n.serverSsr && (c = n.serverSsr.takeBufferedScripts());
	const f = [...r, ...l];
	return (
		c && f.unshift(c),
		$.jsx($.Fragment, {
			children: f.map((d, m) =>
				z.createElement(Gp, { ...d, key: `tsr-scripts-${d.tag}-${m}` }),
			),
		})
	);
};
function Xp(n) {
	if (Array.isArray(n)) return n.flatMap((v) => Xp(v));
	if (typeof n != "string") return [];
	const i = [];
	let l = 0,
		r,
		c,
		f,
		d,
		m;
	const g = () => {
			for (; l < n.length && /\s/.test(n.charAt(l)); ) l += 1;
			return l < n.length;
		},
		h = () => ((c = n.charAt(l)), c !== "=" && c !== ";" && c !== ",");
	for (; l < n.length; ) {
		for (r = l, m = !1; g(); )
			if (((c = n.charAt(l)), c === ",")) {
				for (f = l, l += 1, g(), d = l; l < n.length && h(); ) l += 1;
				l < n.length && n.charAt(l) === "="
					? ((m = !0), (l = d), i.push(n.slice(r, f)), (r = l))
					: (l = f + 1);
			} else l += 1;
		(!m || l >= n.length) && i.push(n.slice(r));
	}
	return i;
}
function q4(n) {
	return n instanceof Headers
		? n
		: Array.isArray(n)
			? new Headers(n)
			: typeof n == "object"
				? new Headers(n)
				: null;
}
function Z4(...n) {
	return n.reduce((i, l) => {
		const r = q4(l);
		if (!r) return i;
		for (const [c, f] of r.entries())
			c === "set-cookie"
				? Xp(f).forEach((m) => i.append("set-cookie", m))
				: i.set(c, f);
		return i;
	}, new Headers());
}
function g1(n) {
	return n.replaceAll("\0", "/").replaceAll("�", "/");
}
function Q4(n, i) {
	((n.id = i.i),
		(n.__beforeLoadContext = i.b),
		(n.loaderData = i.l),
		(n.status = i.s),
		(n.ssr = i.ssr),
		(n.updatedAt = i.u),
		(n.error = i.e),
		i.g !== void 0 && (n.globalNotFound = i.g));
}
async function Y4(n) {
	We(window.$_TSR);
	const i = n.options.serializationAdapters;
	if (i?.length) {
		const R = new Map();
		(i.forEach((O) => {
			R.set(O.key, O.fromSerializable);
		}),
			(window.$_TSR.t = R),
			window.$_TSR.buffer.forEach((O) => O()));
	}
	((window.$_TSR.initialized = !0), We(window.$_TSR.router));
	const l = window.$_TSR.router;
	(l.matches.forEach((R) => {
		R.i = g1(R.i);
	}),
		l.lastMatchId && (l.lastMatchId = g1(l.lastMatchId)));
	const { manifest: r, dehydratedData: c, lastMatchId: f } = l;
	n.ssr = { manifest: r };
	const m = document.querySelector('meta[property="csp-nonce"]')?.content;
	n.options.ssr = { nonce: m };
	const g = n.matchRoutes(n.state.location),
		h = Promise.all(
			g.map((R) => n.loadRouteChunk(n.looseRoutesById[R.routeId])),
		);
	function v(R) {
		const H =
			n.looseRoutesById[R.routeId].options.pendingMinMs ??
			n.options.defaultPendingMinMs;
		if (H) {
			const q = gi();
			((R._nonReactive.minPendingPromise = q),
				(R._forcePending = !0),
				setTimeout(() => {
					(q.resolve(),
						n.updateMatch(
							R.id,
							(Q) => (
								(Q._nonReactive.minPendingPromise = void 0),
								{ ...Q, _forcePending: void 0 }
							),
						));
				}, H));
		}
	}
	function y(R) {
		const O = n.looseRoutesById[R.routeId];
		O && (O.options.ssr = R.ssr);
	}
	let b;
	(g.forEach((R) => {
		const O = l.matches.find((H) => H.i === R.id);
		if (!O) {
			((R._nonReactive.dehydrated = !1), (R.ssr = !1), y(R));
			return;
		}
		(Q4(R, O),
			y(R),
			(R._nonReactive.dehydrated = R.ssr !== !1),
			(R.ssr === "data-only" || R.ssr === !1) &&
				b === void 0 &&
				((b = R.index), v(R)));
	}),
		n.__store.setState((R) => ({ ...R, matches: g })),
		await n.options.hydrate?.(c),
		await Promise.all(
			n.state.matches.map(async (R) => {
				try {
					const O = n.looseRoutesById[R.routeId],
						q = n.state.matches[R.index - 1]?.context ?? n.options.context;
					if (O.options.context) {
						const X = {
							deps: R.loaderDeps,
							params: R.params,
							context: q ?? {},
							location: n.state.location,
							navigate: (Y) =>
								n.navigate({ ...Y, _fromLocation: n.state.location }),
							buildLocation: n.buildLocation,
							cause: R.cause,
							abortController: R.abortController,
							preload: !1,
							matches: g,
							routeId: O.id,
						};
						R.__routeContext = O.options.context(X) ?? void 0;
					}
					R.context = { ...q, ...R.__routeContext, ...R.__beforeLoadContext };
					const Q = {
							ssr: n.options.ssr,
							matches: n.state.matches,
							match: R,
							params: R.params,
							loaderData: R.loaderData,
						},
						F = await O.options.head?.(Q),
						J = await O.options.scripts?.(Q);
					((R.meta = F?.meta),
						(R.links = F?.links),
						(R.headScripts = F?.scripts),
						(R.styles = F?.styles),
						(R.scripts = J));
				} catch (O) {
					if (Se(O))
						((R.error = { isNotFound: !0 }),
							console.error(
								`NotFound error during hydration for routeId: ${R.routeId}`,
								O,
							));
					else
						throw (
							(R.error = O),
							console.error(
								`Error during hydration for route ${R.routeId}:`,
								O,
							),
							O
						);
				}
			}),
		));
	const E = g[g.length - 1].id !== f;
	if (!g.some((R) => R.ssr === !1) && !E)
		return (
			g.forEach((R) => {
				R._nonReactive.dehydrated = void 0;
			}),
			h
		);
	const x = Promise.resolve()
		.then(() => n.load())
		.catch((R) => {
			console.error("Error during router hydration:", R);
		});
	if (E) {
		const R = g[1];
		(We(R),
			v(R),
			(R._displayPending = !0),
			(R._nonReactive.displayPendingPromise = x),
			x.then(() => {
				pl(() => {
					(n.__store.state.status === "pending" &&
						n.__store.setState((O) => ({
							...O,
							status: "idle",
							resolvedLocation: O.location,
						})),
						n.updateMatch(R.id, (O) => ({
							...O,
							_displayPending: void 0,
							displayPendingPromise: void 0,
						})));
				});
			}));
	}
	return h;
}
const V4 = "__TSS_CONTEXT",
	rf = Symbol.for("TSS_SERVER_FUNCTION"),
	v1 = Symbol.for("TSS_SERVER_FUNCTION_FACTORY"),
	G4 = "x-tss-serialized",
	X4 = "x-tss-raw",
	Kp = "application/x-tss-framed",
	In = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
	dl = 9,
	b1 = 1,
	K4 = /;\s*v=(\d+)/;
function P4(n) {
	const i = n.match(K4);
	return i ? parseInt(i[1], 10) : void 0;
}
function k4(n) {
	const i = P4(n);
	if (i !== void 0 && i !== b1)
		throw new Error(
			`Incompatible framed protocol version: server=${i}, client=${b1}. Please ensure client and server are using compatible versions.`,
		);
}
const Lf = () => window.__TSS_START_OPTIONS__;
function F4() {
	return [...(Lf()?.serializationAdapters?.map(O8) ?? []), ...G8];
}
const S1 = new TextDecoder(),
	J4 = new Uint8Array(0),
	E1 = 16 * 1024 * 1024,
	_1 = 32 * 1024 * 1024,
	w1 = 1024,
	T1 = 1e5;
function I4(n) {
	const i = new Map(),
		l = new Map(),
		r = new Set();
	let c = !1,
		f = null,
		d = 0,
		m;
	const g = new ReadableStream({
		start(y) {
			m = y;
		},
		cancel() {
			c = !0;
			try {
				f?.cancel();
			} catch {}
			(i.forEach((y) => {
				try {
					y.error(new Error("Framed response cancelled"));
				} catch {}
			}),
				i.clear(),
				l.clear(),
				r.clear());
		},
	});
	function h(y) {
		const b = l.get(y);
		if (b) return b;
		if (r.has(y))
			return new ReadableStream({
				start(w) {
					w.close();
				},
			});
		if (l.size >= w1)
			throw new Error(`Too many raw streams in framed response (max ${w1})`);
		const E = new ReadableStream({
			start(w) {
				i.set(y, w);
			},
			cancel() {
				(r.add(y), i.delete(y), l.delete(y));
			},
		});
		return (l.set(y, E), E);
	}
	function v(y) {
		return (h(y), i.get(y));
	}
	return (
		(async () => {
			const y = n.getReader();
			f = y;
			const b = [];
			let E = 0;
			function w() {
				if (E < dl) return null;
				const R = b[0];
				if (R.length >= dl) {
					const X = R[0],
						Y = ((R[1] << 24) | (R[2] << 16) | (R[3] << 8) | R[4]) >>> 0,
						W = ((R[5] << 24) | (R[6] << 16) | (R[7] << 8) | R[8]) >>> 0;
					return { type: X, streamId: Y, length: W };
				}
				const O = new Uint8Array(dl);
				let H = 0,
					q = dl;
				for (let X = 0; X < b.length && q > 0; X++) {
					const Y = b[X],
						W = Math.min(Y.length, q);
					(O.set(Y.subarray(0, W), H), (H += W), (q -= W));
				}
				const Q = O[0],
					F = ((O[1] << 24) | (O[2] << 16) | (O[3] << 8) | O[4]) >>> 0,
					J = ((O[5] << 24) | (O[6] << 16) | (O[7] << 8) | O[8]) >>> 0;
				return { type: Q, streamId: F, length: J };
			}
			function x(R) {
				if (R === 0) return J4;
				const O = new Uint8Array(R);
				let H = 0,
					q = R;
				for (; q > 0 && b.length > 0; ) {
					const Q = b[0];
					if (!Q) break;
					const F = Math.min(Q.length, q);
					(O.set(Q.subarray(0, F), H),
						(H += F),
						(q -= F),
						F === Q.length ? b.shift() : (b[0] = Q.subarray(F)));
				}
				return ((E -= R), O);
			}
			try {
				for (;;) {
					const { done: R, value: O } = await y.read();
					if (c || R) break;
					if (O) {
						if (E + O.length > _1)
							throw new Error(`Framed response buffer exceeded ${_1} bytes`);
						for (b.push(O), E += O.length; ; ) {
							const H = w();
							if (!H) break;
							const { type: q, streamId: Q, length: F } = H;
							if (
								q !== In.JSON &&
								q !== In.CHUNK &&
								q !== In.END &&
								q !== In.ERROR
							)
								throw new Error(`Unknown frame type: ${q}`);
							if (q === In.JSON) {
								if (Q !== 0)
									throw new Error("Invalid JSON frame streamId (expected 0)");
							} else if (Q === 0)
								throw new Error(
									"Invalid raw frame streamId (expected non-zero)",
								);
							if (F > E1)
								throw new Error(
									`Frame payload too large: ${F} bytes (max ${E1})`,
								);
							const J = dl + F;
							if (E < J) break;
							if (++d > T1)
								throw new Error(
									`Too many frames in framed response (max ${T1})`,
								);
							x(dl);
							const X = x(F);
							switch (q) {
								case In.JSON: {
									try {
										m.enqueue(S1.decode(X));
									} catch {}
									break;
								}
								case In.CHUNK: {
									const Y = v(Q);
									Y && Y.enqueue(X);
									break;
								}
								case In.END: {
									const Y = v(Q);
									if ((r.add(Q), Y)) {
										try {
											Y.close();
										} catch {}
										i.delete(Q);
									}
									break;
								}
								case In.ERROR: {
									const Y = v(Q);
									if ((r.add(Q), Y)) {
										const W = S1.decode(X);
										(Y.error(new Error(W)), i.delete(Q));
									}
									break;
								}
							}
						}
					}
				}
				if (E !== 0)
					throw new Error("Incomplete frame at end of framed response");
				try {
					m.close();
				} catch {}
				(i.forEach((R) => {
					try {
						R.close();
					} catch {}
				}),
					i.clear());
			} catch (R) {
				try {
					m.error(R);
				} catch {}
				(i.forEach((O) => {
					try {
						O.error(R);
					} catch {}
				}),
					i.clear());
			} finally {
				try {
					y.releaseLock();
				} catch {}
				f = null;
			}
		})(),
		{ getOrCreateStream: h, jsonChunks: g }
	);
}
let vl = null;
const $4 = Object.prototype.hasOwnProperty;
function Pp(n) {
	for (const i in n) if ($4.call(n, i)) return !0;
	return !1;
}
async function W4(n, i, l) {
	vl || (vl = F4());
	const c = i[0],
		f = c.fetch ?? l,
		d = c.data instanceof FormData ? "formData" : "payload",
		m = c.headers ? new Headers(c.headers) : new Headers();
	if (
		(m.set("x-tsr-serverFn", "true"),
		d === "payload" &&
			m.set("accept", `${Kp}, application/x-ndjson, application/json`),
		c.method === "GET")
	) {
		if (d === "formData")
			throw new Error("FormData is not supported with GET requests");
		const h = await kp(c);
		if (h !== void 0) {
			const v = $1({ payload: h });
			n.includes("?") ? (n += `&${v}`) : (n += `?${v}`);
		}
	}
	let g;
	if (c.method === "POST") {
		const h = await t6(c);
		(h?.contentType && m.set("content-type", h.contentType), (g = h?.body));
	}
	return await e6(async () =>
		f(n, { method: c.method, headers: m, signal: c.signal, body: g }),
	);
}
async function kp(n) {
	let i = !1;
	const l = {};
	if (
		(n.data !== void 0 && ((i = !0), (l.data = n.data)),
		n.context && Pp(n.context) && ((i = !0), (l.context = n.context)),
		i)
	)
		return Fp(l);
}
async function Fp(n) {
	return JSON.stringify(await Promise.resolve(M8(n, { plugins: vl })));
}
async function t6(n) {
	if (n.data instanceof FormData) {
		let l;
		return (
			n.context && Pp(n.context) && (l = await Fp(n.context)),
			l !== void 0 && n.data.set(V4, l),
			{ body: n.data }
		);
	}
	const i = await kp(n);
	if (i) return { body: i, contentType: "application/json" };
}
async function e6(n) {
	let i;
	try {
		i = await n();
	} catch (c) {
		if (c instanceof Response) i = c;
		else throw (console.log(c), c);
	}
	if (i.headers.get(X4) === "true") return i;
	const l = i.headers.get("content-type");
	if ((We(l), !!i.headers.get(G4))) {
		let c;
		if (l.includes(Kp)) {
			if ((k4(l), !i.body))
				throw new Error("No response body for framed response");
			const { getOrCreateStream: f, jsonChunks: d } = I4(i.body),
				g = [V8(f), ...(vl || [])],
				h = new Map();
			c = await a6({
				jsonStream: d,
				onMessage: (v) => Xc(v, { refs: h, plugins: g }),
				onError(v, y) {
					console.error(v, y);
				},
			});
		} else if (l.includes("application/x-ndjson")) {
			const f = new Map();
			c = await n6({
				response: i,
				onMessage: (d) => Xc(d, { refs: f, plugins: vl }),
				onError(d, m) {
					console.error(d, m);
				},
			});
		} else if (l.includes("application/json")) {
			const f = await i.json();
			c = Xc(f, { plugins: vl });
		}
		if ((We(c), c instanceof Error)) throw c;
		return c;
	}
	if (l.includes("application/json")) {
		const c = await i.json(),
			f = W1(c);
		if (f) throw f;
		if (Se(c)) throw c;
		return c;
	}
	if (!i.ok) throw new Error(await i.text());
	return i;
}
async function n6({ response: n, onMessage: i, onError: l }) {
	if (!n.body) throw new Error("No response body");
	const r = n.body.pipeThrough(new TextDecoderStream()).getReader();
	let c = "",
		f = !1,
		d;
	for (; !f; ) {
		const { value: m, done: g } = await r.read();
		if ((m && (c += m), c.length === 0 && g))
			throw new Error("Stream ended before first object");
		if (
			c.endsWith(`
`)
		) {
			const h = c
					.split(`
`)
					.filter(Boolean),
				v = h[0];
			if (!v) throw new Error("No JSON line in the first chunk");
			((d = JSON.parse(v)),
				(f = !0),
				(c = h.slice(1).join(`
`)));
		} else {
			const h = c.indexOf(`
`);
			if (h >= 0) {
				const v = c.slice(0, h).trim();
				((c = c.slice(h + 1)), v.length > 0 && ((d = JSON.parse(v)), (f = !0)));
			}
		}
	}
	return (
		(async () => {
			try {
				for (;;) {
					const { value: m, done: g } = await r.read();
					m && (c += m);
					const h = c.lastIndexOf(`
`);
					if (h >= 0) {
						const v = c.slice(0, h);
						c = c.slice(h + 1);
						const y = v
							.split(`
`)
							.filter(Boolean);
						for (const b of y)
							try {
								i(JSON.parse(b));
							} catch (E) {
								l?.(`Invalid JSON line: ${b}`, E);
							}
					}
					if (g) break;
				}
			} catch (m) {
				l?.("Stream processing error:", m);
			}
		})(),
		i(d)
	);
}
async function a6({ jsonStream: n, onMessage: i, onError: l }) {
	const r = n.getReader(),
		{ value: c, done: f } = await r.read();
	if (f || !c) throw new Error("Stream ended before first object");
	const d = JSON.parse(c);
	return (
		(async () => {
			try {
				for (;;) {
					const { value: m, done: g } = await r.read();
					if (g) break;
					if (m)
						try {
							i(JSON.parse(m));
						} catch (h) {
							l?.(`Invalid JSON: ${m}`, h);
						}
				}
			} catch (m) {
				l?.("Stream processing error:", m);
			}
		})(),
		i(d)
	);
}
function ne(n) {
	const i = "/_serverFn/" + n;
	return Object.assign(
		(...c) => {
			const f = Lf()?.serverFns?.fetch;
			return W4(i, c, f ?? fetch);
		},
		{ url: i, serverFnMeta: { id: n }, [rf]: !0 },
	);
}
const i6 = {
	key: "$TSS/serverfn",
	test: (n) => (typeof n != "function" || !(rf in n) ? !1 : !!n[rf]),
	toSerializable: ({ serverFnMeta: n }) => ({ functionId: n.id }),
	fromSerializable: ({ functionId: n }) => ne(n),
};
var So = class {
		constructor() {
			((this.listeners = new Set()),
				(this.subscribe = this.subscribe.bind(this)));
		}
		subscribe(n) {
			return (
				this.listeners.add(n),
				this.onSubscribe(),
				() => {
					(this.listeners.delete(n), this.onUnsubscribe());
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	l6 = {
		setTimeout: (n, i) => setTimeout(n, i),
		clearTimeout: (n) => clearTimeout(n),
		setInterval: (n, i) => setInterval(n, i),
		clearInterval: (n) => clearInterval(n),
	},
	s6 = class {
		#t = l6;
		#n = !1;
		setTimeoutProvider(n) {
			this.#t = n;
		}
		setTimeout(n, i) {
			return this.#t.setTimeout(n, i);
		}
		clearTimeout(n) {
			this.#t.clearTimeout(n);
		}
		setInterval(n, i) {
			return this.#t.setInterval(n, i);
		}
		clearInterval(n) {
			this.#t.clearInterval(n);
		}
	},
	of = new s6();
function r6(n) {
	setTimeout(n, 0);
}
var Eo = typeof window > "u" || "Deno" in globalThis;
function Me() {}
function o6(n, i) {
	return typeof n == "function" ? n(i) : n;
}
function u6(n) {
	return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function c6(n, i) {
	return Math.max(n + (i || 0) - Date.now(), 0);
}
function uf(n, i) {
	return typeof n == "function" ? n(i) : n;
}
function f6(n, i) {
	return typeof n == "function" ? n(i) : n;
}
function R1(n, i) {
	const {
		type: l = "all",
		exact: r,
		fetchStatus: c,
		predicate: f,
		queryKey: d,
		stale: m,
	} = n;
	if (d) {
		if (r) {
			if (i.queryHash !== Nf(d, i.options)) return !1;
		} else if (!As(i.queryKey, d)) return !1;
	}
	if (l !== "all") {
		const g = i.isActive();
		if ((l === "active" && !g) || (l === "inactive" && g)) return !1;
	}
	return !(
		(typeof m == "boolean" && i.isStale() !== m) ||
		(c && c !== i.state.fetchStatus) ||
		(f && !f(i))
	);
}
function A1(n, i) {
	const { exact: l, status: r, predicate: c, mutationKey: f } = n;
	if (f) {
		if (!i.options.mutationKey) return !1;
		if (l) {
			if (Rs(i.options.mutationKey) !== Rs(f)) return !1;
		} else if (!As(i.options.mutationKey, f)) return !1;
	}
	return !((r && i.state.status !== r) || (c && !c(i)));
}
function Nf(n, i) {
	return (i?.queryKeyHashFn || Rs)(n);
}
function Rs(n) {
	return JSON.stringify(n, (i, l) =>
		cf(l)
			? Object.keys(l)
					.sort()
					.reduce((r, c) => ((r[c] = l[c]), r), {})
			: l,
	);
}
function As(n, i) {
	return n === i
		? !0
		: typeof n != typeof i
			? !1
			: n && i && typeof n == "object" && typeof i == "object"
				? Object.keys(i).every((l) => As(n[l], i[l]))
				: !1;
}
var d6 = Object.prototype.hasOwnProperty;
function Jp(n, i, l = 0) {
	if (n === i) return n;
	if (l > 500) return i;
	const r = x1(n) && x1(i);
	if (!r && !(cf(n) && cf(i))) return i;
	const f = (r ? n : Object.keys(n)).length,
		d = r ? i : Object.keys(i),
		m = d.length,
		g = r ? new Array(m) : {};
	let h = 0;
	for (let v = 0; v < m; v++) {
		const y = r ? v : d[v],
			b = n[y],
			E = i[y];
		if (b === E) {
			((g[y] = b), (r ? v < f : d6.call(n, y)) && h++);
			continue;
		}
		if (
			b === null ||
			E === null ||
			typeof b != "object" ||
			typeof E != "object"
		) {
			g[y] = E;
			continue;
		}
		const w = Jp(b, E, l + 1);
		((g[y] = w), w === b && h++);
	}
	return f === m && h === f ? n : g;
}
function i_(n, i) {
	if (!i || Object.keys(n).length !== Object.keys(i).length) return !1;
	for (const l in n) if (n[l] !== i[l]) return !1;
	return !0;
}
function x1(n) {
	return Array.isArray(n) && n.length === Object.keys(n).length;
}
function cf(n) {
	if (!M1(n)) return !1;
	const i = n.constructor;
	if (i === void 0) return !0;
	const l = i.prototype;
	return !(
		!M1(l) ||
		!l.hasOwnProperty("isPrototypeOf") ||
		Object.getPrototypeOf(n) !== Object.prototype
	);
}
function M1(n) {
	return Object.prototype.toString.call(n) === "[object Object]";
}
function h6(n) {
	return new Promise((i) => {
		of.setTimeout(i, n);
	});
}
function m6(n, i, l) {
	return typeof l.structuralSharing == "function"
		? l.structuralSharing(n, i)
		: l.structuralSharing !== !1
			? Jp(n, i)
			: i;
}
function p6(n, i, l = 0) {
	const r = [...n, i];
	return l && r.length > l ? r.slice(1) : r;
}
function y6(n, i, l = 0) {
	const r = [i, ...n];
	return l && r.length > l ? r.slice(0, -1) : r;
}
var Uf = Symbol();
function Ip(n, i) {
	return !n.queryFn && i?.initialPromise
		? () => i.initialPromise
		: !n.queryFn || n.queryFn === Uf
			? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
			: n.queryFn;
}
function l_(n, i) {
	return typeof n == "function" ? n(...i) : !!n;
}
function g6(n, i, l) {
	let r = !1,
		c;
	return (
		Object.defineProperty(n, "signal", {
			enumerable: !0,
			get: () => (
				(c ??= i()),
				r ||
					((r = !0),
					c.aborted ? l() : c.addEventListener("abort", l, { once: !0 })),
				c
			),
		}),
		n
	);
}
var v6 = class extends So {
		#t;
		#n;
		#e;
		constructor() {
			(super(),
				(this.#e = (n) => {
					if (!Eo && window.addEventListener) {
						const i = () => n();
						return (
							window.addEventListener("visibilitychange", i, !1),
							() => {
								window.removeEventListener("visibilitychange", i);
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#n || this.setEventListener(this.#e);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#n?.(), (this.#n = void 0));
		}
		setEventListener(n) {
			((this.#e = n),
				this.#n?.(),
				(this.#n = n((i) => {
					typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
				})));
		}
		setFocused(n) {
			this.#t !== n && ((this.#t = n), this.onFocus());
		}
		onFocus() {
			const n = this.isFocused();
			this.listeners.forEach((i) => {
				i(n);
			});
		}
		isFocused() {
			return typeof this.#t == "boolean"
				? this.#t
				: globalThis.document?.visibilityState !== "hidden";
		}
	},
	$p = new v6();
function b6() {
	let n, i;
	const l = new Promise((c, f) => {
		((n = c), (i = f));
	});
	((l.status = "pending"), l.catch(() => {}));
	function r(c) {
		(Object.assign(l, c), delete l.resolve, delete l.reject);
	}
	return (
		(l.resolve = (c) => {
			(r({ status: "fulfilled", value: c }), n(c));
		}),
		(l.reject = (c) => {
			(r({ status: "rejected", reason: c }), i(c));
		}),
		l
	);
}
function S6(n) {
	let i;
	if ((n.then((l) => ((i = l), l), Me)?.catch(Me), i !== void 0))
		return { data: i };
}
function Wp(n) {
	return n;
}
function E6(n) {
	return {
		mutationKey: n.options.mutationKey,
		state: n.state,
		...(n.options.scope && { scope: n.options.scope }),
		...(n.meta && { meta: n.meta }),
	};
}
function _6(n, i, l) {
	const r = () => {
		const c = n.promise
			?.then(i)
			.catch((f) =>
				l(f) ? Promise.reject(new Error("redacted")) : Promise.reject(f),
			);
		return (c?.catch(Me), c);
	};
	return {
		dehydratedAt: Date.now(),
		state: {
			...n.state,
			...(n.state.data !== void 0 && { data: i(n.state.data) }),
		},
		queryKey: n.queryKey,
		queryHash: n.queryHash,
		...(n.state.status === "pending" && { promise: r() }),
		...(n.meta && { meta: n.meta }),
	};
}
function w6(n) {
	return n.state.isPaused;
}
function T6(n) {
	return n.state.status === "success";
}
function R6(n) {
	return !0;
}
function O1(n, i = {}) {
	const l =
			i.shouldDehydrateMutation ??
			n.getDefaultOptions().dehydrate?.shouldDehydrateMutation ??
			w6,
		r = n
			.getMutationCache()
			.getAll()
			.flatMap((g) => (l(g) ? [E6(g)] : [])),
		c =
			i.shouldDehydrateQuery ??
			n.getDefaultOptions().dehydrate?.shouldDehydrateQuery ??
			T6,
		f =
			i.shouldRedactErrors ??
			n.getDefaultOptions().dehydrate?.shouldRedactErrors ??
			R6,
		d = i.serializeData ?? n.getDefaultOptions().dehydrate?.serializeData ?? Wp,
		m = n
			.getQueryCache()
			.getAll()
			.flatMap((g) => (c(g) ? [_6(g, d, f)] : []));
	return { mutations: r, queries: m };
}
function C1(n, i, l) {
	if (typeof i != "object" || i === null) return;
	const r = n.getMutationCache(),
		c = n.getQueryCache(),
		f = n.getDefaultOptions().hydrate?.deserializeData ?? Wp,
		d = i.mutations || [],
		m = i.queries || [];
	(d.forEach(({ state: g, ...h }) => {
		r.build(
			n,
			{
				...n.getDefaultOptions().hydrate?.mutations,
				...l?.defaultOptions?.mutations,
				...h,
			},
			g,
		);
	}),
		m.forEach(
			({
				queryKey: g,
				state: h,
				queryHash: v,
				meta: y,
				promise: b,
				dehydratedAt: E,
			}) => {
				const w = b ? S6(b) : void 0,
					x = h.data === void 0 ? w?.data : h.data,
					R = x === void 0 ? x : f(x);
				let O = c.get(v);
				const H = O?.state.status === "pending",
					q = O?.state.fetchStatus === "fetching";
				if (O) {
					const Q = w && E !== void 0 && E > O.state.dataUpdatedAt;
					if (h.dataUpdatedAt > O.state.dataUpdatedAt || Q) {
						const { fetchStatus: F, ...J } = h;
						O.setState({ ...J, data: R });
					}
				} else
					O = c.build(
						n,
						{
							...n.getDefaultOptions().hydrate?.queries,
							...l?.defaultOptions?.queries,
							queryKey: g,
							queryHash: v,
							meta: y,
						},
						{
							...h,
							data: R,
							fetchStatus: "idle",
							status: R !== void 0 ? "success" : h.status,
						},
					);
				b &&
					!H &&
					!q &&
					(E === void 0 || E > O.state.dataUpdatedAt) &&
					O.fetch(void 0, { initialPromise: Promise.resolve(b).then(f) }).catch(
						Me,
					);
			},
		));
}
var A6 = r6;
function x6() {
	let n = [],
		i = 0,
		l = (m) => {
			m();
		},
		r = (m) => {
			m();
		},
		c = A6;
	const f = (m) => {
			i
				? n.push(m)
				: c(() => {
						l(m);
					});
		},
		d = () => {
			const m = n;
			((n = []),
				m.length &&
					c(() => {
						r(() => {
							m.forEach((g) => {
								l(g);
							});
						});
					}));
		};
	return {
		batch: (m) => {
			let g;
			i++;
			try {
				g = m();
			} finally {
				(i--, i || d());
			}
			return g;
		},
		batchCalls:
			(m) =>
			(...g) => {
				f(() => {
					m(...g);
				});
			},
		schedule: f,
		setNotifyFunction: (m) => {
			l = m;
		},
		setBatchNotifyFunction: (m) => {
			r = m;
		},
		setScheduler: (m) => {
			c = m;
		},
	};
}
var Oe = x6(),
	M6 = class extends So {
		#t = !0;
		#n;
		#e;
		constructor() {
			(super(),
				(this.#e = (n) => {
					if (!Eo && window.addEventListener) {
						const i = () => n(!0),
							l = () => n(!1);
						return (
							window.addEventListener("online", i, !1),
							window.addEventListener("offline", l, !1),
							() => {
								(window.removeEventListener("online", i),
									window.removeEventListener("offline", l));
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#n || this.setEventListener(this.#e);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#n?.(), (this.#n = void 0));
		}
		setEventListener(n) {
			((this.#e = n), this.#n?.(), (this.#n = n(this.setOnline.bind(this))));
		}
		setOnline(n) {
			this.#t !== n &&
				((this.#t = n),
				this.listeners.forEach((l) => {
					l(n);
				}));
		}
		isOnline() {
			return this.#t;
		}
	},
	uo = new M6();
function O6(n) {
	return Math.min(1e3 * 2 ** n, 3e4);
}
function ty(n) {
	return (n ?? "online") === "online" ? uo.isOnline() : !0;
}
var ff = class extends Error {
	constructor(n) {
		(super("CancelledError"),
			(this.revert = n?.revert),
			(this.silent = n?.silent));
	}
};
function ey(n) {
	let i = !1,
		l = 0,
		r;
	const c = b6(),
		f = () => c.status !== "pending",
		d = (x) => {
			if (!f()) {
				const R = new ff(x);
				(b(R), n.onCancel?.(R));
			}
		},
		m = () => {
			i = !0;
		},
		g = () => {
			i = !1;
		},
		h = () =>
			$p.isFocused() &&
			(n.networkMode === "always" || uo.isOnline()) &&
			n.canRun(),
		v = () => ty(n.networkMode) && n.canRun(),
		y = (x) => {
			f() || (r?.(), c.resolve(x));
		},
		b = (x) => {
			f() || (r?.(), c.reject(x));
		},
		E = () =>
			new Promise((x) => {
				((r = (R) => {
					(f() || h()) && x(R);
				}),
					n.onPause?.());
			}).then(() => {
				((r = void 0), f() || n.onContinue?.());
			}),
		w = () => {
			if (f()) return;
			let x;
			const R = l === 0 ? n.initialPromise : void 0;
			try {
				x = R ?? n.fn();
			} catch (O) {
				x = Promise.reject(O);
			}
			Promise.resolve(x)
				.then(y)
				.catch((O) => {
					if (f()) return;
					const H = n.retry ?? (Eo ? 0 : 3),
						q = n.retryDelay ?? O6,
						Q = typeof q == "function" ? q(l, O) : q,
						F =
							H === !0 ||
							(typeof H == "number" && l < H) ||
							(typeof H == "function" && H(l, O));
					if (i || !F) {
						b(O);
						return;
					}
					(l++,
						n.onFail?.(l, O),
						h6(Q)
							.then(() => (h() ? void 0 : E()))
							.then(() => {
								i ? b(O) : w();
							}));
				});
		};
	return {
		promise: c,
		status: () => c.status,
		cancel: d,
		continue: () => (r?.(), c),
		cancelRetry: m,
		continueRetry: g,
		canStart: v,
		start: () => (v() ? w() : E().then(w), c),
	};
}
var ny = class {
		#t;
		destroy() {
			this.clearGcTimeout();
		}
		scheduleGc() {
			(this.clearGcTimeout(),
				u6(this.gcTime) &&
					(this.#t = of.setTimeout(() => {
						this.optionalRemove();
					}, this.gcTime)));
		}
		updateGcTime(n) {
			this.gcTime = Math.max(this.gcTime || 0, n ?? (Eo ? 1 / 0 : 300 * 1e3));
		}
		clearGcTimeout() {
			this.#t && (of.clearTimeout(this.#t), (this.#t = void 0));
		}
	},
	C6 = class extends ny {
		#t;
		#n;
		#e;
		#i;
		#a;
		#s;
		#r;
		constructor(n) {
			(super(),
				(this.#r = !1),
				(this.#s = n.defaultOptions),
				this.setOptions(n.options),
				(this.observers = []),
				(this.#i = n.client),
				(this.#e = this.#i.getQueryCache()),
				(this.queryKey = n.queryKey),
				(this.queryHash = n.queryHash),
				(this.#t = D1(this.options)),
				(this.state = n.state ?? this.#t),
				this.scheduleGc());
		}
		get meta() {
			return this.options.meta;
		}
		get promise() {
			return this.#a?.promise;
		}
		setOptions(n) {
			if (
				((this.options = { ...this.#s, ...n }),
				this.updateGcTime(this.options.gcTime),
				this.state && this.state.data === void 0)
			) {
				const i = D1(this.options);
				i.data !== void 0 &&
					(this.setState(z1(i.data, i.dataUpdatedAt)), (this.#t = i));
			}
		}
		optionalRemove() {
			!this.observers.length &&
				this.state.fetchStatus === "idle" &&
				this.#e.remove(this);
		}
		setData(n, i) {
			const l = m6(this.state.data, n, this.options);
			return (
				this.#l({
					data: l,
					type: "success",
					dataUpdatedAt: i?.updatedAt,
					manual: i?.manual,
				}),
				l
			);
		}
		setState(n, i) {
			this.#l({ type: "setState", state: n, setStateOptions: i });
		}
		cancel(n) {
			const i = this.#a?.promise;
			return (this.#a?.cancel(n), i ? i.then(Me).catch(Me) : Promise.resolve());
		}
		destroy() {
			(super.destroy(), this.cancel({ silent: !0 }));
		}
		reset() {
			(this.destroy(), this.setState(this.#t));
		}
		isActive() {
			return this.observers.some((n) => f6(n.options.enabled, this) !== !1);
		}
		isDisabled() {
			return this.getObserversCount() > 0
				? !this.isActive()
				: this.options.queryFn === Uf ||
						this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
		}
		isStatic() {
			return this.getObserversCount() > 0
				? this.observers.some((n) => uf(n.options.staleTime, this) === "static")
				: !1;
		}
		isStale() {
			return this.getObserversCount() > 0
				? this.observers.some((n) => n.getCurrentResult().isStale)
				: this.state.data === void 0 || this.state.isInvalidated;
		}
		isStaleByTime(n = 0) {
			return this.state.data === void 0
				? !0
				: n === "static"
					? !1
					: this.state.isInvalidated
						? !0
						: !c6(this.state.dataUpdatedAt, n);
		}
		onFocus() {
			(this.observers
				.find((i) => i.shouldFetchOnWindowFocus())
				?.refetch({ cancelRefetch: !1 }),
				this.#a?.continue());
		}
		onOnline() {
			(this.observers
				.find((i) => i.shouldFetchOnReconnect())
				?.refetch({ cancelRefetch: !1 }),
				this.#a?.continue());
		}
		addObserver(n) {
			this.observers.includes(n) ||
				(this.observers.push(n),
				this.clearGcTimeout(),
				this.#e.notify({ type: "observerAdded", query: this, observer: n }));
		}
		removeObserver(n) {
			this.observers.includes(n) &&
				((this.observers = this.observers.filter((i) => i !== n)),
				this.observers.length ||
					(this.#a &&
						(this.#r ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
					this.scheduleGc()),
				this.#e.notify({ type: "observerRemoved", query: this, observer: n }));
		}
		getObserversCount() {
			return this.observers.length;
		}
		invalidate() {
			this.state.isInvalidated || this.#l({ type: "invalidate" });
		}
		async fetch(n, i) {
			if (
				this.state.fetchStatus !== "idle" &&
				this.#a?.status() !== "rejected"
			) {
				if (this.state.data !== void 0 && i?.cancelRefetch)
					this.cancel({ silent: !0 });
				else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
			}
			if ((n && this.setOptions(n), !this.options.queryFn)) {
				const m = this.observers.find((g) => g.options.queryFn);
				m && this.setOptions(m.options);
			}
			const l = new AbortController(),
				r = (m) => {
					Object.defineProperty(m, "signal", {
						enumerable: !0,
						get: () => ((this.#r = !0), l.signal),
					});
				},
				c = () => {
					const m = Ip(this.options, i),
						h = (() => {
							const v = {
								client: this.#i,
								queryKey: this.queryKey,
								meta: this.meta,
							};
							return (r(v), v);
						})();
					return (
						(this.#r = !1),
						this.options.persister ? this.options.persister(m, h, this) : m(h)
					);
				},
				d = (() => {
					const m = {
						fetchOptions: i,
						options: this.options,
						queryKey: this.queryKey,
						client: this.#i,
						state: this.state,
						fetchFn: c,
					};
					return (r(m), m);
				})();
			(this.options.behavior?.onFetch(d, this),
				(this.#n = this.state),
				(this.state.fetchStatus === "idle" ||
					this.state.fetchMeta !== d.fetchOptions?.meta) &&
					this.#l({ type: "fetch", meta: d.fetchOptions?.meta }),
				(this.#a = ey({
					initialPromise: i?.initialPromise,
					fn: d.fetchFn,
					onCancel: (m) => {
						(m instanceof ff &&
							m.revert &&
							this.setState({ ...this.#n, fetchStatus: "idle" }),
							l.abort());
					},
					onFail: (m, g) => {
						this.#l({ type: "failed", failureCount: m, error: g });
					},
					onPause: () => {
						this.#l({ type: "pause" });
					},
					onContinue: () => {
						this.#l({ type: "continue" });
					},
					retry: d.options.retry,
					retryDelay: d.options.retryDelay,
					networkMode: d.options.networkMode,
					canRun: () => !0,
				})));
			try {
				const m = await this.#a.start();
				if (m === void 0)
					throw new Error(`${this.queryHash} data is undefined`);
				return (
					this.setData(m),
					this.#e.config.onSuccess?.(m, this),
					this.#e.config.onSettled?.(m, this.state.error, this),
					m
				);
			} catch (m) {
				if (m instanceof ff) {
					if (m.silent) return this.#a.promise;
					if (m.revert) {
						if (this.state.data === void 0) throw m;
						return this.state.data;
					}
				}
				throw (
					this.#l({ type: "error", error: m }),
					this.#e.config.onError?.(m, this),
					this.#e.config.onSettled?.(this.state.data, m, this),
					m
				);
			} finally {
				this.scheduleGc();
			}
		}
		#l(n) {
			const i = (l) => {
				switch (n.type) {
					case "failed":
						return {
							...l,
							fetchFailureCount: n.failureCount,
							fetchFailureReason: n.error,
						};
					case "pause":
						return { ...l, fetchStatus: "paused" };
					case "continue":
						return { ...l, fetchStatus: "fetching" };
					case "fetch":
						return {
							...l,
							...z6(l.data, this.options),
							fetchMeta: n.meta ?? null,
						};
					case "success":
						const r = {
							...l,
							...z1(n.data, n.dataUpdatedAt),
							dataUpdateCount: l.dataUpdateCount + 1,
							...(!n.manual && {
								fetchStatus: "idle",
								fetchFailureCount: 0,
								fetchFailureReason: null,
							}),
						};
						return ((this.#n = n.manual ? r : void 0), r);
					case "error":
						const c = n.error;
						return {
							...l,
							error: c,
							errorUpdateCount: l.errorUpdateCount + 1,
							errorUpdatedAt: Date.now(),
							fetchFailureCount: l.fetchFailureCount + 1,
							fetchFailureReason: c,
							fetchStatus: "idle",
							status: "error",
							isInvalidated: !0,
						};
					case "invalidate":
						return { ...l, isInvalidated: !0 };
					case "setState":
						return { ...l, ...n.state };
				}
			};
			((this.state = i(this.state)),
				Oe.batch(() => {
					(this.observers.forEach((l) => {
						l.onQueryUpdate();
					}),
						this.#e.notify({ query: this, type: "updated", action: n }));
				}));
		}
	};
function z6(n, i) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: ty(i.networkMode) ? "fetching" : "paused",
		...(n === void 0 && { error: null, status: "pending" }),
	};
}
function z1(n, i) {
	return {
		data: n,
		dataUpdatedAt: i ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success",
	};
}
function D1(n) {
	const i =
			typeof n.initialData == "function" ? n.initialData() : n.initialData,
		l = i !== void 0,
		r = l
			? typeof n.initialDataUpdatedAt == "function"
				? n.initialDataUpdatedAt()
				: n.initialDataUpdatedAt
			: 0;
	return {
		data: i,
		dataUpdateCount: 0,
		dataUpdatedAt: l ? (r ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: l ? "success" : "pending",
		fetchStatus: "idle",
	};
}
function L1(n) {
	return {
		onFetch: (i, l) => {
			const r = i.options,
				c = i.fetchOptions?.meta?.fetchMore?.direction,
				f = i.state.data?.pages || [],
				d = i.state.data?.pageParams || [];
			let m = { pages: [], pageParams: [] },
				g = 0;
			const h = async () => {
				let v = !1;
				const y = (w) => {
						g6(
							w,
							() => i.signal,
							() => (v = !0),
						);
					},
					b = Ip(i.options, i.fetchOptions),
					E = async (w, x, R) => {
						if (v) return Promise.reject();
						if (x == null && w.pages.length) return Promise.resolve(w);
						const H = (() => {
								const J = {
									client: i.client,
									queryKey: i.queryKey,
									pageParam: x,
									direction: R ? "backward" : "forward",
									meta: i.options.meta,
								};
								return (y(J), J);
							})(),
							q = await b(H),
							{ maxPages: Q } = i.options,
							F = R ? y6 : p6;
						return {
							pages: F(w.pages, q, Q),
							pageParams: F(w.pageParams, x, Q),
						};
					};
				if (c && f.length) {
					const w = c === "backward",
						x = w ? D6 : N1,
						R = { pages: f, pageParams: d },
						O = x(r, R);
					m = await E(R, O, w);
				} else {
					const w = n ?? f.length;
					do {
						const x = g === 0 ? (d[0] ?? r.initialPageParam) : N1(r, m);
						if (g > 0 && x == null) break;
						((m = await E(m, x)), g++);
					} while (g < w);
				}
				return m;
			};
			i.options.persister
				? (i.fetchFn = () =>
						i.options.persister?.(
							h,
							{
								client: i.client,
								queryKey: i.queryKey,
								meta: i.options.meta,
								signal: i.signal,
							},
							l,
						))
				: (i.fetchFn = h);
		},
	};
}
function N1(n, { pages: i, pageParams: l }) {
	const r = i.length - 1;
	return i.length > 0 ? n.getNextPageParam(i[r], i, l[r], l) : void 0;
}
function D6(n, { pages: i, pageParams: l }) {
	return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, l[0], l) : void 0;
}
var L6 = class extends ny {
	#t;
	#n;
	#e;
	#i;
	constructor(n) {
		(super(),
			(this.#t = n.client),
			(this.mutationId = n.mutationId),
			(this.#e = n.mutationCache),
			(this.#n = []),
			(this.state = n.state || N6()),
			this.setOptions(n.options),
			this.scheduleGc());
	}
	setOptions(n) {
		((this.options = n), this.updateGcTime(this.options.gcTime));
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(n) {
		this.#n.includes(n) ||
			(this.#n.push(n),
			this.clearGcTimeout(),
			this.#e.notify({ type: "observerAdded", mutation: this, observer: n }));
	}
	removeObserver(n) {
		((this.#n = this.#n.filter((i) => i !== n)),
			this.scheduleGc(),
			this.#e.notify({ type: "observerRemoved", mutation: this, observer: n }));
	}
	optionalRemove() {
		this.#n.length ||
			(this.state.status === "pending"
				? this.scheduleGc()
				: this.#e.remove(this));
	}
	continue() {
		return this.#i?.continue() ?? this.execute(this.state.variables);
	}
	async execute(n) {
		const i = () => {
				this.#a({ type: "continue" });
			},
			l = {
				client: this.#t,
				meta: this.options.meta,
				mutationKey: this.options.mutationKey,
			};
		this.#i = ey({
			fn: () =>
				this.options.mutationFn
					? this.options.mutationFn(n, l)
					: Promise.reject(new Error("No mutationFn found")),
			onFail: (f, d) => {
				this.#a({ type: "failed", failureCount: f, error: d });
			},
			onPause: () => {
				this.#a({ type: "pause" });
			},
			onContinue: i,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#e.canRun(this),
		});
		const r = this.state.status === "pending",
			c = !this.#i.canStart();
		try {
			if (r) i();
			else {
				(this.#a({ type: "pending", variables: n, isPaused: c }),
					this.#e.config.onMutate &&
						(await this.#e.config.onMutate(n, this, l)));
				const d = await this.options.onMutate?.(n, l);
				d !== this.state.context &&
					this.#a({ type: "pending", context: d, variables: n, isPaused: c });
			}
			const f = await this.#i.start();
			return (
				await this.#e.config.onSuccess?.(f, n, this.state.context, this, l),
				await this.options.onSuccess?.(f, n, this.state.context, l),
				await this.#e.config.onSettled?.(
					f,
					null,
					this.state.variables,
					this.state.context,
					this,
					l,
				),
				await this.options.onSettled?.(f, null, n, this.state.context, l),
				this.#a({ type: "success", data: f }),
				f
			);
		} catch (f) {
			try {
				await this.#e.config.onError?.(f, n, this.state.context, this, l);
			} catch (d) {
				Promise.reject(d);
			}
			try {
				await this.options.onError?.(f, n, this.state.context, l);
			} catch (d) {
				Promise.reject(d);
			}
			try {
				await this.#e.config.onSettled?.(
					void 0,
					f,
					this.state.variables,
					this.state.context,
					this,
					l,
				);
			} catch (d) {
				Promise.reject(d);
			}
			try {
				await this.options.onSettled?.(void 0, f, n, this.state.context, l);
			} catch (d) {
				Promise.reject(d);
			}
			throw (this.#a({ type: "error", error: f }), f);
		} finally {
			this.#e.runNext(this);
		}
	}
	#a(n) {
		const i = (l) => {
			switch (n.type) {
				case "failed":
					return { ...l, failureCount: n.failureCount, failureReason: n.error };
				case "pause":
					return { ...l, isPaused: !0 };
				case "continue":
					return { ...l, isPaused: !1 };
				case "pending":
					return {
						...l,
						context: n.context,
						data: void 0,
						failureCount: 0,
						failureReason: null,
						error: null,
						isPaused: n.isPaused,
						status: "pending",
						variables: n.variables,
						submittedAt: Date.now(),
					};
				case "success":
					return {
						...l,
						data: n.data,
						failureCount: 0,
						failureReason: null,
						error: null,
						status: "success",
						isPaused: !1,
					};
				case "error":
					return {
						...l,
						data: void 0,
						error: n.error,
						failureCount: l.failureCount + 1,
						failureReason: n.error,
						isPaused: !1,
						status: "error",
					};
			}
		};
		((this.state = i(this.state)),
			Oe.batch(() => {
				(this.#n.forEach((l) => {
					l.onMutationUpdate(n);
				}),
					this.#e.notify({ mutation: this, type: "updated", action: n }));
			}));
	}
};
function N6() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0,
	};
}
var U6 = class extends So {
	constructor(n = {}) {
		(super(),
			(this.config = n),
			(this.#t = new Set()),
			(this.#n = new Map()),
			(this.#e = 0));
	}
	#t;
	#n;
	#e;
	build(n, i, l) {
		const r = new L6({
			client: n,
			mutationCache: this,
			mutationId: ++this.#e,
			options: n.defaultMutationOptions(i),
			state: l,
		});
		return (this.add(r), r);
	}
	add(n) {
		this.#t.add(n);
		const i = Kr(n);
		if (typeof i == "string") {
			const l = this.#n.get(i);
			l ? l.push(n) : this.#n.set(i, [n]);
		}
		this.notify({ type: "added", mutation: n });
	}
	remove(n) {
		if (this.#t.delete(n)) {
			const i = Kr(n);
			if (typeof i == "string") {
				const l = this.#n.get(i);
				if (l)
					if (l.length > 1) {
						const r = l.indexOf(n);
						r !== -1 && l.splice(r, 1);
					} else l[0] === n && this.#n.delete(i);
			}
		}
		this.notify({ type: "removed", mutation: n });
	}
	canRun(n) {
		const i = Kr(n);
		if (typeof i == "string") {
			const r = this.#n.get(i)?.find((c) => c.state.status === "pending");
			return !r || r === n;
		} else return !0;
	}
	runNext(n) {
		const i = Kr(n);
		return typeof i == "string"
			? (this.#n
					.get(i)
					?.find((r) => r !== n && r.state.isPaused)
					?.continue() ?? Promise.resolve())
			: Promise.resolve();
	}
	clear() {
		Oe.batch(() => {
			(this.#t.forEach((n) => {
				this.notify({ type: "removed", mutation: n });
			}),
				this.#t.clear(),
				this.#n.clear());
		});
	}
	getAll() {
		return Array.from(this.#t);
	}
	find(n) {
		const i = { exact: !0, ...n };
		return this.getAll().find((l) => A1(i, l));
	}
	findAll(n = {}) {
		return this.getAll().filter((i) => A1(n, i));
	}
	notify(n) {
		Oe.batch(() => {
			this.listeners.forEach((i) => {
				i(n);
			});
		});
	}
	resumePausedMutations() {
		const n = this.getAll().filter((i) => i.state.isPaused);
		return Oe.batch(() => Promise.all(n.map((i) => i.continue().catch(Me))));
	}
};
function Kr(n) {
	return n.options.scope?.id;
}
var j6 = class extends So {
		constructor(n = {}) {
			(super(), (this.config = n), (this.#t = new Map()));
		}
		#t;
		build(n, i, l) {
			const r = i.queryKey,
				c = i.queryHash ?? Nf(r, i);
			let f = this.get(c);
			return (
				f ||
					((f = new C6({
						client: n,
						queryKey: r,
						queryHash: c,
						options: n.defaultQueryOptions(i),
						state: l,
						defaultOptions: n.getQueryDefaults(r),
					})),
					this.add(f)),
				f
			);
		}
		add(n) {
			this.#t.has(n.queryHash) ||
				(this.#t.set(n.queryHash, n), this.notify({ type: "added", query: n }));
		}
		remove(n) {
			const i = this.#t.get(n.queryHash);
			i &&
				(n.destroy(),
				i === n && this.#t.delete(n.queryHash),
				this.notify({ type: "removed", query: n }));
		}
		clear() {
			Oe.batch(() => {
				this.getAll().forEach((n) => {
					this.remove(n);
				});
			});
		}
		get(n) {
			return this.#t.get(n);
		}
		getAll() {
			return [...this.#t.values()];
		}
		find(n) {
			const i = { exact: !0, ...n };
			return this.getAll().find((l) => R1(i, l));
		}
		findAll(n = {}) {
			const i = this.getAll();
			return Object.keys(n).length > 0 ? i.filter((l) => R1(n, l)) : i;
		}
		notify(n) {
			Oe.batch(() => {
				this.listeners.forEach((i) => {
					i(n);
				});
			});
		}
		onFocus() {
			Oe.batch(() => {
				this.getAll().forEach((n) => {
					n.onFocus();
				});
			});
		}
		onOnline() {
			Oe.batch(() => {
				this.getAll().forEach((n) => {
					n.onOnline();
				});
			});
		}
	},
	B6 = class {
		#t;
		#n;
		#e;
		#i;
		#a;
		#s;
		#r;
		#l;
		constructor(n = {}) {
			((this.#t = n.queryCache || new j6()),
				(this.#n = n.mutationCache || new U6()),
				(this.#e = n.defaultOptions || {}),
				(this.#i = new Map()),
				(this.#a = new Map()),
				(this.#s = 0));
		}
		mount() {
			(this.#s++,
				this.#s === 1 &&
					((this.#r = $p.subscribe(async (n) => {
						n && (await this.resumePausedMutations(), this.#t.onFocus());
					})),
					(this.#l = uo.subscribe(async (n) => {
						n && (await this.resumePausedMutations(), this.#t.onOnline());
					}))));
		}
		unmount() {
			(this.#s--,
				this.#s === 0 &&
					(this.#r?.(), (this.#r = void 0), this.#l?.(), (this.#l = void 0)));
		}
		isFetching(n) {
			return this.#t.findAll({ ...n, fetchStatus: "fetching" }).length;
		}
		isMutating(n) {
			return this.#n.findAll({ ...n, status: "pending" }).length;
		}
		getQueryData(n) {
			const i = this.defaultQueryOptions({ queryKey: n });
			return this.#t.get(i.queryHash)?.state.data;
		}
		ensureQueryData(n) {
			const i = this.defaultQueryOptions(n),
				l = this.#t.build(this, i),
				r = l.state.data;
			return r === void 0
				? this.fetchQuery(n)
				: (n.revalidateIfStale &&
						l.isStaleByTime(uf(i.staleTime, l)) &&
						this.prefetchQuery(i),
					Promise.resolve(r));
		}
		getQueriesData(n) {
			return this.#t.findAll(n).map(({ queryKey: i, state: l }) => {
				const r = l.data;
				return [i, r];
			});
		}
		setQueryData(n, i, l) {
			const r = this.defaultQueryOptions({ queryKey: n }),
				f = this.#t.get(r.queryHash)?.state.data,
				d = o6(i, f);
			if (d !== void 0)
				return this.#t.build(this, r).setData(d, { ...l, manual: !0 });
		}
		setQueriesData(n, i, l) {
			return Oe.batch(() =>
				this.#t
					.findAll(n)
					.map(({ queryKey: r }) => [r, this.setQueryData(r, i, l)]),
			);
		}
		getQueryState(n) {
			const i = this.defaultQueryOptions({ queryKey: n });
			return this.#t.get(i.queryHash)?.state;
		}
		removeQueries(n) {
			const i = this.#t;
			Oe.batch(() => {
				i.findAll(n).forEach((l) => {
					i.remove(l);
				});
			});
		}
		resetQueries(n, i) {
			const l = this.#t;
			return Oe.batch(
				() => (
					l.findAll(n).forEach((r) => {
						r.reset();
					}),
					this.refetchQueries({ type: "active", ...n }, i)
				),
			);
		}
		cancelQueries(n, i = {}) {
			const l = { revert: !0, ...i },
				r = Oe.batch(() => this.#t.findAll(n).map((c) => c.cancel(l)));
			return Promise.all(r).then(Me).catch(Me);
		}
		invalidateQueries(n, i = {}) {
			return Oe.batch(
				() => (
					this.#t.findAll(n).forEach((l) => {
						l.invalidate();
					}),
					n?.refetchType === "none"
						? Promise.resolve()
						: this.refetchQueries(
								{ ...n, type: n?.refetchType ?? n?.type ?? "active" },
								i,
							)
				),
			);
		}
		refetchQueries(n, i = {}) {
			const l = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
				r = Oe.batch(() =>
					this.#t
						.findAll(n)
						.filter((c) => !c.isDisabled() && !c.isStatic())
						.map((c) => {
							let f = c.fetch(void 0, l);
							return (
								l.throwOnError || (f = f.catch(Me)),
								c.state.fetchStatus === "paused" ? Promise.resolve() : f
							);
						}),
				);
			return Promise.all(r).then(Me);
		}
		fetchQuery(n) {
			const i = this.defaultQueryOptions(n);
			i.retry === void 0 && (i.retry = !1);
			const l = this.#t.build(this, i);
			return l.isStaleByTime(uf(i.staleTime, l))
				? l.fetch(i)
				: Promise.resolve(l.state.data);
		}
		prefetchQuery(n) {
			return this.fetchQuery(n).then(Me).catch(Me);
		}
		fetchInfiniteQuery(n) {
			return ((n.behavior = L1(n.pages)), this.fetchQuery(n));
		}
		prefetchInfiniteQuery(n) {
			return this.fetchInfiniteQuery(n).then(Me).catch(Me);
		}
		ensureInfiniteQueryData(n) {
			return ((n.behavior = L1(n.pages)), this.ensureQueryData(n));
		}
		resumePausedMutations() {
			return uo.isOnline()
				? this.#n.resumePausedMutations()
				: Promise.resolve();
		}
		getQueryCache() {
			return this.#t;
		}
		getMutationCache() {
			return this.#n;
		}
		getDefaultOptions() {
			return this.#e;
		}
		setDefaultOptions(n) {
			this.#e = n;
		}
		setQueryDefaults(n, i) {
			this.#i.set(Rs(n), { queryKey: n, defaultOptions: i });
		}
		getQueryDefaults(n) {
			const i = [...this.#i.values()],
				l = {};
			return (
				i.forEach((r) => {
					As(n, r.queryKey) && Object.assign(l, r.defaultOptions);
				}),
				l
			);
		}
		setMutationDefaults(n, i) {
			this.#a.set(Rs(n), { mutationKey: n, defaultOptions: i });
		}
		getMutationDefaults(n) {
			const i = [...this.#a.values()],
				l = {};
			return (
				i.forEach((r) => {
					As(n, r.mutationKey) && Object.assign(l, r.defaultOptions);
				}),
				l
			);
		}
		defaultQueryOptions(n) {
			if (n._defaulted) return n;
			const i = {
				...this.#e.queries,
				...this.getQueryDefaults(n.queryKey),
				...n,
				_defaulted: !0,
			};
			return (
				i.queryHash || (i.queryHash = Nf(i.queryKey, i)),
				i.refetchOnReconnect === void 0 &&
					(i.refetchOnReconnect = i.networkMode !== "always"),
				i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
				!i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
				i.queryFn === Uf && (i.enabled = !1),
				i
			);
		}
		defaultMutationOptions(n) {
			return n?._defaulted
				? n
				: {
						...this.#e.mutations,
						...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
						...n,
						_defaulted: !0,
					};
		}
		clear() {
			(this.#t.clear(), this.#n.clear());
		}
	},
	ay = z.createContext(void 0),
	s_ = (n) => {
		const i = z.useContext(ay);
		if (!i)
			throw new Error("No QueryClient set, use QueryClientProvider to set one");
		return i;
	},
	H6 = ({ client: n, children: i }) => (
		z.useEffect(
			() => (
				n.mount(),
				() => {
					n.unmount();
				}
			),
			[n],
		),
		$.jsx(ay.Provider, { value: n, children: i })
	);
function q6(n, i, l) {
	const r = n.options;
	if (
		((n.options = {
			...n.options,
			context: { ...r.context, queryClient: i },
			Wrap: ({ children: c }) => {
				const f = z.Fragment,
					d = r.Wrap || z.Fragment;
				return $.jsx(f, {
					children: $.jsx(H6, {
						client: i,
						children: $.jsx(d, { children: c }),
					}),
				});
			},
		}),
		n.isServer)
	) {
		const c = Z6();
		n.options.dehydrate = async () => {
			var d;
			const m = await ((d = r.dehydrate) == null ? void 0 : d.call(r)),
				g = O1(i);
			return (
				n.serverSsr.onRenderFinished(() => c.close()),
				{ ...m, dehydratedQueryClient: g, queryStream: c.stream }
			);
		};
		const f = i.getDefaultOptions();
		(i.setDefaultOptions({
			...f,
			dehydrate: { shouldDehydrateQuery: () => !0, ...f.dehydrate },
		}),
			i.getQueryCache().subscribe((d) => {
				if (d.type === "added") {
					if (!n.serverSsr.isDehydrated()) return;
					if (c.isClosed()) {
						console.warn(
							`tried to stream query ${d.query.queryHash} after stream was already closed`,
						);
						return;
					}
					c.enqueue(
						O1(i, {
							shouldDehydrateQuery: (m) => {
								var g, h;
								return m.queryHash === d.query.queryHash
									? (((h =
											(g = f.dehydrate) == null
												? void 0
												: g.shouldDehydrateQuery) == null
											? void 0
											: h.call(g, m)) ?? !0)
									: !1;
							},
						}),
					);
				}
			}));
	} else {
		n.options.hydrate = async (c) => {
			var f;
			(await ((f = r.hydrate) == null ? void 0 : f.call(r, c)),
				C1(i, c.dehydratedQueryClient));
			const d = c.queryStream.getReader();
			d.read()
				.then(async function m({ done: g, value: h }) {
					if ((C1(i, h), g)) return;
					const v = await d.read();
					return m(v);
				})
				.catch((m) => {
					console.error("Error reading query stream:", m);
				});
		};
		{
			const c = i.getMutationCache().config;
			i.getMutationCache().config = {
				...c,
				onError: (d, m, g, h) => {
					var v;
					return be(d)
						? ((d.options._fromLocation = n.state.location),
							n.navigate(n.resolveRedirect(d).options))
						: (v = c.onError) == null
							? void 0
							: v.call(c, d, m, g, h);
				},
			};
			const f = i.getQueryCache().config;
			i.getQueryCache().config = {
				...f,
				onError: (d, m) => {
					var g;
					return be(d)
						? ((d.options._fromLocation = n.state.location),
							n.navigate(n.resolveRedirect(d).options))
						: (g = f.onError) == null
							? void 0
							: g.call(f, d, m);
				},
			};
		}
	}
	return n;
}
function Z6() {
	let n;
	const i = new ReadableStream({
		start(r) {
			n = r;
		},
	});
	let l = !1;
	return {
		stream: i,
		enqueue: (r) => n.enqueue(r),
		close: () => {
			(n.close(), (l = !0));
		},
		isClosed: () => l,
		error: (r) => n.error(r),
	};
}
var Q6 = (n, i, l, r, c, f, d, m) => {
		let g = document.documentElement,
			h = ["light", "dark"];
		function v(E) {
			((Array.isArray(n) ? n : [n]).forEach((w) => {
				let x = w === "class",
					R = x && f ? c.map((O) => f[O] || O) : c;
				x
					? (g.classList.remove(...R), g.classList.add(f && f[E] ? f[E] : E))
					: g.setAttribute(w, E);
			}),
				y(E));
		}
		function y(E) {
			m && h.includes(E) && (g.style.colorScheme = E);
		}
		function b() {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
		if (r) v(r);
		else
			try {
				let E = localStorage.getItem(i) || l,
					w = d && E === "system" ? b() : E;
				v(w);
			} catch {}
	},
	U1 = ["light", "dark"],
	iy = "(prefers-color-scheme: dark)",
	Y6 = typeof window > "u",
	jf = z.createContext(void 0),
	V6 = { setTheme: (n) => {}, themes: [] },
	G6 = () => {
		var n;
		return (n = z.useContext(jf)) != null ? n : V6;
	},
	X6 = (n) =>
		z.useContext(jf)
			? z.createElement(z.Fragment, null, n.children)
			: z.createElement(P6, { ...n }),
	K6 = ["light", "dark"],
	P6 = ({
		forcedTheme: n,
		disableTransitionOnChange: i = !1,
		enableSystem: l = !0,
		enableColorScheme: r = !0,
		storageKey: c = "theme",
		themes: f = K6,
		defaultTheme: d = l ? "system" : "light",
		attribute: m = "data-theme",
		value: g,
		children: h,
		nonce: v,
		scriptProps: y,
	}) => {
		let [b, E] = z.useState(() => F6(c, d)),
			[w, x] = z.useState(() => (b === "system" ? $c() : b)),
			R = g ? Object.values(g) : f,
			O = z.useCallback(
				(F) => {
					let J = F;
					if (!J) return;
					F === "system" && l && (J = $c());
					let X = g ? g[J] : J,
						Y = i ? J6(v) : null,
						W = document.documentElement,
						ct = (it) => {
							it === "class"
								? (W.classList.remove(...R), X && W.classList.add(X))
								: it.startsWith("data-") &&
									(X ? W.setAttribute(it, X) : W.removeAttribute(it));
						};
					if ((Array.isArray(m) ? m.forEach(ct) : ct(m), r)) {
						let it = U1.includes(d) ? d : null,
							at = U1.includes(J) ? J : it;
						W.style.colorScheme = at;
					}
					Y?.();
				},
				[v],
			),
			H = z.useCallback(
				(F) => {
					let J = typeof F == "function" ? F(b) : F;
					E(J);
					try {
						localStorage.setItem(c, J);
					} catch {}
				},
				[b],
			),
			q = z.useCallback(
				(F) => {
					let J = $c(F);
					(x(J), b === "system" && l && !n && O("system"));
				},
				[b, n],
			);
		(z.useEffect(() => {
			let F = window.matchMedia(iy);
			return (F.addListener(q), q(F), () => F.removeListener(q));
		}, [q]),
			z.useEffect(() => {
				let F = (J) => {
					J.key === c && (J.newValue ? E(J.newValue) : H(d));
				};
				return (
					window.addEventListener("storage", F),
					() => window.removeEventListener("storage", F)
				);
			}, [H]),
			z.useEffect(() => {
				O(n ?? b);
			}, [n, b]));
		let Q = z.useMemo(
			() => ({
				theme: b,
				setTheme: H,
				forcedTheme: n,
				resolvedTheme: b === "system" ? w : b,
				themes: l ? [...f, "system"] : f,
				systemTheme: l ? w : void 0,
			}),
			[b, H, n, w, l, f],
		);
		return z.createElement(
			jf.Provider,
			{ value: Q },
			z.createElement(k6, {
				forcedTheme: n,
				storageKey: c,
				attribute: m,
				enableSystem: l,
				enableColorScheme: r,
				defaultTheme: d,
				value: g,
				themes: f,
				nonce: v,
				scriptProps: y,
			}),
			h,
		);
	},
	k6 = z.memo(
		({
			forcedTheme: n,
			storageKey: i,
			attribute: l,
			enableSystem: r,
			enableColorScheme: c,
			defaultTheme: f,
			value: d,
			themes: m,
			nonce: g,
			scriptProps: h,
		}) => {
			let v = JSON.stringify([l, i, f, n, m, d, r, c]).slice(1, -1);
			return z.createElement("script", {
				...h,
				suppressHydrationWarning: !0,
				nonce: typeof window > "u" ? g : "",
				dangerouslySetInnerHTML: { __html: `(${Q6.toString()})(${v})` },
			});
		},
	),
	F6 = (n, i) => {
		if (Y6) return;
		let l;
		try {
			l = localStorage.getItem(n) || void 0;
		} catch {}
		return l || i;
	},
	J6 = (n) => {
		let i = document.createElement("style");
		return (
			n && i.setAttribute("nonce", n),
			i.appendChild(
				document.createTextNode(
					"*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
				),
			),
			document.head.appendChild(i),
			() => {
				(window.getComputedStyle(document.body),
					setTimeout(() => {
						document.head.removeChild(i);
					}, 1));
			}
		);
	},
	$c = (n) => (n || (n = window.matchMedia(iy)), n.matches ? "dark" : "light");
const I6 = new Map([
		[
			"bold",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z",
				}),
			),
		],
		[
			"duotone",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
					opacity: "0.2",
				}),
				z.createElement("path", {
					d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
				}),
			),
		],
		[
			"fill",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z",
				}),
			),
		],
		[
			"light",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
				}),
			),
		],
		[
			"regular",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
				}),
			),
		],
		[
			"thin",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
				}),
			),
		],
	]),
	$6 = new Map([
		[
			"bold",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z",
				}),
			),
		],
		[
			"duotone",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
					opacity: "0.2",
				}),
				z.createElement("path", {
					d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z",
				}),
			),
		],
		[
			"fill",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z",
				}),
			),
		],
		[
			"light",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
				}),
			),
		],
		[
			"regular",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z",
				}),
			),
		],
		[
			"thin",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
				}),
			),
		],
	]),
	W6 = new Map([
		[
			"bold",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z",
				}),
			),
		],
		[
			"duotone",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
					opacity: "0.2",
				}),
				z.createElement("path", {
					d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z",
				}),
			),
		],
		[
			"fill",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z",
				}),
			),
		],
		[
			"light",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z",
				}),
			),
		],
		[
			"regular",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z",
				}),
			),
		],
		[
			"thin",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z",
				}),
			),
		],
	]),
	t3 = new Map([
		[
			"bold",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z",
				}),
			),
		],
		[
			"duotone",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
					opacity: "0.2",
				}),
				z.createElement("path", {
					d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
				}),
			),
		],
		[
			"fill",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z",
				}),
			),
		],
		[
			"light",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z",
				}),
			),
		],
		[
			"regular",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
				}),
			),
		],
		[
			"thin",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z",
				}),
			),
		],
	]),
	e3 = new Map([
		[
			"bold",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z",
				}),
			),
		],
		[
			"duotone",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
					opacity: "0.2",
				}),
				z.createElement("path", {
					d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
				}),
			),
		],
		[
			"fill",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
				}),
			),
		],
		[
			"light",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z",
				}),
			),
		],
		[
			"regular",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z",
				}),
			),
		],
		[
			"thin",
			z.createElement(
				z.Fragment,
				null,
				z.createElement("path", {
					d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z",
				}),
			),
		],
	]),
	n3 = z.createContext({
		color: "currentColor",
		size: "1em",
		weight: "regular",
		mirrored: !1,
	}),
	Sl = z.forwardRef((n, i) => {
		const {
				alt: l,
				color: r,
				size: c,
				weight: f,
				mirrored: d,
				children: m,
				weights: g,
				...h
			} = n,
			{
				color: v = "currentColor",
				size: y,
				weight: b = "regular",
				mirrored: E = !1,
				...w
			} = z.useContext(n3);
		return z.createElement(
			"svg",
			{
				ref: i,
				xmlns: "http://www.w3.org/2000/svg",
				width: c ?? y,
				height: c ?? y,
				fill: r ?? v,
				viewBox: "0 0 256 256",
				transform: d || E ? "scale(-1, 1)" : void 0,
				...w,
				...h,
			},
			!!l && z.createElement("title", null, l),
			m,
			g.get(f ?? b),
		);
	});
Sl.displayName = "IconBase";
const ly = z.forwardRef((n, i) =>
	z.createElement(Sl, { ref: i, ...n, weights: I6 }),
);
ly.displayName = "CheckCircleIcon";
const sy = z.forwardRef((n, i) =>
	z.createElement(Sl, { ref: i, ...n, weights: $6 }),
);
sy.displayName = "InfoIcon";
const ry = z.forwardRef((n, i) =>
	z.createElement(Sl, { ref: i, ...n, weights: W6 }),
);
ry.displayName = "SpinnerIcon";
const oy = z.forwardRef((n, i) =>
	z.createElement(Sl, { ref: i, ...n, weights: t3 }),
);
oy.displayName = "WarningIcon";
const uy = z.forwardRef((n, i) =>
	z.createElement(Sl, { ref: i, ...n, weights: e3 }),
);
uy.displayName = "XCircleIcon";
function a3(n) {
	if (typeof document > "u") return;
	let i = document.head || document.getElementsByTagName("head")[0],
		l = document.createElement("style");
	((l.type = "text/css"),
		i.appendChild(l),
		l.styleSheet
			? (l.styleSheet.cssText = n)
			: l.appendChild(document.createTextNode(n)));
}
const i3 = (n) => {
		switch (n) {
			case "success":
				return r3;
			case "info":
				return u3;
			case "warning":
				return o3;
			case "error":
				return c3;
			default:
				return null;
		}
	},
	l3 = Array(12).fill(0),
	s3 = ({ visible: n, className: i }) =>
		tt.createElement(
			"div",
			{
				className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "),
				"data-visible": n,
			},
			tt.createElement(
				"div",
				{ className: "sonner-spinner" },
				l3.map((l, r) =>
					tt.createElement("div", {
						className: "sonner-loading-bar",
						key: `spinner-bar-${r}`,
					}),
				),
			),
		),
	r3 = tt.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		tt.createElement("path", {
			fillRule: "evenodd",
			d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
			clipRule: "evenodd",
		}),
	),
	o3 = tt.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		tt.createElement("path", {
			fillRule: "evenodd",
			d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
			clipRule: "evenodd",
		}),
	),
	u3 = tt.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		tt.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
			clipRule: "evenodd",
		}),
	),
	c3 = tt.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20",
			fill: "currentColor",
			height: "20",
			width: "20",
		},
		tt.createElement("path", {
			fillRule: "evenodd",
			d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
			clipRule: "evenodd",
		}),
	),
	f3 = tt.createElement(
		"svg",
		{
			xmlns: "http://www.w3.org/2000/svg",
			width: "12",
			height: "12",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
		},
		tt.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
		tt.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
	),
	d3 = () => {
		const [n, i] = tt.useState(document.hidden);
		return (
			tt.useEffect(() => {
				const l = () => {
					i(document.hidden);
				};
				return (
					document.addEventListener("visibilitychange", l),
					() => window.removeEventListener("visibilitychange", l)
				);
			}, []),
			n
		);
	};
let df = 1;
class h3 {
	constructor() {
		((this.subscribe = (i) => (
			this.subscribers.push(i),
			() => {
				const l = this.subscribers.indexOf(i);
				this.subscribers.splice(l, 1);
			}
		)),
			(this.publish = (i) => {
				this.subscribers.forEach((l) => l(i));
			}),
			(this.addToast = (i) => {
				(this.publish(i), (this.toasts = [...this.toasts, i]));
			}),
			(this.create = (i) => {
				var l;
				const { message: r, ...c } = i,
					f =
						typeof i?.id == "number" ||
						((l = i.id) == null ? void 0 : l.length) > 0
							? i.id
							: df++,
					d = this.toasts.find((g) => g.id === f),
					m = i.dismissible === void 0 ? !0 : i.dismissible;
				return (
					this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
					d
						? (this.toasts = this.toasts.map((g) =>
								g.id === f
									? (this.publish({ ...g, ...i, id: f, title: r }),
										{ ...g, ...i, id: f, dismissible: m, title: r })
									: g,
							))
						: this.addToast({ title: r, ...c, dismissible: m, id: f }),
					f
				);
			}),
			(this.dismiss = (i) => (
				i
					? (this.dismissedToasts.add(i),
						requestAnimationFrame(() =>
							this.subscribers.forEach((l) => l({ id: i, dismiss: !0 })),
						))
					: this.toasts.forEach((l) => {
							this.subscribers.forEach((r) => r({ id: l.id, dismiss: !0 }));
						}),
				i
			)),
			(this.message = (i, l) => this.create({ ...l, message: i })),
			(this.error = (i, l) => this.create({ ...l, message: i, type: "error" })),
			(this.success = (i, l) =>
				this.create({ ...l, type: "success", message: i })),
			(this.info = (i, l) => this.create({ ...l, type: "info", message: i })),
			(this.warning = (i, l) =>
				this.create({ ...l, type: "warning", message: i })),
			(this.loading = (i, l) =>
				this.create({ ...l, type: "loading", message: i })),
			(this.promise = (i, l) => {
				if (!l) return;
				let r;
				l.loading !== void 0 &&
					(r = this.create({
						...l,
						promise: i,
						type: "loading",
						message: l.loading,
						description:
							typeof l.description != "function" ? l.description : void 0,
					}));
				const c = Promise.resolve(i instanceof Function ? i() : i);
				let f = r !== void 0,
					d;
				const m = c
						.then(async (h) => {
							if (((d = ["resolve", h]), tt.isValidElement(h)))
								((f = !1), this.create({ id: r, type: "default", message: h }));
							else if (p3(h) && !h.ok) {
								f = !1;
								const y =
										typeof l.error == "function"
											? await l.error(`HTTP error! status: ${h.status}`)
											: l.error,
									b =
										typeof l.description == "function"
											? await l.description(`HTTP error! status: ${h.status}`)
											: l.description,
									w =
										typeof y == "object" && !tt.isValidElement(y)
											? y
											: { message: y };
								this.create({ id: r, type: "error", description: b, ...w });
							} else if (h instanceof Error) {
								f = !1;
								const y =
										typeof l.error == "function" ? await l.error(h) : l.error,
									b =
										typeof l.description == "function"
											? await l.description(h)
											: l.description,
									w =
										typeof y == "object" && !tt.isValidElement(y)
											? y
											: { message: y };
								this.create({ id: r, type: "error", description: b, ...w });
							} else if (l.success !== void 0) {
								f = !1;
								const y =
										typeof l.success == "function"
											? await l.success(h)
											: l.success,
									b =
										typeof l.description == "function"
											? await l.description(h)
											: l.description,
									w =
										typeof y == "object" && !tt.isValidElement(y)
											? y
											: { message: y };
								this.create({ id: r, type: "success", description: b, ...w });
							}
						})
						.catch(async (h) => {
							if (((d = ["reject", h]), l.error !== void 0)) {
								f = !1;
								const v =
										typeof l.error == "function" ? await l.error(h) : l.error,
									y =
										typeof l.description == "function"
											? await l.description(h)
											: l.description,
									E =
										typeof v == "object" && !tt.isValidElement(v)
											? v
											: { message: v };
								this.create({ id: r, type: "error", description: y, ...E });
							}
						})
						.finally(() => {
							(f && (this.dismiss(r), (r = void 0)),
								l.finally == null || l.finally.call(l));
						}),
					g = () =>
						new Promise((h, v) =>
							m.then(() => (d[0] === "reject" ? v(d[1]) : h(d[1]))).catch(v),
						);
				return typeof r != "string" && typeof r != "number"
					? { unwrap: g }
					: Object.assign(r, { unwrap: g });
			}),
			(this.custom = (i, l) => {
				const r = l?.id || df++;
				return (this.create({ jsx: i(r), id: r, ...l }), r);
			}),
			(this.getActiveToasts = () =>
				this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
			(this.subscribers = []),
			(this.toasts = []),
			(this.dismissedToasts = new Set()));
	}
}
const Ge = new h3(),
	m3 = (n, i) => {
		const l = i?.id || df++;
		return (Ge.addToast({ title: n, ...i, id: l }), l);
	},
	p3 = (n) =>
		n &&
		typeof n == "object" &&
		"ok" in n &&
		typeof n.ok == "boolean" &&
		"status" in n &&
		typeof n.status == "number",
	y3 = m3,
	g3 = () => Ge.toasts,
	v3 = () => Ge.getActiveToasts(),
	r_ = Object.assign(
		y3,
		{
			success: Ge.success,
			info: Ge.info,
			warning: Ge.warning,
			error: Ge.error,
			custom: Ge.custom,
			message: Ge.message,
			promise: Ge.promise,
			dismiss: Ge.dismiss,
			loading: Ge.loading,
		},
		{ getHistory: g3, getToasts: v3 },
	);
a3(
	"[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Pr(n) {
	return n.label !== void 0;
}
const b3 = 3,
	S3 = "24px",
	E3 = "16px",
	j1 = 4e3,
	_3 = 356,
	w3 = 14,
	T3 = 45,
	R3 = 200;
function Mn(...n) {
	return n.filter(Boolean).join(" ");
}
function A3(n) {
	const [i, l] = n.split("-"),
		r = [];
	return (i && r.push(i), l && r.push(l), r);
}
const x3 = (n) => {
	var i, l, r, c, f, d, m, g, h;
	const {
			invert: v,
			toast: y,
			unstyled: b,
			interacting: E,
			setHeights: w,
			visibleToasts: x,
			heights: R,
			index: O,
			toasts: H,
			expanded: q,
			removeToast: Q,
			defaultRichColors: F,
			closeButton: J,
			style: X,
			cancelButtonStyle: Y,
			actionButtonStyle: W,
			className: ct = "",
			descriptionClassName: it = "",
			duration: at,
			position: wt,
			gap: Tt,
			expandByDefault: qt,
			classNames: L,
			icons: k,
			closeButtonAriaLabel: st = "Close toast",
		} = n,
		[vt, mt] = tt.useState(null),
		[M, G] = tt.useState(null),
		[P, I] = tt.useState(!1),
		[et, ot] = tt.useState(!1),
		[gt, ft] = tt.useState(!1),
		[At, ze] = tt.useState(!1),
		[De, Re] = tt.useState(!1),
		[qa, Le] = tt.useState(0),
		[Za, zn] = tt.useState(0),
		En = tt.useRef(y.duration || at || j1),
		nn = tt.useRef(null),
		fe = tt.useRef(null),
		Xe = O === 0,
		Qa = O + 1 <= x,
		de = y.type,
		pn = y.dismissible !== !1,
		he = y.className || "",
		wi = y.descriptionClassName || "",
		xt = tt.useMemo(
			() => R.findIndex((dt) => dt.toastId === y.id) || 0,
			[R, y.id],
		),
		Kt = tt.useMemo(() => {
			var dt;
			return (dt = y.closeButton) != null ? dt : J;
		}, [y.closeButton, J]),
		ae = tt.useMemo(() => y.duration || at || j1, [y.duration, at]),
		na = tt.useRef(0),
		Dn = tt.useRef(0),
		Os = tt.useRef(0),
		aa = tt.useRef(null),
		[Ya, Ae] = wt.split("-"),
		yn = tt.useMemo(
			() => R.reduce((dt, Yt, oe) => (oe >= xt ? dt : dt + Yt.height), 0),
			[R, xt],
		),
		Ee = d3(),
		_o = y.invert || v,
		_l = de === "loading";
	((Dn.current = tt.useMemo(() => xt * Tt + yn, [xt, yn])),
		tt.useEffect(() => {
			En.current = ae;
		}, [ae]),
		tt.useEffect(() => {
			I(!0);
		}, []),
		tt.useEffect(() => {
			const dt = fe.current;
			if (dt) {
				const Yt = dt.getBoundingClientRect().height;
				return (
					zn(Yt),
					w((oe) => [
						{ toastId: y.id, height: Yt, position: y.position },
						...oe,
					]),
					() => w((oe) => oe.filter((_e) => _e.toastId !== y.id))
				);
			}
		}, [w, y.id]),
		tt.useLayoutEffect(() => {
			if (!P) return;
			const dt = fe.current,
				Yt = dt.style.height;
			dt.style.height = "auto";
			const oe = dt.getBoundingClientRect().height;
			((dt.style.height = Yt),
				zn(oe),
				w((_e) =>
					_e.find((Xt) => Xt.toastId === y.id)
						? _e.map((Xt) => (Xt.toastId === y.id ? { ...Xt, height: oe } : Xt))
						: [{ toastId: y.id, height: oe, position: y.position }, ..._e],
				));
		}, [P, y.title, y.description, w, y.id, y.jsx, y.action, y.cancel]));
	const _n = tt.useCallback(() => {
		(ot(!0),
			Le(Dn.current),
			w((dt) => dt.filter((Yt) => Yt.toastId !== y.id)),
			setTimeout(() => {
				Q(y);
			}, R3));
	}, [y, Q, w, Dn]);
	(tt.useEffect(() => {
		if (
			(y.promise && de === "loading") ||
			y.duration === 1 / 0 ||
			y.type === "loading"
		)
			return;
		let dt;
		return (
			q || E || Ee
				? (() => {
						if (Os.current < na.current) {
							const _e = new Date().getTime() - na.current;
							En.current = En.current - _e;
						}
						Os.current = new Date().getTime();
					})()
				: En.current !== 1 / 0 &&
					((na.current = new Date().getTime()),
					(dt = setTimeout(() => {
						(y.onAutoClose == null || y.onAutoClose.call(y, y), _n());
					}, En.current))),
			() => clearTimeout(dt)
		);
	}, [q, E, y, de, Ee, _n]),
		tt.useEffect(() => {
			y.delete && (_n(), y.onDismiss == null || y.onDismiss.call(y, y));
		}, [_n, y.delete]));
	function Ti() {
		var dt;
		if (k?.loading) {
			var Yt;
			return tt.createElement(
				"div",
				{
					className: Mn(
						L?.loader,
						y == null || (Yt = y.classNames) == null ? void 0 : Yt.loader,
						"sonner-loader",
					),
					"data-visible": de === "loading",
				},
				k.loading,
			);
		}
		return tt.createElement(s3, {
			className: Mn(
				L?.loader,
				y == null || (dt = y.classNames) == null ? void 0 : dt.loader,
			),
			visible: de === "loading",
		});
	}
	const Ri = y.icon || k?.[de] || i3(de);
	var Va, wn;
	return tt.createElement(
		"li",
		{
			tabIndex: 0,
			ref: fe,
			className: Mn(
				ct,
				he,
				L?.toast,
				y == null || (i = y.classNames) == null ? void 0 : i.toast,
				L?.default,
				L?.[de],
				y == null || (l = y.classNames) == null ? void 0 : l[de],
			),
			"data-sonner-toast": "",
			"data-rich-colors": (Va = y.richColors) != null ? Va : F,
			"data-styled": !(y.jsx || y.unstyled || b),
			"data-mounted": P,
			"data-promise": !!y.promise,
			"data-swiped": De,
			"data-removed": et,
			"data-visible": Qa,
			"data-y-position": Ya,
			"data-x-position": Ae,
			"data-index": O,
			"data-front": Xe,
			"data-swiping": gt,
			"data-dismissible": pn,
			"data-type": de,
			"data-invert": _o,
			"data-swipe-out": At,
			"data-swipe-direction": M,
			"data-expanded": !!(q || (qt && P)),
			"data-testid": y.testId,
			style: {
				"--index": O,
				"--toasts-before": O,
				"--z-index": H.length - O,
				"--offset": `${et ? qa : Dn.current}px`,
				"--initial-height": qt ? "auto" : `${Za}px`,
				...X,
				...y.style,
			},
			onDragEnd: () => {
				(ft(!1), mt(null), (aa.current = null));
			},
			onPointerDown: (dt) => {
				dt.button !== 2 &&
					(_l ||
						!pn ||
						((nn.current = new Date()),
						Le(Dn.current),
						dt.target.setPointerCapture(dt.pointerId),
						dt.target.tagName !== "BUTTON" &&
							(ft(!0), (aa.current = { x: dt.clientX, y: dt.clientY }))));
			},
			onPointerUp: () => {
				var dt, Yt, oe;
				if (At || !pn) return;
				aa.current = null;
				const _e = Number(
						((dt = fe.current) == null
							? void 0
							: dt.style
									.getPropertyValue("--swipe-amount-x")
									.replace("px", "")) || 0,
					),
					ia = Number(
						((Yt = fe.current) == null
							? void 0
							: Yt.style
									.getPropertyValue("--swipe-amount-y")
									.replace("px", "")) || 0,
					),
					Xt =
						new Date().getTime() -
						((oe = nn.current) == null ? void 0 : oe.getTime()),
					Ne = vt === "x" ? _e : ia,
					Ga = Math.abs(Ne) / Xt;
				if (Math.abs(Ne) >= T3 || Ga > 0.11) {
					(Le(Dn.current),
						y.onDismiss == null || y.onDismiss.call(y, y),
						G(
							vt === "x" ? (_e > 0 ? "right" : "left") : ia > 0 ? "down" : "up",
						),
						_n(),
						ze(!0));
					return;
				} else {
					var Ue, je;
					((Ue = fe.current) == null ||
						Ue.style.setProperty("--swipe-amount-x", "0px"),
						(je = fe.current) == null ||
							je.style.setProperty("--swipe-amount-y", "0px"));
				}
				(Re(!1), ft(!1), mt(null));
			},
			onPointerMove: (dt) => {
				var Yt, oe, _e;
				if (
					!aa.current ||
					!pn ||
					((Yt = window.getSelection()) == null
						? void 0
						: Yt.toString().length) > 0
				)
					return;
				const Xt = dt.clientY - aa.current.y,
					Ne = dt.clientX - aa.current.x;
				var Ga;
				const Ue = (Ga = n.swipeDirections) != null ? Ga : A3(wt);
				!vt &&
					(Math.abs(Ne) > 1 || Math.abs(Xt) > 1) &&
					mt(Math.abs(Ne) > Math.abs(Xt) ? "x" : "y");
				let je = { x: 0, y: 0 };
				const Ai = (gn) => 1 / (1.5 + Math.abs(gn) / 20);
				if (vt === "y") {
					if (Ue.includes("top") || Ue.includes("bottom"))
						if (
							(Ue.includes("top") && Xt < 0) ||
							(Ue.includes("bottom") && Xt > 0)
						)
							je.y = Xt;
						else {
							const gn = Xt * Ai(Xt);
							je.y = Math.abs(gn) < Math.abs(Xt) ? gn : Xt;
						}
				} else if (vt === "x" && (Ue.includes("left") || Ue.includes("right")))
					if (
						(Ue.includes("left") && Ne < 0) ||
						(Ue.includes("right") && Ne > 0)
					)
						je.x = Ne;
					else {
						const gn = Ne * Ai(Ne);
						je.x = Math.abs(gn) < Math.abs(Ne) ? gn : Ne;
					}
				((Math.abs(je.x) > 0 || Math.abs(je.y) > 0) && Re(!0),
					(oe = fe.current) == null ||
						oe.style.setProperty("--swipe-amount-x", `${je.x}px`),
					(_e = fe.current) == null ||
						_e.style.setProperty("--swipe-amount-y", `${je.y}px`));
			},
		},
		Kt && !y.jsx && de !== "loading"
			? tt.createElement(
					"button",
					{
						"aria-label": st,
						"data-disabled": _l,
						"data-close-button": !0,
						onClick:
							_l || !pn
								? () => {}
								: () => {
										(_n(), y.onDismiss == null || y.onDismiss.call(y, y));
									},
						className: Mn(
							L?.closeButton,
							y == null || (r = y.classNames) == null ? void 0 : r.closeButton,
						),
					},
					(wn = k?.close) != null ? wn : f3,
				)
			: null,
		(de || y.icon || y.promise) &&
			y.icon !== null &&
			(k?.[de] !== null || y.icon)
			? tt.createElement(
					"div",
					{
						"data-icon": "",
						className: Mn(
							L?.icon,
							y == null || (c = y.classNames) == null ? void 0 : c.icon,
						),
					},
					y.promise || (y.type === "loading" && !y.icon)
						? y.icon || Ti()
						: null,
					y.type !== "loading" ? Ri : null,
				)
			: null,
		tt.createElement(
			"div",
			{
				"data-content": "",
				className: Mn(
					L?.content,
					y == null || (f = y.classNames) == null ? void 0 : f.content,
				),
			},
			tt.createElement(
				"div",
				{
					"data-title": "",
					className: Mn(
						L?.title,
						y == null || (d = y.classNames) == null ? void 0 : d.title,
					),
				},
				y.jsx ? y.jsx : typeof y.title == "function" ? y.title() : y.title,
			),
			y.description
				? tt.createElement(
						"div",
						{
							"data-description": "",
							className: Mn(
								it,
								wi,
								L?.description,
								y == null || (m = y.classNames) == null
									? void 0
									: m.description,
							),
						},
						typeof y.description == "function"
							? y.description()
							: y.description,
					)
				: null,
		),
		tt.isValidElement(y.cancel)
			? y.cancel
			: y.cancel && Pr(y.cancel)
				? tt.createElement(
						"button",
						{
							"data-button": !0,
							"data-cancel": !0,
							style: y.cancelButtonStyle || Y,
							onClick: (dt) => {
								Pr(y.cancel) &&
									pn &&
									(y.cancel.onClick == null ||
										y.cancel.onClick.call(y.cancel, dt),
									_n());
							},
							className: Mn(
								L?.cancelButton,
								y == null || (g = y.classNames) == null
									? void 0
									: g.cancelButton,
							),
						},
						y.cancel.label,
					)
				: null,
		tt.isValidElement(y.action)
			? y.action
			: y.action && Pr(y.action)
				? tt.createElement(
						"button",
						{
							"data-button": !0,
							"data-action": !0,
							style: y.actionButtonStyle || W,
							onClick: (dt) => {
								Pr(y.action) &&
									(y.action.onClick == null ||
										y.action.onClick.call(y.action, dt),
									!dt.defaultPrevented && _n());
							},
							className: Mn(
								L?.actionButton,
								y == null || (h = y.classNames) == null
									? void 0
									: h.actionButton,
							),
						},
						y.action.label,
					)
				: null,
	);
};
function B1() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	const n = document.documentElement.getAttribute("dir");
	return n === "auto" || !n
		? window.getComputedStyle(document.documentElement).direction
		: n;
}
function M3(n, i) {
	const l = {};
	return (
		[n, i].forEach((r, c) => {
			const f = c === 1,
				d = f ? "--mobile-offset" : "--offset",
				m = f ? E3 : S3;
			function g(h) {
				["top", "right", "bottom", "left"].forEach((v) => {
					l[`${d}-${v}`] = typeof h == "number" ? `${h}px` : h;
				});
			}
			typeof r == "number" || typeof r == "string"
				? g(r)
				: typeof r == "object"
					? ["top", "right", "bottom", "left"].forEach((h) => {
							r[h] === void 0
								? (l[`${d}-${h}`] = m)
								: (l[`${d}-${h}`] =
										typeof r[h] == "number" ? `${r[h]}px` : r[h]);
						})
					: g(m);
		}),
		l
	);
}
const O3 = tt.forwardRef(function (i, l) {
		const {
				id: r,
				invert: c,
				position: f = "bottom-right",
				hotkey: d = ["altKey", "KeyT"],
				expand: m,
				closeButton: g,
				className: h,
				offset: v,
				mobileOffset: y,
				theme: b = "light",
				richColors: E,
				duration: w,
				style: x,
				visibleToasts: R = b3,
				toastOptions: O,
				dir: H = B1(),
				gap: q = w3,
				icons: Q,
				containerAriaLabel: F = "Notifications",
			} = i,
			[J, X] = tt.useState([]),
			Y = tt.useMemo(
				() =>
					r
						? J.filter((P) => P.toasterId === r)
						: J.filter((P) => !P.toasterId),
				[J, r],
			),
			W = tt.useMemo(
				() =>
					Array.from(
						new Set(
							[f].concat(Y.filter((P) => P.position).map((P) => P.position)),
						),
					),
				[Y, f],
			),
			[ct, it] = tt.useState([]),
			[at, wt] = tt.useState(!1),
			[Tt, qt] = tt.useState(!1),
			[L, k] = tt.useState(
				b !== "system"
					? b
					: typeof window < "u" &&
						  window.matchMedia &&
						  window.matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light",
			),
			st = tt.useRef(null),
			vt = d.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
			mt = tt.useRef(null),
			M = tt.useRef(!1),
			G = tt.useCallback((P) => {
				X((I) => {
					var et;
					return (
						((et = I.find((ot) => ot.id === P.id)) != null && et.delete) ||
							Ge.dismiss(P.id),
						I.filter(({ id: ot }) => ot !== P.id)
					);
				});
			}, []);
		return (
			tt.useEffect(
				() =>
					Ge.subscribe((P) => {
						if (P.dismiss) {
							requestAnimationFrame(() => {
								X((I) =>
									I.map((et) => (et.id === P.id ? { ...et, delete: !0 } : et)),
								);
							});
							return;
						}
						setTimeout(() => {
							o4.flushSync(() => {
								X((I) => {
									const et = I.findIndex((ot) => ot.id === P.id);
									return et !== -1
										? [
												...I.slice(0, et),
												{ ...I[et], ...P },
												...I.slice(et + 1),
											]
										: [P, ...I];
								});
							});
						});
					}),
				[J],
			),
			tt.useEffect(() => {
				if (b !== "system") {
					k(b);
					return;
				}
				if (
					(b === "system" &&
						(window.matchMedia &&
						window.matchMedia("(prefers-color-scheme: dark)").matches
							? k("dark")
							: k("light")),
					typeof window > "u")
				)
					return;
				const P = window.matchMedia("(prefers-color-scheme: dark)");
				try {
					P.addEventListener("change", ({ matches: I }) => {
						k(I ? "dark" : "light");
					});
				} catch {
					P.addListener(({ matches: et }) => {
						try {
							k(et ? "dark" : "light");
						} catch (ot) {
							console.error(ot);
						}
					});
				}
			}, [b]),
			tt.useEffect(() => {
				J.length <= 1 && wt(!1);
			}, [J]),
			tt.useEffect(() => {
				const P = (I) => {
					var et;
					if (d.every((ft) => I[ft] || I.code === ft)) {
						var gt;
						(wt(!0), (gt = st.current) == null || gt.focus());
					}
					I.code === "Escape" &&
						(document.activeElement === st.current ||
							((et = st.current) != null &&
								et.contains(document.activeElement))) &&
						wt(!1);
				};
				return (
					document.addEventListener("keydown", P),
					() => document.removeEventListener("keydown", P)
				);
			}, [d]),
			tt.useEffect(() => {
				if (st.current)
					return () => {
						mt.current &&
							(mt.current.focus({ preventScroll: !0 }),
							(mt.current = null),
							(M.current = !1));
					};
			}, [st.current]),
			tt.createElement(
				"section",
				{
					ref: l,
					"aria-label": `${F} ${vt}`,
					tabIndex: -1,
					"aria-live": "polite",
					"aria-relevant": "additions text",
					"aria-atomic": "false",
					suppressHydrationWarning: !0,
				},
				W.map((P, I) => {
					var et;
					const [ot, gt] = P.split("-");
					return Y.length
						? tt.createElement(
								"ol",
								{
									key: P,
									dir: H === "auto" ? B1() : H,
									tabIndex: -1,
									ref: st,
									className: h,
									"data-sonner-toaster": !0,
									"data-sonner-theme": L,
									"data-y-position": ot,
									"data-x-position": gt,
									style: {
										"--front-toast-height": `${((et = ct[0]) == null ? void 0 : et.height) || 0}px`,
										"--width": `${_3}px`,
										"--gap": `${q}px`,
										...x,
										...M3(v, y),
									},
									onBlur: (ft) => {
										M.current &&
											!ft.currentTarget.contains(ft.relatedTarget) &&
											((M.current = !1),
											mt.current &&
												(mt.current.focus({ preventScroll: !0 }),
												(mt.current = null)));
									},
									onFocus: (ft) => {
										(ft.target instanceof HTMLElement &&
											ft.target.dataset.dismissible === "false") ||
											M.current ||
											((M.current = !0), (mt.current = ft.relatedTarget));
									},
									onMouseEnter: () => wt(!0),
									onMouseMove: () => wt(!0),
									onMouseLeave: () => {
										Tt || wt(!1);
									},
									onDragEnd: () => wt(!1),
									onPointerDown: (ft) => {
										(ft.target instanceof HTMLElement &&
											ft.target.dataset.dismissible === "false") ||
											qt(!0);
									},
									onPointerUp: () => qt(!1),
								},
								Y.filter(
									(ft) => (!ft.position && I === 0) || ft.position === P,
								).map((ft, At) => {
									var ze, De;
									return tt.createElement(x3, {
										key: ft.id,
										icons: Q,
										index: At,
										toast: ft,
										defaultRichColors: E,
										duration: (ze = O?.duration) != null ? ze : w,
										className: O?.className,
										descriptionClassName: O?.descriptionClassName,
										invert: c,
										visibleToasts: R,
										closeButton: (De = O?.closeButton) != null ? De : g,
										interacting: Tt,
										position: P,
										style: O?.style,
										unstyled: O?.unstyled,
										classNames: O?.classNames,
										cancelButtonStyle: O?.cancelButtonStyle,
										actionButtonStyle: O?.actionButtonStyle,
										closeButtonAriaLabel: O?.closeButtonAriaLabel,
										removeToast: G,
										toasts: Y.filter((Re) => Re.position == ft.position),
										heights: ct.filter((Re) => Re.position == ft.position),
										setHeights: it,
										expandByDefault: m,
										gap: q,
										expanded: at,
										swipeDirections: i.swipeDirections,
									});
								}),
							)
						: null;
				}),
			)
		);
	}),
	C3 = ({ ...n }) => {
		const { theme: i = "system" } = G6();
		return $.jsx(O3, {
			theme: i,
			className: "toaster group",
			icons: {
				success: $.jsx(ly, { className: "size-4" }),
				info: $.jsx(sy, { className: "size-4" }),
				warning: $.jsx(oy, { className: "size-4" }),
				error: $.jsx(uy, { className: "size-4" }),
				loading: $.jsx(ry, { className: "size-4 animate-spin" }),
			},
			style: {
				"--normal-bg": "var(--popover)",
				"--normal-text": "var(--popover-foreground)",
				"--normal-border": "var(--border)",
				"--border-radius": "var(--radius)",
			},
			toastOptions: { classNames: { toast: "cn-toast" } },
			...n,
		});
	},
	cy = () => {
		throw new Error(
			"createServerOnlyFn() functions can only be called on the server!",
		);
	};
function H1(n) {
	return n !== "__proto__" && n !== "constructor" && n !== "prototype";
}
function hf(n, i) {
	const l = Object.create(null);
	if (n) for (const r of Object.keys(n)) H1(r) && (l[r] = n[r]);
	if (i && typeof i == "object")
		for (const r of Object.keys(i)) H1(r) && (l[r] = i[r]);
	return l;
}
function fy(n) {
	return Object.create(null);
}
const Ft = (n, i) => {
	const l = i || n || {};
	return (
		typeof l.method > "u" && (l.method = "GET"),
		Object.assign(
			(f) => {
				const d = { ...l, ...f };
				return Ft(void 0, d);
			},
			{
				options: l,
				middleware: (f) => {
					const d = [...(l.middleware || [])];
					f.map((h) => {
						v1 in h
							? h.options.middleware && d.push(...h.options.middleware)
							: d.push(h);
					});
					const m = { ...l, middleware: d },
						g = Ft(void 0, m);
					return ((g[v1] = !0), g);
				},
				inputValidator: (f) => {
					const d = { ...l, inputValidator: f };
					return Ft(void 0, d);
				},
				handler: (...f) => {
					const [d, m] = f,
						g = { ...l, extractedFn: d, serverFn: m },
						h = [...(g.middleware || []), L3(g)];
					return (
						(d.method = l.method),
						Object.assign(
							async (v) => {
								const y = await q1(h, "client", {
										...d,
										...g,
										data: v?.data,
										headers: v?.headers,
										signal: v?.signal,
										fetch: v?.fetch,
										context: fy(),
									}),
									b = W1(y.error);
								if (b) throw b;
								if (y.error) throw y.error;
								return y.result;
							},
							{
								...d,
								method: l.method,
								__executeServer: async (v) => {
									const y = cy(),
										b = y.contextAfterGlobalMiddlewares,
										E = {
											...d,
											...v,
											serverFnMeta: d.serverFnMeta,
											context: hf(b, v.context),
											request: y.request,
										};
									return await q1(h, "server", E).then((x) => ({
										result: x.result,
										error: x.error,
										context: x.sendContext,
									}));
								},
							},
						)
					);
				},
			},
		)
	);
};
async function q1(n, i, l) {
	const r = Lf()?.functionMiddleware || [];
	let c = z3([...r, ...n]);
	if (i === "server") {
		const d = cy();
		d?.executedRequestMiddlewares &&
			(c = c.filter((m) => !d.executedRequestMiddlewares.has(m)));
	}
	const f = async (d) => {
		const m = c.shift();
		if (!m) return d;
		try {
			"inputValidator" in m.options &&
				m.options.inputValidator &&
				i === "server" &&
				(d.data = await D3(m.options.inputValidator, d.data));
			let g;
			if (
				(i === "client"
					? "client" in m.options && (g = m.options.client)
					: "server" in m.options && (g = m.options.server),
				g)
			) {
				const v = await g({
					...d,
					next: async (y = {}) => {
						const b = {
								...d,
								...y,
								context: hf(d.context, y.context),
								sendContext: hf(d.sendContext, y.sendContext),
								headers: Z4(d.headers, y.headers),
								_callSiteFetch: d._callSiteFetch,
								fetch: d._callSiteFetch ?? y.fetch ?? d.fetch,
								result:
									y.result !== void 0
										? y.result
										: y instanceof Response
											? y
											: d.result,
								error: y.error ?? d.error,
							},
							E = await f(b);
						if (E.error) throw E.error;
						return E;
					},
				});
				if (be(v)) return { ...d, error: v };
				if (v instanceof Response) return { ...d, result: v };
				if (!v)
					throw new Error(
						"User middleware returned undefined. You must call next() or return a result in your middlewares.",
					);
				return v;
			}
			return f(d);
		} catch (g) {
			return { ...d, error: g };
		}
	};
	return f({
		...l,
		headers: l.headers || {},
		sendContext: l.sendContext || {},
		context: l.context || fy(),
		_callSiteFetch: l.fetch,
	});
}
function z3(n, i = 100) {
	const l = new Set(),
		r = [],
		c = (f, d) => {
			if (d > i)
				throw new Error(
					`Middleware nesting depth exceeded maximum of ${i}. Check for circular references.`,
				);
			f.forEach((m) => {
				(m.options.middleware && c(m.options.middleware, d + 1),
					l.has(m) || (l.add(m), r.push(m)));
			});
		};
	return (c(n, 0), r);
}
async function D3(n, i) {
	if (n == null) return {};
	if ("~standard" in n) {
		const l = await n["~standard"].validate(i);
		if (l.issues) throw new Error(JSON.stringify(l.issues, void 0, 2));
		return l.value;
	}
	if ("parse" in n) return n.parse(i);
	if (typeof n == "function") return n(i);
	throw new Error("Invalid validator type!");
}
function L3(n) {
	return {
		"~types": void 0,
		options: {
			inputValidator: n.inputValidator,
			client: async ({ next: i, sendContext: l, fetch: r, ...c }) => {
				const f = { ...c, context: l, fetch: r },
					d = await n.extractedFn?.(f);
				return i(d);
			},
			server: async ({ next: i, ...l }) => {
				const r = await n.serverFn?.(l);
				return i({ ...l, result: r });
			},
		},
	};
}
const N3 = Ft({ method: "GET" }).handler(
	ne("5752ecb259387305714e99c3edd316ae3635dc78d3de14b6128f8841e3f57074"),
);
Ft({ method: "GET" }).handler(
	ne("5e7fe3042b95dce3f4b8c075ff3beef1abb9d707442b59348ec49290604c02f4"),
);
const U3 = Ft({ method: "GET" }).handler(
		ne("1e30eab7ba86e9a14339424dba5fdcaf9a72cd77dfb32d305a32e4546f8bc002"),
	),
	j3 = Ft({ method: "GET" }).handler(
		ne("7ae46e726d2be4145426871e3793e78518b09a2dfefb5980c482a931f3628239"),
	),
	B3 = Ft({ method: "GET" }).handler(
		ne("1424f9fc0d937433ea3c701e92b4d9492a2efcd28a7145e78fb245ebc833ee7b"),
	),
	H3 = Ft({ method: "GET" }).handler(
		ne("c6ca6a3ecbf482583230a78730b69a0999fac3480e176a845871e860308dae58"),
	);
Ft({ method: "GET" }).handler(
	ne("6ab4c87752d716f34f6dfad4610d56b4d323c78a3f4626f6f63d604355c7216e"),
);
const q3 = Ft({ method: "GET" }).handler(
		ne("a2d5bb7304e768c3e5684b02f0555929a2a6c7b36a678a990a91b0aa56230f70"),
	),
	Z3 = Ft({ method: "GET" }).handler(
		ne("95a75a77e931d3cf1e912b6c0d185bd3a9e050f9b48b77984af91cf28208d47d"),
	),
	Q3 = Ft({ method: "GET" }).handler(
		ne("5db58611bdde2b2256eb3bef7e693e8a3e5025c87b03815ca3c7cd6ad4194f65"),
	),
	Y3 = Ft({ method: "GET" }).handler(
		ne("80dcf5b23bdbbe977496ffd856f47f7ab5ee3c1d18dd3d1c155982b005cfd520"),
	),
	V3 = Ft({ method: "GET" }).handler(
		ne("025caab3224966d1f821c8e8d9321fa8cc60cfd90d2c7c9ba5040fd2d69d7a34"),
	);
Ft({ method: "GET" }).handler(
	ne("f6aaafb19c1b7b0933f39636c0583ee7257a0033b20bf9b43f6784d6fd4fa46f"),
);
const G3 = Ft({ method: "GET" }).handler(
		ne("d54b0dc0381cf89927b3b255db57a5b1d4f21644e6521ef4d1f02187b51f5f06"),
	),
	X3 = Ft({ method: "GET" }).handler(
		ne("56c966ddcd29e9e01ec92571559dc2af6685a4d2f6ec2781df39c32408736144"),
	),
	K3 = Ft({ method: "GET" }).handler(
		ne("75e2d9934b7cdc5fa1f312fb614febaf72937143a997684e1a01616b508d9184"),
	),
	P3 = Ft({ method: "GET" }).handler(
		ne("1f37ddb89f07acc8dd84608be7e784a04cba6e0181085e959514b86c5380f439"),
	),
	k3 = Ft({ method: "GET" }).handler(
		ne("1c736deab57eb97cc350ae5ff19cb08a4b3c49859b9419c805cab3bd669f572f"),
	),
	F3 = Ft({ method: "GET" }).handler(
		ne("5157fd1d2a101d6e979caac7aa4b254b4a84a99ab9baafc093b4db50f476af86"),
	),
	J3 = {
		queryKey: ["auth", "session"],
		queryFn: ({ signal: n }) => Z3({ signal: n }),
		staleTime: 1e3 * 60 * 15,
	},
	o_ = { queryKey: ["liked_songs_count"], queryFn: () => Y3() },
	u_ = { queryKey: ["user_playlists"], queryFn: () => P3() },
	c_ = { queryKey: ["user_albums"], queryFn: () => X3() },
	f_ = { queryKey: ["user_artists"], queryFn: () => K3() },
	d_ = (n) => ({
		queryKey: ["user_top_tracks", { ...n }],
		queryFn: () => F3({ data: { ...n } }),
	}),
	h_ = (n) => ({
		queryKey: ["user_top_artists", { ...n }],
		queryFn: () => k3({ data: { ...n } }),
	}),
	m_ = (n) => ({ queryKey: ["album", n], queryFn: () => N3({ data: n }) }),
	p_ = (n) => ({ queryKey: ["artist", n], queryFn: () => j3({ data: n }) }),
	y_ = (n) => ({
		queryKey: ["artist", "top_tracks", n],
		queryFn: () => q3({ data: n }),
	}),
	g_ = (n) => ({
		queryKey: ["artist", "discography", n],
		queryFn: () => H3({ data: n }),
	}),
	v_ = (n) => ({
		queryKey: ["artist", "compilation", n],
		queryFn: () => B3({ data: n }),
	}),
	b_ = (n) => ({
		queryKey: ["artist", "appears_on", n],
		queryFn: () => U3({ data: n }),
	}),
	S_ = (n) => ({ queryKey: ["playlist", n], queryFn: () => V3({ data: n }) }),
	E_ = { queryKey: ["liked_songs"], queryFn: () => Q3() },
	__ = (n) => ({
		queryKey: ["search", { ...n }],
		queryFn: () => G3({ data: { ...n } }),
	}),
	I3 = "/assets/app-B6JickAY.css",
	Bf = S4()({
		beforeLoad: async ({ context: n }) => ({
			session: await n.queryClient.fetchQuery(J3),
		}),
		head: () => ({
			meta: [
				{ charSet: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ title: "betterlist" },
			],
			links: [{ rel: "stylesheet", href: I3 }],
		}),
		component: $3,
	});
function $3() {
	return $.jsx(W3, { children: $.jsx(Vp, {}) });
}
function W3({ children: n }) {
	return $.jsxs("html", {
		lang: "en",
		children: [
			$.jsx("head", { children: $.jsx(B4, {}) }),
			$.jsxs("body", {
				children: [
					$.jsxs(X6, {
						attribute: "class",
						defaultTheme: "system",
						disableTransitionOnChange: !0,
						enableSystem: !0,
						children: [n, $.jsx(C3, { style: { fontFamily: "inherit" } })],
					}),
					$.jsx(H4, {}),
				],
			}),
		],
	});
}
const tE = "modulepreload",
	eE = function (n) {
		return "/" + n;
	},
	Z1 = {},
	en = function (i, l, r) {
		let c = Promise.resolve();
		if (l && l.length > 0) {
			let g = function (h) {
				return Promise.all(
					h.map((v) =>
						Promise.resolve(v).then(
							(y) => ({ status: "fulfilled", value: y }),
							(y) => ({ status: "rejected", reason: y }),
						),
					),
				);
			};
			document.getElementsByTagName("link");
			const d = document.querySelector("meta[property=csp-nonce]"),
				m = d?.nonce || d?.getAttribute("nonce");
			c = g(
				l.map((h) => {
					if (((h = eE(h)), h in Z1)) return;
					Z1[h] = !0;
					const v = h.endsWith(".css"),
						y = v ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${h}"]${y}`)) return;
					const b = document.createElement("link");
					if (
						((b.rel = v ? "stylesheet" : tE),
						v || (b.as = "script"),
						(b.crossOrigin = ""),
						(b.href = h),
						m && b.setAttribute("nonce", m),
						document.head.appendChild(b),
						v)
					)
						return new Promise((E, w) => {
							(b.addEventListener("load", E),
								b.addEventListener("error", () =>
									w(new Error(`Unable to preload CSS for ${h}`)),
								));
						});
				}),
			);
		}
		function f(d) {
			const m = new Event("vite:preloadError", { cancelable: !0 });
			if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented))
				throw d;
		}
		return c.then((d) => {
			for (const m of d || []) m.status === "rejected" && f(m.reason);
			return i().catch(f);
		});
	},
	nE = () =>
		en(() => import("./login-BVPfCwBh.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
	aE = Ce("/login")({ component: tn(nE, "component") }),
	iE = () =>
		en(
			() => import("./_protected-DFireDKu.js"),
			__vite__mapDeps([5, 4, 6, 2, 1, 3, 7, 8, 9]),
		),
	lE = Ce("/_protected")({
		beforeLoad: ({ context: n }) => {
			const i = n.session;
			if (!i) throw Sf({ to: "/login" });
			return { session: i };
		},
		component: tn(iE, "component"),
	}),
	sE = () =>
		en(() => import("./index-BkLVTC-s.js"), __vite__mapDeps([10, 6, 2])),
	rE = Ce("/_protected/")({ component: tn(sE, "component") }),
	oE = () => en(() => import("./search._query-Br3MsoDQ.js"), []),
	uE = Ce("/_protected/search/$query")({ component: tn(oE, "component") }),
	cE = () =>
		en(
			() => import("./playlists._playlistId-BDDGwPt0.js"),
			__vite__mapDeps([11, 9, 6, 2, 12, 13, 14, 8, 3, 15, 7, 1]),
		),
	fE = Ce("/_protected/playlists/$playlistId")({
		component: tn(cE, "component"),
	}),
	dE = () =>
		en(
			() => import("./collection.tracks-BOT0zNsb.js"),
			__vite__mapDeps([16, 9, 6, 2, 12, 14, 8, 3, 4]),
		),
	hE = Ce("/_protected/collection/tracks")({ component: tn(dE, "component") }),
	mE = () =>
		en(
			() => import("./artists._artistId-DSrSnbru.js"),
			__vite__mapDeps([17, 9, 6, 2, 18, 1, 3, 14, 8, 15, 7]),
		),
	pE = Ce("/_protected/artists/$artistId")({ component: tn(mE, "component") }),
	yE = () =>
		en(
			() => import("./albums._albumId-DhxH_FE7.js"),
			__vite__mapDeps([19, 9, 6, 2, 12, 13, 14, 8, 3, 15, 7, 1]),
		),
	gE = Ce("/_protected/albums/$albumId")({ component: tn(yE, "component") }),
	vE = () =>
		en(
			() => import("./search._query.index-c0rK5Kue.js"),
			__vite__mapDeps([20, 9, 6, 2, 18, 14, 8, 3]),
		),
	bE = Ce("/_protected/search/$query/")({ component: tn(vE, "component") }),
	SE = () =>
		en(
			() => import("./search._query.tracks-DmhjR7BY.js"),
			__vite__mapDeps([21, 9, 6, 2, 14, 8, 3]),
		),
	EE = Ce("/_protected/search/$query/tracks")({
		component: tn(SE, "component"),
	}),
	_E = () =>
		en(
			() => import("./search._query.playlists-DZVERlUL.js"),
			__vite__mapDeps([22, 9, 6, 2, 18]),
		),
	wE = Ce("/_protected/search/$query/playlists")({
		component: tn(_E, "component"),
	}),
	TE = () =>
		en(
			() => import("./search._query.artists-D5k_MinV.js"),
			__vite__mapDeps([23, 9, 6, 2, 18]),
		),
	RE = Ce("/_protected/search/$query/artists")({
		component: tn(TE, "component"),
	}),
	AE = () =>
		en(
			() => import("./search._query.albums-orsFHmsO.js"),
			__vite__mapDeps([24, 9, 6, 2, 18]),
		),
	xE = Ce("/_protected/search/$query/albums")({
		component: tn(AE, "component"),
	}),
	ME = aE.update({ id: "/login", path: "/login", getParentRoute: () => Bf }),
	_i = lE.update({ id: "/_protected", getParentRoute: () => Bf }),
	OE = rE.update({ id: "/", path: "/", getParentRoute: () => _i }),
	El = uE.update({
		id: "/search/$query",
		path: "/search/$query",
		getParentRoute: () => _i,
	}),
	CE = fE.update({
		id: "/playlists/$playlistId",
		path: "/playlists/$playlistId",
		getParentRoute: () => _i,
	}),
	zE = hE.update({
		id: "/collection/tracks",
		path: "/collection/tracks",
		getParentRoute: () => _i,
	}),
	DE = pE.update({
		id: "/artists/$artistId",
		path: "/artists/$artistId",
		getParentRoute: () => _i,
	}),
	LE = gE.update({
		id: "/albums/$albumId",
		path: "/albums/$albumId",
		getParentRoute: () => _i,
	}),
	NE = bE.update({ id: "/", path: "/", getParentRoute: () => El }),
	UE = EE.update({ id: "/tracks", path: "/tracks", getParentRoute: () => El }),
	jE = wE.update({
		id: "/playlists",
		path: "/playlists",
		getParentRoute: () => El,
	}),
	BE = RE.update({
		id: "/artists",
		path: "/artists",
		getParentRoute: () => El,
	}),
	HE = xE.update({ id: "/albums", path: "/albums", getParentRoute: () => El }),
	qE = {
		ProtectedSearchQueryAlbumsRoute: HE,
		ProtectedSearchQueryArtistsRoute: BE,
		ProtectedSearchQueryPlaylistsRoute: jE,
		ProtectedSearchQueryTracksRoute: UE,
		ProtectedSearchQueryIndexRoute: NE,
	},
	ZE = El._addFileChildren(qE),
	QE = {
		ProtectedIndexRoute: OE,
		ProtectedAlbumsAlbumIdRoute: LE,
		ProtectedArtistsArtistIdRoute: DE,
		ProtectedCollectionTracksRoute: zE,
		ProtectedPlaylistsPlaylistIdRoute: CE,
		ProtectedSearchQueryRoute: ZE,
	},
	YE = _i._addFileChildren(QE),
	VE = { ProtectedRoute: YE, LoginRoute: ME },
	GE = Bf._addFileChildren(VE);
function XE() {
	const n = new B6({
			defaultOptions: { queries: { refetchOnWindowFocus: !1, staleTime: 3e5 } },
		}),
		i = C4({
			routeTree: GE,
			scrollRestoration: !0,
			context: { queryClient: n, session: null },
			defaultPreload: "intent",
			defaultNotFoundComponent: () => $.jsx("p", { children: "Not found" }),
		});
	return q6(i, n);
}
async function KE() {
	const n = await XE();
	let i;
	return (
		(i = []),
		(window.__TSS_START_OPTIONS__ = { serializationAdapters: i }),
		i.push(i6),
		n.options.serializationAdapters &&
			i.push(...n.options.serializationAdapters),
		n.update({ basepath: "", serializationAdapters: i }),
		n.state.matches.length || (await Y4(n)),
		n
	);
}
async function PE() {
	const n = await KE();
	return (window.$_TSR?.h(), n);
}
let Wc;
function kE() {
	return (
		Wc || (Wc = PE()),
		$.jsx(F8, { promise: Wc, children: (n) => $.jsx(L4, { router: n }) })
	);
}
z.startTransition(() => {
	Lv.hydrateRoot(document, $.jsx(z.StrictMode, { children: $.jsx(kE, {}) }));
});
export {
	uf as $,
	g_ as A,
	p_ as B,
	y_ as C,
	gE as D,
	m_ as E,
	i_ as F,
	Rs as G,
	N6 as H,
	Oe as I,
	Me as J,
	l_ as K,
	Zp as L,
	e4 as M,
	i4 as N,
	Vp as O,
	bE as P,
	__ as Q,
	fE as R,
	So as S,
	EE as T,
	xv as U,
	tt as V,
	wE as W,
	RE as X,
	xE as Y,
	b6 as Z,
	f6 as _,
	qp as a,
	Eo as a0,
	u6 as a1,
	c6 as a2,
	of as a3,
	$p as a4,
	z6 as a5,
	m6 as a6,
	zf as b,
	Te as c,
	Ft as d,
	ne as e,
	s_ as f,
	u_ as g,
	c_ as h,
	f_ as i,
	$ as j,
	d_ as k,
	o_ as l,
	h_ as m,
	Of as n,
	ry as o,
	Sl as p,
	xs as q,
	z as r,
	Q1 as s,
	r_ as t,
	le as u,
	S_ as v,
	E_ as w,
	b_ as x,
	v_ as y,
	G6 as z,
};
