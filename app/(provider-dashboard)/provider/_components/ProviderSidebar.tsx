"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dumbbell,
  Home,
  LayoutDashboard,
  LogOut,
  X,
} from "lucide-react";

import { logoutAction } from "@/app/(auth)/_actions/logoutAction";

type ProviderSidebarProps = {
  showCloseButton?: boolean;
  closeSidebar?: () => void;
};

const ProviderSidebar = ({
  showCloseButton = false,
  closeSidebar,
}: ProviderSidebarProps) => {
  const pathname = usePathname();

  const dashboardActive = pathname === "/provider";

  return (
    <aside className="flex h-full w-full flex-col bg-white">
      {/* Logo section */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
        <Link
          href="/"
          onClick={closeSidebar}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Dumbbell size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              GearUp
            </h2>

            <p className="text-xs text-gray-500">
              Provider Panel
            </p>
          </div>
        </Link>

        {/* Only mobile sidebar shows this button */}
        {showCloseButton && (
          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        )}
      </div>

      {/* Menu section */}
      <nav className="flex-1 p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <Link
          href="/provider"
          onClick={closeSidebar}
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            dashboardActive
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <LayoutDashboard size={20} />

          Dashboard
        </Link>

        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-700">
            Provider Features
          </p>

          <p className="mt-1 text-xs leading-5 text-blue-600">
            Gear management and rental orders will be added
            step by step.
          </p>
        </div>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/"
          onClick={closeSidebar}
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
        >
          <Home size={19} />

          Back to Home
        </Link>

        <form action={logoutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={19} />

            Logout
          </button>
        </form>
      </div>
    </aside>
  );
};

export default ProviderSidebar;