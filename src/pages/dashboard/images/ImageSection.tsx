import CreationInput from "@/components/dashboard/imageSection/CreationInput";
import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { AI_IMAGE_MODELS, ModelConfig } from "@/constants/aiModelData";
import GeneratedHistory from "@/components/dashboard/imageSection/GeneratedHistory";


export default function ImageSection() {
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(
    AI_IMAGE_MODELS[0],
  );
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_IMAGE_MODELS[0].versions?.[0] || "",
  );
  return (
    <>
      <div className="flex w-full flex-col min-h-screen">
        <div className="w-full max-w-[74rem] mx-auto overflow-hidden">
          <Modelbar
            models={AI_IMAGE_MODELS}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            activeVersion={activeVersion}
            setActiveVersion={setActiveVersion}
          />
        </div>

        <div className="flex-grow overflow-y-auto flex flex-col items-center px-5 py-10 no-scrollbar">
          <div className={`w-full`}>
            <CreationInput />
          </div>
          {/* <GeneratedImage/> */}
          <GeneratedHistory/>
        </div>
      </div>
    </>
  );
}
// ${reqGenerate ? 'mt-auto -mb-7 2xl:-mb-10 ' : 'mt-auto -mb-7 md:mt-0'}
