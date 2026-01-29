import type { ModelCardData } from "@/types/model";

const base = {
  credits: 2,
  creditsUnit: "credit/chat" as const,
  ctaLabel: "Try Now",
};

const defaultCharacteristics = [
  "Context window: Large (supports long conversations & documents)",
  "Modalities: Text (multimodal support varies   implementation)",
  "Output style: Detailed, structured, and instruction-following",
  "Strong instruction following",
  "Reliable structured outputs (JSON, tables, schemas)",
];

export const MODELS: ModelCardData[] = [
  // Chat
  {
    id: "gpt-4o-1",
    slug: "gpt-4o",
    title: "GPT-4o",
    provider: " Open AI",
    tagline: "High-intelligence model for fast, reliable reasoning and writing.",
    description:
      "A concise, original description explaining what the model is and how users typically use it.",
    about: [
      "GPT-4.0 is a powerful large language model designed for advanced reasoning, nuanced understanding, and high-quality text generation. It performs exceptionally well on complex instructions, multi-step tasks, and professional-grade content creation. Compared to earlier models, GPT-4.0 offers improved accuracy, better contextual awareness, and more consistent outputs across longer conversations. It is well-suited for applications where quality, safety, and reasoning depth matter more than raw speed.",
      "It’s typically used for multi-step reasoning, drafting professional content, and structured outputs.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.",
      "Best for teams who need consistent, production-ready results across many tasks.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.",
    ],
    characteristics: defaultCharacteristics,
    tags: [
      { id: "gpt4o-text", label: "Text" },
      { id: "gpt4o-code", label: "Code" },
      { id: "gpt4o-msg-1", label: "Message" },
      { id: "gpt4o-msg-2", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "claude-1",
    slug: "claude",
    title: "Claude",
    provider: "  Anthropic",
    tagline: "Great for long context, calm tone, and thoughtful responses.",
    description:
      "Great for long context writing, reasoning, and structured responses with a friendly tone.",
    about: [
      "Claude is commonly used for long-form writing, reviewing documents, and structured reasoning.",
      "It’s helpful when you want a friendly tone and strong long-context handling.",
      "Good for drafts, policies, customer support responses, and analysis.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Strong long-context reading and summarization",
      "Great for drafting and editing",
    ],
    tags: [
      { id: "claude-text", label: "Text" },
      { id: "claude-research", label: "Research" },
      { id: "claude-code", label: "Code" },
      { id: "claude-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "gemini-1",
    slug: "gemini",
    title: "Gemini",
    provider: "  Google",
    tagline: "Fast general-purpose assistant for everyday productivity.",
    description:
      "Fast general-purpose assistant for everyday tasks like summaries, Q&A, and ideation.",
    about: [
      "Gemini is a fast assistant for common tasks like summaries, brainstorming, and Q&A.",
      "It’s often used to speed up research workflows and general productivity.",
      "Great when you want quick iterations and lightweight help.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Optimized for quick responses",
      "Good for ideation and summaries",
    ],
    tags: [
      { id: "gemini-text", label: "Text" },
      { id: "gemini-chat", label: "Chat" },
      { id: "gemini-code", label: "Code" },
      { id: "gemini-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "llama-1",
    slug: "llama",
    title: "Llama",
    provider: "  Meta",
    tagline: "Open model option for lightweight chats and drafts.",
    description:
      "Open model option for lightweight chats, drafts, and general-purpose tasks.",
    about: [
      "Llama is an open model option suitable for lightweight drafting and general Q&A.",
      "It’s commonly used where flexibility, experimentation, or open-model workflows are preferred.",
      "Good for basic chat, short drafts, and simple assistance.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Good for lightweight tasks",
      "Great for experimentation",
    ],
    tags: [
      { id: "llama-text", label: "Text" },
      { id: "llama-draft", label: "Draft" },
      { id: "llama-code", label: "Code" },
      { id: "llama-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },

  // Duplicate rows (dummy) — keep same content but unique IDs + unique slugs
  {
    id: "gpt-4o-2",
    slug: "gpt-4o-2",
    title: "GPT-4o",
    provider: "  Open AI",
    tagline: "High-intelligence model for fast, reliable reasoning and writing.",
    description:
      "A concise, original description explaining what the model is and how users typically use it.",
    about: [
      "GPT-4o is designed for general-purpose chat, writing, analysis, and code assistance.",
      "It’s typically used for multi-step reasoning, drafting professional content, and structured outputs.",
      "Best for teams who need consistent, production-ready results across many tasks.",
    ],
    characteristics: defaultCharacteristics,
    tags: [
      { id: "gpt4o2-text", label: "Text" },
      { id: "gpt4o2-code", label: "Code" },
      { id: "gpt4o2-msg-1", label: "Message" },
      { id: "gpt4o2-msg-2", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "claude-2",
    slug: "claude-2",
    title: "Claude",
    provider: "  Anthropic",
    tagline: "Great for long context, calm tone, and thoughtful responses.",
    description:
      "Great for long context writing, reasoning, and structured responses with a friendly tone.",
    about: [
      "Claude is commonly used for long-form writing, reviewing documents, and structured reasoning.",
      "It’s helpful when you want a friendly tone and strong long-context handling.",
      "Good for drafts, policies, customer support responses, and analysis.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Strong long-context reading and summarization",
      "Great for drafting and editing",
    ],
    tags: [
      { id: "claude2-text", label: "Text" },
      { id: "claude2-research", label: "Research" },
      { id: "claude2-code", label: "Code" },
      { id: "claude2-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "gemini-2",
    slug: "gemini-2",
    title: "Gemini",
    provider: "  Google",
    tagline: "Fast general-purpose assistant for everyday productivity.",
    description:
      "Fast general-purpose assistant for everyday tasks like summaries, Q&A, and ideation.",
    about: [
      "Gemini is a fast assistant for common tasks like summaries, brainstorming, and Q&A.",
      "It’s often used to speed up research workflows and general productivity.",
      "Great when you want quick iterations and lightweight help.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Optimized for quick responses",
      "Good for ideation and summaries",
    ],
    tags: [
      { id: "gemini2-text", label: "Text" },
      { id: "gemini2-chat", label: "Chat" },
      { id: "gemini2-code", label: "Code" },
      { id: "gemini2-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },
  {
    id: "llama-2",
    slug: "llama-2",
    title: "Llama",
    provider: "  Meta",
    tagline: "Open model option for lightweight chats and drafts.",
    description:
      "Open model option for lightweight chats, drafts, and general-purpose tasks.",
    about: [
      "Llama is an open model option suitable for lightweight drafting and general Q&A.",
      "It’s commonly used where flexibility, experimentation, or open-model workflows are preferred.",
      "Good for basic chat, short drafts, and simple assistance.",
    ],
    characteristics: [
      ...defaultCharacteristics,
      "Good for lightweight tasks",
      "Great for experimentation",
    ],
    tags: [
      { id: "llama2-text", label: "Text" },
      { id: "llama2-draft", label: "Draft" },
      { id: "llama2-code", label: "Code" },
      { id: "llama2-msg", label: "Message" },
    ],
    category: "chat",
    ...base,
  },

  // Image / Video / Agents
  {
    id: "image-gen-1",
    slug: "imagegen",
    title: "ImageGen",
    provider: "  Vinony",
    credits: 3,
    creditsUnit: "credit/image",
    ctaLabel: "Try Now",
    tagline: "Generate high-quality images from prompts with styles and variations.",
    description: "Generate high quality images from prompts with styles and variations.",
    about: [
      "ImageGen converts your prompts into images with multiple styles and variations.",
      "Use it for marketing creatives, UI concepts, thumbnails, and product visuals.",
      "Best for fast iteration and exploration.",
    ],
    characteristics: [
      "Prompt-to-image generation",
      "Style & variation support",
      "Great for creative iteration",
      "Output format depends on implementation",
    ],
    tags: [
      { id: "imagegen-image", label: "Image" },
      { id: "imagegen-style", label: "Style" },
      { id: "imagegen-hd", label: "HD" },
      { id: "imagegen-msg", label: "Message" },
    ],
    category: "image",
  },
  {
    id: "video-gen-1",
    slug: "videogen",
    title: "VideoGen",
    provider: "  Vinony",
    credits: 5,
    creditsUnit: "credit/video",
    ctaLabel: "Try Now",
    tagline: "Create short videos from text prompts with motion and scene control.",
    description: "Create short videos from text prompts with motion and scene control.",
    about: [
      "VideoGen creates short clips from text prompts.",
      "Useful for promo clips, social media content, and concept previews.",
      "Best for rapid prototyping before full video production.",
    ],
    characteristics: [
      "Text-to-video generation",
      "Motion and scene control (depends on implementation)",
      "Short-form outputs",
      "Best for prototyping",
    ],
    tags: [
      { id: "videogen-video", label: "Video" },
      { id: "videogen-motion", label: "Motion" },
      { id: "videogen-scene", label: "Scene" },
      { id: "videogen-msg", label: "Message" },
    ],
    category: "video",
  },
  {
    id: "agent-1",
    slug: "agent-pro",
    title: "Agent Pro",
    provider: "  Vinony",
    credits: 1,
    creditsUnit: "credit/task",
    ctaLabel: "Try Now",
    tagline: "Task-based agent for workflows like research, planning, and summarization.",
    description: "Task-based agent for workflows like research, planning, and summarization.",
    about: [
      "Agent Pro runs multi-step tasks like research, planning, and structured summaries.",
      "Use it for repeatable workflows and productivity automation.",
      "Best when you want outputs in a consistent format.",
    ],
    characteristics: [
      "Task-based workflows",
      "Multi-step execution (depends on implementation)",
      "Great for repeatable processes",
      "Structured outputs",
    ],
    tags: [
      { id: "agentpro-agent", label: "Agent" },
      { id: "agentpro-tasks", label: "Tasks" },
      { id: "agentpro-automation", label: "Automation" },
      { id: "agentpro-msg", label: "Message" },
    ],
    category: "agents",
  },
];


    
import type { MarqueeItem } from "@/types/marquee";

export const DEFAULT_MODELS_MARQUEE: MarqueeItem[] = [
    { id: "veo2-1", label: "Veo 2" },
    { id: "llama-31", label: "Llama 3.1" },
    { id: "flux", label: "Flux" },
    { id: "claude-sonnet", label: "Claude Sonnet" },
    { id: "gpt-4o", label: "GPT-4o" },
    { id: "veo2-2", label: "Veo 2" },
];
