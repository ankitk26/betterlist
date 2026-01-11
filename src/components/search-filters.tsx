import { Link, useParams } from "@tanstack/react-router"

const searchFilterTags = [
  { link: "", label: "All" },
  { link: "/tracks", label: "Songs" },
  { link: "/albums", label: "Albums" },
  { link: "/artists", label: "Artists" },
  { link: "/playlists", label: "Playlists" },
]

export default function SearchFilters() {
  const { query } = useParams({ from: "/_protected/search/$query" })

  return (
    <div className="flex items-center gap-2 text-sm">
      {searchFilterTags.map((tag) => {
        const href = `/search/$query/${tag.link}`
        return (
          <Link
            className="rounded-full bg-secondary px-4 py-1 font-medium transition-colors"
            key={tag.label}
            params={{ query }}
            to={href}
          >
            {tag.label}
          </Link>
        )
      })}
    </div>
  )
}
