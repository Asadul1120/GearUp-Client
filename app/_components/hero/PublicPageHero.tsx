import Image from "next/image";

type PublicPageHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
};

const PublicPageHero = ({
  badge,
  title,
  description,
  image,
}: PublicPageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            {badge}
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-200/60 to-cyan-100/50 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white p-2 shadow-2xl">
            <div className="relative h-64 overflow-hidden rounded-[1.25rem] sm:h-80 lg:h-[410px]">
              <Image
                src={image}
                alt={title}
                unoptimized
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicPageHero;