import type { Metadata } from "next";
import Link from "next/link";

import {
  CheckCircle,
  Handshake,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "@/app/_components/navbar/Navbar";
import PublicPageHero from "@/app/_components/hero/PublicPageHero";
import Footer from "../_components/footer/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how GearUp connects sports gear providers with customers.",
};

const features = [
  {
    title: "Easy Gear Rental",
    description:
      "Customers can browse available sports gear, compare options and place rental orders.",
    icon: PackageSearch,
  },
  {
    title: "Provider Management",
    description:
      "Providers can manage equipment, stock, availability and rental requests.",
    icon: Handshake,
  },
  {
    title: "Secure Role System",
    description:
      "Customers, providers and admins receive separate protected dashboards.",
    icon: ShieldCheck,
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
        <PublicPageHero
          badge="About GearUp"
          title="A smarter platform for sports gear rental"
          description="GearUp connects customers with equipment providers through a simple, organized and role-based digital rental platform."
          image="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=85"
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                <Sparkles size={16} />
                What We Do
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Connecting renters and providers
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                GearUp makes equipment rental easier and more
                organized. Customers can discover equipment,
                providers can manage their inventory and Admins
                can manage important platform information.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-bold text-blue-600">
                    3
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Dedicated user roles
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-bold text-blue-600">
                    1
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Unified rental platform
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Users size={29} />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Benefits for every user
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Customers browse and rent sports gear",
                  "Providers manage gear and rental orders",
                  "Admins manage users and categories",
                  "Reviews support better rental decisions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/10 p-3"
                  >
                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-100"
                    />

                    <p className="text-sm leading-6 text-blue-50">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-18 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why GearUp
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Designed for a better rental experience
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Each feature is designed to make sports gear
              rental clear, manageable and convenient.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-900 px-6 py-11 text-center text-white sm:px-10">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to explore available equipment?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Search sports gear, compare rental prices and
                read customer reviews before choosing.
              </p>

              <Link
                href="/gear"
                className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Browse Gear
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;