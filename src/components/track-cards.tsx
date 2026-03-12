import { MusicNoteIcon } from "@phosphor-icons/react";
import { Image } from "@unpic/react";
import type { Track } from "~/types";

type Props = {
	tracks: Track[];
};

export default function TrackCards({ tracks }: Props) {
	return (
		<div className="mt-4 grid grid-cols-5 items-stretch gap-8">
			{tracks
				?.filter((track) => track !== null)
				.map((track: Track) => (
					<div
						className="group/item bg-input/30 text-secondary-foreground hover:bg-secondary h-full rounded-lg border p-4 transition duration-300 dark:border-none"
						key={track.id}
					>
						<div className="relative">
							{track.album.images.length > 0 ? (
								<Image
									alt={track.name}
									className="aspect-square w-full rounded-md object-cover"
									height={160}
									src={track.album.images[0].url}
									width={160}
								/>
							) : (
								<div className="h-40 w-full">
									<MusicNoteIcon className="bg-secondary h-full w-full" />
								</div>
							)}
						</div>
						<h3 className="mt-5 truncate font-bold">{track.name}</h3>
						<h6 className="text-muted-foreground mt-1 truncate text-xs font-semibold">
							{track.artists[0].name}
						</h6>
					</div>
				))}
		</div>
	);
}
