"use client";

import { useEffect, useRef, useState } from "react";

type FeatureItem = {
  title: string;
  description: string;
  icon: "independent" | "experienced" | "certified" | "turnkey";
};

const features: FeatureItem[] = [
  {
    title: "Independent",
    description:
      "We work with all major UPS and generator manufacturers, so our advice is always unbiased - never driven by supplier incentives.",
    icon: "independent",
  },
  {
    title: "Experienced",
    description:
      "Over 25 years of experience delivering UPS installation, maintenance and power protection across the UK.",
    icon: "experienced",
  },
  {
    title: "Certified",
    description:
      "All installations meet NICEIC Approved Contractor standards. Our engineers are factory-trained by major UPS manufacturers and IEE qualified.",
    icon: "certified",
  },
  {
    title: "Full Turnkey",
    description:
      "From initial site survey to UPS installation, commissioning, maintenance and ongoing support - one team, one point of contact, zero handoff risk.",
    icon: "turnkey",
  },
];

const FeatureIcon = ({ icon }: { icon: FeatureItem["icon"] }) => {
  const iconClass = "h-9 w-9 stroke-[#0066ff]";

  switch (icon) {
    case "independent":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M4 8.5h16M7.5 5.5v6M16.5 5.5v6M4 13.5h16v5H4z" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "experienced":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" strokeWidth="1.8" />
          <path d="M12 8v4l2.8 2.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "certified":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M12 3.8 18.5 6v6.2c0 4.2-2.8 6.8-6.5 8-3.7-1.2-6.5-3.8-6.5-8V6L12 3.8Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m9.4 12.2 1.8 1.9 3.5-3.8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "turnkey":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <circle cx="8.2" cy="12" r="3.2" strokeWidth="1.8" />
          <path
            d="M11.4 12h8.2M16.8 12v2.3M14.7 12v1.6"
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

const WhyChooseUsSection = () => {
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const mobileCardOffset = 20;
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
      const stickyTopOffset = 80; // matches `top-20`
      const scrollableDistance = track.offsetHeight;

      if (scrollableDistance <= 0) {
        setMobileProgress(0);
        return;
      }

      // Begin progress when sticky reaches its pinned top position.
      const rawProgress =
        (stickyTopOffset - sectionRect.top) / scrollableDistance;
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      setMobileProgress(clampedProgress * (features.length - 1));
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

  const renderCard = (feature: FeatureItem, className = "") => (
    <article
      key={feature.title}
      className={`rounded-2xl border border-white/10 bg-[#101726] p-7 ${className}`}
    >
      <span className="inline-flex text-[#0066ff]">
        <FeatureIcon icon={feature.icon} />
      </span>
      <h3 className="mt-6 text-2xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-zinc-300">
        {feature.description}
      </p>
    </article>
  );

  return (
    <section id="why-us" className="border-b border-white/10 bg-[#0d1016] pb-[50px]">
      <div className="mx-auto max-w-[1252px] px-6 py-20 md:py-28">
        <p className="hidden text-xs uppercase tracking-[0.2em] text-zinc-400 md:block">
          Why Us
        </p>
        <h2 className="mt-3 hidden text-4xl font-semibold tracking-tight text-white sm:text-5xl md:block">
          Why Choose Power Protection Services
        </h2>

        <div className="mt-11 hidden gap-5 md:grid md:grid-cols-2">
          {features.map((feature) =>
            renderCard(
              feature,
              "transition-all hover:-translate-y-1 hover:border-[#0066ff]/70",
            ),
          )}
        </div>

        <div className="md:hidden">
          <div ref={mobileSectionRef} className="relative overflow-visible">
            <div className="sticky top-20 z-10 pt-[46px]">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                Why Us
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                Why Choose Power Protection Services
              </h2>
              <div className="mt-5 relative h-[20rem] w-full">
                {features.map((feature, index) => {
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
                        (1 - t) * (mobileCardStartY + settleOffset) +
                        t * settleOffset;
                      opacity = Math.min(1, t * 1.8);
                    }
                  }

                  return (
                    <div
                      key={feature.title}
                      className="pointer-events-none absolute inset-0 transition-[transform,opacity] duration-300 ease-out"
                      style={{
                        transform: `translateY(${translateY}px)`,
                        opacity,
                        zIndex: index + 1,
                      }}
                    >
                      {renderCard(feature, "h-full")}
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              ref={mobileTrackRef}
              style={{ height: `${(features.length - 1) * 70}svh` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
