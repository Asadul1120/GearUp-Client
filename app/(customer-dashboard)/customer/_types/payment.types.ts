import type {
  PaymentProvider,
  PaymentStatus,
  RentalStatus,
} from "./rental.types";

export type CheckoutData = {
  checkoutUrl: string;
};

export type CreatePaymentResponse = {
  success: boolean;
  message: string;
  data?: CheckoutData;
};

export type CreatePaymentResult = {
  success: boolean;
  message: string;
  data: CheckoutData | null;
};

export type PaymentGear = {
  id: string;
  name: string;
  image: string | null;
};

export type PaymentRental = {
  id: string;
  totalAmount: number;
  status: RentalStatus;
  gear: PaymentGear;
};

export type CustomerPayment = {
  id: string;
  rentalOrderId: string;
  transactionId: string;
  amount: number;
  provider: PaymentProvider;
  status: PaymentStatus;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
  rentalOrder: PaymentRental;
};

export type CustomerPaymentsResponse = {
  success: boolean;
  message: string;
  data?: CustomerPayment[];
};
