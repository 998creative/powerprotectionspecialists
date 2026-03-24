const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-[#111118] text-white"
    >
      <div className="pointer-events-none absolute -top-16 right-[-12rem] h-64 w-64 rounded-full border border-[#1e1e2e]" />
      <div className="mx-auto grid max-w-[1252px] gap-14 px-6 pb-20 pt-48 sm:pt-64 md:grid-cols-2 md:items-center md:pb-28">
        <div className="order-2 md:order-1">
          <div className="relative rounded-3xl border border-[#1e1e2e] bg-[#13131f] p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-5 rounded-[1.25rem] border border-[#1e1e2e]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/service-images/full-installation.jpg"
              alt="Engineer carrying out electrical installation for critical power infrastructure"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Independent advice. No manufacturer bias.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-[#c8c8d0]">
            Power Protection Services is an independent UK distributor and
            installer of UPS systems, batteries and standby generators. Because
            we work with all major manufacturers - not just one - we recommend
            what&apos;s right for your requirements, not what&apos;s right for our
            margins.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#c8c8d0]">
            Our customers include universities, hospitals, local councils, IT
            resellers and large corporate organisations.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex text-base font-semibold text-[#0066ff] transition-colors hover:text-[#0052cc]"
          >
            About us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
