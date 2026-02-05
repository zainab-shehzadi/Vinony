"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/constants/landingPage";
import { TestimonialsSectionProps } from "@/types/landingPage";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "./TestimonialCard";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsSection({
  items = TESTIMONIALS,
  className,
}: TestimonialsSectionProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  return (
    <section className={cn("w-full py-6 sm:py-10 lg:py-20", className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What People Are Saying" />

        {/* ✅ sm: 1 slide, md: 2 slides */}
        <div className="mt-10 lg:hidden">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex">
              {items.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] pl-4"
                >
                  <TestimonialCard item={t} />
                </div>
              ))}
            </div>
          </div>

          {/* optional dots */}
          <div className="mt-4 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>

        {/* ✅ lg+: grid */}
        <div className="mt-10 hidden lg:grid gap-6 lg:gap-8 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
