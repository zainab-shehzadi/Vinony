import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type FormActionsProps = {
  saving?: boolean;
  onCancel: () => void;
  saveText?: string; 
  savingText?: string; 
  saveClassName?: string;
  className?: string;
  disableCancel?: boolean;
  leftSlot?: React.ReactNode;
};

export default function FormActions({
  saving = false,
  onCancel,
  saveText = "Save",
  savingText = "Saving...",
  saveClassName,
  className,
  disableCancel,
  leftSlot,
}: FormActionsProps) {
  const cancelDisabled = disableCancel ?? saving;

  return (
    <div className={cn("mb-6 flex items-center justify-end gap-3", className)}>
      {leftSlot}

      <Button
        type="button"
        onClick={onCancel}
        disabled={cancelDisabled}
        className="bg-[#F2F2F2] hover:bg-gray-200 text-foreground semibold p-4 dark:text-background dark:"
      >
        Cancel
      </Button>

      <Button
        type="submit"
        disabled={saving}
        className={cn("btn-gradient text-primary-foreground", saveClassName)}
      >
        {saving ? savingText : saveText}
      </Button>
    </div>
  );
}
