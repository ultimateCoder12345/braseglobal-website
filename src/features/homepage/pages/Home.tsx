
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
        <div id="about-us">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>About Us</h2>
            <p>Learn more about our company and mission.</p>
          </section>
        </div>
        <div id="our-team">
          <RecentCaseStudies />
        </div>
        <div id="it-consulting">
          <ServicesSection />
        </div>
        <div id="cloud-solutions">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Cloud Solutions</h2>
            <p>Scalable cloud infrastructure and migration services.</p>
          </section>
        </div>
        <div id="ai-ml">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>AI & Machine Learning</h2>
            <p>Intelligent solutions powered by artificial intelligence.</p>
          </section>
        </div>
        <div id="data-analytics">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Data Analytics</h2>
            <p>Transform your data into actionable insights.</p>
          </section>
        </div>
        <div id="cybersecurity">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Cybersecurity</h2>
            <p>Protect your business with advanced security solutions.</p>
          </section>
        </div>
        <div id="network-infrastructure">
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <h2>Network Infrastructure</h2>
            <p>Robust and reliable network solutions.</p>
          </section>
        </div>
        <TestimonialsSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
