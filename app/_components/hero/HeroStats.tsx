const stats = [
  {
    number: "500+",
    title: "Gear Available",
  },
  {
    number: "50+",
    title: "Trusted Providers",
  },
  {
    number: "2K+",
    title: "Happy Customers",
  },
  {
    number: "99%",
    title: "Positive Reviews",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-6 lg:grid-cols-4">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-8 text-center shadow-md"
        >
          <h2 className="text-4xl font-bold text-blue-600">
            {item.number}
          </h2>

          <p className="mt-2 text-gray-600">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  );
};

export default HeroStats;