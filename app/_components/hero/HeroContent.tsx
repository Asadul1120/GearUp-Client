import Link from "next/link";

import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Store,
} from "lucide-react";

const HeroContent = () => {
  return (
    <div className="max-w-2xl text-center lg:text-left">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur sm:text-sm">
        <Sparkles size={16} />
        Sports and Outdoor Rental Platform
      </div>

      <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Rent premium sports gear
        <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          anytime, anywhere
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
        Discover quality sports and outdoor equipment from
        trusted providers. Compare prices, check availability
        and choose the right gear for your activity.
      </p>

      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
        <Link
          href="/gear"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Browse Gear
          <ArrowRight size={18} />
        </Link>

        <Link
          href="/register"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
        >
          <Store size={18} />
          Become a Provider
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
        {[
          "Trusted providers",
          "Flexible rental",
          "Customer reviews",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm font-medium text-gray-600"
          >
            <CheckCircle
              size={17}
              className="text-green-600"
            />

            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;