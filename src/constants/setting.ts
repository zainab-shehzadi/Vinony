import { CountryOption, NotificationId, SettingsTabId } from "@/types/setting";

export const SETTINGS_TABS: Array<{ id: SettingsTabId; label: string; to: string }> = [
  { id: "profile", label: "Profile", to: "/settings/profile" },
  { id: "subscription", label: "Subscription", to: "/settings/subscription" },
  { id: "payment", label: "Payment", to: "/settings/payment" },
  { id: "account", label: "Account", to: "/settings/account" },
];

export const COUNTRIES: CountryOption[] = [
  { code: "GB", label: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "US", label: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "PK", label: "Pakistan", flag: "🇵🇰", dialCode: "+92" },
];

export const NOTIFICATIONS: Array<{
  id: NotificationId;
  title: string;
  description: string;
}> = [
  {
    id: "email",
    title: "Email Notification",
    description: "You will be notified when a new email arrives.",
  },
  {
    id: "credits",
    title: "Credits Notification",
    description: "You will be notified with notification when top up or running low on credits.",
  },
  {
    id: "subscription",
    title: "Subscription",
    description: "You will be notified when you subscribe to an account.",
  },
];

export const AVATAR_RULES = {
  maxBytes: 2 * 1024 * 1024,
  accept: ["image/jpeg", "image/png"],
  helperAllowed: "Allowed format",
  helperTypes: "JPG, JPEG, and PNG",
  helperMax: "Max file size",
  helperMaxValue: "2MB",
};
