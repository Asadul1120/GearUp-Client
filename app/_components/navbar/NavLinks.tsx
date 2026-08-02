"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Gear", href: "/gear" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = () => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="hidden lg:block"
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActiveRoute(item.href);

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition xl:px-4 ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute inset-x-3 -bottom-2 h-0.5 rounded-full bg-blue-600" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;