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

- [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing platform
- [Better Auth](https://www.better-auth.com/) - Authentication library
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM
- [Cloudflare D1](https://developers.cloudflare.com/d1/) - SQLite database
- [Spotify Web API](https://developer.spotify.com/documentation/web-api) - Music data API

## Installation

### Prerequisites

- Node.js 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Cloudflare account
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

3. Authenticate with Cloudflare:

   ```bash
   npx wrangler login
   ```

4. Create a D1 database:

   ```bash
   npx wrangler d1 create betterlist
   ```

5. Create a `.dev.vars` file in the root directory:

   ```env
   # Cloudflare (Required)
   CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
   CLOUDFLARE_DATABASE_ID=your_d1_database_id
   CLOUDFLARE_D1_TOKEN=your_cloudflare_api_token

   # Better Auth (Required)
   BETTER_AUTH_SECRET=your_random_secret_key
   BETTER_AUTH_URL=<ngrok_url>

   # Spotify OAuth (Required)
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

6. Set up the database schema:

   ```bash
   npx drizzle-kit push
   ```

7. Start ngrok tunnel (in a separate terminal):

   ```bash
   ngrok http 3000
   ```

8. Run the development server:

   ```bash
   bun run dev
   # or
   npm run dev
   ```

9. Open your browser and navigate to your ngrok URL

## Deployment

Deploy to Cloudflare Workers:

```bash
bun run deploy
# or
npm run deploy
```

This builds the app and deploys it to Cloudflare Workers using the configuration in `wrangler.jsonc`.

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

## Scripts

- `dev` - Start the development server
- `build` - Build for production
- `preview` - Preview the production build locally
- `deploy` - Build and deploy to Cloudflare Workers
- `cf-typegen` - Generate Cloudflare Workers types
- `fmt` - Format code with oxfmt
- `fmt:check` - Check code formatting

## Support

Issues: [GitHub Issues](https://github.com/yourusername/betterlist/issues)
