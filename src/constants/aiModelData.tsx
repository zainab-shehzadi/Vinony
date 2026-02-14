import {
  Clock4,
  FileText,
  Globe,
  GraduationCap,
  Hd,
  Paperclip,
  Search,
} from "lucide-react";


import deepseek from "@/assets/deepseek.svg";
import gemini from "@/assets/gemini.svg";
import ideogram from "@/assets/image 8.svg"
import seedream from "@/assets/image 23.svg";
import unikorn from "@/assets/image 22.svg";
import gpt from "@/assets/hugeicons_chat-gpt.svg"

import perplexity from "@/assets/perplexity-color (1).svg";
import openManus from "@/assets/newsvg 1.svg";
import deepResearch from "@/assets/newsvg 2.svg";
import aiDetector from "@/assets/newsvg 3.svg";
import chatPdf from "@/assets/newsvg 4.svg";
import proofReading from "@/assets/newsvg 5.svg";

import veo from "@/assets/veo.svg";
import sora from "@/assets/sora-color.svg";
import kling from "@/assets/kling.svg";
import seedance from "@/assets/svg [Recovered].svg";
import wan from "@/assets/svg 6 1.svg";
import runway from "@/assets/svg 8 1.svg";

export interface IconProps {
  path: string | string[]; // Single path ya array of paths
  className?: string;
  height?: number;
  width?: number;
  filling?: string;
  viewBox?: string;
}

