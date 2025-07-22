
import CallToActionSection from "../components/CallToAction/CallToActionSection";
import ServicesSection from "../components/CoreServices/ServicesSection";
import HeroSection from "../components/HeroSection/HeroSection";
import RecentCaseStudies from "../components/RecentCaseStudies/RecentCaseStudies";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        {/* <RecentCaseStudies /> */}
        {/* <TestimonialsSection /> */}
        <CallToActionSection />
      </main>
    </div>
  );
}
