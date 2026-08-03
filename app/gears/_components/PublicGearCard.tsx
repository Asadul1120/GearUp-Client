import Image from "next/image";
import { Star } from "lucide-react";

import type { PublicGear } from "../_types/gear.types";

type PublicGearCardProps = {
  gear: PublicGear;
};

const PublicGearCard = ({
  gear,
}: PublicGearCardProps) => {
  const isAvailable =
    gear.availability && gear.stock > 0;

  const averageRating =
    gear.reviews.length > 0
      ? gear.reviews.reduce(
          (total, review) =>
            total + review.rating,
          0,
        ) / gear.reviews.length
      : 0;

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative h-56 bg-gray-100">
        {gear.image ? (
          <Image
            src={gear.image}
            alt={gear.name}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No image available
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            isAvailable
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {isAvailable
            ? "Available"
            : "Unavailable"}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {gear.category.name}
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            {gear.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Brand: {gear.brand}
          </p>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {gear.description}
        </p>

        <div className="flex items-end justify-between gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-500">
              Price per day
            </p>

            <p className="text-xl font-bold text-blue-600">
              ৳{gear.pricePerDay}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">
              Available stock
            </p>

            <p className="font-bold text-gray-900">
              {gear.stock}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-gray-500">
            Provider
          </p>

          <p className="mt-1 font-semibold text-gray-900">
            {gear.provider.name}
          </p>

          <p className="text-sm text-gray-500">
            {gear.provider.phone ||
              "No phone number"}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-gray-900">
              Customer Reviews
            </h3>

            <div className="flex items-center gap-1 text-sm">
              <Star
                size={17}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-semibold text-gray-900">
                {averageRating.toFixed(1)}
              </span>

              <span className="text-gray-500">
                ({gear.reviews.length})
              </span>
            </div>
          </div>

          {gear.reviews.length === 0 ? (
            <p className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-gray-500">
              No reviews yet.
            </p>
          ) : (
            <div className="mt-4 max-h-60 space-y-3 overflow-y-auto pr-1">
              {gear.reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl border border-gray-100 bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-100 font-bold text-blue-600">
                      {review.customer.profileImage ? (
                        <Image
                          src={
                            review.customer
                              .profileImage
                          }
                          alt={
                            review.customer.name
                          }
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      ) : (
                        review.customer.name
                          .charAt(0)
                          .toUpperCase()
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {
                              review.customer
                                .name
                            }
                          </p>

                          <p className="text-xs text-gray-400">
                            {new Date(
                              review.createdAt,
                            ).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                          <Star
                            size={15}
                            className="fill-yellow-400 text-yellow-400"
                          />

                          {review.rating}
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {review.comment ||
                          "No comment provided."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PublicGearCard;