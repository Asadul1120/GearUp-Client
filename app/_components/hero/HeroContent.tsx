import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="max-w-4xl mt-10 text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        🚀 Sports & Outdoor Rental Platform
      </span>

      <h1 className="mt-8 text-3xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
        Rent Premium Sports Gear
        <span className="block text-blue-600">
          Anytime, Anywhere
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        Discover high-quality sports and outdoor equipment
        from trusted providers at affordable prices.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

        <Link
          href="/gear"
          className="rounded-xl bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Gear
        </Link>

        <Link
          href="/register"
          className="rounded-xl border border-gray-300 bg-white px-6 py-2 font-semibold transition hover:border-blue-600 hover:text-blue-600"
        >
          Become Provider
        </Link>

      </div>

    </div>
  );
};

export default HeroContent;