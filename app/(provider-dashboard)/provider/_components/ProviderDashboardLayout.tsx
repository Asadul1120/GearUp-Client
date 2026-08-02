"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import Link from "next/link";

import {
  Home,
  Menu,
} from "lucide-react";

import ProviderSidebar from "./ProviderSidebar";

type ProviderDashboardLayoutProps = {
  children: ReactNode;
  providerName?: string;
  providerEmail?: string;
};

const ProviderDashboardLayout = ({
  children,
  providerName = "Provider",
  providerEmail = "",
}: ProviderDashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);


  const openSidebar = () => {
    setSidebarOpen(true);
  };


  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  const providerInitial =
    providerName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Desktop sidebar */}
      <div className="fixed inset-y-0 left-0 hidden w-72 border-r border-gray-200 lg:block">
        <ProviderSidebar />
      </div>

      {/* Mobile black overlay */}
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
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <ProviderSidebar
          showCloseButton={true}
          closeSidebar={closeSidebar}
        />
      </div>

      {/* Main area */}
      <div className="min-h-screen lg:pl-72">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-2 sm:px-5 lg:px-8">
            {/* Left side */}
            <div className="flex min-w-0 items-center gap-3">
              {/* Mobile menu button */}
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
                  Provider Dashboard
                </h1>

                <p className="hidden text-xs text-gray-500 sm:block">
                  Manage gear and rental orders
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              {/* Home button */}
              <Link
                href="/"
                className="hidden items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:flex"
              >
                <Home size={17} />

                Home
              </Link>

              {/* Provider information */}
              <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-1.5 pr-2 sm:gap-3 sm:pr-3">
                {/* Provider avatar */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {providerInitial}
                </div>

                {/* Name and email */}
                <div className="hidden max-w-40 sm:block">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {providerName}
                  </p>

                  {providerEmail && (
                    <p className="truncate text-xs text-gray-500">
                      {providerEmail}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Current page content */}
        <main className="mx-auto w-full max-w-7xl p-4 sm:p-5 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProviderDashboardLayout;