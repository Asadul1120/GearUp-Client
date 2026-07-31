"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SidebarItemProps {
  href: string;
  title: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
      )}
    >
      <Icon
        size={20}
        className={clsx(
          "transition",
          isActive
            ? "text-white"
            : "text-gray-500 group-hover:text-blue-600"
        )}
      />

      <span className="font-medium">
        {title}
      </span>
    </Link>
  );
}