"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AvatarUploader from "./AvatarUploader";
import PhoneField from "./PhoneField";
import NotificationsFieldset from "./NotificationsFieldset";

import type { CountryCode, NotificationSettings } from "@/types/setting";
import { Input } from "@/components/ui/input";
import FormActions from "../formAction";

import ProfileHeader from "./ProfileHeader";
import { ProfileFormValues, profileSchema } from "@/types/settings";
import { DEFAULT_PROFILE_SETTINGS, PROFILE_FORM_DEFAULT_VALUES } from "@/constants/settings";
import SettingsRow from "../SettingsRow";


export default function ProfileForm() {
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);
  const [saving, setSaving] = React.useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: PROFILE_FORM_DEFAULT_VALUES,
    mode: "onChange",
  });

  const notifications = form.watch("notifications");
  const country = form.watch("country") as CountryCode;
  const phone = form.watch("phone") ?? "";

  const onSubmit = (values: ProfileFormValues) => {
    setSaving(true);
    console.log("Submit values:", values, { avatarFile });

    window.setTimeout(() => setSaving(false), 700);
  };

  const onCancel = () => {
    form.reset(PROFILE_FORM_DEFAULT_VALUES);
    setAvatarFile(null);
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="grid grid-cols-12">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-3 border-b border-border">
          <div className="flex justify-center md:justify-start ">
            <AvatarUploader
              initialUrl={DEFAULT_PROFILE_SETTINGS.avatarUrl}
              value={avatarFile}
              onChange={setAvatarFile}
              className="w-full"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-12 md:col-span-9">
          <ProfileHeader planLabel={DEFAULT_PROFILE_SETTINGS.planLabel} />

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="px-4 sm:px-6 md:px-8 py-2"
          >
            <div className="divide-y divide-border">
              <SettingsRow label="Username">
                <Input
                  className="h-11 w-full rounded-none border-border bg-background"
                  {...form.register("username")}
                  aria-invalid={!!form.formState.errors.username}
                />
                {form.formState.errors.username?.message ? (
                  <p className="mt-2 text-xs text-destructive">
                    {form.formState.errors.username.message}
                  </p>
                ) : null}
              </SettingsRow>

              <SettingsRow label="Phone Number">
                <PhoneField
                  country={country}
                  phone={phone}
                  onCountryChange={(c) =>
                    form.setValue("country", c, { shouldDirty: true })
                  }
                  onPhoneChange={(v) =>
                    form.setValue("phone", v.replace(/\D/g, ""), { shouldDirty: true })
                  }
                />
              </SettingsRow>
              

              <SettingsRow label="Notifications">
                <NotificationsFieldset
                  value={notifications as NotificationSettings}
                  onChange={(next) => form.setValue("notifications", next, { shouldDirty: true })}
                />
              </SettingsRow>
            </div>


            <div className="pt-4">
              <FormActions saving={saving} onCancel={onCancel} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
