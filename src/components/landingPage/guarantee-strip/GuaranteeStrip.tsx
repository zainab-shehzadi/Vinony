"use client";

import React from "react";
import { CircleIcon, GUARANTEE_ITEMS } from "./constants";
import { cn } from "@/lib/utils";

function splitLines(text: string) {
  const parts = text.split("\n");
  return parts.map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== parts.length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

export default function GuaranteeStrip() {
  return (
    <section className="w-full bg-white dark:bg-background">
      <div className="py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {GUARANTEE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={cn(
                "text-center",
                idx === 2 && "md:col-span-2 md:mx-auto md:max-w-[420px] lg:col-span-1 lg:mx-0 lg:max-w-none"
              )}
            >
              <CircleIcon>
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt ?? item.title}
                  className="h-[20px] w-[20px] object-contain md:h-[40px] md:w-[45px]"
                  draggable={false}
                  loading="lazy"
                />
              </CircleIcon>

              <h3 className="mt-5 text-base font-bold leading-snug text-slate-900 dark:text-white md:text-lg xl:text-[24px]">
                {splitLines(item.title)}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-foreground md:mt-5 md:text-base lg:text-[18px]">
                {splitLines(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}