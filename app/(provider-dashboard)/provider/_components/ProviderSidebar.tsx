"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Dumbbell,
  Home,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Package,
  PlusCircle,
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

  // Check which menu is currently active
  const dashboardActive = pathname === "/provider";

  const myGearActive =
    pathname === "/provider/gear" || pathname.includes("/edit");

  const addGearActive = pathname === "/provider/gear/new";

  const ordersActive = pathname === "/provider/orders";

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
            <h2 className="text-lg font-bold text-gray-900">GearUp</h2>

            <p className="text-xs text-gray-500">Provider Panel</p>
          </div>
        </Link>

        {/* This button only appears on mobile */}
        {showCloseButton && (
          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        )}
      </div>

      {/* Navigation menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        {/* Dashboard link */}
        <Link
          href="/provider"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            dashboardActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        {/* My Gear link */}
        <Link
          href="/provider/gear"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            myGearActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <Package size={20} />
          My Gear
        </Link>

        {/* Add Gear link */}
        <Link
          href="/provider/gear/new"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            addGearActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <PlusCircle size={20} />
          Add Gear
        </Link>

        {/* Rental Orders link */}
        <Link
          href="/provider/orders"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            ordersActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <ListOrdered size={20} />
          Rental Orders
        </Link>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-gray-200 p-4">
        {/* Home link */}
        <Link
          href="/"
          onClick={closeSidebar}
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
        >
          <Home size={19} />
          Back to Home
        </Link>

        {/* Logout button */}
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
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
