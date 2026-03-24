import Image from "next/image";

type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const sectors = [
  "Hospitals & Healthcare",
  "Universities & Education",
  "Local Government",
  "Corporate Organisations",
  "IT Resellers & Contractors",
  "Small & Medium Businesses",
];

const clientLogos: ClientLogo[] = [
  {
    name: "University of Oxford",
    src: "/client-logos/University_of_Oxford-Logo.wine.png",
    width: 162,
    height: 50,
  },
  {
    name: "NHS",
    src: "/client-logos/nhs-1.png",
    width: 124,
    height: 50,
  },
  {
    name: "Vodafone",
    src: "/client-logos/Vodafone_logo_2017.png",
    width: 150,
    height: 40,
  },
  {
    name: "Stryker",
    src: "/client-logos/Stryker_Corporation_logo.png",
    width: 160,
    height: 40,
  },
  {
    name: "West Berkshire Council",
    src: "/client-logos/westberks.png",
    width: 158,
    height: 40,
  },
];

const logoSequence = [...clientLogos, ...clientLogos, ...clientLogos];
const marqueeLogos = [...logoSequence, ...logoSequence];

const WhoWeHelpSection = () => {
  return (
    <section
      id="who-we-help"
      className="overflow-hidden border-b border-white/10 bg-[#0a0a0f]"
    >
      <div className="mx-auto max-w-[1252px] px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-[#1e1e2e] bg-[#111118] p-8 md:p-12">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Who We Help
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c8c8d0]">
            You are statistically more likely to lose business to a power
            failure than a computer virus.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-md border border-[#1e1e2e] bg-[#13131f] px-4 py-3 text-sm font-semibold text-[#c8c8d0]"
              >
                {sector}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#0066ff] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0052cc]"
          >
            Book a Free Site Survey
          </a>
        </div>
      </div>

      <div className="relative left-1/2 mb-10 w-screen -translate-x-1/2 overflow-hidden border-y border-[#d9e1f1] bg-[#f5f5f7] py-10 md:mb-12 md:py-14">
        <div className="logo-marquee-track flex w-max items-center gap-10 px-6">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-12 w-40 shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} client logo`}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto max-h-9 object-contain opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
