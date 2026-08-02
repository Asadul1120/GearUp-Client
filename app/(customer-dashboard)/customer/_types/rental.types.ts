export type RentalStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED";

export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED";

export type PaymentProvider = "STRIPE" | "SSLCOMMERZ";

export type RentalCategory = {
  id: string;
  name: string;
};

export type RentalProvider = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
};

export type RentalGear = {
  id: string;
  name: string;
  description: string;
  brand: string;
  image: string | null;
  pricePerDay: number;
  stock: number;
  availability: boolean;
  providerId: string;
  categoryId: string;
  category: RentalCategory;
  provider: RentalProvider;
};

export type RentalPayment = {
  id: string;
  rentalOrderId: string;
  transactionId: string;
  amount: number;
  provider: PaymentProvider;
  status: PaymentStatus;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CustomerRental = {
  id: string;
  customerId: string;
  gearId: string;
  quantity: number;
  startDate: string;
  endDate: string;
  totalAmount: number;
  status: RentalStatus;
  gear: RentalGear;
  payment: RentalPayment | null;
  createdAt: string;
  updatedAt: string;
};

export type CustomerRentalsResponse = {
  success: boolean;
  message: string;
  data?: CustomerRental[];
};

export type CustomerRentalsResult = {
  success: boolean;
  message: string;
  data: CustomerRental[];
};
