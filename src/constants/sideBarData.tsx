import { Image, MessageSquare, Users, Video } from "lucide-react";
import { PATH } from "./paths";


export const menuItems = [
  {
    title: "Chat",
    icon: <MessageSquare className="w-5 h-5" />,
    path: PATH.CHAT,
    type: "chat",
    subItems: ["New Project"],
  },
  {
    title: "Images",
    icon: <Image className="w-5 h-5" />,
    path: PATH.IMAGE,
    subItems: ["My Creations"],
  },
  {
    title: "Videos",
    icon: <Video className="w-5 h-5" />,
    subItems: ["My Creations"],
  },
  {
    title: "Agents",
    icon: <Users className="w-5 h-5" />,
    subItems: ["My History"],
  },
];
