import { Input } from "@/components/ui/input";
import { CircleDollarSign, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { historyData } from "@/constants/static-data";

export default function AgentHistory() {
  const [activeId, setActiveId] = useState<string | number>(3);
  const [search, setSearch] = useState("");

  // 🔍 Filtered data based on search
  const filteredHistory = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return historyData;

    return historyData.filter((item) =>
      [item.title, item.modelName, item.date]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <div className="w-full bg-background mt-5 md:mt-0">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="text-[16px] md:text-lg font-bold text-foreground">
            Your Agents
          </h3>
          <span className="text-sm md:text-[16px] text-accent font-medium px-2.5 mt-0.5 rounded-full">
            {historyData.length} Total
          </span>
        </div>

        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
          <Input
            placeholder="Search for agent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-input rounded-xl border border-border"
          />
        </div>
      </div>
      <div className="flex flex-col">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group flex items-center justify-between px-6 py-4 cursor-pointer transition-all duration-200 border-b border-gray-50 
                ${
                  isActive
                    ? "bg-primary/10 border-r-4 border-r-primary border-b-border"
                    : "hover:bg-card border-r-4 border-r-transparent  border-b-border border-t-border"
                }`}
              >
                {/* Left Side: Title and Meta Info */}
                <div className="flex flex-col gap-1 flex-1">
                  <h3
                    className={`text-[16px] font-medium transition-colors text-foreground`}
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 text-accent/70 font-medium">
                    <div className="flex items-center gap-1.5">
                      <CircleDollarSign size={18} className="text-primary" />
                      <span className="text-[16px] font-semibold">
                        {item.credits}
                      </span>
                    </div>
                    <span className="text-[12px]">{item.date}</span>
                  </div>
                </div>

                {/* Right Side: Model Name */}
                <div className="text-right">
                  <span className={`text-[16px] font-normal text-foreground`}>
                    {item.modelName}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="py-10 text-center text-accent text-sm">
              No agent history found
            </div>
          </>
        )}
      </div>
    </div>
  );
}
