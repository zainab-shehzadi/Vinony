import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IModel {
  id: string;
  icon: React.ReactNode;
  baseLabel: string;
  versions?: string[];
}

interface IProp {
  models: IModel[];
  selectedModel: IModel;
  setSelectedModel: (model: IModel) => void;
  activeVersion: string;
  setActiveVersion: (v: string) => void;
}

export function Modelbar({
  models,
  selectedModel,
  setSelectedModel,
  activeVersion,
  setActiveVersion,
}: IProp) {
  return (
    <nav className="w-full px-5 pt-10">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex w-max mx-auto gap-2.5 overflow-x-auto no-scrollbar pb-2 flex-nowrap">
          {models?.map((model) => {
            const isActive = selectedModel.id === model.id;
            const hasVersions = model.versions && model.versions.length > 0;

            const displayLabel =
              isActive && hasVersions
                ? `${model.baseLabel}- ${activeVersion}`
                : model.baseLabel;

            const ButtonContent = (
              <button
                onClick={() => {
                  setSelectedModel(model);
                  if (model.versions) setActiveVersion(model.versions[0]);
                }}
                className={`flex items-center gap-2 px-4 md:px-10 py-2.5 rounded-[14px] text-[16px]  transition-all duration-300 border flex-shrink-0 whitespace-nowrap outline-none
                ${isActive ? "text-white btn-gradient shadow-[inset_0px_4px_10px_rgba(0,0,0,0.4)] font-bold" : "bg-white text-primaryDark hover:bg-gray-50 font-normal"}`}
              >
                <span
                  className={`flex-shrink-0 ${isActive ? "brightness-0 invert" : ""}`}
                >
                  {model.icon}
                </span>
                <span>{displayLabel}</span>
                {hasVersions && (
                  <ChevronDown
                    size={14}
                    className={`ml-1 ${isActive ? "text-white" : "text-gray-400"}`}
                  />
                )}
              </button>
            );

            return hasVersions ? (
              <DropdownMenu key={model.id}>
                <DropdownMenuTrigger asChild>
                  {ButtonContent}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="rounded-xl p-1 min-w-[150px]"
                >
                  {model.versions?.map((v) => (
                   <>
                     <DropdownMenuItem
                      key={v}
                      className="rounded-lg cursor-pointer focus:bg-grey-50 focus:text-textMuted"
                      onClick={() => {
                        setSelectedModel(model);
                        setActiveVersion(v);
                      }}
                    >
                      {model.baseLabel} {v}
                    </DropdownMenuItem>
                    <hr />
                   </>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <React.Fragment key={model.id}>{ButtonContent}</React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
