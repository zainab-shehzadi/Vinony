"use client";

import { cn } from "@/lib/utils";
import type { TabsWithSearchProps } from "@/types/sectionHero";

export default function TabsWithSearch({
  tabs,
  activeTab,
  onTabChange,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search for",
}: TabsWithSearchProps) {
  return (
    <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        {tabs.map((t) => {
          const active = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onTabChange(t.id)}
              className={cn(
                "rounded-xl border px-6 py-3 text-sm font-medium transition",
                active
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="relative w-full max-w-[360px]">
        <input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm outline-none focus:border-primary"
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>
      </div>
    </div>
  );
}
