
import SectionHero from "@/components/common/section-hero/SectionHero";
import PricingComparisonTable from "@/components/pricing/PricingComparisonTable";
import { PRICING_FEATURES, PRICING_PLANS } from "@/constants/pricing";
import Container from "@/lib/Container";

export default function PricingPage() {

  return (
    <div>

      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[
            { type: "text", value: "One " },
            { type: "highlight", value: "Subscription" },
            { type: "text", value: ".\nEvery AI Model." },
          ]}
          subtitle="Access 100+ chat, image, video, and AI agent tools, without juggling multiple subscriptions."
        />
      </Container>
      <PricingComparisonTable
        plans={PRICING_PLANS}
        features={PRICING_FEATURES}
        defaultSelectedPlanId="pro"
        onSelectPlan={(planId, cycle) => {
          console.log("Selected:", planId, cycle);
        }}
      />
    </div>

  );
}
