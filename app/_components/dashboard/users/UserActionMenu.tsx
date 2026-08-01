"use client";

import { useState } from "react";
import { MoreVertical, Eye, Ban, CheckCircle2, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { updateUserStatusAction } from "@/app/(admin-dashboard)/_actions/updateUserStatusAction";
import { deleteUserAction } from "@/app/(admin-dashboard)/_actions/deleteUserAction";

interface UserActionMenuProps {
  userId: string;
  isActive: boolean;
}

export default function UserActionMenu({
  userId,
  isActive,
}: UserActionMenuProps) {
  const [open, setOpen] = useState(false);

  // Update user status
  const handleStatus = async (status: "ACTIVE" | "SUSPENDED") => {
    const result = await updateUserStatusAction(userId, status);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    setOpen(false);
  };

  // Delete user
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");

    if (!confirmDelete) return;

    const result = await deleteUserAction(userId);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }

    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 transition hover:bg-gray-100"
      >
        <MoreVertical size={18} />
      </button>

      {/* Dropdown Menu */}

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-52 rounded-xl border bg-white py-2 shadow-lg">
          {/* View */}

          <button
            onClick={() => {
              toast.info("View feature coming soon");
              setOpen(false);
            }}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100"
          >
            <Eye size={16} />
            View Details
          </button>

          {/* Suspend / Activate */}

          {isActive ? (
            <button
              onClick={() => handleStatus("SUSPENDED")}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
            >
              <Ban size={16} />
              Suspend User
            </button>
          ) : (
            <button
              onClick={() => handleStatus("ACTIVE")}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-green-600 hover:bg-green-50"
            >
              <CheckCircle2 size={16} />
              Activate User
            </button>
          )}

          {/* Divider */}

          <hr className="my-2" />

          {/* Delete */}

          <button
            onClick={handleDelete}
            className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
          >
            <Trash2 size={16} />
            Delete User
          </button>
        </div>
      )}
    </div>
  );
}
