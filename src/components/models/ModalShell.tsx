"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: React.ReactNode;
  description?: React.ReactNode;

  children: React.ReactNode;
  footer?: React.ReactNode;

  contentClassName?: string;
  bodyClassName?: string;

  showClose?: boolean;
  closeClassName?: string;
};

export default function ModalShell({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  contentClassName,
  bodyClassName,
  showClose = true,
  closeClassName,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",

          "w-[calc(100vw-2rem)] sm:w-[530px] sm:max-w-[530px]",

          "max-h-[calc(100dvh-2rem)]",

          " overflow-hidden rounded-2xl bg-background shadow-lg",

          "[&>button[aria-label='Close']]:hidden",

          contentClassName
        )}
      >
        {showClose ? (
          <DialogClose asChild>
            <button
              type="button"
              aria-label="Close modal"
              className={cn(
                "absolute right-3 top-3 sm:right-5 sm:top-5 z-10",
                "flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full",
                "bg-destructive text-white shadow-md",
                "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                closeClassName
              )}
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </DialogClose>
        ) : null}

        {/* ✅ Content scroll only if needed */}
        <div className={cn("max-h-[calc(100dvh-2rem)] overflow-y-auto", bodyClassName)}>
          <div className="p-0 md:p-6">
            {title ? (
              <DialogTitle className="text-center text-xl sm:text-2xl font-bold text-foreground">
                {title}
              </DialogTitle>
            ) : null}

            {description ? (
              <DialogDescription className="mt-4 text-center text-sm sm:text-base font-semibold text-muted-foreground/80">
                {description}
              </DialogDescription>
            ) : null}

            <div className={cn(title || description ? "mt-6" : "mt-0")}>
              {children}
            </div>

            {footer ? <div className="mt-6">{footer}</div> : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
