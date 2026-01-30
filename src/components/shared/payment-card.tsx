import { Ellipsis, Plus } from "lucide-react";
import { cards } from "@/constants/static-data";

export default function PaymentMethods() {
  return (
    <div className="w-full rounded-3xl p-6 md:p-8 bg-input border border-border/50">
      <h3 className="text-[12px] md:text-sm font-semibold text-foreground mb-6">
        Payment Methods
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
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
                  <span className="px-2 py-0.5 bg-[#E8F8EE] text-[#71DD8C] text-[12px] font-normal rounded-xl uppercase tracking-tight">
                    Active
                  </span>
                )}
              </div>
              <button className="text-muted-foreground/50 hover:text-foreground transition-colors">
                <Ellipsis size={20} />
              </button>
            </div>

            <div className="flex-grow flex items-center">
              <p className="text-sm font-medium text-foreground tracking-[0.02em]">
                {card.number}
              </p>
            </div>

            <div className="mt-auto pt-2">
              <div className="flex justify-between items-center gap-2">
                <p className="text-[12px] font-normal text-accent leading-none">
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

      <button className="w-full mt-6 border-2 border-dashed border-border rounded-lg py-4 flex items-center justify-center gap-2 text-foreground font-bold text-sm hover:bg-background/50 hover:border-primary/50 transition-all group">
        <Plus
          size={18}
          className="text-accent group-hover:text-primary"
        />
        Add card
      </button>
    </div>
  );
}
