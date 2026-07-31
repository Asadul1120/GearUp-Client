"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export const deleteUserAction = async (id: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const result = await res.json();

  revalidatePath("/admin/users");

  return result;
};
