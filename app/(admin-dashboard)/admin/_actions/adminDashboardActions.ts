"use server";

import { cookies } from "next/headers";

import type {
  AdminDashboardResult,
  CategoriesResponse,
  GearListResponse,
  UsersResponse,
} from "../_types/dashboard.types";

export const getAdminDashboardData =
  async (): Promise<AdminDashboardResult> => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
      return {
        success: false,
        message: "Please login first.",
        data: {
          totalUsers: 0,
          totalCustomers: 0,
          totalProviders: 0,
          suspendedUsers: 0,
          totalGears: 0,
          totalCategories: 0,
        },
      };
    }

    try {
      const [usersResponse, gearsResponse, categoriesResponse] =
        await Promise.all([
          fetch(`${process.env.BACKEND_API_URL}/api/users`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
          }),

          fetch(`${process.env.BACKEND_API_URL}/api/gear`, {
            cache: "no-store",
          }),

          fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
            cache: "no-store",
          }),
        ]);

      const usersResult = (await usersResponse.json()) as UsersResponse;

      const gearsResult = (await gearsResponse.json()) as GearListResponse;

      const categoriesResult =
        (await categoriesResponse.json()) as CategoriesResponse;

      if (!usersResponse.ok || !gearsResponse.ok || !categoriesResponse.ok) {
        return {
          success: false,
          message: "Could not load dashboard data.",
          data: {
            totalUsers: 0,
            totalCustomers: 0,
            totalProviders: 0,
            suspendedUsers: 0,
            totalGears: 0,
            totalCategories: 0,
          },
        };
      }

      const users = usersResult.data || [];
      const gears = gearsResult.data?.data || [];
      const categories = categoriesResult.data || [];

      return {
        success: true,
        message: "Dashboard data loaded.",
        data: {
          totalUsers: users.length,

          totalCustomers: users.filter((user) => user.role === "CUSTOMER")
            .length,

          totalProviders: users.filter((user) => user.role === "PROVIDER")
            .length,

          suspendedUsers: users.filter((user) => user.status === "SUSPENDED")
            .length,

          totalGears: gears.length,
          totalCategories: categories.length,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: `Could not load dashboard data: ${error}`,
        data: {
          totalUsers: 0,
          totalCustomers: 0,
          totalProviders: 0,
          suspendedUsers: 0,
          totalGears: 0,
          totalCategories: 0,
        },
      };
    }
  };
