"use client";

import { useState } from "react";
import AddCard from "@/components/dashboard/billingSection/AddCard";
import SettingsTabs from "@/components/settings/SettingsTabs";
import PaymentMethods from "@/components/shared/payment-card";
import PaymentHeading from "@/components/shared/payment-heading";
import PaymentHistory from "@/components/shared/payment-history";
import { PATH } from "@/constants/paths";
import { INVOICES } from "@/constants/static-data";
import WebContainer from "@/lib/webContainer";

export default function PaymentPage() {
  const [cardActive, setCardActive] = useState(false);

  return (
    <WebContainer>
      <div className="w-full space-y-8">
        {!cardActive ? (
          <>
            <SettingsTabs />

            <PaymentMethods setCardActive={setCardActive} />

            <div className="w-full p-6 md:p-8 bg-input border border-border/50 my-5">
              <PaymentHeading
                heading="Invoice of Subscription"
                paragraph="Effortlessly handle your billing and invoices right here."
                route={PATH.INVOICE}
              />

              <PaymentHistory
                visible="hidden"
                font="font-normal"
                Record={INVOICES}
                Credits={PATH.CREDIT}
                Invoices={PATH.INVOICE}
              />
            </div>
          </>
        ) : (
          <AddCard setCardActive={setCardActive} />
        )}
      </div>
    </WebContainer>
  );
}
