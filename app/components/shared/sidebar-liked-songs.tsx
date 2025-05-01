import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { likedSongsCountQuery } from "~/queries";
import likedSongsCover from "~/static/liked_cover.jpeg?url";
import { useSidebarStore } from "~/stores/use-sidebar-store";
import { Skeleton } from "../ui/skeleton";

export default function SidebarLikedSongs() {
  const library = useSidebarStore((store) => store.library);

  const { data, isPending } = useQuery({
    ...likedSongsCountQuery,
    enabled: library === "playlists",
  });

  return (
    <Link
      to="/collection/tracks"
      className="flex items-center p-2 gap-3 rounded-md hover:bg-secondary"
      activeProps={{
        className: "bg-secondary",
      }}
    >
      <img
        src={likedSongsCover}
        height={50}
        width={50}
        className="rounded-md"
        alt="Liked playlist cover"
      />

      <div className="flex flex-col gap-1">
        <h6 className="w-full text-sm font-medium">Liked Songs</h6>
        <span className="text-xs text-muted-foreground">
          {isPending ? (
            <Skeleton className="h-4 w-full" />
          ) : (
            `${data?.count} songs`
          )}
        </span>
      </div>
    </Link>
  );
}
