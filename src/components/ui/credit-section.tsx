import { Progress } from './progress'
import { ArrowUpRight, X } from 'lucide-react'

function CreditSection() {
  return (
    <>
        <div className="mt-auto border rounded-lg p-3 bg-white shadow-sm relative overflow-hidden">
        <button className="absolute top-4 right-3 text-accent">
          <X className="w-4 h-4" />
        </button>

        <h4 className="text-[16px] font-bold text-primaryDark mb-1">
          Free Plan
        </h4>
        <p className="text-sm text-accent mb-3">
          <span className="font-bold text-primaryDark">0.00</span> of{" "}
          <span className="font-bold text-primaryDark">100</span> free credits
          used Add a payment method to prevent disruption in service
        </p>

        <Progress value={20} className="h-1.5 mb-4 bg-slate-100" />

        <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
          Upgrade Plan
          <ArrowUpRight size={16} />
        </button>
      </div>
    </>
  )
}

export default CreditSection