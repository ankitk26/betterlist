import { Link, useCanGoBack, useRouter } from "@tanstack/react-router"
import { ChevronLeftIcon } from "lucide-react"
import { authClient } from "~/lib/auth-client"
import HeaderAvatar from "./header-avatar"
import SearchInput from "./search-input"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"

export default function Header() {
  const { isPending } = authClient.useSession()
  const canGoBack = useCanGoBack()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 mx-4 flex items-center justify-between rounded-lg p-2">
      <Link to="/">
        <h1>betterlist</h1>
      </Link>

      <div className="flex items-center gap-2 w-1/2">
        {canGoBack && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              router.history.back()
            }}
          >
            <ChevronLeftIcon />
            Back
          </Button>
        )}
        <SearchInput />
      </div>

      <div className="flex items-center gap-3">
        {isPending && (
          <div className="flex items-center gap-2">
            <Skeleton className="size-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        )}

        {!isPending && <HeaderAvatar />}
      </div>
    </header>
  )
}
