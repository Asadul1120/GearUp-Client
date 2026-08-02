import Link from "next/link";
import { connection } from "next/server";

import {
  Banknote,
  CheckCircle2,
  Clock3,
  Package,
  PackageCheck,
  Plus,
} from "lucide-react";

import { getProviderDashboardStats } from "./_actions/providerDashboardActions";

import DashboardStatCard from "./_components/DashboardStatCard";

const ProviderDashboardPage = async () => {
  await connection();

  const result = await getProviderDashboardStats();

  const stats = result.data;

  // if(true) {
  //   throw new Error("Failed to load provider dashboard statistics.");
  // }

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-5 text-white shadow-sm sm:p-6 lg:p-8">
        <p className="text-sm font-medium text-blue-100">Welcome back</p>

        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
          Provider Dashboard
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
          Manage your gear, check rental orders and track your provider activity
          from one place.
        </p>

        {/* Quick buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/provider/gear/new"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            <Plus size={18} />
            Add New Gear
          </Link>

          <Link
            href="/provider/orders"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <PackageCheck size={18} />
            View Orders
          </Link>
        </div>
      </section>

      {/* Error message */}
      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">{result.message}</p>
        </div>
      )}

      {/* Statistics cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <DashboardStatCard
          title="Total Gear"
          value={stats.totalGear}
          description="Gear added by you"
          icon={Package}
          iconStyle="bg-blue-100 text-blue-600"
        />

        <DashboardStatCard
          title="Pending Orders"
          value={stats.pendingOrders}
          description="Waiting for confirmation"
          icon={Clock3}
          iconStyle="bg-orange-100 text-orange-600"
        />

        <DashboardStatCard
          title="Active Rentals"
          value={stats.activeRentals}
          description="Currently active rentals"
          icon={PackageCheck}
          iconStyle="bg-purple-100 text-purple-600"
        />

        <DashboardStatCard
          title="Completed"
          value={stats.completedRentals}
          description="Returned rental orders"
          icon={CheckCircle2}
          iconStyle="bg-green-100 text-green-600"
        />

        <DashboardStatCard
          title="Total Revenue"
          value={`৳${stats.totalRevenue}`}
          description="Revenue from paid orders"
          icon={Banknote}
          iconStyle="bg-emerald-100 text-emerald-600"
        />
      </section>

      {/* Management section */}
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Gear management */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Package size={24} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Gear Management
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add new gear, update price and stock, change availability or remove
            gear from your inventory.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/provider/gear"
              className="flex flex-1 items-center justify-center rounded-xl border border-blue-200 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              View My Gear
            </Link>

            <Link
              href="/provider/gear/new"
              className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Add Gear
            </Link>
          </div>
        </div>

        {/* Order management */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <PackageCheck size={24} />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            Order Management
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Confirm new orders, monitor payments and update pickup or return
            status.
          </p>

          <Link
            href="/provider/orders"
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
          >
            Manage Rental Orders
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProviderDashboardPage;
