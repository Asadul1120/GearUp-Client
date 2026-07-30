export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  address: string;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  status: string;
  createdAt: string;
  updatedAt: string;
  gears: [];
  rentals: [];
  reviews: [];
}
