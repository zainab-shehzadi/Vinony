import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { VINONY_FAQS, type FaqItem } from "@/constants/faq";
import SectionHeading from "../common/SectionHeading";

type Props = {
  items?: FaqItem[];
  defaultOpenId?: string;
};

function Icon({ open }: { open: boolean }) {
  return (
    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center text-primary">
      {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
    </span>
  );
}

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = React.useState<number>(0);

  // Measure height whenever open state changes or content changes
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isOpen) {
      // set to the real content height
      setHeight(el.scrollHeight);
    } else {
      // collapse
      setHeight(0);
    }
  }, [isOpen, item.answer]);

  // Keep height correct on resize (mobile rotate etc.)
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      if (isOpen) setHeight(el.scrollHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  const btnId = `faq-btn-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <div className="border-b border-[#6060606B] py-4 md:py-7">
      <button
        id={btnId}
        type="button"
        onClick={onToggle}
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

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="pl-6 pr-12 lg:max-w-4xl"
        style={{
          height,
          overflow: "hidden",
          transition: "height 320ms ease, opacity 220ms ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "text-sm md:text-lg lg:text-[18px] font-medium leading-7",
            isOpen ? "pt-4" : "pt-0"
          )}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function VinonyFaq({ items = VINONY_FAQS, defaultOpenId }: Props) {
  if (!items.length) return null;

  const firstId = items[0]?.id ?? "";
  const initial = defaultOpenId ?? firstId;

  const [openId, setOpenId] = React.useState<string>(initial);

  const toggle = React.useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  }, []);

  return (
    <section>
      <div className="pt-8 md:pt-14 lg:pt-16">
        <SectionHeading eyebrow="Vinony Related Questions" title="Frequently Asked Questions" />

        <div className="mt-6 lg:mt-10 xl:mt-24" role="region" aria-label="Frequently asked questions">
          {items.map((item) => (
            <FaqRow
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
