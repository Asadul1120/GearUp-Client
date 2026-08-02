import Image from "next/image";

import type { CustomerPayment } from "../_types/payment.types";

type PaymentCardProps = {
  payment: CustomerPayment;
};

const PaymentCard = ({ payment }: PaymentCardProps) => {
  const paymentDate = new Date(
    payment.paidAt || payment.createdAt,
  ).toLocaleDateString();

  const statusStyle =
    payment.status === "COMPLETED"
      ? "bg-green-100 text-green-700"
      : payment.status === "FAILED"
        ? "bg-red-100 text-red-700"
        : "bg-yellow-100 text-yellow-700";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex gap-4 p-4 sm:p-5">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
          {payment.rentalOrder.gear.image ? (
            <Image
              src={payment.rentalOrder.gear.image}
              alt={payment.rentalOrder.gear.name}
              fill
              unoptimized
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-2 text-center text-xs text-gray-400">
              No image
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h2 className="truncate font-bold text-gray-900">
                {payment.rentalOrder.gear.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">{paymentDate}</p>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle}`}
            >
              {payment.status}
            </span>
          </div>

          <p className="mt-3 text-xl font-bold text-blue-600">
            ৳{payment.amount}
          </p>
        </div>
      </div>

      <div className="space-y-2 border-t border-gray-100 px-4 py-4 text-sm sm:px-5">
        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Provider</span>

          <span className="font-semibold text-gray-800">
            {payment.provider}
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Transaction ID</span>

          <span className="max-w-[65%] truncate font-medium text-gray-800">
            {payment.transactionId}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
