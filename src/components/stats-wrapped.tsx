import { useSuspenseQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import { getMostFrequentGenre } from "../lib/get-most-frequent-genre";
import { userTopArtistsQuery, userTopTracksQuery } from "../queries";
import WrappedBackgroundDesign from "./wrapped-background-design";

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

function StatsWrapped(props: Props) {
  const { data: tracks } = useSuspenseQuery(
    userTopTracksQuery({ limit: 5, range: props.range })
  );
  const { data: artists } = useSuspenseQuery(
    userTopArtistsQuery({ range: props.range })
  );

  const topArtistImages = artists?.[0].images.length;
  const randomIndex = Math.floor(Math.random() * (topArtistImages ?? 1));

  const allGenres = artists
    ?.flatMap((artist) => artist.genres)
    .filter((genre) => genre !== undefined);

  const topGenre = getMostFrequentGenre(allGenres ?? ["NA"]);

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-900 bg-black text-white">
      {/* Background decorative elements */}
      <WrappedBackgroundDesign />

      <div className="relative z-10 p-6">
        <div className="mb-6 text-center">
          <h1 className="font-bold text-2xl text-white">
            {getRangeTitle(props.range)}
          </h1>
        </div>

        {/* Character image */}
        <div className="mb-8 flex justify-center">
          <div className="h-48 w-48 rounded-lg bg-white p-2 shadow-lg">
            <Image
              alt={artists?.[0].name}
              className="h-full w-full rounded object-contain"
              height={180}
              src={artists?.[0].images[randomIndex].url || ""}
              width={180}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Top Artists */}
            <div>
              <h2 className="mb-3 font-bold text-lg text-rose-50">
                Top Artists
              </h2>
              <div className="space-y-1 text-sm">
                {artists?.slice(0, 5).map((artist, index) => (
                  <div className="flex items-center gap-2" key={artist.id}>
                    <span className="font-bold text-white">#{index + 1}</span>
                    <span className="text-white">{artist.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Songs */}
            <div>
              <h2 className="mb-3 font-bold text-lg text-rose-50">Top Songs</h2>
              <div className="space-y-1 text-sm">
                {tracks?.map((track, index) => (
                  <div className="flex gap-2" key={track.id}>
                    <span className="font-bold text-white">#{index + 1}</span>
                    <span className="text-white">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top genre */}
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="mb-2 font-bold text-lg text-rose-200">
                Top Genre
              </h2>
              <div className="font-bold text-3xl text-white capitalize">
                {topGenre}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { StatsWrapped };
