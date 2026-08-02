import { connection } from "next/server";

import { getCustomerPayments } from "../_actions/customerPaymentActions";
import PaymentCard from "../_components/PaymentCard";

const CustomerPaymentsPage = async () => {
  await connection();

  const result = await getCustomerPayments();

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>

        <p className="mt-1 text-sm text-gray-500">
          View your rental payment history
        </p>
      </div>

      {!result.success && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {result.message}
        </div>
      )}

      {result.success && result.data.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No payments found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Your payment history will appear here.
          </p>
        </div>
      )}

      {result.data.length > 0 && (
        <div className="grid gap-5 lg:grid-cols-2">
          {result.data.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CustomerPaymentsPage;
