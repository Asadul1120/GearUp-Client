import { Search } from "lucide-react";

const HeroSearch = () => {
  return (
    <div className="mt-14 w-full max-w-4xl">
      <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl md:flex-row md:items-center">

        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search sports gear..."
            className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 text-gray-700 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-600 focus:bg-white"
          />
        </div>

        {/* Search Button */}
        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          <Search size={18} />
          Search
        </button>

      </div>
    </div>
  );
};

export default HeroSearch;