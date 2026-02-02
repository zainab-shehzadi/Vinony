import Subscription from "@/components/dashboard/billingSection/Subscription";
import PaymentCard from "@/components/shared/payment-card";
import SummaryCard from "@/components/shared/summary-card";
import AddCard from "@/components/dashboard/billingSection/AddCard";
import { useState } from "react";
import WebContainer from "@/lib/webContainer";

export default function BillingSection() {
  const [cardActive, setCardActive] = useState<Boolean>(false);
  return (
    <WebContainer>
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
    </WebContainer>

  );
}
