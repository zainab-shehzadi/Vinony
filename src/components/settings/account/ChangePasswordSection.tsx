"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import PasswordInputField from "./PasswordInputField";
import AccountHeader from "./AccountHeader";
import FormActions from "../formAction";

const schema = z
  .object({
    currentPassword: z
      .string()
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[a-z]/, "Include at least one lowercase letter")
      .regex(/[0-9]/, "Include at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Include at least one special character (@, #, $, etc.)",
      )
      .min(8, "Minimum 8 characters"),
    newPassword: z
      .string()
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[a-z]/, "Include at least one lowercase letter")
      .regex(/[0-9]/, "Include at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Include at least one special character (@, #, $, etc.)",
      )
      .min(8, "Minimum 8 characters"),
    confirmPassword: z
      .string()
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[a-z]/, "Include at least one lowercase letter")
      .regex(/[0-9]/, "Include at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Include at least one special character (@, #, $, etc.)",
      )
      .min(8, "Minimum 8 characters"),
  })
  .refine((v) => v.newPassword === v.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function ChangePasswordSection() {
  const [open, setOpen] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (values: FormValues) => {
    setSaving(true);
    try {
      // TODO: API call
      console.log("Change password:", values);
      await new Promise((r) => setTimeout(r, 700));
      form.reset();
    } finally {
      setSaving(false);
    }
  };

  const onCancel = () => form.reset();

  return (
    <div className="pt-2 md:pt-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <AccountHeader
          title="Change Password"
          subtitle="Please update your account Password here"
        />

        <ChevronDown
          className={cn(
            "h-5 w-5 lg:h-8 md:w-8 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <PasswordInputField
            label="Current Password"
            placeholder="8+ characters"
            autoComplete="current-password"
            {...form.register("currentPassword")}
            error={form.formState.errors.currentPassword?.message}
          />

          <PasswordInputField
            label="New Password"
            placeholder="8+ characters"
            autoComplete="new-password"
            {...form.register("newPassword")}
            error={form.formState.errors.newPassword?.message}
          />

          <PasswordInputField
            label="Confirm Password"
            placeholder="8+ characters"
            autoComplete="new-password"
            {...form.register("confirmPassword")}
            error={form.formState.errors.confirmPassword?.message}
          />

          <div className="pt-2">
            <FormActions
              saving={saving}
              onCancel={onCancel}
              saveText="Change Password"
              savingText="changing"
            />
          </div>
        </form>
      ) : null}
    </div>
  );
}
