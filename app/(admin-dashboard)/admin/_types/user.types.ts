import type { UserRole, UserStatus } from "./admin.types";

export type AdminManagedUser = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  address: string | null;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
};

export type UsersResponse = {
  success: boolean;
  message: string;
  data?: AdminManagedUser[];
};

export type UserActionResponse = {
  success: boolean;
  message: string;
  data?: AdminManagedUser | null;
};
