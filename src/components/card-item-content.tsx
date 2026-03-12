import { Image } from "@unpic/react";
import { MusicIcon } from "lucide-react";

type Props = {
	item: {
		id: string;
		title: string;
		subtitle?: string;
		image: string;
		type: string;
	};
};

export default function CardItemContent({ item }: Props) {
	return (
		<div className="bg-input/30 hover:bg-secondary h-full cursor-pointer rounded-lg border p-4 transition duration-300 dark:border-none">
			{item.image ? (
				<Image
					alt={item.title}
					className={`aspect-square w-full object-cover ${
						item.type === "artists" ? "rounded-full" : "rounded-md"
					}`}
					height={160}
					src={item.image}
					width={160}
				/>
			) : (
				<div className="h-40 w-full">
					<MusicIcon className="h-full w-full rounded-md" />
				</div>
			)}
			<h3 className="mt-5 truncate font-bold">{item.title}</h3>
			{item.subtitle && (
				<h6 className="text-muted-foreground mt-1 truncate text-xs font-semibold">
					{item.subtitle}
				</h6>
			)}
		</div>
	);
}
