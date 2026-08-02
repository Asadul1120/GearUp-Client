"use client";

import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { logoutAction } from "@/app/(auth)/_actions/logoutAction";
import type { IUser } from "@/types/user";

type UserMenuProps = {
  user: IUser | null;
};

const UserMenu = ({
  user,
}: UserMenuProps) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent,
    ) => {
      if (
        !menuRef.current?.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  if (!user) {
    return (
      <div className="hidden items-center gap-3 lg:flex">
        <Link
          href="/login"
          className="rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
        >
          Sign In
        </Link>

        <Link
          href="/register"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    );
  }

  const userInitial =
    user.name.charAt(0).toUpperCase();

  return (
    <div
      ref={menuRef}
      className="relative hidden lg:block"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open user menu"
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 pr-3 transition hover:border-blue-200 hover:bg-blue-50"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {userInitial}
        </div>

        <div className="hidden max-w-28 text-left xl:block">
          <p className="truncate text-sm font-semibold text-gray-900">
            {user.name}
          </p>

          <p className="truncate text-xs text-gray-500">
            {user.role}
          </p>
        </div>

        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
        >
          <div className="border-b border-gray-100 bg-slate-50 px-5 py-4">
            <p className="truncate font-semibold text-gray-900">
              {user.name}
            </p>

            <p className="mt-1 truncate text-sm text-gray-500">
              {user.email}
            </p>

            <span className="mt-2 inline-block rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {user.role}
            </span>
          </div>

          <div className="p-2">
            <Link
              href="/account"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <User size={18} />
              My Profile
            </Link>

            <Link
              href={`/${user.role.toLowerCase()}`}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <LayoutDashboard size={18} />
              My Dashboard
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;