export type RentalStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED";

export type OrderCustomer = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  profileImage?: string | null;
};

export type OrderGear = {
  id: string;
  name: string;
  image: string;
  brand: string;
  pricePerDay: number;
};

export type ProviderOrder = {
  id: string;

  quantity: number;

  startDate: string;
  endDate: string;

  totalAmount: number;

  status: RentalStatus;

  customerId: string;
  gearId: string;

  customer?: OrderCustomer;
  gear?: OrderGear;

  createdAt?: string;
  updatedAt?: string;
};

export type ProviderOrdersResponse = {
  success: boolean;
  message: string;
  data?: ProviderOrder[];
};

export type UpdateOrderResponse = {
  success: boolean;
  message: string;
  data?: ProviderOrder;
};

export type OrderActionResult = {
  success: boolean;
  message: string;
};
