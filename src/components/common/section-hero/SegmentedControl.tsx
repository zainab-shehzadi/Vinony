"use client";

import { cn } from "@/lib/utils";
import type { SegmentedControlProps } from "@/types/sectionHero";

export default function SegmentedControl({ value, onChange, options }: SegmentedControlProps) {
  return (
    <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200">
      {options.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition",
              active ? "bg-primary text-white shadow-sm" : "text-slate-700 hover:bg-slate-50"
            )}
          >
            <span>{opt.label}</span>
            {opt.badge ? (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px]",
                  active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                )}
              >
                {opt.badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
