"use server";

import { cookies } from "next/headers";
import type {
  ProviderProfileResponse,
  ProviderUser,
} from "../_types/gear.types";

type ProviderAuthResult = {
  success: boolean;
  message: string;
  data: ProviderUser | null;
};

export const getLoggedInProvider = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
      data: null,
    };
  }

  try {
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      cache: "no-store",
    });

    const result = (await response.json()) as ProviderProfileResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not verify your account.",
        data: null,
      };
    }

    if (!result.data) {
      return {
        success: false,
        message: "User information was not found.",
        data: null,
      };
    }

    if (result.data.role !== "PROVIDER") {
      return {
        success: false,
        message: "Only providers can access this dashboard.",
        data: null,
      };
    }

    return {
      success: true,
      message: "Provider verified successfully.",
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
      data: null,
    };
  }
};
