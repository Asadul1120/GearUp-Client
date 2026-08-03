import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from "lucide-react";

import Footer from "@/app/_components/footer/Footer";
import Hero from "@/app/_components/hero/Hero";
import Navbar from "@/app/_components/navbar/Navbar";

const benefits = [
  {
    title: "Wide Gear Collection",
    description:
      "Explore sports and outdoor equipment from different trusted providers.",
    icon: PackageSearch,
  },
  {
    title: "Flexible Rental",
    description:
      "Choose equipment based on your preferred rental dates and requirements.",
    icon: CalendarCheck,
  },
  {
    title: "Secure Management",
    description:
      "Protected customer, provider and admin dashboards keep every activity organized.",
    icon: ShieldCheck,
  },
];

const steps = [
  {
    number: "01",
    title: "Explore Gear",
    description:
      "Browse available equipment and search by name, brand, category or provider.",
    icon: PackageSearch,
  },
  {
    number: "02",
    title: "Choose and Rent",
    description:
      "Check prices, availability and customer reviews before placing your rental.",
    icon: WalletCards,
  },
  {
    number: "03",
    title: "Manage Rental",
    description:
      "Track rental progress, make payments and leave a review after completion.",
    icon: BadgeCheck,
  },
];

const highlights = [
  "Search gear quickly",
  "Compare daily prices",
  "Read customer reviews",
  "Check stock availability",
];

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-slate-50">
        <Hero />

        <section className="relative z-10 mx-auto -mt-5 w-full max-w-7xl px-4 sm:-mt-8 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl sm:grid-cols-3">
            <div className="flex items-center gap-4 border-b border-gray-200 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Users size={24} />
              </div>

              <div>
                <p className="text-xl font-bold text-gray-900">
                  Trusted
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Equipment providers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-gray-200 p-5 sm:border-b-0 sm:border-r sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                <Star size={24} />
              </div>

              <div>
                <p className="text-xl font-bold text-gray-900">
                  Reviewed
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Customer experiences
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                <ShieldCheck size={24} />
              </div>

              <div>
                <p className="text-xl font-bold text-gray-900">
                  Reliable
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Rental management
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles size={16} />
              Why Choose GearUp
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a better rental experience
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              GearUp provides an organized platform where customers
              can discover equipment and providers can manage their
              rental business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                <BadgeCheck size={17} />
                Simple and Reliable
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Find suitable gear without unnecessary complexity
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                GearUp brings equipment details, rental prices,
                availability, provider information and customer
                feedback together in one place.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <CheckCircle
                      size={20}
                      className="shrink-0 text-blue-600"
                    />

                    <p className="text-sm font-semibold text-gray-700">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/gear"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore All Gear
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 text-white shadow-2xl sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                  <PackageSearch size={29} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  Built for customers and providers
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Separate role-based dashboards ensure that each
                  user gets the tools needed for their activities.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">
                      Customer Dashboard
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Manage rentals, payments, reviews and profile
                      information.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">
                      Provider Dashboard
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Manage equipment, stock, availability and
                      customer rental orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rent equipment in three simple steps
            </h2>
          </div>

          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div className="absolute left-[16.5%] right-[16.5%] top-10 hidden h-px bg-blue-200 md:block" />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-slate-50 bg-blue-600 text-white shadow-lg">
                    <Icon size={28} />
                  </div>

                  <p className="mt-5 text-xs font-bold tracking-[0.2em] text-blue-600">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-12 text-center text-white shadow-xl sm:px-10 sm:py-16">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue-400/30" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to find your next sports gear?
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                Browse available equipment, compare rental prices
                and choose the right gear for your activity.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/gear"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Browse Gear
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;