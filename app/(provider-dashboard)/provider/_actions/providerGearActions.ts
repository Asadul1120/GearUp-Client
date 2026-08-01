"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import type {
  CategoryResponse,
  CreateGearData,
  GearActionResult,
  GearResponse,
  ProviderProfileResponse,
  UpdateGearData,
} from "../_types/gear.types";

// Get provider Gears
export const getProviderGears = async () => {
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
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      cache: "no-store",
    });

    const result = (await response.json()) as ProviderProfileResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load your gear.",
        data: [],
      };
    }

    if (result.data?.role !== "PROVIDER") {
      return {
        success: false,
        message: "Only providers can view this information.",
        data: [],
      };
    }

    return {
      success: true,
      message: "Gear loaded successfully.",
      data: result.data.gears || [],
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
      data: [],
    };
  }
};

// Get all categories
export const getCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/categories`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const result = (await response.json()) as CategoryResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load categories.",
        data: [],
      };
    }

    return {
      success: true,
      message: "Categories loaded successfully.",
      data: result.data || [],
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
      data: [],
    };
  }
};

// Get single gear by ID
export const getSingleGear = async (gearId: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear/${gearId}`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const result = (await response.json()) as GearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not load the gear.",
        data: null,
      };
    }

    return {
      success: true,
      message: "Gear loaded successfully.",
      data: result.data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
      data: null,
    };
  }
};

// Create new gear
export const createGearAction = async (
  _previousState: GearActionResult,
  formData: FormData,
) => {
  const name = formData.get("name")?.toString().trim() || "";

  const description = formData.get("description")?.toString().trim() || "";

  const brand = formData.get("brand")?.toString().trim() || "";

  const image = formData.get("image")?.toString().trim() || "";

  const categoryId = formData.get("categoryId")?.toString() || "";

  const pricePerDay = Number(formData.get("pricePerDay"));

  const stock = Number(formData.get("stock"));

  const availability = formData.get("availability") === "on";

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  const gearData: CreateGearData = {
    name,
    description,
    brand,
    image,
    pricePerDay,
    stock,
    availability,
    categoryId,
  };

  try {
    const response = await fetch(`${process.env.BACKEND_API_URL}/api/gear`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },

      body: JSON.stringify(gearData),
    });

    const result = (await response.json()) as GearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not create the gear.",
      };
    }

    revalidatePath("/provider/gear");

    return {
      success: true,
      message: result.message || "Gear created successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
    };
  }
};

// Update existing gear
export const updateGearAction = async (
  gearId: string,
  _previousState: GearActionResult,
  formData: FormData,
) => {
  const name = formData.get("name")?.toString().trim() || "";

  const description = formData.get("description")?.toString().trim() || "";

  const brand = formData.get("brand")?.toString().trim() || "";

  const image = formData.get("image")?.toString().trim() || "";

  const categoryId = formData.get("categoryId")?.toString() || "";

  const pricePerDay = Number(formData.get("pricePerDay"));

  const stock = Number(formData.get("stock"));

  const availability = formData.get("availability") === "on";

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  const gearData: UpdateGearData = {
    name,
    description,
    brand,
    image,
    pricePerDay,
    stock,
    availability,
    categoryId,
  };

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear/${gearId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify(gearData),
      },
    );

    const result = (await response.json()) as GearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not update the gear.",
      };
    }

    revalidatePath("/provider/gear");

    return {
      success: true,
      message: result.message || "Gear updated successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
    };
  }
};

// Delete existing gear
export const deleteGearAction = async (gearId: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/api/gear/${gearId}`,
      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const result = (await response.json()) as GearResponse;

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Could not delete the gear.",
      };
    }

    revalidatePath("/provider/gear");

    return {
      success: true,
      message: result.message || "Gear deleted successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Server connection failed. Please try again.",
    };
  }
};
