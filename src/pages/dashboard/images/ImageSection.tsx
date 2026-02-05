import CreationInput from "@/components/dashboard/imageSection/CreationInput";
import { Modelbar } from "@/components/shared/model-bar";
import { useState } from "react";
import { AI_IMAGE_MODELS, ModelConfig } from "@/constants/aiModelData";
import GeneratedHistory from "@/components/dashboard/imageSection/GeneratedHistory";
import { useOutletContext } from "react-router-dom";
import GeneratedImage from "@/components/dashboard/imageSection/GeneratedImage";
import { Image_Actions } from "@/constants/aiModelData"
import WebContainer from "@/lib/webContainer";

type OutletContextType = {
  activeView: String;
  reqGenerate: Boolean;
  setReqGenerate: (a: Boolean) => void;
};

export default function ImageSection() {
  const { activeView, setReqGenerate, reqGenerate } =
    useOutletContext<OutletContextType>();
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(
    AI_IMAGE_MODELS[0],
  );
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_IMAGE_MODELS[0].versions?.[0] || "",
  );
  return (
    <>
      <WebContainer>
        {activeView === "" && (
           <Modelbar
          models={AI_IMAGE_MODELS}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          activeVersion={activeVersion}
          setActiveVersion={setActiveVersion}
        />
        )}
       

        {activeView !== "image-history" && (
          <div className={`w-full`}>
            <CreationInput
              setReqGenerate={setReqGenerate}
              Placeholder="Describe the image you want to generate... e.g., A futuristic cityscape at sunset"
              Actions={Image_Actions}
            />
          </div>
        )}
        {reqGenerate && <GeneratedImage />}
        {activeView === "image-history" && <GeneratedHistory />}

      </WebContainer>

    </>
  );
}
