import { t as Gn } from "./Dot.es-DtR0t2Jl.js";
import { q as gn, s as Pn, j as P, R as Mn, v as Un } from "./main-2PW7nLE1.js";
import { e as Fn, u as Hn } from "./MusicNote.es-CaD4f649.js";
import { I as jn } from "./skeleton-HHK49xas.js";
import { S as zn } from "./square-cover-page-skeleton-DzJzGlef.js";
import { T as qn } from "./tracks-table-actions-CGvUpuKK.js";
import { T as Bn } from "./tracks-table-DvyCG6-L.js";
import "./utils-BQHNewu7.js";
import "./useField-F5sWYpCd.js";
import "./useRenderElement-Vjd4_1MR.js";
import "./label-CuWnyJxi.js";
import "./button-C4bOsGCm.js";
const {
	entries: En,
	setPrototypeOf: zt,
	isFrozen: Wn,
	getPrototypeOf: Xn,
	getOwnPropertyDescriptor: Vn,
} = Object;
let { freeze: X, seal: $, create: Xe } = Object,
	{ apply: ht, construct: gt } = typeof Reflect < "u" && Reflect;
X ||
	(X = function (r) {
		return r;
	});
$ ||
	($ = function (r) {
		return r;
	});
ht ||
	(ht = function (r, c) {
		for (
			var o = arguments.length, p = new Array(o > 2 ? o - 2 : 0), m = 2;
			m < o;
			m++
		)
			p[m - 2] = arguments[m];
		return r.apply(c, p);
	});
gt ||
	(gt = function (r) {
		for (
			var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), p = 1;
			p < c;
			p++
		)
			o[p - 1] = arguments[p];
		return new r(...o);
	});
const ze = V(Array.prototype.forEach),
	Yn = V(Array.prototype.lastIndexOf),
	Bt = V(Array.prototype.pop),
	be = V(Array.prototype.push),
	Zn = V(Array.prototype.splice),
	Ve = V(String.prototype.toLowerCase),
	ot = V(String.prototype.toString),
	st = V(String.prototype.match),
	Se = V(String.prototype.replace),
	Kn = V(String.prototype.indexOf),
	Qn = V(String.prototype.trim),
	Q = V(Object.prototype.hasOwnProperty),
	W = V(RegExp.prototype.test),
	Ce = Jn(TypeError);
