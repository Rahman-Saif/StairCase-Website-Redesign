"use client";

import ConsultationProcess from "@/components/ConsultationProcess";
import ContactCTA from "@/components/ContactCTA";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import StudioLocation from "@/components/StudioLocation";



export default function ContactPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#1A1A1A] overflow-hidden">
        <Navbar />
      <ContactHero />
      <ContactInfo />
      <ConsultationProcess />
      <StudioLocation />
      <FAQ />
      <ContactCTA />
    </main>
  );
}