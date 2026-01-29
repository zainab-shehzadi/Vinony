"use client";

import { cn } from "@/lib/utils";
import type { BillingCycle } from "@/types/pricing";

type Props = {
  value: BillingCycle;
  onChange: (v: BillingCycle) => void;
  className?: string;
};

export default function BillingToggle({ value, onChange, className }: Props) {
  const isMonthly = value === "monthly";

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "inline-flex rounded-xl shadow-md dark:bg-white/70",
         (isMonthly || !isMonthly) ? "p-1" : "p-3"
        )}
      >
        <button
          type="button"
          onClick={() => onChange("monthly")}
          className={cn(
            "h-10 rounded-lg px-2 lg:px-6 text-sm lg:text-[14px] font-medium transition",
            isMonthly ? "btn-gradient text-white shadow-sm" : "text-black"
          )}
        >
          Monthly
        </button>

        <button
          type="button"
          onClick={() => onChange("yearly")}
          className={cn(
            "h-10 rounded-lg px-2 lg:px-6 text-sm lg:text-[14px] font-medium transition",
            !isMonthly ? "btn-gradient text-white dark:text-white/90 shadow-sm" : "text-black"
          )}
        >
          Yearly (20% OFF)
        </button>
      </div>
    </div>
  );
}
