import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0a0f]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Server room environment representing critical infrastructure"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/78" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute -top-28 right-[-14rem] z-20 h-[34rem] w-[34rem] rounded-full border border-white/10 opacity-60" />
      <div className="pointer-events-none absolute bottom-[-18rem] left-[-10rem] z-20 h-[30rem] w-[30rem] rounded-full border border-[#0066ff]/25" />
      <div className="relative z-30 mx-auto max-w-6xl px-6 pb-36 pt-32 sm:pb-40 sm:pt-36 lg:pt-44">
        <div className="max-w-4xl border-l-4 border-[#0066ff] pl-6 sm:pl-8">
          <p className="mb-6 text-sm uppercase tracking-[0.22em] text-zinc-400">
            Trading name of OnLiTECH Ltd
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Power Protection Experts
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Independent UPS systems, batteries, generators and maintenance -
            keeping your critical infrastructure running.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-[#0a0a0f] transition-colors hover:bg-zinc-200"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-base font-semibold text-zinc-200 transition-colors hover:border-[#0066ff] hover:text-white"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
