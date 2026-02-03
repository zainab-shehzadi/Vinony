import Subscription from "@/components/dashboard/billingSection/Subscription";
import PaymentCard from "@/components/shared/payment-card";
import SummaryCard from "@/components/shared/summary-card";
import AddCard from "@/components/dashboard/billingSection/AddCard";
import { useState } from "react";

export default function BillingSection() {
  const [cardActive, setCardActive] = useState<Boolean>(false);
  return (
    <div className="w-full px-4 overflow-y-auto">
      {!cardActive && (
        <>
          <SummaryCard  />
          <PaymentCard setCardActive={setCardActive}/>
          <Subscription />
        </>
      )}
      {cardActive && (
        <AddCard setCardActive={setCardActive}/>
      )}
    </div>
  );
}
