"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/testimonials";

const RotatingTestimonialCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const active = testimonials[index];

  return (
    <blockquote className="rounded-2xl border border-[#d6dff0] bg-[#f8fbff] p-7">
      <div
        key={`${active.name}-${active.company}-${index}`}
        className="animate-[overlay-fade-in_320ms_ease-out]"
      >
        <p className="text-lg leading-relaxed text-[#41547a]">
          &ldquo;{active.quote}&rdquo;
        </p>
        <div className="mt-5 border-t border-[#dce4f2] pt-4">
          <p className="text-sm font-semibold text-[#0e172b]">{active.name}</p>
          <p className="mt-1 text-sm text-[#5c6f94]">
            {active.role} • {active.company}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Link href="/#testimonials" className="btn-tertiary">
          Read Testimonials
        </Link>
      </div>
    </blockquote>
  );
};

export default RotatingTestimonialCard;
