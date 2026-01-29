export type FooterLink = {
  label: string;
  to: string;
  external?: boolean;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};
