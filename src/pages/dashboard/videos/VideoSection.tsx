import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { AI_VIDEO_MODELS, ModelConfig } from "@/constants/aiModelData";
import { useOutletContext } from "react-router-dom";
import CreationInput from "@/components/dashboard/imageSection/CreationInput";
type OutletContextType = {
  activeView: String;
  reqGenerate: Boolean;
  setReqGenerate: (a: Boolean) => void;
  reqVideoGenerate: Boolean;
  setReqVideoGenerate: (a: Boolean) => void;
};
import { Video_Actions } from "@/constants/aiModelData";
import GeneratedVideo from "@/components/dashboard/videoSection/GeneratedVideo";
import VideoHistory from "@/components/dashboard/videoSection/VideoHistory";

export default function VideoSection() {
  const { activeView, reqVideoGenerate, setReqVideoGenerate } =
    useOutletContext<OutletContextType>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(
    AI_VIDEO_MODELS[0],
  );
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_VIDEO_MODELS[0].versions?.[0] || "",
  );
  return (
    <>
      <div className="flex w-full flex-col min-h-[90vh]">
        {activeView !== "video-history" && (
          <div className="w-full p-4 mx-auto overflow-hidden">
            <Modelbar
              models={AI_VIDEO_MODELS}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              activeVersion={activeVersion}
              setActiveVersion={setActiveVersion}
            />
          </div>
        )}

        <div className="flex-grow overflow-y-auto flex flex-col items-center px-5 py-8 no-scrollbar">
          {activeView !== "video-history" && (
            <div className={`w-full`}>
              <CreationInput
                setReqGenerate={setReqVideoGenerate}
                Placeholder="Describe the video you want to generate... e.g., A futuristic cityscape at sunset"
                Actions={Video_Actions}
              />
            </div>
          )}
          {reqVideoGenerate && <GeneratedVideo />}
          {activeView === "video-history" && <VideoHistory />}
        </div>
      </div>
    </>
  );
}
