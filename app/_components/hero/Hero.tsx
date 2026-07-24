import HeroContent from "./HeroContent";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-5">

        <HeroContent />

        <HeroSearch />

        <HeroStats />

      </div>
    </section>
  );
};

export default Hero;