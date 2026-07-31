"use client";

import { useEffect, useRef, useState } from "react";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";
import Link from "next/link";
import {
  User,
  UserIcon,
  LayoutDashboard,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { IUser } from "@/types/user";

interface UserMenuProps {
  user: IUser | null;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hidden  lg:flex">
      {user ? (
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 transition hover:bg-gray-100"
          >
            <UserIcon size={20} />
            <ChevronDown size={16} />
          </button>
          {open && (
            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
              <div className="border-b px-4 py-3">
                <h4 className="font-semibold">{user.name}</h4>
                <p className="truncate text-sm text-gray-500">
                  Email : {user.email}
                </p>
                <p className="truncate text-sm text-gray-500">
                  Role : {user.role}
                </p>
              </div>

              <Link
                href="/account"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                <User size={18} />
                My Profile
              </Link>

              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                <LayoutDashboard size={18} />
                My Dashboard
              </Link>

              <form action={logoutAction}>
                <button
                  type="submit"
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="text-[15px] font-medium text-gray-700 hover:text-blue-600"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
