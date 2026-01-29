import { cn } from "@/lib/utils";
import { GuaranteeItem, Props } from "@/types/landingPage";

export function CircleIcon({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto grid place-items-center btn-gradient dark:bg-[#31273F] text-white  shadow-sm",
        "w-[91.79px] h-[91.79px] rounded-full", 
        className
      )}
    >
      {children}
    </div>
  );
}

export const GUARANTEE_ITEMS: GuaranteeItem[] = [
  {
    id: "no-risk",
    title: "100% No-Risk, Money\nBack Guarantee!",
    description: "Refunds will be issued within period of 14\ndays from the purchase date",
    iconSrc: "/risk.svg",
    iconAlt: "No risk",
  },
  {
    id: "upgrade-cancel",
    title: "Upgrade or Cancel\nAnytime",
    description: "Passages there are many variations\nvariations of of Lorem Ipsum available",
    iconSrc: "/upgrade.svg",
    iconAlt: "Upgrade or cancel",
  },
  {
    id: "free-version",
    title: "Not sure yet, try the free\nversion",
    description: "Refunds will be issued within period of 14\ndays from the purchase date",
    iconSrc: "/free.svg",
    iconAlt: "Free version",
  },
];
