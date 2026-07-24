import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg">
        G
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900">
          GearUp
        </h2>

        <p className="text-xs text-gray-500">
          Rent Sports Gear
        </p>
      </div>
    </Link>
  );
};

export default Logo;