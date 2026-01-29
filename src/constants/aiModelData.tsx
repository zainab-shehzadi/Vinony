import { Brain, Search, Sparkles, Wand2, Zap } from "lucide-react";
import soraImage1 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage2 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import nanoImage1 from "@/assets/G1.png";
import nanoImage2 from "@/assets/G2.png";
import nanoImage3 from "@/assets/G3.png";

export interface ModelConfig {
  id: string;
  baseLabel: string;
  icon: React.ReactNode;
  versions?: string[];
}

export const AI_CHAT_MODELS: ModelConfig[] = [
  {
    id: "gpt",
    baseLabel: "GPT",
    versions: ["7.0", "4.0", "o1"],
    icon: <Wand2 size={16} />,
  },
  {
    id: "deepseek",
    baseLabel: "Deepseek",
    versions: ["R1", "V3"],
    icon: <Brain size={16} className="text-[#6881FD]" />,
  },
  {
    id: "gemini3",
    baseLabel: "Gemini 3 Flash",
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "grok",
    baseLabel: "Grok",
    versions: ["4.1 Fast", "3.0"],
    icon: <Zap size={16} className="text-primaryDark" />,
  },
  {
    id: "gemini",
    baseLabel: "Gemini",
    versions: ["Pro", "Ultra"],
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];


export const AI_IMAGE_MODELS: ModelConfig[] = [
  {
    id: "soraimage",
    baseLabel: "Sora Image",
    icon: <Wand2 size={16} />,
  },
  {
    id: "unikorn",
    baseLabel: "UniKorn",
    icon: <Brain size={16} className="text-[#6881FD]" />,
  },
  {
    id: "nanobanana",
    baseLabel: "Nano Banana",
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "seedream",
    baseLabel: "Seedream",
    icon: <Zap size={16} className="text-primaryDark" />,
  },
  {
    id: "flux",
    baseLabel: "Flux.1 Kontext",
    versions: ["Pro", "Ultra"],
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "ideogram",
    baseLabel: "Ideogram",
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];




export const GENERATED_GROUPS = [
  {
    id: "today",
    label: "Today",
    total: 12,
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage1, soraImage2, soraImage3, soraImage1]
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Nano Banana",
        images: [nanoImage1, nanoImage2, nanoImage3, nanoImage1]
      }
    ]
  },
  {
    id: "prev-7",
    label: "Previous 7 Days",
    total: 118,
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage2, soraImage1, soraImage3, soraImage2]
      }
    ]
  }
];