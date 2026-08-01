import Link from "next/link";
import { connection } from "next/server";

import {
  ArrowLeft,
  PackagePlus,
} from "lucide-react";

import { getCategories } from "../../_actions/providerGearActions";
import GearForm from "../../_components/GearForm";

const AddGearPage = async () => {
  /*
   * এই page build time-এ data fetch করবে না।
   * User page open করার পরে data fetch করবে।
   */
  await connection();

  // Backend থেকে category আনা
  const categoryResult = await getCategories();

  // Category array নেওয়া
  const categories = categoryResult.data;

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Back button */}
      <Link
        href="/provider/gear"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-blue-600"
      >
        <ArrowLeft size={18} />

        Back to My Gear
      </Link>

      {/* Page heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <PackagePlus size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Add New Gear
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Add your sports or outdoor gear information.
          </p>
        </div>
      </div>

      {/* Category error */}
      {!categoryResult.success && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            {categoryResult.message}
          </p>
        </div>
      )}

      {/* No category */}
      {categoryResult.success &&
        categories.length === 0 && (
          <div className="mb-5 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-medium text-orange-700">
              No category is available. Please contact the
              administrator.
            </p>
          </div>
        )}

      {/* Gear form */}
      <GearForm categories={categories} />
    </div>
  );
};

export default AddGearPage;