"use client";

import { useEffect, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const services: ServiceItem[] = [
  {
    title: "UPS System Installation & Supply",
    description:
      "Supply and installation of uninterruptible power supply (UPS) systems across the UK, from all major manufacturers, sized and commissioned for your load requirements.",
    imageSrc: "/service-images/ups-systems.jpg",
    imageAlt: "Rows of server racks in a data centre environment",
  },
  {
    title: "UPS Battery Replacement & Supply",
    description:
      "Battery supply, testing and replacement for existing UPS systems. Health checks available for any installed system.",
    imageSrc: "/service-images/batteries-replacements.jpg",
    imageAlt: "Industrial battery storage setup for backup power applications",
  },
  {
    title: "Standby Generator Installation",
    description:
      "Generator supply, installation and commissioning across the UK for sites requiring extended backup power beyond UPS runtime.",
    imageSrc: "/service-images/standby-generators.jpg",
    imageAlt: "Large standby generator unit installed in an industrial setting",
  },
  {
    title: "UPS Maintenance & Support",
    description:
      "Tailored maintenance contracts with guaranteed response times, 24-hour monitoring and scheduled on-site visits.",
    imageSrc: "/service-images/maintenance-support.jpg",
    imageAlt: "Engineer performing maintenance checks on technical equipment",
  },
  {
    title: "Free Power Protection Site Surveys",
    description:
      "Free site surveys to assess your power protection requirements, space, logistics and installation needs.",
    imageSrc: "/service-images/site-surveys.jpg",
    imageAlt: "Engineer conducting a site survey and inspection with plans",
  },
  {
    title: "Full Electrical Installation & Commissioning",
    description:
      "Factory-trained engineers carry out full electrical installation, commissioning and certification to NICEIC standards.",
    imageSrc: "/service-images/full-installation.jpg",
    imageAlt: "Electrician carrying out professional electrical installation work",
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
    <section id="services" className="border-b border-[#d9e1f1] bg-[#f5f5f7] text-[#0c1220]">
      <div className="mx-auto max-w-[1252px] px-6 pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0066ff]">Core Services</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          UPS &amp; Power Protection Services
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#374867]">
          Practical, end-to-end UPS installation and power protection services
          designed around your uptime targets and UK compliance requirements.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-flex items-center justify-center bg-[#0066ff] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1e2a45]/45 text-[#1e2a45] transition-colors hover:bg-[#dbe9ff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next services"
              disabled={activeStep === maxStep}
              onClick={() => setCurrentStep((step) => Math.min(maxStep, step + 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1e2a45] text-[#1e2a45] transition-colors hover:bg-[#dbe9ff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
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
                <div className="overflow-hidden rounded-md border border-[#1e1e2e] bg-[#13131f]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-72 w-full object-cover"
                  />
                </div>

                <div className="relative z-10 mx-6 -mt-20 flex min-h-[28rem] flex-1 flex-col border border-[#1e1e2e] bg-[#13131f] p-6 shadow-[0_14px_35px_rgba(5,8,18,0.35)] transition-all group-hover:-translate-y-1 group-hover:border-[#0066ff] group-hover:shadow-[0_0_12px_rgba(0,102,255,0.15)]">
                  <h3 className="text-[2rem] leading-tight font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-[#c8c8d0]">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center justify-center self-start bg-[#0066ff] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
                  >
                    Find out more
                  </a>
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
