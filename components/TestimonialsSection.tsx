"use client";

import { useEffect, useState } from "react";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Power Protection Services gave us independent options, not a one-brand sales pitch. They modelled multiple UPS and battery combinations against our actual load profile, explained the trade-offs clearly, and delivered an installation that was completed on programme with minimal disruption to teaching facilities.",
    name: "Head of IT Infrastructure",
    role: "University Sector",
    company: "Education Client",
  },
  {
    quote:
      "From initial survey to commissioning, everything was handled by one accountable team. The project plan, RAMS documentation and handover pack were all well structured, and their response times during and after installation have been consistently fast and reliable.",
    name: "Facilities Manager",
    role: "Healthcare",
    company: "NHS Partner Site",
  },
  {
    quote:
      "Their maintenance support has materially reduced risk across our estate. Preventive visits are proactive, reporting is clear, and any faults are prioritised quickly, which has given us far greater confidence in our backup power resilience during critical service windows.",
    name: "Operations Director",
    role: "Local Government",
    company: "Council Services",
  },
  {
    quote:
      "The project team planned around a live environment with strict uptime requirements and delivered without service interruption. They coordinated access carefully with our operations team, phased the works sensibly, and kept stakeholders updated at every stage of the project.",
    name: "Data Centre Manager",
    role: "Corporate Organisation",
    company: "Enterprise Client",
  },
  {
    quote:
      "They helped us select the right UPS and battery package for our customers’ load profiles rather than pushing the highest-cost option. That technical clarity has improved our own proposals, reduced lifecycle cost surprises, and strengthened client trust in our recommendations.",
    name: "Procurement Lead",
    role: "IT Reseller",
    company: "Channel Partner",
  },
  {
    quote:
      "Survey quality was excellent and the commissioning paperwork was complete and easy to audit. Their engineers documented test results and certification details to a high standard, which made compliance sign-off straightforward for our internal governance and external reviewers.",
    name: "Site Operations Manager",
    role: "Healthcare",
    company: "Private Hospital Group",
  },
];

const getCardsPerView = (width: number) => {
  if (width < 768) {
    return 1;
  }

  return 2;
};

const TestimonialsSection = () => {
  const [cardsPerView, setCardsPerView] = useState(2);
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

  const maxStep = Math.max(0, testimonials.length - cardsPerView);
  const activeStep = Math.min(currentStep, maxStep);
  const progressWidth = `${((activeStep + 1) / (maxStep + 1)) * 100}%`;

  return (
    <section
      id="testimonials"
      className="overflow-hidden border-b border-[#d9e1f1] bg-[#f5f5f7] text-[#0c1220]"
    >
      <div className="mx-auto max-w-[1252px] px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0066ff]">
          Trusted by many for over 25 years
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl">
          What Our Clients Say
        </h2>

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
              aria-label="Previous testimonials"
              disabled={activeStep === 0}
              onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1e2a45]/45 text-[#1e2a45] transition-colors hover:bg-[#dbe9ff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              disabled={activeStep === maxStep}
              onClick={() => setCurrentStep((step) => Math.min(maxStep, step + 1))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1e2a45] text-[#1e2a45] transition-colors hover:bg-[#dbe9ff] disabled:border-[#c3ccdc] disabled:text-[#c3ccdc]"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-x-hidden overflow-y-visible pt-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(activeStep * 100) / cardsPerView}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.company}`}
                className="group flex h-full shrink-0 px-2 pb-2 sm:px-3"
                style={{ flexBasis: `${100 / cardsPerView}%` }}
              >
                <div className="flex min-h-[24rem] w-full flex-col rounded-2xl border border-[#d9e1f2] bg-[#f8fbff] p-7 transition-all group-hover:-translate-y-1 group-hover:border-[#0066ff]/60">
                  <p className="text-base leading-relaxed text-[#2e4064]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto border-t border-[#dce4f2] pt-5">
                    <p className="text-sm font-semibold text-[#0e172b]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[#5c6f94]">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {maxStep === 0 ? (
          <p className="mt-4 text-sm text-[#5c6f94]">
            Add more testimonials to enable additional slides on large screens.
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default TestimonialsSection;
