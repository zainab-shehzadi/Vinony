"use client";

import Container from "@/lib/Container";
import SectionHero from "@/components/common/section-hero/SectionHero";
import LegalDocument from "@/components/legal/LegalDocument";
import { PRIVACY_POLICY } from "@/constants/legal";

export default function PrivacyPolicy() {
  return (
    <div className="w-full">
      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[{ type: "text", value: "Privacy Policy" }]}
          subtitle="How Vinony collects, uses, and protects your personal data across our AI services."
          subtitleClassName ="md:max-w-[950px]"
        />

        <div className="pt-6 md:pt-10 lg:pt-16">
          <LegalDocument sections={PRIVACY_POLICY} />
        </div>
      </Container>
    </div>
  );
}