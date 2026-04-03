"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const services: ServiceItem[] = [
  {
    title: "UPS Systems Installation, Supply & Relocation",
    description:
      "Supply, installation and relocation of uninterruptible power supply (UPS) systems across the UK, sized and commissioned for your load requirements.",
    imageSrc: "/pps-stock-images/services-ups.jpg",
    imageAlt: "Rows of server racks in a data centre environment",
    href: "/services/ups-systems-installation-supply-relocation",
  },
  {
    title: "Standby Generator Installation & Integration",
    description:
      "Generator supply, installation and integration for sites requiring extended backup runtime beyond UPS coverage.",
    imageSrc: "/pps-stock-images/services-standby.jpg",
    imageAlt: "Critical power infrastructure cabinets in an industrial environment",
    href: "#contact",
  },
  {
    title: "Commercial Electrical Installation",
    description:
      "Factory-trained engineers deliver commercial electrical installation, commissioning and certification to NICEIC standards.",
    imageSrc: "/pps-stock-images/services-full-installation.jpg",
    imageAlt: "Modern commercial workspace prepared for technical installation works",
    href: "#contact",
  },
  {
    title: "UPS Maintenance, Testing & Health Checks",
    description:
      "Tailored maintenance plans with UPS testing, battery health checks and scheduled support visits to maintain resilience.",
    imageSrc: "/pps-stock-images/services-maintenance.jpg",
    imageAlt: "Technical team collaborating in an office support environment",
    href: "#contact",
  },
  {
    title: "UPS Battery Replacement & Supply",
    description:
      "Battery supply, testing and replacement for existing UPS systems to maintain reliable runtime and system performance.",
    imageSrc: "/pps-stock-images/services-batteries.jpg",
    imageAlt: "Close-up of critical power hardware and infrastructure panels",
    href: "#contact",
  },
  {
    title: "Power Protection Site Surveys & Assessments",
    description:
      "Site surveys and technical assessments to define your power protection requirements, site constraints and implementation approach.",
    imageSrc: "/pps-stock-images/services-site-surveys.jpg",
    imageAlt: "Urban site environment being assessed for infrastructure planning",
    href: "#contact",
  },
];

const getCardsPerView = (width: number) => {
  if (width < 768) {
    return 1;
  }

  if (width < 1200) {
    return 2;
  }

  return 3;
};

const ServicesSection = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxStep = Math.max(0, services.length - cardsPerView);
  const activeStep = Math.min(currentStep, maxStep);
  const progressWidth = `${((activeStep + 1) / (maxStep + 1)) * 100}%`;

  return (
    <section id="services" className="border-b border-white/10 bg-[#f4f7fb] text-[#0c1220]">
      <div className="mx-auto max-w-[1252px] px-6 pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">Core Services</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          UPS &amp; Power Protection Services
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#3f4e6e]">
          Practical, end-to-end UPS installation and power protection services
          designed around your uptime targets and UK compliance requirements.
        </p>
        <a
          href="#contact"
          className="btn-primary mt-7"
        >
          Book a Free Site Survey
        </a>

        <div className="mt-11 flex items-center gap-6">
          <div className="h-1.5 flex-1 rounded-full bg-[#d7deeb]">
            <div
              className="h-full rounded-full bg-[#0066ff] transition-all duration-300"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous services"
              disabled={activeStep === 0}
              onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f]/45 text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next services"
              disabled={activeStep === maxStep}
              onClick={() => setCurrentStep((step) => Math.min(maxStep, step + 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f] text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-visible pb-20 pl-6 md:pb-28 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <div className="overflow-visible">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(activeStep * 100) / cardsPerView}%)`,
            }}
          >
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative flex h-full shrink-0 flex-col px-3 pb-6"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <div className="overflow-hidden rounded-md border border-[#d8e0f0] bg-[#dde5f4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="relative z-10 mx-6 -mt-20 flex min-h-[28rem] flex-1 flex-col rounded-xl border border-[#d9e1f2] bg-[#f7f9fd] p-6 shadow-[0_14px_35px_rgba(15,25,45,0.13)] transition-all group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(0,102,255,0.18)]">
                  <h3 className="text-[2rem] leading-tight font-semibold tracking-tight text-[#0b1324]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-[#4c5f84]">
                    {service.description}
                  </p>
                  <Link href={service.href} className="btn-tertiary mt-auto self-start">
                    Find out more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
