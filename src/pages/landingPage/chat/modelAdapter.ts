import type { ChatModelAdapter } from "@assistant-ui/react";

// ✅ accept readonly arrays
function extractTextFromMessages(messages: readonly any[]): string {
  const lastUser = [...messages].reverse().find((m) => m?.role === "user");
  if (!lastUser) return "";

  // assistant-ui messages are usually: content: [{ type: "text", text: "..." }]
  const parts = Array.isArray(lastUser.content) ? lastUser.content : [];
  const textPart = parts.find((p: any) => p?.type === "text")?.text;

  if (typeof textPart === "string") return textPart;
  if (typeof lastUser.content === "string") return lastUser.content;

  return "";
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function createModelAdapter({ model }: { model: string }): ChatModelAdapter {
  return {
    // ✅ messages are readonly in assistant-ui
    async *run({ messages, abortSignal }) {
      const userText = extractTextFromMessages(messages);

      const reply =
        userText.trim().length > 0
          ? `(${model}) Dummy reply ✅\nYou said: "${userText}"`
          : `(${model}) Dummy reply ✅\nSay something and I will echo it.`;

      let acc = "";
      for (const ch of reply) {
        if (abortSignal?.aborted) return;

        acc += ch;

        yield {
          content: [{ type: "text", text: acc }],
        };

        await sleep(8);
      }
    },
  };
}
