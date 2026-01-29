"use client";

import type { ModelCardData } from "@/types/model";
import { Button } from "@/components/ui/button";

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
};

export default function ModelCard({ item, onTry }: Props) {
    const handleTry = () => onTry?.(item.slug);

    const [unitLeft, unitRight] = item.creditsUnit.split("/");

    return (
        <div className="flex h-full flex-col rounded-2xl border border-accent/20 bg-accent-foreground p-6 shadow-md dark:bg-background">
            {/* Top */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-base font-semibold text-foreground md:text-lg lg:text-2xl">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#818286] md:text-base">
                        {item.provider}
                    </p>
                </div>

                <div className="text-right">
                    <div className="text-sm font-medium text-foreground md:text-base lg:text-lg">
                        <span className="text-foreground">{item.credits}</span>{" "}
                        <span className="text-foreground">{unitLeft}/</span>
                        <span className="text-accent">{unitRight}</span>
                    </div>
                </div>
            </div>

            {/* Middle (takes remaining space) */}
            <div className="flex-1">
                <p className="mt-5 text-sm font-medium leading-6 text-accent md:text-base">
                    {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                    {item.tags.slice(0, 4).map((t) => (
                        <TagPill key={t.id} label={t.label} />
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <Button
                    type="button"
                    onClick={handleTry}
                    className="btn-gradient mt-auto h-12 w-full rounded-xl text-sm font-semibold text-white md:text-base lg:text-lg"
                >
                    {item.ctaLabel ?? "Try Now"}
                </Button>
            </div>
        </div>
    );
}