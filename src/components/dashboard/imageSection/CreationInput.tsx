import { useState } from "react";
import {
  Paperclip,
  CircleDollarSign,
  Hd,
} from "lucide-react";
import ratio from "@/assets/Vector.png";
import style from "@/assets/Style.png";

export default function CreationInput() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="w-full  p-4 rounded-xl bg-white">
      <p className="font-bold text-[16px] text-primaryDark mb-2">Prompt</p>

      <div className="bg-[#F8FAFC] rounded-lg p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]">
        {/* Upper Part: Input and Paperclip */}
        <div className="flex items-start w-full gap-3 px-3 py-2">
          <label className="mt-2 cursor-pointer hover:opacity-70 transition-opacity">
            <Paperclip size={20} className="text-primaryDark" />
            <input type="file" className="hidden" />
          </label>

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe the image you want to generate... e.g., A futuristic cityscape at sunset"
            className="w-full py-2 bg-transparent border-none focus:ring-0 text-primaryDark outline-none placeholder:text-accent text-sm resize-none min-h-[40px]"
          />
        </div>

        {/* Lower Part: Actions and Generate Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 px-2 pb-1">
          {/* Action Buttons Group */}
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            <ActionButton icon={<Paperclip size={18} />} label="Attach" />
            <ActionButton icon={<img src={style}/>} label="Style" />
            <ActionButton icon={<Hd size={18} />} label="Quality" />
            <ActionButton icon={<img src={ratio}/>} label="Aspect Ratio" />
          </div>

          {/* Generate Button */}
          <button
            disabled={!inputValue}
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
  <button className="flex items-center gap-2 text-accent whitespace-nowrap text-primaryDark">
    <span>{icon}</span>
    <span className="text-sm font-normal">{label}</span>
  </button>
);
