"use client";

import { cn } from "@/lib/utils";
import { TestimonialItem } from "@/types/landingPage";

type Props = {
    item: TestimonialItem;
    className?: string;
};

export default function TestimonialCard({ item, className }: Props) {
    return (
        <article
            className={cn(
                "relative overflow-hidden rounded-2xl bg-white dark:bg-background",
                "border border-[#88888833]",
                "p-7",
                "shadow-[0_8px_10px_rgba(205,153,255,0.55)]",
                className
            )}
        >
            <div className="text-primary text-5xl leading-none font-extrabold">“</div>
            <p className="text-base lg:text-base xl:text-lg leading-7 lg:max-w-sm text-foreground">"{item.quote}"</p>
            <div className="mt-6 md:mt-10 flex items-end justify-between gap-6">
                <div>
                    <p className="text-base lg:text-lg font-medium text-foreground">{item.name}</p>
                    <p className="my-2 text-base lg:text-lg font-medium text-foreground">{item.role}</p>
                </div>

                <img
                    src={item.avatarSrc}
                    alt={item.avatarAlt ?? item.name}
                    draggable={false}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-4 ring-white shadow-sm"
                />
            </div>

        </article>
    );
}
