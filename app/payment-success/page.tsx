import Link from "next/link";
import { CheckCircle } from "lucide-react";

const PaymentSuccessPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-sm">
        <CheckCircle size={60} className="mx-auto text-green-600" />

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Payment Successful
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Your rental payment has been completed.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/customer/rentals"
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Rentals
          </Link>

          <Link
            href="/customer/payments"
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            View Payments
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;
