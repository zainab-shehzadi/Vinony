// src/components/models/detail/ModelCreditUsage.tsx
"use client";

import GetStartedSection from "@/components/landingPage/GetStarted/GetStartedShowcase";

type Props = {
  imageSrc: string;
  description: string;
};

export default function ModelCreditUsage({ imageSrc, description }: Props) {
  return (
    <GetStartedSection
      imageSrc={imageSrc}
      eyebrow="Typical Credit Usage"
      title="Credit Cost Range"
      description={description}
      bestSuitedFor={[
        "Medium-to-heavy workloads",
        "Quality-critical tasks",
        "Use cases where fewer requests produce high value",
      ]}
    />
  );
}
