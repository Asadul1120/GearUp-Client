"use server";

import { cookies } from "next/headers";

import type { CustomerRentalsResponse } from "../_types/rental.types";
export const getCustomerRentals = async () => {
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
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    const result = (await response.json()) as CustomerRentalsResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load rentals.",
        data: [],
      };
    }

    return {
      success: true,
      message: result.message || "Rentals loaded successfully.",
      data: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred while fetching rentals: ${error}`,
      data: [],
    };
  }
};

export const createRentalAction = async (
  gearId: string,
  quantity: number,
  startDate: string,
  endDate: string,
) => {
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
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/rentals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        gearId,
        quantity,
        startDate,
        endDate,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not create rental.",
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
      message: `An error occurred while creating rental: ${error}`,
      data: null,
    };
  }
};


