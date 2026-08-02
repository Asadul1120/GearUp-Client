import {
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import type { AdminManagedUser } from "../_types/user.types";
import DeleteUserButton from "./DeleteUserButton";
import UserStatusButton from "./UserStatusButton";

type UserCardProps = {
  user: AdminManagedUser;
};

const UserCard = ({ user }: UserCardProps) => {
  const userInitial =
    user.name.charAt(0).toUpperCase();

  const statusClass =
    user.status === "ACTIVE"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  const roleClass =
    user.role === "ADMIN"
      ? "bg-purple-100 text-purple-700"
      : user.role === "PROVIDER"
        ? "bg-blue-100 text-blue-700"
        : "bg-gray-100 text-gray-700";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {userInitial}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold text-gray-900">
            {user.name}
          </h2>

          <div className="mt-2 flex flex-wrap gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${roleClass}`}
            >
              {user.role}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Mail
            size={17}
            className="shrink-0"
          />

          <span className="truncate">
            {user.email}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone
            size={17}
            className="shrink-0"
          />

          <span>
            {user.phone || "No phone number"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin
            size={17}
            className="shrink-0"
          />

          <span>
            {user.address || "No address"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <User
            size={17}
            className="shrink-0"
          />

          <span>
            Joined{" "}
            {new Date(
              user.createdAt,
            ).toLocaleDateString()}
          </span>
        </div>
      </div>

      {user.role !== "ADMIN" && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
          <UserStatusButton
            userId={user.id}
            currentStatus={user.status}
          />

          <DeleteUserButton
            userId={user.id}
          />
        </div>
      )}
    </div>
  );
};

export default UserCard;