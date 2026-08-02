export type UserRole =
  | "ADMIN"
  | "CUSTOMER"
  | "PROVIDER";

export type UserStatus =
  | "ACTIVE"
  | "SUSPENDED";

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  address: string | null;
  role: "ADMIN";
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
};

export type AdminProfileResponse = {
  success: boolean;
  message: string;
  data?: AdminUser;
};

export type AdminAuthResult = {
  success: boolean;
  message: string;
  data: AdminUser | null;
};