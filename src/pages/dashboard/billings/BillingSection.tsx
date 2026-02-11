import Subscription from "@/components/dashboard/billingSection/Subscription";
import PaymentCard from "@/components/shared/payment-card";
import SummaryCard from "@/components/shared/summary-card";
import AddCard from "@/components/dashboard/billingSection/AddCard";
import { useState } from "react";

export default function BillingSection() {
  const [cardActive, setCardActive] = useState<Boolean>(false);
  return (
    <div className="flex w-full flex-col h-[90vh] px-4 md:px-10 md:py-10 xl:px-16">
      {!cardActive && (
        <>
          <SummaryCard />
          <PaymentCard setCardActive={setCardActive} />
          <Subscription />
        </>
      )}
      {cardActive && (
        <AddCard setCardActive={setCardActive} />
      )}
    </div>

  );
}
