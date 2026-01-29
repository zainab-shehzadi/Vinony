import React, { useState } from "react";
import {
  Paperclip,
  Mic,
  ArrowUp,
  Globe,
  FileText,
  Zap,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
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
  selectedModel: IModel;
  activeVersion: string;
  setActiveVersion: (v: string) => void;
  reqGenerate: Boolean;
  setReqGenerate: (v: Boolean) => void;
}

export function ChatInput({
  selectedModel,
  activeVersion,
  setActiveVersion,
  reqGenerate,
  setReqGenerate,
}: IProp) {
  const [inputValue, setInputValue] = useState("");
  const hasVersions =
    selectedModel.versions && selectedModel.versions.length > 0;

  return (
    <div
      className={`w-full mx-auto p-4 border border-[#CBD5E1] rounded-lg`}
    >
      <div className="inline-block mb-2 ml-2">
        {hasVersions ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1.5 text-primaryDark cursor-pointer hover:opacity-90">
                <span className="scale-90">{selectedModel.icon}</span>
                <span className="text-[16px] font-medium">
                  {selectedModel.baseLabel} {activeVersion}
                </span>
                <ChevronDown size={14} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="rounded-xl p-1 min-w-[150px]"
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
                  <hr />
                </>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-1.5 text-primaryDark opacity-80">
            <span className="scale-90">{selectedModel.icon}</span>
            <span className="text-sm font-semibold">
              {selectedModel.baseLabel}
            </span>
          </div>
        )}
      </div>

      {/* Main Input Box */}
      <div className="bg-[#F8FAFC] rounded-lg p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3 px-3 py-2">
          <Paperclip size={20} className="text-primaryDark cursor-pointer" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Anything"
            className="w-full py-2 bg-transparent border-none focus:ring-0 text-primaryDark outline-none placeholder:textMuted text-[16px]"
          />
          <div className="flex items-center gap-2">
            <Mic size={20} className="text-[#94A3B8]" />
            <button
              className={`p-2 rounded-full text-white btn-gradient transition-all ${inputValue ? "opacity-100 shadow-md" : "opacity-50"}`}
              onClick={() => setReqGenerate(true)}
            >
              <ArrowUp size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
        {!reqGenerate && (
          <div className="flex items-center gap-4 px-3 py-2 mt-1 overflow-x-auto no-scrollbar">
            <ActionButton icon={<Globe size={16} />} label="Search" />
            <ActionButton icon={<FileText size={16} />} label="My Prompts" />
            <ActionButton icon={<Zap size={16} />} label="Deep Research" />
            <ActionButton icon={<GraduationCap size={16} />} label="Study" />
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
  <button className="flex items-center gap-2 text-primaryDark hover:text-gray-950 transition-colors whitespace-nowrap px-1">
    <span>{icon}</span>
    <span className="text-[14px] font-medium">{label}</span>
  </button>
);

export default ChatInput;
