export type CustomerStatus = "ACTIVE" | "SUSPENDED";

export type CustomerUser = {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER";
  status: CustomerStatus;
  phone?: string | null;
  address?: string | null;
  profileImage?: string | null;
};

export type CustomerProfileResponse = {
  success: boolean;
  message: string;
  data?: CustomerUser;
};

export type CustomerAuthResult = {
  success: boolean;
  message: string;
  data: CustomerUser | null;
};

export type CustomerDashboardStats = {
  totalOrders: number;
  pendingOrders: number;
  activeRentals: number;
  completedOrders: number;
  totalPayments: number;
};

export type CustomerDashboardResult = {
  success: boolean;
  message: string;
  data: CustomerDashboardStats;
};
