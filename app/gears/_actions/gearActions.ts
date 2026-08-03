"use server";

import type { PublicGearResponse } from "../_types/gear.types";

export const getPublicGears = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear?limit=100`,
      {
        cache: "no-store",
      },
    );

    const result =
      (await response.json()) as PublicGearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message:
          result.message || "Could not load gear.",
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
      message: `Could not load gear: ${error}`,
      data: [],
    };
  }
};