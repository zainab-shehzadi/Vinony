"use client";

import type { FeatureRow, PlanId } from "@/types/pricing";

type Props = { row: FeatureRow; planId: PlanId };

const PRIORITY_TEXT = "(priority access)";

export default function FeatureCell({ row, planId }: Props) {
  const v = row.values[planId];

  if (v.type === "empty") return <span className="text-accent-foreground">—</span>;

  const isUnlimited = planId === "unlimited";

  if (v.type === "textParts") {
    return (
      <span className="inline-flex flex-col leading-tight text-sm md:text-base text-foreground">
        <span className="font-semibold">{v.amount}</span>
        {v.suffix ? <span className="font-normal">{v.suffix}</span> : null}
      </span>
    );
  }

  if (v.type === "text") {
    const raw = String(v.value ?? "");
    const isModelsRow =
      (row as any).id === "models" ||
      (row as any).key === "models" ||
      raw.toLowerCase().includes("models");

    const shouldShowPriority = isUnlimited && isModelsRow;

    // if it already contains the note, split it
    if (raw.includes(PRIORITY_TEXT)) {
      const main = raw.replace(PRIORITY_TEXT, "").trim();
      return (
        <span className="inline-flex flex-col leading-tight text-sm md:text-base">
          <span className="text-foreground">{main}</span>
          <span className="text-muted-foreground">{PRIORITY_TEXT}</span>
        </span>
      );
    }

    if (shouldShowPriority) {
      return (
        <span className="inline-flex flex-col leading-tight text-sm md:text-base">
          <span className="text-foreground">{raw}</span>
          <span className="text-muted-foreground">{PRIORITY_TEXT}</span>
        </span>
      );
    }

    return <span className="text-sm md:text-base text-foreground">{raw}</span>;
  }

  return v.value ? (
    <span className="inline-flex items-center justify-center">
      <span className="inline-flex h-6 w-6 items-center justify-center">
        <img src="/check.svg" alt="Included" className="h-6 w-6" loading="lazy" draggable={false} />
      </span>
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="text-accent-foreground">—</span>
  );
}