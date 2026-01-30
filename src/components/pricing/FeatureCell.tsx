"use client";
import type { FeatureRow, PlanId } from "@/types/pricing";

type Props = { row: FeatureRow; planId: PlanId };

export default function FeatureCell({ row, planId }: Props) {
const v = row.values[planId];

  if (v.type === "empty") return <span className="text-accent-foreground">—</span>;

 if (v.type === "textParts") {
  return (
    <span className="text-sm md:text-base text-foreground">
      <span className="font-semibold">{v.amount}</span>{" "}
      <span className="font-normal">{v.suffix}</span>
    </span>
  );
}

if (v.type === "text") {
  return <span className="text-sm md:text-base text-foreground">{v.value}</span>;
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
