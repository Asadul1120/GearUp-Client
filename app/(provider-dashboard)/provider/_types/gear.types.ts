
export type Category = {
  id: string;
  name: string;
};


export type Gear = {
  id: string;
  name: string;
  description: string;
  brand: string;
  image: string;
  pricePerDay: number;
  stock: number;
  availability: boolean;
  providerId: string;
  categoryId: string;
  category?: Category;
  createdAt?: string;
  updatedAt?: string;
};


export type ProviderUser = {
  id: string;
  name: string;
  email: string;
  role: "PROVIDER";
  gears: Gear[];
};


export type ProviderProfileResponse = {
  success: boolean;
  message: string;
  data?: ProviderUser;
};


export type CategoryResponse = {
  success: boolean;
  message: string;
  data?: Category[];
};


export type CreateGearData = {
  name: string;
  description: string;
  brand: string;
  image: string;
  pricePerDay: number;
  stock: number;
  availability: boolean;
  categoryId: string;
};


export type UpdateGearData = {
  name?: string;
  description?: string;
  brand?: string;
  image?: string;
  pricePerDay?: number;
  stock?: number;
  availability?: boolean;
  categoryId?: string;
};


export type GearResponse = {
  success: boolean;
  message: string;
  data?: Gear;
};


export type GearActionResult = {
  success: boolean;
  message: string;
};