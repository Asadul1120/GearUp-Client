"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gear",
    href: "/gear",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-72 bg-white shadow-xl transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-xl font-bold">
            GearUp
          </h2>

          <button
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col p-5">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-lg transition hover:bg-blue-50 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-3">

            <Link
              href="/login"
              className="rounded-lg border py-3 text-center font-medium"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 py-3 text-center font-medium text-white"
            >
              Register
            </Link>

          </div>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;