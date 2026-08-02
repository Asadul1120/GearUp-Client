import { connection } from "next/server";
import {
  CheckCircle,
  Clock,
  CreditCard,
  Package,
  ShoppingBag,
} from "lucide-react";

import { getCustomerDashboardData } from "./_actions/customerDashboardActions";
import CustomerStatCard from "./_components/CustomerStatCard";

const CustomerDashboardPage = async () => {
  await connection();

  const result = await getCustomerDashboardData();
  const stats = result.data;

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Overview of your rental activities
        </p>
      </div>

      {!result.success && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {result.message}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <CustomerStatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingBag}
        />

        <CustomerStatCard
          title="Pending Orders"
          value={stats.pendingOrders}
          icon={Clock}
        />

        <CustomerStatCard
          title="Active Rentals"
          value={stats.activeRentals}
          icon={Package}
        />

        <CustomerStatCard
          title="Completed Orders"
          value={stats.completedOrders}
          icon={CheckCircle}
        />

        <CustomerStatCard
          title="Total Payments"
          value={`৳${stats.totalPayments}`}
          icon={CreditCard}
        />
      </div>
    </section>
  );
};

export default CustomerDashboardPage;
