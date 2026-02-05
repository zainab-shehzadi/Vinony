"use client";

import { CTA_BANNER_CONTENT } from "@/constants/landingPage";
import type { CtaBannerContent } from "@/types/landingPage";
import { Button } from "../ui/button";
import { useTheme } from "@/theme/ThemeProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  content?: CtaBannerContent;
  onClick?: () => void;
  className?: string;
};

export default function CtaBanner({
  content = CTA_BANNER_CONTENT,
  className,
}: Props) {
  const { resolved } = useTheme();
  const navigate = useNavigate();

  const bgSrc =
    resolved === "dark" && content.darkBackgroundImageSrc
      ? content.darkBackgroundImageSrc
      : content.backgroundImageSrc;

  return (
    <section className={["w-full pt-4 md:pt-6 lg:pt-16 xl:pt-24", className ?? ""].join(" ")}>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-1 left-6 right-6 h-4 rounded-3xl blur-2xl bg-black dark:bg-black/35"
        />

        <div className="relative overflow-hidden rounded-3xl">
          <img
            key={bgSrc}
            src={bgSrc}
            draggable={false}
            loading="lazy"
            alt=""
            className={[
              "absolute inset-0 h-full scale-[1.25] md:scale-[1.35]  w-full object-cover",
              resolved === "dark"
                ? "origin-center object-center"
                : "scale-100",
            ].join(" ")}
          />

          {/* Content */}
          <div className="relative flex min-h-[160px] sm:min-h-[190px] md:min-h-[220px] items-center justify-center py-6 md:py-10 text-center">
            <div className="max-w-3xl px-4">
              <h3 className="mt-0 md:mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {content.title}
              </h3>

              <p className="mt-2 md:mt-6 text-sm md:text-base lg:text-xl font-semibold text-white">
                {content.subtitle}
              </p>

              <Button
                type="button"
                onClick={() => navigate("/ai-models")}
                className="mt-4 md:mt-10 bg-black dark:btn-gradient hover:bg-black/50 h-11 rounded-xl px-10 text-sm font-semibold text-white md:h-14 md:text-base lg:text-lg"
              >
                {content.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
