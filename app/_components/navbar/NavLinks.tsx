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

  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navItems.map((item) => {
        const active = pathname === item.href;

        return (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`relative py-2 text-[15px] font-medium transition-all duration-300 ${
                active
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}

              {active && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-600"></span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;