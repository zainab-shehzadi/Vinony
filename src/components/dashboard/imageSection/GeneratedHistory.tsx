import { useMemo, useState } from "react";
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

export default function GeneratedHistory() {
  const [moreText, setMoreText] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string | number>();

  const filteredGroups = useMemo(() => groupDataByDate(GENERATED_GROUPS), []);

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
                <div className="flex items-center justify-between py-4 border-t border-border">
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

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
                                <Download size={18} />
                              </button>
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
    // <div className="w-full mx-auto p-6 space-y-5">
    //   <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
    //     <div className="flex items-center gap-3">
    //       <h3 className="text-[16px] md:text-lg font-bold text-primaryDark">
    //         Today
    //       </h3>

    //       <span className="text-sm md:text-[15px] text-accent font-medium px-2.5 py-0.5 rounded-full">
    //         {getTotalImages(
    //           GENERATED_GROUPS.find((g) => g.id === "today")?.prompts || [],
    //         )}{" "}
    //         Total
    //       </span>
    //     </div>

    //     <div className="relative w-full md:max-w-sm">
    //       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
    //       <Input
    //         placeholder="Search for image"
    //         className="pl-10 bg-white rounded-xl"
    //       />
    //     </div>
    //   </div>

    //   <Accordion
    //     type="multiple"
    //     defaultValue={["today"]}
    //     className="w-full space-y-10"
    //   >
    //     {GENERATED_GROUPS.map((group) => (
    //       <AccordionItem
    //         key={group.id}
    //         value={group.id}
    //         className="border-none"
    //       >
    //         {group.id !== "today" && (
    //           <div className="flex items-center justify-between py-4 border-t border-slate-100">
    //             <h3 className="text-[16px] font-bold">{group.label}</h3>
    //             <div className="flex items-center gap-2">
    //               <span className="text-sm text-accent">
    //                 {getTotalImages(
    //                   GENERATED_GROUPS.find((g) => g.id !== "today")?.prompts ||
    //                     [],
    //                 )}{" "}
    //                 Total
    //               </span>
    //               <AccordionTrigger className="p-0 hover:no-underline" />
    //             </div>
    //           </div>
    //         )}

    //         <AccordionContent className="pt-4 space-y-12">
    //           {group.prompts.map((prompt, pIdx) => {
    //             const isExpanded = moreText[String(pIdx)];
    //             const isActive = activeId === pIdx;
    //             return (
    //               <div key={pIdx} className="space-y-4">
    //                 <div
    //                   className={`flex flex-col gap-3 md:flex-row sm:items-start sm:justify-between text-sm py-3 px-2 ${
    //                     isActive
    //                       ? "bg-primary/10 border-r-4 border-r-primary"
    //                       : "border-r-4 border-r-transparent"
    //                   }`}
    //                   onClick={()=> setActiveId(pIdx)}
    //                 >
    //                   <div className="flex items-start gap-4 flex-1 min-w-0">
    //                     <div className="flex-1 min-w-0">
    //                       <p
    //                         className={`text-primaryDark font-medium transition-all duration-300 ${
    //                           isExpanded ? "whitespace-normal" : "truncate"
    //                         }`}
    //                       >
    //                         {prompt.text}
    //                       </p>
    //                     </div>
    //                     <button
    //                       onClick={() => {
    //                         toggleText(String(pIdx));
    //                       }}
    //                       className="flex-shrink-0 p-1 hover:bg-slate-100 rounded-full transition-all duration-300"
    //                     >
    //                       <ChevronDown
    //                         size={20}
    //                         className={`text-accent transition-transform duration-300 ${
    //                           isExpanded ? "rotate-180" : "rotate-0"
    //                         }`}
    //                       />
    //                     </button>
    //                   </div>
    //                   <div className="flex items-center gap-6 whitespace-nowrap text-accent flex-shrink-0">
    //                     <span>{prompt.date}</span>
    //                     <span className="font-bold text-primaryDark">
    //                       {prompt.model}
    //                     </span>
    //                   </div>
    //                 </div>

    //                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //                   {prompt.images.map((img, iIdx) => (
    //                     <div
    //                       key={iIdx}
    //                       className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100"
    //                     >
    //                       <img
    //                         src={img}
    //                         className="w-full h-full object-cover transition-transform group-hover:scale-105"
    //                         alt="Generated"
    //                       />
    //                       <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
    //                         <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
    //                           <Download size={18} />
    //                         </button>
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </AccordionContent>
    //       </AccordionItem>
    //     ))}
    //   </Accordion>
    // </div>
  );
}