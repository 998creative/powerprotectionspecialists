"use client";

import { useEffect, useMemo, useState } from "react";

type ServiceItem = {
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    title: "UPS Systems",
    description:
      "Supply and installation of uninterruptible power supply systems from all major manufacturers, sized for your load requirements.",
  },
  {
    title: "Batteries & Replacements",
    description:
      "Battery supply, testing and replacement for existing UPS systems. Health checks available for any installed system.",
  },
  {
    title: "Standby Generators",
    description:
      "Generator supply, installation and commissioning for sites that need extended backup power.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Tailored maintenance contracts with guaranteed response times, 24-hour monitoring and scheduled on-site visits.",
  },
  {
    title: "Site Surveys",
    description:
      "Free site surveys to assess your power protection requirements, space, logistics and installation needs.",
  },
  {
    title: "Full Installation",
    description:
      "Factory-trained engineers carry out full electrical installation, commissioning and certification to NICEIC standards.",
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
  const [currentPage, setCurrentPage] = useState(0);

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

  const pages = useMemo(() => {
    const grouped: ServiceItem[][] = [];

    for (let i = 0; i < services.length; i += cardsPerView) {
      grouped.push(services.slice(i, i + cardsPerView));
    }

    return grouped;
  }, [cardsPerView]);

  const maxPage = Math.max(0, pages.length - 1);
  const activePage = Math.min(currentPage, maxPage);
  const progressWidth = `${((activePage + 1) / pages.length) * 100}%`;

  return (
    <section id="services" className="border-b border-white/10 bg-[#f4f7fb] text-[#0c1220]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">Core Services</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          What We Do
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#3f4e6e]">
          Practical, end-to-end power protection services designed around your uptime
          targets and compliance requirements.
        </p>

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
              disabled={activePage === 0}
              onClick={() =>
                setCurrentPage((page) => Math.max(0, Math.min(page, maxPage) - 1))
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f]/45 text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next services"
              disabled={activePage === maxPage}
              onClick={() =>
                setCurrentPage((page) => Math.min(maxPage, Math.min(page, maxPage) + 1))
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f] text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activePage * 100}%)` }}
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="min-w-full">
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`,
                  }}
                >
                  {page.map((service) => (
                    <article key={service.title} className="group relative pb-6">
                      <div className="overflow-hidden rounded-md border border-[#d8e0f0] bg-[#dde5f4]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/service-card-placeholder.svg"
                          alt={`Placeholder image for ${service.title}`}
                          className="h-72 w-full object-cover"
                        />
                      </div>

                      <div className="relative z-10 mx-6 -mt-20 border border-[#d9e1f2] bg-[#f7f9fd] p-6 shadow-[0_14px_35px_rgba(15,25,45,0.13)] transition-all group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(0,102,255,0.18)]">
                        <h3 className="text-[2rem] leading-tight font-semibold tracking-tight text-[#0b1324]">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-lg leading-relaxed text-[#4c5f84]">
                          {service.description}
                        </p>
                        <a
                          href="#contact"
                          className="mt-6 inline-flex items-center justify-center bg-[#0066ff] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
                        >
                          Find out more
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
