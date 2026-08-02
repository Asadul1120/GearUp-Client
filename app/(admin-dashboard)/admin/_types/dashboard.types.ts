import type {
  UserRole,
  UserStatus,
} from "./admin.types";

export type DashboardUser = {
  id: string;
  role: UserRole;
  status: UserStatus;
};

export type UsersResponse = {
  success: boolean;
  message: string;
  data?: DashboardUser[];
};

export type GearListResponse = {
  success: boolean;
  message: string;
  data?: {
    data: {
      id: string;
    }[];
  };
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data?: {
    id: string;
  }[];
};

export type AdminDashboardStats = {
  totalUsers: number;
  totalCustomers: number;
  totalProviders: number;
  suspendedUsers: number;
  totalGears: number;
  totalCategories: number;
};

export type AdminDashboardResult = {
  success: boolean;
  message: string;
  data: AdminDashboardStats;
};