import { ArrowUpRight, BookOpen, Globe } from "lucide-react";
import { SourcesData } from "@/constants/static-data";

export default function AgentSources() {
  return (
    <div className="w-full space-y-4 py-4">
      {/* Section Header */}
      <div className="flex items-center gap-2 px-1 text-foreground">
        <BookOpen size={20} />
        <span className="font-bold text-base md:text-lg tracking-tight">
          Sources
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SourcesData.map((source, index) => (
          <div
            key={index}
            className="group relative bg-input border border-border hover:border-primary/30 rounded-xl p-3.5 flex flex-col justify-between gap-3 transition-all duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <p className="font-semibold text-xs md:text-[13px] leading-snug text-foreground/90 group-hover:text-foreground line-clamp-2">
              {source.title}
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 min-w-0">
                <div className="bg-background rounded-full border border-border group-hover:border-primary/20">
                  <Globe
                    size={16}
                    className="text-accent group-hover:text-primary transition-colors"
                  />
                </div>
                <span className="text-[10px] font-medium text-accent truncate max-w-[120px]">
                  {source.url}
                </span>
              </div>

              <ArrowUpRight
                size={14}
                className="text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
