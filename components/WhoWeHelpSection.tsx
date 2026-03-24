const sectors = [
  "Hospitals & Healthcare",
  "Universities & Education",
  "Local Government",
  "Corporate Organisations",
  "IT Resellers & Contractors",
  "Small & Medium Businesses",
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="border-b border-white/10 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-white/10 bg-[#0f1522] p-8 md:p-12">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Who We Help
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200">
            You are statistically more likely to lose business to a power
            failure than a computer virus.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-md border border-white/10 bg-[#121b2a] px-4 py-3 text-sm font-semibold text-zinc-200"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
