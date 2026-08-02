import Link from "next/link";
import { Dumbbell } from "lucide-react";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="GearUp home"
      className="group flex shrink-0 items-center gap-2.5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition group-hover:bg-blue-700 sm:h-11 sm:w-11">
        <Dumbbell size={22} />
      </div>

      <div className="leading-tight">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
          GearUp
        </h2>

        <p className="hidden text-xs text-gray-500 sm:block">
          Rent Sports Gear
        </p>
      </div>
    </Link>
  );
};

export default Logo;