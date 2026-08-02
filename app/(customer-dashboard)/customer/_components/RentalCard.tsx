import Image from "next/image";

import type { CustomerRental } from "../_types/rental.types";
import PayNowButton from "./PayNowButton";
import ReviewForm from "./ReviewForm";

type RentalCardProps = {
  rental: CustomerRental;
};

const statusStyle = {
  PLACED: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  PAID: "bg-green-100 text-green-700",
  PICKED_UP: "bg-purple-100 text-purple-700",
  RETURNED: "bg-gray-100 text-gray-700",
  CANCELLED: "bg-red-100 text-red-700",
};

const RentalCard = ({ rental }: RentalCardProps) => {
  const startDate = new Date(
    rental.startDate,
  ).toLocaleDateString();

  const endDate = new Date(
    rental.endDate,
  ).toLocaleDateString();

  const canPay =
    rental.status === "CONFIRMED" &&
    rental.payment?.status !== "COMPLETED";

  const canReview =
    rental.status === "RETURNED";

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-48 bg-gray-100">
        {rental.gear.image ? (
          <Image
            src={rental.gear.image}
            alt={rental.gear.name}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No image available
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {rental.gear.name}
            </h2>

            <p className="text-sm text-gray-500">
              {rental.gear.brand}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusStyle[rental.status]
            }`}
          >
            {rental.status.replace("_", " ")}
          </span>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            Quantity:{" "}
            <span className="font-semibold">
              {rental.quantity}
            </span>
          </p>

          <p>
            Rental period:{" "}
            <span className="font-semibold">
              {startDate} - {endDate}
            </span>
          </p>

          <p>
            Provider:{" "}
            <span className="font-semibold">
              {rental.gear.provider.name}
            </span>
          </p>

          <p>
            Payment:{" "}
            <span className="font-semibold">
              {rental.payment?.status || "PENDING"}
            </span>
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">
            Total amount
          </p>

          <p className="text-xl font-bold text-blue-600">
            ৳{rental.totalAmount}
          </p>
        </div>

        {canPay && (
          <PayNowButton
            rentalOrderId={rental.id}
          />
        )}

        {canReview && (
          <ReviewForm
            gearId={rental.gearId}
          />
        )}
      </div>
    </div>
  );
};

export default RentalCard;