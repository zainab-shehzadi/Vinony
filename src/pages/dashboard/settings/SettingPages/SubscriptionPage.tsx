"use client";

import { useNavigate } from "react-router-dom";

import SettingsTabs from "@/components/settings/SettingsTabs";
import BillingInfoCard from "@/components/settings/subscription/BillingInfoCard";

export default function SubscriptionPage() {
  const navigate = useNavigate();


  return (
    <>
      <div className="w-full p-6 md:p-10 lg:p-16 space-y-8">
        <SettingsTabs />

        <BillingInfoCard
          onEdit={() => navigate("/settings/subscription/edit-info")}
          left={[
            { label: "User Name", value: "Munazza Tababsum", tone: "primary" },
            { label: "Email", value: "XYZ@gmail.com", tone: "muted" },
            { label: "Country", value: "USA", tone: "primary" },
          ]}
          right={[
            { label: "Subscription", value: "Basic", tone: "primary" },
            { label: "Phone", value: "(+92) 4665 553 741", tone: "primary" },
          ]}
        />
      </div>

    </>
  );
}
