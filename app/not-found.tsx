import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-slate-50 via-white to-slate-100 px-6">
      <div className="w-full max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 shadow-lg ring-8 ring-blue-50">
          <SearchX className="h-11 w-11 text-blue-600" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-8xl font-extrabold tracking-tight text-slate-900">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-3 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-slate-500">
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
