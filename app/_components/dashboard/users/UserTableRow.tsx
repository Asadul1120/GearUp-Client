import Image from "next/image";
import UserActionMenu from "./UserActionMenu";
import UserRoleBadge from "./UserRoleBadge";
import UserStatusBadge from "./UserStatusBadge";

interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  address: string | null;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  createdAt: string;
  updatedAt: string;
}

interface UserTableRowProps {
  user: IUser;
  mobile?: boolean;
}

export default function UserTableRow({
  user,
  mobile = false,
}: UserTableRowProps) {
  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  /* -------------------------------------------------------------------------- */
  /*                               Mobile Layout                                */
  /* -------------------------------------------------------------------------- */

  if (mobile) {
    return (
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {user.profileImage ? (
              <Image
                src={user?.profileImage}
                alt={user?.name}
                unoptimized
                width={55}
                height={55}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h3 className="font-semibold text-gray-900">{user.name}</h3>

              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <UserActionMenu
            userId={user.id}
            isActive={user.status === "ACTIVE"}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">Role</p>

            <div className="mt-1">
              <UserRoleBadge role={user.role} />
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500">Status</p>

            <div className="mt-1">
              <UserStatusBadge status={user.status} />
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-xs text-gray-500">Joined</p>

            <p className="mt-1 font-medium">{joinedDate}</p>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                              Desktop Layout                                */
  /* -------------------------------------------------------------------------- */

  return (
    <tr className="border-b transition hover:bg-slate-50">
      {/* User */}

      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          {user.profileImage ? (
            <Image
              src={user?.profileImage}
              alt={user?.name}
              unoptimized
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-900">{user.name}</h3>

            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </td>

      {/* Role */}

      <td className="px-6 py-5">
        <UserRoleBadge role={user.role} />
      </td>

      {/* Status */}

      <td className="px-6 py-5">
        <UserStatusBadge status={user.status} />
      </td>

      {/* Joined */}

      <td className="px-6 py-5 text-sm text-gray-500">{joinedDate}</td>

      {/* Action */}

      <td className="px-6 py-5 text-right">
        <UserActionMenu userId={user.id} isActive={user.status === "ACTIVE"} />
      </td>
    </tr>
  );
}
