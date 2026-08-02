"use server";

import type { AdminGearsResponse } from "../_types/gear.types";

export const getAdminGears = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear?limit=100`,
      {
        cache: "no-store",
      },
    );

    const result = (await response.json()) as AdminGearsResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load gears.",
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
      message: `Could not load gears: ${error}`,
      data: [],
    };
  }
};
