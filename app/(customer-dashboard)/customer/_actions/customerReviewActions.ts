"use server";

import { cookies } from "next/headers";

import type { CreateReviewResponse } from "../_types/review.types";

export const createReviewAction = async (
  gearId: string,
  rating: number,
  comment: string,
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
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        gearId,
        rating,
        comment: comment.trim() || undefined,
      }),
    });

    const result = (await response.json()) as CreateReviewResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not submit review.",
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
      message: `An error occurred while submitting review: ${error}`,
      data: null,
    };
  }
};
