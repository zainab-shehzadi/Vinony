"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { HighlightPart, SectionHeroProps } from "@/types/sectionHero";
import InlineBadges from "./InlineBadges";


const VARIANT = {
  heroB: {
    title:"text-[30px] md:text-[52px] lg:text-[64px] leading-[1.10] tracking-[-0.01em] font-extrabold",
    subtitle: "mt-4 lg:mt-6 md:max-w-[650px] text-base md:text-[24px] lg:text-2xl leading-7 md:leading-8 lg:leading-9 text-foreground font-medium",
    actionWrap: "mt-10",
  },
} as const;

function renderWithLineBreaks(text: string) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </>
  );
}

function Title({
  parts,
  className,
}: {
  parts: HighlightPart[];
  className?: string;
}) {
  return (
    <h2 className={cn("text-foreground", className)}>
      {parts.map((p, idx) => {
        if (p.type === "text") {
          return <span key={idx}>{renderWithLineBreaks(p.value)}</span>;
        }

        return (
          <span key={idx} className="text-primary ">
            {renderWithLineBreaks(p.value)}
            {p.badges?.length ? <InlineBadges items={p.badges} className="ml-2" /> : null}
          </span>
        );
      })}
    </h2>
  );
}

export default function SectionHero({
  eyebrow,
  titleParts,
  subtitle,
  align = "center",
  variant = "heroA",
  className,

  titleClassName,
  subtitleClassName,
  containerClassName,
}: SectionHeroProps) {
  const isCenter = align === "center";
  const v = VARIANT[variant];

  return (
    <section className={cn("w-full", className)}>
      <div className={cn("mx-auto w-full max-w-6xl md:px-8", containerClassName)}>
        <div className={cn(isCenter ? "text-center" : "text-left")}>

          <div className={cn(eyebrow ? "mt-3" : "")}>
            <Title parts={titleParts} className={cn(v.title, titleClassName)} />
          </div>

          {subtitle ? (
            <div
              className={cn(
                "mx-auto ",
                v.subtitle,
                isCenter ? "text-center" : "text-left",
                subtitleClassName
              )}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

      </div>
    </section>
  );
}
