import { CalendarDays, Mail, Package, Phone, UserRound } from "lucide-react";
import OrderStatusButton from "./OrderStatusButton";
import Image from "next/image";
import type { ProviderOrder, RentalStatus } from "../_types/order.types";

type OrderCardProps = {
  order: ProviderOrder;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getStatusStyle = (status: RentalStatus) => {
  if (status === "PLACED") {
    return "bg-orange-100 text-orange-700";
  }

  if (status === "CONFIRMED") {
    return "bg-blue-100 text-blue-700";
  }

  if (status === "PAID") {
    return "bg-purple-100 text-purple-700";
  }

  if (status === "PICKED_UP") {
    return "bg-green-100 text-green-700";
  }

  if (status === "RETURNED") {
    return "bg-gray-100 text-gray-700";
  }

  return "bg-red-100 text-red-700";
};

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Top section */}
      <div className="flex flex-col gap-4 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="flex items-center gap-3">
          {/* Gear image */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
            {order.gear?.image ? (
              <Image
                src={order.gear.image}
                alt={order.gear.name}
                width={60}
                height={60}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              <Package size={25} className="text-gray-400" />
            )}
          </div>

          <div>
            <h2 className="font-bold text-gray-900">
              {order.gear?.name || "Gear name unavailable"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {order.gear?.brand || "Brand unavailable"}
            </p>
          </div>
        </div>

        {/* Status badge */}
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
            order.status,
          )}`}
        >
          {order.status.replace("_", " ")}
        </span>
      </div>

      {/* Order information */}
      <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {/* Customer information */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
            Customer
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <UserRound size={16} className="text-gray-400" />

              <span>{order.customer?.name || "Customer unavailable"}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail size={16} className="text-gray-400" />

              <span className="break-all">
                {order.customer?.email || "Email unavailable"}
              </span>
            </div>

            {order.customer?.phone && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />

                <span>{order.customer.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Rental date */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
            Rental Period
          </p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CalendarDays size={16} className="text-gray-400" />

              <span>Start: {formatDate(order.startDate)}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CalendarDays size={16} className="text-gray-400" />

              <span>End: {formatDate(order.endDate)}</span>
            </div>
          </div>
        </div>

        {/* Payment information */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
            Order Details
          </p>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Quantity: <span className="font-semibold">{order.quantity}</span>
            </p>

            <p>
              Total:{" "}
              <span className="font-bold text-blue-700">
                ৳{order.totalAmount}
              </span>
            </p>
          </div>
        </div>

        {/* Action button */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
            Action
          </p>

          <OrderStatusButton orderId={order.id} currentStatus={order.status} />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
