import { useState, useMemo } from "react";
import { ChevronDown, Download, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { GENERATED_VideoGROUPS } from "@/constants/aiModelData";
import { groupDataByDate } from "@/services/group-by-date.ts";

export default function VideoHistory() {
  const [moreText, setMoreText] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | number>();

  const filteredGroups = useMemo(
    () => groupDataByDate(GENERATED_VideoGROUPS),
    [],
  );
  console.log("filtered groups", filteredGroups);

  const toggleText = (id: string) => {
    setMoreText((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // const getTotalImages = (prompts: any[]) => {
  //   return prompts.reduce(
  //     (total, prompt) => total + (prompt.images?.length || 0),
  //     0,
  //   );
  // };

  const getTotalImages = (prompts: any[]) => {
    return prompts.reduce((total, prompt) => total + (prompt.video ? 1 : 0), 0);
  };

  return (
    <div className="w-full mx-auto p-6 space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-[16px] md:text-lg font-bold text-foreground">
            {filteredGroups[0]?.label || "History"}
          </h3>
          <span className="text-sm md:text-[16px] text-accent font-medium px-2.5 mt-0.5 rounded-full">
            {getTotalImages(filteredGroups[0]?.prompts || [])} Total
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

      <Accordion
        type="multiple"
        defaultValue={["today", "yesterday"]}
        className="w-full space-y-10"
      >
        {filteredGroups.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="border-none"
          >
            {group.id !== "today" && (
              <div className="flex items-center justify-between py-4 border-t border-border mt-10">
                <h3 className="text-[16px] md:text-lg font-bold">
                  {group.label}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm md:text-[16px] text-accent">
                    {getTotalImages(group.prompts)} Total
                  </span>
                  <AccordionTrigger className="p-0 hover:no-underline" />
                </div>
              </div>
            )}

            <AccordionContent
              className={`${group.id === "today" ? "pt-0" : "pt-4"} space-y-12`}
            >
              {group.prompts.map((prompt: any, pIdx: number) => {
                const uniqueId = `${group.id}-${pIdx}`;
                const isExpanded = moreText[uniqueId];
                return (
                  <div key={uniqueId} className="space-y-4">
                    <div
                      className={`flex flex-col gap-3 md:flex-row sm:items-start sm:justify-between text-sm py-4 px-2 cursor-pointer transition-all
                        ${activeId === uniqueId ? "bg-primary/10 border-r-4 border-r-primary" : "border-r-4 border-r-transparent"}`}
                      onClick={() => setActiveId(uniqueId)}
                    >
                      <div className="flex items-start gap-4 flex-1 min-w-0">
                        <p
                          className={`text-foreground text-[16px] font-medium transition-all ${isExpanded ? "whitespace-normal" : "truncate"}`}
                        >
                          {prompt.text}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleText(uniqueId);
                          }}
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform text-accent ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-6 text-[12px] text-accent whitespace-nowrap">
                        <span className="mt-1">{prompt.date}</span>
                        <span className="font-regular text-sm md:text-[16px] text-foreground">
                          {prompt.model}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="relative group w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-foreground border border-border shadow-lg">
                        <video
                          src={prompt.video}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                        />

                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300">
                          {/* Download Button */}
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm border border-white/10">
                              <Download size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
