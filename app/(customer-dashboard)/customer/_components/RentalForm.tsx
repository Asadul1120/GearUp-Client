"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createRentalAction } from "../_actions/customerRentalActions";

type RentalFormProps = {
  gearId: string;
  stock: number;
};

const RentalForm = ({ gearId, stock }: RentalFormProps) => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!startDate || !endDate) {
      toast.error("Please select rental dates.");
      return;
    }

    if (endDate <= startDate) {
      toast.error("End date must be after start date.");
      return;
    }

    setLoading(true);

    const result = await createRentalAction(
      gearId,
      quantity,
      startDate,
      endDate,
    );

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    router.push("/customer/rentals");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5"
    >
      <h2 className="text-xl font-bold text-gray-900">Rent This Gear</h2>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Quantity
        </label>

        <input
          type="number"
          min={1}
          max={stock}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          min={startDate}
          onChange={(event) => setEndDate(event.target.value)}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading || stock < 1}
        className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Creating Rental..."
          : stock < 1
            ? "Out of Stock"
            : "Rent Now"}
      </button>
    </form>
  );
};

export default RentalForm;
