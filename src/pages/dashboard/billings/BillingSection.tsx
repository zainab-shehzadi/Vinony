import Subscription from '@/components/dashboard/billingSection/Subscription'
import PaymentCard from '@/components/shared/payment-card'
import SummaryCard from '@/components/shared/summary-card'

export default function BillingSection() {
  return (
    <div className="w-full px-4 overflow-y-auto">
      <SummaryCard/>
      <PaymentCard/>
      <Subscription/>
    </div>
  )
}
