import { Users, UserCheck, UserX } from "lucide-react";

import { getAllUsers } from "../../_actions/getAllUsers";
import UserTable from "@/app/_components/dashboard/users/UserTable";



type IUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  phone: string | null;
  profileImage: string | null;
  address: string | null;
  createdAt: string;
  updatedAt: string;
};

type Users = IUser[];

export default async function UsersPage() {
  const users : Users = await getAllUsers();

  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "ACTIVE").length;
  const suspendedUsers = users.filter(
    (user) => user.status === "SUSPENDED",
  ).length;

  return (
    <section className="space-y-8">
      {/* ---------------------------------------------------------------- */}
      {/* Page Header */}
      {/* ---------------------------------------------------------------- */}

      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>

          <p className="mt-2 text-gray-500">
            Manage customers, providers and administrators.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Statistics Cards */}
      {/* ---------------------------------------------------------------- */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {/* Total Users */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>

              <h2 className="mt-2 text-3xl font-bold">{totalUsers}</h2>
            </div>

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Active Users */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Users</p>

              <h2 className="mt-2 text-3xl font-bold text-green-600">
                {activeUsers}
              </h2>
            </div>

            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <UserCheck size={24} />
            </div>
          </div>
        </div>

        {/* Suspended Users */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Suspended Users</p>

              <h2 className="mt-2 text-3xl font-bold text-red-600">
                {suspendedUsers}
              </h2>
            </div>

            <div className="rounded-xl bg-red-100 p-3 text-red-600">
              <UserX size={24} />
            </div>
          </div>
        </div>
      </div>

 
      {/* ---------------------------------------------------------------- */}
      {/* User Table */}
      {/* ---------------------------------------------------------------- */}

      <UserTable users={users} />
    </section>
  );
}
