import * as React from "react";
import type { MarqueeItem, ModelsMarqueeProps } from "@/types/marquee";
import SectionHeading from "../common/SectionHeading";

function cn(...classes: Array<string | undefined | false>) {
    return classes.filter(Boolean).join(" ");
}

function PillButton({
    item,
    active,
    onClick,
}: {
    item: MarqueeItem;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "shrink-0 inline-flex items-center justify-center select-none",
                "h-[40px] w-[150px] px-6 text-[15px]",
                "md:h-[60px] md:w-[200px]  sm:text-base",
                "md:text-lg",
                "rounded-full border-2 transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                active
                    ? "btn-gradient text-white border-transparent"
                    : "bg-white dark:bg-[#2E313D] border-accent/60 hover:border-primary/70"
            )}
            aria-pressed={active}
            title={item.label}
        >
            <span className="truncate whitespace-nowrap ">{item.label}</span>
        </button>
    );
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

    const safeItems = React.useMemo(() => {
        const list = items ?? [];
        return list.length >= 6 ? list : [...list, ...list, ...list].slice(0, 10);
    }, [items]);

    const handleSelect = (item: MarqueeItem) => {
        if (!isControlled) setInternalActiveId(item.id);
        onSelect?.(item);
    };

    return (
        <section className={cn("w-full bg-white dark:bg-background", className)}>
            <div className=" pt-16 md:pt-20 xl:pt-48">

                <SectionHeading
                    eyebrow="VINONY UNLOCKS THE POTENTIAL Ai"
                    title={
                        <>
                            All AI Models available for <br className="hidden sm:block" />
                            creators.
                        </>
                    }
                />
                <div className="relative mt-10 md:mt-14">
                    {/* fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

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
                            {safeItems.map((it) => (
                                <PillButton
                                    key={it.id}
                                    item={it}
                                    active={selectedId === it.id}
                                    onClick={() => handleSelect(it)}
                                />
                            ))}

                            {safeItems.map((it) => (
                                <PillButton
                                    key={`${it.id}-dup`}
                                    item={it}
                                    active={selectedId === it.id}
                                    onClick={() => handleSelect(it)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes vinony-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </section>
    );
}
