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
        <div id="it-consulting">
          <ServicesSection />
        </div>
        <div id="about-us">
          {/* WhyChooseUs component is not defined in original code, so it is removed. If it is needed, please add it back. */}
          {/* <WhyChooseUs /> */}
        </div>
        <div id="our-team">
          <RecentCaseStudies />
        </div>
        <TestimonialsSection />
        {/* OurCertifications component is not defined in original code, so it is removed. If it is needed, please add it back. */}
        {/* <OurCertifications /> */}
        <CallToActionSection />
      </main>
    </div>
  );
}