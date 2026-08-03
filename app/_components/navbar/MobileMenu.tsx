"use client";

import {
  ChevronRight,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  User,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { logoutAction } from "@/app/(auth)/_actions/logoutAction";
import type { IUser } from "@/types/user";

type MobileMenuProps = {
  user: IUser | null;
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gears", href: "/gears" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const MobileMenu = ({ user }: MobileMenuProps) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

  const mobileSidebar = (
    <>
      {open && (
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
        />
      )}

      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[9999] flex h-dvh w-80 max-w-[88vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-16 items-center justify-between border-b border-gray-200 px-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">GearUp</h2>

            <p className="text-xs text-gray-500">Rent Sports Gear</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {user && (
            <div className="border-b border-gray-100 p-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {userInitial}
                </div>

                <div className="min-w-0">
                  <p className="truncate font-semibold text-gray-900">
                    {user.name}
                  </p>

                  <p className="truncate text-sm text-gray-500">{user.email}</p>

                  <p className="mt-1 text-xs font-semibold text-blue-600">
                    {user.role}
                  </p>
                </div>
              </div>
            </div>
          )}

          <nav className="p-4">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </p>

            <div className="space-y-1">
              {navItems.map((item) => {
                const active = isActiveRoute(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}

                    <ChevronRight size={17} />
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-gray-100 p-4">
            {user ? (
              <div className="space-y-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  <User size={18} />
                  My Profile
                </Link>

                <Link
                  href={`/${user.role.toLowerCase()}`}
                  className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
                >
                  <LayoutDashboard size={18} />
                  My Dashboard
                </Link>

                <form action={logoutAction}>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <LogIn size={18} />
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <UserPlus size={18} />
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100"
      >
        <Menu size={22} />
      </button>

      {mounted && createPortal(mobileSidebar, document.body)}
    </div>
  );
};

export default MobileMenu;
