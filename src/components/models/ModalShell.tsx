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
          "w-[calc(100vw-2rem)] sm:w-[530px]",
          "max-h-[calc(100dvh-2rem)]",

          "overflow-visible p-0 border border-border shadow-lg",

          "[&>button[aria-label='Close']]:hidden rounded-2xl",

          contentClassName
        )}
      >
        {/* Inner wrapper handles rounded + clipping */}
        <div className="relative rounded-2xl bg-background overflow-hidden">
          {showClose ? (
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Close modal"
                className={cn(
                  "absolute right-4 top-4 z-50 grid h-8 w-8 place-items-center rounded-full bg-[#FF4D4D] text-white shadow-sm hover:opacity-90 transition",
                  closeClassName
                )}
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </DialogClose>
          ) : null}

          {/* Scroll area (you can hide scrollbar here if you want) */}
          <div
            className={cn(
              "max-h-[calc(100dvh-2rem)] overflow-y-auto",
              // optional: hide scrollbar but keep scroll
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              bodyClassName
            )}
          >
            <div className="p-4 md:p-10">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
