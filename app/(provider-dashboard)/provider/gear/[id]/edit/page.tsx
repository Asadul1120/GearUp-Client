import Link from "next/link";

import {
  ArrowLeft,
  Pencil,
} from "lucide-react";

import {
  getCategories,
  getSingleGear,
} from "../../../_actions/providerGearActions";

import EditGearForm from "../../../_components/EditGearForm";

type EditGearPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EditGearPage = async ({
  params,
}: EditGearPageProps) => {
  // URL থেকে gear ID নেওয়া
  const { id } = await params;

  // Backend থেকে gear এবং category আনা
  const gearResult = await getSingleGear(id);
  const categoryResult = await getCategories();

  // Gear পাওয়া না গেলে error page দেখাবে
  if (!gearResult.success || !gearResult.data) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
        <h1 className="text-xl font-bold text-red-600">
          Gear could not be loaded
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          {gearResult.message}
        </p>

        <Link
          href="/provider/gear"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <ArrowLeft size={18} />

          Back to My Gear
        </Link>
      </div>
    );
  }

  const gear = gearResult.data;
  const categories = categoryResult.data;

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Back link */}
      <Link
        href="/provider/gear"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600"
      >
        <ArrowLeft size={18} />

        Back to My Gear
      </Link>

      {/* Page heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <Pencil size={23} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Edit Gear
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Update the information for {gear.name}.
          </p>
        </div>
      </div>

      {/* Category load error */}
      {!categoryResult.success && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            {categoryResult.message}
          </p>
        </div>
      )}

      {/* No category message */}
      {categoryResult.success &&
        categories.length === 0 && (
          <div className="mb-5 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm font-medium text-orange-700">
              No category is available. Please contact the
              administrator.
            </p>
          </div>
        )}

      {/* Edit form */}
      <EditGearForm
        gear={gear}
        categories={categories}
      />
    </div>
  );
};

export default EditGearPage;