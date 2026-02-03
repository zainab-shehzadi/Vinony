"use client";

import { Button } from "@/components/ui/button";
import ModalShell from "./ModalShell";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void | Promise<void>;
  loading?: boolean;
};

export default function CancelSubscriptionModal({
  open,
  onOpenChange,
  onConfirm,
  loading = false,
}: Props) {
  return (
    <ModalShell
      open={open}
      onOpenChange={onOpenChange}
      title="Cancel your subscription"
      description={
        <>
          You’re about to cancel your active subscription. You’ll continue to have access to all paid features until the end of your current billing period.
        </>
      }
    >
      <div className="space-y-4">
        <Button
          type="button"
          onClick={onConfirm}
          disabled={loading}
          className="h-12 w-full rounded-lg bg-[#FF5555] text-destructive-foreground hover:bg-destructive/90"
        >
          {loading ? "Canceling..." : "Yes, Cancel"}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => onOpenChange(false)}
          disabled={loading}
          className="h-12 w-full rounded-lg border-destructive text-foreground hover:bg-destructive/5 hover:text-fooreground"
        >
          Cancel
        </Button>
      </div>
    </ModalShell>
  );
}
