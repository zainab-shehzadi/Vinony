import { useState, useMemo, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { GENERATED_VideoGROUPS } from "@/constants/historyData.ts";
import { groupDataByDate } from "@/services/group-by-date.ts";
import VideoPlayer from "./VideoPlayer";

export default function VideoHistory() {
  const [moreText, setMoreText] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | number>();
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(() => {
    const grouped = groupDataByDate(GENERATED_VideoGROUPS);
    const query = search.toLowerCase().trim();

    if (!query) return grouped;
    return grouped
      .map((group) => {
        const filteredPrompts = group.prompts.filter((prompt: any) =>
          [prompt.text, prompt.model, prompt.date]
            .join(" ")
            .toLowerCase()
            .includes(query),
        );

        return {
          ...group,
          prompts: filteredPrompts,
        };
      })
      .filter((group) => group.prompts.length > 0);
  }, [search]);

  // const filteredGroups = useMemo(
  //   () => groupDataByDate(GENERATED_VideoGROUPS),
  //   [],
  // );

  useEffect(() => {
    if (filteredGroups.length > 0 && filteredGroups[0].prompts.length > 0) {
      const firstId = `${filteredGroups[0].id}-0`;
      setActiveId(firstId);
    }
  }, [filteredGroups]);

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
    <div className="w-full mx-auto py-3 md:py-0 space-y-5">
      <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center md:justify-between md:mb-6">
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for video"
            className="pl-10 bg-input rounded-xl border border-border"
          />
        </div>
      </div>

      {filteredGroups.length === 0 && (
        <div className="py-10 text-center text-accent text-sm">
          No history found for your search
        </div>
      )}

      <Accordion
        type="multiple"
        // defaultValue={["today", "yesterday"]}
        defaultValue={filteredGroups.map((g) => g.id)}
        className="w-full"
      >
        {filteredGroups.map((group, index) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="border-none"
          >
            {index !== 0 && (
              <div className="flex items-center justify-between py-2 border-t border-border md:mt-10">
                <h3 className="text-base md:text-lg font-bold">
                  {group.label}
                </h3>
                <AccordionTrigger className="p-0 mr-2 hover:no-underline flex gap-3 [&>svg]:size-6">
                  <div className="flex items-center">
                    <span className="text-sm md:text-base text-accent">
                      {getTotalImages(group.prompts)} Total
                    </span>
                  </div>
                </AccordionTrigger>
              </div>
            )}

            <AccordionContent
              className={`${index === 0 ? "pt-0" : "pt-4"} space-y-6`}
            >
              {group.prompts.map((prompt: any, pIdx: number) => {
                const uniqueId = `${group.id}-${pIdx}`;
                const isExpanded = moreText[uniqueId];
                const isActive = activeId === uniqueId;
                return (
                  <div key={uniqueId} className="space-y-4">
                    <div
                      className={`flex flex-col gap-1 md:gap-3 md:flex-row sm:items-start sm:justify-between text-sm py-4 px-2 cursor-pointer transition-all
                        ${activeId === uniqueId ? "bg-primary/10 border-r-4 border-r-primary" : "border-r-4 border-r-transparent"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleText(uniqueId);
                        setActiveId(uniqueId);
                      }}
                    >
                      <div className="flex items-start gap-12 flex-1 min-w-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                        <p
                          className={`text-foreground text-base font-medium transition-all ${isExpanded ? "whitespace-normal" : "truncate"}`}
                        >
                          {prompt.text}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleText(uniqueId);
                            setActiveId(uniqueId);
                          }}
                        >
                          <ChevronDown
                            size={26}
                            className={`transition-transform text-accent ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-accent whitespace-nowrap">
                        <span className="mt-1">{prompt.date}</span>
                        <span className="font-regular text-sm md:text-base text-foreground">
                          {prompt.model}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                      <VideoPlayer
                        videoSrc={prompt.video}
                        isActive={isActive}
                      />
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
