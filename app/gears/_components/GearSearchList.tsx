"use client";

import { Search, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import type { PublicGear } from "../_types/gear.types";
import PublicGearCard from "./PublicGearCard";

type GearSearchListProps = {
  gears: PublicGear[];
};

const GearSearchList = ({
  gears,
}: GearSearchListProps) => {
  const searchParams = useSearchParams();

  const urlSearch =
    searchParams.get("search") || "";

  const [search, setSearch] =
    useState(urlSearch);

  useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  const searchText = search
    .trim()
    .toLowerCase();

  const filteredGears = gears.filter((gear) => {
    return (
      gear.name
        .toLowerCase()
        .includes(searchText) ||
      gear.brand
        .toLowerCase()
        .includes(searchText) ||
      gear.category.name
        .toLowerCase()
        .includes(searchText) ||
      gear.provider.name
        .toLowerCase()
        .includes(searchText) ||
      gear.description
        .toLowerCase()
        .includes(searchText)
    );
  });

  return (
    <>
      <div className="mb-7 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
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
              placeholder="Search by gear, brand, category or provider..."
              className="h-12 w-full rounded-xl border border-gray-300 bg-slate-50 pl-12 pr-11 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-500"
              >
                <X size={19} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-gray-900">
              {filteredGears.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-900">
              {gears.length}
            </span>{" "}
            gears
          </p>

          {search && (
            <p className="text-sm text-gray-500">
              Search result for{" "}
              <span className="font-semibold text-blue-600">
                “{search}”
              </span>
            </p>
          )}
        </div>
      </div>

      {filteredGears.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Search size={30} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-900">
            No matching gear found
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Try another gear name, brand, category,
            provider or description.
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Clear Search
          </button>
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