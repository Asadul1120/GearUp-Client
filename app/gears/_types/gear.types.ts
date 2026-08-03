export type ReviewCustomer = {
  id: string;
  name: string;
  profileImage: string | null;
};

export type PublicGearReview = {
  id: string;
  customerId: string;
  gearId: string;
  rating: number;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  customer: ReviewCustomer;
};

export type PublicGear = {
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
  createdAt: string;
  updatedAt: string;

  category: {
    id: string;
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };

  provider: {
    id: string;
    name: string;
    phone: string | null;
  };

  reviews: PublicGearReview[];
};

export type PublicGearResponse = {
  success: boolean;
  message: string;

  data?: {
    meta: {
      page: number;
      limit: number;
      total: number;
    };

    data: PublicGear[];
  };
};
