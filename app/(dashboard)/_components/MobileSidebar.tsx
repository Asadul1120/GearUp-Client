"use client";

import Link from "next/link";
import {
  X,
  LayoutDashboard,
  Users,
  Dumbbell,
  Package,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Gear",
    href: "/admin/gear",
    icon: Dumbbell,
  },
  {
    title: "Rentals",
    href: "/admin/rentals",
    icon: Package,
  },
];

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({
  open,
  onClose,
}: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b p-6">

          <Link
            href="/dashboard/admin"
            onClick={onClose}
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <ShieldCheck size={22} />
              </div>

              <div>

                <h2 className="text-lg font-bold">
                  GearUp
                </h2>

                <p className="text-xs text-gray-500">
                  Admin Panel
                </p>

              </div>

            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Menu */}

        <div className="flex-1 overflow-y-auto p-4">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-2">

            {menus.map((menu) => (
              <div
                key={menu.href}
                onClick={onClose}
              >
                <SidebarItem {...menu} />
              </div>
            ))}

          </nav>

        </div>

        {/* Bottom */}

        <div className="border-t p-5">

          <div className="mb-5 flex items-center gap-3 rounded-xl bg-slate-50 p-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
              A
            </div>

            <div>

              <h3 className="font-semibold">
                Administrator
              </h3>

              <p className="text-sm text-gray-500">
                admin@gearup.com
              </p>

            </div>

          </div>

          <form action={logoutAction}>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 font-medium text-red-600 transition hover:bg-red-100"
            >
              <LogOut size={18} />

              Logout

            </button>

          </form>

        </div>

      </aside>
    </>
  );
}