import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutTimeline from "@/components/AboutTimeline";
import AboutWhatWeDoCards from "@/components/AboutWhatWeDoCards";

export const metadata: Metadata = {
  title: "About Us | Power Protection Services",
  description:
    "Learn about our independent UPS and power protection expertise, our small dedicated team, and our journey since May 2000.",
};

export default function AboutUsPage() {
  return (
    <main className="overflow-x-clip bg-[#0a0a0f] text-zinc-100">
      <section className="relative min-h-[32rem] overflow-hidden border-b border-white/10 bg-[#0a0a0f] sm:h-[36rem] lg:h-[40rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pps-stock-images/about-office.jpg"
            alt="Power infrastructure consultation and support environment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#05070d]/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-[-14rem] z-20 h-[28rem] w-[28rem] rounded-full border border-white/10 opacity-60" />

        <div className="relative z-30 mx-auto max-w-[1252px] px-6 pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-18 lg:pt-32">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About Us</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Independent power protection specialists for over 25 years
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            We help organisations protect critical systems with dependable UPS
            and backup power solutions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Speak to Our Team
            </Link>
            <Link href="/#services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-[#EEF3FB] py-20 text-[#0c1220] md:py-28">
        <div className="pointer-events-none absolute -left-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#cad7ee]" />

        <div className="relative z-10 mx-auto grid max-w-[1252px] gap-14 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0b1324] sm:text-5xl">
              Friendly specialists. Personal support.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-[#41547a]">
              Founded by Carl Donovan in May 2000, our business has always
              focused on practical, honest advice and responsive support. As a
              smaller team, we get to know our clients properly and stay
              closely involved from first conversation through to long-term
              aftercare.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#41547a]">
              Since incorporation over 25 years ago, we&apos;ve supported
              organisations across IT and telecoms environments with tailored
              UPS and power protection solutions. Our welcoming team takes
              pride in being approachable, dependable, and easy to work with.
            </p>
          </div>

          <div className="relative rounded-3xl border border-[#d6dff0] bg-[#f8fbff] p-3 sm:p-5">
            <div className="pointer-events-none absolute inset-5 rounded-[1.25rem] border border-[#dce4f2]" />
            <Image
              src="/pps-stock-images/about-carl-lindy-team-photo.jpg"
              alt="Carl and the Power Protection Services team"
              width={1400}
              height={1000}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#d9e1f1] bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-44 -top-44 h-[38rem] w-[38rem] rounded-full border border-[#dce6f5]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[20rem] w-[20rem] rounded-full border border-[#e7edf8]" />

        <div className="relative z-10 mx-auto max-w-[1252px] px-6 text-[#0c1220]">
          <p className="hidden text-xs uppercase tracking-[0.2em] text-[#4f6287] md:block">
            What We Do
          </p>
          <h2 className="mt-3 hidden text-4xl font-semibold tracking-tight text-[#0b1324] sm:text-5xl md:block">
            Independent Advice Across Major Manufacturers
          </h2>
          <AboutWhatWeDoCards />

          <p className="mt-16 max-w-4xl text-base leading-relaxed text-[#41547a] md:mt-8">
            Our customers include universities, hospitals, city and county
            councils, corporate organisations, electrical contractors, IT
            resellers, project management companies and consultants. Our goal
            is always the same: the highest level of service and support by
            combining practical expertise with dedicated care.
          </p>
        </div>
      </section>

      <AboutTimeline />

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0c162b] py-16">
        <div className="pointer-events-none absolute -right-20 -top-16 z-10 h-56 w-56 rounded-full border border-white/15" />

        <div className="relative z-20 mx-auto flex max-w-[1252px] flex-col gap-6 px-6 text-center sm:text-left md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s plan the right solution for your site.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
              Get in touch for free, unbiased professional advice on UPS and
              critical power infrastructure.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact#contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:01488685207" className="btn-secondary">
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
              01488 685207
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
