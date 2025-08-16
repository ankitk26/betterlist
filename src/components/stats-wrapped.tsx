import { useSuspenseQuery } from "@tanstack/react-query";
import { userTopArtistsQuery, userTopTracksQuery } from "~/queries";
import WrappedBackgroundDesign from "./wrapped-background-design";

type Props = {
  range: "long_term" | "short_term" | "medium_term";
};

export function StatsWrapped(props: Props) {
  const { data: tracks } = useSuspenseQuery(
    userTopTracksQuery({ limit: 5, range: props.range })
  );
  const { data: artists } = useSuspenseQuery(
    userTopArtistsQuery({ limit: 5, range: props.range })
  );

  const topArtistImages = artists?.[0].images.length;
  const randomIndex = Math.floor(Math.random() * (topArtistImages ?? 1));

  return (
    <div className="w-full max-w-sm mx-auto border border-neutral-900 bg-black text-white rounded-2xl overflow-hidden relative">
      {/* Background decorative elements */}
      <WrappedBackgroundDesign />

      <div className="relative z-10 p-6">
        {/* Character image */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-48 bg-white rounded-lg p-2  shadow-lg">
            <img
              src={artists?.[0].images[randomIndex].url}
              alt={artists?.[0].name}
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Top Artists */}
            <div>
              <h2 className="text-rose-50 text-lg font-bold mb-3">
                Top Artists
              </h2>
              <div className="space-y-1 text-sm">
                {artists?.map((artist, index) => (
                  <div key={artist.id} className="flex items-center gap-2">
                    <span className="text-white font-bold">#{index + 1}</span>
                    <span className="text-white">{artist.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Songs */}
            <div>
              <h2 className="text-rose-50 text-lg font-bold mb-3">Top Songs</h2>
              <div className="space-y-1 text-sm">
                {tracks?.map((track, index) => (
                  <div key={track.id} className="flex gap-2">
                    <span className="text-white font-bold">#{index + 1}</span>
                    <span className="text-white">{track.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-center">
              <h2 className="text-rose-200 text-lg font-bold mb-2">
                Top Genre
              </h2>
              <div className="text-white text-3xl font-bold">Anime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
