import { z } from "zod";
import type { CountryCode } from "@/types/setting";

export const billingEditSchema = z.object({
  username: z.string().min(2, "Username is too short").max(50, "Username is too long"),
  phoneCountry: z.custom<CountryCode>(),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^[0-9]*$/, "Phone number must contain only digits"),
  countryName: z.string().min(2, "Country is required"),
  email: z.string().email("Invalid email"),
  plan: z.string().min(1),
});

export type BillingEditValues = z.infer<typeof billingEditSchema>;
