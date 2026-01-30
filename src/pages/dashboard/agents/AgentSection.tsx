import AgentsResponse from '@/components/dashboard/agentSection/AgentsResponse';
import ChatInput from '@/components/dashboard/chatSection/ChatInput';
import ChatResponse from '@/components/dashboard/chatSection/ChatResponse';
import { Modelbar } from '@/components/shared/model-bar'
import { AI_AGENT_MODELS, ModelConfig } from '@/constants/aiModelData'
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

interface IContext{
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean)=> void;
  reqChatGenerate: Boolean;
  setReqChatGenerate: (a: Boolean)=> void;
}


export default function AgentSection() {
  const {activeHistory, setActiveHistory,reqChatGenerate, setReqChatGenerate} = useOutletContext<IContext>();
    const [selectedModel, setSelectedModel] = useState<ModelConfig>(AI_AGENT_MODELS[0]);
    const [activeVersion, setActiveVersion] = useState<string>(
      AI_AGENT_MODELS[0].versions?.[0] || ""
    );
  return (
    <div>
      <div className="flex w-full flex-col h-[90vh]">
      <Modelbar
        models={AI_AGENT_MODELS}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        activeVersion={activeVersion}
        setActiveVersion={setActiveVersion}
      />
      <div className="flex-grow overflow-y-auto flex flex-col items-center px-5 py-10 no-scrollbar">
        
        {/* {!reqChatGenerate && !activeHistory && (
          <h1 className={`text-2xl md:text-4xl font-semibold text-foreground my-auto md:mt-5 mb-10 text-center`}>
            What can I help with?
          </h1>
        )} */}

        {reqChatGenerate && (
          <div className="flex-grow  overflow-y-auto">
             <AgentsResponse/>
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
        {/* {!reqChatGenerate && activeHistory && (
          <ChatHistory/>
        )} */}
      </div>
    </div>
    </div>
  )
}
