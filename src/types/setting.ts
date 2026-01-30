export type SettingsTabId = "profile" | "subscription" | "payment" | "account";

export type NotificationId = "email" | "credits" | "subscription";

export type NotificationSettings = Record<NotificationId, boolean>;

export type CountryCode = "GB" | "US" | "PK";

export type CountryOption = {
  code: CountryCode;
  label: string;
  flag: string;
  dialCode: string;
};

export type ProfileSettings = {
  username: string;
  country: CountryCode;
  phone: string;
  notifications: NotificationSettings;
  planLabel: string;
  avatarUrl?: string | null;
};

export type ProfileUpdatePayload = {
  username: string;
  country: CountryCode;
  phone: string;
  notifications: NotificationSettings;
  avatarFile?: File | null;
};
