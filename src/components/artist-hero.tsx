import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { MusicIcon } from "lucide-react";
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
          <Skeleton className="aspect-square w-64 rounded-full" />
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
              className="h-64 w-64 rounded-full object-cover shadow-xl ring-1 ring-border"
              height={256}
              src={artist.images[0].url}
              width={256}
            />
          ) : (
            <div className="h-40 w-full">
              <MusicIcon className="h-full w-full bg-card" size={160} />
            </div>
          )}
          <div className="flex flex-col items-start gap-3">
            <h2 className="font-bold text-5xl">{artist.name}</h2>
            <span className="text-sm text-muted-foreground">
              {artist.followers?.total.toLocaleString()} followers
            </span>
            <div className="flex items-center gap-5 text-sm">
              {artist?.genres?.map((genre: string) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
