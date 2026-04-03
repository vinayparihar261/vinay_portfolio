import { About } from "@/components/About";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Expectations } from "@/components/Expectations";
import { Family } from "@/components/Family";
import { Hero } from "@/components/Hero";
import { Lifestyle } from "@/components/Lifestyle";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="bg-blob w-[500px] h-[500px] bg-primary-200/20 -top-24 -left-24 animate-[pulse_8s_infinite]" />
        <div className="bg-blob w-[600px] h-[600px] bg-amber-100/20 top-1/3 -right-32 animate-[pulse_10s_infinite]" />
        <div className="bg-blob w-[400px] h-[400px] bg-primary-100/10 bottom-0 left-1/4 animate-[pulse_12s_infinite]" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Career />
      <Lifestyle />
      <Family />
      <Expectations />
      <Contact />
    </main>
  );
}
