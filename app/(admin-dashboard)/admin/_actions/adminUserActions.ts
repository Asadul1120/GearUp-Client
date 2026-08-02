"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import type { UserStatus } from "../_types/admin.types";
import type {
  UserActionResponse,
  UsersResponse,
} from "../_types/user.types";

export const getAdminUsers = async () => {
  const cookieStore = await cookies();
  const accessToken =
    cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
      data: [],
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result =
      (await response.json()) as UsersResponse;

    return {
      success: response.ok && result.success,
      message: result.message,
      data: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not load users: ${error}`,
      data: [],
    };
  }
};

export const updateUserStatusAction = async (
  userId: string,
  status: UserStatus,
) => {
  const cookieStore = await cookies();
  const accessToken =
    cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/status/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ status }),
      },
    );

    const result =
      (await response.json()) as UserActionResponse;

    if (response.ok && result.success) {
      revalidatePath("/admin/users");
    }

    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not update user: ${error}`,
    };
  }
};

export const deleteUserAction = async (
  userId: string,
) => {
  const cookieStore = await cookies();
  const accessToken =
    cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users/${userId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const result =
      (await response.json()) as UserActionResponse;

    if (response.ok && result.success) {
      revalidatePath("/admin/users");
    }

    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not delete user: ${error}`,
    };
  }
};