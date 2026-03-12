import { jsx } from "react/jsx-runtime";
import { c as cn } from "./utils-H80jjgLf.js";
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn("bg-muted animate-pulse rounded-md", className),
		...props,
	});
}
export { Skeleton as S };
