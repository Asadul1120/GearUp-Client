import Hero from "@/app/_components/hero/Hero";
import Navbar from "./_components/navbar/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />
    </main>
  );
}