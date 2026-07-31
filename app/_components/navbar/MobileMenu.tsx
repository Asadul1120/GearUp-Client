"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gear", href: "/gear" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[85%] max-w-[320px]
  bg-white shadow-2xl transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-5 py-5">
          <h2 className="text-xl font-bold">GearUp</h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex flex-col p-5">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-4 py-3 transition ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="mt-8 space-y-3">
            <Link
              href="/login"
              className="block rounded-xl border py-3 text-center font-medium"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block rounded-xl bg-blue-600 py-3 text-center font-medium text-white hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