function V(t) {
	return function (r) {
		r instanceof RegExp && (r.lastIndex = 0);
		for (
			var c = arguments.length, o = new Array(c > 1 ? c - 1 : 0), p = 1;
			p < c;
			p++
		)
			o[p - 1] = arguments[p];
		return ht(t, r, o);
	};
}
function Jn(t) {
	return function () {
		for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++)
			c[o] = arguments[o];
		return gt(t, c);
	};
}
function O(t, r) {
	let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ve;
	zt && zt(t, null);
	let o = r.length;
	for (; o--; ) {
		let p = r[o];
		if (typeof p == "string") {
			const m = c(p);
			m !== p && (Wn(r) || (r[o] = m), (p = m));
		}
		t[p] = !0;
	}
	return t;
}
function $n(t) {
	for (let r = 0; r < t.length; r++) Q(t, r) || (t[r] = null);
	return t;
}
function ne(t) {
	const r = Xe(null);
	for (const [c, o] of En(t))
		Q(t, c) &&
			(Array.isArray(o)
				? (r[c] = $n(o))
				: o && typeof o == "object" && o.constructor === Object
					? (r[c] = ne(o))
					: (r[c] = o));
	return r;
}
function Oe(t, r) {
	for (; t !== null; ) {
		const o = Vn(t, r);
		if (o) {
			if (o.get) return V(o.get);
			if (typeof o.value == "function") return V(o.value);
		}
		t = Xn(t);
	}
	function c() {
		return null;
	}
	return c;
}
const qt = X([
		"a",
		"abbr",
		"acronym",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"bdi",
		"bdo",
		"big",
		"blink",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"center",
		"cite",
		"code",
		"col",
		"colgroup",
		"content",
		"data",
		"datalist",
		"dd",
		"decorator",
		"del",
		"details",
		"dfn",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"element",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"font",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meter",
		"nav",
		"nobr",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"search",
		"section",
		"select",
		"shadow",
		"slot",
		"small",
		"source",
		"spacer",
		"span",
		"strike",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"template",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"tt",
		"u",
		"ul",
		"var",
		"video",
		"wbr",
	]),
	lt = X([
		"svg",
		"a",
		"altglyph",
		"altglyphdef",
		"altglyphitem",
		"animatecolor",
		"animatemotion",
		"animatetransform",
		"circle",
		"clippath",
		"defs",
		"desc",
		"ellipse",
		"enterkeyhint",
		"exportparts",
		"filter",
		"font",
		"g",
		"glyph",
		"glyphref",
		"hkern",
		"image",
		"inputmode",
		"line",
		"lineargradient",
		"marker",
		"mask",
		"metadata",
		"mpath",
		"part",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialgradient",
		"rect",
		"stop",
		"style",
		"switch",
		"symbol",
		"text",
		"textpath",
		"title",
		"tref",
		"tspan",
		"view",
		"vkern",
	]),
	ct = X([
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence",
	]),
	er = X([
		"animate",
		"color-profile",
		"cursor",
		"discard",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"foreignobject",
		"hatch",
		"hatchpath",
		"mesh",
		"meshgradient",
		"meshpatch",
		"meshrow",
		"missing-glyph",
		"script",
		"set",
		"solidcolor",
		"unknown",
		"use",
	]),
	ut = X([
		"math",
		"menclose",
		"merror",
		"mfenced",
		"mfrac",
		"mglyph",
		"mi",
		"mlabeledtr",
		"mmultiscripts",
		"mn",
		"mo",
		"mover",
		"mpadded",
		"mphantom",
		"mroot",
		"mrow",
		"ms",
		"mspace",
		"msqrt",
		"mstyle",
		"msub",
		"msup",
		"msubsup",
		"mtable",
		"mtd",
		"mtext",
		"mtr",
		"munder",
		"munderover",
		"mprescripts",
	]),
	tr = X([
		"maction",
		"maligngroup",
		"malignmark",
		"mlongdiv",
		"mscarries",
		"mscarry",
		"msgroup",
		"mstack",
		"msline",
		"msrow",
		"semantics",
		"annotation",
		"annotation-xml",
		"mprescripts",
		"none",
	]),
	Wt = X(["#text"]),
	Xt = X([
		"accept",
		"action",
		"align",
		"alt",
		"autocapitalize",
		"autocomplete",
		"autopictureinpicture",
		"autoplay",
		"background",
		"bgcolor",
		"border",
		"capture",
		"cellpadding",
		"cellspacing",
		"checked",
		"cite",
		"class",
		"clear",
		"color",
		"cols",
		"colspan",
		"controls",
		"controlslist",
		"coords",
		"crossorigin",
		"datetime",
		"decoding",
		"default",
		"dir",
		"disabled",
		"disablepictureinpicture",
		"disableremoteplayback",
		"download",
		"draggable",
		"enctype",
		"enterkeyhint",
		"exportparts",
		"face",
		"for",
		"headers",
		"height",
		"hidden",
		"high",
		"href",
		"hreflang",
		"id",
		"inert",
		"inputmode",
		"integrity",
		"ismap",
		"kind",
		"label",
		"lang",
		"list",
		"loading",
		"loop",
		"low",
		"max",
		"maxlength",
		"media",
		"method",
		"min",
		"minlength",
		"multiple",
		"muted",
		"name",
		"nonce",
		"noshade",
		"novalidate",
		"nowrap",
		"open",
		"optimum",
		"part",
		"pattern",
		"placeholder",
		"playsinline",
		"popover",
		"popovertarget",
		"popovertargetaction",
		"poster",
		"preload",
		"pubdate",
		"radiogroup",
		"readonly",
		"rel",
		"required",
		"rev",
		"reversed",
		"role",
		"rows",
		"rowspan",
		"spellcheck",
		"scope",
		"selected",
		"shape",
		"size",
		"sizes",
		"slot",
		"span",
		"srclang",
		"start",
		"src",
		"srcset",
		"step",
		"style",
		"summary",
		"tabindex",
		"title",
		"translate",
		"type",
		"usemap",
		"valign",
		"value",
		"width",
		"wrap",
		"xmlns",
		"slot",
	]),
	ft = X([
		"accent-height",
		"accumulate",
		"additive",
		"alignment-baseline",
		"amplitude",
		"ascent",
		"attributename",
		"attributetype",
		"azimuth",
		"basefrequency",
		"baseline-shift",
		"begin",
		"bias",
		"by",
		"class",
		"clip",
		"clippathunits",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"cx",
		"cy",
		"d",
		"dx",
		"dy",
		"diffuseconstant",
		"direction",
		"display",
		"divisor",
		"dur",
		"edgemode",
		"elevation",
		"end",
		"exponent",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"filterunits",
		"flood-color",
		"flood-opacity",
		"font-family",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-variant",
		"font-weight",
		"fx",
		"fy",
		"g1",
		"g2",
		"glyph-name",
		"glyphref",
		"gradientunits",
		"gradienttransform",
		"height",
		"href",
		"id",
		"image-rendering",
		"in",
		"in2",
		"intercept",
		"k",
		"k1",
		"k2",
		"k3",
		"k4",
		"kerning",
		"keypoints",
		"keysplines",
		"keytimes",
		"lang",
		"lengthadjust",
		"letter-spacing",
		"kernelmatrix",
		"kernelunitlength",
		"lighting-color",
		"local",
		"marker-end",
		"marker-mid",
		"marker-start",
		"markerheight",
		"markerunits",
		"markerwidth",
		"maskcontentunits",
		"maskunits",
		"max",
		"mask",
		"mask-type",
		"media",
		"method",
		"mode",
		"min",
		"name",
		"numoctaves",
		"offset",
		"operator",
		"opacity",
		"order",
		"orient",
		"orientation",
		"origin",
		"overflow",
		"paint-order",
		"path",
		"pathlength",
		"patterncontentunits",
		"patterntransform",
		"patternunits",
		"points",
		"preservealpha",
		"preserveaspectratio",
		"primitiveunits",
		"r",
		"rx",
		"ry",
		"radius",
		"refx",
		"refy",
		"repeatcount",
		"repeatdur",
		"restart",
		"result",
		"rotate",
		"scale",
		"seed",
		"shape-rendering",
		"slope",
		"specularconstant",
		"specularexponent",
		"spreadmethod",
		"startoffset",
		"stddeviation",
		"stitchtiles",
		"stop-color",
		"stop-opacity",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke",
		"stroke-width",
		"style",
		"surfacescale",
		"systemlanguage",
		"tabindex",
		"tablevalues",
		"targetx",
		"targety",
		"transform",
		"transform-origin",
		"text-anchor",
		"text-decoration",
		"text-rendering",
		"textlength",
		"type",
		"u1",
		"u2",
		"unicode",
		"values",
		"viewbox",
		"visibility",
		"version",
		"vert-adv-y",
		"vert-origin-x",
		"vert-origin-y",
		"width",
		"word-spacing",
		"wrap",
		"writing-mode",
		"xchannelselector",
		"ychannelselector",
		"x",
		"x1",
		"x2",
		"xmlns",
		"y",
		"y1",
		"y2",
		"z",
		"zoomandpan",
	]),
	Vt = X([
		"accent",
		"accentunder",
		"align",
		"bevelled",
		"close",
		"columnsalign",
		"columnlines",
		"columnspan",
		"denomalign",
		"depth",
		"dir",
		"display",
		"displaystyle",
		"encoding",
		"fence",
		"frame",
		"height",
		"href",
		"id",
		"largeop",
		"length",
		"linethickness",
		"lspace",
		"lquote",
		"mathbackground",
		"mathcolor",
		"mathsize",
		"mathvariant",
		"maxsize",
		"minsize",
		"movablelimits",
		"notation",
		"numalign",
		"open",
		"rowalign",
		"rowlines",
		"rowspacing",
		"rowspan",
		"rspace",
		"rquote",
		"scriptlevel",
		"scriptminsize",
		"scriptsizemultiplier",
		"selection",
		"separator",
		"separators",
		"stretchy",
		"subscriptshift",
		"supscriptshift",
		"symmetric",
		"voffset",
		"width",
		"xmlns",
	]),
	Be = X(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
	nr = $(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
	rr = $(/<%[\w\W]*|[\w\W]*%>/gm),
	ir = $(/\$\{[\w\W]*/gm),
	ar = $(/^data-[\-\w.\u00B7-\uFFFF]+$/),
	or = $(/^aria-[\-\w]+$/),
	Tn = $(
		/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
	),
	sr = $(/^(?:\w+script|data):/i),
	lr = $(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
	_n = $(/^html$/i),
	cr = $(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Yt = Object.freeze({
	__proto__: null,
	ARIA_ATTR: or,
	ATTR_WHITESPACE: lr,
	CUSTOM_ELEMENT: cr,
	DATA_ATTR: ar,
	DOCTYPE_NAME: _n,
	ERB_EXPR: rr,
	IS_ALLOWED_URI: Tn,
	IS_SCRIPT_OR_DATA: sr,
	MUSTACHE_EXPR: nr,
	TMPLIT_EXPR: ir,
});
const Ne = {
		element: 1,
		text: 3,
		progressingInstruction: 7,
		comment: 8,
		document: 9,
	},
	ur = function () {
		return typeof window > "u" ? null : window;
	},
	fr = function (r, c) {
		if (typeof r != "object" || typeof r.createPolicy != "function")
			return null;
		let o = null;
		const p = "data-tt-policy-suffix";
		c && c.hasAttribute(p) && (o = c.getAttribute(p));
		const m = "dompurify" + (o ? "#" + o : "");
		try {
			return r.createPolicy(m, {
				createHTML(A) {
					return A;
				},
				createScriptURL(A) {
					return A;
				},
			});
		} catch {
			return (
				console.warn("TrustedTypes policy " + m + " could not be created."),
				null
			);
		}
	},
	Zt = function () {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: [],
		};
	};
function vn() {
	let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ur();
	const r = (E) => vn(E);
	if (
		((r.version = "3.3.3"),
		(r.removed = []),
		!t || !t.document || t.document.nodeType !== Ne.document || !t.Element)
	)
		return ((r.isSupported = !1), r);
	let { document: c } = t;
	const o = c,
		p = o.currentScript,
		{
			DocumentFragment: m,
			HTMLTemplateElement: A,
			Node: d,
			Element: s,
			NodeFilter: i,
			NamedNodeMap: f = t.NamedNodeMap || t.MozNamedAttrMap,
			HTMLFormElement: g,
			DOMParser: w,
			trustedTypes: D,
		} = t,
		I = s.prototype,
		y = Oe(I, "cloneNode"),
		_ = Oe(I, "remove"),
		b = Oe(I, "nextSibling"),
		U = Oe(I, "childNodes"),
		k = Oe(I, "parentNode");
	if (typeof A == "function") {
		const E = c.createElement("template");
		E.content && E.content.ownerDocument && (c = E.content.ownerDocument);
	}
	let S,
		n = "";
	const {
			implementation: a,
			createNodeIterator: l,
			createDocumentFragment: T,
			getElementsByTagName: v,
		} = c,
		{ importNode: L } = o;
	let N = Zt();
	r.isSupported =
		typeof En == "function" &&
		typeof k == "function" &&
		a &&
		a.createHTMLDocument !== void 0;
	const {
		MUSTACHE_EXPR: Z,
		ERB_EXPR: le,
		TMPLIT_EXPR: x,
		DATA_ATTR: C,
		ARIA_ATTR: K,
		IS_SCRIPT_OR_DATA: Ye,
		ATTR_WHITESPACE: Tt,
		CUSTOM_ELEMENT: Cn,
	} = Yt;
	let { IS_ALLOWED_URI: _t } = Yt,
		G = null;
	const vt = O({}, [...qt, ...lt, ...ct, ...ut, ...Wt]);
	let z = null;
	const At = O({}, [...Xt, ...ft, ...Vt, ...Be]);
	let F = Object.seal(
			Xe(null, {
				tagNameCheck: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: null,
				},
				attributeNameCheck: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: null,
				},
				allowCustomizedBuiltInElements: {
					writable: !0,
					configurable: !1,
					enumerable: !0,
					value: !1,
				},
			}),
		),
		Ae = null,
		ke = null;
	const oe = Object.seal(
		Xe(null, {
			tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
			attributeCheck: {
				writable: !0,
				configurable: !1,
				enumerable: !0,
				value: null,
			},
		}),
	);
	let yt = !0,
		Ze = !0,
		Rt = !1,
		bt = !0,
		de = !1,
		Pe = !0,
		ce = !1,
		Ke = !1,
		Qe = !1,
		pe = !1,
		Me = !1,
		Ue = !1,
		St = !0,
		Ct = !1;
	const On = "user-content-";
	let Je = !0,
		ye = !1,
		me = {},
		ee = null;
	const $e = O({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp",
	]);
	let Ot = null;
	const Nt = O({}, ["audio", "video", "img", "source", "image", "track"]);
	let et = null;
	const Dt = O({}, [
			"alt",
			"class",
			"for",
			"id",
			"label",
			"name",
			"pattern",
			"placeholder",
			"role",
			"summary",
			"title",
			"value",
			"style",
			"xmlns",
		]),
		Fe = "http://www.w3.org/1998/Math/MathML",
		He = "http://www.w3.org/2000/svg",
		re = "http://www.w3.org/1999/xhtml";
	let he = re,
		tt = !1,
		nt = null;
	const Nn = O({}, [Fe, He, re], ot);
	let je = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
		Ge = O({}, ["annotation-xml"]);
	const Dn = O({}, ["title", "style", "font", "a", "script"]);
	let Re = null;
	const xn = ["application/xhtml+xml", "text/html"],
		wn = "text/html";
	let j = null,
		ge = null;
	const In = c.createElement("form"),
		xt = function (e) {
			return e instanceof RegExp || e instanceof Function;
		},
		rt = function () {
			let e =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (!(ge && ge === e)) {
				if (
					((!e || typeof e != "object") && (e = {}),
					(e = ne(e)),
					(Re =
						xn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? wn : e.PARSER_MEDIA_TYPE),
					(j = Re === "application/xhtml+xml" ? ot : Ve),
					(G = Q(e, "ALLOWED_TAGS") ? O({}, e.ALLOWED_TAGS, j) : vt),
					(z = Q(e, "ALLOWED_ATTR") ? O({}, e.ALLOWED_ATTR, j) : At),
					(nt = Q(e, "ALLOWED_NAMESPACES")
						? O({}, e.ALLOWED_NAMESPACES, ot)
						: Nn),
					(et = Q(e, "ADD_URI_SAFE_ATTR")
						? O(ne(Dt), e.ADD_URI_SAFE_ATTR, j)
						: Dt),
					(Ot = Q(e, "ADD_DATA_URI_TAGS")
						? O(ne(Nt), e.ADD_DATA_URI_TAGS, j)
						: Nt),
					(ee = Q(e, "FORBID_CONTENTS") ? O({}, e.FORBID_CONTENTS, j) : $e),
					(Ae = Q(e, "FORBID_TAGS") ? O({}, e.FORBID_TAGS, j) : ne({})),
					(ke = Q(e, "FORBID_ATTR") ? O({}, e.FORBID_ATTR, j) : ne({})),
					(me = Q(e, "USE_PROFILES") ? e.USE_PROFILES : !1),
					(yt = e.ALLOW_ARIA_ATTR !== !1),
					(Ze = e.ALLOW_DATA_ATTR !== !1),
					(Rt = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
					(bt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
					(de = e.SAFE_FOR_TEMPLATES || !1),
					(Pe = e.SAFE_FOR_XML !== !1),
					(ce = e.WHOLE_DOCUMENT || !1),
					(pe = e.RETURN_DOM || !1),
					(Me = e.RETURN_DOM_FRAGMENT || !1),
					(Ue = e.RETURN_TRUSTED_TYPE || !1),
					(Qe = e.FORCE_BODY || !1),
					(St = e.SANITIZE_DOM !== !1),
					(Ct = e.SANITIZE_NAMED_PROPS || !1),
					(Je = e.KEEP_CONTENT !== !1),
					(ye = e.IN_PLACE || !1),
					(_t = e.ALLOWED_URI_REGEXP || Tn),
					(he = e.NAMESPACE || re),
					(je = e.MATHML_TEXT_INTEGRATION_POINTS || je),
					(Ge = e.HTML_INTEGRATION_POINTS || Ge),
					(F = e.CUSTOM_ELEMENT_HANDLING || {}),
					e.CUSTOM_ELEMENT_HANDLING &&
						xt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
						(F.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
					e.CUSTOM_ELEMENT_HANDLING &&
						xt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
						(F.attributeNameCheck =
							e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
					e.CUSTOM_ELEMENT_HANDLING &&
						typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
							"boolean" &&
						(F.allowCustomizedBuiltInElements =
							e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
					de && (Ze = !1),
					Me && (pe = !0),
					me &&
						((G = O({}, Wt)),
						(z = Xe(null)),
						me.html === !0 && (O(G, qt), O(z, Xt)),
						me.svg === !0 && (O(G, lt), O(z, ft), O(z, Be)),
						me.svgFilters === !0 && (O(G, ct), O(z, ft), O(z, Be)),
						me.mathMl === !0 && (O(G, ut), O(z, Vt), O(z, Be))),
					Q(e, "ADD_TAGS") || (oe.tagCheck = null),
					Q(e, "ADD_ATTR") || (oe.attributeCheck = null),
					e.ADD_TAGS &&
						(typeof e.ADD_TAGS == "function"
							? (oe.tagCheck = e.ADD_TAGS)
							: (G === vt && (G = ne(G)), O(G, e.ADD_TAGS, j))),
					e.ADD_ATTR &&
						(typeof e.ADD_ATTR == "function"
							? (oe.attributeCheck = e.ADD_ATTR)
							: (z === At && (z = ne(z)), O(z, e.ADD_ATTR, j))),
					e.ADD_URI_SAFE_ATTR && O(et, e.ADD_URI_SAFE_ATTR, j),
					e.FORBID_CONTENTS &&
						(ee === $e && (ee = ne(ee)), O(ee, e.FORBID_CONTENTS, j)),
					e.ADD_FORBID_CONTENTS &&
						(ee === $e && (ee = ne(ee)), O(ee, e.ADD_FORBID_CONTENTS, j)),
					Je && (G["#text"] = !0),
					ce && O(G, ["html", "head", "body"]),
					G.table && (O(G, ["tbody"]), delete Ae.tbody),
					e.TRUSTED_TYPES_POLICY)
				) {
					if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
						throw Ce(
							'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
						);
					if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
						throw Ce(
							'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
						);
					((S = e.TRUSTED_TYPES_POLICY), (n = S.createHTML("")));
				} else
					(S === void 0 && (S = fr(D, p)),
						S !== null && typeof n == "string" && (n = S.createHTML("")));
				(X && X(e), (ge = e));
			}
		},
		wt = O({}, [...lt, ...ct, ...er]),
		It = O({}, [...ut, ...tr]),
		Ln = function (e) {
			let u = k(e);
			(!u || !u.tagName) && (u = { namespaceURI: he, tagName: "template" });
			const h = Ve(e.tagName),
				M = Ve(u.tagName);
			return nt[e.namespaceURI]
				? e.namespaceURI === He
					? u.namespaceURI === re
						? h === "svg"
						: u.namespaceURI === Fe
							? h === "svg" && (M === "annotation-xml" || je[M])
							: !!wt[h]
					: e.namespaceURI === Fe
						? u.namespaceURI === re
							? h === "math"
							: u.namespaceURI === He
								? h === "math" && Ge[M]
								: !!It[h]
						: e.namespaceURI === re
							? (u.namespaceURI === He && !Ge[M]) ||
								(u.namespaceURI === Fe && !je[M])
								? !1
								: !It[h] && (Dn[h] || !wt[h])
							: !!(Re === "application/xhtml+xml" && nt[e.namespaceURI])
				: !1;
		},
		te = function (e) {
			be(r.removed, { element: e });
			try {
				k(e).removeChild(e);
			} catch {
				_(e);
			}
		},
		ue = function (e, u) {
			try {
				be(r.removed, { attribute: u.getAttributeNode(e), from: u });
			} catch {
				be(r.removed, { attribute: null, from: u });
			}
			if ((u.removeAttribute(e), e === "is"))
				if (pe || Me)
					try {
						te(u);
					} catch {}
				else
					try {
						u.setAttribute(e, "");
					} catch {}
		},
		Lt = function (e) {
			let u = null,
				h = null;
			if (Qe) e = "<remove></remove>" + e;
			else {
				const H = st(e, /^[\r\n\t ]+/);
				h = H && H[0];
			}
			Re === "application/xhtml+xml" &&
				he === re &&
				(e =
					'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
					e +
					"</body></html>");
			const M = S ? S.createHTML(e) : e;
			if (he === re)
				try {
					u = new w().parseFromString(M, Re);
				} catch {}
			if (!u || !u.documentElement) {
				u = a.createDocument(he, "template", null);
				try {
					u.documentElement.innerHTML = tt ? n : M;
				} catch {}
			}
			const q = u.body || u.documentElement;
			return (
				e && h && q.insertBefore(c.createTextNode(h), q.childNodes[0] || null),
				he === re
					? v.call(u, ce ? "html" : "body")[0]
					: ce
						? u.documentElement
						: q
			);
		},
		kt = function (e) {
			return l.call(
				e.ownerDocument || e,
				e,
				i.SHOW_ELEMENT |
					i.SHOW_COMMENT |
					i.SHOW_TEXT |
					i.SHOW_PROCESSING_INSTRUCTION |
					i.SHOW_CDATA_SECTION,
				null,
			);
		},
		it = function (e) {
			return (
				e instanceof g &&
				(typeof e.nodeName != "string" ||
					typeof e.textContent != "string" ||
					typeof e.removeChild != "function" ||
					!(e.attributes instanceof f) ||
					typeof e.removeAttribute != "function" ||
					typeof e.setAttribute != "function" ||
					typeof e.namespaceURI != "string" ||
					typeof e.insertBefore != "function" ||
					typeof e.hasChildNodes != "function")
			);
		},
		Pt = function (e) {
			return typeof d == "function" && e instanceof d;
		};
	function ie(E, e, u) {
		ze(E, (h) => {
			h.call(r, e, u, ge);
		});
	}
	const Mt = function (e) {
			let u = null;
			if ((ie(N.beforeSanitizeElements, e, null), it(e))) return (te(e), !0);
			const h = j(e.nodeName);
			if (
				(ie(N.uponSanitizeElement, e, { tagName: h, allowedTags: G }),
				(Pe &&
					e.hasChildNodes() &&
					!Pt(e.firstElementChild) &&
					W(/<[/\w!]/g, e.innerHTML) &&
					W(/<[/\w!]/g, e.textContent)) ||
					e.nodeType === Ne.progressingInstruction ||
					(Pe && e.nodeType === Ne.comment && W(/<[/\w]/g, e.data)))
			)
				return (te(e), !0);
			if (
				!(oe.tagCheck instanceof Function && oe.tagCheck(h)) &&
				(!G[h] || Ae[h])
			) {
				if (
					!Ae[h] &&
					Ft(h) &&
					((F.tagNameCheck instanceof RegExp && W(F.tagNameCheck, h)) ||
						(F.tagNameCheck instanceof Function && F.tagNameCheck(h)))
				)
					return !1;
				if (Je && !ee[h]) {
					const M = k(e) || e.parentNode,
						q = U(e) || e.childNodes;
					if (q && M) {
						const H = q.length;
						for (let Y = H - 1; Y >= 0; --Y) {
							const ae = y(q[Y], !0);
							((ae.__removalCount = (e.__removalCount || 0) + 1),
								M.insertBefore(ae, b(e)));
						}
					}
				}
				return (te(e), !0);
			}
			return (e instanceof s && !Ln(e)) ||
				((h === "noscript" || h === "noembed" || h === "noframes") &&
					W(/<\/no(script|embed|frames)/i, e.innerHTML))
				? (te(e), !0)
				: (de &&
						e.nodeType === Ne.text &&
						((u = e.textContent),
						ze([Z, le, x], (M) => {
							u = Se(u, M, " ");
						}),
						e.textContent !== u &&
							(be(r.removed, { element: e.cloneNode() }), (e.textContent = u))),
					ie(N.afterSanitizeElements, e, null),
					!1);
		},
		Ut = function (e, u, h) {
			if (ke[u] || (St && (u === "id" || u === "name") && (h in c || h in In)))
				return !1;
			if (!(Ze && !ke[u] && W(C, u))) {
				if (!(yt && W(K, u))) {
					if (
						!(oe.attributeCheck instanceof Function && oe.attributeCheck(u, e))
					) {
						if (!z[u] || ke[u]) {
							if (
								!(
									(Ft(e) &&
										((F.tagNameCheck instanceof RegExp &&
											W(F.tagNameCheck, e)) ||
											(F.tagNameCheck instanceof Function &&
												F.tagNameCheck(e))) &&
										((F.attributeNameCheck instanceof RegExp &&
											W(F.attributeNameCheck, u)) ||
											(F.attributeNameCheck instanceof Function &&
												F.attributeNameCheck(u, e)))) ||
									(u === "is" &&
										F.allowCustomizedBuiltInElements &&
										((F.tagNameCheck instanceof RegExp &&
											W(F.tagNameCheck, h)) ||
											(F.tagNameCheck instanceof Function &&
												F.tagNameCheck(h))))
								)
							)
								return !1;
						} else if (!et[u]) {
							if (!W(_t, Se(h, Tt, ""))) {
								if (
									!(
										(u === "src" || u === "xlink:href" || u === "href") &&
										e !== "script" &&
										Kn(h, "data:") === 0 &&
										Ot[e]
									)
								) {
									if (!(Rt && !W(Ye, Se(h, Tt, "")))) {
										if (h) return !1;
									}
								}
							}
						}
					}
				}
			}
			return !0;
		},
		Ft = function (e) {
			return e !== "annotation-xml" && st(e, Cn);
		},
		Ht = function (e) {
			ie(N.beforeSanitizeAttributes, e, null);
			const { attributes: u } = e;
			if (!u || it(e)) return;
			const h = {
				attrName: "",
				attrValue: "",
				keepAttr: !0,
				allowedAttributes: z,
				forceKeepAttr: void 0,
			};
			let M = u.length;
			for (; M--; ) {
				const q = u[M],
					{ name: H, namespaceURI: Y, value: ae } = q,
					Ee = j(H),
					at = ae;
				let B = H === "value" ? at : Qn(at);
				if (
					((h.attrName = Ee),
					(h.attrValue = B),
					(h.keepAttr = !0),
					(h.forceKeepAttr = void 0),
					ie(N.uponSanitizeAttribute, e, h),
					(B = h.attrValue),
					Ct && (Ee === "id" || Ee === "name") && (ue(H, e), (B = On + B)),
					Pe &&
						W(
							/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
							B,
						))
				) {
					ue(H, e);
					continue;
				}
				if (Ee === "attributename" && st(B, "href")) {
					ue(H, e);
					continue;
				}
				if (h.forceKeepAttr) continue;
				if (!h.keepAttr) {
					ue(H, e);
					continue;
				}
				if (!bt && W(/\/>/i, B)) {
					ue(H, e);
					continue;
				}
				de &&
					ze([Z, le, x], (Gt) => {
						B = Se(B, Gt, " ");
					});
				const jt = j(e.nodeName);
				if (!Ut(jt, Ee, B)) {
					ue(H, e);
					continue;
				}
				if (
					S &&
					typeof D == "object" &&
					typeof D.getAttributeType == "function" &&
					!Y
				)
					switch (D.getAttributeType(jt, Ee)) {
						case "TrustedHTML": {
							B = S.createHTML(B);
							break;
						}
						case "TrustedScriptURL": {
							B = S.createScriptURL(B);
							break;
						}
					}
				if (B !== at)
					try {
						(Y ? e.setAttributeNS(Y, H, B) : e.setAttribute(H, B),
							it(e) ? te(e) : Bt(r.removed));
					} catch {
						ue(H, e);
					}
			}
			ie(N.afterSanitizeAttributes, e, null);
		},
		kn = function E(e) {
			let u = null;
			const h = kt(e);
			for (ie(N.beforeSanitizeShadowDOM, e, null); (u = h.nextNode()); )
				(ie(N.uponSanitizeShadowNode, u, null),
					Mt(u),
					Ht(u),
					u.content instanceof m && E(u.content));
			ie(N.afterSanitizeShadowDOM, e, null);
		};
	return (
		(r.sanitize = function (E) {
			let e =
					arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
				u = null,
				h = null,
				M = null,
				q = null;
			if (((tt = !E), tt && (E = "<!-->"), typeof E != "string" && !Pt(E)))
				if (typeof E.toString == "function") {
					if (((E = E.toString()), typeof E != "string"))
						throw Ce("dirty is not a string, aborting");
				} else throw Ce("toString is not a function");
			if (!r.isSupported) return E;
			if (
				(Ke || rt(e), (r.removed = []), typeof E == "string" && (ye = !1), ye)
			) {
				if (E.nodeName) {
					const ae = j(E.nodeName);
					if (!G[ae] || Ae[ae])
						throw Ce("root node is forbidden and cannot be sanitized in-place");
				}
			} else if (E instanceof d)
				((u = Lt("<!---->")),
					(h = u.ownerDocument.importNode(E, !0)),
					(h.nodeType === Ne.element && h.nodeName === "BODY") ||
					h.nodeName === "HTML"
						? (u = h)
						: u.appendChild(h));
			else {
				if (!pe && !de && !ce && E.indexOf("<") === -1)
					return S && Ue ? S.createHTML(E) : E;
				if (((u = Lt(E)), !u)) return pe ? null : Ue ? n : "";
			}
			u && Qe && te(u.firstChild);
			const H = kt(ye ? E : u);
			for (; (M = H.nextNode()); )
				(Mt(M), Ht(M), M.content instanceof m && kn(M.content));
			if (ye) return E;
			if (pe) {
				if (Me)
					for (q = T.call(u.ownerDocument); u.firstChild; )
						q.appendChild(u.firstChild);
				else q = u;
				return (
					(z.shadowroot || z.shadowrootmode) && (q = L.call(o, q, !0)), q
				);
			}
			let Y = ce ? u.outerHTML : u.innerHTML;
			return (
				ce &&
					G["!doctype"] &&
					u.ownerDocument &&
					u.ownerDocument.doctype &&
					u.ownerDocument.doctype.name &&
					W(_n, u.ownerDocument.doctype.name) &&
					(Y =
						"<!DOCTYPE " +
						u.ownerDocument.doctype.name +
						`>
` +
						Y),
				de &&
					ze([Z, le, x], (ae) => {
						Y = Se(Y, ae, " ");
					}),
				S && Ue ? S.createHTML(Y) : Y
			);
		}),
		(r.setConfig = function () {
			let E =
				arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			(rt(E), (Ke = !0));
		}),
		(r.clearConfig = function () {
			((ge = null), (Ke = !1));
		}),
		(r.isValidAttribute = function (E, e, u) {
			ge || rt({});
			const h = j(E),
				M = j(e);
			return Ut(h, M, u);
		}),
		(r.addHook = function (E, e) {
			typeof e == "function" && be(N[E], e);
		}),
		(r.removeHook = function (E, e) {
			if (e !== void 0) {
				const u = Yn(N[E], e);
				return u === -1 ? void 0 : Zn(N[E], u, 1)[0];
			}
			return Bt(N[E]);
		}),
		(r.removeHooks = function (E) {
			N[E] = [];
		}),
		(r.removeAllHooks = function () {
			N = Zt();
		}),
		r
	);
}
var dr = vn(),
	De = {},
	Te = {},
	qe = {},
	se = {},
	fe = {},
	dt = {},
	Kt;
function An() {
	return (
		Kt ||
			((Kt = 1),
			(function (t) {
				(Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.Doctype =
						t.CDATA =
						t.Tag =
						t.Style =
						t.Script =
						t.Comment =
						t.Directive =
						t.Text =
						t.Root =
						t.isTag =
						t.ElementType =
							void 0));
				var r;
				(function (o) {
					((o.Root = "root"),
						(o.Text = "text"),
						(o.Directive = "directive"),
						(o.Comment = "comment"),
						(o.Script = "script"),
						(o.Style = "style"),
						(o.Tag = "tag"),
						(o.CDATA = "cdata"),
						(o.Doctype = "doctype"));
				})((r = t.ElementType || (t.ElementType = {})));
				function c(o) {
					return o.type === r.Tag || o.type === r.Script || o.type === r.Style;
				}
				((t.isTag = c),
					(t.Root = r.Root),
					(t.Text = r.Text),
					(t.Directive = r.Directive),
					(t.Comment = r.Comment),
					(t.Script = r.Script),
					(t.Style = r.Style),
					(t.Tag = r.Tag),
					(t.CDATA = r.CDATA),
					(t.Doctype = r.Doctype));
			})(dt)),
		dt
	);
}
var R = {},
	Qt;
function Jt() {
	if (Qt) return R;
	Qt = 1;
	var t =
			(R && R.__extends) ||
			(function () {
				var n = function (a, l) {
					return (
						(n =
							Object.setPrototypeOf ||
							({ __proto__: [] } instanceof Array &&
								function (T, v) {
									T.__proto__ = v;
								}) ||
							function (T, v) {
								for (var L in v)
									Object.prototype.hasOwnProperty.call(v, L) && (T[L] = v[L]);
							}),
						n(a, l)
					);
				};
				return function (a, l) {
					if (typeof l != "function" && l !== null)
						throw new TypeError(
							"Class extends value " +
								String(l) +
								" is not a constructor or null",
						);
					n(a, l);
					function T() {
						this.constructor = a;
					}
					a.prototype =
						l === null
							? Object.create(l)
							: ((T.prototype = l.prototype), new T());
				};
			})(),
		r =
			(R && R.__assign) ||
			function () {
				return (
					(r =
						Object.assign ||
						function (n) {
							for (var a, l = 1, T = arguments.length; l < T; l++) {
								a = arguments[l];
								for (var v in a)
									Object.prototype.hasOwnProperty.call(a, v) && (n[v] = a[v]);
							}
							return n;
						}),
					r.apply(this, arguments)
				);
			};
	(Object.defineProperty(R, "__esModule", { value: !0 }),
		(R.cloneNode =
			R.hasChildren =
			R.isDocument =
			R.isDirective =
			R.isComment =
			R.isText =
			R.isCDATA =
			R.isTag =
			R.Element =
			R.Document =
			R.CDATA =
			R.NodeWithChildren =
			R.ProcessingInstruction =
			R.Comment =
			R.Text =
			R.DataNode =
			R.Node =
				void 0));
	var c = An(),
		o = (function () {
			function n() {
				((this.parent = null),
					(this.prev = null),
					(this.next = null),
					(this.startIndex = null),
					(this.endIndex = null));
			}
			return (
				Object.defineProperty(n.prototype, "parentNode", {
					get: function () {
						return this.parent;
					},
					set: function (a) {
						this.parent = a;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(n.prototype, "previousSibling", {
					get: function () {
						return this.prev;
					},
					set: function (a) {
						this.prev = a;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(n.prototype, "nextSibling", {
					get: function () {
						return this.next;
					},
					set: function (a) {
						this.next = a;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(n.prototype.cloneNode = function (a) {
					return (a === void 0 && (a = !1), k(this, a));
				}),
				n
			);
		})();
	R.Node = o;
	var p = (function (n) {
		t(a, n);
		function a(l) {
			var T = n.call(this) || this;
			return ((T.data = l), T);
		}
		return (
			Object.defineProperty(a.prototype, "nodeValue", {
				get: function () {
					return this.data;
				},
				set: function (l) {
					this.data = l;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(o);
	R.DataNode = p;
	var m = (function (n) {
		t(a, n);
		function a() {
			var l = (n !== null && n.apply(this, arguments)) || this;
			return ((l.type = c.ElementType.Text), l);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 3;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(p);
	R.Text = m;
	var A = (function (n) {
		t(a, n);
		function a() {
			var l = (n !== null && n.apply(this, arguments)) || this;
			return ((l.type = c.ElementType.Comment), l);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 8;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(p);
	R.Comment = A;
	var d = (function (n) {
		t(a, n);
		function a(l, T) {
			var v = n.call(this, T) || this;
			return ((v.name = l), (v.type = c.ElementType.Directive), v);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 1;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(p);
	R.ProcessingInstruction = d;
	var s = (function (n) {
		t(a, n);
		function a(l) {
			var T = n.call(this) || this;
			return ((T.children = l), T);
		}
		return (
			Object.defineProperty(a.prototype, "firstChild", {
				get: function () {
					var l;
					return (l = this.children[0]) !== null && l !== void 0 ? l : null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(a.prototype, "lastChild", {
				get: function () {
					return this.children.length > 0
						? this.children[this.children.length - 1]
						: null;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(a.prototype, "childNodes", {
				get: function () {
					return this.children;
				},
				set: function (l) {
					this.children = l;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(o);
	R.NodeWithChildren = s;
	var i = (function (n) {
		t(a, n);
		function a() {
			var l = (n !== null && n.apply(this, arguments)) || this;
			return ((l.type = c.ElementType.CDATA), l);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 4;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(s);
	R.CDATA = i;
	var f = (function (n) {
		t(a, n);
		function a() {
			var l = (n !== null && n.apply(this, arguments)) || this;
			return ((l.type = c.ElementType.Root), l);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 9;
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(s);
	R.Document = f;
	var g = (function (n) {
		t(a, n);
		function a(l, T, v, L) {
			(v === void 0 && (v = []),
				L === void 0 &&
					(L =
						l === "script"
							? c.ElementType.Script
							: l === "style"
								? c.ElementType.Style
								: c.ElementType.Tag));
			var N = n.call(this, v) || this;
			return ((N.name = l), (N.attribs = T), (N.type = L), N);
		}
		return (
			Object.defineProperty(a.prototype, "nodeType", {
				get: function () {
					return 1;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(a.prototype, "tagName", {
				get: function () {
					return this.name;
				},
				set: function (l) {
					this.name = l;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(a.prototype, "attributes", {
				get: function () {
					var l = this;
					return Object.keys(this.attribs).map(function (T) {
						var v, L;
						return {
							name: T,
							value: l.attribs[T],
							namespace:
								(v = l["x-attribsNamespace"]) === null || v === void 0
									? void 0
									: v[T],
							prefix:
								(L = l["x-attribsPrefix"]) === null || L === void 0
									? void 0
									: L[T],
						};
					});
				},
				enumerable: !1,
				configurable: !0,
			}),
			a
		);
	})(s);
	R.Element = g;
	function w(n) {
		return (0, c.isTag)(n);
	}
	R.isTag = w;
	function D(n) {
		return n.type === c.ElementType.CDATA;
	}
	R.isCDATA = D;
	function I(n) {
		return n.type === c.ElementType.Text;
	}
	R.isText = I;
	function y(n) {
		return n.type === c.ElementType.Comment;
	}
	R.isComment = y;
	function _(n) {
		return n.type === c.ElementType.Directive;
	}
	R.isDirective = _;
	function b(n) {
		return n.type === c.ElementType.Root;
	}
	R.isDocument = b;
	function U(n) {
		return Object.prototype.hasOwnProperty.call(n, "children");
	}
	R.hasChildren = U;
	function k(n, a) {
		a === void 0 && (a = !1);
		var l;
		if (I(n)) l = new m(n.data);
		else if (y(n)) l = new A(n.data);
		else if (w(n)) {
			var T = a ? S(n.children) : [],
				v = new g(n.name, r({}, n.attribs), T);
			(T.forEach(function (le) {
				return (le.parent = v);
			}),
				n.namespace != null && (v.namespace = n.namespace),
				n["x-attribsNamespace"] &&
					(v["x-attribsNamespace"] = r({}, n["x-attribsNamespace"])),
				n["x-attribsPrefix"] &&
					(v["x-attribsPrefix"] = r({}, n["x-attribsPrefix"])),
				(l = v));
		} else if (D(n)) {
			var T = a ? S(n.children) : [],
				L = new i(T);
			(T.forEach(function (x) {
				return (x.parent = L);
			}),
				(l = L));
		} else if (b(n)) {
			var T = a ? S(n.children) : [],
				N = new f(T);
			(T.forEach(function (x) {
				return (x.parent = N);
			}),
				n["x-mode"] && (N["x-mode"] = n["x-mode"]),
				(l = N));
		} else if (_(n)) {
			var Z = new d(n.name, n.data);
			(n["x-name"] != null &&
				((Z["x-name"] = n["x-name"]),
				(Z["x-publicId"] = n["x-publicId"]),
				(Z["x-systemId"] = n["x-systemId"])),
				(l = Z));
		} else throw new Error("Not implemented yet: ".concat(n.type));
		return (
			(l.startIndex = n.startIndex),
			(l.endIndex = n.endIndex),
			n.sourceCodeLocation != null &&
				(l.sourceCodeLocation = n.sourceCodeLocation),
			l
		);
	}
	R.cloneNode = k;
	function S(n) {
		for (
			var a = n.map(function (T) {
					return k(T, !0);
				}),
				l = 1;
			l < a.length;
			l++
		)
			((a[l].prev = a[l - 1]), (a[l - 1].next = a[l]));
		return a;
	}
	return R;
}
var $t;
function yn() {
	return (
		$t ||
			(($t = 1),
			(function (t) {
				var r =
						(fe && fe.__createBinding) ||
						(Object.create
							? function (d, s, i, f) {
									f === void 0 && (f = i);
									var g = Object.getOwnPropertyDescriptor(s, i);
									((!g ||
										("get" in g
											? !s.__esModule
											: g.writable || g.configurable)) &&
										(g = {
											enumerable: !0,
											get: function () {
												return s[i];
											},
										}),
										Object.defineProperty(d, f, g));
								}
							: function (d, s, i, f) {
									(f === void 0 && (f = i), (d[f] = s[i]));
								}),
					c =
						(fe && fe.__exportStar) ||
						function (d, s) {
							for (var i in d)
								i !== "default" &&
									!Object.prototype.hasOwnProperty.call(s, i) &&
									r(s, d, i);
						};
				(Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.DomHandler = void 0));
				var o = An(),
					p = Jt();
				c(Jt(), t);
				var m = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
					A = (function () {
						function d(s, i, f) {
							((this.dom = []),
								(this.root = new p.Document(this.dom)),
								(this.done = !1),
								(this.tagStack = [this.root]),
								(this.lastNode = null),
								(this.parser = null),
								typeof i == "function" && ((f = i), (i = m)),
								typeof s == "object" && ((i = s), (s = void 0)),
								(this.callback = s ?? null),
								(this.options = i ?? m),
								(this.elementCB = f ?? null));
						}
						return (
							(d.prototype.onparserinit = function (s) {
								this.parser = s;
							}),
							(d.prototype.onreset = function () {
								((this.dom = []),
									(this.root = new p.Document(this.dom)),
									(this.done = !1),
									(this.tagStack = [this.root]),
									(this.lastNode = null),
									(this.parser = null));
							}),
							(d.prototype.onend = function () {
								this.done ||
									((this.done = !0),
									(this.parser = null),
									this.handleCallback(null));
							}),
							(d.prototype.onerror = function (s) {
								this.handleCallback(s);
							}),
							(d.prototype.onclosetag = function () {
								this.lastNode = null;
								var s = this.tagStack.pop();
								(this.options.withEndIndices &&
									(s.endIndex = this.parser.endIndex),
									this.elementCB && this.elementCB(s));
							}),
							(d.prototype.onopentag = function (s, i) {
								var f = this.options.xmlMode ? o.ElementType.Tag : void 0,
									g = new p.Element(s, i, void 0, f);
								(this.addNode(g), this.tagStack.push(g));
							}),
							(d.prototype.ontext = function (s) {
								var i = this.lastNode;
								if (i && i.type === o.ElementType.Text)
									((i.data += s),
										this.options.withEndIndices &&
											(i.endIndex = this.parser.endIndex));
								else {
									var f = new p.Text(s);
									(this.addNode(f), (this.lastNode = f));
								}
							}),
							(d.prototype.oncomment = function (s) {
								if (
									this.lastNode &&
									this.lastNode.type === o.ElementType.Comment
								) {
									this.lastNode.data += s;
									return;
								}
								var i = new p.Comment(s);
								(this.addNode(i), (this.lastNode = i));
							}),
							(d.prototype.oncommentend = function () {
								this.lastNode = null;
							}),
							(d.prototype.oncdatastart = function () {
								var s = new p.Text(""),
									i = new p.CDATA([s]);
								(this.addNode(i), (s.parent = i), (this.lastNode = s));
							}),
							(d.prototype.oncdataend = function () {
								this.lastNode = null;
							}),
							(d.prototype.onprocessinginstruction = function (s, i) {
								var f = new p.ProcessingInstruction(s, i);
								this.addNode(f);
							}),
							(d.prototype.handleCallback = function (s) {
								if (typeof this.callback == "function")
									this.callback(s, this.dom);
								else if (s) throw s;
							}),
							(d.prototype.addNode = function (s) {
								var i = this.tagStack[this.tagStack.length - 1],
									f = i.children[i.children.length - 1];
								(this.options.withStartIndices &&
									(s.startIndex = this.parser.startIndex),
									this.options.withEndIndices &&
										(s.endIndex = this.parser.endIndex),
									i.children.push(s),
									f && ((s.prev = f), (f.next = s)),
									(s.parent = i),
									(this.lastNode = null));
							}),
							d
						);
					})();
				((t.DomHandler = A), (t.default = A));
			})(fe)),
		fe
	);
}
var pt = {},
	en;
function pr() {
	return (
		en ||
			((en = 1),
			(function (t) {
				(Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.CARRIAGE_RETURN_PLACEHOLDER_REGEX =
						t.CARRIAGE_RETURN_PLACEHOLDER =
						t.CARRIAGE_RETURN_REGEX =
						t.CARRIAGE_RETURN =
						t.CASE_SENSITIVE_TAG_NAMES_MAP =
						t.CASE_SENSITIVE_TAG_NAMES =
							void 0),
					(t.CASE_SENSITIVE_TAG_NAMES = [
						"animateMotion",
						"animateTransform",
						"clipPath",
						"feBlend",
						"feColorMatrix",
						"feComponentTransfer",
						"feComposite",
						"feConvolveMatrix",
						"feDiffuseLighting",
						"feDisplacementMap",
						"feDropShadow",
						"feFlood",
						"feFuncA",
						"feFuncB",
						"feFuncG",
						"feFuncR",
						"feGaussianBlur",
						"feImage",
						"feMerge",
						"feMergeNode",
						"feMorphology",
						"feOffset",
						"fePointLight",
						"feSpecularLighting",
						"feSpotLight",
						"feTile",
						"feTurbulence",
						"foreignObject",
						"linearGradient",
						"radialGradient",
						"textPath",
					]),
					(t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce(
						function (r, c) {
							return ((r[c.toLowerCase()] = c), r);
						},
						{},
					)),
					(t.CARRIAGE_RETURN = "\r"),
					(t.CARRIAGE_RETURN_REGEX = new RegExp(t.CARRIAGE_RETURN, "g")),
					(t.CARRIAGE_RETURN_PLACEHOLDER =
						"__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(
							Date.now().toString(),
							"__",
						)),
					(t.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(
						t.CARRIAGE_RETURN_PLACEHOLDER,
						"g",
					)));
			})(pt)),
		pt
	);
}
var tn;
function Rn() {
	if (tn) return se;
	((tn = 1),
		Object.defineProperty(se, "__esModule", { value: !0 }),
		(se.formatAttributes = o),
		(se.hasOpenTag = m),
		(se.escapeSpecialCharacters = A),
		(se.revertEscapedCharacters = d),
		(se.formatDOM = s));
	var t = yn(),
		r = pr();
	function c(i) {
		return r.CASE_SENSITIVE_TAG_NAMES_MAP[i];
	}
	function o(i) {
		for (var f = {}, g = 0, w = i.length; g < w; g++) {
			var D = i[g];
			f[D.name] = D.value;
		}
		return f;
	}
	function p(i) {
		i = i.toLowerCase();
		var f = c(i);
		return f || i;
	}
	function m(i, f) {
		var g = "<" + f,
			w = i.toLowerCase().indexOf(g);
		if (w === -1) return !1;
		var D = i[w + g.length];
		return (
			D === ">" ||
			D === " " ||
			D === "	" ||
			D ===
				`
` ||
			D === "\r" ||
			D === "/"
		);
	}
	function A(i) {
		return i.replace(r.CARRIAGE_RETURN_REGEX, r.CARRIAGE_RETURN_PLACEHOLDER);
	}
	function d(i) {
		return i.replace(r.CARRIAGE_RETURN_PLACEHOLDER_REGEX, r.CARRIAGE_RETURN);
	}
	function s(i, f, g) {
		var w, D, I, y;
		f === void 0 && (f = null);
		for (var _ = [], b, U = 0, k = i.length; U < k; U++) {
			var S = i[U];
			switch (S.nodeType) {
				case 1: {
					var n = p(S.nodeName);
					((b = new t.Element(n, o(S.attributes))),
						(b.children = s(
							n === "template" ? S.content.childNodes : S.childNodes,
							b,
						)));
					break;
				}
				case 3:
					b = new t.Text(
						d((w = S.nodeValue) !== null && w !== void 0 ? w : ""),
					);
					break;
				case 8:
					b = new t.Comment(
						(D = S.nodeValue) !== null && D !== void 0 ? D : "",
					);
					break;
				default:
					continue;
			}
			var a = (I = _[U - 1]) !== null && I !== void 0 ? I : null;
			(a && (a.next = b),
				(b.parent = f),
				(b.prev = a),
				(b.next = null),
				_.push(b));
		}
		return (
			g &&
				((b = new t.ProcessingInstruction(
					g.substring(0, g.indexOf(" ")).toLowerCase(),
					g,
				)),
				(b.next = (y = _[0]) !== null && y !== void 0 ? y : null),
				(b.parent = f),
				_.unshift(b),
				_[1] && (_[1].prev = _[0])),
			_
		);
	}
	return se;
}
var nn;
function mr() {
	if (nn) return qe;
	((nn = 1),
		Object.defineProperty(qe, "__esModule", { value: !0 }),
		(qe.default = I));
	var t = Rn(),
		r = "html",
		c = "head",
		o = "body",
		p = /<([a-zA-Z]+[0-9]?)/,
		m = function (y, _) {
			throw new Error(
				"This browser does not support `document.implementation.createHTMLDocument`",
			);
		},
		A = function (y, _) {
			throw new Error(
				"This browser does not support `DOMParser.prototype.parseFromString`",
			);
		},
		d = typeof window == "object" && window.DOMParser;
	if (typeof d == "function") {
		var s = new d(),
			i = "text/html";
		((A = function (y, _) {
			return (
				_ && (y = "<".concat(_, ">").concat(y, "</").concat(_, ">")),
				s.parseFromString(y, i)
			);
		}),
			(m = A));
	}
	if (typeof document == "object" && document.implementation) {
		var f = document.implementation.createHTMLDocument();
		m = function (y, _) {
			if (_) {
				var b = f.documentElement.querySelector(_);
				return (b && (b.innerHTML = y), f);
			}
			return ((f.documentElement.innerHTML = y), f);
		};
	}
	var g = typeof document == "object" && document.createElement("template"),
		w;
	g &&
		g.content &&
		(w = function (y) {
			return ((g.innerHTML = y), g.content.childNodes);
		});
	var D = function () {
		return document.createDocumentFragment().childNodes;
	};
	function I(y) {
		var _, b, U, k, S, n;
		y = (0, t.escapeSpecialCharacters)(y);
		var a = p.exec(y),
			l = (_ = a?.[1]) === null || _ === void 0 ? void 0 : _.toLowerCase();
		switch (l) {
			case r: {
				var T = A(y);
				if (!(0, t.hasOpenTag)(y, c)) {
					var v = T.querySelector(c);
					(b = v?.parentNode) === null || b === void 0 || b.removeChild(v);
				}
				if (!(0, t.hasOpenTag)(y, o)) {
					var v = T.querySelector(o);
					(U = v?.parentNode) === null || U === void 0 || U.removeChild(v);
				}
				return T.querySelectorAll(r);
			}
			case c:
			case o: {
				var L = m(y).querySelectorAll(l);
				return (0, t.hasOpenTag)(y, o) && (0, t.hasOpenTag)(y, c)
					? (S =
							(k = L[0].parentNode) === null || k === void 0
								? void 0
								: k.childNodes) !== null && S !== void 0
						? S
						: D()
					: L;
			}
			default: {
				if (w) return w(y);
				var v = m(y, o).querySelector(o);
				return (n = v?.childNodes) !== null && n !== void 0 ? n : D();
			}
		}
	}
	return qe;
}
var rn;
function hr() {
	if (rn) return Te;
	rn = 1;
	var t =
		(Te && Te.__importDefault) ||
		function (m) {
			return m && m.__esModule ? m : { default: m };
		};
	(Object.defineProperty(Te, "__esModule", { value: !0 }), (Te.default = p));
	var r = t(mr()),
		c = Rn(),
		o = /<(![a-zA-Z\s]+)>/;
	function p(m) {
		if (typeof m != "string")
			throw new TypeError("First argument must be a string");
		if (!m) return [];
		var A = o.exec(m),
			d = A ? A[1] : void 0;
		return (0, c.formatDOM)((0, r.default)(m), null, d);
	}
	return Te;
}
var We = {},
	J = {},
	xe = {},
	an;
function gr() {
	if (an) return xe;
	an = 1;
	var t = 0;
	xe.SAME = t;
	var r = 1;
	return (
		(xe.CAMELCASE = r),
		(xe.possibleStandardNames = {
			accept: 0,
			acceptCharset: 1,
			"accept-charset": "acceptCharset",
			accessKey: 1,
			action: 0,
			allowFullScreen: 1,
			alt: 0,
			as: 0,
			async: 0,
			autoCapitalize: 1,
			autoComplete: 1,
			autoCorrect: 1,
			autoFocus: 1,
			autoPlay: 1,
			autoSave: 1,
			capture: 0,
			cellPadding: 1,
			cellSpacing: 1,
			challenge: 0,
			charSet: 1,
			checked: 0,
			children: 0,
			cite: 0,
			class: "className",
			classID: 1,
			className: 1,
			cols: 0,
			colSpan: 1,
			content: 0,
			contentEditable: 1,
			contextMenu: 1,
			controls: 0,
			controlsList: 1,
			coords: 0,
			crossOrigin: 1,
			dangerouslySetInnerHTML: 1,
			data: 0,
			dateTime: 1,
			default: 0,
			defaultChecked: 1,
			defaultValue: 1,
			defer: 0,
			dir: 0,
			disabled: 0,
			disablePictureInPicture: 1,
			disableRemotePlayback: 1,
			download: 0,
			draggable: 0,
			encType: 1,
			enterKeyHint: 1,
			for: "htmlFor",
			form: 0,
			formMethod: 1,
			formAction: 1,
			formEncType: 1,
			formNoValidate: 1,
			formTarget: 1,
			frameBorder: 1,
			headers: 0,
			height: 0,
			hidden: 0,
			high: 0,
			href: 0,
			hrefLang: 1,
			htmlFor: 1,
			httpEquiv: 1,
			"http-equiv": "httpEquiv",
			icon: 0,
			id: 0,
			innerHTML: 1,
			inputMode: 1,
			integrity: 0,
			is: 0,
			itemID: 1,
			itemProp: 1,
			itemRef: 1,
			itemScope: 1,
			itemType: 1,
			keyParams: 1,
			keyType: 1,
			kind: 0,
			label: 0,
			lang: 0,
			list: 0,
			loop: 0,
			low: 0,
			manifest: 0,
			marginWidth: 1,
			marginHeight: 1,
			max: 0,
			maxLength: 1,
			media: 0,
			mediaGroup: 1,
			method: 0,
			min: 0,
			minLength: 1,
			multiple: 0,
			muted: 0,
			name: 0,
			noModule: 1,
			nonce: 0,
			noValidate: 1,
			open: 0,
			optimum: 0,
			pattern: 0,
			placeholder: 0,
			playsInline: 1,
			poster: 0,
			preload: 0,
			profile: 0,
			radioGroup: 1,
			readOnly: 1,
			referrerPolicy: 1,
			rel: 0,
			required: 0,
			reversed: 0,
			role: 0,
			rows: 0,
			rowSpan: 1,
			sandbox: 0,
			scope: 0,
			scoped: 0,
			scrolling: 0,
			seamless: 0,
			selected: 0,
			shape: 0,
			size: 0,
			sizes: 0,
			span: 0,
			spellCheck: 1,
			src: 0,
			srcDoc: 1,
			srcLang: 1,
			srcSet: 1,
			start: 0,
			step: 0,
			style: 0,
			summary: 0,
			tabIndex: 1,
			target: 0,
			title: 0,
			type: 0,
			useMap: 1,
			value: 0,
			width: 0,
			wmode: 0,
			wrap: 0,
			about: 0,
			accentHeight: 1,
			"accent-height": "accentHeight",
			accumulate: 0,
			additive: 0,
			alignmentBaseline: 1,
			"alignment-baseline": "alignmentBaseline",
			allowReorder: 1,
			alphabetic: 0,
			amplitude: 0,
			arabicForm: 1,
			"arabic-form": "arabicForm",
			ascent: 0,
			attributeName: 1,
			attributeType: 1,
			autoReverse: 1,
			azimuth: 0,
			baseFrequency: 1,
			baselineShift: 1,
			"baseline-shift": "baselineShift",
			baseProfile: 1,
			bbox: 0,
			begin: 0,
			bias: 0,
			by: 0,
			calcMode: 1,
			capHeight: 1,
			"cap-height": "capHeight",
			clip: 0,
			clipPath: 1,
			"clip-path": "clipPath",
			clipPathUnits: 1,
			clipRule: 1,
			"clip-rule": "clipRule",
			color: 0,
			colorInterpolation: 1,
			"color-interpolation": "colorInterpolation",
			colorInterpolationFilters: 1,
			"color-interpolation-filters": "colorInterpolationFilters",
			colorProfile: 1,
			"color-profile": "colorProfile",
			colorRendering: 1,
			"color-rendering": "colorRendering",
			contentScriptType: 1,
			contentStyleType: 1,
			cursor: 0,
			cx: 0,
			cy: 0,
			d: 0,
			datatype: 0,
			decelerate: 0,
			descent: 0,
			diffuseConstant: 1,
			direction: 0,
			display: 0,
			divisor: 0,
			dominantBaseline: 1,
			"dominant-baseline": "dominantBaseline",
			dur: 0,
			dx: 0,
			dy: 0,
			edgeMode: 1,
			elevation: 0,
			enableBackground: 1,
			"enable-background": "enableBackground",
			end: 0,
			exponent: 0,
			externalResourcesRequired: 1,
			fill: 0,
			fillOpacity: 1,
			"fill-opacity": "fillOpacity",
			fillRule: 1,
			"fill-rule": "fillRule",
			filter: 0,
			filterRes: 1,
			filterUnits: 1,
			floodOpacity: 1,
			"flood-opacity": "floodOpacity",
			floodColor: 1,
			"flood-color": "floodColor",
			focusable: 0,
			fontFamily: 1,
			"font-family": "fontFamily",
			fontSize: 1,
			"font-size": "fontSize",
			fontSizeAdjust: 1,
			"font-size-adjust": "fontSizeAdjust",
			fontStretch: 1,
			"font-stretch": "fontStretch",
			fontStyle: 1,
			"font-style": "fontStyle",
			fontVariant: 1,
			"font-variant": "fontVariant",
			fontWeight: 1,
			"font-weight": "fontWeight",
			format: 0,
			from: 0,
			fx: 0,
			fy: 0,
			g1: 0,
			g2: 0,
			glyphName: 1,
			"glyph-name": "glyphName",
			glyphOrientationHorizontal: 1,
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphOrientationVertical: 1,
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphRef: 1,
			gradientTransform: 1,
			gradientUnits: 1,
			hanging: 0,
			horizAdvX: 1,
			"horiz-adv-x": "horizAdvX",
			horizOriginX: 1,
			"horiz-origin-x": "horizOriginX",
			ideographic: 0,
			imageRendering: 1,
			"image-rendering": "imageRendering",
			in2: 0,
			in: 0,
			inlist: 0,
			intercept: 0,
			k1: 0,
			k2: 0,
			k3: 0,
			k4: 0,
			k: 0,
			kernelMatrix: 1,
			kernelUnitLength: 1,
			kerning: 0,
			keyPoints: 1,
			keySplines: 1,
			keyTimes: 1,
			lengthAdjust: 1,
			letterSpacing: 1,
			"letter-spacing": "letterSpacing",
			lightingColor: 1,
			"lighting-color": "lightingColor",
			limitingConeAngle: 1,
			local: 0,
			markerEnd: 1,
			"marker-end": "markerEnd",
			markerHeight: 1,
			markerMid: 1,
			"marker-mid": "markerMid",
			markerStart: 1,
			"marker-start": "markerStart",
			markerUnits: 1,
			markerWidth: 1,
			mask: 0,
			maskContentUnits: 1,
			maskUnits: 1,
			mathematical: 0,
			mode: 0,
			numOctaves: 1,
			offset: 0,
			opacity: 0,
			operator: 0,
			order: 0,
			orient: 0,
			orientation: 0,
			origin: 0,
			overflow: 0,
			overlinePosition: 1,
			"overline-position": "overlinePosition",
			overlineThickness: 1,
			"overline-thickness": "overlineThickness",
			paintOrder: 1,
			"paint-order": "paintOrder",
			panose1: 0,
			"panose-1": "panose1",
			pathLength: 1,
			patternContentUnits: 1,
			patternTransform: 1,
			patternUnits: 1,
			pointerEvents: 1,
			"pointer-events": "pointerEvents",
			points: 0,
			pointsAtX: 1,
			pointsAtY: 1,
			pointsAtZ: 1,
			prefix: 0,
			preserveAlpha: 1,
			preserveAspectRatio: 1,
			primitiveUnits: 1,
			property: 0,
			r: 0,
			radius: 0,
			refX: 1,
			refY: 1,
			renderingIntent: 1,
			"rendering-intent": "renderingIntent",
			repeatCount: 1,
			repeatDur: 1,
			requiredExtensions: 1,
			requiredFeatures: 1,
			resource: 0,
			restart: 0,
			result: 0,
			results: 0,
			rotate: 0,
			rx: 0,
			ry: 0,
			scale: 0,
			security: 0,
			seed: 0,
			shapeRendering: 1,
			"shape-rendering": "shapeRendering",
			slope: 0,
			spacing: 0,
			specularConstant: 1,
			specularExponent: 1,
			speed: 0,
			spreadMethod: 1,
			startOffset: 1,
			stdDeviation: 1,
			stemh: 0,
			stemv: 0,
			stitchTiles: 1,
			stopColor: 1,
			"stop-color": "stopColor",
			stopOpacity: 1,
			"stop-opacity": "stopOpacity",
			strikethroughPosition: 1,
			"strikethrough-position": "strikethroughPosition",
			strikethroughThickness: 1,
			"strikethrough-thickness": "strikethroughThickness",
			string: 0,
			stroke: 0,
			strokeDasharray: 1,
			"stroke-dasharray": "strokeDasharray",
			strokeDashoffset: 1,
			"stroke-dashoffset": "strokeDashoffset",
			strokeLinecap: 1,
			"stroke-linecap": "strokeLinecap",
			strokeLinejoin: 1,
			"stroke-linejoin": "strokeLinejoin",
			strokeMiterlimit: 1,
			"stroke-miterlimit": "strokeMiterlimit",
			strokeWidth: 1,
			"stroke-width": "strokeWidth",
			strokeOpacity: 1,
			"stroke-opacity": "strokeOpacity",
			suppressContentEditableWarning: 1,
			suppressHydrationWarning: 1,
			surfaceScale: 1,
			systemLanguage: 1,
			tableValues: 1,
			targetX: 1,
			targetY: 1,
			textAnchor: 1,
			"text-anchor": "textAnchor",
			textDecoration: 1,
			"text-decoration": "textDecoration",
			textLength: 1,
			textRendering: 1,
			"text-rendering": "textRendering",
			to: 0,
			transform: 0,
			typeof: 0,
			u1: 0,
			u2: 0,
			underlinePosition: 1,
			"underline-position": "underlinePosition",
			underlineThickness: 1,
			"underline-thickness": "underlineThickness",
			unicode: 0,
			unicodeBidi: 1,
			"unicode-bidi": "unicodeBidi",
			unicodeRange: 1,
			"unicode-range": "unicodeRange",
			unitsPerEm: 1,
			"units-per-em": "unitsPerEm",
			unselectable: 0,
			vAlphabetic: 1,
			"v-alphabetic": "vAlphabetic",
			values: 0,
			vectorEffect: 1,
			"vector-effect": "vectorEffect",
			version: 0,
			vertAdvY: 1,
			"vert-adv-y": "vertAdvY",
			vertOriginX: 1,
			"vert-origin-x": "vertOriginX",
			vertOriginY: 1,
			"vert-origin-y": "vertOriginY",
			vHanging: 1,
			"v-hanging": "vHanging",
			vIdeographic: 1,
			"v-ideographic": "vIdeographic",
			viewBox: 1,
			viewTarget: 1,
			visibility: 0,
			vMathematical: 1,
			"v-mathematical": "vMathematical",
			vocab: 0,
			widths: 0,
			wordSpacing: 1,
			"word-spacing": "wordSpacing",
			writingMode: 1,
			"writing-mode": "writingMode",
			x1: 0,
			x2: 0,
			x: 0,
			xChannelSelector: 1,
			xHeight: 1,
			"x-height": "xHeight",
			xlinkActuate: 1,
			"xlink:actuate": "xlinkActuate",
			xlinkArcrole: 1,
			"xlink:arcrole": "xlinkArcrole",
			xlinkHref: 1,
			"xlink:href": "xlinkHref",
			xlinkRole: 1,
			"xlink:role": "xlinkRole",
			xlinkShow: 1,
			"xlink:show": "xlinkShow",
			xlinkTitle: 1,
			"xlink:title": "xlinkTitle",
			xlinkType: 1,
			"xlink:type": "xlinkType",
			xmlBase: 1,
			"xml:base": "xmlBase",
			xmlLang: 1,
			"xml:lang": "xmlLang",
			xmlns: 0,
			"xml:space": "xmlSpace",
			xmlnsXlink: 1,
			"xmlns:xlink": "xmlnsXlink",
			xmlSpace: 1,
			y1: 0,
			y2: 0,
			y: 0,
			yChannelSelector: 1,
			z: 0,
			zoomAndPan: 1,
		}),
		xe
	);
}
var on;
function Er() {
	if (on) return J;
	on = 1;
	const t = 0,
		r = 1,
		c = 2,
		o = 3,
		p = 4,
		m = 5,
		A = 6;
	function d(n) {
		return i.hasOwnProperty(n) ? i[n] : null;
	}
	function s(n, a, l, T, v, L, N) {
		((this.acceptsBooleans = a === c || a === o || a === p),
			(this.attributeName = T),
			(this.attributeNamespace = v),
			(this.mustUseProperty = l),
			(this.propertyName = n),
			(this.type = a),
			(this.sanitizeURL = L),
			(this.removeEmptyString = N));
	}
	const i = {};
	([
		"children",
		"dangerouslySetInnerHTML",
		"defaultValue",
		"defaultChecked",
		"innerHTML",
		"suppressContentEditableWarning",
		"suppressHydrationWarning",
		"style",
	].forEach((n) => {
		i[n] = new s(n, t, !1, n, null, !1, !1);
	}),
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
		].forEach(([n, a]) => {
			i[n] = new s(n, r, !1, a, null, !1, !1);
		}),
		["contentEditable", "draggable", "spellCheck", "value"].forEach((n) => {
			i[n] = new s(n, c, !1, n.toLowerCase(), null, !1, !1);
		}),
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha",
		].forEach((n) => {
			i[n] = new s(n, c, !1, n, null, !1, !1);
		}),
		[
			"allowFullScreen",
			"async",
			"autoFocus",
			"autoPlay",
			"controls",
			"default",
			"defer",
			"disabled",
			"disablePictureInPicture",
			"disableRemotePlayback",
			"formNoValidate",
			"hidden",
			"loop",
			"noModule",
			"noValidate",
			"open",
			"playsInline",
			"readOnly",
			"required",
			"reversed",
			"scoped",
			"seamless",
			"itemScope",
		].forEach((n) => {
			i[n] = new s(n, o, !1, n.toLowerCase(), null, !1, !1);
		}),
		["checked", "multiple", "muted", "selected"].forEach((n) => {
			i[n] = new s(n, o, !0, n, null, !1, !1);
		}),
		["capture", "download"].forEach((n) => {
			i[n] = new s(n, p, !1, n, null, !1, !1);
		}),
		["cols", "rows", "size", "span"].forEach((n) => {
			i[n] = new s(n, A, !1, n, null, !1, !1);
		}),
		["rowSpan", "start"].forEach((n) => {
			i[n] = new s(n, m, !1, n.toLowerCase(), null, !1, !1);
		}));
	const g = /[\-\:]([a-z])/g,
		w = (n) => n[1].toUpperCase();
	([
		"accent-height",
		"alignment-baseline",
		"arabic-form",
		"baseline-shift",
		"cap-height",
		"clip-path",
		"clip-rule",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"dominant-baseline",
		"enable-background",
		"fill-opacity",
		"fill-rule",
		"flood-color",
		"flood-opacity",
		"font-family",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-variant",
		"font-weight",
		"glyph-name",
		"glyph-orientation-horizontal",
		"glyph-orientation-vertical",
		"horiz-adv-x",
		"horiz-origin-x",
		"image-rendering",
		"letter-spacing",
		"lighting-color",
		"marker-end",
		"marker-mid",
		"marker-start",
		"overline-position",
		"overline-thickness",
		"paint-order",
		"panose-1",
		"pointer-events",
		"rendering-intent",
		"shape-rendering",
		"stop-color",
		"stop-opacity",
		"strikethrough-position",
		"strikethrough-thickness",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-width",
		"text-anchor",
		"text-decoration",
		"text-rendering",
		"underline-position",
		"underline-thickness",
		"unicode-bidi",
		"unicode-range",
		"units-per-em",
		"v-alphabetic",
		"v-hanging",
		"v-ideographic",
		"v-mathematical",
		"vector-effect",
		"vert-adv-y",
		"vert-origin-x",
		"vert-origin-y",
		"word-spacing",
		"writing-mode",
		"xmlns:xlink",
		"x-height",
	].forEach((n) => {
		const a = n.replace(g, w);
		i[a] = new s(a, r, !1, n, null, !1, !1);
	}),
		[
			"xlink:actuate",
			"xlink:arcrole",
			"xlink:role",
			"xlink:show",
			"xlink:title",
			"xlink:type",
		].forEach((n) => {
			const a = n.replace(g, w);
			i[a] = new s(a, r, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
		}),
		["xml:base", "xml:lang", "xml:space"].forEach((n) => {
			const a = n.replace(g, w);
			i[a] = new s(a, r, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
		}),
		["tabIndex", "crossOrigin"].forEach((n) => {
			i[n] = new s(n, r, !1, n.toLowerCase(), null, !1, !1);
		}));
	const D = "xlinkHref";
	((i[D] = new s(
		"xlinkHref",
		r,
		!1,
		"xlink:href",
		"http://www.w3.org/1999/xlink",
		!0,
		!1,
	)),
		["src", "href", "action", "formAction"].forEach((n) => {
			i[n] = new s(n, r, !1, n.toLowerCase(), null, !0, !0);
		}));
	const { CAMELCASE: I, SAME: y, possibleStandardNames: _ } = gr(),
		U =
			":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" +
			"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
		k = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + U + "]*$")),
		S = Object.keys(_).reduce((n, a) => {
			const l = _[a];
			return (
				l === y ? (n[a] = a) : l === I ? (n[a.toLowerCase()] = a) : (n[a] = l),
				n
			);
		}, {});
	return (
		(J.BOOLEAN = o),
		(J.BOOLEANISH_STRING = c),
		(J.NUMERIC = m),
		(J.OVERLOADED_BOOLEAN = p),
		(J.POSITIVE_NUMERIC = A),
		(J.RESERVED = t),
		(J.STRING = r),
		(J.getPropertyInfo = d),
		(J.isCustomAttribute = k),
		(J.possibleStandardNames = S),
		J
	);
}
var we = {},
	_e = {},
	mt,
	sn;
function Tr() {
	if (sn) return mt;
	sn = 1;
	var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
		r = /\n/g,
		c = /^\s*/,
		o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
		p = /^:\s*/,
		m = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
		A = /^[;\s]*/,
		d = /^\s+|\s+$/g,
		s = `
`,
		i = "/",
		f = "*",
		g = "",
		w = "comment",
		D = "declaration";
	function I(_, b) {
		if (typeof _ != "string")
			throw new TypeError("First argument must be a string");
		if (!_) return [];
		b = b || {};
		var U = 1,
			k = 1;
		function S(x) {
			var C = x.match(r);
			C && (U += C.length);
			var K = x.lastIndexOf(s);
			k = ~K ? x.length - K : k + x.length;
		}
		function n() {
			var x = { line: U, column: k };
			return function (C) {
				return ((C.position = new a(x)), v(), C);
			};
		}
		function a(x) {
			((this.start = x),
				(this.end = { line: U, column: k }),
				(this.source = b.source));
		}
		a.prototype.content = _;
		function l(x) {
			var C = new Error(b.source + ":" + U + ":" + k + ": " + x);
			if (
				((C.reason = x),
				(C.filename = b.source),
				(C.line = U),
				(C.column = k),
				(C.source = _),
				!b.silent)
			)
				throw C;
		}
		function T(x) {
			var C = x.exec(_);
			if (C) {
				var K = C[0];
				return (S(K), (_ = _.slice(K.length)), C);
			}
		}
		function v() {
			T(c);
		}
		function L(x) {
			var C;
			for (x = x || []; (C = N()); ) C !== !1 && x.push(C);
			return x;
		}
		function N() {
			var x = n();
			if (!(i != _.charAt(0) || f != _.charAt(1))) {
				for (
					var C = 2;
					g != _.charAt(C) && (f != _.charAt(C) || i != _.charAt(C + 1));
				)
					++C;
				if (((C += 2), g === _.charAt(C - 1)))
					return l("End of comment missing");
				var K = _.slice(2, C - 2);
				return (
					(k += 2), S(K), (_ = _.slice(C)), (k += 2), x({ type: w, comment: K })
				);
			}
		}
		function Z() {
			var x = n(),
				C = T(o);
			if (C) {
				if ((N(), !T(p))) return l("property missing ':'");
				var K = T(m),
					Ye = x({
						type: D,
						property: y(C[0].replace(t, g)),
						value: K ? y(K[0].replace(t, g)) : g,
					});
				return (T(A), Ye);
			}
		}
		function le() {
			var x = [];
			L(x);
			for (var C; (C = Z()); ) C !== !1 && (x.push(C), L(x));
			return x;
		}
		return (v(), le());
	}
	function y(_) {
		return _ ? _.replace(d, g) : g;
	}
	return ((mt = I), mt);
}
var ln;
function _r() {
	if (ln) return _e;
	ln = 1;
	var t =
		(_e && _e.__importDefault) ||
		function (o) {
			return o && o.__esModule ? o : { default: o };
		};
	(Object.defineProperty(_e, "__esModule", { value: !0 }), (_e.default = c));
	const r = t(Tr());
	function c(o, p) {
		let m = null;
		if (!o || typeof o != "string") return m;
		const A = (0, r.default)(o),
			d = typeof p == "function";
		return (
			A.forEach((s) => {
				if (s.type !== "declaration") return;
				const { property: i, value: f } = s;
				d ? p(i, f, s) : f && ((m = m || {}), (m[i] = f));
			}),
			m
		);
	}
	return _e;
}
var Ie = {},
	cn;
function vr() {
	if (cn) return Ie;
	((cn = 1),
		Object.defineProperty(Ie, "__esModule", { value: !0 }),
		(Ie.camelCase = void 0));
	var t = /^--[a-zA-Z0-9_-]+$/,
		r = /-([a-z])/g,
		c = /^[^-]+$/,
		o = /^-(webkit|moz|ms|o|khtml)-/,
		p = /^-(ms)-/,
		m = function (i) {
			return !i || c.test(i) || t.test(i);
		},
		A = function (i, f) {
			return f.toUpperCase();
		},
		d = function (i, f) {
			return "".concat(f, "-");
		},
		s = function (i, f) {
			return (
				f === void 0 && (f = {}),
				m(i)
					? i
					: ((i = i.toLowerCase()),
						f.reactCompat ? (i = i.replace(p, d)) : (i = i.replace(o, d)),
						i.replace(r, A))
			);
		};
	return ((Ie.camelCase = s), Ie);
}
var Le, un;
function Ar() {
	if (un) return Le;
	un = 1;
	var t =
			(Le && Le.__importDefault) ||
			function (p) {
				return p && p.__esModule ? p : { default: p };
			},
		r = t(_r()),
		c = vr();
	function o(p, m) {
		var A = {};
		return (
			!p ||
				typeof p != "string" ||
				(0, r.default)(p, function (d, s) {
					d && s && (A[(0, c.camelCase)(d, m)] = s);
				}),
			A
		);
	}
	return ((o.default = o), (Le = o), Le);
}
var fn;
function bn() {
	return (
		fn ||
			((fn = 1),
			(function (t) {
				var r =
					(we && we.__importDefault) ||
					function (f) {
						return f && f.__esModule ? f : { default: f };
					};
				(Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.returnFirstArg =
						t.canTextBeChildOfNode =
						t.ELEMENTS_WITH_NO_TEXT_CHILDREN =
						t.PRESERVE_CUSTOM_ATTRIBUTES =
							void 0),
					(t.isCustomComponent = m),
					(t.setStyleProp = d));
				var c = gn(),
					o = r(Ar()),
					p = new Set([
						"annotation-xml",
						"color-profile",
						"font-face",
						"font-face-src",
						"font-face-uri",
						"font-face-format",
						"font-face-name",
						"missing-glyph",
					]);
				function m(f, g) {
					return f.includes("-") ? !p.has(f) : !!(g && typeof g.is == "string");
				}
				var A = { reactCompat: !0 };
				function d(f, g) {
					if (typeof f == "string") {
						if (!f.trim()) {
							g.style = {};
							return;
						}
						try {
							g.style = (0, o.default)(f, A);
						} catch {
							g.style = {};
						}
					}
				}
				((t.PRESERVE_CUSTOM_ATTRIBUTES = Number(c.version.split(".")[0]) >= 16),
					(t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
						"tr",
						"tbody",
						"thead",
						"tfoot",
						"colgroup",
						"table",
						"head",
						"html",
						"frameset",
					])));
				var s = function (f) {
					return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(f.name);
				};
				t.canTextBeChildOfNode = s;
				var i = function (f) {
					return f;
				};
				t.returnFirstArg = i;
			})(we)),
		we
	);
}
var dn;
function Sn() {
	if (dn) return We;
	((dn = 1),
		Object.defineProperty(We, "__esModule", { value: !0 }),
		(We.default = m));
	var t = Er(),
		r = bn(),
		c = ["checked", "value"],
		o = ["input", "select", "textarea"],
		p = { reset: !0, submit: !0 };
	function m(d, s) {
		d === void 0 && (d = {});
		var i = {},
			f = !!(d.type && p[d.type]);
		for (var g in d) {
			var w = d[g];
			if ((0, t.isCustomAttribute)(g)) {
				i[g] = w;
				continue;
			}
			var D = g.toLowerCase(),
				I = A(D);
			if (I) {
				var y = (0, t.getPropertyInfo)(I);
				switch (
					(c.includes(I) && o.includes(s) && !f && (I = A("default" + D)),
					(i[I] = w),
					y?.type)
				) {
					case t.BOOLEAN:
						i[I] = !0;
						break;
					case t.OVERLOADED_BOOLEAN:
						w === "" && (i[I] = !0);
						break;
				}
				continue;
			}
			r.PRESERVE_CUSTOM_ATTRIBUTES && (i[g] = w);
		}
		return ((0, r.setStyleProp)(d.style, i), i);
	}
	function A(d) {
		return t.possibleStandardNames[d];
	}
	return We;
}
var ve = {},
	pn;
function yr() {
	if (pn) return ve;
	pn = 1;
	var t =
		(ve && ve.__importDefault) ||
		function (d) {
			return d && d.__esModule ? d : { default: d };
		};
	(Object.defineProperty(ve, "__esModule", { value: !0 }), (ve.default = m));
	var r = gn(),
		c = t(Sn()),
		o = bn(),
		p = {
			cloneElement: r.cloneElement,
			createElement: r.createElement,
			isValidElement: r.isValidElement,
		};
	function m(d, s) {
		var i, f, g, w, D;
		s === void 0 && (s = {});
		for (
			var I = [],
				y = typeof s.replace == "function",
				_ = (i = s.transform) !== null && i !== void 0 ? i : o.returnFirstArg,
				b = (f = s.library) !== null && f !== void 0 ? f : p,
				U = b.cloneElement,
				k = b.createElement,
				S = b.isValidElement,
				n = d.length,
				a = 0;
			a < n;
			a++
		) {
			var l = d[a];
			if (y) {
				var T =
					(g = s.replace) === null || g === void 0 ? void 0 : g.call(s, l, a);
				if (S(T)) {
					(n > 1 &&
						(T = U(T, { key: (w = T.key) !== null && w !== void 0 ? w : a })),
						I.push(_(T, l, a)));
					continue;
				}
			}
			if (l.type === "text") {
				var v = !l.data.trim().length;
				if (
					(v && l.parent && !(0, o.canTextBeChildOfNode)(l.parent)) ||
					(s.trim && v)
				)
					continue;
				I.push(_(l.data, l, a));
				continue;
			}
			var L = l,
				N = {};
			A(L)
				? ((0, o.setStyleProp)(L.attribs.style, L.attribs), (N = L.attribs))
				: L.attribs && (N = (0, c.default)(L.attribs, L.name));
			var Z = void 0;
			switch (l.type) {
				case "script":
				case "style":
					l.children[0] &&
						(N.dangerouslySetInnerHTML = { __html: l.children[0].data });
					break;
				case "tag":
					l.name === "textarea" && l.children[0]
						? (N.defaultValue = l.children[0].data)
						: !((D = l.children) === null || D === void 0) &&
							D.length &&
							(Z = m(l.children, s));
					break;
				default:
					continue;
			}
			(n > 1 && (N.key = a), I.push(_(k(l.name, N, Z), l, a)));
		}
		return I.length === 1 ? I[0] : I;
	}
	function A(d) {
		return (
			o.PRESERVE_CUSTOM_ATTRIBUTES &&
			d.type === "tag" &&
			(0, o.isCustomComponent)(d.name, d.attribs)
		);
	}
	return ve;
}
var mn;
function Rr() {
	return (
		mn ||
			((mn = 1),
			(function (t) {
				var r =
					(De && De.__importDefault) ||
					function (s) {
						return s && s.__esModule ? s : { default: s };
					};
				(Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.htmlToDOM =
						t.domToReact =
						t.attributesToProps =
						t.Text =
						t.ProcessingInstruction =
						t.Element =
						t.Comment =
							void 0),
					(t.default = d));
				var c = r(hr());
				t.htmlToDOM = c.default;
				var o = r(Sn());
				t.attributesToProps = o.default;
				var p = r(yr());
				t.domToReact = p.default;
				var m = yn();
				(Object.defineProperty(t, "Comment", {
					enumerable: !0,
					get: function () {
						return m.Comment;
					},
				}),
					Object.defineProperty(t, "Element", {
						enumerable: !0,
						get: function () {
							return m.Element;
						},
					}),
					Object.defineProperty(t, "ProcessingInstruction", {
						enumerable: !0,
						get: function () {
							return m.ProcessingInstruction;
						},
					}),
					Object.defineProperty(t, "Text", {
						enumerable: !0,
						get: function () {
							return m.Text;
						},
					}));
				var A = { lowerCaseAttributeNames: !1 };
				function d(s, i) {
					var f;
					if (typeof s != "string")
						throw new TypeError("First argument must be a string");
					return s
						? (0, p.default)(
								(0, c.default)(
									s,
									(f = i?.htmlparser2) !== null && f !== void 0 ? f : A,
								),
								i,
							)
						: [];
				}
			})(De)),
		De
	);
}
var Et = Rr();
const hn = Pn(Et),
	br = hn.default || hn;
function Sr({ description: t }) {
	return P.jsx("p", {
		className: "text-muted-foreground mt-3 text-sm font-medium",
		children: br(dr.sanitize(t), {
			replace: (r) => {
				if (typeof r == "object" && "name" in r && r.name === "a") {
					const c = r,
						o = c.attribs ? Et.attributesToProps(c.attribs) : {};
					return P.jsx("a", {
						...o,
						className: "text-sky-500 hover:underline",
						rel: "noopener noreferrer",
						target: "_blank",
						children: c.children ? Et.domToReact(c.children) : null,
					});
				}
				return r;
			},
		}),
	});
}
function Cr({ playlist: t }) {
	return P.jsxs("div", {
		className: "flex items-end gap-6",
		children: [
			(t.images?.length ?? 0) > 0
				? P.jsx(jn, {
						alt: t.name,
						className:
							"ring-border h-64 w-64 rounded-lg object-cover shadow-xl ring-1",
						height: 256,
						src: t.images?.[0].url || "/placeholder.svg",
						width: 256,
					})
				: P.jsx("div", {
						className:
							"bg-muted ring-border flex h-64 w-64 items-center justify-center rounded-lg shadow-xl ring-1",
						children: P.jsx(Fn, {
							className: "text-muted-foreground h-24 w-24",
						}),
					}),
			P.jsxs("div", {
				className: "flex flex-col gap-3",
				children: [
					P.jsx("h5", {
						className: "text-muted-foreground text-xs font-bold uppercase",
						children: t.type,
					}),
					P.jsx("h2", { className: "text-6xl font-bold", children: t.name }),
					t.description &&
						t.description !== "null" &&
						P.jsx(Sr, { description: t.description }),
					P.jsxs("div", {
						className: "flex items-center text-sm font-semibold",
						children: [
							P.jsx("span", {
								className: "text-muted-foreground",
								children: t.owner?.display_name,
							}),
							t.tracks.length > 0 &&
								P.jsxs(P.Fragment, {
									children: [
										P.jsx(Gn, { className: "text-muted-foreground" }),
										P.jsxs("span", {
											className: "text-muted-foreground",
											children: [t.tracks.length.toLocaleString(), " songs"],
										}),
									],
								}),
						],
					}),
				],
			}),
		],
	});
}
function Hr() {
	const { playlistId: t } = Mn.useParams(),
		{ data: r, isPending: c } = Hn(Un(t));
	return c
		? P.jsx(zn, {})
		: P.jsxs("div", {
				className: "space-y-8",
				children: [
					r && P.jsx(Cr, { playlist: r }),
					r?.tracks &&
						r?.tracks.length === 0 &&
						P.jsx("div", {
							className: "bg-muted mt-12 rounded-lg p-12 shadow-sm",
							children: P.jsxs("div", {
								className: "flex flex-col items-center space-y-3 text-center",
								children: [
									P.jsx("p", {
										className: "text-foreground",
										children: "No tracks yet",
									}),
									P.jsx("p", {
										className: "text-muted-foreground text-sm",
										children: "This playlist is empty",
									}),
								],
							}),
						}),
					r?.tracks &&
						r?.tracks.length !== 0 &&
						P.jsxs("div", {
							className: "space-y-1",
							children: [
								P.jsx(qn, {
									playlistId: r?.id,
									playlistName: r?.name,
									tracks: r.tracks.filter((o) => o !== null),
								}),
								P.jsx(Bn, {
									showAlbum: !0,
									showCover: !0,
									showHeader: !0,
									showSubtitle: !0,
									tracks: r?.tracks.filter((o) => o !== null),
								}),
							],
						}),
				],
			});
}
export { Hr as component };
