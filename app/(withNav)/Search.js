import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon
            className="w-5 h-5 text-black"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          className="block pl-10 border-[#E3E1E1] rounded-md w-[300px] placeholder:text-black  sm:text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
