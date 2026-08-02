"use server";

import { cookies } from "next/headers";

import type { CustomerProfileResponse } from "../_types/customer.types";

export const getLoggedInCustomer = async () => {
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
      {
        method: "GET",

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },

        cache: "no-store",
      },
    );

    const result = (await response.json()) as CustomerProfileResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not verify your account.",
        data: null,
      };
    }

    if (result.data?.role !== "CUSTOMER") {
      return {
        success: false,
        message: "Only customers can access this dashboard.",
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
      message: "Customer verified successfully.",
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
