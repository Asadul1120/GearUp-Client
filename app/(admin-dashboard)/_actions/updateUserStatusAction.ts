"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const updateUserStatusAction = async (
  id: string,
  status: "ACTIVE" | "SUSPENDED",
) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/status/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    },
  );
  
  

  const result = await res.json();

  revalidatePath("/admin/users");

  return result;
};
