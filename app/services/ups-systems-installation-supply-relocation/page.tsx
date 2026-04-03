import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FullInstallationCoverageCards from "@/components/FullInstallationCoverageCards";
import ProcessStepsSlider from "@/components/ProcessStepsSlider";
import RotatingTestimonialCard from "@/components/RotatingTestimonialCard";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeSupplyCards from "@/components/WhatWeSupplyCards";

export const metadata: Metadata = {
  title: "UPS Systems Installation, Supply & Relocation | Power Protection Services",
  description:
    "UPS installation UK specialists for uninterruptible power supply installation, UPS supply and install, three-phase UPS installation, data centre UPS, and UPS relocation service.",
};

const processSteps = [
  {
    title: "Free Site Survey",
    body: "Load assessment, physical location review and logistics scoping.",
  },
  {
    title: "System Design & Proposal",
    body: "Correct kVA, topology, runtime and monitoring options defined clearly.",
  },
  {
    title: "Supply & Logistics",
    body: "Delivery, lifting and craneage coordinated and managed by our team.",
  },
  {
    title: "Installation & Commissioning",
    body: "Field-certified engineers install and complete full acceptance testing.",
  },
  {
    title: "Handover & Ongoing Support",
    body: "Documentation, training and maintenance contract options provided.",
  },
];

const fullInstallationCoverage = [
  {
    title: "Electrical Installation & Compliance",
    body: "Installations over 3kVA are carried out by qualified engineers, with hard-wired systems above 10kVA completed to current IET wiring regulations by NICEIC-approved electricians.",
    imageSrc: "/pps-stock-images/services-full-installation.jpg",
    imageAlt: "Commercial electrical installation environment",
  },
  {
    title: "Mechanical Installation & Site Logistics",
    body: "For larger three-phase UPS projects, we manage offloading, positioning, access planning, lifting and craneage so equipment is installed safely and on programme.",
    imageSrc: "/pps-stock-images/services-site-surveys.jpg",
    imageAlt: "Site assessment and logistics planning environment",
  },
  {
    title: "Commissioning, Testing & Battery Build",
    body: "Every system is commissioned with acceptance testing and runtime validation. We also build and connect external battery cabinets correctly for extended autonomy.",
    imageSrc: "/pps-stock-images/services-maintenance.jpg",
    imageAlt: "Technical commissioning and testing support team",
  },
];

const whatWeSupplyProducts = [
  {
    src: "/pps-stock-images/products/certaups-c300r-rack-bg-removed.png",
    alt: "Certaups C300R rack-mounted UPS",
  },
  {
    src: "/pps-stock-images/products/tripp-lite-smartonline-10kva-bg-removed.png",
    alt: "Tripp Lite SmartOnline 10kVA UPS",
  },
  {
    src: "/pps-stock-images/products/certaups-c400-tower-bg-removed.png",
    alt: "Certaups C400 tower UPS",
  },
];

const whyChooseItems = [
  {
    title: "Manufacturer-Independent",
    body: "We specify what is right for your load and risk profile, not what suits one vendor.",
    icon: "independent",
  },
  {
    title: "Certified Engineers",
    body: "Factory-trained across major brands, fully qualified for safe installation and commissioning.",
    icon: "engineers",
  },
  {
    title: "Full Project Management",
    body: "Logistics, access planning, commissioning and sign-off are coordinated by one accountable team.",
    icon: "project",
  },
  {
    title: "Long-Term Partnership",
    body: "Maintenance, battery replacement and monitoring support are available long after go-live.",
    icon: "support",
  },
];

