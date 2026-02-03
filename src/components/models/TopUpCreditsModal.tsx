import { useEffect } from "react";
import { X } from "lucide-react";
import TopUpPacksSection from "./TopUpPacksSection";

export type PlanProps = {
  name: string;
  cycle: string;
  cost: string;
};

type Pack = {
  id: string;
  title: string;
  subtitle: string;
  credits: number;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packs?: Pack[];
  onBuyCredits: (packId: string) => void | Promise<void>;
  loadingPackId?: string | null;
  plan: PlanProps;
};

const defaultPacks: Pack[] = [
  { id: "starter", title: "Starter Pack", subtitle: "Best for Quick tasks", credits: 500 },
  { id: "popular", title: "Popular Pack", subtitle: "Best for Quick tasks", credits: 1500 },
  { id: "power", title: "Power Pack", subtitle: "Best Value", credits: 4000 },
];

export default function TopUpCreditsModal({
  open,
  onOpenChange,
  packs = defaultPacks,
  onBuyCredits,
  loadingPackId = null,
  plan,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
    className="fixed inset-0 z-50"
    role="dialog"
    aria-modal="true"
    onClick={() => onOpenChange(false)}
  >
    <div className="absolute inset-0 bg-black/80" />

    <div className="relative flex min-h-[100dvh] items-center justify-center px-4 py-8">
      <div
        onClick={(e) => e.stopPropagation()}
        className={[
          "w-[660px] h-[834px] rounded-2xl bg-background shadow-2xl relative",
          "max-w-[calc(100vw-32px)] max-h-[calc(100dvh-32px)] overflow-hidden",
          "border border-white/10 ring-1 ring-white/5",
        ].join(" ")}
      >
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-[#FF4D4D] text-white shadow-sm hover:opacity-90 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className={[
              "h-full overflow-y-auto px-4 pt-3 pb-4 md:px-10 md:pt-6 md:pb-4",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            ].join(" ")}
          >
            <h1 className="text-center text-2xl md:text-[30px] font-semibold text-foreground tracking-tight mt-2">
              Top up your account
            </h1>

            <div className="mt-8">
              <h2 className="text-sm md:text-base lg:text-[20px] font-semibold text-foreground">
                Current Plan Summary
              </h2>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="space-y-2 lg:space-y-4">
                  <p className="text-[11px] md:text-[14px] uppercase tracking-wide font-medium text-accent">
                    Plan Name
                  </p>
                  <p className="text-sm md:text-[16px] font-semibold text-foreground">
                    {plan.name}
                  </p>
                </div>

                <div className="space-y-2 lg:space-y-4">
                  <p className="text-[11px] md:text-[14px] uppercase tracking-wide font-medium text-accent">
                    Billing Cycle
                  </p>
                  <p className="text-sm md:text-[16px] font-semibold text-foreground">
                    {plan.cycle}
                  </p>
                </div>

                <div className="space-y-2 lg:space-y-4 sm:col-span-2 lg:col-span-1 lg:text-right">
                  <p className="text-[11px] md:text-[14px] uppercase tracking-wide font-medium text-accent">
                    Plan Cost
                  </p>
                  <p className="text-sm md:text-[16px] font-semibold text-foreground">
                    {plan.cost}
                  </p>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm md:text-[16px] font-semibold text-foreground">
                    Available Credits
                  </p>
                  <p className="mt-1 lg:mt-2 text-[14px] text-gray-400">
                    Subscription credit reset monthly. Top Up credit expires monthly.
                  </p>
                </div>

                <p className="shrink-0 text-sm md:text-[16px] font-medium text-gray-400 text-right">
                  86 credits
                </p>
              </div>

              <div className="mt-4 border-t border-white/10" />
            </div>

            <TopUpPacksSection
              packs={packs}
              loadingPackId={loadingPackId}
              onBuyCredits={onBuyCredits}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
