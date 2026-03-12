import { Dialog as Dialog$1 } from "@base-ui/react/dialog";
import { Input as Input$1 } from "@base-ui/react/input";
import { XIcon } from "@phosphor-icons/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./button-CJdb3Z05.js";
import { c as cn } from "./utils-H80jjgLf.js";
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input$1, {
		type,
		"data-slot": "input",
		className: cn(
			"border-input bg-input/20 file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-7 w-full min-w-0 rounded-md border px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-xs/relaxed",
			className,
		),
		...props,
	});
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Root, {
		"data-slot": "dialog",
		...props,
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Trigger, {
		"data-slot": "dialog-trigger",
		...props,
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Portal, {
		"data-slot": "dialog-portal",
		...props,
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Close, {
		"data-slot": "dialog-close",
		...props,
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Backdrop, {
		"data-slot": "dialog-overlay",
		className: cn(
			"data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs",
			className,
		),
		...props,
	});
}
function DialogContent({
	className,
	children,
	showCloseButton = true,
	...props
}) {
	return /* @__PURE__ */ jsxs(DialogPortal, {
		children: [
			/* @__PURE__ */ jsx(DialogOverlay, {}),
			/* @__PURE__ */ jsxs(Dialog$1.Popup, {
				"data-slot": "dialog-content",
				className: cn(
					"bg-background ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl p-4 text-xs/relaxed ring-1 duration-100 outline-none sm:max-w-sm",
					className,
				),
				...props,
				children: [
					children,
					showCloseButton &&
						/* @__PURE__ */ jsxs(Dialog$1.Close, {
							"data-slot": "dialog-close",
							render: /* @__PURE__ */ jsx(Button, {
								variant: "ghost",
								className: "absolute top-2 right-2",
								size: "icon-sm",
							}),
							children: [
								/* @__PURE__ */ jsx(XIcon, {}),
								/* @__PURE__ */ jsx("span", {
									className: "sr-only",
									children: "Close",
								}),
							],
						}),
				],
			}),
		],
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-1", className),
		...props,
	});
}
function DialogFooter({
	className,
	showCloseButton = false,
	children,
	...props
}) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "dialog-footer",
		className: cn(
			"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
			className,
		),
		...props,
		children: [
			children,
			showCloseButton &&
				/* @__PURE__ */ jsx(Dialog$1.Close, {
					render: /* @__PURE__ */ jsx(Button, { variant: "outline" }),
					children: "Close",
				}),
		],
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Title, {
		"data-slot": "dialog-title",
		className: cn("text-sm font-medium", className),
		...props,
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Description, {
		"data-slot": "dialog-description",
		className: cn(
			"text-muted-foreground *:[a]:hover:text-foreground text-xs/relaxed *:[a]:underline *:[a]:underline-offset-3",
			className,
		),
		...props,
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx("label", {
		"data-slot": "label",
		className: cn(
			"flex items-center gap-2 text-xs/relaxed leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
			className,
		),
		...props,
	});
}
export {
	Dialog as D,
	Input as I,
	Label as L,
	DialogTrigger as a,
	DialogContent as b,
	DialogTitle as c,
	DialogDescription as d,
	DialogFooter as e,
	DialogClose as f,
	DialogHeader as g,
};
