import { useNavigate } from "@tanstack/react-router";
import { setSearchInput, useGlobalStore } from "~/stores/use-global-store";
import { Input } from "../ui/input";

export default function SearchInput() {
  const navigate = useNavigate();
  const searchInput = useGlobalStore((store) => store.searchInput);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchInput != "") {
      await navigate({ to: "/search/$query", params: { query: searchInput } });
    }
  };

  return (
    <form
      className="flex items-center justify-between w-1/2 gap-3 px-3 py-1.5 rounded-full"
      onSubmit={handleSubmit}
    >
      <Input
        className="flex-grow w-full border-none"
        placeholder="Artists, Songs, Playlists"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
