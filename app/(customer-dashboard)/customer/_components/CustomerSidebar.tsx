"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CreditCard,
  Dumbbell,
  Home,
  LayoutDashboard,
  LogOut,
  PackageSearch,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";

import { logoutAction } from "@/app/(auth)/_actions/logoutAction";

type CustomerSidebarProps = {
  showCloseButton?: boolean;
  closeSidebar?: () => void;
};

const CustomerSidebar = ({
  showCloseButton = false,
  closeSidebar,
}: CustomerSidebarProps) => {
  const pathname = usePathname();

  const dashboardActive = pathname === "/customer";

  const gearActive = pathname.startsWith("/customer/gear");

  const rentalsActive = pathname.startsWith("/customer/rentals");

  const paymentsActive = pathname.startsWith("/customer/payments");

  const reviewsActive = pathname.startsWith("/customer/reviews");

  return (
    <aside className="flex h-full w-full flex-col bg-white">
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

            <p className="text-xs text-gray-500">Customer Panel</p>
          </div>
        </Link>

        {showCloseButton && (
          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={22} />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <Link
          href="/customer"
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

        <Link
          href="/customer/gear"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            gearActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <PackageSearch size={20} />
          Browse Gear
        </Link>

        <Link
          href="/customer/rentals"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            rentalsActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <ShoppingBag size={20} />
          My Rentals
        </Link>

        <Link
          href="/customer/payments"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            paymentsActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <CreditCard size={20} />
          Payments
        </Link>

        <Link
          href="/customer/reviews"
          onClick={closeSidebar}
          className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            reviewsActive
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          <Star size={20} />
          My Reviews
        </Link>
      </nav>

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

export default CustomerSidebar;
