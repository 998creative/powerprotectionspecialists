"use client";

import { useEffect, useRef, useState } from "react";

type CapabilityItem = {
  title: string;
  description: string;
  icon: "independent" | "delivery" | "support";
};

const capabilities: CapabilityItem[] = [
  {
    title: "Truly Independent",
    description:
      "We can supply products from major manufacturers including Chloride Power Electronics, Emerson Network Power, Eaton, Powerware, APC and more, so recommendations are based on fit, not vendor bias.",
    icon: "independent",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From site surveys and installation through delivery, offloading, positioning, commissioning, battery health checks and replacements, we provide full turnkey support for larger systems.",
    icon: "delivery",
  },
  {
    title: "Long-Term Support",
    description:
      "Manufacturer warranties, optional extended cover, tailored maintenance schedules, guaranteed response options, and routine service visits are all available to suit your requirements.",
    icon: "support",
  },
];

const CapabilityIcon = ({ icon }: { icon: CapabilityItem["icon"] }) => {
  const iconClass = "h-6 w-6 stroke-current";

  switch (icon) {
    case "independent":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
          <path
            d="M12 3.8 5.2 7.2v9.6l6.8 3.4 6.8-3.4V7.2L12 3.8Z"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12.2 11.2 14.4 15.6 10"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "delivery":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
          <path
            d="M4.2 7.5h15.6M4.2 12h15.6M4.2 16.5h15.6"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14.6 5.6 19.6 12l-5 6.4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={iconClass}>
          <circle cx="12" cy="12" r="7.8" strokeWidth="1.8" />
          <path
            d="M12 7.8v4.8l3.2 2"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

const AboutWhatWeDoCards = () => {
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const mobileCardOffset = 18;
  const mobileCardStartY = 500;

  useEffect(() => {
    const updateMobileProgress = () => {
      if (window.innerWidth >= 768) {
        setMobileProgress(0);
        return;
      }

      const section = mobileSectionRef.current;
      const track = mobileTrackRef.current;

      if (!section || !track) {
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const stickyTopOffset = 80;
      const scrollableDistance = track.offsetHeight;

      if (scrollableDistance <= 0) {
        setMobileProgress(0);
        return;
      }

      const rawProgress = (stickyTopOffset - sectionRect.top) / scrollableDistance;
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      setMobileProgress(clampedProgress * (capabilities.length - 1));
    };

    let ticking = false;
    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateMobileProgress();
        ticking = false;
      });
    };

    updateMobileProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMobileProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMobileProgress);
    };
  }, []);

  const renderCard = (item: CapabilityItem, className = "") => (
    <article key={item.title} className={`rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-6 ${className}`}>
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0ff] text-[#0066ff]">
        <CapabilityIcon icon={item.icon} />
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0b1324]">
        {item.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#41547a]">{item.description}</p>
    </article>
  );

  return (
    <>
      <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3">
        {capabilities.map((item) => renderCard(item))}
      </div>

      <div className="mt-8 md:hidden">
        <div ref={mobileSectionRef} className="relative overflow-visible">
          <div className="sticky top-20 z-10 pt-[46px]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">What We Do</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324]">
              Independent Advice Across Major Manufacturers
            </h2>

            <div className="relative mt-5 h-[24rem] w-full">
              {capabilities.map((item, index) => {
                const settleOffset = index * mobileCardOffset;
                let translateY = settleOffset;
                let opacity = 1;

                if (index > 0) {
                  const enterStart = index - 1;
                  const enterEnd = index;

                  if (mobileProgress <= enterStart) {
                    translateY = mobileCardStartY + settleOffset;
                    opacity = 0;
                  } else if (mobileProgress < enterEnd) {
                    const t = mobileProgress - enterStart;
                    translateY =
                      (1 - t) * (mobileCardStartY + settleOffset) + t * settleOffset;
                    opacity = Math.min(1, t * 1.8);
                  }
                }

                return (
                  <div
                    key={item.title}
                    className="pointer-events-none absolute inset-0 transition-[transform,opacity] duration-300 ease-out"
                    style={{
                      transform: `translateY(${translateY}px)`,
                      opacity,
                      zIndex: index + 1,
                    }}
                  >
                    {renderCard(item, "h-full")}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={mobileTrackRef}
            style={{ height: `${(capabilities.length - 1) * 70}svh` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
};

export default AboutWhatWeDoCards;
