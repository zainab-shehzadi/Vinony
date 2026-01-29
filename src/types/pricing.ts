export type BillingCycle = "monthly" | "yearly";

export type PlanId = "basic" | "pro" | "unlimited";

export type Plan = {
  id: PlanId;
  name: string;
  tagline?: string; // e.g. "Most Popular"
  price: Record<BillingCycle, number>;
  ctaLabel?: string;
};

export type FeatureValue =
  | { type: "text"; value: string }
  | { type: "textParts"; amount: string; suffix: string } // ✅ NEW
  | { type: "bool"; value: boolean }
  | { type: "empty" };

export type FeatureRow = {
  id: string;
  label: string;
  values: Record<PlanId, FeatureValue>;
};
