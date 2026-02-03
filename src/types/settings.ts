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


export type BillingInfoModel = {
  username: string;
  email: string;
  countryName: string;
  phoneCountry: CountryCode;
  phone: string;
  plan: string;
  subscription: string;
};

import { z } from "zod";

export const profileSchema = z.object({
  username: z.string().min(2, "Username is too short").max(50, "Username is too long"),
  country: z.custom<CountryCode>(),
  phone: z.string().max(30).optional(),
  notifications: z.object({
    email: z.boolean(),
    credits: z.boolean(),
    subscription: z.boolean(),
  }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;