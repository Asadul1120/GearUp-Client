import { connection } from "next/server";

import {
  Package,
  Tags,
  UserRoundCheck,
  UserRoundX,
  Users,
  Warehouse,
} from "lucide-react";

import { getAdminDashboardData } from "./_actions/adminDashboardActions";
import AdminStatCard from "./_components/AdminStatCard";

const AdminDashboardPage = async () => {
  await connection();

  const result = await getAdminDashboardData();
  const stats = result.data;

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Overview of the GearUp platform
        </p>
      </div>

      {!result.success && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {result.message}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AdminStatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
        />

        <AdminStatCard
          title="Customers"
          value={stats.totalCustomers}
          icon={UserRoundCheck}
        />

        <AdminStatCard
          title="Providers"
          value={stats.totalProviders}
          icon={Warehouse}
        />

        <AdminStatCard
          title="Suspended Users"
          value={stats.suspendedUsers}
          icon={UserRoundX}
        />

        <AdminStatCard
          title="Total Gears"
          value={stats.totalGears}
          icon={Package}
        />

        <AdminStatCard
          title="Categories"
          value={stats.totalCategories}
          icon={Tags}
        />
      </div>
    </section>
  );
};

export default AdminDashboardPage;
