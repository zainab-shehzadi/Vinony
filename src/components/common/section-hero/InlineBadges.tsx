"use client";

import { cn } from "@/lib/utils";
import type { InlineBadge } from "@/types/sectionHero";

export default function InlineBadges({
  items,
  className,
}: {
  items: InlineBadge[];
  className?: string;
}) {
  if (!items?.length) return null;

  return (
    <span className={cn("inline-flex items-center -space-x-2 align-middle", className)}>
      {items.map((b) => (
        <span
          key={b.id}
          className="inline-flex h-7 items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-white"
        >
          {b.avatarSrc ? (
            <img
              src={b.avatarSrc}
              alt={b.alt ?? ""}
              className="h-7 w-7 rounded-full object-cover"
              draggable={false}
              loading="lazy"
            />
          ) : (
            <span className="px-2 text-xs font-semibold text-slate-800">{b.label ?? ""}</span>
          )}
        </span>
      ))}
    </span>
  );
}
