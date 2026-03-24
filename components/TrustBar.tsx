import Image from "next/image";

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

const TrustBar = () => {
  return (
    <section className="relative z-20 -mt-16 border-b border-white/10 bg-transparent pb-14 sm:-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#10141f]/95 px-5 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.45)] sm:px-8 sm:py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-zinc-400">
            Independent suppliers of all major manufacturers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-md border border-white/10 bg-[#0d111a] px-3 py-3 text-center text-sm font-semibold text-zinc-200"
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
