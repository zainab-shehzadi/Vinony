import type { ModelShowcaseItem } from "@/types/modelShowcase";

export const MODEL_SHOWCASE: ModelShowcaseItem[] = [
  {
    id: "gpt4",
    title: "GPT-4 AI Model",
    description:
      "GPT-4 is a powerful large language model designed to understand, generate, and reason with human-like text.",
    features: [
      { id: "f1", text: "Advanced Language Understanding" },
      { id: "f2", text: "Context-Aware Text Generation" },
      { id: "f3", text: "Reasoning & Problem Solving" },
      { id: "f4", text: "Pre-Trained Transformer Architecture" },
    ],
    ctaLabel: "Start Exploring Now",
    imageSrc: "/chat.svg",
    imageAlt: "GPT model preview",
  },
  {
    id: "veo2",
    title: "Veo 2 AI Model",
    description:
      "Veo 2 is an advanced video generation model designed to create high-quality, realistic videos from text and visual prompts.",
    features: [
      { id: "f1", text: "Text-to-Video Generation" },
      { id: "f2", text: "Cinematic Quality & Realistic Motion" },
      { id: "f3", text: "Scene Understanding & Visual Consistency" },
      { id: "f4", text: "High-Resolution, Long-Form Video Output" },
    ],
    ctaLabel: "Start Exploring Now",
    imageSrc: "/chat1.svg",
    imageAlt: "Veo model preview",
  },
  {
    id: "flux",
    title: "FLUX AI Model",
    description:
      "FLUX is a next-generation image generation model designed to produce high-quality, photorealistic images from text prompts.",
    features: [
      { id: "f1", text: "Text-to-Image Generation" },
      { id: "f2", text: "High-Fidelity & Photorealistic Outputs" },
      { id: "f3", text: "Strong Prompt Adherence" },
      { id: "f4", text: "Advanced Diffusion-Based Architecture" },
    ],
    ctaLabel: "Start Exploring Now",
    imageSrc: "/chat.svg",
    imageAlt: "Flux model preview",
  },
];
