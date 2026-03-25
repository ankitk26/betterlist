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
		<div className="h-full cursor-pointer border bg-input/30 p-4 transition duration-300 hover:bg-secondary dark:border-none">
			{item.image ? (
				<Image
					alt={item.title}
					className="aspect-square w-full object-cover"
					height={160}
					src={item.image}
					width={160}
				/>
			) : (
				<div className="flex aspect-square size-40 items-center justify-center bg-card">
					<MusicNoteIcon className="size-20 text-muted-foreground" />
				</div>
			)}
			<h3 className="mt-4 truncate">{item.title}</h3>
			{item.subtitle && (
				<h6 className="mt-1 truncate text-xs text-muted-foreground">
					{item.subtitle}
				</h6>
			)}
		</div>
	);
}
