"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { deleteUserAction } from "../_actions/adminUserActions";

type DeleteUserButtonProps = {
  userId: string;
};

const DeleteUserButton = ({
  userId,
}: DeleteUserButtonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deleteUser = async () => {
    setLoading(true);

    const result = await deleteUserAction(userId);

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    router.refresh();
  };

  const handleDelete = () => {
    toast("Delete this user?", {
      description:
        "This action cannot be undone.",
      action: {
        label: "Delete",
        onClick: deleteUser,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center gap-1 rounded-lg bg-red-100 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-200 disabled:opacity-60"
    >
      <Trash2 size={15} />

      {loading ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteUserButton;