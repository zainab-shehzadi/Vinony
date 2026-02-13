import React, { type ReactNode, useMemo, useState } from "react";
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  unstable_useRemoteThreadListRuntime as useRemoteThreadListRuntime,
  type unstable_RemoteThreadListAdapter as RemoteThreadListAdapter,
} from "@assistant-ui/react";
import { createAssistantStream } from "assistant-stream";
import { createModelAdapter } from "./modelAdapter";

type Props = { children: ReactNode };

type ThreadStatus = "regular" | "archived";

type StoredThread = {
  id: string;
  title?: string;
  status: ThreadStatus;
  updatedAt: number;
};

const LS_KEY = "vinony_chat_threads_v1";

function normalizeStatus(v: unknown): ThreadStatus {
  return v === "archived" ? "archived" : "regular";
}

function loadThreads(): StoredThread[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((t: any): StoredThread | null => {
        const id = typeof t?.id === "string" ? t.id : String(t?.id ?? "");
        if (!id) return null;

        return {
          id,
          title: typeof t?.title === "string" ? t.title : undefined,
          status: normalizeStatus(t?.status),
          updatedAt: typeof t?.updatedAt === "number" ? t.updatedAt : Date.now(),
        };
      })
      .filter(Boolean) as StoredThread[];
  } catch {
    return [];
  }
}

function saveThreads(threads: StoredThread[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(threads));
}

function upsertThread(next: StoredThread) {
  const threads = loadThreads();
  const idx = threads.findIndex((t) => t.id === next.id);
  const updated =
    idx === -1 ? [next, ...threads] : threads.map((t) => (t.id === next.id ? next : t));
  saveThreads(updated);
}

export function ChatProvider({ children }: Props) {
  const [model, setModel] = useState("gpt-5-nano");

  // ✅ correct LocalRuntime adapter (dummy streaming reply)
  const modelAdapter = useMemo(() => createModelAdapter({ model }), [model]);

  const adapter: RemoteThreadListAdapter = useMemo(
    () => ({
      async list() {
        const threads = loadThreads()
          .sort((a, b) => b.updatedAt - a.updatedAt)
          .map((t) => ({
            remoteId: t.id,
            externalId: t.id, // ✅ add
            status: t.status,
            title: t.title,
          }));

        return { threads };
      },

      async initialize(localId) {
        const id = String(localId);

        upsertThread({ id, status: "regular", updatedAt: Date.now() });

        // ✅ your version requires externalId
        return { remoteId: id, externalId: id };
      },

      async rename(remoteId, title) {
        const id = String(remoteId);
        const t = loadThreads().find((x) => x.id === id);
        upsertThread({ id, title, status: t?.status ?? "regular", updatedAt: Date.now() });
      },

      async archive(remoteId) {
        const id = String(remoteId);
        const t = loadThreads().find((x) => x.id === id);
        upsertThread({ id, title: t?.title, status: "archived", updatedAt: Date.now() });
      },

      async unarchive(remoteId) {
        const id = String(remoteId);
        const t = loadThreads().find((x) => x.id === id);
        upsertThread({ id, title: t?.title, status: "regular", updatedAt: Date.now() });
      },

      async delete(remoteId) {
        const id = String(remoteId);
        saveThreads(loadThreads().filter((t) => t.id !== id));
      },

      async fetch(remoteId) {
        const id = String(remoteId);
        const t = loadThreads().find((x) => x.id === id);
        return {
          remoteId: id,
          externalId: id, // ✅ add
          status: t?.status ?? "regular",
          title: t?.title,
        };
      },

      async generateTitle(remoteId, messages: any[]) {
        const id = String(remoteId);

        return createAssistantStream(async (controller) => {
          const firstUser = messages?.find((m) => m?.role === "user");
          const text =
            (firstUser?.content?.[0]?.type === "text" && firstUser.content[0]?.text) ||
            (typeof firstUser?.content === "string" ? firstUser.content : "") ||
            "New chat";

          const title = String(text).slice(0, 32);
          controller.appendText(title);

          const t = loadThreads().find((x) => x.id === id);
          upsertThread({ id, title, status: t?.status ?? "regular", updatedAt: Date.now() });
        });
      },
    }),
    []
  );

  const runtime = useRemoteThreadListRuntime({
    runtimeHook: () => useLocalRuntime(modelAdapter),
    adapter,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ModelContext.Provider value={{ model, setModel }}>{children}</ModelContext.Provider>
    </AssistantRuntimeProvider>
  );
}

type ModelCtx = { model: string; setModel: (m: string) => void };

export const ModelContext = React.createContext<ModelCtx | null>(null);

export const useModel = () => {
  const ctx = React.useContext(ModelContext);
  if (!ctx) throw new Error("useModel must be used inside ChatProvider");
  return ctx;
};
