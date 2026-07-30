"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Something went wrong !
            </h1>

            <button
              onClick={() => reset()}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}