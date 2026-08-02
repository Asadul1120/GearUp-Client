export type ReviewCustomer = {
  id: string;
  name: string;
  profileImage: string | null;
};

export type ReviewGear = {
  id: string;
  name: string;
  brand: string;
};

export type GearReview = {
  id: string;
  customerId: string;
  gearId: string;
  rating: number;
  comment: string | null;
  customer: ReviewCustomer;
  gear?: ReviewGear;
  createdAt: string;
  updatedAt: string;
};

export type CreateReviewResponse = {
  success: boolean;
  message: string;
  data?: GearReview;
};

export type GearReviewsResponse = {
  success: boolean;
  message: string;
  data?: GearReview[];
};
