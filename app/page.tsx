import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustBar from "@/components/TrustBar";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0a0a0f] text-zinc-100">
      <HeaderNav />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhoWeHelpSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
