import React from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import { GetStartedSectionProps } from "@/types/landingPage";

function renderDescriptionWithCreditHighlight(text: string) {
  // highlights: "4 credit", "4 credits", "12 credit", etc.
  const re = /(\b\d+\b\s*credits?\b)/gi;

  return text.split(re).map((part, i) => {
    if (re.test(part)) {
      // reset lastIndex side-effect (because test() on /g/)
      re.lastIndex = 0;

      return (
        <span key={i} className="text-primary font-bold">
          {part}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export function LeftCopy({
  description,
  eyebrow,
  title,
  bestSuitedFor,
  className,
  headingClassName,
  descriptionClassName,
}: GetStartedSectionProps) {
  const showBestSuited =
    Array.isArray(bestSuitedFor) && bestSuitedFor.length > 0;

  return (
    <div className={cn("pt-14 lg:pt-0 pl-4 md:pl-0", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        className={cn("!text-left", headingClassName)}
        eyebrowClassName="!text-left"
        titleClassName="!text-left !mx-0"
      />

      <p
        className={cn(
          "md:mt-6 lg:mt-10  max-w-2xl text-sm md:text-base lg:text-[20px]",
          "leading-6 md:leading-7 lg:leading-[30px]",
          "text-foreground",
          descriptionClassName
        )}
      >
        {typeof description === "string"
          ? renderDescriptionWithCreditHighlight(description)
          : description}
      </p>

      {showBestSuited && (
        <div className="mt-6 lg:mt-8">
          <h4 className="text-base md:text-lg lg:text-2xl font-bold text-foreground">
            Best suited for
          </h4>

          <ul className="mt-2 space-y-2 text-sm md:text-base lg:text-[20px] text-foreground">
            {bestSuitedFor.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}