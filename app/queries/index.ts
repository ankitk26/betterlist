import { queryOptions } from "@tanstack/react-query";
import { getAlbumById } from "~/server-fns/get-album-by-id";
import { getArtistAlbums } from "~/server-fns/get-artist-albums";
import { getArtistAppearsOn } from "~/server-fns/get-artist-appears-on";
import { getArtistById } from "~/server-fns/get-artist-by-id";
import { getArtistCompilation } from "~/server-fns/get-artist-compilation";
import { getArtistSingles } from "~/server-fns/get-artist-singles";
import { getArtistTopTracks } from "~/server-fns/get-artist-top-tracks";
import { getAuthSession } from "~/server-fns/get-auth-session";
import { getLikedSongs } from "~/server-fns/get-liked-songs";
import { getLikedSongsCount } from "~/server-fns/get-liked-songs-count";
import { getPlaylistById } from "~/server-fns/get-playlist-by-id";
import { getRecentlyPlayed } from "~/server-fns/get-recently-played";
import {
  getSearchItems,
  SearchItemsParams,
} from "~/server-fns/get-search-items";
import { getUserAlbums } from "~/server-fns/get-user-albums";
import { getUserArtists } from "~/server-fns/get-user-artists";
import { getUserPlaylists } from "~/server-fns/get-user-playlists";
import {
  getUserTopArtists,
  UserTopArtistsParams,
} from "~/server-fns/get-user-top-artists";
import {
  getUserTopTracks,
  UserTopTracksParams,
} from "~/server-fns/get-user-top-tracks";

export const authSessionQuery = queryOptions({
  queryKey: ["auth", "session"],
  queryFn: ({ signal }) => getAuthSession({ signal }),
});

export const likedSongsCountQuery = queryOptions({
  queryKey: ["liked_songs_count"],
  queryFn: () => getLikedSongsCount(),
});

export const userPlaylistsQuery = queryOptions({
  queryKey: ["user_playlists"],
  queryFn: () => getUserPlaylists(),
});

export const userAlbumsQuery = queryOptions({
  queryKey: ["user_albums"],
  queryFn: () => getUserAlbums(),
});

export const userArtistsQuery = queryOptions({
  queryKey: ["user_artists"],
  queryFn: () => getUserArtists(),
});

export const userTopTracksQuery = (params: UserTopTracksParams) =>
  queryOptions({
    queryKey: ["user_top_tracks", { ...params }],
    queryFn: () => getUserTopTracks({ data: { ...params } }),
  });

export const userTopArtistsQuery = (params: UserTopArtistsParams) =>
  queryOptions({
    queryKey: ["user_top_artists", { ...params }],
    queryFn: () => getUserTopArtists({ data: { ...params } }),
  });

export const recentlyPlayedQuery = queryOptions({
  queryKey: ["recently_played"],
  queryFn: () => getRecentlyPlayed(),
});

export const albumByIdQuery = (albumId: string) =>
  queryOptions({
    queryKey: ["album", albumId],
    queryFn: () => getAlbumById({ data: albumId }),
  });

export const artistByIdQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", artistId],
    queryFn: () => getArtistById({ data: artistId }),
  });

export const artistTopTracksQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", "top_tracks", artistId],
    queryFn: () => getArtistTopTracks({ data: artistId }),
  });

export const artistAlbumsQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", "albums", artistId],
    queryFn: () => getArtistAlbums({ data: artistId }),
  });

export const artistSinglesQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", "singles", artistId],
    queryFn: () => getArtistSingles({ data: artistId }),
  });

export const artistCompilationQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", "compilation", artistId],
    queryFn: () => getArtistCompilation({ data: artistId }),
  });

export const artistAppearsOnQuery = (artistId: string) =>
  queryOptions({
    queryKey: ["artist", "appears_on", artistId],
    queryFn: () => getArtistAppearsOn({ data: artistId }),
  });

export const playlistByIdQuery = (playlistId: string) =>
  queryOptions({
    queryKey: ["playlist", playlistId],
    queryFn: () => getPlaylistById({ data: playlistId }),
  });

export const likedSongsQuery = queryOptions({
  queryKey: ["liked_songs"],
  queryFn: () => getLikedSongs(),
});

export const searchItemsQuery = (params: SearchItemsParams) =>
  queryOptions({
    queryKey: ["search", { ...params }],
    queryFn: () => getSearchItems({ data: { ...params } }),
  });
