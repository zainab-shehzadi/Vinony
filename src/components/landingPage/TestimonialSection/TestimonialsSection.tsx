"use client";

import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/constants/landingPage";
import { TestimonialsSectionProps } from "@/types/landingPage";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "./TestimonialCard";



export default function TestimonialsSection({
    items = TESTIMONIALS,
    className,
}: TestimonialsSectionProps) {
    return (
        <section className={cn("w-full py-12 sm:py-14 lg:py-20", className)}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="What People Are Saying"
                />
                <div className="mt-10 grid gap-6 lg:gap-8 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((t) => (
                        <TestimonialCard key={t.id} item={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
