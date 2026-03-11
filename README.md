# betterlist

betterlist is a Spotify playlist management app built with TanStack Start.

## Features

### Playlist Management

- Create, rename, and edit playlists
- Add, remove, and bulk delete tracks
- Remove duplicate tracks

### Library & Discovery

- Browse saved albums, artists, and liked songs
- Search across all content
- View artist discographies and album details

### Music Insights

- Personal listening stats (short, medium, and long-term)
- Recently played tracks and top artists

## Tech Stack

**Frontend**

- [TanStack Start](https://tanstack.com/start), [Router](https://tanstack.com/router), [Query](https://tanstack.com/query)
- [React](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn/ui](https://ui.shadcn.com/)

**Backend**

- [Better Auth](https://www.better-auth.com/), [Drizzle ORM](https://orm.drizzle.team/), [PostgreSQL](https://www.postgresql.org/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)

## Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or cloud)
- Spotify Developer account

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/betterlist.git
   cd betterlist
   ```

2. Install dependencies:

   ```bash
   bun install
   # or
   npm install
   ```

3. Set up your PostgreSQL database and get the connection string

4. Create a `.env` file in the root directory with placeholder values:

   ```env
   # Database (Required)
   DATABASE_URL=postgresql://username:password@host:port/database

   # Better Auth (Required)
   BETTER_AUTH_SECRET=your_random_secret_key
   BETTER_AUTH_URL=<YOUR_TUNNEL_URL>

   # Spotify OAuth (Required)
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

5. Set up the database schema:

   ```bash
   npx drizzle-kit push
   ```

6. Run the development server:

   ```bash
   bun run dev
   # or
   npm run dev
   ```

7. Open your browser and navigate to your tunnel URL

## Local Development with HTTPS

Spotify's OAuth requires HTTPS redirect URIs for authentication. For local development, you need to use a tunneling service like **ngrok**.

### Setup ngrok Tunnel

1. Install [ngrok](https://ngrok.com/download) and authenticate it
2. In a new terminal, create a tunnel:
   ```bash
   ngrok http 3000
   ```
3. Copy the HTTPS URL (e.g., `https://abc123.ngrok-free.app`)

### Configure Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Select your app and click **Edit Settings**
3. Add the following Redirect URI:
   ```
   https://<YOUR_NGROK_URL>/api/auth/callback/spotify
   ```
4. Save the changes

### Update Environment Variables

Update your `.env` file with the ngrok URL:

```env
BETTER_AUTH_URL=https://abc123.ngrok-free.app
```

## Support

Issues: [GitHub Issues](https://github.com/yourusername/betterlist/issues)
