"use client";
import { cn } from "@/lib/utils";

type Props = {
    eyebrow: string;
    title: React.ReactNode;
    className?: string;
    eyebrowClassName?: string;
    titleClassName?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    className,
    eyebrowClassName,
    titleClassName,
}: Props) {
    return (
        <div className={cn("text-center", className)}>
            <p
                className={cn(
                    "text-gradient  font-semibold tracking-[0.16em]",
                    "text-sm md:text-xl lg:text-[24px]",
                    eyebrowClassName
                )}
            >
                {eyebrow}
            </p>

            <h2
                className={cn(
                    "mt-2 lg:mt-4  font-bold text-foreground text-center",
                    "mx-auto w-full max-w-[700px]",
                    "text-2xl md:text-4xl xl:text-[48px]",
                    "leading-tight md:leading-snug xl:leading-[1.15]",
                    titleClassName
                )}
            >
                {title}
            </h2>

        </div>
    );
}
