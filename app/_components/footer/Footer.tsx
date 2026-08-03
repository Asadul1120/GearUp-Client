import Link from "next/link";

import {
  Dumbbell,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Browse Gear",
    href: "/gears",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const accountLinks = [
  {
    name: "Sign In",
    href: "/login",
  },
  {
    name: "Create Account",
    href: "/register",
  },
  {
    name: "My Profile",
    href: "/profile",
  },
];

const getCurrentYear = async () => {
  "use cache";

  return new Date().getFullYear();
};

const Footer = async () => {
  const currentYear = await getCurrentYear();

  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  const supportPhone =
    process.env.NEXT_PUBLIC_SUPPORT_PHONE;

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="GearUp home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/40">
                <Dumbbell size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  GearUp
                </h2>

                <p className="text-xs text-slate-400">
                  Rent Sports Gear
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Discover quality sports and outdoor
              equipment from trusted providers. Compare
              prices, check availability and rent the gear
              you need.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-300">
              Simple. Reliable. Affordable.
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Account
            </h3>

            <ul className="mt-5 space-y-3">
              {accountLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  {supportEmail ? (
                    <a
                      href={`mailto:${supportEmail}`}
                      className="mt-1 block break-all text-sm text-slate-300 transition hover:text-blue-400"
                    >
                      {supportEmail}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-400">
                      Not configured
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone
                  </p>

                  {supportPhone ? (
                    <a
                      href={`tel:${supportPhone}`}
                      className="mt-1 block text-sm text-slate-300 transition hover:text-blue-400"
                    >
                      {supportPhone}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-400">
                      Not configured
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-blue-400">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} GearUp. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/about"
              className="transition hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-blue-400"
            >
              Support
            </Link>

            <Link
              href="/gear"
              className="transition hover:text-blue-400"
            >
              Explore Gear
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;