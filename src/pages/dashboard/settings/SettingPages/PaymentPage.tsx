"use client";


import SettingsTabs from "@/components/settings/SettingsTabs";
import PaymentMethods from "@/components/shared/payment-card";
import PaymentHeading from "@/components/shared/payment-heading";
import PaymentHistory from "@/components/shared/payment-history";
import { INVOICES } from "@/constants/static-data";

export default function PaymentPage() {

    return (
        <div className="w-full p-6 md:p-10 lg:p-16 space-y-8">
            <SettingsTabs />
            <PaymentMethods />
              <div className="w-full p-6 md:p-8 bg-input border border-border/50 my-5">
                  <PaymentHeading
                    heading="Invoice of Subscription"
                    paragraph="Effortlessly handle your billing and invoices right here."
                  />
                  <PaymentHistory visible="hidden" font="font-normal" INVOICES={INVOICES} />
              
                </div>

        </div>
    );
}
