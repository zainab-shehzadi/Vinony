import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function SettingsRow({ label, children, className }: Props) {
  return (
    <div className={cn("grid grid-cols-12 items-start gap-2 sm:gap-6 py-4 md:py-6", className)}>
      <div className="col-span-12 md:col-span-4">
        <p className="text-[14px] md:text-[16px] font-semibold text-foreground">
          {label}
        </p>
      </div>
      <div className="col-span-12 md:col-span-8">{children}</div>
    </div>
  );
}
