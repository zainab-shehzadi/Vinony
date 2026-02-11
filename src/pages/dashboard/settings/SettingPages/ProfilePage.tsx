"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";

import ProfileForm from "@/components/settings/profile/ProfileForm";
import AccountAction from "@/components/settings/accountActions";
import SettingsTabs from "@/components/settings/SettingsTabs";
import LogoutModal from "@/components/models/LogoutAccountModal";
import WebContainer from "@/lib/webContainer";

export default function ProfilePage() {
  const navigate = useNavigate();

  const [logoutOpen, setLogoutOpen] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);

  const handleLogoutClick = () => setLogoutOpen(true);
  const handleConfirmLogout = async () => {
    setLoggingOut(true);
    try {
      setLogoutOpen(false);
      navigate("/login");
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <>
    <WebContainer>
      <div className="w-full space-y-8 ">
        <SettingsTabs />
        <ProfileForm />
        <AccountAction
          title=""
          buttonText="Log Out Account"
          onClick={handleLogoutClick}
        />
      </div>

      <LogoutModal
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        onConfirm={handleConfirmLogout}
        loading={loggingOut}
      />
      </WebContainer>
    </>
  );
}
