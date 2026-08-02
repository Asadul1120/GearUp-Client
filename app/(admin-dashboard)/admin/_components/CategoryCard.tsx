"use client";

import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2, X } from "lucide-react";
import { toast } from "sonner";

import {
  deleteCategoryAction,
  updateCategoryAction,
} from "../_actions/adminCategoryActions";
import type { AdminCategory } from "../_types/category.types";

type CategoryCardProps = {
  category: AdminCategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const result = await updateCategoryAction(category.id, name, description);

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    setEditing(false);
    router.refresh();
  };

  const deleteCategory = async () => {
    setLoading(true);

    const result = await deleteCategoryAction(category.id);

    setLoading(false);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);
    router.refresh();
  };

  const handleDelete = () => {
    toast("Delete this category?", {
      description: "This action cannot be undone.",
      action: {
        label: "Delete",
        onClick: deleteCategory,
      },
    });
  };

  if (editing) {
    return (
      <form
        onSubmit={handleUpdate}
        className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Edit Category</h2>

          <button
            type="button"
            onClick={() => setEditing(false)}
            className="text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Category"}
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">{category.name}</h2>

      <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
        {category.description || "No description available."}
      </p>

      <p className="mt-4 text-xs text-gray-400">
        Created {new Date(category.createdAt).toLocaleDateString()}
      </p>

      <div className="mt-5 flex gap-2 border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-200 disabled:opacity-60"
        >
          <Trash2 size={16} />
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
