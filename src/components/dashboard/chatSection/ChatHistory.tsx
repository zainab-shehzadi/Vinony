import { useState } from "react";
import { CircleDollarSign } from "lucide-react";

// Data Type definition for Type Safety
interface ChatHistoryItem {
  id: string | number;
  title: string;
  credits: number;
  date: string;
  modelName: string;
}

function ChatHistory() {
  const [activeId, setActiveId] = useState<string | number>(3);
  // Dynamic Data Array
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
  ];

  return (
    <div className=" bg-white font-sans mt-10 overflow-y-auto hide-scrollbar">
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
                    ? "bg-primary/10 border-r-4 border-r-primary"
                    : "hover:bg-gray-50 border-r-4 border-r-transparent"
                }`}
            >
              {/* Left Side: Title and Meta Info */}
              <div className="flex flex-col gap-1 flex-1">
                <h3
                  className={`text-[16px] font-medium transition-colors text-primaryDark`}
                >
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-accent/70 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CircleDollarSign size={18} className="text-primary" />
                    <span className="text-[16px] font-semibold">{item.credits}</span>
                  </div>
                  <span className="text-[12px]">{item.date}</span>
                </div>
              </div>

              {/* Right Side: Model Name */}
              <div className="text-right">
                <span
                  className={`text-[16px] font-normal text-primaryDark`}
                >
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

export default ChatHistory;
