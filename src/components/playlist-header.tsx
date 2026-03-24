import { DotIcon, MusicNoteIcon } from "@phosphor-icons/react";
import { Image } from "@unpic/react";
import type { getPlaylistById } from "~/server-fns/get-playlist-by-id";
import PlaylistDescription from "./playlist-description";

type Props = {
	playlist: NonNullable<Awaited<ReturnType<typeof getPlaylistById>>>;
	trackCount?: number;
};

export default function PlaylistHeader({ playlist, trackCount }: Props) {
	return (
		<div className="flex items-end gap-6">
			{(playlist.images?.length ?? 0) > 0 ? (
				<Image
					alt={playlist.name}
					className="h-64 w-64 object-cover shadow-xl ring-1 ring-border"
					height={256}
					src={playlist.images?.[0].url || "/placeholder.svg"}
					width={256}
				/>
			) : (
				<div className="flex h-64 w-64 items-center justify-center bg-muted">
					<MusicNoteIcon className="size-32 text-muted-foreground" />
				</div>
			)}

			<div className="flex flex-col gap-3">
				<h5 className="text-xs text-muted-foreground uppercase">
					{playlist.type}
				</h5>
				<h2 className="text-5xl font-medium">{playlist.name}</h2>

				{playlist.description && playlist.description !== "null" && (
					<PlaylistDescription description={playlist.description} />
				)}

				<div className="flex items-center text-sm">
					<span className="text-muted-foreground">
						{playlist.owner?.display_name}
					</span>
					{(trackCount ?? playlist.tracks.length) > 0 && (
						<>
							<DotIcon className="text-muted-foreground" />
							<span className="text-muted-foreground">
								{(trackCount ?? playlist.tracks.length).toLocaleString()} songs
							</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
