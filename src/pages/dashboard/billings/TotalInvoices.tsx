import AccountHeader from "@/components/settings/account/AccountHeader";
import PaymentHistory from "@/components/shared/payment-history";
import { PATH } from "@/constants/paths";
import { INVOICES } from "@/constants/static-data";

export default function TotalInvoices() {
  return (
    <div className="px-4">
      <div className="w-full p-6 md:p-8 bg-input border border-border/50 my-5">
        {/* Invoice Section */}
        <AccountHeader
          title="Invoice of Subscription"
          subtitle="Effortlessly handle your billing and invoices right here."
        />
        <PaymentHistory
          visible="hidden"
          font="font-normal"
          Record={INVOICES}
          Invoices={PATH.INVOICE}
        />
      </div>
    </div>
  );
}
