"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";

import { createPaymentAction } from "../_actions/customerPaymentActions";

type PayNowButtonProps = {
  rentalOrderId: string;
};

const PayNowButton = ({ rentalOrderId }: PayNowButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    const result = await createPaymentAction(rentalOrderId);

    if (!result.success || !result.data) {
      toast.error(result.message);
      setLoading(false);
      return;
    }

    window.location.href = result.data.checkoutUrl;
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      disabled={loading}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <CreditCard size={18} />

      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

export default PayNowButton;
