import CTA from "./CTA";
import Footer from "./Footer";
import HistorySection from "./HistorySection";
import TeamCarousel from "./TeamCarousel";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <HistorySection />
      <TeamCarousel />
      <CTA />
      <Footer />
    </main>
  );
}
