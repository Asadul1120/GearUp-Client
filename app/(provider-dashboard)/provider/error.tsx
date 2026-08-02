"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";

import Link from "next/link";

type ProviderErrorProps = {
  error: Error;
  reset: () => void;
};

const ProviderError = ({ error, reset }: ProviderErrorProps) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm sm:p-8">
        {/* Error icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle size={30} />
        </div>

        {/* Error title */}
        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          Something went wrong
        </h1>

        {/* Error message */}
        <p className="mt-3 text-sm leading-6 text-gray-600">
          We could not load this Provider page. Please try again.
        </p>

        {/* Development error message */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-left">
            <p className="break-words text-xs text-red-700">{error.message}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderError;
