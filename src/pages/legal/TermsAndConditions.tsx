"use client";

import Container from "@/lib/Container";
import SectionHero from "@/components/common/section-hero/SectionHero";
import LegalDocument from "@/components/legal/LegalDocument";
import { TERMS_AND_CONDITIONS } from "@/constants/legal";

export default function TermAndCondition() {
  return (
    <div className="w-full">
      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[{ type: "text", value: "Terms and Conditions" }]}
             subtitleClassName ="md:max-w-[950px]"
          subtitle="The terms that govern your access to Vinony’s AI platform, subscriptions, credits, and usage rules."
        />

        <div className="pt-6 md:pt-10 lg:pt-16">
          <LegalDocument sections={TERMS_AND_CONDITIONS} />
        </div>
      </Container>
    </div>
  );
}