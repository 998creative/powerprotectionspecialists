"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type WhoWeHelpSector = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
};

type WhoWeHelpSectorSliderProps = {
  sectors: WhoWeHelpSector[];
};

const getCardsPerView = (width: number) => {
  if (width < 768) {
    return 1;
  }

  if (width < 1200) {
    return 2;
  }

  return 3;
};

const WhoWeHelpSectorSlider = ({ sectors }: WhoWeHelpSectorSliderProps) => {
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

  const maxStep = Math.max(0, sectors.length - cardsPerView);
  const activeStep = Math.min(currentStep, maxStep);
  const progressWidth = `${((activeStep + 1) / (maxStep + 1)) * 100}%`;

  return (
    <>
      <div className="mt-10 flex items-center gap-6">
        <div className="h-1.5 flex-1 rounded-full bg-[#d7deeb]">
          <div
            className="h-full rounded-full bg-[#0066ff] transition-all duration-300"
            style={{ width: progressWidth }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous sectors"
            disabled={activeStep === 0}
            onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f]/45 text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next sectors"
            disabled={activeStep === maxStep}
            onClick={() => setCurrentStep((step) => Math.min(maxStep, step + 1))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f] text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-visible pb-1 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <div className="overflow-visible">
          <div
            className="flex items-stretch transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(activeStep * 100) / cardsPerView}%)`,
            }}
          >
            {sectors.map((sector) => (
              <article
                key={sector.title}
                className="group relative flex h-full shrink-0 flex-col px-3 pb-6"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <div className="overflow-hidden rounded-md border border-[#d8e0f0] bg-[#dde5f4]">
                  <div className="relative h-64 w-full md:h-72">
                    <Image
                      src={sector.imageSrc}
                      alt={sector.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c162b]/75 via-[#0c162b]/35 to-transparent" />
                  </div>
                </div>

                <div className="relative z-10 mx-4 -mt-16 flex min-h-[31rem] flex-1 flex-col rounded-xl border border-[#d9e1f2] bg-[#f7f9fd] p-6 shadow-[0_14px_35px_rgba(15,25,45,0.13)] transition-all group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(0,102,255,0.18)] sm:mx-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#0b1324]">
                    {sector.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#41547a]">
                    {sector.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#4f6287]">
                    Typical Needs
                  </p>
                  <ul className="mt-1 space-y-2 text-sm leading-relaxed text-[#41547a]">
                    {sector.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066ff]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeHelpSectorSlider;
