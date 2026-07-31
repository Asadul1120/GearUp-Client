import {
  Users,
  Dumbbell,
  Package,
  CalendarDays,
} from "lucide-react";

import StatCard from "@/app/_components/dashboard/StatCard";
import RecentActivity from "@/app/_components/dashboard/RecentActivity";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value={0}
          icon={Users}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Active Gear"
          value={0}
          icon={Dumbbell}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Total Rentals"
          value={0}
          icon={Package}
          color="bg-purple-100 text-purple-600"
        />

        <StatCard
          title="Today's Rentals"
          value={0}
          icon={CalendarDays}
          color="bg-orange-100 text-orange-600"
        />
      </div>

      {/* Recent Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RecentActivity title="Recent Users" />

        <RecentActivity title="Recent Rental Orders" />
      </div>
    </div>
  );
}