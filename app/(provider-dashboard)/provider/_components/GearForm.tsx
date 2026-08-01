"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createGearAction } from "../_actions/providerGearActions";
import { initialGearState } from "../_types/gearState";

import type { Category } from "../_types/gear.types";

type GearFormProps = {
  categories: Category[];
};

const GearForm = ({ categories }: GearFormProps) => {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(
    createGearAction,
    initialGearState,
  );

  useEffect(() => {
    if (!state.message) {
      return;
    }

    if (state.success) {
      toast.success(state.message);

      router.push("/provider/gear");
      router.refresh();
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
    >
      {/* Name and brand */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Gear Name
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Example: Mountain Bike"
            required
            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="brand"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Brand
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            id="brand"
            name="brand"
            type="text"
            placeholder="Example: Trek"
            required
            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Description
          <span className="ml-1 text-red-500">*</span>
        </label>

        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Write gear information"
          required
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Image */}
      <div>
        <label
          htmlFor="image"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Image URL
          <span className="ml-1 text-red-500">*</span>
        </label>

        <input
          id="image"
          name="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          required
          className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Price, stock and category */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <label
            htmlFor="pricePerDay"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Price Per Day
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            id="pricePerDay"
            name="pricePerDay"
            type="number"
            min="1"
            step="0.01"
            placeholder="500"
            required
            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="stock"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Stock
            <span className="ml-1 text-red-500">*</span>
          </label>

          <input
            id="stock"
            name="stock"
            type="number"
            min="0"
            step="1"
            placeholder="5"
            required
            className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="categoryId"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Category
            <span className="ml-1 text-red-500">*</span>
          </label>

          <select
            id="categoryId"
            name="categoryId"
            defaultValue=""
            required
            className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="" disabled>
              Select category
            </option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Availability */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <label
          htmlFor="availability"
          className="flex cursor-pointer items-center gap-3"
        >
          <input
            id="availability"
            name="availability"
            type="checkbox"
            defaultChecked
            className="h-5 w-5"
          />

          <div>
            <p className="text-sm font-semibold text-gray-800">
              Available for rent
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Customers can rent this gear.
            </p>
          </div>
        </label>
      </div>

      {/* Error */}
      {!state.success && state.message && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => router.push("/provider/gear")}
          disabled={pending}
          className="h-12 rounded-xl border border-gray-300 px-6 font-semibold text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={pending || categories.length === 0}
          className="h-12 rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? "Adding Gear..." : "Add Gear"}
        </button>
      </div>
    </form>
  );
};

export default GearForm;
