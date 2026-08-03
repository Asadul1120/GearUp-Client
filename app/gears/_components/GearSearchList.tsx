"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import type { PublicGear } from "../_types/gear.types";
import PublicGearCard from "./PublicGearCard";

type GearSearchListProps = {
  gears: PublicGear[];
};

const GearSearchList = ({
  gears,
}: GearSearchListProps) => {
  const [search, setSearch] = useState("");

  const searchText = search
    .trim()
    .toLowerCase();

  const filteredGears = gears.filter((gear) => {
    return (
      gear.name.toLowerCase().includes(searchText) ||
      gear.brand.toLowerCase().includes(searchText) ||
      gear.category.name
        .toLowerCase()
        .includes(searchText) ||
      gear.provider.name
        .toLowerCase()
        .includes(searchText)
    );
  });

  return (
    <>
      <div className="mb-7 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="relative">
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
            placeholder="Search by gear, brand, category or provider..."
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <p className="mt-3 text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredGears.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {gears.length}
          </span>{" "}
          gears
        </p>
      </div>

      {filteredGears.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
          <Search
            size={38}
            className="mx-auto text-gray-300"
          />

          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            No matching gear found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Try searching with another name, brand,
            category or provider.
          </p>
        </div>
      ) : (
        <div className="grid items-start gap-6 lg:grid-cols-2">
          {filteredGears.map((gear) => (
            <PublicGearCard
              key={gear.id}
              gear={gear}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GearSearchList;