import { Thread } from "@/components/assistant-ui/thread";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { useModel } from "./ChatProvider";

const MODELS = [
  { label: "GPT-5 Nano", value: "gpt-5-nano" },
  { label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Claude", value: "claude" },
];

const SUGGESTIONS = [
  { title: "What's the weather", subtitle: "in San Francisco?" },
  { title: "Explain React hooks", subtitle: "like useState and useEffect" },
];

export function AssistantShell() {
  const { model, setModel } = useModel();

  return (
    <div className="w-full rounded-2xl border border-border bg-background text-foreground overflow-hidden">

      <div className="h-[720px] sm:h-[760px] lg:h-[820px] grid lg:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col border-r border-border bg-card/40">
          <div className="p-4">
            <div className="text-sm font-semibold">assistant-ui</div>
          </div>
          <div className="px-3 pb-4 flex-1 min-h-0">
            {/* ✅ allow list to scroll if needed */}
            <div className="h-full overflow-auto pr-1">
              <ThreadList />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex flex-col min-h-0">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-card/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-sm text-muted-foreground">
                Model
              </div>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="h-10 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                {MODELS.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="h-10 rounded-xl border border-border bg-background px-3 text-sm hover:bg-hover">
              ⤴
            </button>
          </div>

          <div className="flex-1 min-h-0 p-4 ">
            <div className="mx-auto h-full max-w-4xl flex flex-col min-h-0 gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.title}
                    className="rounded-2xl border border-border bg-card/50 px-4 py-3 text-left hover:bg-hover transition"
                    onClick={() => alert(`${s.title} ${s.subtitle}`)}
                  >
                    <div className="text-sm font-medium">{s.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.subtitle}
                    </div>
                  </button>
                ))}
              </div>

              {/* Thread */}
              <div className="flex-1 min-h-0 rounded-2xl border border-border bg-card/30 overflow-hidden">
                {/* ✅ this will now fill remaining height properly */}
                <div className="h-full">
                  <Thread />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
