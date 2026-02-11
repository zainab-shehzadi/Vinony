import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CancelSubscriptionModal from "../models/CancelSubscriptionModal";
import TopUpCreditsModal from "../models/TopUpCreditsModal";
import TopUpSuccessModal from "../models/AddedCreditModal";

interface PlanProps {
  name: string;
  cycle: string;
  cost: string;
}
const Plan: PlanProps = {
  name: "Basic Plan",
  cycle: "Monthly",
  cost: "$14.99",
};

export default function SummaryCard() {
  const navigate = useNavigate();
  const [cancelOpen, setCancelOpen] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [topUpOpen, setTopUpOpen] = useState(false);
  const [topUpLoadingId, setTopUpLoadingId] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successLoading, setSuccessLoading] = useState(false);
  const handleConfirmCancel = async () => {
    try {
      setCancelLoading(true);


      setCancelOpen(false);
    } catch (e) {
      console.error(e);
    } finally {
      setCancelLoading(false);
    }
  };
  const handleBuyCredits = async (packId: string) => {
    setTopUpLoadingId(packId);
    try {
      setTopUpOpen(false);
      setSuccessOpen(true);
    } catch (e) {
      console.error(e);
    } finally {
      setTopUpLoadingId(null);
    }
  };



  const onSuccessConfirm = async () => {
    setSuccessLoading(true);
    try {
      setSuccessOpen(false);
      navigate("/dashboard");
    } finally {
      setSuccessLoading(false);
    }
  };

  return (
    <div className="w-full rounded-3xl p-5 md:p-8 bg-input border border-border my-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-lg md:text-xl text-foreground font-semibold tracking-tight">
          Current Plan Summary
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <Button
            variant="secondary"
            onClick={() => setCancelOpen(true)}
            className="w-full sm:w-auto bg-accent/10 rounded-xl text-foreground hover:bg-accent/20 border-none h-11 px-2 sm:px-6 transition-all"
          >
            Cancel Subscription
          </Button>
          <Button
            onClick={() => setTopUpOpen(true)}
            className="w-full sm:w-auto btn-gradient rounded-xl h-11 px-3 sm:px-6 transition-all"
          >
            Upgrade Plan
          </Button>
        </div>
      </div>
      <CancelSubscriptionModal
        open={cancelOpen}
        onOpenChange={setCancelOpen}
        onConfirm={handleConfirmCancel}
        loading={cancelLoading}
      />
      <TopUpCreditsModal
        open={topUpOpen}
        onOpenChange={setTopUpOpen}
        onBuyCredits={handleBuyCredits}
        loadingPackId={topUpLoadingId}
        plan={Plan}
      />

      <TopUpSuccessModal
        open={successOpen}
        onOpenChange={setSuccessOpen}
        onConfirm={onSuccessConfirm}
        loading={successLoading}
      />
      {/* Stats Grid: Mobile pe columns stack honge */}
      <div className="w-full pt-4 md:pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm sm:text-[16px] font-medium uppercase text-muted-foreground/70">
              Plan Name
            </span>
            <span className="text-sm sm:text-[16px] font-semibold text-foreground">
              {Plan.name}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm sm:text-[16px] font-medium uppercase text-muted-foreground/70">
              Billing Cycle
            </span>
            <span className="text-sm sm:text-[16px] font-semibold text-foreground">
              {Plan.cycle}
            </span>
          </div>

          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-sm sm:text-[16px] font-medium uppercase text-muted-foreground/70">
              Plan Cost
            </span>
            <span className="text-sm sm:text-[16px] font-semibold text-foreground">
              {Plan.cost}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="border-b border-border/60 py-8">
        <div className="flex items-baseline gap-2 mb-4">
          <p className="text-foreground text-sm sm:text-[16px] font-semibold">
            Credits
          </p>
          <p className="text-muted-foreground text-sm sm:text-[16px] font-normal">
            86 of 100 Used
          </p>
        </div>
        <Progress value={86} className="h-[8px] bg-[#DDE1E4]" />
        <p className="text-muted-foreground/80 text-xs md:text-sm font-medium mt-4 tracking-tight">
          14 Credits remaining until your plan requires update
        </p>
      </div>

      {/* Expiry Info */}
      <div className="flex flex-col gap-1.5 py-7">
        <p className="text-foreground text-sm md:text-base font-semibold">
          Active until Dec 9, 2025
        </p>
        <p className="text-muted-foreground/80 text-xs md:text-sm font-normal">
          We will send you a notification upon Subscription expiration.
        </p>
      </div>

      {/* Alert Box: Same to same logic with padding and wrapping */}
      <div className="p-4 md:p-6 border border-border/60 rounded-[20px] md:rounded-3xl bg-background/80 shadow-sm transition-colors">
        <div className="flex items-start gap-3">
          <CircleAlert size={16} className="text-foreground md:mt-1 shrink-0" />
          <div className="flex flex-col gap-1">
            <p className="text-foreground text-sm md:text-base font-semibold leading-tight">
              We need your attention!
            </p>
            <div className="flex flex-wrap items-center gap-x-1.5">
              <span className="text-muted-foreground text-xs md:text-sm font-normal leading-relaxed">
                Your payment was declined. To start using tools, please
              </span>
              <button
                type="button"
                onClick={() => navigate("/settings/payment")}
                className="text-primary pt-2 sm:pt-0 hover:text-primary/80 text-xs font-bold underline-offset-4 hover:underline transition-all"
              >
                Add Payment Method.
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
