type FeatureItem = {
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: "Independent",
    description:
      "We work with all major manufacturers, so our advice is always unbiased.",
  },
  {
    title: "Experienced",
    description:
      "Decades of experience in UPS, power protection and critical infrastructure.",
  },
  {
    title: "Certified",
    description:
      "All installations meet NICEIC standards. Engineers are factory-trained and IEE qualified.",
  },
  {
    title: "Full Turnkey",
    description:
      "From initial survey to installation, commissioning, maintenance and support - one team, one point of contact.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="border-b border-white/10 bg-[#0d1016]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Why Us</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Why Choose Us
        </h2>
        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#101726] p-7 transition-all hover:-translate-y-1 hover:border-[#0066ff]/70"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-[#6fa7ff]">
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
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
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
