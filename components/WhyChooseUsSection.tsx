type FeatureItem = {
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: "Independent",
    description:
      "We work with all major UPS and generator manufacturers, so our advice is always unbiased - never driven by supplier incentives.",
  },
  {
    title: "Experienced",
    description:
      "Over 25 years of experience delivering UPS installation, maintenance and power protection across the UK.",
  },
  {
    title: "Certified",
    description:
      "All installations meet NICEIC Approved Contractor standards. Our engineers are factory-trained by major UPS manufacturers and IEE qualified.",
  },
  {
    title: "Full Turnkey",
    description:
      "From initial site survey to UPS installation, commissioning, maintenance and ongoing support - one team, one point of contact, zero handoff risk.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="border-b border-white/10 bg-[#0f0f1a]">
      <div className="mx-auto max-w-[1252px] px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0066ff]">Why Us</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Why Choose Power Protection Services
        </h2>
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-[#1e1e2e] bg-[#13131f] p-7 transition-all hover:-translate-y-1 hover:border-[#0066ff] hover:shadow-[0_0_12px_rgba(0,102,255,0.15)]"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#0066ff]">
                {String(index + 1).padStart(2, "0")}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon-placeholder.svg"
                alt={`Placeholder icon for ${feature.title}`}
                className="mt-4 h-10 w-10"
              />
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#c8c8d0]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
