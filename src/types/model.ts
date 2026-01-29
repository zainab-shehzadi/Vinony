export type ModelCategory = "chat" | "image" | "video" | "agents";

export type ModelCardData = {
  id: string;
  slug: string;
  title: string;
  provider: string;

  credits: number;
  creditsUnit: string;
  description: string;


  tagline?: string;          // short line under provider
  about?: string[];          // paragraphs
  characteristics?: string[];// bullets

  tags: { id: string; label: string }[];
  ctaLabel?: string;
  category: ModelCategory;
};

// src/components/models/detail/types.ts
export type ModelDetail = {
  id: string;
  slug: string;
  title: string;
  provider: string;
  description: string;
  tagline?: string;
  ctaLabel?: string;
  about?: string[];
  characteristics?: string[];
};
