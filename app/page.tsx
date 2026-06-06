import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import StatsBar from "@/components/StatsBar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#0F0F0F] min-h-screen">
    <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Projects />
      <Process />
      <CTA />
      <Footer />

   </main>
  );
}
