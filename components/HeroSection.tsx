import Image from "next/image";
import TrustBar from "@/components/TrustBar";

const HeroSection = () => {
  return (
    <section className="relative overflow-visible border-b border-white/10 bg-[#0a0a0f]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pps-stock-images/hero-datacenter-brett-4508751.jpg"
          alt="Server room environment representing critical infrastructure"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/78" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute -top-28 right-[-14rem] z-20 h-[34rem] w-[34rem] rounded-full border border-white/10 opacity-60" />
      <div className="pointer-events-none absolute bottom-[-18rem] left-[-10rem] z-20 h-[30rem] w-[30rem] rounded-full border border-[#0066ff]/25" />
      <div className="relative z-30 mx-auto max-w-[1252px] px-6 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-48">
        <div className="max-w-4xl border-l-4 border-[#0066ff] pl-6 sm:pl-8">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-zinc-400">
            NICEIC Approved Contractor
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            UPS Installation &amp; Power Protection Services UK
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Independent UPS system installation, maintenance and battery supply
            across the UK - keeping your critical infrastructure running.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="btn-primary"
          >
            Book a Free Site Survey
          </a>
          <a
            href="#services"
            className="btn-secondary"
          >
            Our Services
          </a>
        </div>
      </div>
      <TrustBar inHero />
    </section>
  );
};

export default HeroSection;
