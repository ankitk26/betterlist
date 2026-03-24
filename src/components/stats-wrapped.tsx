import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { getMostFrequentGenre } from "../lib/get-most-frequent-genre";
import { userTopArtistsQuery, userTopTracksQuery } from "../queries";

type Props = {
	range: "long_term" | "short_term" | "medium_term";
};

function getRangeTitle(range: Props["range"]): string {
	switch (range) {
		case "short_term":
			return "Last Month";
		case "medium_term":
			return "Last 6 Months";
		case "long_term":
			return "Last Year";
		default:
			return "Your Stats";
	}
}

export default function StatsWrapped(props: Props) {
	const { data: tracks } = useSuspenseQuery(
		userTopTracksQuery({ limit: 5, range: props.range }),
	);
	const { data: artists } = useSuspenseQuery(
		userTopArtistsQuery({ range: props.range }),
	);

	const largestImage = artists[0].images[0];

	const allGenres = artists
		.flatMap((artist) => artist.genres)
		.filter((genre) => genre !== undefined);

	const rangeTitle = getRangeTitle(props.range);
	const topGenre = getMostFrequentGenre(allGenres ?? ["NA"]);

	return (
		<div className="mx-auto w-full overflow-hidden border border-border">
			{/* Content */}
			<div>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-border px-6 py-4">
					<span className="text-xs font-medium tracking-wider text-muted-foreground">
						{rangeTitle}
					</span>
				</div>

				{/* Main content */}
				<div className="px-6 pt-4 pb-5">
					{/* Top Artist Hero */}
					<div className="mb-6 text-center">
						<p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
							Top Artist
						</p>
						<div className="mb-3 inline-block overflow-hidden border-2 border-border p-1">
							<div className="relative size-40 overflow-hidden bg-muted">
								<Image
									alt={artists[0].name}
									className="size-full object-cover"
									height={80}
									src={largestImage?.url || ""}
									width={80}
								/>
							</div>
						</div>
						<h2 className="text-lg font-semibold tracking-tight text-foreground">
							{artists[0].name}
						</h2>
					</div>

					{/* Stats Grid */}
					<div className="mb-5 grid grid-cols-2 gap-5">
						{/* Top Artists */}
						<div>
							<p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
								Artists
							</p>
							<div className="space-y-1.5">
								{artists?.slice(0, 5).map((artist, index) => (
									<Link
										to="/artists/$artistId"
										params={{ artistId: artist.id }}
										key={artist.id}
										className="group flex items-center gap-2"
									>
										<span className="flex h-4 w-4 items-center justify-center text-[9px] font-medium text-muted-foreground/60">
											{index + 1}
										</span>
										<span className="truncate text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground hover:text-foreground">
											{artist.name}
										</span>
									</Link>
								))}
							</div>
						</div>

						{/* Top Tracks */}
						<div>
							<p className="mb-2 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
								Tracks
							</p>
							<div className="space-y-1.5">
								{tracks?.map((track, index) => (
									<div key={track.id} className="flex items-center gap-2">
										<span className="flex h-4 w-4 items-center justify-center text-[9px] font-medium text-muted-foreground/60">
											{index + 1}
										</span>
										<span className="truncate text-xs font-medium text-muted-foreground">
											{track.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Top Genre */}
					<div className="border-t border-border pt-4">
						<p className="mb-1 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
							Top Genre
						</p>
						<p className="font-mono text-xl font-light tracking-tight text-foreground capitalize">
							{topGenre}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
