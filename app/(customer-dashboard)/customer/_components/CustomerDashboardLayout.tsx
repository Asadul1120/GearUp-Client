"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import Link from "next/link";

import { Home, Menu, ShoppingBag } from "lucide-react";

import CustomerSidebar from "./CustomerSidebar";

type CustomerDashboardLayoutProps = {
  children: ReactNode;
};

const CustomerDashboardLayout = ({
  children,
}: CustomerDashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Open the mobile sidebar
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  // Close the mobile sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Desktop sidebar */}
      <div className="fixed inset-y-0 left-0 hidden w-72 border-r border-gray-200 lg:block">
        <CustomerSidebar />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-70 max-w-[85%] border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CustomerSidebar showCloseButton={true} closeSidebar={closeSidebar} />
      </div>

      {/* Main content area */}
      <div className="min-h-screen lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-2 sm:px-5 lg:px-8">
            {/* Left section */}
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={openSidebar}
                aria-label="Open sidebar"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
              >
                <Menu size={22} />
              </button>

              <div className="min-w-0">
                <h1 className="truncate text-base font-bold text-gray-900 sm:text-lg">
                  Customer Dashboard
                </h1>

                <p className="hidden text-xs text-gray-500 sm:block">
                  Manage rentals, payments and reviews
                </p>
              </div>
            </div>

            {/* Right section */}
            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/"
                className="hidden items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:flex"
              >
                <Home size={17} />
                Home
              </Link>

              <Link
                href="/customer/rentals"
                aria-label="My rentals"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
              >
                <ShoppingBag size={19} />
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="mx-auto w-full max-w-7xl p-4 sm:p-5 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CustomerDashboardLayout;
