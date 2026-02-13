// src/pages/ai-models/ModelDetailPage.tsx
"use client";

import * as React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Container from "@/lib/Container";
import { MODELS } from "@/constants/model";

import HowItWorksSection from "@/components/landingPage/HowItWork/HowItWorksSection";
import GuaranteeStrip from "@/components/landingPage/guarantee-strip/GuaranteeStrip";
import CtaBanner from "@/components/landingPage/CtaBanner";
import { buildCreditUsageDescription, buildCtaContent } from "@/components/models/utils";
import { ModelDetail } from "@/types/model";
import ModelHero from "@/components/models/ModelHero";
import ModelAbout from "@/components/models/ModelAbout";
import ModelCharacteristics from "@/components/models/ModelCharacteristics";
import ModelCreditUsage from "@/components/models/ModelCreditUsage";


export default function ModelDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const model = React.useMemo(() => {
    return MODELS.find((m) => m.slug === slug) as ModelDetail | undefined;
  }, [slug]);

  if (!model) return <Navigate to="/ai-models" replace />;

  const ctaContent = React.useMemo(() => buildCtaContent(model), [model]);
  const creditUsageDescription = React.useMemo(
    () => buildCreditUsageDescription(model.title, 4),
    [model.title]
  );

  return (
    <div className="w-full">
      <Container>
        <div>
          <ModelHero model={model} onTry={() => navigate("/dashboard")} />
          <div className="mx-auto mt-6 md:mt-12 lg:mt-24">
            <ModelAbout title={model.title} description={model.description} about={model.about} />
            <ModelCharacteristics items={model.characteristics} />
          </div>
          <HowItWorksSection />
          
          <ModelCreditUsage imageSrc="/model.png" description={creditUsageDescription} />
          <GuaranteeStrip />
          <CtaBanner content={ctaContent} onClick={() => navigate("/dashboard")} />
        </div>
      </Container>
    </div>
  );
}
