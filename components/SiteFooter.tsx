"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    label: "UPS Systems Installation, Supply & Relocation",
    href: "/services/ups-systems-installation-supply-relocation",
  },
  { label: "Standby Generator Installation & Integration", href: "/#services" },
  { label: "Commercial Electrical Installation", href: "/#services" },
  { label: "UPS Maintenance, Testing & Health Checks", href: "/#services" },
  { label: "UPS Battery Replacement & Supply", href: "/#services" },
  { label: "Power Protection Site Surveys & Assessments", href: "/#services" },
];

const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB";

type MobileFooterSection = "quick-links" | "services" | "contact";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] =
    useState<MobileFooterSection>("contact");

  return (
    <footer className="border-t border-white/10 bg-[#090b12] text-zinc-200">
      <div className="mx-auto grid max-w-[1252px] gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.9fr_1fr_1fr] md:gap-10">
        <div>
          <Image
            src="/PPS%20LOGO%20secondary.svg"
            alt="Power Protection Services"
            width={556}
            height={469}
            className="h-24 w-auto object-contain object-left"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-300">
            Independent UPS installation, battery replacement, generator supply
            and maintenance support for critical power infrastructure across the
            UK.
          </p>
          <div className="mt-6 hidden md:block">
            <Link href="/contact#contact" className="btn-secondary">
              Book a Free Site Survey
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Quick Links
          </p>
          <nav className="mt-4 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Services
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="mailto:contact@powerprotectionservices.co.uk"
              className="inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 stroke-current"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.8" />
                <path d="M4.5 7.5 12 13l7.5-5.5" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              contact@powerprotectionservices.co.uk
            </a>
            <a
              href="tel:01488685207"
              className="inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              01488 685207
            </a>
            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-fit items-start gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M12 21s-5.5-4.7-5.5-9.3a5.5 5.5 0 1 1 11 0C17.5 16.3 12 21 12 21Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="11.7" r="2.1" strokeWidth="1.8" />
              </svg>
              <span className="leading-relaxed">
                Power Protection Services Ltd
                <br />
                Unit 2 Neates Yard
                <br />
                Hungerford
                <br />
                Berkshire RG17 0NB
              </span>
            </a>
          </div>
        </div>

        <div className="space-y-3 md:hidden">
          <div className="rounded-md border border-white/10 bg-[#0d111b]">
            <button
              type="button"
              aria-expanded={openSection === "quick-links"}
              onClick={() => setOpenSection("quick-links")}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-zinc-200"
            >
              Quick Links
              <span
                aria-hidden="true"
                className={`text-zinc-400 transition-transform ${
                  openSection === "quick-links" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {openSection === "quick-links" ? (
              <nav className="flex flex-col gap-3 border-t border-white/10 px-4 py-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ) : null}
          </div>

          <div className="rounded-md border border-white/10 bg-[#0d111b]">
            <button
              type="button"
              aria-expanded={openSection === "services"}
              onClick={() => setOpenSection("services")}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-zinc-200"
            >
              Services
              <span
                aria-hidden="true"
                className={`text-zinc-400 transition-transform ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {openSection === "services" ? (
              <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="rounded-md border border-white/10 bg-[#0d111b]">
            <button
              type="button"
              aria-expanded={openSection === "contact"}
              onClick={() => setOpenSection("contact")}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-zinc-200"
            >
              Contact
              <span
                aria-hidden="true"
                className={`text-zinc-400 transition-transform ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {openSection === "contact" ? (
              <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-3">
                <a
                  href="mailto:contact@powerprotectionservices.co.uk"
                  className="inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 stroke-current"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" strokeWidth="1.8" />
                    <path d="M4.5 7.5 12 13l7.5-5.5" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  contact@powerprotectionservices.co.uk
                </a>
                <a
                  href="tel:01488685207"
                  className="inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 stroke-current"
                  >
                    <path
                      d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  01488 685207
                </a>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-fit items-start gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 stroke-current"
                  >
                    <path
                      d="M12 21s-5.5-4.7-5.5-9.3a5.5 5.5 0 1 1 11 0C17.5 16.3 12 21 12 21Z"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="11.7" r="2.1" strokeWidth="1.8" />
                  </svg>
                  <span className="leading-relaxed">
                    Power Protection Services Ltd
                    <br />
                    Unit 2 Neates Yard
                    <br />
                    Hungerford
                    <br />
                    Berkshire RG17 0NB
                  </span>
                </a>
              </div>
            ) : null}
          </div>

          <Link href="/contact#contact" className="btn-secondary mt-4 w-full">
            Book a Free Site Survey
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1252px] flex-col items-center gap-3 px-6 py-5 text-center text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} Power Protection Services. All rights reserved.</p>
          <a
            href="https://998.co.uk"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-300"
            aria-label="Website by 998"
          >
            <span className="text-xs">Website by</span>
            <span
              aria-hidden="true"
              className="inline-block h-4 w-9 bg-current"
              style={{
                WebkitMaskImage: "url('/998 logo.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: "url('/998 logo.svg')",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
