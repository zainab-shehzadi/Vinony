import { useEffect, useState } from "react";
import { MoreHorizontal, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "@/constants/paths";
import CreditSection from "@/components/ui/credit-section";
import { menuItems } from "@/constants/sideBarData";
import { messages } from "@/constants/static-data";
import { Icons } from "@/constants/aiModelData";
interface IProp {
  toggle: boolean;
  setToggle: (val: boolean) => void;
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean) => void;
  activeView: String;
  setActiveView: (a: String) => void;
  setReqGenerate: (a: Boolean) => void;
  setReqVideoGenerate: (a: Boolean) => void;
  setReqChatGenerate: (a: Boolean) => void;
  setReqAgentGenerate: (a: Boolean) => void;
  selectedHeading: string;
  onSelectChat: (heading: string, data: any) => void;
}

const Sidebar = ({
  toggle,
  setToggle,
  activeHistory,
  setActiveHistory,
  activeView,
  setActiveView,
  setReqGenerate,
  setReqVideoGenerate,
  setReqChatGenerate,
  setReqAgentGenerate,
  selectedHeading,
  onSelectChat,
}: IProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recentChats] = useState([
    "How to be a better person",
    "Project Research Alpha",
    "UI Design Guidelines",
    "How to be a better person",
    "Project Research Alpha",
    "UI Design Guidelines",
  ]);

  const getActiveAccordion = () => {
    if (location.pathname === PATH.CHAT) return "item-0";
    if (location.pathname === PATH.IMAGE) return "item-1";
    if (location.pathname === PATH.VIDEO) return "item-2";
    if (location.pathname === PATH.AGENT) return "item-3";
    if (location.pathname === PATH.BILLING) return "item-4";
    if (location.pathname.startsWith(PATH.SETTING)) return "item-5";
    return "";
  };
  const [activeAccordion, setActiveAccordion] = useState(getActiveAccordion());

  useEffect(() => {
    setActiveAccordion(getActiveAccordion());
  }, [location.pathname]);

  const handleTabClick = (sub) => {
    setActiveView(sub.view);
    switch (sub.view) {
      case "video-history":
        setReqVideoGenerate(false);
        break;
      case "image-history":
        setReqGenerate(false);
        break;
      case "my-history":
        setReqAgentGenerate(false);
        break;
      default:
        null;
    }
  };

  const hasHistory = recentChats.length > 0;
  const isActive = (path: string) => {
    if (path === PATH.SETTING) {
      return location.pathname.startsWith(PATH.SETTING);
    }

    return location.pathname === path;
  };

  return (
    <div
      className={`fixed z-50 w-64 h-full bg-background border-r border-border flex flex-col p-4 lg:relative transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${toggle ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo Section */}
      <div className="flex justify-end w-full p-2 lg:hidden">
        <button
          onClick={() => setToggle(false)}
          className="group flex items-center justify-center p-2 rounded-xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 active:scale-95"
          title="Close Sidebar"
        >
          <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </button>
      </div>
      <div className="flex items-center justify-center lg:mt-5 gap-2 mb-10">
        <p className="text-xl font-semibold text-primary flex gap-2 items-center">
          {" "}
          <span className="flex">
            <Icons
              filling="#805AF5"
              width={18}
              height={36}
              path={["M0 0H17.6879V17.6879L0 35.3757V0Z"]}
              viewBox="0 0 18 36"
            />
            <Icons
              filling="#805AF5"
              width={18}
              height={36}
              path={["M0 17.6879L17.6879 0V35.3757H0V17.6879Z"]}
              viewBox="0 0 18 36"
            />
          </span>
          LOGO HERE
        </p>
      </div>
      {/* Sidebar heading */}
      <div className="text-[12px] font-normal text-accent tracking-widest px-2 mb-2 uppercase">
        Main Menu
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        <Accordion
          type="single"
          collapsible
          value={activeAccordion}
          onValueChange={(value) => {
            setActiveAccordion(value);
            if (!value) {
              setActiveView("");
              setActiveHistory(false);
              setReqGenerate(false);
              setReqVideoGenerate(false);
              setReqChatGenerate(false);
              setReqAgentGenerate(false);
            }
          }}
          className="w-full border-none"
        >
          {menuItems.map((item, index) => {
            let hasSubItems = item.subItems && item.subItems.length > 0;
            const content = (
              <div
                className={`flex items-center gap-3 font-medium ${item.path && isActive(item.path) ? "text-primary" : "text-accent"}`}
              >
                {item.icon}
                <span
                  className={`text-[14px] transition-all ${item.path && isActive(item.path) && "font-semibold text-[16px]"}`}
                >
                  {item.title}
                </span>
              </div>
            );
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-none group overflow-hidden rounded-lg transition-all data-[state=open]:bg-secondary-bg"
              >
                {hasSubItems ? (
                  // if subItems exist then standard AccordionTrigger
                  <AccordionTrigger
                    onClick={() => {
                      item.path && navigate(item.path);
                      setToggle(false);
                    }}
                    className={`hover:no-underline py-3 px-2 mt-2 rounded-lg transition-all ${
                      item.path && isActive(item.path)
                        ? "bg-secondary-bg text-primary"
                        : "hover:bg-hover text-accent"
                    }`}
                  >
                    {content}
                  </AccordionTrigger>
                ) : (
                  // if subItems not exist then simple Button (No Arrow)
                  <div
                    onClick={() => {
                      setToggle(false);
                      item.path && navigate(item.path);
                    }}
                    className={`flex items-center justify-between cursor-pointer py-3 px-2 mt-2 rounded-lg transition-all ${
                      item.path && isActive(item.path)
                        ? "bg-secondary-bg text-primary"
                        : "hover:bg-hover text-accent"
                    }`}
                  >
                    {content}
                  </div>
                )}
                {hasSubItems && (
                  <AccordionContent className=" pb- px-4 group-data-[state=open]:bg-secondary-bg group-data-[state=open]:rounded-b-lg">
                    <div className="flex flex-col ml-6">
                      {item.type === "chat" && (
                        <button
                          className={`text-[12px] font-normal flex items-center gap-1 py-2 ${
                            !activeHistory
                              ? "text-primary"
                              : "text-accent hover:text-primary"
                          }`}
                          onClick={() => {
                            setActiveHistory(false);
                            setActiveView("new-chat");
                            setReqChatGenerate(false);
                          }}
                        >
                          New Project
                        </button>
                      )}

                      {/* If we have chat history then show history */}
                      {item.type === "chat" && hasHistory && (
                        <div className="mt-2">
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full border-none"
                            value={activeHistory ? "recent-history" : ""}
                            onValueChange={(val) => {
                              setActiveHistory(val === "recent-history");
                            }}
                          >
                            <AccordionItem
                              value="recent-history"
                              className="border-none"
                            >
                              {/* Accordion Trigger for Recent Chats */}
                              <AccordionTrigger
                                className={`flex items-center gap-1 py-1 px-0 text-[12px] font-normal text-accent tracking-tighter hover:no-underline transition-colors ${activeHistory ? "text-primary" : "text-accent hover:text-primary"}`}
                                onClick={() => {
                                  setActiveHistory(!activeHistory);
                                  setReqChatGenerate(false);
                                }}
                              >
                                <span>Recent Chats</span>
                              </AccordionTrigger>

                              {/* Accordion Content for History List */}
                              <AccordionContent className="pt-1 pb-0 h-38 border-none overflow-y-auto hide-scrollbar">
                                <div className="space-y-1 mt-1">
                                  {Object.entries(messages)
                                    .slice(0, 4)
                                    .map(([heading, data], i) => {
                                      const isActive =
                                        selectedHeading === heading;
                                      return (
                                        <div
                                          key={i}
                                          onClick={() =>
                                            onSelectChat(heading, data)
                                          }
                                          className={`group relative flex items-center justify-between py-1 rounded-lg  cursor-pointer transition-colors ${isActive ? "text-primary" : "text-accent hover:bg-primary/5"}`}
                                        >
                                          <span className="text-[12px]  truncate pr-4">
                                            {heading}
                                          </span>
                                          <div>
                                            <MoreHorizontal
                                              size={16}
                                              className="text-accent transition-opacity"
                                            />
                                          </div>
                                        </div>
                                      );
                                    })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      )}

                      {/* Dusre items ke liye default sub-items */}
                      {item.type !== "chat" &&
                        item.subItems?.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              handleTabClick(sub);
                              setActiveHistory(false);
                            }}
                            className={`text-[12px] text-accent hover:text-primary text-left py-1.5 transition-colors ${
                              activeView === sub.view
                                ? "text-primary"
                                : "text-accent hover:text-primary"
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Static Footer Links */}
        {/* <div className="space-y-1">
          <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors">
            <Receipt className="w-5 h-5" />
            <span className="text-sm font-medium">Billings</span>
          </button>
          <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div> */}
      </nav>

      {/* Credit Section */}
      <CreditSection />
    </div>
  );
};

export default Sidebar;