const Icon = ({ type }: { type: string }) => {
  const cls = "h-6 w-6 stroke-current";

  switch (type) {
    case "independent":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path d="M4.5 8.5h15M4.5 12h15M4.5 15.5h15" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "engineers":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path d="M14.4 5.2a4.2 4.2 0 0 0-5.4 5.3l-4.7 4.7a1.8 1.8 0 0 0 2.5 2.5l4.7-4.7a4.2 4.2 0 0 0 5.3-5.4l-2.2 2.2-2.4-.4-.4-2.4 2.2-2.2Z" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "project":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <rect x="4.5" y="5.5" width="15" height="13" rx="2" strokeWidth="1.8" />
          <path d="m8 12 2.3 2.3L16 8.6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path d="M6 10.5a6 6 0 0 1 12 0v5a2.5 2.5 0 0 1-2.5 2.5H13" strokeWidth="1.8" />
          <rect x="3.8" y="11.5" width="3.4" height="5.6" rx="1.2" strokeWidth="1.8" />
          <rect x="16.8" y="11.5" width="3.4" height="5.6" rx="1.2" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
};

// [HERO]
const HeroSection = () => (
  <section className="relative overflow-visible border-b border-white/10 bg-[#0a0a0f]">
    <div className="absolute inset-0 z-0">
      <Image
        src="/pps-stock-images/hero-datacenter.jpg"
        alt="UPS systems and critical power infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
    <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/78" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

    <div className="relative z-20 mx-auto max-w-[1252px] px-6 py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[7fr_3fr] lg:items-start lg:gap-16">
        <div className="lg:pr-8">
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            UPS Systems Installation, Supply &amp; Relocation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Unexpected power failure can stop operations in seconds. Power
            Protection Services provides end-to-end UPS supply and install
            support across the UK, from system selection through installation,
            commissioning and safe relocation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Request a Free Site Survey
            </Link>
            <a href="tel:01488685207" className="btn-secondary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mr-2 h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              01488 685207
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-none -mb-52 -translate-x-[6%] sm:-mb-56 sm:-translate-x-[3%] lg:mt-28 lg:-mb-56 lg:-ml-40 lg:w-[180%] lg:translate-x-0">
          <Image
            src="/pps-stock-images/server-rack.png"
            alt="Server rack UPS equipment"
            width={900}
            height={1500}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 30vw"
            className="h-auto w-full object-contain drop-shadow-[0_20px_48px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </div>
  </section>
);

// [WHAT WE SUPPLY — 3–4 card items, icon + title + 2 lines each]
const WhatWeSupplySection = () => (
  <section className="border-b border-[#d9e1f1] bg-white">
    <div className="mx-auto max-w-[1252px] px-6 pb-16 pt-24 md:py-20">
      <WhatWeSupplyCards />
      <p className="mt-16 text-base leading-relaxed text-[#41547a] md:mt-9">
        Brands include Eaton, APC, Riello, Borri, Chloride and Emerson —
        specified independently based on your load, not margin.
      </p>
      <div className="mt-8 sm:hidden">
        <div className="relative min-h-[15rem] overflow-hidden">
          {whatWeSupplyProducts.map((product, index) => (
            <div
              key={product.src}
              className="absolute inset-0 flex items-center justify-center p-4 opacity-0"
              style={{
                animation: "product-fade-cycle 12s ease-in-out infinite",
                animationDelay: `${index * 4}s`,
              }}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={640}
                height={480}
                sizes="100vw"
                className="h-44 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-3">
        {whatWeSupplyProducts.map((product) => (
          <div key={product.src} className="flex min-h-[12rem] items-center justify-center p-2">
            <Image
              src={product.src}
              alt={product.alt}
              width={640}
              height={480}
              sizes="(max-width: 640px) 100vw, 33vw"
              className="h-40 w-auto object-contain sm:h-44"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// [OUR INSTALLATION PROCESS — numbered steps, 5 steps]
const ProcessSection = () => (
  <section className="border-b border-[#d9e1f1] bg-white">
    <div className="mx-auto max-w-[1252px] px-6 py-16 md:py-20">
      <h2 className="text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
        Our installation process
      </h2>
      <ProcessStepsSlider steps={processSteps} />
    </div>
  </section>
);

// [FULL INSTALLATION COVERAGE]
const FullInstallationCoverageSection = () => (
  <section className="border-b border-[#d9e1f1] bg-[#EEF3FB]">
    <div className="mx-auto max-w-[1252px] px-6 py-16 md:py-20">
      <FullInstallationCoverageCards
        eyebrow="Full Installation Coverage"
        title="We cover every stage from survey to sign-off"
        description="We handle survey, installation and commissioning from start to sign-off, with minimal disruption to your operations."
        items={fullInstallationCoverage}
      />
    </div>
  </section>
);

// [RELOCATION SERVICE — ~70 words]
const RelocationSection = () => (
  <section className="border-b border-[#d9e1f1] bg-[#EEF3FB]">
    <div className="mx-auto max-w-[1252px] px-6 py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            UPS relocation service
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#41547a]">
            Many organisations overlook UPS relocation service planning during
            office and site moves. Moving a live UPS incorrectly can damage
            equipment, void warranty terms and introduce serious safety risks.
            Power Protection Services manages the full de-commission, secure
            transport and re-commissioning process at your new location,
            including testing and sign-off so continuity is protected from day
            one.
          </p>
          <p className="mt-5 text-base font-semibold text-[#0b1324]">
            Planning a move? Talk to us early.
          </p>
          <div className="mt-6">
            <Link href="/contact#contact" className="btn-primary">
              Request Relocation Support
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-2">
          <Image
            src="/pps-stock-images/services-relocation-pexels-2804929.jpg"
            alt="Aerial view of a logistics centre for transport planning"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="h-64 w-full rounded-xl object-cover md:h-72"
          />
        </div>
      </div>
    </div>
  </section>
);

// [WHY CHOOSE US — 4-column grid, icon + heading + 2-line copy]
const WhyChooseSection = () => (
  <section className="border-b border-[#d9e1f1] bg-[#EEF3FB]">
    <div className="mx-auto max-w-[1252px] px-6 py-16 md:py-20">
      <h2 className="text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
        Why choose us
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {whyChooseItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6"
          >
            <div className="flex items-center gap-3 md:block">
              <span className="inline-flex shrink-0 text-[#0066ff] md:mb-4">
                <Icon type={item.icon} />
              </span>
              <h3 className="text-xl font-semibold leading-tight tracking-tight whitespace-nowrap text-[#0b1324] md:text-2xl md:whitespace-normal">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#41547a]">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <RotatingTestimonialCard />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-5">
          <div className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-5 sm:p-6">
            <p className="text-3xl font-semibold tracking-tight text-[#0b1324]">
              500+
            </p>
            <p className="mt-2 text-base text-[#41547a]">
              UPS systems installed across the UK
            </p>
          </div>
          <div className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-5 sm:p-6">
            <p className="text-3xl font-semibold tracking-tight text-[#0b1324]">
              20+
            </p>
            <p className="mt-2 text-base text-[#41547a]">
              Years of specialist power protection experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// [BOTTOM CTA BAND]
const BottomCtaSection = () => (
  <section className="bg-[#0c162b]">
    <div className="mx-auto max-w-[1252px] px-6 py-16 text-center text-white md:py-20">
      <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Ready to protect your critical systems?
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
        Our free site survey is no-obligation and typically takes 1-2 hours.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link href="/contact#contact" className="btn-primary">
          Book Your Free Site Survey
        </Link>
        <a href="tel:01488685207" className="btn-secondary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="mr-2 h-4 w-4 shrink-0 stroke-current"
          >
            <path
              d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          Call us on 01488 685207
        </a>
      </div>
    </div>
  </section>
);

export default function UpsSystemsInstallationSupplyRelocationPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <HeroSection />
      <WhatWeSupplySection />
      <RelocationSection />
      <ProcessSection />
      <FullInstallationCoverageSection />
      <WhoWeHelpSection
        showLogos={false}
        contactHref="/contact#contact"
        theme="light"
      />
      <WhyChooseSection />
      <BottomCtaSection />
    </main>
  );
}
