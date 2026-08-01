"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Check, PackageCheck, RotateCcw, X } from "lucide-react";
import { toast } from "sonner";
import { updateOrderStatusAction } from "../_actions/providerOrderActions";
import type { RentalStatus } from "../_types/order.types";

type OrderStatusButtonProps = {
  orderId: string;
  currentStatus: RentalStatus;
};

const OrderStatusButton = ({
  orderId,
  currentStatus,
}: OrderStatusButtonProps) => {
  const router = useRouter();

  const [pending, startTransition] = useTransition();


  const handleStatusUpdate = (newStatus: RentalStatus) => {
    startTransition(async () => {
      const result = await updateOrderStatusAction(orderId, newStatus);

      if (result.success) {
        toast.success(result.message);

        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  if (currentStatus === "PLACED") {
    return (
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => handleStatusUpdate("CONFIRMED")}
          disabled={pending}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Check size={17} />

          {pending ? "Updating..." : "Confirm"}
        </button>

        <button
          type="button"
          onClick={() => handleStatusUpdate("CANCELLED")}
          disabled={pending}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={17} />
          Cancel
        </button>
      </div>
    );
  }

  if (currentStatus === "CONFIRMED") {
    return (
      <div className="flex flex-col gap-2 sm:flex-row">
        <span className="rounded-lg bg-blue-50 px-3 py-2 text-center text-sm font-semibold text-blue-700">
          Waiting for payment
        </span>

        <button
          type="button"
          onClick={() => handleStatusUpdate("CANCELLED")}
          disabled={pending}
          className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={17} />
          Cancel
        </button>
      </div>
    );
  }

  if (currentStatus === "PAID") {
    return (
      <button
        type="button"
        onClick={() => handleStatusUpdate("PICKED_UP")}
        disabled={pending}
        className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <PackageCheck size={17} />

        {pending ? "Updating..." : "Mark Picked Up"}
      </button>
    );
  }

  if (currentStatus === "PICKED_UP") {
    return (
      <button
        type="button"
        onClick={() => handleStatusUpdate("RETURNED")}
        disabled={pending}
        className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RotateCcw size={17} />

        {pending ? "Updating..." : "Mark Returned"}
      </button>
    );
  }

  if (currentStatus === "RETURNED") {
    return (
      <span className="rounded-lg bg-gray-100 px-4 py-2 text-center text-sm font-semibold text-gray-700">
        Completed
      </span>
    );
  }

  return (
    <span className="rounded-lg bg-red-50 px-4 py-2 text-center text-sm font-semibold text-red-600">
      Cancelled
    </span>
  );
};

export default OrderStatusButton;
