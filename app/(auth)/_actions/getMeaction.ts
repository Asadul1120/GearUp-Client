"use server";

import { cookies } from "next/headers";
import { IUser } from "@/types/user";

type GetMeResponse = {
  success: boolean;
  message: string;
  data?: IUser;
};

export const getMeAction = async (): Promise<IUser | null> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return null;
  }

  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    console.error("BACKEND_API_URL is missing.");
    return null;
  }

  try {
    const response = await fetch(`${backendUrl}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const result = (await response.json()) as GetMeResponse;

    if (!result.success || !result.data) {
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Get current user error:", error);
    return null;
  }
};
