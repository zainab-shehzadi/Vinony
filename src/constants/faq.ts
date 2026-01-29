export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const VINONY_FAQS: FaqItem[] = [
  {
    id: "what-can-i-do",
    question: "What can I do with Vinony?",
    answer:
      "Vinony lets you chat with multiple AI models, generate images and videos, and use AI agents like web research, ChatPDF, proofreading, and code help—all from one subscription.",
  },
  {
    id: "need-experience",
    question: "Do I need technical or AI experience to use Vinony?",
    answer:
      "No. Vinony is designed for beginners and pros. You can start with simple prompts and explore advanced tools as you go.",
  },
  {
    id: "models-included",
    question: "Which AI models are included?",
    answer:
      "Vinony provides access to multiple LLMs and creative models. The exact lineup can change over time as we add and upgrade providers.",
  },
  {
    id: "pricing-credits",
    question: "How does pricing and credit usage work?",
    answer:
      "Plans include monthly credits. Different models and tools may consume different credit amounts depending on cost and output type.",
  },
  {
    id: "upgrade-cancel",
    question: "Can I upgrade, downgrade, or cancel anytime?",
    answer:
      "Yes. You can change your plan at any time. Changes typically apply immediately or at the next billing cycle depending on the plan.",
  },
];
