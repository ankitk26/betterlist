import { MusicNoteIcon } from "@phosphor-icons/react";
import { Image } from "@unpic/react";

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
		<div className="h-full cursor-pointer rounded-lg border bg-input/30 p-4 transition duration-300 hover:bg-secondary dark:border-none">
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
					<MusicNoteIcon className="h-full w-full rounded-md" />
				</div>
			)}
			<h3 className="mt-5 truncate font-bold">{item.title}</h3>
			{item.subtitle && (
				<h6 className="mt-1 truncate text-xs font-semibold text-muted-foreground">
					{item.subtitle}
				</h6>
			)}
		</div>
	);
}
