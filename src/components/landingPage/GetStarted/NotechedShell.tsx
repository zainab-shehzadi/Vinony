import * as React from "react";
import { cn } from "@/lib/utils";

type NotchedShellProps = {
  children: React.ReactNode;

  bgLinesSrc?: string;
  bgLinesAlt?: string;
  bgLinesClassName?: string;
  darkBgSrc?: string;
  darkBgClassName?: string;
};

export function NotchedShell({
  children,
  bgLinesSrc = "/bgLines.png",
  bgLinesAlt = "Background lines",
  bgLinesClassName,

  darkBgSrc = "/bgMain.png",
  darkBgClassName,
}: NotchedShellProps) {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute -bottom-1 left-5 right-5 h-2 rounded-full bg-primary/40 blur-sm" />

      <div
        className={cn(
          "relative overflow-hidden rounded-3xl  border border-slate-200 dark:border-0",
          "bg-[#F5F5F5] dark:bg-transparent",
          "[clip-path:polygon(0_0,55%_0,66%_12%,100%_12%,100%_100%,0_100%)]",
          "lg:[clip-path:polygon(0_0,35%_0,45%_18%,100%_18%,100%_100%,0_100%)] dark:lg:[clip-path:polygon(0_0,35%_0,45%_10%,100%_10%,100%_100%,0_100%)]"
        )}
      >
        {darkBgSrc ? (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-0",
              "hidden lg:dark:block",
              darkBgClassName
            )}
          >
            <img
              src={darkBgSrc}
              alt=""
              aria-hidden
              className="h-full w-full object-fill opacity-90"
              draggable={false}
            />
          </div>
        ) : null}

        {bgLinesSrc ? (
          <img
            src={bgLinesSrc}
            alt={bgLinesAlt}
            draggable={false}
            aria-hidden
            className={cn(
              "mt-10 pointer-events-none select-none",
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-[85%] max-w-[400px] lg:max-w-[600px] object-contain",
              "opacity-[0.12] dark:opacity-[0.35]",
              bgLinesClassName
            )}
          />
        ) : null}

        {/* content on top */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}