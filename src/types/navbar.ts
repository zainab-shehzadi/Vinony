export type NavItem = {
  key: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const NAV: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "tools", label: "Tools", href: "/ai-models", hasDropdown: true },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];

export const HIDE_GET_STARTED_ON = new Set<string>([
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
]);
