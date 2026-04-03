"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TimelineMilestone = {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const milestones: TimelineMilestone[] = [
  {
    date: "May 2000",
    title: "Incorporation",
    description:
      "The business was incorporated with a clear mission: offer genuinely independent advice on critical power protection.",
    imageSrc: "/pps-stock-images/about-office.jpg",
    imageAlt: "Office workspace representing the company at incorporation",
  },
  {
    date: "2004 - 2008",
    title: "Expanded Access & Sector Growth",
    description:
      "We broadened manufacturer access and saw strong growth across healthcare and education as demand increased for resilient power infrastructure.",
    imageSrc: "/pps-stock-images/services-site-surveys.jpg",
    imageAlt: "Power system planning and site assessment work",
  },
  {
    date: "2012",
    title: "Turnkey Delivery Model",
    description:
      "Site surveys, installation, battery replacement, commissioning, and support were combined into one joined-up service.",
    imageSrc: "/pps-stock-images/services-full-installation.jpg",
    imageAlt: "Engineers completing UPS installation and commissioning",
  },
  {
    date: "2016 - 2019",
    title: "Support & Monitoring Enhanced",
    description:
      "We strengthened service coverage with tailored maintenance options, faster response pathways, and improved remote monitoring capabilities.",
    imageSrc: "/pps-stock-images/services-maintenance.jpg",
    imageAlt: "Maintenance and monitoring of critical power systems",
  },
  {
    date: "2023 - Today",
    title: "Broader Reach, Same Dedicated Care",
    description:
      "Our portfolio has broadened across councils, corporate organisations, IT resellers, and consultants while we remain a close-knit team focused on practical, responsive support.",
    imageSrc: "/pps-stock-images/about-carl-lindy-team-photo.jpg",
    imageAlt: "Power Protection Services team photo",
  },
];

const AboutTimeline = () => {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(0);
  const desktopRatiosRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number((entry.target as HTMLElement).dataset.index);
          setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -12% 0px" },
    );

    itemRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const desktopRatios = desktopRatiosRef.current;

    const updateDesktopActiveStep = () => {
      if (window.innerWidth < 1024) {
        setActiveDesktopIndex(0);
        desktopRatios.clear();
        return;
      }

      const nodes = itemRefs.current.filter((node): node is HTMLLIElement => Boolean(node));

      if (nodes.length === 0) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.index);

            if (entry.isIntersecting) {
              desktopRatios.set(index, entry.intersectionRatio);
              return;
            }

            desktopRatios.delete(index);
          });

          let nextIndex = 0;
          let bestRatio = -1;

          desktopRatios.forEach((ratio, index) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              nextIndex = index;
            }
          });

          setActiveDesktopIndex((prev) => (prev === nextIndex ? prev : nextIndex));
        },
        {
          threshold: [0.2, 0.4, 0.6, 0.8],
          rootMargin: "-18% 0px -42% 0px",
        },
      );

      nodes.forEach((node) => observer.observe(node));

      return observer;
    };

    let observer = updateDesktopActiveStep();

    const handleResize = () => {
      observer?.disconnect();
      desktopRatios.clear();
      observer = updateDesktopActiveStep();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer?.disconnect();
      desktopRatios.clear();
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-[#d9e1f1] bg-[#EEF3FB] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-28 -top-20 h-[20rem] w-[20rem] rounded-full border border-[#d5e0f2]" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[16rem] w-[16rem] rounded-full border border-[#dbe5f4]" />

      <div className="relative z-10 mx-auto max-w-[1252px] px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">Our Journey</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
          Timeline of Growth
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#41547a]">
          Built steadily since incorporation, with practical experience across
          installation, maintenance, and long-term support.
        </p>

        <div className="mt-10 hidden items-stretch gap-8 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="relative ml-2 border-l-2 border-[#d3dced] pl-10">
            {milestones.map((milestone, index) => {
              const isVisible = visibleIndexes.includes(index);

              return (
                <li
                  key={milestone.date + milestone.title}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  data-index={index}
                  className={`relative pb-10 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <span
                    className={`absolute -left-[3.07rem] top-1 h-4 w-4 rounded-full border-2 border-[#EEF3FB] ${
                      isVisible ? "bg-[#0066ff]" : "bg-[#b9c7df]"
                    }`}
                  />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4f6287]">
                    {milestone.date}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1324]">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#41547a]">
                    {milestone.description}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className="relative h-full overflow-hidden rounded-3xl border border-[#d6dff0] bg-[#f8fbff] shadow-[0_16px_35px_rgba(12,18,32,0.12)]">
            {milestones.map((milestone, index) => (
              <Image
                key={`${milestone.date}-${milestone.title}-desktop-image`}
                src={milestone.imageSrc}
                alt={milestone.imageAlt}
                fill
                sizes="(max-width: 1279px) 40vw, 520px"
                className={`object-cover object-center transition-opacity duration-500 ${
                  index === activeDesktopIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070d]/8 via-transparent to-[#05070d]/10" />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-xl border border-white/35 bg-black/35 px-4 py-3 backdrop-blur-[2px]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                {milestones[activeDesktopIndex]?.date}
              </p>
              <p className="mt-1 text-lg font-semibold leading-tight text-white">
                {milestones[activeDesktopIndex]?.title}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <div className="-mx-6">
            <div className="relative">
              <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="relative flex w-max snap-x snap-mandatory gap-4 px-6 pb-4 pt-12 scroll-px-6">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-6 h-[2px] bg-[#d3dced]"
                    style={{
                      left: "2.25rem",
                      width: `calc(${milestones.length} * (100vw - 3rem) + ${
                        milestones.length - 1
                      } * 1rem - 1.5rem)`,
                    }}
                  />

                  {milestones.map((milestone, index) => (
                    <article
                      key={milestone.date + milestone.title}
                      className="relative w-[calc(100vw-3rem)] shrink-0 snap-start rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 shadow-[0_14px_30px_rgba(12,18,32,0.1)]"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-[2.125rem] h-5 w-5 rounded-full border-2 border-[#EEF3FB] bg-[#0066ff]"
                        style={{
                          left:
                            index === 0
                              ? "0.75rem"
                              : index === milestones.length - 1
                                ? "calc(100% - 0.75rem)"
                                : "50%",
                          transform: "translateX(-50%)",
                        }}
                      />
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4f6287]">
                        {milestone.date}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0b1324]">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-[#41547a]">
                        {milestone.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#4f6287]">Swipe sideways to explore the timeline.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
