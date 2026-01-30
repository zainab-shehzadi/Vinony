import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ActionRowVariant = "primary" | "danger-outline";

type ActionRowProps = {
  title: string;

  buttonText?: string;
  onClick: () => void;

  loading?: boolean;
  loadingText?: string;

  variant?: ActionRowVariant;

  /** show the thin divider above row */
  withDivider?: boolean;

  className?: string;
};

export default function AccountAction({
  title,
  buttonText = "Save",
  onClick,
  loading = false,
  loadingText = "Please wait...",
  variant = "primary",
  withDivider = false,
  className,
}: ActionRowProps) {
  const isDanger = variant === "danger-outline";

  return (
    <div className={cn("w-full", className)}>
      {withDivider ? <div className="mb-6 h-px w-full bg-border" /> : null}

      <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-[16px] font-bold text-foreground">{title}</p>

        <Button
          type="button"
          onClick={onClick}
          disabled={loading}
          className={cn(
            "h-10 rounded-md px-5",
            "w-full sm:w-auto", // ✅ responsive: full width on mobile
            isDanger
              ? "border border-destructive bg-transparent text-destructive hover:bg-destructive/10"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {loading ? loadingText : buttonText}
        </Button>
      </div>
    </div>
  );
}
