import {
  Box,
  CheckCircle2,
  Clock3,
  PackageCheck,
} from "lucide-react";

const ProviderDashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white shadow-sm sm:p-6 lg:p-8">
        <p className="text-sm font-medium text-blue-100">
          Welcome back
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
          Provider Overview
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
          Manage your sports gear, check incoming orders and
          monitor active rentals from one place.
        </p>
      </section>

      {/* Statistics cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {/* Total gear card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Gear
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                0
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Gear added by you
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Box size={24} />
            </div>
          </div>
        </div>

        {/* Pending orders card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Orders
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                0
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Waiting for confirmation
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <Clock3 size={24} />
            </div>
          </div>
        </div>

        {/* Active rentals card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 xl:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Active Rentals
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-900">
                0
              </h3>

              <p className="mt-1 text-xs text-gray-400">
                Currently rented gear
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <PackageCheck size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom content */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Activity section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <CheckCircle2 size={21} />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Recent Activity
              </h3>

              <p className="text-sm text-gray-500">
                Your latest provider activity
              </p>
            </div>
          </div>

          <div className="mt-6 flex min-h-44 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5 text-center">
            <PackageCheck
              size={35}
              className="text-gray-300"
            />

            <p className="mt-3 font-semibold text-gray-700">
              No activity available
            </p>

            <p className="mt-1 max-w-sm text-sm text-gray-500">
              New orders and gear updates will appear here.
            </p>
          </div>
        </div>

        {/* Getting started */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-bold text-gray-900">
            Getting Started
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Complete these steps to start renting your gear.
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                1
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Add your gear
                </p>

                <p className="text-xs leading-5 text-gray-500">
                  Add gear information, price and stock.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                2
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Receive orders
                </p>

                <p className="text-xs leading-5 text-gray-500">
                  Customers can request your available gear.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                3
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Manage rentals
                </p>

                <p className="text-xs leading-5 text-gray-500">
                  Confirm, deliver and complete rental orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProviderDashboardPage;