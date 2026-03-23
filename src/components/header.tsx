import { CaretLeftIcon } from "@phosphor-icons/react";
import { Link, useCanGoBack, useRouter } from "@tanstack/react-router";
import HeaderAvatar from "./header-avatar";
import SearchInput from "./search-input";
import { Button } from "./ui/button";

export default function Header() {
	const canGoBack = useCanGoBack();
	const router = useRouter();

	return (
		<header className="sticky top-0 z-50 mx-4 flex items-center justify-between p-2">
			<Link to="/">
				<h1>betterlist</h1>
			</Link>

			<div className="flex w-1/2 items-center gap-2">
				{canGoBack && (
					<Button
						variant="secondary"
						size="sm"
						onClick={() => {
							router.history.back();
						}}
					>
						<CaretLeftIcon />
						Back
					</Button>
				)}
				<SearchInput />
			</div>

			<div className="flex items-center gap-3">
				<HeaderAvatar />
			</div>
		</header>
	);
}
