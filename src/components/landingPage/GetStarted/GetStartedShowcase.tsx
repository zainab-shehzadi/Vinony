"use client";

import { cn } from "@/lib/utils";
import { LeftCopy } from "./leftCopy";
import { NotchedShell } from "./NotechedShell";
import { RightPreview } from "./RightPreview";
import { GetStartedSectionProps } from "@/types/landingPage";

export default function GetStartedSection({
  eyebrow,
  title,
  description = "Based on the conversation with the AI chatbot, you will receive personalized recommendations.",
  imageSrc = "/model.png",
  imageAlt = "Vinony preview",
  className,
  bestSuitedFor,
}: GetStartedSectionProps) {
  return (
    <section className={cn("w-full pt-2 md:pt-10 xl:pt-10", className)}>
      <NotchedShell>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]  md:pl-10">
          <LeftCopy eyebrow={eyebrow} title={title} description={description} bestSuitedFor={bestSuitedFor}/>
          <RightPreview src={imageSrc} alt={imageAlt} />
        </div>
      </NotchedShell>
    </section>
  );
}
