import {
  PackageSearch,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { connection } from "next/server";

import Navbar from "@/app/_components/navbar/Navbar";
import PublicPageHero from "@/app/_components/hero/PublicPageHero";

import { getPublicGears } from "./_actions/gearActions";
import GearSearchList from "./_components/GearSearchList";
import Footer from "../_components/footer/Footer";

const benefits = [
  {
    title: "Wide Collection",
    description:
      "Explore sports and outdoor equipment from different trusted providers.",
    icon: PackageSearch,
  },
  {
    title: "Customer Reviews",
    description:
      "Check verified ratings and comments before choosing equipment.",
    icon: Star,
  },
  {
    title: "Trusted Providers",
    description:
      "View provider information, available stock and daily rental prices.",
    icon: ShieldCheck,
  },
];

const PublicGearPage = async () => {
  await connection();

  const result = await getPublicGears();

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
        <PublicPageHero
          badge="Explore Sports Gear"
          title="Find the right gear for your next activity"
          description="Browse quality sports equipment, compare daily prices, check availability and read customer reviews before renting."
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85"
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h2 className="mt-4 text-lg font-bold text-gray-900">
                    {benefit.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          {!result.success && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              {result.message}
            </div>
          )}

          {result.success &&
            result.data.length === 0 && (
              <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <PackageSearch size={31} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-gray-900">
                  No gear available
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Available sports equipment will appear here.
                </p>
              </div>
            )}

          {result.data.length > 0 && (
            <GearSearchList gears={result.data} />
          )}
        </section>

        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
            <article className="rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
              <Truck className="text-blue-300" size={27} />

              <h3 className="mt-5 text-xl font-bold">
                Simple Rental Process
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Browse gear, select rental dates and manage
                your rental from the Customer Dashboard.
              </p>
            </article>

            <article className="rounded-3xl bg-blue-600 p-6 text-white shadow-sm">
              <Star className="text-blue-100" size={27} />

              <h3 className="mt-5 text-xl font-bold">
                Review-Based Decisions
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100">
                Customer ratings and comments help you choose
                suitable equipment confidently.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <ShieldCheck
                className="text-blue-600"
                size={27}
              />

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Clear Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                View price, stock, category, provider and
                availability information in one place.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PublicGearPage;