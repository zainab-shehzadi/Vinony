import ChatHistory from "@/components/dashboard/chatSection/ChatHistory";
import ChatInput from "@/components/dashboard/chatSection/ChatInput";
import ChatResponse from "@/components/dashboard/chatSection/ChatResponse";
import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AI_CHAT_MODELS, ModelConfig } from "@/constants/aiModelData"
import WebContainer from "@/lib/webContainer";

interface IContext {
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean) => void;
  reqChatGenerate: Boolean;
  setReqChatGenerate: (a: Boolean) => void;
}

export default function Chat() {
  const { activeHistory, setActiveHistory, reqChatGenerate, setReqChatGenerate } = useOutletContext<IContext>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(AI_CHAT_MODELS[0]);
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_CHAT_MODELS[0].versions?.[0] || ""
  );

  return (
    <WebContainer>
      <Modelbar
        models={AI_CHAT_MODELS}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        activeVersion={activeVersion}
        setActiveVersion={setActiveVersion}
      />
      {!reqChatGenerate && !activeHistory && (
        <h1 className={`text-2xl md:text-4xl font-semibold text-foreground my-auto pt-4 md:pt-12 md:mt-5 mb-12 text-center`}>
          What can I help with?
        </h1>
      )}

      {reqChatGenerate && (
        <div className="flex-grow  overflow-y-auto">
          <ChatResponse />
        </div>
      )}

      <div className={`w-full ${reqChatGenerate ? 'mt-auto -mb-7 2xl:-mb-10 ' : 'mt-auto -mb-7 md:mt-0'}`}>
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
        <ChatHistory />
      )}
    </WebContainer>

  );
}
