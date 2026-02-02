"use client";

import { Button } from "@/components/ui/button";

export type Pack = {
  id: string;
  title: string;
  subtitle: string;
  credits: number;
};

type Props = {
  packs: Pack[];
  loadingPackId?: string | null;
  onBuyCredits: (packId: string) => void | Promise<void>;
};

export default function TopUpPacksSection({
  packs,
  loadingPackId = null,
  onBuyCredits,
}: Props) {
  return (
    <div className="mt-4 lg:mt-8 pb-4">
      <h2 className="text-sm md:text-base lg:text-[20px] font-semibold text-foreground">
        Choose A Top up Pack
      </h2>

      <div className="mt-5 space-y-5">
        {packs.map((pack) => {
          const isLoading = loadingPackId === pack.id;

          return (
            <div
              key={pack.id}
              className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-base md:text-lg lg:text-[24px] font-bold text-gradient">
                    {pack.title}
                  </p>
                  <p className="mt-1 text-xs md:text-[14px] text-accent">
                    {pack.subtitle}
                  </p>
                </div>

                <p className="shrink-0 text-sm md:text-[20px] font-medium text-foreground">
                  +{pack.credits} credits
                </p>
              </div>

              <Button
                type="button"
                onClick={() => onBuyCredits(pack.id)}
                disabled={isLoading}
                className="mt-2 md:mt-5 w-full h-8 md:h-11 rounded-sm md:rounded-xl btn-gradient text-[14px] md:text-[16px] font-semibold"
              >
                {isLoading ? "Processing..." : "Buy Credits"}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
