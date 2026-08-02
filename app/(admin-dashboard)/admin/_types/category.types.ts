export type AdminCategory = {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data?: AdminCategory[];
};

export type CategoryActionResponse = {
  success: boolean;
  message: string;
  data?: AdminCategory;
};