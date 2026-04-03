"use client";

import { useEffect, useState } from "react";

export type ProcessStep = {
  title: string;
  body: string;
};

type ProcessStepsSliderProps = {
  steps: ProcessStep[];
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

const ProcessStepsSlider = ({ steps }: ProcessStepsSliderProps) => {
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

  const maxStep = Math.max(0, steps.length - cardsPerView);
  const activeStep = Math.min(currentStep, maxStep);
  const progressWidth = `${((activeStep + 1) / (maxStep + 1)) * 100}%`;

  return (
    <>
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
            aria-label="Previous process step"
            disabled={activeStep === 0}
            onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0f1f3f]/45 text-[#0f1f3f] transition-colors hover:bg-[#e5edff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
          >
            &#8592;
          </button>
          <button
            type="button"
            aria-label="Next process step"
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
          <ol
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(activeStep * 100) / cardsPerView}%)`,
            }}
          >
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex shrink-0 px-3 pb-6"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <article className="flex min-h-[20rem] w-full flex-col rounded-xl border border-[#d6dff0] bg-[#f8fbff] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#4f6287]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-[2rem] leading-tight font-semibold tracking-tight text-[#0b1324]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-[#41547a]">
                    {step.body}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ProcessStepsSlider;
