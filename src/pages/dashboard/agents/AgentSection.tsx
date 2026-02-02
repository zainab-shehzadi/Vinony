import AgentsResponse from "@/components/dashboard/agentSection/AgentsResponse";
import ChatInput from "@/components/dashboard/chatSection/ChatInput";
import { Modelbar } from "@/components/shared/model-bar";
import { AI_AGENT_MODELS, ModelConfig } from "@/constants/aiModelData";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AgentSources from "../../../components/dashboard/agentSection/AgentSources";
import AgentFrame from "../../../components/dashboard/agentSection/AgentFrame";
import AgentHistory from "@/components/dashboard/agentSection/AgentHistory";
import WebContainer from "@/lib/webContainer";

interface IContext {
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean) => void;
  reqAgentGenerate: Boolean;
  setReqAgentGenerate: (a: Boolean) => void;
  activeView: string;
}

export default function AgentSection() {
  const {
    activeHistory,
    setActiveHistory,
    reqAgentGenerate,
    setReqAgentGenerate,
    activeView,
  } = useOutletContext<IContext>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(
    AI_AGENT_MODELS[0],
  );
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_AGENT_MODELS[0].versions?.[0] || "",
  );
  return (
    <>
    <WebContainer>
        {activeView !== "my-history" && (
          <Modelbar
            models={AI_AGENT_MODELS}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            activeVersion={activeVersion}
            setActiveVersion={setActiveVersion}
          />
        )}

          {!reqAgentGenerate && activeView !== "my-history" && (
            <h1
              className={`text-2xl md:text-4xl font-semibold text-foreground my-auto md:mt-5 mb-10 text-center md:hidden`}
            >
              What can I help with?
            </h1>
          )}
          {reqAgentGenerate && (
            <div className="flex-grow overflow-y-auto pb-5">
              <AgentSources />
              <AgentsResponse />
              <AgentFrame />
            </div>
          )}

          {activeView !== "my-history" && (
            <div
              className={`w-full ${reqAgentGenerate ? "mt-auto -mb-7 2xl:-mb-10 " : "mt-auto -mb-7 md:mt-0"}`}
            >
              <ChatInput
                selectedModel={selectedModel}
                activeVersion={activeVersion}
                setActiveVersion={setActiveVersion}
                reqGenerate={reqAgentGenerate}
                setReqGenerate={setReqAgentGenerate}
                setActiveHistory={setActiveHistory}
              />
            </div>
          )}
          {activeView === "my-history" && (
          <AgentHistory/>
        )}
    </WebContainer>     
    </>
  );
}
