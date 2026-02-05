import { CtaBannerContent, ModelsShowcaseContent, TestimonialItem } from "@/types/landingPage";

export const HOW_IT_WORKS = [
  {
    title: "Choose a Plan",
    description:
      "Select a pricing plan that fits your needs, whether you’re exploring AI tools or building at scale with advanced models and higher limits.",
    iconSrc: "/Vector.svg",
  },
  {
    title: "Pick any Model or Tool",
    description:
      "Choose from a wide range of AI models and tools for text, image, video, and code generation—all in one platform.",
    iconSrc: "/Group.svg",
  },
  {
    title: "Generate with Credits",
    description:
      "Use credits to generate content instantly and flexibly across models, paying only for what you create.",
    iconSrc: "/bar.svg",
  },
] as const;


export const HOW_IT_WORKS1 = [
  {
    title: "Advanced conversational AI",
    description:
      "GPT-4.0 is ideal for building chat assistants that must handle complex user intent, follow detailed policies, and maintain conversational context over long sessions.",
    iconSrc: "/Vector.svg",
  },
  {
    title: "Professional content creation",
    description:
      "The model performs exceptionally well at producing long, coherent, and well-structured content.",
    iconSrc: "/Group.svg",
  },
  {
    title: "Reasoning & problem-solving",
    description:
      "GPT-4.0 can analyze scenarios, weigh trade-offs, and provide step-by-step reasoning, making it suitable for strategic.",
    iconSrc: "/bar.svg",
  },
  {
    title: "Code understanding",
    description:
      "GPT-4.0 can read, explain, refactor, and generate code across multiple programming languages with strong contextual awareness.",
    iconSrc: "/Vector.svg",
  },
  {
    title: "Agent-based workflows",
    description:
      "Because of its reasoning depth, GPT-4.0 is commonly used as the core brain for AI agents that plan tasks, call tools, and execute multi-step workflows.",
    iconSrc: "/bar.svg",
  },
  {
    title: "Assistance",
    description:
      "Ideal for logic-heavy tasks, decision trees, and analytical workflows.",
    iconSrc: "/Group.svg",
  },
];

export const MODELS_SHOWCASE_CONTENT: ModelsShowcaseContent = {
  heading: "100+ models, one\nworkspace.",
  subheading: "Switch models instantly. Keep your history. Track credits\nclearly.",
  ctaLabel: "Explore All Models",
  cardTitle: "Available Models",
  

};
export const CTA_BANNER_CONTENT: CtaBannerContent = {
  title: "Stop juggling AI tools.",
  subtitle: "Use one platform for everything.",
  buttonLabel: "Explore All Models",
  backgroundImageSrc: "/Background.png",
  darkBackgroundImageSrc: "/cta-dark.png", 
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Finally, I don't need five different tabs open. Vinony handles everything from quick to full image generation.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
  {
    id: "t2",
    quote:
      "The model switching is seamless. I can test my prompts across GPT-4, Claude, and Gemini without workspace.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
  {
    id: "t3",
    quote:
      "The credit system actually makes sense. I know exactly what I'm spending and never worry about hidden costs.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
];


// src/constants/aiProviders.ts

export type AiProvider = {
  id: string;
  name: string;
  // If you have svg/png in /public, keep as "/images/....svg"
  logoSrc: string;
  logoAlt?: string;
  // Optional per-logo sizing tweaks
  className?: string;
};

export const AI_PROVIDERS: AiProvider[] = [
  {
    id: "amazon",
    name: "Amazon",
    logoSrc: "/amazon.svg",
    className: "h-6 ",
  },
  {
    id: "tunein",
    name: "TuneIn",
    logoSrc: "/tunein.svg",
    className: "h-6",
  },
  {
    id: "paypal",
    name: "PayPal",
    logoSrc: "/paypal.svg",
    className: "h-6",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logoSrc: "/microsoft.svg",
    className: "h-6",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logoSrc: "/linkdin.svg",
    className: "h-6 ",
  },
  {
    id: "xbox",
    name: "Xbox One",
    logoSrc: "/Xbox.svg",
    className: "h-6",
  },
];



export type AppNotification = {
  id: number;
  text: string;
  time: string;
  unread: boolean;
};

export const notifications: {
  today: AppNotification[];
  yesterday: AppNotification[];
  thisMonth: AppNotification[];
} = {
  today: [
    {
      id: 1,
      text: "You’re running low on credits — top up to avoid interruptions",
      time: "10min ago",
      unread: true,
    },
    {
      id: 2,
      text: "Your document has been processed and is ready for questions",
      time: "10min ago",
      unread: true,
    },
    {
      id: 3,
      text: "Your plan is active and credits have been added to your account",
      time: "1hr ago",
      unread: true,
    },
    {
      id: 4,
      text: "New login detected on your account",
      time: "5hr ago",
      unread: false,
    },
  ],

  yesterday: [
    {
      id: 5,
      text: "This model is currently unavailable due to maintenance",
      time: "5hr ago",
      unread: false,
    },
    {
      id: 6,
      text: "Your subscription has been renewed for the next cycle",
      time: "5hr ago",
      unread: false,
    },
    {
      id: 7,
      text: "Your subscription has been renewed for the next cycle",
      time: "5hr ago",
      unread: false,
    },
  ],

  thisMonth: [
    {
      id: 8,
      text: "This model is currently unavailable due to maintenance",
      time: "5hr ago",
      unread: false,
    },
    {
      id: 9,
      text: "Your subscription has been renewed for the next cycle",
      time: "5hr ago",
      unread: false,
    },
    {
      id: 10,
      text: "Your subscription has been renewed for the next cycle",
      time: "5hr ago",
      unread: false,
    },
  ],
};
