export type AdminGear = {
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
  };

  provider: {
    id: string;
    name: string;
    phone: string | null;
  };
};

export type AdminGearsResponse = {
  success: boolean;
  message: string;

  data?: {
    meta: {
      page: number;
      limit: number;
      total: number;
    };

    data: AdminGear[];
  };
};
