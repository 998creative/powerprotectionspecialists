import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
