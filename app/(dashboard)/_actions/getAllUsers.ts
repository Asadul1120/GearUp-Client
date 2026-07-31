"use server";

import { cookies } from "next/headers";

export const getAllUsers = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) return null;

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const result = await res.json();

  return result.data;
};
