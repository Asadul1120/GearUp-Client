import Hero from "@/app/_components/hero/Hero";
import Navbar from "@/app/_components/navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-4rem)]">
        <Hero />
      </main>
    </>
  );
};

export default HomePage;