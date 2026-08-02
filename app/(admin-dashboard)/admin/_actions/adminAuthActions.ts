"use server";

import { cookies } from "next/headers";

import type {
  AdminAuthResult,
  AdminProfileResponse,
} from "../_types/admin.types";

export const getLoggedInAdmin = async ()=> {
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
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    const result = (await response.json()) as AdminProfileResponse;

    if (!response.ok || !result.success || !result.data) {
      return {
        success: false,
        message: result.message || "Could not verify admin.",
        data: null,
      };
    }

    if (result.data.role !== "ADMIN") {
      return {
        success: false,
        message: "Admin access only.",
        data: null,
      };
    }

    if (result.data.status === "SUSPENDED") {
      return {
        success: false,
        message: "Your account is suspended.",
        data: null,
      };
    }

    return {
      success: true,
      message: result.message,
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: `Admin verification failed: ${error}`,
      data: null,
    };
  }
};
