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
