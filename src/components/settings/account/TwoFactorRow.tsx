
"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";

export default function TwoFactorRow({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  const id = React.useId();

  return (
    <div className="py-4 md:py-6">
      <p className="text-16px] md:text-[20px] font-semibold text-foreground">
        Two-factor Authentication
      </p>

      <div className="mt-3 flex items-center gap-3">
        <Switch
          id={id}
          checked={value}
          onCheckedChange={onChange}
          className="
            data-[state=unchecked]:bg-accent/30
            data-[state=checked]:bg-gradient-to-r
            data-[state=checked]:from-[#805AF5]
            data-[state=checked]:to-[#CD99FF]
            [&>span]:bg-background
          "
        />

        <label
          htmlFor={id}
          className="cursor-pointer text-sm text-[16px] text-[#232323] dark:text-accent"
        >
          Enable or disable two factor authentication
        </label>
      </div>
    </div>
  );
}
