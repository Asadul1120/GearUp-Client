import { connection } from "next/server";

import { getCustomerGears } from "../_actions/customerGearActions";
import CustomerGearCard from "../_components/CustomerGearCard";

const CustomerGearPage = async () => {
  await connection();

  const result = await getCustomerGears();

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Browse Gear</h1>

        <p className="mt-1 text-sm text-gray-500">
          Find available fitness gear for rent
        </p>
      </div>

      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {result.message}
        </div>
      )}

      {result.success && result.data.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
          <h2 className="text-lg font-semibold text-gray-900">No gear found</h2>

          <p className="mt-2 text-sm text-gray-500">
            Available gear will appear here.
          </p>
        </div>
      )}

      {result.data.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {result.data.map((gear) => (
            <CustomerGearCard key={gear.id} gear={gear} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomerGearPage;
