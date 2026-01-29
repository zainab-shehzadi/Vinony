import type { FeatureRow, Plan } from "@/types/pricing";

export const PRICING_PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: { monthly: 16.99, yearly: 16.99 * 12 * 0.8 }, 
    ctaLabel: "Choose This Plan",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Most Popular",
    price: { monthly: 24.99, yearly: 24.99 * 12 * 0.8 },
    ctaLabel: "Choose This Plan",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: { monthly: 54.99, yearly: 54.99 * 12 * 0.8 },
    ctaLabel: "Choose This Plan",
  },
];

export const PRICING_FEATURES: FeatureRow[] = [
  {
    id: "models",
    label: "Number of AI Models",
    values: {
      basic: { type: "text", value: "Limited models" },
      pro: { type: "text", value: "100+ models" },
      unlimited: { type: "text", value: "100+ models (priority access)" },
    },
  },
{
  id: "credits",
  label: "Monthly Credits",
  values: {
    basic: { type: "textParts", amount: "500", suffix: "credits / month" },
    pro: { type: "textParts", amount: "1,200", suffix: "credits / month" },
    unlimited: { type: "textParts", amount: "10,000", suffix: "credits / month" },
  },
},
  {
    id: "chat",
    label: "Chat with Multiple LLMs",
    values: {
      basic: { type: "bool", value: true },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "image",
    label: "Image Generation",
    values: {
      basic: { type: "bool", value: true },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "video",
    label: "Video Generation",
    values: {
      basic: { type: "empty" },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "agents",
    label: "AI Agents & Tools",
    values: {
      basic: { type: "empty" },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "advanced",
    label: "Advanced Model Access",
    values: {
      basic: { type: "empty" },
      pro: { type: "empty" },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "controls",
    label: "Customizable Usage & Controls",
    values: {
      basic: { type: "empty" },
      pro: { type: "empty" },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "storage",
    label: "Secure Data Storage",
    values: {
      basic: { type: "empty" },
      pro: { type: "empty" },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "support",
    label: "Email Support",
    values: {
      basic: { type: "empty" },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
  {
    id: "billing",
    label: "Account & Billing Management",
    values: {
      basic: { type: "bool", value: true },
      pro: { type: "bool", value: true },
      unlimited: { type: "bool", value: true },
    },
  },
];
