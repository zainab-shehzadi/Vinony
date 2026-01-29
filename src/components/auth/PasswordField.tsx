import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

const PasswordField = React.forwardRef<HTMLInputElement, Props>(
  ({ error, className, placeholder, ...props }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
      <div className="space-y-1">
        <div className="relative">
          <Input
            ref={ref}
            {...props}
            type={show ? "text" : "password"}
            placeholder={placeholder ?? "Enter new password"}
            className={cn(
              "auth-input pr-10 placeholder:text-sm",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShow((s) => !s)}
            className={cn(
              "absolute right-1 top-1/2 -translate-y-1/2",
              "text-muted-foreground hover:text-foreground",
              "dark:text-white dark:hover:text-white",
              "hover:bg-transparent focus-visible:ring-0"
            )}
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
          >
            {show ? <EyeOff size={24} /> : <Eye size={24} />}
          </Button>
        </div>

        {error ? <p className="text-xs text-red-600">{error}</p> : null}
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";
export default PasswordField;