import { UserRound } from "lucide-react";
import { Icons } from "./aiModelData";
import visa from "@/assets/visa.svg";
import masterCard from "@/assets/mastercard.svg";
import paypal from "@/assets/paypal.svg";

interface IContent {
  heading: string;
  paragraph: string | string[];
}
export interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  senderName?: string;
  time?: string;
  content: string | string[] | IContent[];
  credit?: string;
  versions?: string[];
  icon?: React.ReactNode;
  conclude?: string;
  concludePara?: string;
}
export interface ChatSession {
  metadata: {
    totalCredits: string;
    date: string;
    modelName: string;
  };
  messages: ChatMessage[];
}
export type ChatHistory = Record<string, ChatSession>;
export interface payment {
  id: string;
  date: string;
  plan: string;
  amount: string;
  method: string;
  icon: string;
}
export interface Source {
  id: string;
  title: string;
  url: string;
}

// Data Type definition for Type Safety
export interface ChatHistoryItem {
  id: string | number;
  title: string;
  credits: number;
  date: string;
  modelName: string;
}


export const messages: ChatHistory = {
  "How to be a better person": {
    metadata: {
      totalCredits: "24",
      date: "14/04/2025",
      modelName: "Deepseek R1",
    },
    messages: [
      {
        id: 1,
        role: "user",
        content: "let's say it does - what happens then? 1",
        credit: "4",
      },
      {
        id: 2,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
      {
        id: 3,
        role: "user",
        content: "let's say it does - what happens then?",
        credit: "4",
      },
      {
        id: 4,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
    ],
  },
  "How to get rich from youtube as an influencer": {
    metadata: {
      totalCredits: "24",
      date: "14/04/2025",
      modelName: "Deepseek R1",
    },
    messages: [
      {
        id: 1,
        role: "user",
        content: "Give me tutorial of youtube",
        credit: "4",
      },
      {
        id: 2,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
      {
        id: 3,
        role: "user",
        content: "Give me book rich daddy poor daddy",
        credit: "4",
      },
      {
        id: 4,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
    ],
  },
  "REACT NEXTJS Tutorial": {
    metadata: {
      totalCredits: "24",
      date: "14/04/2025",
      modelName: "Deepseek R1",
    },
    messages: [
      {
        id: 1,
        role: "user",
        content: "REACT NEXTJS Tutorial",
        credit: "4",
      },
      {
        id: 2,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
      {
        id: 3,
        role: "user",
        content: "Node js, Express js Tutorial",
        credit: "4",
      },
      {
        id: 4,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
    ],
  },
  "Help me with web development tasks from client": {
    metadata: {
      totalCredits: "24",
      date: "14/04/2025",
      modelName: "Deepseek R1",
    },
    messages: [
      {
        id: 1,
        role: "user",
        content: "web development tasks",
        credit: "4",
      },
      {
        id: 2,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
      {
        id: 3,
        role: "user",
        content: "Application development tasks",
        credit: "4",
      },
      {
        id: 4,
        role: "assistant",
        senderName: "GPT",
        versions: ["7.0", "4.0", "o1"],
        time: "02:22 AM",
        icon: (
          <Icons
            className="text-primary"
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
        content: [
          "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
          "The title refers to the empathy test used to distinguish between humans and androids.",
        ],
      },
    ],
  },
  
};

export const AgentMessages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content: "let's say it does - what happens then?",
    time: "02:22 AM",
    credit: "4",
    icon: <UserRound className="text-primary" />,
  },
  {
    id: 2,
    role: "assistant",
    senderName: "Perplexity",
    time: "02:22 AM",
    icon: (
      <Icons
        className="text-primary"
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
    content: [
      {
        heading: "Current State of AI:",
        paragraph: [
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
        ],
      },
      {
        heading: "Current State of AI:",
        paragraph: [
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
        ],
      },
    ],
    conclude: "Conclusion",
    concludePara:
      "From a current scientific and technological standpoint, androids do not dream of electric sheep. They lack the biological and neurological foundations required for dreaming as humans experience it.",
  },
  {
    id: 3,
    role: "user",
    content: "let's say it does - what happens then?",
    time: "02:22 AM",
    credit: "4",
    icon: <UserRound className="text-primary" />,
  },
  {
    id: 4,
    role: "assistant",
    senderName: "Perplexity",
    time: "02:22 AM",
    icon: (
      <Icons
        className="text-primary"
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
    content: [
      {
        heading: "Current State of AI:",
        paragraph: [
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
        ],
      },
      {
        heading: "Current State of AI:",
        paragraph: [
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
          "Lack of Subjective Experience: Presently, AI lacks the capacity for subjective experience. While AI can process vast amounts of information and perform complex tasks, it doesn't have personal experiences or emotions.",
          "Mimicking Human Behavior: Some AI systems are designed to mimic human behavior, including aspects of creativity and association, but this mimicry doesn't equate to actual dreaming.",
        ],
      },
    ],
    conclude: "Conclusion",
    concludePara:
      "From a current scientific and technological standpoint, androids do not dream of electric sheep. They lack the biological and neurological foundations required for dreaming as humans experience it.",
  },
];

export const SourcesData: Source[] = [
  {
    id: "s1",
    title: "Androids explained: Why LLMS will rule the world",
    url: "www.dailyllm.com",
  },
  {
    id: "s2",
    title: "Androids explained: Why LLMS will rule the world",
    url: "www.dailyllm.com",
  },
  {
    id: "s3",
    title: "View 87+ more exernal sources",
    url: "View All Sources",
  },
  {
    id: "s4",
    title: "View 87+ more exernal sources",
    url: "View All Sources",
  },
];

// Payment cards method
export const cards = [
  {
    id: 1,
    name: "ByeWind",
    active: true,
    number: "9656 6598 1236 4698",
    exp: "06/25",
    type: "visa",
    icon: visa,
  },
  {
    id: 2,
    name: "ByeWind",
    active: false,
    number: "1235 6321 1343 7542",
    exp: "06/25",
    type: "mastercard",
    icon: masterCard,
  },
  {
    id: 3,
    name: "PayPal",
    active: false,
    number: "byewind@twitter.com",
    exp: "06/25",
    type: "paypal",
    icon: paypal,
  },
];

export const INVOICES: payment[] = [
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Basic Plan",
    amount: "$1200",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#56489",
    date: "23 Feb 2023",
    plan: "Pro Plan",
    amount: "$7000",
    method: "4242",
    icon: masterCard,
  },
  {
    id: "#56489",
    date: "23 Mar 2023",
    plan: "Basic Plan",
    amount: "$7000",
    method: "2332",
    icon: masterCard,
  },
  {
    id: "#56849",
    date: "23 Mar 2023",
    plan: "Pro Plan",
    amount: "$7000",
    method: "2332",
    icon: visa,
  },
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Basic Plan",
    amount: "$1200",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Basic Plan",
    amount: "$1200",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#54619",
    date: "23 Mar 2023",
    plan: "Unlimited Plan",
    amount: "$7000",
    method: "2332",
    icon: masterCard,
  },
  {
    id: "#56849",
    date: "23 Mar 2023",
    plan: "Pro Plan",
    amount: "$7000",
    method: "2332",
    icon: visa,
  },
  {
    id: "#54619",
    date: "23 Mar 2023",
    plan: "Unlimited Plan",
    amount: "$7000",
    method: "2332",
    icon: masterCard,
  },
];

export const CREDITS: payment[] = [
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Popular Pack",
    amount: "$150.00",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#56489",
    date: "23 Feb 2023",
    plan: "Stater pack",
    amount: "$150.00",
    method: "4242",
    icon: masterCard,
  },
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Popular Pack",
    amount: "$150.00",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Popular Pack",
    amount: "$150.00",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#56489",
    date: "23 Mar 2023",
    plan: "Power Plan",
    amount: "$90.00",
    method: "2332",
    icon: masterCard,
  },
  {
    id: "#56849",
    date: "23 Mar 2023",
    plan: "Popular Pack",
    amount: "$150.00",
    method: "2332",
    icon: visa,
  },
  {
    id: "#54619",
    date: "23 Mar 2023",
    plan: "Power Pack",
    amount: "$90.00",
    method: "2332",
    icon: masterCard,
  },
  {
    id: "#23456",
    date: "23 Jan 2023",
    plan: "Popular Pack",
    amount: "$150.00",
    method: "4242",
    icon: paypal,
  },
  {
    id: "#54619",
    date: "23 Mar 2023",
    plan: "Power Pack",
    amount: "$90.00",
    method: "2332",
    icon: masterCard,
  },
];

export const historyData: ChatHistoryItem[] = [
  {
    id: 1,
    title: "How to be a better person?",
    credits: 24,
    date: "14/04/2025",
    modelName: "Deepseek R1",
  },
  {
    id: 2,
    title: "Hacking FBI server with linux",
    credits: 24,
    date: "14/04/2025",
    modelName: "Gemini 3 Flash",
  },
  {
    id: 3,
    title: "How to get rich from youtube as an influencer",
    credits: 24,
    date: "14/04/2025",
    modelName: "Gemini 3 Flash",
  },
  {
    id: 4,
    title: "Help me with web development tasks from client",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
  {
    id: 5,
    title: "REACT NEXTJS Tutorial",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
  {
    id: 6,
    title: "REACT NEXTJS Tutorial",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
  {
    id: 7,
    title: "REACT NEXTJS Tutorial",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
  {
    id: 8,
    title: "REACT NEXTJS Tutorial",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
  {
    id: 9,
    title: "Help me with web development tasks from client",
    credits: 24,
    date: "14/04/2025",
    modelName: "Grok 4.1 Fast",
  },
];