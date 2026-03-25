import Image from "next/image";

type TrustBarProps = {
  inHero?: boolean;
};

type BrandItem = {
  name: string;
  logoSrc: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  note?: string;
};

const brands: BrandItem[] = [
  {
    name: "APC",
    logoSrc: "/supplier-logos/apc-white.png",
    logoAlt: "APC supplier logo",
    logoWidth: 188,
    logoHeight: 48,
  },
  {
    name: "Riello",
    logoSrc: "/supplier-logos/riello-white.png",
    logoAlt: "Riello UPS supplier logo",
    logoWidth: 210,
    logoHeight: 62,
  },
  {
    name: "Borri",
    logoSrc: "/supplier-logos/borri-white.png",
    logoAlt: "Borri supplier logo",
    logoWidth: 148,
    logoHeight: 38,
  },
  {
    name: "Eaton Powerware",
    logoSrc: "/supplier-logos/eaton-white.png",
    logoAlt: "Eaton supplier logo",
    logoWidth: 176,
    logoHeight: 48,
  },
  {
    name: "Emerson Network Power",
    logoSrc: "/supplier-logos/vertiv-white.png",
    logoAlt: "Vertiv supplier logo",
    logoWidth: 140,
    logoHeight: 38,
  },
];

const TrustBar = ({ inHero = false }: TrustBarProps) => {
  const sectionClassName = inHero
    ? "relative z-30 mt-14 -mb-24 bg-transparent pb-0 sm:mt-20 sm:-mb-32"
    : "relative z-20 -mt-24 bg-transparent pb-0 sm:-mt-32";

  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-[1252px] px-6">
        <div className="rounded-2xl border border-white/10 bg-[#1B2236] px-5 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400">
            Independent suppliers of all major UPS manufacturers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`flex min-h-[5.5rem] flex-col items-center justify-center rounded-md bg-[#121C2E] px-3 py-3 text-center text-sm font-semibold text-zinc-200 ${
                  index === brands.length - 1
                    ? "col-span-2 mx-auto w-full max-w-[15rem] sm:col-auto sm:mx-0 sm:max-w-none"
                    : ""
                }`}
              >
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt ?? `${brand.name} logo`}
                  width={brand.logoWidth ?? 160}
                  height={brand.logoHeight ?? 48}
                  className="h-auto w-auto max-h-11 object-contain"
                />
                {brand.note ? (
                  <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400">
                    {brand.note}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
