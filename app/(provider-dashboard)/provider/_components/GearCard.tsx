import Link from "next/link";

import { Package, Pencil, Trash2 } from "lucide-react";

import type { Gear } from "../_types/gear.types";

type GearCardProps = {
  gear: Gear;
};

const GearCard = ({ gear }: GearCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Gear image */}
      <div className="flex h-48 items-center justify-center bg-gray-100">
        {gear.image ? (
          <img
            src={gear.image}
            alt={gear.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <Package size={45} className="text-gray-300" />
        )}
      </div>

      {/* Gear information */}
      <div className="p-4 sm:p-5">
        {/* Name and availability */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{gear.name}</h2>

            <p className="mt-1 text-sm text-gray-500">{gear.brand}</p>
          </div>

          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
              gear.availability
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {gear.availability ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600">
          {gear.description}
        </p>

        {/* Price and stock */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-blue-50 p-3">
            <p className="text-xs text-gray-500">Price per day</p>

            <p className="mt-1 font-bold text-blue-700">৳{gear.pricePerDay}</p>
          </div>

          <div className="rounded-xl bg-gray-100 p-3">
            <p className="text-xs text-gray-500">Stock</p>

            <p className="mt-1 font-bold text-gray-800">{gear.stock}</p>
          </div>
        </div>

        {/* Category */}
        <div className="mt-4">
          <p className="text-xs text-gray-500">Category</p>

          <p className="mt-1 text-sm font-semibold text-gray-800">
            {gear.category?.name || "No category"}
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/provider/gear/${gear.id}/edit`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-200 px-4 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <Pencil size={17} />
            Edit
          </Link>

          <button
            type="button"
            disabled
            className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-red-100 px-4 py-2.5 text-sm font-semibold text-red-300"
          >
            <Trash2 size={17} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GearCard;
