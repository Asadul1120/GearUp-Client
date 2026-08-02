const ProviderLoading = () => {
  return (
    <div className="space-y-6">
      {/* Welcome section skeleton */}
      <div className="animate-pulse rounded-2xl bg-gray-200 p-6 sm:p-8">
        <div className="h-4 w-24 rounded bg-gray-300" />

        <div className="mt-3 h-8 w-64 max-w-full rounded bg-gray-300" />

        <div className="mt-4 h-4 w-full max-w-xl rounded bg-gray-300" />

        <div className="mt-2 h-4 w-3/4 max-w-md rounded bg-gray-300" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="h-12 w-full rounded-xl bg-gray-300 sm:w-40" />

          <div className="h-12 w-full rounded-xl bg-gray-300 sm:w-40" />
        </div>
      </div>

      {/* Statistics skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="h-4 w-24 rounded bg-gray-200" />

                <div className="mt-4 h-8 w-16 rounded bg-gray-200" />

                <div className="mt-4 h-3 w-28 rounded bg-gray-200" />
              </div>

              <div className="h-12 w-12 rounded-xl bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom cards skeleton */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="h-12 w-12 rounded-xl bg-gray-200" />

            <div className="mt-5 h-6 w-44 rounded bg-gray-200" />

            <div className="mt-4 h-4 w-full rounded bg-gray-200" />

            <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />

            <div className="mt-6 h-12 w-full rounded-xl bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderLoading;
