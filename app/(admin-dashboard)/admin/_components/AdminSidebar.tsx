"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Dumbbell,
  Home,
  LayoutDashboard,
  LogOut,
  Package,
  Tags,
  UserRoundCog,
  X,
} from "lucide-react";

import { logoutAction } from "@/app/(auth)/_actions/logoutAction";

type AdminSidebarProps = {
  showCloseButton?: boolean;
  closeSidebar?: () => void;
};

const AdminSidebar = ({
  showCloseButton = false,
  closeSidebar,
}: AdminSidebarProps) => {
  const pathname = usePathname();

  const dashboardActive = pathname === "/admin";
  const usersActive = pathname.startsWith("/admin/users");
  const gearsActive = pathname.startsWith("/admin/gears");
  const categoriesActive = pathname.startsWith("/admin/categories");

  const menuClass = (active: boolean) =>
    `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

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

            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </Link>

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

      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <Link
          href="/admin"
          onClick={closeSidebar}
          className={menuClass(dashboardActive)}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/admin/users"
          onClick={closeSidebar}
          className={menuClass(usersActive)}
        >
          <UserRoundCog size={20} />
          Users
        </Link>

        <Link
          href="/admin/gears"
          onClick={closeSidebar}
          className={menuClass(gearsActive)}
        >
          <Package size={20} />
          Gears
        </Link>

        <Link
          href="/admin/categories"
          onClick={closeSidebar}
          className={menuClass(categoriesActive)}
        >
          <Tags size={20} />
          Categories
        </Link>
      </nav>

      <div className="border-t border-gray-200 p-4">
        <Link
          href="/"
          onClick={closeSidebar}
          className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"
        >
          <Home size={19} />
          Back to Home
        </Link>

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

export default AdminSidebar;
