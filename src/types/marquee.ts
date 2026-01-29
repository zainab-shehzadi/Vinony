export type MarqueeItem = {
  id: string;
  label: string;
};

export type ModelsMarqueeProps = {
  eyebrow?: string;
  title?: string;

  items: MarqueeItem[];

  defaultActiveId?: string;

  activeId?: string;

  onSelect?: (item: MarqueeItem) => void;

  speedSeconds?: number;

  pauseOnHover?: boolean;
  className?: string;
};
