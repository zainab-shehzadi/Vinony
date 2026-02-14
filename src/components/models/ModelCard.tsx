"use client";

import * as React from "react";
import type { ModelCardData } from "@/types/model";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/40 bg-white px-4 py-2 text-xs font-medium text-[#5E5D66] dark:bg-background dark:text-white md:text-base">
      {label}
    </span>
  );
}

type Props = {
  item: ModelCardData;
  onTry?: (slug: string) => void;
  className?: string;
};

export default function ModelCard({ item, onTry, className }: Props) {
  const handleTry = React.useCallback(() => {
    onTry?.(item.slug);
  }, [onTry, item.slug]);

  const [unitLeft, unitRight] = React.useMemo(() => {
    const parts = (item.creditsUnit ?? "").split("/");
    return [parts[0] ?? "", parts[1] ?? ""];
  }, [item.creditsUnit]);

  return (
    <div
      className={cn(
        "rounded-2xl border border-accent/20 bg-accent-foreground p-6 shadow-md dark:bg-background",
        "flex h-full flex-col",
        className,
      )}
    >
      {/* 1. TOP SECTION: Title and Price */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground md:text-lg lg:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-[#818286] md:text-base">
            {item.provider}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-sm font-medium text-foreground md:text-base lg:text-lg">
            <span className="text-foreground">{item.credits}</span>{" "}
            <span className="text-foreground">{unitLeft}</span>
            {unitRight ? <span className="text-foreground">/</span> : null}
            {unitRight ? <span className="text-accent">{unitRight}</span> : null}
          </div>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: Description and Tags */}
      <div className="flex flex-grow flex-col">
        {item.description ? (
          <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.description}
          </p>
        ) : (
          <div className="flex-grow" />
        )}

        {Array.isArray(item.tags) && item.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.slice(0, 4).map((t) => (
              <TagPill key={t.id} label={t.label} />
            ))}
          </div>
        ) : null}
      </div>

      {/* 3. BOTTOM SECTION: CTA */}
      <div className="mt-8">
        <Button
          type="button"
          onClick={handleTry}
          className="btn-gradient relative h-12 w-full overflow-hidden rounded-xl text-sm font-bold text-white md:h-14 md:text-base"
        >
          {item.ctaLabel ?? "Try Now"}
        </Button>
      </div>
    </div>
  );
}
