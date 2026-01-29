"use client";

import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
  className?: string;
};

const CLIP = "polygon(0 0, 38% 0, 50% 14%, 100% 14%, 100% 100%, 0 100%)";

export default function HowItWorksCard({
  title,
  description,
  iconSrc,
  iconAlt = "",
  className,
}: Props) {
  return (
    <article className={cn("w-full", className)}>
      <div className="relative rounded-2xl md:pt-4">
        <div className="pointer-events-none absolute -bottom-3 left-8 right-8 h-6 rounded-full" />

        <div
          className={cn("relative h-full md:h-[320px] lg:h-[340px] xl:h-full overflow-hidden rounded-2xl p-[2px]", "bg-slate-100")}
          style={{ clipPath: CLIP }}
        >
          <div
            className={cn(
              "relative h-full overflow-hidden rounded-2xl bg-white dark:bg-[#0D091D]",
              "min-h-[200px]  lg:min-h-[330px] xl:min-h-[340px]"
            )}
            style={{ clipPath: CLIP }}
          >
            {/* inset border */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  clipPath: CLIP,
                  boxShadow: "inset 0 0 0 2px rgba(235, 196, 250, 0.55)",
                }}
              />
              <div className="absolute left-0 right-0 top-0 h-6 bg-white dark:bg-[#0D091D]/50" />
            </div>

            <div className="flex h-full flex-col p-6 xl:p-8 xl:pt-10">
              <div
                className={cn(
                  "inline-flex items-center justify-center rounded-full bg-[#141223] dark:bg-[#32284F]/50",
                  "h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16 xl:mt-6"
                )}
              >
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  className="h-5 w-5 sm:h-[22px] sm:w-[22px] object-contain"
                  draggable={false}
                  loading="lazy"
                />
              </div>

              <h3 className="mt-5 lg:mt-10 xl:mt-14 text-[18px] font-semibold leading-tight text-foreground  xl:text-[24px]">
                {title}
              </h3>

              <p className="mt-3 lg:mt-6 text-foreground text-[14px] leading-6 xl:text-[16px] lg:leading-7 line-clamp-6 ">
                {description}
              </p>

              <div className="mt-auto" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
