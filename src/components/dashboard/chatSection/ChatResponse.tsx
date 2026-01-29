import React from "react";
import { Bot, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  senderName?: string;
  time?: string;
  content: string | string[];
  credit?: string;
  versions?: string[];
}

const ChatResponse: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      id: 1,
      role: "user",
      content: "let's say it does - what happens then?",
      credit: "4",
    },
    {
      id: 2,
      role: "assistant",
      senderName: "GPT 7.0",
      versions: ["7.0", "4.0", "o1"],
      time: "02:22 AM",
      content: [
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
      ],
    },
    {
      id: 3,
      role: "user",
      content: "let's say it does - what happens then?",
      credit: "4",
    },
    {
      id: 4,
      role: "assistant",
      senderName: "GPT 7.0",
      versions: ["7.0", "4.0", "o1"],
      time: "02:22 AM",
      content: [
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className=" p-4 mx-auto space-y-8">
        {messages.map((msg) => {
          const hasVersions = msg.versions && msg.versions.length > 0;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="flex w-full gap-3 min-h-[400px]">
                  {/* AI Avatar */}
                  <div className="flex-shrink-0 w-9 h-9 bg-[#EEF2FF] rounded-full flex items-center justify-center shadow-sm mt-1">
                    <Bot size={18} className="text-primary" />
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* AI Header with Conditional Dropdown */}
                    <div className="flex items-center gap-2 px-1">
                      {hasVersions ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-1 font-bold text-primaryDark text-[14px] outline-none hover:opacity-70 transition-opacity">
                            {msg.senderName}{" "}
                            <ChevronDown size={14} className="text-slate-400" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="start"
                            className="rounded-xl p-1 min-w-[150px] bg-white border shadow-lg"
                          >
                            {msg.versions?.map((v) => (
                              <>
                                <DropdownMenuItem
                                  key={v}
                                  className="rounded-lg cursor-pointer focus:bg-grey-50 focus:text-textMuted p-2 text-sm"
                                >
                                  {msg.senderName} {v}
                                </DropdownMenuItem>
                                <hr />
                              </>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <span className="font-bold text-primaryDark text-[14px]">
                          {msg.senderName}
                        </span>
                      )}

                      <span className="text-sm text-[#94A3B8] font-medium">
                        {msg.time}
                      </span>
                    </div>

                    {/* AI Message Bubble */}
                    <div className="bg-[#F8FAFC] p-5 rounded-[2rem] rounded-tl-none ">
                      {Array.isArray(msg.content) ? (
                        <div className="space-y-4">
                          <p className="text-sm md:text-[16px] leading-relaxed text-textMuted">
                            {msg.content[0]}
                          </p>
                          <ul className="space-y-4">
                            {msg.content.slice(1).map((point, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text:sm md:text-[16px] leading-relaxed text-textMuted"
                              >
                                <span className="font-bold text-textMuted min-w-[15px]">
                                  {idx + 1}.
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-sm md:text-[16px] leading-relaxed text-textMuted">
                          {msg.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* User Section */
                <div className="w-full flex flex-col items-end">
                  {msg.credit && (
                    <div className="pr-2 mb-2">
                      <span className="text-sm font-bold text-primary tracking-tight">
                        {msg.credit} Credits used
                      </span>
                    </div>
                  )}
                  <div className="bg-[#F8FAFC] px-6 py-3 rounded-3xl rounded-tr-none shadow-sm max-w-[85%] text-right">
                    <p className="text-sm md:text-[16px] text-textMuted">
                      {msg.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatResponse;
