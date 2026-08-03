const statCards = Array.from(
  { length: 6 },
  (_, index) => index,
);

const activityItems = Array.from(
  { length: 5 },
  (_, index) => index,
);

const tableRows = Array.from(
  { length: 5 },
  (_, index) => index,
);

const AdminLoading = () => {
  return (
    <section
      aria-busy="true"
      aria-label="Loading admin dashboard"
      className="min-h-[calc(100vh-8rem)]"
    >
      <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="h-8 w-52 animate-pulse rounded-lg bg-gray-200" />

          <div className="h-4 w-full max-w-sm animate-pulse rounded-lg bg-gray-200 sm:w-80" />
        </div>

        <div className="h-11 w-36 animate-pulse rounded-xl bg-gray-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map((item) => (
          <article
            key={item}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 animate-pulse rounded-full bg-gray-100" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="space-y-3">
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

                <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200" />

                <div className="h-3 w-24 animate-pulse rounded bg-gray-100" />
              </div>

              <div className="h-13 w-13 animate-pulse rounded-2xl bg-gray-200" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />

              <div className="h-3 w-52 animate-pulse rounded bg-gray-100" />
            </div>

            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200" />
          </div>

          <div className="mt-8 flex h-64 items-end gap-3 rounded-2xl bg-slate-50 p-5 sm:gap-5">
            {[45, 70, 55, 85, 65, 92, 75].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex h-full flex-1 items-end"
                >
                  <div
                    style={{
                      height: `${height}%`,
                    }}
                    className="w-full animate-pulse rounded-t-lg bg-gray-200"
                  />
                </div>
              ),
            )}
          </div>

          <div className="mt-4 flex justify-between gap-3">
            {Array.from(
              { length: 7 },
              (_, index) => (
                <div
                  key={index}
                  className="h-3 flex-1 animate-pulse rounded bg-gray-100"
                />
              ),
            )}
          </div>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="space-y-2">
            <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-48 animate-pulse rounded bg-gray-100" />
          </div>

          <div className="mt-6 space-y-5">
            {activityItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div className="h-11 w-11 shrink-0 animate-pulse rounded-full bg-gray-200" />

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-2/5 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="space-y-2">
            <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />

            <div className="h-3 w-56 animate-pulse rounded bg-gray-100" />
          </div>

          <div className="h-10 w-full animate-pulse rounded-xl bg-gray-200 sm:w-56" />
        </div>

        <div className="hidden grid-cols-5 gap-4 border-b border-gray-100 bg-slate-50 px-6 py-4 md:grid">
          {Array.from(
            { length: 5 },
            (_, index) => (
              <div
                key={index}
                className="h-3 w-20 animate-pulse rounded bg-gray-200"
              />
            ),
          )}
        </div>

        <div className="divide-y divide-gray-100">
          {tableRows.map((item) => (
            <div
              key={item}
              className="grid gap-4 p-5 md:grid-cols-5 md:items-center md:px-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200" />

                <div className="space-y-2">
                  <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
                </div>
              </div>

              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />

              <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-200 md:justify-self-end" />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default AdminLoading;