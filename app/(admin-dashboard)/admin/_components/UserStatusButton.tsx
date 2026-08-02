"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateUserStatusAction } from "../_actions/adminUserActions";
import type { UserStatus } from "../_types/admin.types";

type UserStatusButtonProps = {
  userId: string;
  currentStatus: UserStatus;
};

const UserStatusButton = ({
  userId,
  currentStatus,
}: UserStatusButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const newStatus =
    currentStatus === "ACTIVE"
      ? "SUSPENDED"
      : "ACTIVE";

  const handleStatus = async () => {
    setLoading(true);

    const result = await updateUserStatusAction(
      userId,
      newStatus,
    );

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleStatus}
      disabled={loading}
      className={`rounded-lg px-3 py-2 text-xs font-semibold transition disabled:opacity-60 ${
        currentStatus === "ACTIVE"
          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          : "bg-green-100 text-green-700 hover:bg-green-200"
      }`}
    >
      {loading
        ? "Updating..."
        : currentStatus === "ACTIVE"
          ? "Suspend"
          : "Activate"}
    </button>
  );
};

export default UserStatusButton;