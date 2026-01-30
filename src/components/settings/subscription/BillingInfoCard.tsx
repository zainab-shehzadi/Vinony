"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type BillingInfoItem = {
  label: string;
  value: React.ReactNode;
  tone?: "primary" | "muted" | "default";
};

function ValueText({
  tone = "default",
  children,
}: {
  tone?: BillingInfoItem["tone"];
  children: React.ReactNode;
}) {
  const cls =
    tone === "primary"
      ? "text-[#25396F]"
      : tone === "muted"
        ? "text-muted-foreground"
        : "text-foreground";

  return <p className={cn("text-[14px] md:text-[18px]", cls)}>{children}</p>;
}

export function BillingInfoField({ label, value, tone }: BillingInfoItem) {
  return (
    <div className="space-y-2 md:space-y-4">
      <p className="text-[14px] md:text-[18px] font-bold text-foreground ">
        {label}
      </p>
      <ValueText tone={tone}>{value}</ValueText>
    </div>
  );
}

type Props = {
  title?: string;
  left: BillingInfoItem[];
  right: BillingInfoItem[];

  onEdit?: () => void;
  editLabel?: string;

  className?: string;
};

export default function BillingInfoCard({
  title = "Billing Info",
  left,
  right,
  onEdit,
  editLabel = "Edit Info",
  className,
}: Props) {
  return (
    <section className={cn("w-full", className)}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[16px] text-[20px] font-bold text-foreground">
          {title}
        </h2>

        {onEdit ? (
          <Button
            type="button"
            onClick={onEdit}
            className="h-10 rounded-lg px-5 text-sm font-semibold btn-gradient text-primary-foreground hover:opacity-90"
          >
            {editLabel}
          </Button>
        ) : null}
      </div>

      {/* Body */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-24">
        <div className="space-y-8 md:space-y-10">
          {left.map((it, i) => (
            <BillingInfoField key={`${it.label}-${i}`} {...it} />
          ))}
        </div>

        <div className="space-y-8 md:space-y-10">
          {right.map((it, i) => (
            <BillingInfoField key={`${it.label}-${i}`} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
