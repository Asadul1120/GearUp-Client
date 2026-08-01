"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { AlertTriangle, Trash2, X } from "lucide-react";
import { toast } from "sonner";

import { deleteGearAction } from "../_actions/providerGearActions";

type DeleteGearButtonProps = {
  gearId: string;
  gearName: string;
};

const DeleteGearButton = ({ gearId, gearName }: DeleteGearButtonProps) => {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const confirmDelete = (toastId: string | number) => {
    toast.dismiss(toastId);

    const loadingToastId = toast.loading("Deleting gear...");

    startTransition(async () => {
      const result = await deleteGearAction(gearId);

      toast.dismiss(loadingToastId);

      if (result.success) {
        toast.success(result.message);

        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  const showDeleteConfirmation = () => {
    toast.custom(
      (toastId) => (
        <div className="w-full max-w-sm rounded-2xl border border-red-200 bg-white p-4 shadow-xl">
          {/* Top section */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <AlertTriangle size={20} />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Delete gear?</h3>

              <p className="mt-1 text-sm leading-5 text-gray-600">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-gray-900">{gearName}</span>?
              </p>

              <p className="mt-1 text-xs text-red-500">
                This action cannot be undone.
              </p>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={() => toast.dismiss(toastId)}
              aria-label="Close confirmation"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => toast.dismiss(toastId)}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={() => confirmDelete(toastId)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
      },
    );
  };

  return (
    <button
      type="button"
      onClick={showDeleteConfirmation}
      disabled={pending}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Trash2 size={17} />

      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteGearButton;
