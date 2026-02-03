"use client";

import * as React from "react";
import SettingsTabs from "@/components/settings/SettingsTabs";
import Divider from "@/components/settings/account/Divider";
import AccountHeader from "@/components/settings/account/AccountHeader";
import TwoFactorRow from "@/components/settings/account/TwoFactorRow";
import ChangePasswordSection from "@/components/settings/account/ChangePasswordSection";
import AccountAction from "@/components/settings/accountActions";
import DeleteAccountModal from "@/components/models/DeleteAccountModal.tsx";
import WebContainer from "@/lib/webContainer";

export default function AccountPage() {
  const [twoFactor, setTwoFactor] = React.useState(true);

  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  const handleDeleteClick = () => setDeleteOpen(true);

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      console.log("Delete account confirmed");
      await new Promise((r) => setTimeout(r, 700));
      setDeleteOpen(false);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <WebContainer>
      <div className="w-full space-y-8">
        <SettingsTabs />

        <div className="w-full">
          <AccountHeader
            title="Account settings"
            subtitle="Please update your account settings here"
          />

          <div className="mt-4">
            <Divider />
            <TwoFactorRow value={twoFactor} onChange={setTwoFactor} />
            <Divider />
            <ChangePasswordSection />
            <Divider />

            <AccountAction
              title="Delete Account"
              buttonText="Delete Account"
              onClick={handleDeleteClick}
              variant="danger-outline"
              withDivider
            />
          </div>
        </div>

        <DeleteAccountModal
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          onConfirm={handleConfirmDelete}
          loading={deleting}
        />
      </div>
    </WebContainer>
  );
}
