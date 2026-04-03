"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Who We Help", href: "/who-we-help" },
];

const serviceCards = [
  {
    title: "UPS Systems Installation, Supply & Relocation",
    description:
      "Independent UPS supply, installation and relocation tailored to your load profile.",
    imageSrc: "/pps-stock-images/services-ups.jpg",
    icon: "ups",
    href: "/services/ups-systems-installation-supply-relocation",
  },
  {
    title: "Standby Generator Installation & Integration",
    description:
      "Generator installation and integration for longer backup runtime and site resilience.",
    imageSrc: "/pps-stock-images/services-standby.jpg",
    icon: "generator",
    href: "/#services",
  },
  {
    title: "Commercial Electrical Installation",
    description:
      "Commercial electrical installation and commissioning delivered to required standards.",
    imageSrc: "/pps-stock-images/services-full-installation.jpg",
    icon: "installation",
    href: "/#services",
  },
  {
    title: "UPS Maintenance, Testing & Health Checks",
    description:
      "Planned maintenance, testing and health checks to keep systems dependable.",
    imageSrc: "/pps-stock-images/services-maintenance.jpg",
    icon: "maintenance",
    href: "/#services",
  },
  {
    title: "UPS Battery Replacement & Supply",
    description:
      "Battery testing, replacement and supply to maintain UPS runtime performance.",
    imageSrc: "/pps-stock-images/services-batteries.jpg",
    icon: "battery",
    href: "/#services",
  },
  {
    title: "Power Protection Site Surveys & Assessments",
    description:
      "Site surveys and technical assessments to define the right protection strategy.",
    imageSrc: "/pps-stock-images/services-site-surveys.jpg",
    icon: "survey",
    href: "/#services",
  },
];

type ServiceIconType = (typeof serviceCards)[number]["icon"];

const ServiceIcon = ({ icon }: { icon: ServiceIconType }) => {
  const iconClass = "h-7 w-7 stroke-white";

  switch (icon) {
    case "ups":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="5" y="4.8" width="14" height="5.8" rx="1.6" strokeWidth="1.8" />
          <rect x="5" y="13.4" width="14" height="5.8" rx="1.6" strokeWidth="1.8" />
          <path d="M8.5 7.7h.01M8.5 16.3h.01M11 7.7h4.5M11 16.3h4.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "battery":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="4" y="7" width="15.8" height="10" rx="2.2" strokeWidth="1.8" />
          <path d="M19.8 10h1.8v4h-1.8M10 9.5v5M7.5 12h5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "generator":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="3.8" y="7.2" width="16.4" height="9.6" rx="2.2" strokeWidth="1.8" />
          <path d="M7.4 11.9h4.6M16.8 9.8v4.2M14.7 11.9h4.2M5.8 17.2v2M18.2 17.2v2" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "maintenance":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M14.5 5.3a4.2 4.2 0 0 0-5.4 5.3l-4.7 4.7a1.8 1.8 0 0 0 2.5 2.5l4.7-4.7a4.2 4.2 0 0 0 5.3-5.4l-2.2 2.2-2.4-.4-.4-2.4 2.2-2.2Z" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "survey":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="5.2" y="4.2" width="13.6" height="15.6" rx="2" strokeWidth="1.8" />
          <path d="m8.4 10.3 1.8 1.8 3.6-3.6M8.4 15.2h7.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "installation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 3.8 5.2 7.2v9.6l6.8 3.4 6.8-3.4V7.2L12 3.8Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 8.4v7.2M8.6 10.1 12 12l3.4-1.9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (!closeTimeoutRef.current) {
      return;
    }
    clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  };

  const openServicesMenu = () => {
    clearCloseTimeout();
    setIsServicesMenuOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 220);
  };

  const closeMenu = () => {
    clearCloseTimeout();
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesMenuOpen(false);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  return (
    <>
      {isServicesMenuOpen ? (
        <button
          type="button"
          aria-label="Close services menu"
          onClick={() => setIsServicesMenuOpen(false)}
          className="fixed inset-0 z-50 hidden animate-[overlay-fade-in_240ms_ease-out] bg-black/45 lg:block"
        />
      ) : null}

      <header className="sticky inset-x-0 top-0 z-[60] border-b border-white/10 bg-[#090b12]">
        <div className="mx-auto flex h-20 w-full max-w-[1252px] items-center justify-between px-6">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-3"
            onClick={closeMenu}
          >
            <Image
              src="/PPS%20LOGO.svg"
              alt="Power Protection Services"
              width={556}
              height={469}
              className="h-16 w-auto object-contain object-left sm:h-20 lg:h-24"
              priority
            />
            <span className="hidden whitespace-nowrap text-sm font-semibold tracking-[0.08em] text-white sm:inline">
              Power Protection Services
            </span>
          </Link>

          <nav className="relative hidden items-center gap-8 lg:flex">
            <div
              className="relative"
              onMouseEnter={openServicesMenu}
              onMouseLeave={scheduleCloseServicesMenu}
            >
              <button
                type="button"
                aria-expanded={isServicesMenuOpen}
                onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                onFocus={openServicesMenu}
                className="inline-flex items-center gap-1 text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isServicesMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              {isServicesMenuOpen ? (
                <div
                  className="fixed left-1/2 top-20 z-[70] w-[calc(100vw-3rem)] max-w-[1252px] -translate-x-1/2 animate-[overlay-fade-in_240ms_ease-out] pt-3"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleCloseServicesMenu}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0d111b] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                        Services
                      </p>
                      <Link
                        href="/#services"
                        onClick={closeMenu}
                        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0066ff] transition-colors hover:text-white"
                      >
                        View all
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {serviceCards.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMenu}
                          className="group overflow-hidden rounded-md border border-white/10 bg-[#121b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                        >
                          <div className="relative h-40 w-full">
                            <Image
                              src={service.imageSrc}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-[#020611]/72" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0 group-focus-visible:-translate-y-2 group-focus-visible:opacity-0">
                              <ServiceIcon icon={service.icon} />
                              <h3 className="text-sm font-semibold leading-snug text-zinc-100">
                                {service.title}
                              </h3>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                              <p className="max-w-[15.5rem] text-sm leading-relaxed text-zinc-100">
                                {service.description}
                              </p>
                              <span className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-[#0066ff] hover:bg-[#0066ff] group-hover:border-[#0066ff] group-hover:bg-[#0066ff]">
                                Learn More
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-zinc-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-secondary">
              Contact
            </Link>
            <Link href="/contact#contact" className="btn-primary">
              Book a Free Site Survey
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-zinc-200 transition-colors hover:border-white/40 hover:text-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6 stroke-current"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-[#090b12] px-6 pb-6 pt-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              <button
                type="button"
                aria-expanded={isMobileServicesOpen}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                className="inline-flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className={`h-4 w-4 stroke-current transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m5 8 5 5 5-5" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {isMobileServicesOpen ? (
                <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {serviceCards.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={closeMenu}
                      className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : null}

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="/contact" onClick={closeMenu} className="btn-secondary w-full">
                Contact
              </Link>
              <Link
                href="/contact#contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Book a Free Site Survey
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default HeaderNav;
