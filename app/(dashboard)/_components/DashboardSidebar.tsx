import Link from "next/link";
import {
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

export default function DashboardSidebar() {
  return (
    <aside className="hidden h-screen w-72 border-r border-gray-200 bg-white lg:flex lg:flex-col">

      {/* ================= Logo ================= */}

      <div className="border-b border-gray-200 px-6 py-6">
        <Link href="/">
          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                GearUp
              </h2>

              <p className="text-sm text-gray-500">
                Admin Panel
              </p>
            </div>

          </div>
        </Link>
      </div>

      {/* ================= Navigation ================= */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <nav className="space-y-2">
          {menus.map((menu) => (
            <SidebarItem
              key={menu.href}
              {...menu}
            />
          ))}
        </nav>

      </div>

      {/* ================= Admin Card ================= */}

      <div className="border-t border-gray-200 p-5">

        <div className="mb-5 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            A
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
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
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition-all duration-200 hover:bg-red-100"
          >
            <LogOut size={18} />

            Logout

          </button>

        </form>

      </div>

    </aside>
  );
}