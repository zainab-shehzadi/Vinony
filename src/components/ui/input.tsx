import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          [
            "flex h-12 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

            "bg-background border-input text-foreground",

            "dark:bg-white/5 dark:border-white/10",
            "dark:focus-visible:ring-primary/40 dark:focus-visible:border-primary/40",
          ].join(" "),
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
