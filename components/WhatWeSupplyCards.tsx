"use client";

import { useEffect, useRef, useState } from "react";

type SupplyItem = {
  title: string;
  body: string;
  icon: "single" | "three" | "modular" | "online";
};

const supplyItems: SupplyItem[] = [
  {
    title: "Single-phase UPS systems",
    body: "Ideal for offices, comms rooms and smaller data environments. Reliable protection for essential IT and network loads.",
    icon: "single",
  },
  {
    title: "Three-phase UPS systems",
    body: "Designed for data centre UPS environments, industrial sites and critical facilities. High-capacity resilience for business-critical infrastructure.",
    icon: "three",
  },
  {
    title: "Modular / scalable UPS",
    body: "Right-sized for your current demand, with capacity to expand as your load grows. Reduces over-specification and protects future investment.",
    icon: "modular",
  },
  {
    title: "Online double-conversion topology",
    body: "Highest protection class with zero transfer time to battery. Stable output for sensitive equipment where continuity is non-negotiable.",
    icon: "online",
  },
];

const SupplyIcon = ({ type }: { type: SupplyItem["icon"] }) => {
  const cls = "h-6 w-6 stroke-current";

  switch (type) {
    case "single":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <rect x="6" y="4.8" width="12" height="14.4" rx="1.8" strokeWidth="1.8" />
          <path d="M9 9.2h6M9 13h6" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "three":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <rect x="4.5" y="5.5" width="15" height="13" rx="2" strokeWidth="1.8" />
          <path
            d="M8 9.5h.01M12 9.5h.01M16 9.5h.01M8 14.5h.01M12 14.5h.01M16 14.5h.01"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "modular":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <rect x="4.5" y="4.5" width="7" height="7" rx="1.5" strokeWidth="1.8" />
          <rect x="12.5" y="4.5" width="7" height="7" rx="1.5" strokeWidth="1.8" />
          <rect x="4.5" y="12.5" width="7" height="7" rx="1.5" strokeWidth="1.8" />
          <path d="M14.5 16h5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "online":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
          <path
            d="M12 7.8v4.6l3 2"
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

const WhatWeSupplyCards = () => {
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const mobileCardOffset = 18;
  const mobileCardStartY = 520;

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
      setMobileProgress(clampedProgress * (supplyItems.length - 1));
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

  const renderCard = (item: SupplyItem, className = "") => (
    <article
      key={item.title}
      className={`rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-5 sm:p-6 ${className}`}
    >
      <span className="inline-flex text-[#0066ff]">
        <SupplyIcon type={item.icon} />
      </span>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#0b1324]">
        {item.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-[#41547a]">{item.body}</p>
    </article>
  );

  return (
    <>
      <h2 className="hidden text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl md:block">
        What we supply
      </h2>

      <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2">
        {supplyItems.map((item) => renderCard(item))}
      </div>

      <div className="md:hidden">
        <div ref={mobileSectionRef} className="relative overflow-visible">
          <div className="sticky top-20 z-10 pt-[46px]">
            <h2 className="text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
              What we supply
            </h2>

            <div className="relative mt-5 h-[21.5rem] w-full">
              {supplyItems.map((item, index) => {
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
                    translateY = (1 - t) * (mobileCardStartY + settleOffset) + t * settleOffset;
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
            style={{ height: `${(supplyItems.length - 1) * 70}svh` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
};

export default WhatWeSupplyCards;
