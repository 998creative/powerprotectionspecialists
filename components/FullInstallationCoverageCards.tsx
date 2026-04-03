"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type FullInstallationCoverageItem = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

type FullInstallationCoverageCardsProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: FullInstallationCoverageItem[];
};

const FullInstallationCoverageCards = ({
  eyebrow,
  title,
  description,
  items,
}: FullInstallationCoverageCardsProps) => {
  const [mobileProgress, setMobileProgress] = useState(0);
  const mobileSectionRef = useRef<HTMLDivElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const mobileCardOffset = 18;
  const mobileCardStartY = 620;

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
      setMobileProgress(clampedProgress * (items.length - 1));
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
  }, [items.length]);

  const renderCard = (item: FullInstallationCoverageItem, className = "") => (
    <article
      key={item.title}
      className={`group relative flex flex-col overflow-visible ${className}`}
    >
      <div className="overflow-hidden rounded-md border border-[#d8e0f0] bg-[#dde5f4]">
        <div className="relative h-44 w-full bg-[#eaf0fb] md:h-52">
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-4 -mt-14 flex min-h-[12rem] flex-col rounded-xl border border-[#d9e1f2] bg-[#f7f9fd] p-6 shadow-[0_14px_35px_rgba(15,25,45,0.13)] transition-all group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(0,102,255,0.18)] sm:mx-6 md:min-h-[16rem] md:flex-1">
        <h3 className="text-xl font-semibold leading-tight tracking-tight text-[#0b1324] md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-[#41547a]">{item.body}</p>
      </div>
    </article>
  );

  return (
    <>
      <div className="hidden md:block">
        <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#41547a]">
          {description}
        </p>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {items.map((item) => renderCard(item))}
        </div>
      </div>

      <div className="md:hidden">
        <div ref={mobileSectionRef} className="relative overflow-visible">
          <div className="sticky top-20 z-10 bg-[#EEF3FB] pt-[46px]">
            <p className="text-xs uppercase tracking-[0.2em] text-[#4f6287]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#41547a]">
              {description}
            </p>

            <div className="relative mt-5 h-[36rem] w-full">
              {items.map((item, index) => {
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
            style={{ height: `${(items.length - 1) * 70}svh` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
};

export default FullInstallationCoverageCards;
