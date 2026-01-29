"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
};

export default function PricingButton({
  children,
  onClick,
  disabled,
  selected,
  className,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    e.currentTarget.blur();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "inline-flex h-10 lg:h-12 xl:h-14 w-full items-center justify-center rounded-lg px-4 text-sm lg:text-base xl:text-lg font-semibold transition",
        "border border-border",
        "btn-gradient text-primary-foreground",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      aria-pressed={selected ? "true" : "false"}
    >
      {children}
    </button>
  );
}
