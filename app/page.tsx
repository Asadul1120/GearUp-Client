import Hero from "@/app/_components/hero/Hero";
import Navbar from "./_components/navbar/Navbar";

export default async function HomePage() {
//  if(true) {
//   throw new Error("Something went wrong");
//  }

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
