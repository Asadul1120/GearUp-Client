"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">

        {/* Mobile Menu */}

        <div className="flex items-center gap-3">

          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="hidden text-sm text-gray-500 md:block">
              Welcome back 👋
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="hidden w-full max-w-md lg:block">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search users, gear..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Notification */}

          <button className="relative rounded-xl p-2 transition hover:bg-gray-100">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              A
            </div>

            <div className="hidden text-left md:block">
              <h3 className="text-sm font-semibold">
                Admin
              </h3>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}