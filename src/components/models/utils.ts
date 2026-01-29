// src/components/models/detail/utils.ts
import type { CtaBannerContent } from "@/types/landingPage";
import { ModelDetail } from "@/types/model";

export function buildCtaContent(model: ModelDetail): CtaBannerContent {
  return {
    title: `Sign up to try ${model.title}`,
    subtitle: `Create an account to access ${model.title} and start building with advanced AI.`,
    buttonLabel: `Try ${model.title}`,
    backgroundImageSrc: "/Background.png",
      darkBackgroundImageSrc: "/cta-dark.png", 

  };
}

export function buildCreditUsageDescription(modelTitle: string, perPrompt = 4) {
  return `Based on the conversation with the AI chatbot, each prompt will cost you ${perPrompt} credit. ${modelTitle} falls into the high-cost, high-quality usage category.`;
}
