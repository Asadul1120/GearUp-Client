import Image from "next/image";

import {
  BadgeCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <HeroContent />
            <HeroSearch />
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-300/50 to-indigo-200/40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-2 shadow-2xl backdrop-blur">
              <div className="relative h-[340px] overflow-hidden rounded-[1.5rem] sm:h-[440px] lg:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=90"
                  alt="Sports and outdoor equipment"
               
                  unoptimized
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                  <p className="text-sm font-medium text-blue-100">
                    Premium Sports Equipment
                  </p>

                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    Gear up for every adventure
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                    Find suitable equipment for sports,
                    fitness and outdoor activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-7 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur sm:-left-8 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <BadgeCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Quality Gear
                  </p>

                  <p className="text-xs text-gray-500">
                    Trusted equipment
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-1/3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur sm:-right-6 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Star
                    size={21}
                    className="fill-amber-500"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Real Reviews
                  </p>

                  <p className="text-xs text-gray-500">
                    Customer feedback
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-4 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl backdrop-blur sm:-left-7 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <ShieldCheck size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Reliable Rental
                  </p>

                  <p className="text-xs text-gray-500">
                    Simple management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;