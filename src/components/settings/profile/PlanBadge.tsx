import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlanBadge({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full btn-gradient px-4 py-2 md:py-3 text-sm font-semibold text-primary-foreground  ",
        className
      )}
    >
      <Star className="h-4 w-4" />
      {label}
    </div>
  );
}
