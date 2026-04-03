import Image from "next/image";
import Link from "next/link";

type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type Sector = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon:
    | "healthcare"
    | "education"
    | "government"
    | "corporate"
    | "it"
    | "smb";
};

const sectors: Sector[] = [
  {
    title: "Healthcare & NHS",
    description:
      "Clinical power protection for hospitals, labs and patient-critical systems.",
    imageSrc: "/who-we-help/hospitals-contact-13176450.jpg",
    imageAlt: "Hospital environment representing healthcare sector infrastructure",
    icon: "healthcare",
  },
  {
    title: "Universities & Education",
    description:
      "Reliable backup for campus IT, lecture facilities and education infrastructure.",
    imageSrc: "/who-we-help/universities-ollie-8793386.jpg",
    imageAlt: "Large lecture room representing universities and education sites",
    icon: "education",
  },
  {
    title: "Local Government",
    description:
      "Resilient UPS support for councils, civic buildings and public services.",
    imageSrc: "/who-we-help/local-government-fotios-2130031.jpg",
    imageAlt: "City civic area representing local government organisations",
    icon: "government",
  },
  {
    title: "Corporate Organisations",
    description:
      "Business continuity solutions for commercial and multi-site organisations.",
    imageSrc: "/who-we-help/corporate-divinetechygirl-1181406.jpg",
    imageAlt: "Modern office environment representing corporate organisations",
    icon: "corporate",
  },
  {
    title: "IT Resellers & Contractors",
    description:
      "Project-ready UPS expertise for IT providers and delivery partners.",
    imageSrc: "/who-we-help/it-cookiecutter-17489156.jpg",
    imageAlt: "Critical IT hardware close-up representing resellers and contractors",
    icon: "it",
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Scalable, practical backup power support for growing SMEs.",
    imageSrc: "/who-we-help/smb-proxyclick-2451566.jpg",
    imageAlt: "Small business office setting representing SME organisations",
    icon: "smb",
  },
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

type WhoWeHelpSectionProps = {
  showLogos?: boolean;
  contactHref?: string;
  theme?: "dark" | "light";
};

const SectorIcon = ({ icon }: { icon: Sector["icon"] }) => {
  const iconClass = "h-8 w-8 stroke-white";

  switch (icon) {
    case "healthcare":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" strokeWidth="1.8" />
          <path d="M12 8v8M8 12h8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M3.5 9.5 12 5l8.5 4.5L12 14 3.5 9.5Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M7.5 11.7V15c0 1.7 2.1 3 4.5 3s4.5-1.3 4.5-3v-3.3" strokeWidth="1.8" />
        </svg>
      );
    case "government":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M4 9h16L12 5 4 9Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M6 9.5v7M10 9.5v7M14 9.5v7M18 9.5v7M4 17h16" strokeWidth="1.8" />
        </svg>
      );
    case "corporate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="4" y="8" width="16" height="10" rx="2.2" strokeWidth="1.8" />
          <path d="M9 8V6.8c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V8" strokeWidth="1.8" />
          <path d="M4 12.5h16" strokeWidth="1.8" />
        </svg>
      );
    case "it":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <rect x="5" y="4.8" width="14" height="5.6" rx="1.5" strokeWidth="1.8" />
          <rect x="5" y="13.6" width="14" height="5.6" rx="1.5" strokeWidth="1.8" />
          <path d="M8.5 7.6h.01M8.5 16.4h.01M11 7.6h4.5M11 16.4h4.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "smb":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
          <path d="M4 10.5h16l-1.3-3.5H5.3L4 10.5Z" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M6 10.5V19h12v-8.5M10 19v-5h4v5" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
};

const WhoWeHelpSection = ({
  showLogos = true,
  contactHref = "#contact",
  theme = "dark",
}: WhoWeHelpSectionProps) => {
  const isLight = theme === "light";

  return (
    <section
      id="who-we-help"
      className={
        isLight
          ? "overflow-hidden border-b border-[#d9e1f1] bg-white"
          : "overflow-hidden border-b border-white/10 bg-[#0a0a0f]"
      }
    >
      <div className="mx-auto max-w-[1252px] px-6 py-20 md:py-28">
        <div
          className={
            isLight
              ? "rounded-3xl border border-[#d6dff0] bg-white p-8 md:p-12"
              : "rounded-3xl border border-white/10 bg-[#0f1522] p-8 md:p-12"
          }
        >
          <h2
            className={
              isLight
                ? "text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl"
                : "text-4xl font-semibold tracking-tight text-white sm:text-5xl"
            }
          >
            Who We Help
          </h2>
          <p
            className={
              isLight
                ? "mt-6 max-w-3xl text-lg leading-relaxed text-[#41547a]"
                : "mt-6 max-w-3xl text-lg leading-relaxed text-zinc-100"
            }
          >
            You are statistically more likely to lose business to a power
            failure than a computer virus.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {sectors.map((sector) => (
              <div
                key={sector.title}
                className={
                  isLight
                    ? "group overflow-hidden rounded-md border border-[#d6dff0] bg-[#e9eff9] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                    : "group overflow-hidden rounded-md border border-white/10 bg-[#121b2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#0066ff]/70 hover:shadow-[0_12px_30px_rgba(0,102,255,0.2)]"
                }
              >
                <div className="relative h-32 w-full md:h-40">
                  <Image
                    src={sector.imageSrc}
                    alt={sector.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={
                      isLight
                        ? "pointer-events-none absolute inset-0 bg-[#020611]/45"
                        : "pointer-events-none absolute inset-0 bg-[#020611]/55"
                    }
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                    <SectorIcon icon={sector.icon} />
                    <span className="text-sm font-semibold text-zinc-100 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-0 sm:text-base">
                      {sector.title}
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-1/2 w-[86%] -translate-x-1/2 text-sm leading-relaxed text-zinc-100 opacity-0 transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-100">
                      {sector.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start md:justify-end">
            <Link href="/who-we-help" className={isLight ? "btn-tertiary" : "btn-secondary"}>
              Learn more about who we help
            </Link>
            <a
              href={contactHref}
              className="btn-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="mr-2 h-4 w-4 shrink-0 stroke-current"
              >
                <path
                  d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Speak to a real person
            </a>
          </div>
        </div>
      </div>

      {showLogos ? (
        <div className="relative left-1/2 mb-10 w-screen -translate-x-1/2 overflow-hidden py-10 md:mb-12 md:py-14">
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
      ) : null}
    </section>
  );
};

export default WhoWeHelpSection;
