import { useCallback, useMemo } from "react";
import type { Track } from "~/types";
import { Button } from "./ui/button";

type Props = {
  tracks: Track[];
};

export default function RemoveDuplicatesButton(props: Props) {
  const getTracksCounter = useCallback(() => {
    const idCounts = new Map<string, number>();
    for (const track of props.tracks) {
      if (track.id) {
        idCounts.set(track.id, (idCounts.get(track.id) || 0) + 1);
      }
    }
    return idCounts;
  }, [props.tracks]);

  const tracksCounter = useMemo(() => getTracksCounter(), [getTracksCounter]);
  const hasDuplicates = useMemo(
    () => tracksCounter.size !== props.tracks.length,
    [props.tracks, tracksCounter.size]
  );

  return (
    <Button
      size="sm"
      className="text-xs"
      variant="destructive"
      disabled={!hasDuplicates}
    >
      Remove duplicates
    </Button>
  );
}
