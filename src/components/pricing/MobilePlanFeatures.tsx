"use client";

import type { FeatureRow, PlanId } from "@/types/pricing";
import FeatureCell from "./FeatureCell";

type Props = {
  features: FeatureRow[];
  planId: PlanId;
  className?: string;
};

export default function MobilePlanFeatures({ features, planId, className }: Props) {
  return (
    <div className={["divide-y divide-border", className ?? ""].join(" ")}>
      {features.map((row) => (
        <div key={row.id} className="flex items-start justify-between gap-4 p-2">
          <span className="text-sm md:text-base font-medium text-foreground">{row.label}</span>

          <div className="shrink-0 text-right">
            <FeatureCell row={row} planId={planId} />
          </div>
        </div>
      ))}
    </div>
  );
}
