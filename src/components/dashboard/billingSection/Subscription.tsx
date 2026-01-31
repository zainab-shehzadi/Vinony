import PaymentHeading from "@/components/shared/payment-heading";
import PaymentHistory from "@/components/shared/payment-history";
import { INVOICES, CREDITS } from "@/constants/static-data";

export default function Subscription() {
  return (
    <div className="w-full p-6 md:p-8 bg-input border border-border/50 my-5">
      <PaymentHeading
        heading="Invoice of Subscription"
        paragraph="Effortlessly handle your billing and invoices right here."
      />
      <PaymentHistory visible="hidden" font="font-normal" INVOICES={INVOICES} />
      <div className="mt-8">
        <PaymentHeading
          heading="Credits Buyed"
          paragraph="Effortlessly handle your billing and invoices right here."
        />
        <PaymentHistory
          visible=""
          font="font-bold"
          INVOICES={CREDITS}
        />
      </div>
    </div>
  );
}
