"use client";

import { cn } from "@/lib/utils";
import HowItWorksCard from "./HowItWorksCard";
import SectionHeading from "@/components/common/SectionHeading";
import { HOW_IT_WORKS1 } from "@/constants/landingPage";

type Props = {
  className?: string;
  limit?: number; // ✅ if passed -> show only that many
};

export default function HowItWorksSection({ className, limit }: Props) {
  const items =
    typeof limit === "number" ? HOW_IT_WORKS1.slice(0, Math.max(0, limit)) : HOW_IT_WORKS1;

  return (
    <section className={cn("w-full bg-white dark:bg-background", className)}>
      <div className="py-14 md:py-16 lg:py-24">
        <div className="mb-6 lg:mb-10 text-center">
          <SectionHeading eyebrow="Why use gpt 4.0" title="Best Use Cases" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <HowItWorksCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}