const ProfileLoading = () => {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="flex flex-col items-center bg-gray-200 px-6 py-10">
          <div className="h-20 w-20 animate-pulse rounded-full bg-gray-300" />

          <div className="mt-4 h-7 w-40 animate-pulse rounded bg-gray-300" />

          <div className="mt-2 h-4 w-28 animate-pulse rounded bg-gray-300" />
        </div>

        <div className="space-y-4 p-5 sm:p-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
            >
              <div className="h-11 w-11 animate-pulse rounded-xl bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

                <div className="h-5 w-44 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProfileLoading;