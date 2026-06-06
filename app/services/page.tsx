import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MasonryGallery from "@/components/MasonryGallery";
import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import ServicesContent from "@/components/ServicesContent";
import React from "react";

const About = () => { 
    return (
        <div className="min-h-screen bg-[#0F0F0F]">
            <Navbar />
             <HeroSection />
      <ServicesContent />
      <ServiceCards />
      <MasonryGallery />
      <Footer />
        </div>
    );
}  

export default About;