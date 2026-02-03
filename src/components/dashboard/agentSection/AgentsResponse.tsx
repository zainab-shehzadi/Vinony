import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AgentMessages } from "@/constants/static-data";

export default function AgentsResponse() {
  return (
    <div className="min-h-screen bg-background pt-5">
      <div className="mx-auto space-y-8">
        {AgentMessages.map((msg) => {
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
                  <div className="flex-shrink-0 w-9 h-9 bg-input rounded-full flex items-center justify-center shadow-sm mt-1">
                    {msg.icon}
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* AI Header with Conditional Dropdown */}
                    <div className="flex items-center gap-2 px-1">
                      {hasVersions ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center gap-1 font-bold text-foreground text-[14px] outline-none hover:opacity-70 transition-opacity">
                            {msg.senderName}{" "}
                            <ChevronDown size={14} className="text-accent" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="start"
                            className="rounded-xl p-1 min-w-[150px] bg-background border border-border shadow-lg"
                          >
                            {msg.versions?.map((v) => (
                              <>
                                <DropdownMenuItem
                                  key={v}
                                  className="rounded-lg cursor-pointer focus:bg-grey-50 focus:text-textMuted p-2 text-sm"
                                >
                                  {msg.senderName} {v}
                                </DropdownMenuItem>
                                <hr className="border border-border" />
                              </>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <span className="font-bold text-foreground text-sm md:text-[16px]">
                          {msg.senderName}
                        </span>
                      )}

                      <span className="text-sm text-[#94A3B8] font-medium">
                        {msg.time}
                      </span>
                    </div>

                    {/* AI Message Bubble */}
                    <div className="bg-input p-5 rounded-[2rem] rounded-tl-none ">
                      <div className="bg-input p-5 rounded-[2rem] rounded-tl-none">
                        {Array.isArray(msg.content) ? (
                          <div className="space-y-6">
                            {" "}
                            {msg.content?.map((data, index) => (
                              <div key={index} className="space-y-2">
                                <h3 className="font-bold text-sm md:text-[16px] text-foreground">
                                  {data.heading}
                                </h3>

                                {/* Points List */}
                                <ul className="space-y-3">
                                  {data.paragraph?.map((point, idx) => (
                                    <li
                                      key={idx}
                                      className="flex gap-3 text-sm md:text-[16px] leading-relaxed text-accent"
                                    >
                                      <span className="text-primary font-bold min-w-[18px]">
                                        {idx + 1}
                                      </span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm md:text-[16px] leading-relaxed text-textMuted">
                            {msg.content}
                          </p>
                        )}
                        <h3 className="font-bold text-sm md:text-[16px] text-foreground mt-5">
                          {msg.conclude}
                        </h3>
                        <p className="flex gap-3 text-sm md:text-[16px] leading-relaxed text-accent font-normal">{msg.concludePara}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* User Section */
                <div className="w-full flex flex-col items-end gap-1 mb-6">
                  <div className="flex items-end leading-tight gap-2">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-5">
                        <span className="text-sm sm:text-[16px] font-bold text-foreground">
                          You
                        </span>
                        <span className="text-[12px] sm:text-xs font-normal text-accent mt-1">
                          {msg.time}
                        </span>
                      </div>
                      {msg.credit && (
                        <span className="text-[12px] md:text-sm font-semibold text-primary/80 mt-0.5">
                          {msg.credit} Credits used
                        </span>
                      )}
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-input rounded-full flex items-center justify-center shadow-sm overflow-hidden border border-border">
                      {msg.icon}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 mr-12">
                    <div className="bg-input px-5 py-2.5 rounded-[28px] rounded-tr-none shadow-sm">
                      <p className="text-sm md:text-[16px] text-accent">
                        {msg.content as string}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div> //checked
          );
        })}
      </div>
    </div>
  );
}
