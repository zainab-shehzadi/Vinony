import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Download, Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { GENERATED_GROUPS } from "@/constants/aiModelData";
import { groupDataByDate } from "@/services/group-by-date";
import { downloadImage } from "@/services/download-image";

export default function GeneratedHistory() {
  const [moreText, setMoreText] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | number>();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredGroups = useMemo(() => {
    const grouped = groupDataByDate(GENERATED_GROUPS);
    const query = search.toLowerCase().trim();

    if (!query) return grouped;
    return grouped
      .map((group) => {
        const filteredPrompts = group.prompts.filter((prompt: any) =>
          [
            prompt.text,
            prompt.model,
            prompt.date,
          ]
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

  useEffect(() => {
    if (filteredGroups.length > 0 && filteredGroups[0].prompts.length > 0) {
      const firstId = `${filteredGroups[0].id}-0`;
      setActiveId(firstId);
    }
  }, [filteredGroups]);

  const toggleText = (id: string) => {
    setMoreText((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const getTotalImages = (prompts: any[]) => {
    return prompts.reduce(
      (total, prompt) => total + (prompt.images?.length || 0),
      0,
    );
  };

  // const getTotalImages = (prompts: any[]) => {
  //   return prompts.reduce((total, prompt) => total + (prompt.video ? 1 : 0), 0);
  // };
  // const [moreText, setMoreText] = useState<Record<string, boolean>>({});
  // const [activeId, setActiveId] = useState<string | number>();
  // const toggleText = (id: string) => {
  //   setMoreText((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  // const getTotalImages = (prompts: any[]) => {
  //   return prompts.reduce((total, prompt) => {
  //     return total + prompt.images.length;
  //   }, 0);
  // };

  return (
    <>
      <div className="w-full mx-auto py-3 md:py-1 space-y-1 overflow-y-auto">
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
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
              placeholder="Search for image"
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
          className="w-full space-y-3"
          defaultValue={filteredGroups.map((g) => g.id)}
        >
          {filteredGroups.map((group, index) => (
            <AccordionItem
              key={group.id}
              value={group.id}
              className="border-none"
            >
              {index !== 0 && (
                <div className="flex items-center justify-between py-2 border-t border-border">
                  <h3 className="text-[16px] md:text-lg font-bold">
                    {group.label}
                  </h3>
                  <AccordionTrigger className="p-0 mr-2 hover:no-underline flex gap-3 [&>svg]:size-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base text-accent">
                        {getTotalImages(group.prompts)} Total
                      </span>
                    </div>
                  </AccordionTrigger>
                </div>
              )}

              <AccordionContent
                className={`${index === 0 ? "pt-0" : "pt-4"} space-y-6 mt-2`}
              >
                {group.prompts.map((prompt: any, pIdx: number) => {
                  const uniqueId = `${group.id}-${pIdx}`;
                  const isExpanded = moreText[uniqueId];
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
                            className={`text-foreground text-[16px] font-medium transition-all ${isExpanded ? "whitespace-normal" : "truncate"}`}
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
                          <span className="font-regular text-sm md:text-[16px] text-foreground">
                            {prompt.model}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {prompt.images.map((img: string, iIdx: number) => (
                          <div
                            key={iIdx}
                            className="relative group aspect-square rounded-2xl overflow-hidden border border-border"
                          >
                            <img
                              src={img}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              alt="Generated"
                            />
                            <div
                              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() =>
                                setOpenDropdown(
                                  openDropdown === index ? null : index,
                                )
                              }
                            >
                              <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
                                <Download size={18} />
                              </button>
                              {openDropdown === index && (
                                <div className="absolute right-0 mt-2 w-24 bg-input border border-border rounded-md shadow-lg z-50 overflow-hidden">
                                  <button
                                    onClick={() =>
                                      downloadImage(img, "png", setOpenDropdown)
                                    }
                                    className="w-full px-4 py-2 text-sm text-left hover:text-muted-foreground hover:bg-hover transition-colors"
                                  >
                                    PNG
                                  </button>
                                  <hr className="w-full border border-border" />
                                  <button
                                    onClick={() =>
                                      downloadImage(img, "jpg", setOpenDropdown)
                                    }
                                    className="w-full px-4 py-2 text-sm text-left hover:text-muted-foreground hover:bg-hover transition-colors"
                                  >
                                    JPEG
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
