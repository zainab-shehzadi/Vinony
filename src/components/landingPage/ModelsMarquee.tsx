import * as React from "react";
import type { MarqueeItem, ModelsMarqueeProps } from "@/types/marquee";
import SectionHeading from "../common/SectionHeading";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function PillButton({
  item,
  active,
  disabled,
  onClick,
}: {
  item: MarqueeItem;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "shrink-0 inline-flex items-center justify-center select-none",
        "h-[40px] w-[150px] px-6 text-[15px]",
        "md:h-[60px] md:w-[200px] sm:text-base md:text-lg",
        "rounded-full border-2 transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        disabled ? "opacity-60 cursor-not-allowed" : "",
        active
          ? "btn-gradient text-white border-transparent"
          : "bg-white dark:bg-[#2E313D] border-accent/60 hover:border-primary/70"
      )}
      aria-pressed={active}
      title={item.label}
    >
      <span className="truncate whitespace-nowrap">{item.label}</span>
    </button>
  );
}

function buildLoopItems(items: MarqueeItem[], minCount = 12) {
  if (!items.length) return [];
  const out: MarqueeItem[] = [];
  while (out.length < Math.max(minCount, items.length)) out.push(...items);
  return out;
}

export default function ModelsMarquee({
  items,
  defaultActiveId,
  activeId,
  onSelect,
  speedSeconds = 18,
  pauseOnHover = true,
  className,
}: ModelsMarqueeProps) {
  const isControlled = activeId !== undefined;

  const [internalActiveId, setInternalActiveId] = React.useState<string>(() => {
    if (defaultActiveId) return defaultActiveId;
    return items?.[0]?.id ?? "";
  });

  const selectedId = isControlled ? (activeId as string) : internalActiveId;

  const loopItems = React.useMemo(() => buildLoopItems(items ?? [], 12), [items]);

  // ✅ map: id -> first index in loopItems
  const firstIndexById = React.useMemo(() => {
    const map = new Map<string, number>();
    for (let i = 0; i < loopItems.length; i++) {
      const id = loopItems[i]?.id;
      if (id && !map.has(id)) map.set(id, i);
    }
    return map;
  }, [loopItems]);

  // ✅ optional: "one time mey just one clickable" (lock click for a moment)
  const [clickLocked, setClickLocked] = React.useState(false);

  const handleSelect = (item: MarqueeItem) => {
    if (clickLocked) return;

    setClickLocked(true);
    if (!isControlled) setInternalActiveId(item.id);
    onSelect?.(item);

    // unlock after a short delay (prevents double click spam)
    window.setTimeout(() => setClickLocked(false), 250);
  };

  return (
    <section className={cn("w-full bg-white dark:bg-background", className)}>
      <div className="pt-16 md:pt-20 xl:pt-48">
        <SectionHeading
          eyebrow="VINONY UNLOCKS THE POTENTIAL Ai"
          title={
            <>
              All AI Models available for <br className="hidden sm:block" />
              creators.
            </>
          }
        />

        <div className="relative mt-8 lg:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-background" />

          <div className={cn("overflow-hidden", pauseOnHover ? "group" : "")}>
            <div
              className={cn(
                "flex w-max gap-6",
                pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
              )}
              style={{
                animation: `vinony-marquee ${speedSeconds}s linear infinite`,
              }}
            >
              {loopItems.map((it, idx) => {
                const firstIdx = firstIndexById.get(it.id);
                const isActive = selectedId === it.id && firstIdx === idx; // ✅ only first occurrence active

                return (
                  <PillButton
                    key={`${it.id}-${idx}`}
                    item={it}
                    active={isActive}
                    disabled={clickLocked}
                    onClick={() => handleSelect(it)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vinony-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
