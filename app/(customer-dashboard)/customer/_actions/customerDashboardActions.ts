"use server";

import { getCustomerPayments } from "./customerPaymentActions";
import { getCustomerRentals } from "./customerRentalActions";

export const getCustomerDashboardData = async () => {
  const rentalResult = await getCustomerRentals();
  const paymentResult = await getCustomerPayments();

  const rentals = rentalResult.data;
  const payments = paymentResult.data;

  const pendingOrders = rentals.filter(
    (rental) => rental.status === "PLACED",
  ).length;

  const activeRentals = rentals.filter(
    (rental) => rental.status === "PAID" || rental.status === "PICKED_UP",
  ).length;

  const completedOrders = rentals.filter(
    (rental) => rental.status === "RETURNED",
  ).length;

  const totalPayments = payments
    .filter((payment) => payment.status === "COMPLETED")
    .reduce((total, payment) => total + payment.amount, 0);

  return {
    success: rentalResult.success && paymentResult.success,
    message: rentalResult.message || paymentResult.message,
    data: {
      totalOrders: rentals.length,
      pendingOrders,
      activeRentals,
      completedOrders,
      totalPayments,
    },
  };
};
