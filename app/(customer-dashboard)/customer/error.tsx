"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

type CustomerErrorProps = {
  error: Error;
  reset: () => void;
};

const CustomerError = ({ error, reset }: CustomerErrorProps) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertCircle size={28} />
        </div>

        <h1 className="mt-4 text-xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {error.message || "Could not load the customer dashboard."}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <RefreshCw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default CustomerError;
