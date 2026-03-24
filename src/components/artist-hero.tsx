import { UserSoundIcon } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { artistByIdQuery } from "~/queries";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

export default function ArtistHero() {
	const { artistId } = useParams({ from: "/_protected/artists/$artistId" });
	const { data: artist, isPending } = useQuery(artistByIdQuery(artistId));

	if (isPending) {
		return (
			<div>
				<div className="flex items-end gap-4">
					<Skeleton className="aspect-square w-64" />
					<div className="flex-1 space-y-4">
						<Skeleton className="h-6 w-3/4" />
						<Skeleton className="h-6 w-32" />
						<div className="flex items-center gap-4">
							<Skeleton className="h-6 w-16" />
							<Skeleton className="h-6 w-16" />
							<Skeleton className="h-6 w-16" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex items-end gap-6">
			{artist && (
				<>
					{artist.images.length > 0 ? (
						<Image
							alt={artist.name}
							className="h-64 w-64 object-cover shadow-xl ring-1 ring-border"
							height={256}
							src={artist.images[0].url}
							width={256}
						/>
					) : (
						<div className="flex aspect-square h-64 w-64 items-center justify-center bg-muted">
							<UserSoundIcon className="size-24 text-muted-foreground" />
						</div>
					)}
					<div className="flex flex-col items-start gap-3">
						<h2 className="text-5xl font-medium">{artist.name}</h2>
						<span className="text-sm text-muted-foreground">
							{artist.followers?.total.toLocaleString()} followers
						</span>
						<div className="flex items-center gap-5 text-sm">
							{artist?.genres?.map((genre: string) => (
								<Badge key={genre}>{genre}</Badge>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
