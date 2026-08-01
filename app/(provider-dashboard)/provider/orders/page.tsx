import { connection } from "next/server";

import { ClipboardList, PackageSearch } from "lucide-react";

import { getProviderOrders } from "../_actions/providerOrderActions";
import OrderCard from "../_components/OrderCard";

const ProviderOrdersPage = async () => {
  await connection();

  const result = await getProviderOrders();

  const orders = result.data;

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <ClipboardList size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Rental Orders
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              View and manage customer rental orders.
            </p>
          </div>
        </div>
      </div>

      {/* Total order information */}
      {result.success && orders.length > 0 && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-700">
            You have <span className="font-bold">{orders.length}</span> rental
            order
            {orders.length > 1 ? "s" : ""}.
          </p>
        </div>
      )}

      {/* Error message */}
      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">{result.message}</p>
        </div>
      )}

      {/* Empty order message */}
      {result.success && orders.length === 0 && (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <PackageSearch size={30} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            No rental orders yet
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            When a customer rents one of your gear items, the order will appear
            here.
          </p>
        </div>
      )}

      {/* Order list */}
      {result.success && orders.length > 0 && (
        <div className="space-y-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProviderOrdersPage;
