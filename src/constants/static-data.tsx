import { UserRound } from "lucide-react";
import { Icons, IconProps } from "./aiModelData";
interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  senderName?: string;
  time?: string;
  content: string | string[];
  credit?: string;
  versions?: string[];
  icon?: React.ReactNode;
}

export const messages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content: "let's say it does - what happens then?",
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
];

export const AgentMessages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content: "let's say it does - what happens then?",
    time: "02:22 AM",
    credit: "4",
    icon: <UserRound/>
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
    time: "02:22 AM",
    credit: "4",
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
      "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
      "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
      "The title refers to the empathy test used to distinguish between humans and androids.",
      "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
      "The title refers to the empathy test used to distinguish between humans and androids.",
      "The title refers to the empathy test used to distinguish between humans and androids.",
      "The title refers to the empathy test used to distinguish between humans and androids.",
    ],
  },
];
