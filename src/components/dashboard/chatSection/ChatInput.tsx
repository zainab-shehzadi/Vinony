import React, { useRef, useState } from "react";
import { Paperclip, Mic, ArrowUp, ChevronDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Actions } from "@/constants/aiModelData";
import FilePicker from "@/components/shared/file-picker";

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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [fileData, setFileData] = useState<File[]>([]);
  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  };
  
  const ActionHandler = (sub) => {
    switch (sub.id) {
      case "photosandfiles":
        openFilePicker();
        break;
      default:
        null;
    }
  };

  return (
    <div className={`w-full mx-auto p-2 sm:p-4 border border-border rounded-lg my-6`}>
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
      <div className="bg-input rounded-lg px-2 border border-border py-1 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]">
        <FilePicker
            fileInputRef={fileInputRef}
            files={files}
            setFiles={setFiles}
            fileData={fileData}
            setFileData={setFileData}
          />
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
              <Button className="bg-card text-foreground rounded-full w-8 h-8 hover:bg-hover md:hidden">
                <Plus size={20} strokeWidth={3} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border border-border">
              {Actions.map((action, index) => (
                <DropdownMenuItem className="focus:bg-hover focus:text-foreground">
                  <ActionButton
                    icon={action.icon}
                    label={action.baseLabel}
                    key={index}
                    actionHandler={() => ActionHandler(action)}
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Paperclip
            size={20}
            className="text-foreground cursor-pointer hidden md:block"
            onClick={openFilePicker}
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
          <div className="hidden md:flex items-center gap-4 sm:px-3 py-2 mt-1 overflow-x-auto no-scrollbar ">
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
  actionHandler,
}: {
  icon: React.ReactNode;
  label: string;
  actionHandler?: () => void;
}) => (
  <button className="flex items-center gap-2 text-foregroun transition-colors whitespace-nowrap px-1" onClick={actionHandler}>
    <span className="text-foreground">{icon}</span>
    <span className="text-[14px] font-medium">{label}</span>
  </button>
);

export default ChatInput;
