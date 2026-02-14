import PaymentHeading from "@/components/shared/payment-heading";
import PaymentHistory from "@/components/shared/payment-history";
import { PATH } from "@/constants/paths";
import { INVOICES, CREDITS } from "@/constants/static-data";

export default function Subscription() {
  return (
    <div className="w-full p-6 md:p-8 bg-input border border-border/50 mt-5">
      {/* Invoice Section */}
      <PaymentHeading
        heading="Invoice of Subscription"
        paragraph="Effortlessly handle your billing and invoices right here."
        route={PATH.INVOICE}
      />
      <PaymentHistory visible="hidden" font="font-normal" Record={INVOICES} />

      {/* Credit section */}
      <div className="mt-8">
        <PaymentHeading
          heading="Credits Buyed"
          paragraph="Effortlessly handle your billing and invoices right here."
          route={PATH.CREDIT}
        />
        <PaymentHistory
          visible=""
          font="font-bold"
          Record={CREDITS}
        />
      </div>
    </div>
  );
}
