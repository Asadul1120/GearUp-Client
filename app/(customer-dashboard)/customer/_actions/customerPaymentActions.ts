"use server";

import { cookies } from "next/headers";

import type {
  CreatePaymentResponse,
  CustomerPaymentsResponse,
} from "../_types/payment.types";

export const getCustomerPayments = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
      data: [],
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/payments`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = (await response.json()) as CustomerPaymentsResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load payments.",
        data: [],
      };
    }

    return {
      success: true,
      message: result.message,
      data: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred while fetching payments: ${error}`,
      data: [],
    };
  }
};

export const createPaymentAction = async (rentalOrderId: string) => {
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
      `${process.env.BACKEND_API_URL}/api/payments/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          rentalOrderId,
        }),
      },
    );

    const result = (await response.json()) as CreatePaymentResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not create payment.",
        data: null,
      };
    }

    return {
      success: true,
      message: result.message,
      data: result.data || null,
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred while creating payment: ${error}`,
      data: null,
    };
  }
};
