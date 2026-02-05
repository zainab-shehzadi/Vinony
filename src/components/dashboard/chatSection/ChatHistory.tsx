// import { useState } from "react";
import { CircleDollarSign } from "lucide-react";
// import { historyData } from "@/constants/static-data";
import { messages } from "@/constants/static-data";

interface ChatHistoryProps {
  selectedHeading: string;
  onSelectChat: (heading: string, data: any) => void;
}

function ChatHistory({ selectedHeading, onSelectChat }: ChatHistoryProps) {

  return (
    <div className="w-full bg-background overflow-y-auto hide-scrollbar">
      <div className="flex flex-col">
        {Object.entries(messages).map(([heading, data], index) => {
          const isActive = selectedHeading === heading;
          return (
            <div
              key={index}
              onClick={() => onSelectChat(heading, data)}
              className={`group flex items-center justify-between px-6 py-4 cursor-pointer transition-all duration-200 border-b border-border 
                ${
                  isActive
                    ? "bg-primary/10 border-r-4 border-r-primary border-b-border"
                    : "hover:bg-card border-r-4 border-r-transparent  border-b-border border-t-border"
                }`}
            >
              {/* Left Side: Title and Meta Info */}
              <div className="flex flex-col gap-1 flex-1">
                <h3
                  className={`text-base font-medium transition-colors text-foreground`}
                >
                  {heading}
                </h3>

                <div className="flex items-center gap-4 text-accent/70 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CircleDollarSign size={18} className="text-primary" />
                    <span className="text-base font-semibold">
                      {data.metadata.totalCredits}
                    </span>
                  </div>
                  <span className="text-xs">{data.metadata.date}</span>
                </div>
              </div>

              {/* Right Side: Model Name */}
              <div className="text-right">
                <span className={`text-base font-normal text-foreground`}>
                  {data.metadata.modelName}
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
