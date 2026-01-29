import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z.string().trim().email("Invalid email address"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || v.length >= 7, "Phone number is too short"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type ContactSchemaValues = z.infer<typeof contactSchema>;
