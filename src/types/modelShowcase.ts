export type ShowcaseFeature = {
  id: string;
  text: string;
};

export type ModelShowcaseItem = {
  id: string;
  title: string;
  description: string;
  features: ShowcaseFeature[];
  ctaLabel?: string;
  imageSrc: string; // can be /public path or imported asset
  imageAlt?: string;
};
