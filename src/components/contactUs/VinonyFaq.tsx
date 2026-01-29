"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { VINONY_FAQS, type FaqItem } from "@/constants/faq";
import SectionHeading from "../common/SectionHeading";
import { cn } from "@/lib/utils";

type Props = {
  items?: FaqItem[];
  defaultOpenId?: string;
};

function Icon({ open }: { open: boolean }) {
  return (
    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center text-primary">
      <span
        className={cn(
          "transition-transform duration-300 ease-in-out",
          open && "rotate-180"
        )}
      >
        {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </span>
    </span>
  );
}

export default function VinonyFaq({
  items = VINONY_FAQS,
  defaultOpenId,
}: Props) {
  const firstId = items[0]?.id ?? "";
  const initial = defaultOpenId ?? firstId;

  const [openId, setOpenId] = React.useState<string>(initial);

  const toggle = React.useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  }, []);

  if (!items.length) return null;

  return (
    <section>
      <div className="pt-6 md:pt-10 lg:pt-16">
        <SectionHeading
          eyebrow="Vinony Related Questions"
          title="Frequently Asked Questions"
        />

        <div
          className="mt-2 md:mt-6 xl:mt-24"
          role="region"
          aria-label="Frequently asked questions"
        >
          {items.map((item) => {
            const isOpen = openId === item.id;
            const btnId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className="border-b border-[#6060606B] py-7">
                <button
                  id={btnId}
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-[2px] bg-primary/60" />
                    <span className="text-base md:text-lg lg:text-[20px] font-semibold text-gray-900 dark:text-foreground">
                      {item.question}
                    </span>
                  </div>

                  <Icon open={isOpen} />
                </button>

                {/* ✅ Smooth open/close (auto height) */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div
                      className={cn(
                        "pl-6 pr-12 lg:max-w-4xl",
                        "text-sm md:text-lg lg:text-[18px] font-medium leading-7",
                        "transition-[opacity,transform,padding] duration-300 ease-in-out",
                        isOpen
                          ? "opacity-100 translate-y-0 pt-4"
                          : "opacity-0 -translate-y-1 pt-0"
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}