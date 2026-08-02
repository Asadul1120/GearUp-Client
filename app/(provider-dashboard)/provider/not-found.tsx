import Link from "next/link";

import { ArrowLeft, Home, SearchX } from "lucide-react";

const ProviderNotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">
        {/* 404 icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <SearchX size={30} />
        </div>

        {/* Error code */}
        <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-600">
          Error 404
        </p>

        {/* Title */}
        <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-600">
          The Provider page you are looking for does not exist or may have been
          removed.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/provider"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} />
            Provider Dashboard
          </Link>

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

export default ProviderNotFound;
