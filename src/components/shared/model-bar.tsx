import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
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
  const constraintsRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const DRAG_THRESHOLD = 6;
  return (
    <nav className="w-full mt-4 md:mt-6">
      <div
        className="overflow-x-auto no-scrollbar hide-scrollbar"
        ref={constraintsRef}
      >
        <motion.div
          drag="x"
          onPointerDown={(e) => {
            startX.current = e.clientX;
          }}
          onDragEnd={() => {
            startX.current = null;
          }}
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          className="flex sm:w-max sm:mx-auto gap-2.5 pb-2 flex-nowrap cursor-grab active:cursor-grabbing"
        >
          {/* Models on small screen */}
          <div className="w-full sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex w-full items-center justify-between gap-2 px-4 py-2.5 rounded-2xl border border-border bg-background outline-none">
                  <Search size={16} />
                  <div className="flex gap-2 items-center">
                    <span>{selectedModel.icon}</span>
                    <span>{selectedModel.baseLabel}</span>
                  </div>
                  <ChevronDown size={14} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="rounded-xl p-1 w-[calc(97vw-32px)] border border-border sm:hidden"
              >
                {models.map((model) => (
                  <>
                    <DropdownMenuItem
                      key={model.id}
                      onClick={() => {
                        setSelectedModel(model);
                        if (model.versions) setActiveVersion(model.versions[0]);
                      }}
                      className="flex items-center gap-2 p-2 cursor-pointer focus:bg-hover focus:text-accent relative"
                    >
                      {model.icon}
                      <span className="absolute left-9">{model.baseLabel}</span>
                    </DropdownMenuItem>
                    <hr className="border border-border last:hidden" />
                  </>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Models on tab to big screens */}
          {models?.map((model) => {
            const isActive = selectedModel.id === model.id;
            const hasVersions = model.versions && model.versions.length > 0;

            const displayLabel =
              isActive && hasVersions
                ? `${model.baseLabel}-${activeVersion}`
                : model.baseLabel;

            const ButtonContent = (
              <button
                onClick={() => {
                  setSelectedModel(model);
                  if (model.versions) setActiveVersion(model.versions[0]);
                }}
                className={`flex items-center gap-2 px-4 md:px-10 py-2.5 rounded-[14px] text-[16px] transition-all duration-300 border border-border flex-shrink-0 whitespace-nowrap outline-none
                ${isActive ? "text-white btn-gradient shadow-[inset_0px_4px_10px_rgba(0,0,0,0.4)] font-bold" : "bg-background text-foreground font-normal"}`}
              >
                <span
                  className={`flex-shrink-0 ${isActive ? (model.id === "sora" ? "" : "brightness-0 invert") : ""}`}
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
                <DropdownMenuTrigger
                  asChild
                  className="hidden sm:flex"
                  onPointerDownCapture={(e) => {
                    if (!startX.current) return;

                    const diff = Math.abs(e.clientX - startX.current);

                    if (diff > DRAG_THRESHOLD) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                >
                  {ButtonContent}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="rounded-xl p-1 min-w-[150px] border border-border"
                >
                  {model.versions?.map((v) => (
                    <>
                      <DropdownMenuItem
                        key={v}
                        className="rounded-lg cursor-pointer focus:bg-hover focus:text-accent"
                        onClick={() => {
                          setSelectedModel(model);
                          setActiveVersion(v);
                        }}
                      >
                        {model.baseLabel} {v}
                      </DropdownMenuItem>
                      <hr className="border border-border last:hidden" />
                    </>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div key={model.id} className={"hidden sm:flex"}>
                {ButtonContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
}
