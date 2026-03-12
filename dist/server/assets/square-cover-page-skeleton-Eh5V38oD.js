import { jsxs, jsx } from "react/jsx-runtime";
import { S as Skeleton } from "./skeleton-CZt9RIoG.js";
import { T as TracksTableSkeleton } from "./tracks-table-DrB7FpSt.js";
function SquareCoverPageSkeleton() {
	return /* @__PURE__ */ jsxs("section", {
		className: "space-y-20",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-end gap-4",
				children: [
					/* @__PURE__ */ jsx(Skeleton, { className: "aspect-square w-64" }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 space-y-4",
						children: [
							/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
							/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-3/4" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
									/* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32" }),
								],
							}),
						],
					}),
				],
			}),
			/* @__PURE__ */ jsx(TracksTableSkeleton, {}),
		],
	});
}
export { SquareCoverPageSkeleton as S };
