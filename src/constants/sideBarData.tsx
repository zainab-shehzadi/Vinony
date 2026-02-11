import { PATH } from "./paths";
import image from "@/assets/material-symbols_image-outline-sharp.png"
import video from "@/assets/bxs_videos.png"
import agent from "@/assets/fluent_agents-12-regular.png"
import billing from "@/assets/stash_billing-info.png"
import setting from "@/assets/material-symbols_settings-outline.png"

export const menuItems = [
  {
    title: "Chat",
    icon: setting,
    path: PATH.CHAT,
    type: "chat",
    subItems: ["New Project"],
  },
  {
    title: "Images",
    icon: image,
    path: PATH.IMAGE,
    subItems: [
      { id: "image-creations", label: "My Creations", view: "image-history" },
    ],
  },
  {
    title: "Videos",
    icon: video,
    path: PATH.VIDEO,
    subItems: [
      { id: "video-creations", label: "My Creations", view: "video-history" },
    ],
  },
  {
    title: "Agents",
    icon: agent,
    path: PATH.AGENT,
    subItems: [{ id: "my-history", label: "My History", view: "my-history" }],
  },
  {
    title: "Billings",
    icon: billing,
    path: PATH.BILLING,
  },
  {
    title: "Settings",
    icon: setting,
    path: PATH.SETTING,
    end: false,
  },
];
