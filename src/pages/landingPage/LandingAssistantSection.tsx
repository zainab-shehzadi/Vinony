import { AssistantShell } from "./chat/AssistantShell";
import { ChatProvider } from "./chat/ChatProvider";

export function LandingAssistantSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ChatProvider>
          <AssistantShell />
        </ChatProvider>
      </div>
    </section>
  );
}
