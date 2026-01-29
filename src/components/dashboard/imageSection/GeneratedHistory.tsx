import { Download, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { GENERATED_GROUPS } from "@/constants/aiModelData";

export default function GeneratedHistory() {
  return (
    <div className="w-full p-6 space-y-8">
      {/* Header with Search */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 py-3">
          <h3 className="text-[18px] font-bold text-primaryDark">Today</h3>
          <span className="text-[16px] text-accent font-medium">12 Total</span>
        </div>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
          <Input placeholder="Search for Image" className="pl-10 bg-white rounded-xl" />
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["today"]} className="w-full space-y-10">
        {GENERATED_GROUPS.map((group) => (
          <AccordionItem key={group.id} value={group.id} className="border-none">
            {/* Group Label (e.g., Previous 7 Days) */}
            {group.id !== "today" && (
              <div className="flex items-center justify-between py-4 border-t border-slate-100">
                <h3 className="text-[16px] font-bold text-textMuted">{group.label}</h3>
                <div className="flex items-center gap-2">
                   <span className="text-sm text-accent">{group.total}</span>
                   <AccordionTrigger className="p-0 hover:no-underline" />
                </div>
              </div>
            )}

            <AccordionContent className="pt-4 space-y-12">
              {group.prompts.map((prompt, pIdx) => (
                <div key={pIdx} className="space-y-4">
                  {/* Prompt Info Row */}
                  <div className="flex items-center justify-between text-sm bg-slate-50/50 p-3 rounded-lg border border-slate-100/50">
                    <div className="flex items-center gap-2 flex-1 truncate mr-4">
                       {/* <AccordionTrigger className="p-0 rotate-[-90deg] data-[state=open]:rotate-0 transition-transform" /> */}
                       <p className="truncate text-textMuted font-medium">{prompt.text}</p>
                    </div>
                    <div className="flex items-center gap-6 whitespace-nowrap text-accent">
                       <span>{prompt.date}</span>
                       <span className="font-bold text-primaryDark">{prompt.model}</span>
                    </div>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {prompt.images.map((img, iIdx) => (
                      <div key={iIdx} className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100">
                        <img src={img} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Generated" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
                            <Download size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}