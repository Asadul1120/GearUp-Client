import Image from "next/image";

import type { AdminGear } from "../_types/gear.types";

type AdminGearCardProps = {
  gear: AdminGear;
};

const AdminGearCard = ({ gear }: AdminGearCardProps) => {
  const isAvailable = gear.availability && gear.stock > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-52 bg-gray-100">
        {gear.image ? (
          <Image
            src={gear.image}
            alt={gear.name}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No image available
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {gear.category.name}
          </p>

          <h2 className="mt-1 text-lg font-bold text-gray-900">{gear.name}</h2>

          <p className="text-sm text-gray-500">{gear.brand}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600">
          {gear.description}
        </p>

        <div className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">Price per day</p>

            <p className="text-lg font-bold text-blue-600">
              ৳{gear.pricePerDay}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Stock</p>

            <p className="text-lg font-bold text-gray-900">{gear.stock}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500">Provider</p>

          <p className="mt-1 font-semibold text-gray-900">
            {gear.provider.name}
          </p>

          <p className="text-sm text-gray-500">
            {gear.provider.phone || "No phone number"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminGearCard;
