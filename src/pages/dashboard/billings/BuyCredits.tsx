import AccountHeader from "@/components/settings/account/AccountHeader";
import PaymentHistory from "@/components/shared/payment-history";
import { PATH } from "@/constants/paths";
import { CREDITS } from "@/constants/static-data";
import WebContainer from "@/lib/webContainer";

export default function BuyCredits() {
  return (
    <WebContainer>
      <div className="w-full p-6 md:p-8 bg-input border border-border/50">
        {/* Invoice Section */}
        <AccountHeader
          title="Credits Buyed"
          subtitle="Effortlessly handle your billing and invoices right here."
        />
          <PaymentHistory visible="" font="font-bold" Record={CREDITS} Credits={PATH.CREDIT}/>
      </div>
    </WebContainer>
  );
}
