"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import type {
  OrderActionResult,
  ProviderOrder,
  ProviderOrdersResponse,
  RentalStatus,
  UpdateOrderResponse,
} from "../_types/order.types";

// Provider-এর সব rental order আনার function
export const getProviderOrders = async (): Promise<{
  success: boolean;
  message: string;
  data: ProviderOrder[];
}> => {
  // .env file থেকে backend URL নেওয়া
  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    return {
      success: false,
      message: "Backend URL was not found.",
      data: [],
    };
  }

  // Cookie নেওয়া
  const cookieStore = await cookies();

  // Cookie থেকে login token নেওয়া
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
      data: [],
    };
  }

  try {
    // Backend থেকে Provider-এর orders আনা
    const response = await fetch(`${backendUrl}/api/rentals/provider/orders`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      cache: "no-store",
    });

    const result = (await response.json()) as ProviderOrdersResponse;

    // Backend error দিলে
    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load rental orders.",
        data: [],
      };
    }

    return {
      success: true,
      message: "Rental orders loaded successfully.",
      data: result.data || [],
    };
  } catch (error) {
    console.log("Get provider orders error:", error);

    return {
      success: false,
      message: "Server connection failed. Please try again.",
      data: [],
    };
  }
};

// একটি rental order-এর status update করার function
export const updateOrderStatusAction = async (
  orderId: string,
  newStatus: RentalStatus,
): Promise<OrderActionResult> => {
  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    return {
      success: false,
      message: "Backend URL was not found.",
    };
  }

  // Order ID না থাকলে
  if (!orderId) {
    return {
      success: false,
      message: "Order ID was not found.",
    };
  }

  // নতুন status না থাকলে
  if (!newStatus) {
    return {
      success: false,
      message: "Order status was not found.",
    };
  }

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    // Backend-এ status update request পাঠানো
    const response = await fetch(
      `${backendUrl}/api/rentals/provider/orders/${orderId}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          status: newStatus,
        }),
      },
    );

    const result = (await response.json()) as UpdateOrderResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not update the order status.",
      };
    }

    // Orders এবং dashboard page নতুন করে load হবে
    revalidatePath("/provider");
    revalidatePath("/provider/orders");

    return {
      success: true,
      message: result.message || "Order status updated successfully.",
    };
  } catch (error) {
    console.log("Update order status error:", error);

    return {
      success: false,
      message: "Server connection failed. Please try again.",
    };
  }
};
