"use server";

import { getProviderGears } from "./providerGearActions";
import { getProviderOrders } from "./providerOrderActions";

import type { ProviderDashboardStats } from "../_types/dashboard.types";

export const getProviderDashboardStats = async () => {
  const gearResult = await getProviderGears();
  const orderResult = await getProviderOrders();

  const gears = gearResult.data;
  const orders = orderResult.data;

  const totalGear = gears.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "PLACED",
  ).length;

  const activeRentals = orders.filter(
    (order) => order.status === "PAID" || order.status === "PICKED_UP",
  ).length;

  const completedRentals = orders.filter(
    (order) => order.status === "RETURNED",
  ).length;

  const revenueOrders = orders.filter(
    (order) =>
      order.status === "PAID" ||
      order.status === "PICKED_UP" ||
      order.status === "RETURNED",
  );

  let totalRevenue = 0;

  revenueOrders.forEach((order) => {
    totalRevenue = totalRevenue + Number(order.totalAmount);
  });

  const dashboardStats: ProviderDashboardStats = {
    totalGear,
    pendingOrders,
    activeRentals,
    completedRentals,
    totalRevenue,
  };

  return {
    success: true,
    message: "Dashboard statistics loaded successfully.",
    data: dashboardStats,
  };
};
