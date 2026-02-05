"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Props = React.ComponentProps<typeof Input> & {
  label: string;
  error?: string;
};

export default function PasswordInputField({
  label,
  placeholder,
  error,
  className,
  ...props
}: Props) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="grid grid-cols-12 items-center gap-2 md:gap-4">
      <div className="col-span-12 md:col-span-4">
        <p className="text-14 md:text-[16px] font-bold text-foreground">{label}</p>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="relative max-w-[420px]">
          <Input
            {...props}
            type={show ? "text" : "password"}
            placeholder={placeholder}
            className={cn("h-11 pr-10 bg-background border-border", className, error && "border-destructive")}
          />

          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2  hover:text-foreground"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
      </div>
    </div>
  );
}
