"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type {
  IUser,
  UpdateProfileInput,
} from "@/types/user";

type UpdateProfileResponse = {
  success: boolean;
  message: string;
  data?: IUser;
};

export const updateProfileAction = async (
  profileData: UpdateProfileInput,
) => {
  const cookieStore = await cookies();

  const accessToken =
    cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
      data: null,
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/users`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(profileData),
      },
    );

    const result =
      (await response.json()) as UpdateProfileResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message:
          result.message ||
          "Could not update profile.",
        data: null,
      };
    }

    revalidatePath("/profile");

    return {
      success: true,
      message: result.message,
      data: result.data || null,
    };
  } catch (error) {
    return {
      success: false,
      message: `Could not update profile: ${error}`,
      data: null,
    };
  }
};