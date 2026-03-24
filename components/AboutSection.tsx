const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden border-b border-white/10 bg-[#0b0e15]">
      <div className="pointer-events-none absolute -top-16 right-[-12rem] h-64 w-64 rounded-full border border-white/10" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="order-2 md:order-1">
          <div className="relative rounded-3xl border border-white/10 bg-[#0f1420] p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-5 rounded-[1.25rem] border border-white/10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about-placeholder.svg"
              alt="Placeholder image for UPS and generator installation project"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Independent advice. No manufacturer bias.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-zinc-300">
            Power Protection Experts is an independent distributor of UPS systems,
            batteries and standby generators. Because we work with all major
            manufacturers - not just one - we recommend what&apos;s right for
            your requirements, not what&apos;s right for our margins.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            Our customers include universities, hospitals, local councils, IT
            resellers and large corporate organisations.
          </p>
          <a
            href="https://onlitech.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-base font-semibold text-[#6fa7ff] transition-colors hover:text-[#b5d1ff]"
          >
            About us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
