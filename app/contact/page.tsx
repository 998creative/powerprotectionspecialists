import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB";

const mapsEmbedSrc =
  "https://www.google.com/maps?q=Power+Protection+Services+Ltd,+Unit+2+Neates+Yard,+Hungerford,+Berkshire+RG17+0NB&output=embed";

export const metadata: Metadata = {
  title: "Contact | Power Protection Services",
  description:
    "Contact Power Protection Services for independent UPS installation, battery replacement, generator support, and a free site survey.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative min-h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pps-stock-images/hero-datacenter-brett-4508751.jpg"
            alt="Critical power infrastructure environment"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-[-14rem] z-20 h-[28rem] w-[28rem] rounded-full border border-white/10 opacity-60" />
        <div className="pointer-events-none absolute -bottom-20 left-[-8rem] z-20 h-[20rem] w-[20rem] rounded-full border border-[#0066ff]/20" />
        <div className="relative z-30 mx-auto max-w-[1252px] px-6 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-18 lg:pt-32">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Contact Power Protection Services
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Speak to our UPS &amp; power protection team
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Need a new UPS system, battery replacements or generator support?
            Use the form below and we&apos;ll respond within one business day.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="tel:01488685207" className="btn-primary">
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
              Call 01488 685207
            </a>
            <a
              href="mailto:contact@powerprotectionservices.co.uk"
              className="btn-secondary"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="border-t border-[#d9e1f1] bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1252px] px-6 pt-16 md:pt-20">
          <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
            Find Us
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
            Where are we based?
          </h2>
          <div className="mt-5 flex items-center justify-start">
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center text-sm font-semibold text-[#0066ff] transition-colors hover:text-[#0052cc]"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#d6dff0] bg-[#f8fbff] shadow-[0_16px_35px_rgba(12,18,32,0.12)]">
            <iframe
              title="Power Protection Services location map"
              src={mapsEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0 sm:h-[520px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
