import Link from "next/link";

import { ArrowLeft, SearchX } from "lucide-react";

const AdminNotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <SearchX size={28} />
        </div>

        <h1 className="mt-4 text-xl font-bold text-gray-900">Page Not Found</h1>

        <p className="mt-2 text-sm text-gray-500">
          The admin page you requested could not be found.
        </p>

        <Link
          href="/admin"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AdminNotFound;
