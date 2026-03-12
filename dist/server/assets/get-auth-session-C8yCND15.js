import { c as createServerFn } from "../server.js";
import { c as createSsrRpc } from "./createSsrRpc-DFX_9v9X.js";
const getAuthSession = createServerFn({
	method: "GET",
}).handler(
	createSsrRpc(
		"95a75a77e931d3cf1e912b6c0d185bd3a9e050f9b48b77984af91cf28208d47d",
	),
);
export { getAuthSession as g };
