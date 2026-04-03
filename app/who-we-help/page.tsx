import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhoWeHelpSectorSlider, {
  type WhoWeHelpSector,
} from "@/components/WhoWeHelpSectorSlider";

const sectors: WhoWeHelpSector[] = [
  {
    title: "Healthcare & NHS",
    description:
      "Power protection in clinical environments where failure can affect patient care and safety.",
    imageSrc: "/who-we-help/hospitals-contact-13176450.jpg",
    imageAlt: "Hospital and healthcare infrastructure environment",
    highlights: [
      "Support for theatres, emergency rooms, labs, imaging and monitoring systems",
      "Specified for healthcare standards including HTM, BS7671 and IEC60601 applications",
      "Designed for continuous operation with resilient backup architecture",
    ],
  },
  {
    title: "Universities & Education",
    description:
      "Power continuity solutions for schools, colleges and universities with critical teaching, research and campus IT systems.",
    imageSrc: "/who-we-help/universities-ollie-8793386.jpg",
    imageAlt: "University and education sector setting",
    highlights: [
      "Support for campus networks, labs, server rooms and lecture facilities",
      "Practical solutions for both legacy systems and modern learning infrastructure",
      "Planned maintenance and battery replacement to reduce disruption during term time",
    ],
  },
  {
    title: "Local Government",
    description:
      "Resilient UPS and backup power for councils and public service buildings where continuity and compliance both matter.",
    imageSrc: "/who-we-help/local-government-fotios-2130031.jpg",
    imageAlt: "Local government and council offices",
    highlights: [
      "Support for council offices, civic sites and essential public service operations",
      "Delivery aligned with public sector governance, audit and procurement expectations",
      "Full lifecycle support from design and installation to long-term maintenance",
    ],
  },
  {
    title: "Corporate Organisations",
    description:
      "Enterprise-grade power protection for business-critical data, services and multi-site operations.",
    imageSrc: "/who-we-help/corporate-divinetechygirl-1181406.jpg",
    imageAlt: "Corporate office environment",
    highlights: [
      "Built for data centre and enterprise infrastructure resilience",
      "Turnkey delivery from survey and design to installation and commissioning",
      "Ongoing maintenance with rapid-response and 24/7 support options",
    ],
  },
  {
    title: "IT Resellers & Contractors",
    description:
      "Technical project support for IT resellers, electrical contractors and delivery teams working on critical power installations.",
    imageSrc: "/who-we-help/it-cookiecutter-17489156.jpg",
    imageAlt: "IT and contractor power infrastructure",
    highlights: [
      "Assistance from specification and sizing through to commissioning and handover",
      "Supports projects for data, network and telecoms-critical environments",
      "Flexible supply and service options to meet programme and site constraints",
    ],
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Right-sized UPS protection for SMEs that need reliable day-to-day uptime without unnecessary complexity.",
    imageSrc: "/who-we-help/smb-proxyclick-2451566.jpg",
    imageAlt: "Small and medium business office",
    highlights: [
      "Protects offices, comms rooms, EPOS, servers and VoIP from outages and surges",
      "Helps reduce downtime, data loss and disruption to customer delivery",
      "Scales from small office needs to wider multi-site SME environments",
    ],
  },
];

const coverageExamples = [
  {
    region: "South East",
    examples: "Hungerford, Newbury, Reading, Oxford, Swindon",
  },
  {
    region: "London & Home Counties",
    examples: "Greater London, Surrey, Berkshire, Hampshire",
  },
  {
    region: "Midlands & South West",
    examples: "Birmingham, Bristol and surrounding areas",
  },
  {
    region: "North, Scotland & Wales",
    examples: "Manchester, Leeds, Liverpool, Glasgow, Edinburgh, Cardiff",
  },
];

export const metadata: Metadata = {
  title: "Who We Help | Power Protection Services",
  description:
    "Independent UPS and backup power support for Healthcare and NHS, Universities and Education, Local Government, Corporate Organisations, IT Resellers and Contractors, and Small and Medium Businesses across the UK.",
  keywords: [
    "who we help UPS",
    "business sectors UPS support",
    "healthcare and NHS UPS systems",
    "university UPS solutions",
    "local council UPS",
    "corporate UPS support UK",
    "IT reseller UPS partner UK",
    "small business UPS systems UK",
    "UPS installation Berkshire",
    "UPS maintenance London",
    "UK critical power specialists",
  ],
};

export default function WhoWeHelpPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/who-we-help/corporate-divinetechygirl-1181406.jpg"
            alt="Power Protection Services supporting organisations across sectors"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-[-14rem] z-20 h-[28rem] w-[28rem] rounded-full border border-white/10 opacity-60" />

        <div className="relative z-30 mx-auto flex h-full max-w-[1252px] flex-col justify-end px-6 pb-14 sm:pb-16 lg:pb-18">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Who We Help</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Who we help across the UK
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            We support healthcare, education, local government, corporate
            organisations, IT partners and SMEs with independent UPS and backup
            power services.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Speak to Our Team
            </Link>
            <Link href="/#services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto max-w-[1252px] px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
            Sectors We Serve
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Business sectors we support
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#41547a]">
            We tailor recommendations by sector, so each organisation gets the
            right balance of resilience, compliance, scalability and long-term
            support.
          </p>

          <WhoWeHelpSectorSlider sectors={sectors} />
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-44 -top-44 h-[38rem] w-[38rem] rounded-full border border-[#dce6f5]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[20rem] w-[20rem] rounded-full border border-[#e7edf8]" />

        <div className="relative z-10 mx-auto grid max-w-[1252px] gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
              UK Coverage
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
              Where do we cover?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#41547a]">
              We cover most of the UK. Based in Hungerford, Berkshire, we
              regularly support sites locally and nationwide for UPS
              installation, maintenance, battery replacement and wider power
              protection projects.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#41547a]">
              If your town or region is not listed below, we can still help.
              Share your location and we&apos;ll confirm coverage quickly.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0b1324]">
              Example areas we regularly support
            </h3>
            <ul className="mt-5 space-y-3">
              {coverageExamples.map((area) => (
                <li
                  key={area.region}
                  className="rounded-md border border-[#d4def1] bg-white px-4 py-3"
                >
                  <p className="text-sm font-semibold text-[#0b1324]">{area.region}</p>
                  <p className="mt-1 text-sm text-[#41547a]">{area.examples}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0c162b] py-16">
        <div className="pointer-events-none absolute -right-20 -top-16 z-10 h-56 w-56 rounded-full border border-white/15" />

        <div className="relative z-20 mx-auto flex max-w-[1252px] flex-col gap-6 px-6 text-center sm:text-left md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need support for your organisation?
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
              Tell us about your site and we&apos;ll recommend a practical UPS
              and backup power approach that fits your environment.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Contact Us
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
      </section>
    </main>
  );
}
