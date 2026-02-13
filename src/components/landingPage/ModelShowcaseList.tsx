import type { ModelShowcaseItem } from "@/types/modelShowcase";
import ModelShowcaseSection from "./ModelShowcaseSection";

type Props = {
  items: ModelShowcaseItem[];
  onExplore?: (id: string) => void;
};

export default function ModelShowcaseList({ items, onExplore }: Props) {
  return (
     <div className="space-y-10 md:space-y-14 overflow-visible pb-8">
      {items.map((item, idx) => (
        <ModelShowcaseSection
          key={item.id}
          item={item}
          reverse={idx % 2 === 1}
          onExplore={onExplore}
        />
      ))}
    </div>
  );
}
