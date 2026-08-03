import { PackageCheck, Star, Store, Users } from "lucide-react";

const stats = [
  {
    number: "500+",
    title: "Gear Available",
    description: "Sports and outdoor equipment",
    icon: PackageCheck,
  },
  {
    number: "50+",
    title: "Trusted Providers",
    description: "Reliable rental partners",
    icon: Store,
  },
  {
    number: "2K+",
    title: "Happy Customers",
    description: "Successful rental experiences",
    icon: Users,
  },
  {
    number: "99%",
    title: "Positive Reviews",
    description: "Customer satisfaction",
    icon: Star,
  },
];

const HeroStats = () => {
  return (
    <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="group rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={23} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.number}
                </h2>

                <p className="text-sm font-semibold text-gray-700">
                  {item.title}
                </p>
              </div>
            </div>

            <p className="mt-4 border-t border-gray-100 pt-4 text-xs leading-5 text-gray-500">
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default HeroStats;
