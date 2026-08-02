import { connection } from "next/server";

import { getCustomerRentals } from "../_actions/customerRentalActions";
import RentalCard from "../_components/RentalCard";

const CustomerReviewsPage = async () => {
  await connection();

  const result = await getCustomerRentals();

  const returnedRentals = result.data.filter(
    (rental) => rental.status === "RETURNED",
  );

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Reviews</h1>

        <p className="mt-1 text-sm text-gray-500">
          Review your completed rentals
        </p>
      </div>

      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {result.message}
        </div>
      )}

      {result.success && returnedRentals.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No completed rentals
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Returned rentals will appear here.
          </p>
        </div>
      )}

      {returnedRentals.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {returnedRentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomerReviewsPage;
