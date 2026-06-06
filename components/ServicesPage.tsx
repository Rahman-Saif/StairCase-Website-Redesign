import HeroSection from "./HeroSection";
import ServicesContent from "./ServicesContent";
import ServiceCards from "./ServiceCards";
import MasonryGallery from "./MasonryGallery";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <HeroSection />
      <ServicesContent />
      <ServiceCards />
      <MasonryGallery />
    </main>
  );
}
