"use client";

import { cn } from "@/lib/utils";
import type { ModelCategory } from "@/types/model";

type FilterTab = ModelCategory | "all";
type Tab = { id: FilterTab; label: string };

const TABS: Tab[] = [
  { id: "all", label: "All" },
  { id: "chat", label: "Chat" },
  { id: "image", label: "Image" },
  { id: "video", label: "Video" },
  { id: "agents", label: "Agents" },
];

type Props = {
  value: FilterTab;
  onChange: (v: FilterTab) => void;
  search: string;
  onSearchChange: (v: string) => void;
  className?: string;
};

export default function ModelFilters({
  value,
  onChange,
  search,
  onSearchChange,
  className,
}: Props) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Model categories"
          className={cn(
            "w-full lg:w-auto",
            "overflow-x-auto lg:overflow-visible ",
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          )}
        >
          <div className="inline-flex min-w-max items-center gap-2 sm:gap-3 lg:gap-4">
            {TABS.map((t) => {
              const active = value === t.id;

              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onChange(t.id)}
                  className={cn(
                    "whitespace-nowrap font-medium transition",
                    "h-10 sm:h-12 lg:h-14",
                    "rounded-xl sm:rounded-2xl",
                    "px-4 sm:px-7 lg:px-10",
                    "text-sm sm:text-base lg:text-xl",
                    // inactive
                    !active && "bg-white dark:bg-background border border-border text-foreground hover:bg-black/5",
                    // active
                    active && "btn-gradient text-white shadow-[0_10px_18px_rgba(124,58,237,0.25)]"
                  )}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search */}
        <div className="w-full lg:w-[420px]">
          <div className="flex items-center gap-3 rounded-xl sm:rounded-2xl border border-border bg-white dark:bg-background px-3 sm:px-4 py-2.5 sm:py-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 21l-4.3-4.3" />
              <circle cx="11" cy="11" r="7" />
            </svg>

            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for tools"
              className="h-8 w-full bg-transparent text-sm sm:text-base outline-none placeholder:text-muted-foreground"
              aria-label="Search models"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
