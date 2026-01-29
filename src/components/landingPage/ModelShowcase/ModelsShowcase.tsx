"use client";

import * as React from "react";
import { MODELS_SHOWCASE_CONTENT } from "@/constants/landingPage";
import type { ModelsShowcaseContent } from "@/types/landingPage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme/ThemeProvider";

function splitLines(text: string) {
  const parts = text.split("\n");
  return parts.map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < parts.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

type Props = {
  content?: ModelsShowcaseContent;
  onCtaClick?: () => void;
  className?: string;

  /** ✅ right-side image for light mode */
  imageSrc?: string;

  /** ✅ right-side image for dark mode */
  darkImageSrc?: string;
};

export default function ModelsShowcase({
  content = MODELS_SHOWCASE_CONTENT,
  onCtaClick,
  className,
  imageSrc = "/overlay.svg",
  darkImageSrc = "/overlay-dark.svg",
}: Props) {
  const { resolved } = useTheme(); // ✅ "light" | "dark"

  const handleCta = () => {
    onCtaClick?.();
    content.onCta?.();
  };

  const rightSrc = resolved === "dark" ? darkImageSrc : imageSrc;

  return (
    <section className={cn("w-full bg-[#D9D9D940] dark:bg-background ", className)}>
      <div className="px-5 sm:px-8 md:px-12 lg:px-14 xl:px-28 py-6 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              {splitLines(content.heading)}
            </h2>

            <p className="mt-4 md:mt-8 max-w-xl mx-auto lg:mx-0 text-sm md:text-base xl:text-xl leading-relaxed text-muted-foreground">
              {splitLines(content.subheading)}
            </p>

            <Button
              type="button"
              onClick={handleCta}
              className="mt-10 btn-gradient h-11 rounded-xl px-10 text-sm font-semibold text-white md:h-14 md:text-base lg:text-lg"
            >
              {content.ctaLabel}
            </Button>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full lg:max-w-[544px] aspect-[544/388] lg:aspect-auto lg:h-[388px]">
              <img
                key={rightSrc}
                src={rightSrc}
                alt="Available models preview"
                className="h-full w-full object-contain"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}