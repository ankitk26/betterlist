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

	const largestImage = artists?.[0].images[0];

	const allGenres = artists
		?.flatMap((artist) => artist.genres)
		.filter((genre) => genre !== undefined);

	const topGenre = getMostFrequentGenre(allGenres ?? ["NA"]);

	return (
		<div className="border-border relative mx-auto w-full overflow-hidden rounded-3xl border">
			{/* Content */}
			<div>
				{/* Header */}
				<div className="border-border flex items-center justify-between border-b px-6 py-4">
					<span className="text-muted-foreground text-xs font-medium tracking-wider">
						{getRangeTitle(props.range)}
					</span>
				</div>

				{/* Main content */}
				<div className="px-6 pt-4 pb-5">
					{/* Top Artist Hero */}
					<div className="mb-6 text-center">
						<p className="text-muted-foreground mb-2 text-xs font-medium tracking-[0.2em] uppercase">
							Top Artist
						</p>
						<div className="border-border mb-3 inline-block overflow-hidden rounded-full border-2 p-1">
							<div className="bg-muted relative size-40 overflow-hidden rounded-full">
								<Image
									alt={artists?.[0].name}
									className="size-full object-cover"
									height={80}
									src={largestImage?.url || ""}
									width={80}
								/>
							</div>
						</div>
						<h2 className="text-foreground text-lg font-semibold tracking-tight">
							{artists?.[0].name}
						</h2>
					</div>

					{/* Stats Grid */}
					<div className="mb-5 grid grid-cols-2 gap-5">
						{/* Top Artists */}
						<div>
							<p className="text-muted-foreground mb-2 text-xs font-medium tracking-[0.2em] uppercase">
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
										<span className="text-muted-foreground/60 flex h-4 w-4 items-center justify-center text-[9px] font-medium">
											{index + 1}
										</span>
										<span className="text-muted-foreground truncate text-xs font-medium transition-colors group-hover:text-zinc-900">
											{artist.name}
										</span>
									</Link>
								))}
							</div>
						</div>

						{/* Top Tracks */}
						<div>
							<p className="text-muted-foreground mb-2 text-xs font-medium tracking-[0.2em] uppercase">
								Tracks
							</p>
							<div className="space-y-1.5">
								{tracks?.map((track, index) => (
									<div key={track.id} className="flex items-center gap-2">
										<span className="text-muted-foreground/60 flex h-4 w-4 items-center justify-center text-[9px] font-medium">
											{index + 1}
										</span>
										<span className="text-muted-foreground truncate text-xs font-medium">
											{track.name}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Top Genre */}
					<div className="border-border border-t pt-4">
						<p className="text-muted-foreground mb-1 text-xs font-medium tracking-[0.2em] uppercase">
							Top Genre
						</p>
						<p className="text-foreground font-mono text-xl font-light tracking-tight capitalize">
							{topGenre}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
