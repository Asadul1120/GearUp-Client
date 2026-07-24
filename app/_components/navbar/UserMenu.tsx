import Link from "next/link";

const UserMenu = () => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link
        href="/login"
        className="font-medium text-gray-700 hover:text-blue-600"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        Register
      </Link>
    </div>
  );
};

export default UserMenu;