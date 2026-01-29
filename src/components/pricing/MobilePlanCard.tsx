import { BillingCycle, FeatureRow, Plan } from "@/types/pricing";
import MobilePlanFeatures from "./MobilePlanFeatures";
import PricingButton from "./PricingButton";
import { cn } from "@/lib/utils";
import { formatPriceUSD } from "@/lib/formatters";

export function MobilePlanCard({
  plan,
  cycle,
  selected,
  onSelect,
  features,
}: {
  plan: Plan;
  cycle: BillingCycle;
  selected: boolean;
  onSelect: () => void;
  features: FeatureRow[];
}) {
  const isMonthly = cycle === "monthly";
  const displayPrice = plan.price[cycle];
  const suffix = isMonthly ? "/Month" : "/Year";

  return (
    <div
      className={cn(
        "border border-border rounded-2xl transition-colors",
        selected ? "bg-primary/20 dark:bg-primary/20" : "bg-gray-100 dark:bg-card"
      )}
    >
      <div className="border-b border-border p-4 md:p-6">
        <div className="text-2xl md:text-3xl font-bold text-primary">{plan.name}</div>

        <div className="mt-2 flex items-end gap-1">
          <div className="text-2xl lg:text-3xl font-extrabold text-foreground">
            {formatPriceUSD(displayPrice)}
          </div>
          <div className="pb-1 text-xs lg:text-base text-[#858BA0]">{suffix}</div>
        </div>

        <div className="mt-4">
          <PricingButton selected={selected} onClick={onSelect}>
            {plan.ctaLabel ?? "Choose This Plan"}
          </PricingButton>
        </div>
      </div>

      <MobilePlanFeatures features={features} planId={plan.id} />
    </div>
  );
}

