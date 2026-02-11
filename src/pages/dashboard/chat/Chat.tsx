import ChatHistory from "@/components/dashboard/chatSection/ChatHistory";
import ChatInput from "@/components/dashboard/chatSection/ChatInput";
import ChatResponse from "@/components/dashboard/chatSection/ChatResponse";
import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AI_CHAT_MODELS, ModelConfig } from "@/constants/aiModelData";

interface IContext {
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean) => void;
  reqChatGenerate: Boolean;
  setReqChatGenerate: (a: Boolean) => void;
  selectedChat: [string, any];
  setSelectedChat
}

export default function Chat() {
  const {
    activeHistory,
    setActiveHistory,
    reqChatGenerate,
    setReqChatGenerate,
    selectedChat,
    setSelectedChat
  } = useOutletContext<IContext>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(
    AI_CHAT_MODELS[0],
  );
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_CHAT_MODELS[0].versions?.[0] || "",
  );

  return (
    // <WebContainer
     <div className="flex w-full flex-col h-[90vh] px-4 md:px-10 md:pb-0 md:pt-10 xl:px-16">
      <Modelbar
        models={AI_CHAT_MODELS}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        activeVersion={activeVersion}
        setActiveVersion={setActiveVersion}
      />
      {!reqChatGenerate && !activeHistory && (
        <h1
          className={`text-2xl md:text-4xl font-semibold text-foreground my-auto pt-4 md:pt-32 lg:pt-12 md:mt-5 mb-12 text-center`}
        >
          What can I help with?
        </h1>
      )}

      {reqChatGenerate && (
        <div className="flex-1 overflow-y-auto w-full no-scrollbar">
          <ChatResponse activeChat={selectedChat} />
        </div>
      )}

      <div
        className={`w-full ${reqChatGenerate ? "mt-auto -mb-4 " : activeHistory ? "mt-0" : "mt-auto -mb-5 md:mt-2 lg:mt-0"}`}
      >
        <ChatInput
          selectedModel={selectedModel}
          activeVersion={activeVersion}
          setActiveVersion={setActiveVersion}
          reqGenerate={reqChatGenerate}
          setReqGenerate={setReqChatGenerate}
          setActiveHistory={setActiveHistory}
        />
      </div>
      {!reqChatGenerate && activeHistory && (
        <ChatHistory
          selectedHeading={selectedChat[0]}
          onSelectChat={(heading, data) => {
            setSelectedChat([heading, data]);
            setReqChatGenerate(true);
            setActiveHistory(false);
          }}
        />
      )}
     {/* </WebContainer> */}
    </div>
  );
}
