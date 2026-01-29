
import type { ModelCardData } from "@/types/model";
import ModelCard from "./ModelCard";

type Props = {
  items: ModelCardData[];
  onTry?: (slug: string) => void;
};

export default function ModelGrid({ items, onTry }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {items.map((item) => (
        <ModelCard key={item.id} item={item} onTry={onTry} />
      ))}
    </div>
  );
}