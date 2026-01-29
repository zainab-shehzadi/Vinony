import ChatHistory from "@/components/dashboard/chatSection/ChatHistory";
import ChatInput from "@/components/dashboard/chatSection/ChatInput";
import ChatResponse from "@/components/dashboard/chatSection/ChatResponse";
import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {AI_CHAT_MODELS, ModelConfig} from "@/constants/aiModelData"

interface IContext{
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean)=> void;
  reqChatGenerate: Boolean;
  setReqChatGenerate: (a: Boolean)=> void;
}

export default function Chat() {
  const {activeHistory, setActiveHistory,reqChatGenerate, setReqChatGenerate} = useOutletContext<IContext>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(AI_CHAT_MODELS[0]);
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_CHAT_MODELS[0].versions?.[0] || ""
  );
  // const [reqGenerate, setReqGenerate] = useState<Boolean>(false);

  return (
    <div className="flex w-full flex-col h-[90vh]">
      <Modelbar
        models={AI_CHAT_MODELS}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        activeVersion={activeVersion}
        setActiveVersion={setActiveVersion}
      />
      <div className="flex-grow overflow-y-auto flex flex-col items-center px-5 py-10 no-scrollbar">
        
        {!reqChatGenerate && !activeHistory && (
          <h1 className={`text-2xl md:text-4xl font-semibold text-foreground my-auto md:mt-5 mb-10 text-center`}>
            What can I help with?
          </h1>
        )}

        {reqChatGenerate && (
          <div className="flex-grow  overflow-y-auto">
             <ChatResponse/>
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
          <ChatHistory/>
        )}
      </div>
    </div>
  );
}
