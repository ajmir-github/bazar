import { SearchIcon } from "@/components/Icons";

export default function SearchRoute() {
  return (
    <div className="grid">
      <div className="p-2 md:p-4">
        <form className="flex w-full items-center space-x-2">
          <input type="email" placeholder="Search" />
          <button type="submit" className="gap-2">
            <SearchIcon /> <span className="md:block hidden">Search</span>
          </button>
        </form>
      </div>

      <div className="p-2 md:p-4 grid gap-2">
        <div className="grid">
          <div className="divider">Accounts (3)</div>
          <div>Accounts</div>
        </div>
        <div className="grid">
          <div className="divider">Posts (10)</div>
          <div>Posts</div>
        </div>
      </div>
    </div>
  );
}
