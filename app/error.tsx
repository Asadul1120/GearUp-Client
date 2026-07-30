"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-8 text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-10 w-10 text-red-600" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl font-bold text-gray-800">
          Oops! Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500">
          We encountered an unexpected error while loading this page.
          Please try again. If the problem continues, come back later.
        </p>

        {/* Retry Button */}
        <button
          onClick={() => unstable_retry()}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700"
        >
          <RefreshCcw className="h-5 w-5" />
          Try Again
        </button>

        {/* Error Message (Development only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-lg bg-gray-100 p-3 text-left text-xs text-red-600">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
}