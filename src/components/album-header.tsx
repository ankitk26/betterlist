import { DotIcon, VinylRecordIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import type { getAlbumById } from "~/server-fns/get-album-by-id";

type Props = {
	album: NonNullable<Awaited<ReturnType<typeof getAlbumById>>>;
};

export default function AlbumHeader({ album }: Props) {
	return (
		<div className="flex items-end gap-6">
			{album.images && album.images.length > 0 ? (
				<Image
					alt={album.name}
					className="h-64 w-64 object-cover shadow-xl ring-1 ring-border"
					height={256}
					src={album.images[0].url ?? ""}
					width={256}
				/>
			) : (
				<div className="flex h-64 w-64 items-center justify-center bg-muted">
					<VinylRecordIcon className="size-52" />
				</div>
			)}
			<div className="flex flex-col gap-3">
				<h5 className="text-xs uppercase">{album.album_type}</h5>
				<h2 className="text-5xl font-medium">{album.name}</h2>

				<div className="flex items-center text-sm text-muted-foreground">
					<Link
						className="hover:underline"
						params={{ artistId: album.artists[0].id }}
						to="/artists/$artistId"
					>
						{album.artists[0].name}
					</Link>
					<DotIcon />
					<span>{new Date(album.release_date).getFullYear()}</span>
					{album.tracks && album.tracks.items.length > 0 && (
						<>
							<DotIcon />
							<span>{album.tracks.total} songs</span>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
