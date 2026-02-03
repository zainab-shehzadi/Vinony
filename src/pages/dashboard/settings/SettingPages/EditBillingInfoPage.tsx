"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SettingsTabs from "@/components/settings/SettingsTabs";
import AccountHeader from "@/components/settings/account/AccountHeader";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import PhoneField from "@/components/settings/profile/PhoneField";
import FormActions from "@/components/settings/formAction";
import type { CountryCode } from "@/types/setting";
import { billingEditSchema, BillingEditValues } from "@/components/validations/billing.schema";
import { BILLING_INFO_DEFAULT } from "@/constants/settings";
import SettingsRow from "@/components/settings/SettingsRow";
import WebContainer from "@/lib/webContainer";
import TopUpCreditsModal, { PlanProps } from "@/components/models/TopUpCreditsModal";

// ✅ import modal

export default function EditBillingInfoPage() {
  const navigate = useNavigate();

  const [saving, setSaving] = React.useState(false);

  // ✅ modal state
  const [topUpOpen, setTopUpOpen] = React.useState(false);
  const [loadingPackId, setLoadingPackId] = React.useState<string | null>(null);

  const form = useForm<BillingEditValues>({
    resolver: zodResolver(billingEditSchema),
    defaultValues: {
      username: BILLING_INFO_DEFAULT.username,
      phoneCountry: BILLING_INFO_DEFAULT.phoneCountry,
      phone: BILLING_INFO_DEFAULT.phone,
      countryName: BILLING_INFO_DEFAULT.countryName,
      email: BILLING_INFO_DEFAULT.email,
      plan: BILLING_INFO_DEFAULT.plan,
    },
    mode: "onChange",
  });

  const phoneCountry = form.watch("phoneCountry") as CountryCode;
  const phone = form.watch("phone") ?? "";

  const planSummary: PlanProps = React.useMemo(
    () => ({
      name: form.watch("plan") || "Free Plan",
      cycle: "Monthly",
      cost: "$0",
    }),
    [form]
  );

  const onSubmit = async (values: BillingEditValues) => {
    setSaving(true);
    try {
      console.log("Billing Edit Submit:", values);
      await new Promise((r) => setTimeout(r, 700));
      navigate("/settings/subscription");
    } finally {
      setSaving(false);
    }
  };

  const onCancel = () => {
    form.reset({
      username: BILLING_INFO_DEFAULT.username,
      phoneCountry: BILLING_INFO_DEFAULT.phoneCountry,
      phone: BILLING_INFO_DEFAULT.phone,
      countryName: BILLING_INFO_DEFAULT.countryName,
      email: BILLING_INFO_DEFAULT.email,
      plan: BILLING_INFO_DEFAULT.plan,
    });
    navigate("/settings/subscription");
  };

  // ✅ open modal on upgrade
  const onUpgradePlan = () => {
    setTopUpOpen(true);
  };

  // ✅ handle buy credits
  const onBuyCredits = async (packId: string) => {
    setLoadingPackId(packId);
    try {
      // TODO: call API / stripe checkout
      console.log("Buy credits pack:", packId);

      await new Promise((r) => setTimeout(r, 700));

      // optional: close modal after success
      setTopUpOpen(false);
    } finally {
      setLoadingPackId(null);
    }
  };

  return (
    <WebContainer>
      <div className="w-full space-y-8">
        <SettingsTabs />

        <div className="w-full">
          <AccountHeader title="Edit Info" subtitle="Please update your Info here." />

          <div className="mt-6 border-t border-border">
            <form onSubmit={form.handleSubmit(onSubmit)} className="divide-y divide-border">
              {/* Username */}
              <SettingsRow label="Username">
                <div className="max-w-[520px]">
                  <Input
                    className="h-11 bg-background border-border"
                    {...form.register("username")}
                    aria-invalid={!!form.formState.errors.username}
                  />
                  {form.formState.errors.username?.message ? (
                    <p className="mt-2 text-xs text-destructive">
                      {form.formState.errors.username.message}
                    </p>
                  ) : null}
                </div>
              </SettingsRow>

              {/* Phone */}
              <SettingsRow label="Phone Number">
                <div className="max-w-[520px]">
                  <PhoneField
                    country={phoneCountry}
                    phone={phone}
                    onCountryChange={(c) => form.setValue("phoneCountry", c, { shouldDirty: true })}
                    onPhoneChange={(v) => form.setValue("phone", v, { shouldDirty: true })}
                  />
                </div>
              </SettingsRow>

              {/* Country */}
              <SettingsRow label="Country">
                <div className="max-w-[520px]">
                  <Input
                    className="h-11 bg-background border-border"
                    {...form.register("countryName")}
                    aria-invalid={!!form.formState.errors.countryName}
                  />
                  {form.formState.errors.countryName?.message ? (
                    <p className="mt-2 text-xs text-destructive">
                      {form.formState.errors.countryName.message}
                    </p>
                  ) : null}
                </div>
              </SettingsRow>

              {/* Email */}
              <SettingsRow label="Email">
                <div className="max-w-[520px]">
                  <Input
                    className="h-11 bg-background border-border"
                    {...form.register("email")}
                    aria-invalid={!!form.formState.errors.email}
                  />
                  {form.formState.errors.email?.message ? (
                    <p className="mt-2 text-xs text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  ) : null}
                </div>
              </SettingsRow>

              {/* Plan + Upgrade */}
              <SettingsRow label="Plan">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="w-full max-w-[520px]">
                    <Input
                      value={form.watch("plan")}
                      readOnly
                      tabIndex={-1}
                      className="
                        h-11 bg-background border border-border rounded-md
                        text-foreground font-semibold
                        cursor-default select-none
                        focus-visible:ring-0 focus-visible:ring-offset-0
                      "
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={onUpgradePlan}
                    className="h-10 rounded-lg btn-gradient text-primary-foreground px-6"
                  >
                    Upgrade Plan
                  </Button>
                </div>
              </SettingsRow>

              <div className="pt-6 md:pt-10">
                <FormActions saving={saving} onCancel={onCancel} saveText="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <TopUpCreditsModal
        open={topUpOpen}
        onOpenChange={setTopUpOpen}
        plan={planSummary}
        onBuyCredits={onBuyCredits}
        loadingPackId={loadingPackId}
      />
    </WebContainer>
  );
}
