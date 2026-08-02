import { connection } from "next/server";

import { getAdminCategories } from "../_actions/adminCategoryActions";
import CategoryCard from "../_components/CategoryCard";
import CategoryForm from "../_components/CategoryForm";

const AdminCategoriesPage = async () => {
  await connection();

  const result = await getAdminCategories();

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Category Management
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Create and manage gear categories
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <div>
          <CategoryForm />
        </div>

        <div>
          {!result.success && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {result.message}
            </div>
          )}

          {result.success && result.data.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
              <h2 className="text-lg font-semibold text-gray-900">
                No categories found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Create your first category.
              </p>
            </div>
          )}

          {result.data.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2">
              {result.data.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminCategoriesPage;
