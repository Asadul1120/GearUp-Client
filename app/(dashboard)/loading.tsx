import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
        {/* Spinner */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-200 opacity-40" />
            <LoaderCircle className="relative h-10 w-10 animate-spin text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 h-6 w-40 animate-pulse rounded-md bg-gray-200" />
          <div className="mx-auto h-4 w-56 animate-pulse rounded-md bg-gray-100" />
        </div>

        {/* Input Skeleton */}
        <div className="space-y-4">
          <div className="h-12 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-12 animate-pulse rounded-xl bg-gray-100" />
          <div className="h-12 animate-pulse rounded-xl bg-gray-100" />
        </div>

        {/* Button Skeleton */}
        <div className="mt-6 h-12 animate-pulse rounded-xl bg-blue-100" />

        {/* Footer Skeleton */}
        <div className="mt-8 flex justify-center">
          <div className="h-4 w-36 animate-pulse rounded-md bg-gray-100" />
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-center">
          <p className="font-medium text-gray-700">Loading...</p>
          <p className="mt-1 text-sm text-gray-500">
            Please wait while we prepare your experience.
          </p>
        </div>
      </div>
    </div>
  );
}
