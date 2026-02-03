import { Input } from "@/components/ui/input";
import { CircleDollarSign, Search } from "lucide-react";
import { useState } from "react";

interface ChatHistoryItem {
  id: string | number;
  title: string;
  credits: number;
  date: string;
  modelName: string;
}

export default function AgentHistory() {
  const [activeId, setActiveId] = useState<string | number>(3);
  const historyData: ChatHistoryItem[] = [
    {
      id: 1,
      title: "How to be a better person?",
      credits: 24,
      date: "14/04/2025",
      modelName: "Deepseek R1",
    },
    {
      id: 2,
      title: "Hacking FBI server with linux",
      credits: 24,
      date: "14/04/2025",
      modelName: "Gemini 3 Flash",
    },
    {
      id: 3,
      title: "How to get rich from youtube as an influencer",
      credits: 24,
      date: "14/04/2025",
      modelName: "Gemini 3 Flash",
    },
    {
      id: 4,
      title: "Help me with web development tasks from client",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
    {
      id: 5,
      title: "REACT NEXTJS Tutorial",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
    {
      id: 6,
      title: "REACT NEXTJS Tutorial",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
    {
      id: 7,
      title: "REACT NEXTJS Tutorial",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
    {
      id: 8,
      title: "REACT NEXTJS Tutorial",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
    {
      id: 9,
      title: "Help me with web development tasks from client",
      credits: 24,
      date: "14/04/2025",
      modelName: "Grok 4.1 Fast",
    },
  ];
  return (
    <div className="w-full bg-background sm:mt-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-[16px] md:text-lg font-bold text-foreground">
            Your Chats
          </h3>
          <span className="text-sm md:text-[16px] text-accent font-medium px-2.5 mt-0.5 rounded-full">
            {historyData.length} Total
          </span>
        </div>

        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
          <Input
            placeholder="Search for video"
            className="pl-10 bg-input rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col">
        {historyData.map((item) => {
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`group flex items-center justify-between px-6 py-4 cursor-pointer transition-all duration-200 border-b border-gray-50 
                ${
                  isActive
                    ? "bg-primary/10 border-r-4 border-r-primary border-b-border"
                    : "hover:bg-card border-r-4 border-r-transparent  border-b-border border-t-border"
                }`}
            >
              {/* Left Side: Title and Meta Info */}
              <div className="flex flex-col gap-1 flex-1">
                <h3
                  className={`text-[16px] font-medium transition-colors text-foreground`}
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-accent/70 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CircleDollarSign size={18} className="text-primary" />
                    <span className="text-[16px] font-semibold">
                      {item.credits}
                    </span>
                  </div>
                  <span className="text-[12px]">{item.date}</span>
                </div>
              </div>

              {/* Right Side: Model Name */}
              <div className="text-right">
                <span className={`text-[16px] font-normal text-foreground`}>
                  {item.modelName}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
