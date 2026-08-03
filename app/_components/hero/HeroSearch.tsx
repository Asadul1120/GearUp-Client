"use client";

import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { type SubmitEvent, useState } from "react";

const HeroSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (
    event: SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const searchText = search.trim();

    if (!searchText) {
      router.push("/gears");
      return;
    }

    router.push(
      `/gears?search=${encodeURIComponent(searchText)}`,
    );
  };

  return (
    <div className="mt-9 w-full max-w-2xl">
      <form
        onSubmit={handleSearch}
        className="rounded-2xl border border-gray-200 bg-white/90 p-2 shadow-xl shadow-blue-100/60 backdrop-blur sm:p-3"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search gear, brand or category..."
              className="h-12 w-full rounded-xl border border-gray-200 bg-slate-50 pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            <Search size={18} />
            Search Gear
          </button>
        </div>
      </form>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500 lg:justify-start">
        <MapPin
          size={15}
          className="text-blue-600"
        />

        Discover available equipment from different providers
      </div>
    </div>
  );
};

export default HeroSearch;