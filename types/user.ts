export type UserRole = "ADMIN" | "CUSTOMER" | "PROVIDER";

export type UserStatus = "ACTIVE" | "SUSPENDED";

export type UpdateProfileInput = {
  name: string;
  phone: string;
  profileImage: string;
  address: string;
};

export interface IUser {
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
  gears: unknown[];
  rentals: unknown[];
  reviews: unknown[];
}
