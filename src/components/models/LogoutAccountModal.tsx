"use client";

import { Button } from "@/components/ui/button";
import ModalShell from "./ModalShell";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void | Promise<void>;
  loading?: boolean;
};

export default function LogoutModal({
  open,
  onOpenChange,
  onConfirm,
  loading = false,
}: Props) {
  return (
    <ModalShell
      open={open}
      onOpenChange={onOpenChange}
      title="Logout your account"
      description={
        <>
          This action will log you out of your account and end the current session
          on this device. No data will be deleted, and you can log in again whenever
          you need access.
        </>
      }
    >
      <div className="space-y-4">
        <Button
          type="button"
          onClick={onConfirm}
          disabled={loading}
          className="h-12 w-full rounded-lg btn-gradient text-primary-foreground"
        >
          {loading ? "Logging out..." : "Yes, Logout"}
        </Button>

        {/* <Button
          type="button"
          variant="outline"
          onClick={() => onOpenChange(false)}
          disabled={loading}
          className="h-12 w-full rounded-lg border-border text-foreground hover:bg-muted"
        >
          Cancel
        </Button> */}
      </div>
    </ModalShell>
  );
}
