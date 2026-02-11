import { Ellipsis, Plus } from "lucide-react";
import { cards } from "@/constants/static-data";
import { useState } from "react";

export default function PaymentMethods({
  setCardActive,
}: {
  setCardActive: (value: boolean) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  return (
    <div className="w-full rounded-3xl p-4 md:p-8 bg-input border border-border/50">
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-6">
        Payment Methods
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="bg-background rounded-2xl p-6 shadow-sm border border-border/40 flex flex-col h-[200px] relative group"
          >
            <div className="flex items-center justify-between mb-auto">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-foreground leading-none">
                  {card.name}
                </p>
                {card.active && (
                  <span className="px-2 py-0.5 bg-[#E8F8EE] dark:bg-[#182542] text-[#71DD8C] text-xs font-normal rounded-xl uppercase tracking-tight">
                    Active
                  </span>
                )}
              </div>
              <button
                className="text-muted-foreground/50 hover:text-foreground transition-colors"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                <Ellipsis size={20} />
              </button>
              {openDropdown === index && (
                <div className="absolute right-0 mt-2 w-32 bg-input border border-border rounded-md shadow-lg z-50 overflow-hidden">
                  <button
                    onClick={()=> setOpenDropdown(null)}
                    className="w-full px-4 py-2 text-sm text-left hover:text-muted-foreground hover:bg-hover transition-colors"
                  >
                    Remove Card
                  </button>
                </div>
              )}
            </div>

            <div className="flex-grow flex items-center">
              <p className="text-sm font-medium text-foreground tracking-[0.02em]">
                {card.number}
              </p>
            </div>

            <div className="mt-auto pt-2">
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs font-normal text-accent leading-none">
                  Exp {card.exp}
                </p>
                <div className="h-10 w-12 flex items-center justify-end pb-1">
                  <img
                    src={card.icon}
                    alt={card.type}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {card.active ? (
                <button className="px-4 py-1.5 bg-input text-sm font-normal text-foreground rounded-lg hover:bg-accent/10 transition-all w-fit">
                  Edit
                </button>
              ) : (
                <div className="h-[28px]" />
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-6 border-2 border-dashed border-border rounded-lg py-4 flex items-center justify-center gap-2 text-foreground font-bold text-sm hover:bg-background/50 hover:border-primary/50 transition-all group"
        onClick={() => setCardActive(true)}
      >
        <Plus size={18} className="text-accent group-hover:text-primary" />
        Add card
      </button>
    </div>
  );
}
