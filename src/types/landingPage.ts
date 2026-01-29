
export type GuaranteeItem = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt?: string;
};


export type Props = {
  children: React.ReactNode;
  className?: string;
};

export type ModelStatus = "active" | "free" | "paid";

export type ModelItem = {
  id: string;
  name: string;
  status: ModelStatus;
};

export type ModelsShowcaseContent = {
  heading: string;
  subheading: string;
  ctaLabel: string;
  onCta?: () => void;
  cardTitle: string;
};
export type CtaBannerContent = {
  title: string;
  subtitle: string;
  buttonLabel: string;

  backgroundImageSrc?: string;
  backgroundAlt?: string;
  darkBackgroundImageSrc?: string; 
  minHeight?: {
    base?: number; // px
    sm?: number;
    md?: number;
  };
};


export type GetStartedSectionProps = {
  eyebrow: string;
  title: React.ReactNode;

  description?: string;
  imageSrc?: string;
  imageAlt?: string;

  bestSuitedFor?: string[];

  className?: string;
  headingClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;

};
export type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt?: string;
};

export type TestimonialsSectionProps = {
  items?: TestimonialItem[];
  className?: string;
};
