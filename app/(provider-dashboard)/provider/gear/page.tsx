import Link from "next/link";

import {
  Package,
  Plus,
} from "lucide-react";

import { getProviderGears } from "../_actions/providerGearActions";
import GearCard from "../_components/GearCard";

const ProviderGearPage = async () => {
  // Server Action থেকে Provider-এর gear নেওয়া
  const result = await getProviderGears();

  // Gear array আলাদা variable-এ রাখা
  const gears = result.data;

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            My Gear
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View and manage all gear added by you.
          </p>
        </div>

        <Link
          href="/provider/gear/new"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          <Plus size={19} />

          Add New Gear
        </Link>
      </div>

      {/* Error message */}
      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            {result.message}
          </p>
        </div>
      )}

      {/* No gear message */}
      {result.success && gears.length === 0 && (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Package size={30} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            No gear added yet
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            Add your first sports or outdoor gear so
            customers can rent it.
          </p>

          <Link
            href="/provider/gear/new"
            className="mt-5 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />

            Add First Gear
          </Link>
        </div>
      )}

      {/* Gear list */}
      {result.success && gears.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {gears.map((gear) => (
            <GearCard
              key={gear.id}
              gear={gear}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderGearPage;