import React, { useState } from "react";
import { Paperclip, Mic, ArrowUp, ChevronDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Actions } from "@/constants/aiModelData";

interface IModel {
  id: string;
  icon: React.ReactNode;
  baseLabel: string;
  versions?: string[];
}
interface IProp {
  selectedModel: IModel;
  activeVersion: string;
  setActiveVersion: (v: string) => void;
  reqGenerate: Boolean;
  setReqGenerate: (v: Boolean) => void;
  setActiveHistory: (a: Boolean) => void;
}

export function ChatInput({
  selectedModel,
  activeVersion,
  setActiveVersion,
  reqGenerate,
  setReqGenerate,
  setActiveHistory,
}: IProp) {
  const [inputValue, setInputValue] = useState("");
  const hasVersions =
    selectedModel.versions && selectedModel.versions.length > 0;

  return (
    <div className={`w-full mx-auto p-4 border border-border rounded-lg`}>
      <div className="inline-block mb-2">
        {hasVersions ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1.5 text-foreground cursor-pointer hover:opacity-90">
                <span className="scale-90">{selectedModel.icon}</span>
                <span className="text-[16px] font-medium">
                  {selectedModel.baseLabel} {activeVersion}
                </span>
                <ChevronDown size={14} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="rounded-xl p-1 min-w-[150px] border border-border"
            >
              {selectedModel.versions?.map((v) => (
                <>
                  <DropdownMenuItem
                    key={v}
                    onClick={() => setActiveVersion(v)}
                    className="cursor-pointer focus:bg-grey-50 focus:text-textMuted"
                  >
                    {selectedModel.baseLabel} {v}
                  </DropdownMenuItem>
                  <hr className="border border-border" />
                </>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-1.5 text-foreground opacity-80">
            <span className="scale-90">{selectedModel.icon}</span>
            <span className="text-sm font-semibold">
              {selectedModel.baseLabel}
            </span>
          </div>
        )}
      </div>

      {/* Main Input Box */}
      <div className="bg-input rounded-lg p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]">
        <form
          className="flex items-center gap-3 sm:px-3 py-2"
          onSubmit={(e) => {
            e.preventDefault();
            setInputValue("");
            setReqGenerate(true);
            setActiveHistory(false);
          }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-background text-foreground rounded-full w-8 h-8 hover:bg-slate-50 sm:hidden">
                <Plus size={20} strokeWidth={3} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Actions.map((action, index) => (
                <DropdownMenuItem>
                  <ActionButton
                    icon={action.icon}
                    label={action.baseLabel}
                    key={index}
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Paperclip
            size={20}
            className="text-foreground cursor-pointer hidden sm:block"
          />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Anything"
            className="w-full py-2 bg-transparent border-input focus:ring-0 text-foreground outline-none placeholder:textMuted text-[16px]"
          />
          <div className="flex items-center gap-2">
            <Mic size={20} className="text-[#94A3B8]" />
            <button
              className={`p-2 rounded-full text-white btn-gradient transition-all ${inputValue ? "opacity-100 shadow-md" : "opacity-50"}`}
              type="submit"
            >
              <ArrowUp size={20} strokeWidth={3} />
            </button>
          </div>
        </form>
        {!reqGenerate && (
          <div className="hidden sm:flex items-center gap-4 sm:px-3 py-2 mt-1 overflow-x-auto no-scrollbar ">
            {Actions.slice(1).map((action, index) => (
              <ActionButton
                icon={action.icon}
                label={action.baseLabel}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const ActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="flex items-center gap-2 text-foreground transition-colors whitespace-nowrap px-1">
    <span className="text-foreground">{icon}</span>
    <span className="text-[14px] font-medium">{label}</span>
  </button>
);

export default ChatInput;
