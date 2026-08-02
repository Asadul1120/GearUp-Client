const AdminLoading = () => {
  return (
    <section>
      <div className="mb-6 space-y-2">
        <div className="h-7 w-48 animate-pulse rounded-lg bg-gray-200" />

        <div className="h-4 w-72 animate-pulse rounded-lg bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200" />

            <div className="flex-1 space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

              <div className="h-7 w-16 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminLoading;