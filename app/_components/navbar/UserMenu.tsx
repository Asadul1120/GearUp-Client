import Link from "next/link";
import { UserIcon } from "lucide-react";


type IUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  address: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  gears: [];
  rentals: [];
  reviews: [];
}

const UserMenu = ( user: IUser ) => {
   console.log(user);
  return (
    <div className="hidden items-center gap-4 lg:flex">
 { user ? (
        <Link href="/account" className="text-[15px] font-medium text-gray-700 hover:text-blue-600">
          <UserIcon size={20} />
        </Link>

      ) : (
        <Link href="/login" className="text-[15px] font-medium text-gray-700 hover:text-blue-600">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default UserMenu;