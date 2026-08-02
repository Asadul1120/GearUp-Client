"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type {
  CategoriesResponse,
  CategoryActionResponse,
} from "../_types/category.types";

export const getAdminCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories`,
      {
        cache: "no-store",
      },
    );

    const result = (await response.json()) as CategoriesResponse;

    return {
      success: response.ok && result.success,
      message: result.message,
      data: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not load categories: ${error}`,
      data: [],
    };
  }
};

export const createCategoryAction = async (
  name: string,
  description: string,
) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name,
          description: description.trim() || undefined,
        }),
      },
    );

    const result = (await response.json()) as CategoryActionResponse;

    if (response.ok && result.success) {
      revalidatePath("/admin/categories");
    }

    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not create category: ${error}`,
    };
  }
};

export const updateCategoryAction = async (
  categoryId: string,
  name: string,
  description: string,
) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories/${categoryId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name,
          description: description.trim() || undefined,
        }),
      },
    );

    const result = (await response.json()) as CategoryActionResponse;

    if (response.ok && result.success) {
      revalidatePath("/admin/categories");
    }

    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not update category: ${error}`,
    };
  }
};

export const deleteCategoryAction = async (categoryId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const result = (await response.json()) as CategoryActionResponse;

    if (response.ok && result.success) {
      revalidatePath("/admin/categories");
    }

    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not delete category: ${error}`,
    };
  }
};
