"use server";

import type { RentalGear } from "../_types/rental.types";

type SingleGearResponse = {
  success: boolean;
  message: string;
  data?: RentalGear;
};

export const getSingleGear = async (
  gearId: string,
) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear/${gearId}`,
      {
        cache: "no-store",
      },
    );

    const result =
      (await response.json()) as SingleGearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message:
          result.message ||
          "Could not load gear.",
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
      message: `An error occurred while fetching gear: ${error}`,
      data: null,
    };
  }
};


import type { GearListResponse } from "../_types/customerGear.types";

export const getCustomerGears = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear`,
      {
        cache: "no-store",
      },
    );

    const result =
      (await response.json()) as GearListResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message:
          result.message ||
          "Could not load gear.",
        data: [],
      };
    }

    return {
      success: true,
      message: result.message,
      data: result.data?.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred while fetching gear: ${error}`,
      data: [],
    };
  }
};