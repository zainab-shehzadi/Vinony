"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme/ThemeProvider";

type NotchedShellProps = {
  children: React.ReactNode;

  // light lines
  bgLinesSrc?: string;
  bgLinesAlt?: string;
  bgLinesClassName?: string;

  // dark lines
  darkLinesSrc?: string;
  darkLinesClassName?: string;

  // optional dark full background image
  darkBgSrc?: string;
  darkBgClassName?: string;
};

export function NotchedShell({
  children,

  bgLinesSrc = "/bgLines.png",
  bgLinesAlt = "Background lines",
  bgLinesClassName,

  darkLinesSrc = "/layers.png",
  darkLinesClassName,

  darkBgSrc = "/bgMain.png",
  darkBgClassName,
}: NotchedShellProps) {
  const { resolved } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolved === "dark";

  const linesSrc = isDark ? darkLinesSrc ?? bgLinesSrc : bgLinesSrc;
  const linesClass = cn(
    "mt-10 pointer-events-none select-none",
    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    "w-[85%] max-w-[400px] lg:max-w-[600px] object-contain",
    isDark ? darkLinesClassName : bgLinesClassName
  );

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -bottom-1 left-5 right-5 h-2 rounded-full bg-primary/40 blur-sm" />

      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-slate-200 dark:border-0",
          "bg-[#F5F5F5] dark:bg-transparent",
          "[clip-path:polygon(0_0,55%_0,66%_12%,100%_12%,100%_100%,0_100%)]",
          "lg:[clip-path:polygon(0_0,35%_0,45%_18%,100%_18%,100%_100%,0_100%)]",
          "dark:lg:[clip-path:polygon(0_0,35%_0,45%_10%,100%_10%,100%_100%,0_100%)]"
        )}
      >
        {darkBgSrc ? (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-0 hidden lg:dark:block",
              darkBgClassName
            )}
          >
            <img
              src={darkBgSrc}
              alt=""
              aria-hidden
              draggable={false}
              className="h-full w-full object-fill opacity-90"
              loading="lazy"
            />
          </div>
        ) : null}

        {/* Single lines image (switches by resolved theme) */}
        {linesSrc ? (
          <img
            src={linesSrc}
            alt={bgLinesAlt}
            aria-hidden
            draggable={false}
            loading="lazy"
            className={linesClass}
          />
        ) : null}

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}