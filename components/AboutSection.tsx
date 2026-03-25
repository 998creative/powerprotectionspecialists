const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#d9e1f1] bg-[#EEF3FB] text-[#0c1220]"
    >
      <div className="pointer-events-none absolute -top-16 right-[-12rem] h-64 w-64 rounded-full border border-[#d3dced]" />
      <div className="mx-auto grid max-w-[1252px] gap-14 px-6 pb-20 pt-48 sm:pt-64 md:grid-cols-2 md:items-center md:pb-28">
        <div className="order-2 md:order-1">
          <div className="relative rounded-3xl border border-[#d6dff0] bg-[#f8fbff] p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-5 rounded-[1.25rem] border border-[#dce4f2]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pps-stock-images/about-carl-lindy-team-photo.jpg"
              alt="Team photo representing independent advisory support"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0b1324] sm:text-5xl">
            Independent advice. No manufacturer bias.
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-[#41547a]">
            Power Protection Services is an independent UK distributor and
            installer of UPS systems, batteries and standby generators. Because
            we work with all major manufacturers - not just one - we recommend
            what&apos;s right for your requirements, not what&apos;s right for our
            margins.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#41547a]">
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
