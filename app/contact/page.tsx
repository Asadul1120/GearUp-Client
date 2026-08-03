import type { Metadata } from "next";

import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/app/_components/navbar/Navbar";
import PublicPageHero from "@/app/_components/hero/PublicPageHero";
import Footer from "../_components/footer/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the GearUp support team for assistance.",
};

const ContactPage = () => {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  const supportPhone = process.env.NEXT_PUBLIC_SUPPORT_PHONE;

  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)] bg-slate-50">
        <PublicPageHero
          badge="Contact GearUp"
          title="We are here to help you"
          description="Contact our support team for rental questions, payment issues, provider assistance or account-related support."
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85"
        />

        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="space-y-5">
            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={22} />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Email Support
                  </h2>

                  {supportEmail ? (
                    <a
                      href={`mailto:${supportEmail}`}
                      className="mt-2 block break-all text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {supportEmail}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      Support email is not configured.
                    </p>
                  )}
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Phone Support
                  </h2>

                  {supportPhone ? (
                    <a
                      href={`tel:${supportPhone}`}
                      className="mt-2 block text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {supportPhone}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      Support phone is not configured.
                    </p>
                  )}
                </div>
              </div>
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Clock size={22} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Support Guidance
                  </h2>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Include your account email, rental ID and a clear
                    description of the problem for faster support.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <article className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <MessageCircle size={28} />
            </div>

            <h2 className="mt-5 text-2xl font-bold">Support for every user</h2>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Our support section covers common account, rental, payment and
              provider-related concerns.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Customer rental support",
                "Checkout and payment issues",
                "Provider gear management",
                "Login and profile assistance",
                "Account status support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-blue-50"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-white p-5 text-gray-900">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <h3 className="font-bold">Need quick assistance?</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Use the configured support email or phone number to contact
                    the GearUp team.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-white/10 p-5">
              <MapPin size={21} className="mt-0.5 shrink-0 text-blue-100" />

              <div>
                <h3 className="font-bold">Digital Support Platform</h3>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  GearUp support information can be updated through environment
                  variables.
                </p>
              </div>
            </div>

            {supportEmail && (
              <a
                href={`mailto:${supportEmail}?subject=GearUp Support Request`}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                <Mail size={18} />
                Send Support Email
              </a>
            )}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