export const Icons = ({
  path,
  className,
  height = 20,
  width = 20,
  filling = "none",
  viewBox = "0 0 20 20",
}: IconProps) => {
  const pathArray = Array.isArray(path) ? path : [path];

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={filling}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {pathArray.map((d, index) => (
        <path
          key={index}
          d={d}
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};

export interface ModelConfig {
  id: string;
  baseLabel: string;
  icon: React.ReactNode;
  versions?: string[];
  menu?: string[];
}

export const AI_CHAT_MODELS: ModelConfig[] = [
  {
    id: "gpt",
    baseLabel: "GPT",
    versions: ["7.0", "4.0", "o1"],
    icon: (
      <Icons
        className="text-foreground"
        path={[
          "M9.49478 12.6L4.65479 9.75V4.75C4.65479 2.54 6.47878 0.75 8.73078 0.75C10.1278 0.75 11.3608 1.44 12.0958 2.491",
          "M7.3501 16.9302C7.72597 17.4919 8.23489 17.9521 8.83157 18.2696C9.42826 18.5871 10.0942 18.7522 10.7701 18.7502C13.0201 18.7502 14.8461 16.9602 14.8461 14.7502V9.75017L9.9101 6.84717",
          "M7.20166 11.2498V5.41981L11.6137 2.91981C13.5637 1.81481 16.0567 2.46981 17.1827 4.38281C17.5275 4.966 17.7157 5.62844 17.729 6.30582C17.7423 6.9832 17.5803 7.65252 17.2587 8.24881",
          "M2.23966 11.2499C1.91786 11.8461 1.75566 12.5154 1.76881 13.1927C1.78195 13.8701 1.96998 14.5326 2.31466 15.1159C3.44066 17.0289 5.93466 17.6839 7.88466 16.5799L12.2967 14.0799L12.3927 8.48389",
          "M14.8458 15.3799C15.5274 15.3535 16.1916 15.1571 16.7779 14.8085C17.3642 14.4599 17.854 13.9702 18.2028 13.3839C19.3288 11.4709 18.6608 9.02392 16.7108 7.91992L12.2978 5.41992L7.23877 8.17492",
          "M4.65553 4.12012C3.97374 4.14632 3.30934 4.34268 2.72283 4.6913C2.13632 5.03992 1.64635 5.52973 1.29753 6.11612C0.171531 8.03012 0.839531 10.4761 2.78953 11.5801L7.20253 14.0801L12.2505 11.3301",
        ]}
      />
    ),
  },
  {
    id: "deepseek",
    baseLabel: "Deepseek",
    versions: ["R1", "V3"],
    icon: (
      <img src={deepseek} width={16} height={16} className="text-[#6881FD]" />
    ),
  },

  {
    id: "grok",
    baseLabel: "Grok",
    versions: ["4.1 Fast", "3.0"],
    icon: (
      <img
        src={aiDetector}
        width={20}
        height={15}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "gemini",
    baseLabel: "Gemini",
    versions: [
      "2.0 Flash",
      "1.5 Pro",
      "1.5 Flash",
      "1.0 Ultra",
      "1.5 Flash-8B",
    ],
    icon: (
      <img src={gemini} width={16} height={16} className="text-[#448AFF]" />
    ),
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-foreground" />,
  },
];

export const AI_IMAGE_MODELS: ModelConfig[] = [
  {
    id: "soraimage",
    baseLabel: "Sora Image",
     icon:(
      <img
        src={gpt}
        width={25}
        height={25}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "unikorn",
    baseLabel: "UniKorn",
    icon:(
      <img
        src={unikorn}
        className="h-[20px] w-[25px] lg:w-[35px] dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "nanobanana",
    baseLabel: "Nano Banana",
    icon: (
      <img src={gemini} width={16} height={16} className="text-[#448AFF]" />
    ),
  },
  {
    id: "seedream",
    baseLabel: "Seedream",
    icon:(
      <img
        src={seedream}
        width={20}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "flux",
    baseLabel: "Flux.1 Kontext",
    versions: ["Pro", "Ultra"],
    icon: (
      <Icons
        className="text-[#448AFF]"
        path={[
          "M8.59725 15.6465L7.125 16.5L3.9615 14.6685L5.39775 13.8368L5.43375 13.8158L5.4885 13.8472L8.59725 15.6465ZM14.25 4.125V5.84175L11.136 4.0395L10.2915 3.5505L9.447 4.0395L5.4885 6.33075L4.644 6.81975V7.83075L3.1215 6.94875L2.27625 6.45975L1.43175 6.94875L0 7.77825V4.125L7.125 0L14.25 4.125Z",
          "M14.25 7.79763V12.3809L10.2915 14.6729L10.2863 14.6699L6.33375 12.3809V7.79838L10.2915 5.50488L14.25 7.79763ZM4.55325 9.73413V12.3696L2.277 13.6874L0 12.3696V9.73413L2.277 8.41563L4.55325 9.73413Z",
        ]}
      />
    ),
  },
  {
    id: "ideogram",
    baseLabel: "Ideogram",
    icon: (
      <img
        src={ideogram}
        width={20}
        height={15}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-foreground" />,
  },
];

export const AI_VIDEO_MODELS: ModelConfig[] = [
  {
    id: "veo",
    baseLabel: "Veo",
    icon: <img src={veo} width={25} height={25} className="brightness-100 invert dark:brightness-0 dark:invert"/>,
    versions: ["3.1 R1", "2.0", "Light"],
  },
  {
    id: "sora",
    baseLabel: "Sora 2",
    icon: <img src={sora} width={25} height={25} />,
  },
  {
    id: "kling",
    baseLabel: "Kling",
    icon: (
      <img
        src={kling}
        width={20}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
    versions: ["Pro", "2.0 Standard"],
  },
  {
    id: "seedance",
    baseLabel: "Seedance",
    icon: <img src={seedance} width={15} height={15} />,
    versions: ["V1", "Motion 2.0", "Anime-HD", "Cinematic"],
  },
  {
    id: "wan",
    baseLabel: "Wan",
    icon: <img src={wan} width={20} height={20} className="dark:brightness-0 dark:invert"/>,
    versions: ["2.6", "2.1 Pro", "2.0"],
  },
  {
    id: "runway",
    baseLabel: "Runway",
    icon: <img src={runway} className="h-[15px] lg:h-[25px] dark:brightness-0 dark:invert"/>,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-foreground" />,
  },
];

export const AI_AGENT_MODELS: ModelConfig[] = [
  {
    id: "perplexity",
    baseLabel: "Perplexity",
    icon: (
      <img
        src={perplexity}
        width={25}
        height={20}
        className="brightness-100 invert-[50%] dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "deepresearch",
    baseLabel: "Deep Research",
    icon: (
      <img
        src={deepResearch}
        width={25}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "openmanus",
    baseLabel: "OpenManus",
    icon: (
      <img
        src={openManus}
        width={30}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "aidetector",
    baseLabel: "AI Detector",
    icon: (
      <img
        src={aiDetector}
        width={25}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "proofreading",
    baseLabel: "Proofreading",
    icon: (
      <img
        src={proofReading}
        width={25}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
  {
    id: "chatpdf",
    baseLabel: "ChatPDF",
    icon: (
      <img
        src={chatPdf}
        width={20}
        height={20}
        className="dark:brightness-0 dark:invert"
      />
    ),
  },
];



export const Actions: ModelConfig[] = [
  {
    id: "photosandfiles",
    baseLabel: "Add Photos and files",
    icon: <Paperclip size={16} />,
  },
  {
    id: "search",
    baseLabel: "Search",
    icon: <Globe size={16} />,
  },
  {
    id: "myprompts",
    baseLabel: "My Prompts",
    icon: <FileText size={16} />,
  },
  {
    id: "deepresearch",
    baseLabel: "Deep Research",
    icon: (
      <Icons
        className="text-foreground"
        path="M2.51241 11.9622C2.01371 11.7221 1.58265 11.3616 1.25812 10.9132C0.93359 10.4649 0.725813 9.94276 0.653541 9.39402C0.581268 8.84528 0.646774 8.28718 0.844147 7.77008C1.04152 7.25299 1.36455 6.79318 1.78408 6.43216M1.80908 6.36466C1.53578 5.9557 1.41599 5.46323 1.47093 4.97444C1.52586 4.48564 1.75197 4.03204 2.10922 3.69395C2.46648 3.35585 2.93184 3.15507 3.42291 3.12713C3.91399 3.0992 4.39912 3.24592 4.79241 3.54133M4.99074 3.59549C4.8578 3.31303 4.79004 3.0043 4.79247 2.69213C4.7949 2.37996 4.86745 2.07232 5.00477 1.79196C5.14209 1.5116 5.34065 1.26568 5.5858 1.07239C5.83094 0.879091 6.11639 0.74336 6.42105 0.675225C6.7257 0.60709 7.04178 0.608293 7.34591 0.678746C7.65003 0.749199 7.93444 0.8871 8.17811 1.08226C8.42177 1.27741 8.61846 1.52483 8.75364 1.80623C8.88881 2.08763 8.95902 2.39581 8.95907 2.70799M8.95907 2.70799V15.6247M8.95907 2.70799C8.95913 2.39581 9.02934 2.08763 9.16451 1.80623C9.29969 1.52483 9.49638 1.27741 9.74004 1.08226C9.98371 0.8871 10.2681 0.749199 10.5722 0.678746C10.8764 0.608293 11.1924 0.60709 11.4971 0.675225C11.8018 0.74336 12.0872 0.879091 12.3324 1.07239C12.5775 1.26568 12.7761 1.5116 12.9134 1.79196C13.0507 2.07232 13.1232 2.37996 13.1257 2.69213C13.1281 3.0043 13.0603 3.31303 12.9274 3.59549M8.95907 15.6247C8.95907 16.0667 8.78348 16.4906 8.47092 16.8032C8.15836 17.1157 7.73444 17.2913 7.29241 17.2913C6.85038 17.2913 6.42646 17.1157 6.1139 16.8032C5.80134 16.4906 5.62574 16.0667 5.62574 15.6247M8.95907 15.6247C8.95907 16.0667 9.13467 16.4906 9.44723 16.8032C9.75979 17.1157 10.1837 17.2913 10.6257 17.2913M8.95907 4.79133C8.95907 5.45437 9.22247 6.09025 9.69131 6.55909C10.1601 7.02793 10.796 7.29133 11.4591 7.29133M16.1341 6.43216C16.4979 6.74471 16.7898 7.13228 16.9898 7.56827C17.1897 8.00426 17.2929 8.47834 17.2924 8.95799C17.2924 9.54383 17.1416 10.0947 16.8757 10.573M16.1091 6.36466C16.3824 5.9557 16.5022 5.46323 16.4472 4.97444C16.3923 4.48564 16.1662 4.03204 15.8089 3.69395C15.4517 3.35585 14.9863 3.15507 14.4952 3.12713C14.0042 3.0992 13.519 3.24592 13.1257 3.54133M16.0424 16.0413L17.2924 17.2913M12.2924 14.3747C12.2924 14.9272 12.5119 15.4571 12.9026 15.8478C13.2933 16.2385 13.8232 16.458 14.3757 16.458C14.9283 16.458 15.4582 16.2385 15.8489 15.8478C16.2396 15.4571 16.4591 14.9272 16.4591 14.3747C16.4591 13.8221 16.2396 13.2922 15.8489 12.9015C15.4582 12.5108 14.9283 12.2913 14.3757 12.2913C13.8232 12.2913 13.2933 12.5108 12.9026 12.9015C12.5119 13.2922 12.2924 13.8221 12.2924 14.3747Z"
      />
    ),
  },
  {
    id: "study",
    baseLabel: "Study",
    icon: <GraduationCap size={16} />,
  },
];

export const Video_Actions: ModelConfig[] = [
  {
    id: "attach",
    baseLabel: "Attach",
    icon: <Paperclip size={16} />,
  },
  {
    id: "duration",
    baseLabel: "Duration",
    icon: <Clock4 size={16} className="text-foreground" />,
    menu: ["10s", "15s", "30s", "60s"],
  },
  {
    id: "aspectratio",
    baseLabel: "Aspect Ratio",
    icon: (
      <Icons
        className="text-foreground mt-1.5"
        path="M10 10.8333H14.1667V6.66667H12.5V9.16667H10V10.8333ZM2.5 6.66667H4.16667V4.16667H6.66667V2.5H2.5V6.66667ZM1.66667 13.3333C1.20833 13.3333 0.816111 13.1703 0.49 12.8442C0.163889 12.5181 0.000555556 12.1256 0 11.6667V1.66667C0 1.20833 0.163333 0.816111 0.49 0.49C0.816667 0.163889 1.20889 0.000555556 1.66667 0H15C15.4583 0 15.8508 0.163333 16.1775 0.49C16.5042 0.816666 16.6672 1.20889 16.6667 1.66667V11.6667C16.6667 12.125 16.5036 12.5175 16.1775 12.8442C15.8514 13.1708 15.4589 13.3339 15 13.3333H1.66667ZM1.66667 11.6667H15V1.66667H1.66667V11.6667Z"
      />
    ),
    menu: ["1:1", "4:3", "16:10", "10:16"],
  },
];

export const Image_Actions: ModelConfig[] = [
  {
    id: "attach",
    baseLabel: "Attach",
    icon: <Paperclip size={16} />,
  },
  {
    id: "style",
    baseLabel: "Style",
    icon: (
      <Icons
        className="text-foreground mt-1"
        path="M1.66612 14.0278L0.957789 13.7361C0.527234 13.5556 0.239178 13.2431 0.0936225 12.7986C-0.051933 12.3542 -0.0277665 11.9167 0.166122 11.4861L1.66612 8.23611V14.0278ZM4.99946 15.8611C4.54112 15.8611 4.1489 15.6981 3.82279 15.3719C3.49668 15.0458 3.33334 14.6533 3.33279 14.1944V9.19444L5.54112 15.3194C5.58279 15.4167 5.62446 15.5106 5.66612 15.6011C5.70779 15.6917 5.76334 15.7783 5.83279 15.8611H4.99946ZM9.29112 15.7778C8.84668 15.9444 8.41612 15.9236 7.99946 15.7153C7.58279 15.5069 7.29112 15.1806 7.12446 14.7361L3.41612 4.56944C3.24946 4.125 3.26334 3.69111 3.45779 3.26778C3.65223 2.84444 3.97168 2.55611 4.41612 2.40278L10.7078 0.111111C11.1522 -0.0555556 11.5828 -0.0347222 11.9995 0.173611C12.4161 0.381944 12.7078 0.708333 12.8745 1.15278L16.5828 11.3194C16.7495 11.7639 16.7356 12.1981 16.5411 12.6219C16.3467 13.0458 16.0272 13.3339 15.5828 13.4861L9.29112 15.7778ZM7.49946 5.86111C7.73557 5.86111 7.93362 5.78111 8.09362 5.62111C8.25362 5.46111 8.33335 5.26333 8.33279 5.02778C8.33223 4.79222 8.25251 4.59444 8.09362 4.43444C7.93473 4.27444 7.73668 4.19444 7.49946 4.19444C7.26223 4.19444 7.06446 4.27444 6.90612 4.43444C6.74779 4.59444 6.66779 4.79222 6.66612 5.02778C6.66446 5.26333 6.74446 5.46139 6.90612 5.62194C7.06779 5.7825 7.26557 5.86222 7.49946 5.86111ZM8.70779 14.1944L14.9995 11.9028L11.2911 1.69444L4.99946 3.98611L8.70779 14.1944Z"
      />
    ),
  },
  {
    id: "quality",
    baseLabel: "Quality",
    icon: <Hd size={18} className="text-foreground" />,
  },
  {
    id: "aspectratio",
    baseLabel: "Aspect Ratio",
    icon: (
      <Icons
        className="text-foreground mt-1.5"
        path="M10 10.8333H14.1667V6.66667H12.5V9.16667H10V10.8333ZM2.5 6.66667H4.16667V4.16667H6.66667V2.5H2.5V6.66667ZM1.66667 13.3333C1.20833 13.3333 0.816111 13.1703 0.49 12.8442C0.163889 12.5181 0.000555556 12.1256 0 11.6667V1.66667C0 1.20833 0.163333 0.816111 0.49 0.49C0.816667 0.163889 1.20889 0.000555556 1.66667 0H15C15.4583 0 15.8508 0.163333 16.1775 0.49C16.5042 0.816666 16.6672 1.20889 16.6667 1.66667V11.6667C16.6667 12.125 16.5036 12.5175 16.1775 12.8442C15.8514 13.1708 15.4589 13.3339 15 13.3333H1.66667ZM1.66667 11.6667H15V1.66667H1.66667V11.6667Z"
      />
    ),
  },
];
