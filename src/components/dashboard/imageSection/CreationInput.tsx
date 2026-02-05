import { useRef, useState } from "react";
import { CircleDollarSign, Plus } from "lucide-react";
import { ModelConfig } from "@/constants/aiModelData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { ActionButton } from "@/components/ui/actionButton";
import FilePicker from "@/components/shared/file-picker";

interface IProp {
  setReqGenerate: (a: boolean) => void;
  Placeholder: string;
  Actions: ModelConfig[];
}

export default function CreationInput({
  setReqGenerate,
  Placeholder,
  Actions,
}: IProp) {
  const [inputValue, setInputValue] = useState<string>("");
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
      case "attach":
        openFilePicker();
        break;
      default:
        null;
    }
  };

  return (
    <div className="w-full mx-auto py-4 rounded-xl bg-background">
      <p className="font-bold text-[16px] text-foreground mb-2">Prompt</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setReqGenerate(true);
          setInputValue("");
          setFileData([]);
          setFiles([]);
        }}
        className="bg-input rounded-lg p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]"
      >
        {/* Input and FilePicker */}
        <div className="flex flex-col items-start w-full gap-3 px-3 py-2">
          <FilePicker
            fileInputRef={fileInputRef}
            files={files}
            setFiles={setFiles}
            fileData={fileData}
            setFileData={setFileData}
          />

          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={Placeholder}
            className="w-full py-2 bg-transparent border-none focus:ring-0 text-foreground outline-none placeholder:text-accent text-sm resize-none min-h-[120px] align-top"
            rows={3}
          />
        </div>

        {/* Lower Part: Actions and Generate Button */}
        <div className="flex sm:flex-row items-center justify-between gap-4 mt-2 px-2 pb-1">
          {/* Action Buttons Group */}
          <div className="flex sm:hidden items-center gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-card text-foreground rounded-full w-8 h-8 hover:bg-hover/50 ">
                  <Plus size={20} strokeWidth={3} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border rounded-lg p-2 z-50">
                {Actions.map((action, index) => (
                  <>
                    <DropdownMenuItem className="py-1">
                      <ActionButton
                        icon={action.icon}
                        label={action.baseLabel}
                        menu={action.menu ?? []}
                        key={index}
                        actionHandler={() => ActionHandler(action)}
                      />
                    </DropdownMenuItem>
                    <hr className="border border-border" />
                  </>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden sm:flex items-center gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            {Actions.map((action, index) => (
              <ActionButton
                icon={action.icon}
                label={action.baseLabel}
                menu={action.menu ?? []}
                key={index}
                actionHandler={() => ActionHandler(action)}
              />
            ))}
          </div>

          {/* Generate Button */}
          <button
            disabled={!inputValue}
            type="submit"
            className={`
              flex items-center justify-center gap-2 
              w-full sm:w-44 px-5 py-2.5 
              rounded-xl font-bold transition-all duration-200 whitespace-nowrap
          ${
            inputValue
              ? "btn-gradient text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:brightness-110 active:scale-95 cursor-pointer"
              : "btn-gradient opacity-50 text-white cursor-not-allowed"
          }
          `}
          >
            Generate
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md">
              <CircleDollarSign size={16} strokeWidth={2.5} />
              <span className="text-sm">12</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
