import { useNavigate } from "@tanstack/react-router";
import { setSearchInput, useGlobalStore } from "~/stores/use-global-store";
import { Input } from "../ui/input";

export default function SearchInput() {
  const navigate = useNavigate();
  const searchInput = useGlobalStore((store) => store.searchInput);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchInput !== "") {
      navigate({ to: "/search/$query", params: { query: searchInput } });
    }
  };

  return (
    <form
      className="flex w-1/2 items-center justify-between gap-3 rounded-full px-3 py-1.5"
      onSubmit={handleSubmit}
    >
      <Input
        className="w-full flex-grow border-border dark:border-none"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Artists, Songs, Playlists"
        spellCheck={false}
        value={searchInput}
      />
    </form>
  );
}
