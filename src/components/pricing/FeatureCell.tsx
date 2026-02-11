"use client";
import type { FeatureRow, PlanId } from "@/types/pricing";

type Props = { row: FeatureRow; planId: PlanId };

function renderPriorityAccessOnNewLine(text: string) {
  const match = text.match(/^(.*)\s(\(priority access\))$/i);
  if (!match) return text;

  const main = match[1];
  const badge = match[2];

  return (
    <>
      <span className="whitespace-normal break-words">{main}</span>
      <br />
      <span className="whitespace-normal text-accent font-medium break-words">{badge}</span>
    </>
  );
}

export default function FeatureCell({ row, planId }: Props) {
  const v = row.values[planId];

  if (v.type === "empty") return <span className="text-accent-foreground">—</span>;

  if (v.type === "textParts") {
    return (
      <span className="text-sm md:text-base text-foreground whitespace-normal break-words">
        <span className="font-semibold">{v.amount}</span>{" "}
        <span className="font-normal">{v.suffix}</span>
      </span>
    );
  }

  if (v.type === "text") {
    return (
      <span className="text-sm md:text-base text-foreground whitespace-normal break-words">
        {renderPriorityAccessOnNewLine(v.value)}
      </span>
    );
  }

  return v.value ? (
    <span className="inline-flex items-center justify-center">
      <span className="inline-flex h-6 w-6 items-center justify-center">
        <img
          src="/check.svg"
          alt="Included"
          className="h-6 w-6"
          loading="lazy"
          draggable={false}
        />
      </span>
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="text-accent-foreground">—</span>
  );
}
