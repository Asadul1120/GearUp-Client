const ProviderOrdersPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Rental Orders
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage customer rental orders.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          No orders loaded yet
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Provider order management will be added next.
        </p>
      </div>
    </div>
  );
};

export default ProviderOrdersPage;