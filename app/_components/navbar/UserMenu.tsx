import Link from "next/link";
import { UserIcon } from "lucide-react";
import { IUser } from "@/types/user";

interface UserMenuProps {
  user: IUser | null;
}

const UserMenu = ({ user }: UserMenuProps) => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {user ? (
        <Link
          href="/account"
          className="text-[15px] font-medium text-gray-700 hover:text-blue-600"
        >
          <UserIcon size={20} />
        </Link>
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