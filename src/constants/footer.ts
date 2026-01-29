import { FooterSection } from "@/types/footer";

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Models", to: "/models" },
      { label: "Changelog", to: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "/docs" },
      { label: "API", to: "/api" },
      { label: "Blog", to: "/blog" },
      { label: "Community", to: "/community" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Contact", to: "/contact" },
      { label: "Status", to: "/status" },
      { label: "Discord", to: "/discord", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy-policy" },
      { label: "Terms", to: "/terms-condition" },
      { label: "Security", to: "/security" },
      { label: "Cookies", to: "/cookies" },
    ],
  },
];
