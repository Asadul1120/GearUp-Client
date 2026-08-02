import Image from "next/image";
import Link from "next/link";

import type { CustomerGear } from "../_types/customerGear.types";

type CustomerGearCardProps = {
  gear: CustomerGear;
};

const CustomerGearCard = ({ gear }: CustomerGearCardProps) => {
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

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500">Price per day</p>

            <p className="text-xl font-bold text-blue-600">
              ৳{gear.pricePerDay}
            </p>
          </div>

          <p className="text-sm text-gray-500">
            Stock:{" "}
            <span className="font-semibold text-gray-900">{gear.stock}</span>
          </p>
        </div>

        <Link
          href={`/customer/gear/${gear.id}`}
          className={`block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition ${
            isAvailable
              ? "bg-blue-600 hover:bg-blue-700"
              : "pointer-events-none bg-gray-400"
          }`}
        >
          {isAvailable ? "View and Rent" : "Out of Stock"}
        </Link>
      </div>
    </div>
  );
};

export default CustomerGearCard;
