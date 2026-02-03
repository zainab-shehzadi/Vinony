import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function ProfileRow({ label, children, className }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 items-start gap-2 sm:gap-6 lg:gap-4 py-5 sm:py-6",
        className
      )}
    >
      <div className="col-span-12 md:col-span-4">
        <p className="text-[16px] font-bold text-foreground">{label}</p>
      </div>
      <div className="col-span-12 md:col-span-8">{children}</div>
    </div>
  );
}
