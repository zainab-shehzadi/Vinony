import type * as React from "react";

export type InlineBadge = {
  id: string;
  label?: string; // e.g. "T"
  avatarSrc?: string; // optional image
  alt?: string;
};

export type HeroAction =
  | {
      type: "button";
      label: string;
      onClick?: () => void;
      href?: string; // if provided, render <a>
    }
  | null;

export type SegmentedOption = {
  id: string;
  label: string;
  badge?: string; // e.g. "20% OFF"
};

export type SegmentedControlProps = {
  value: string;
  onChange: (id: string) => void;
  options: SegmentedOption[];
};

export type TabsOption = {
  id: string;
  label: string;
};

export type TabsWithSearchProps = {
  tabs: TabsOption[];
  activeTab: string;
  onTabChange: (id: string) => void;
  searchValue: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder?: string;
};

export type HighlightPart =
  | { type: "text"; value: string }
  | { type: "highlight"; value: string; badges?: InlineBadge[] };
export type HeroVariant = "heroA" | "heroB" | "heroC";

export type SectionHeroProps = {
  eyebrow?: string;
  titleParts: HighlightPart[]; // lets you highlight any words
  subtitle?: React.ReactNode;
  variant?: HeroVariant;

  action?: HeroAction; // button
  segmented?: SegmentedControlProps; // Monthly/Yearly
  tabsWithSearch?: TabsWithSearchProps; // All/Chat/Image/... + search

  titleClassName?: string;
  subtitleClassName?: string;
  actionWrapClassName?: string;
  containerClassName?: string;
  align?: "center" | "left";
  className?: string;
};
