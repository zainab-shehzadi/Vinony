import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
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

interface IProp {
  toggle: boolean;
  activeHistory: Boolean;
  setActiveHistory: (a: Boolean) => void;
  setActiveView: (a: String) => void;
  setReqGenerate: (a: Boolean) => void;
  setReqVideoGenerate: (a: Boolean) => void;
  setReqChatGenerate: (a: Boolean) => void;
}

const Sidebar = ({
  toggle,
  activeHistory,
  setActiveHistory,
  setActiveView,
  setReqGenerate,
  setReqVideoGenerate,
  setReqChatGenerate,
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

  // This piece of code is for active route
  const getActiveAccordion = () => {
    if (location.pathname === PATH.CHAT) return "item-0";
    if (location.pathname === PATH.IMAGE) return "item-1";
    if (location.pathname === PATH.VIDEO) return "item-2";
    if (location.pathname === PATH.AGENT) return "item-3";
    if (location.pathname === PATH.BILLING) return "item-4";
    if (location.pathname === PATH.SETTING) return "item-5";
    return "";
  };
  const [activeAccordion, setActiveAccordion] = useState(getActiveAccordion());

  useEffect(() => {
    setActiveAccordion(getActiveAccordion());
  }, [location.pathname]);

  const handleTabClick = (sub) => {
    setActiveView(sub.view);

    // Differentiate based on view name or label
    switch (sub.view) {
      case "video-history":
        setReqVideoGenerate(false);
        break;
      case "image-history":
        setReqGenerate(false);
        break;
      default:
        null;
    }
  };

  const hasHistory = recentChats.length > 0;
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`fixed z-50 w-64 h-full bg-background border-r border-border flex flex-col p-4 lg:relative transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${toggle ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-2 px-2 mt-5 mb-10">
        <p className="text-xl font-semibold text-primary">LOGO HERE</p>
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
          onValueChange={setActiveAccordion}
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
                className="border-none group overflow-hidden rounded-lg  transition-all data-[state=open]:bg-secondary-bg"
              >
                {hasSubItems ? (
                  // if subItems exist then standard AccordionTrigger
                  <AccordionTrigger
                    onClick={() => item.path && navigate(item.path)}
                    className={`hover:no-underline py-3 px-2 mt-2 rounded-lg transition-all ${
                      item.path && isActive(item.path)
                        ? "bg-secondary-bg text-primary"
                        : "hover:bg-slate-50 text-accent"
                    }`}
                  >
                    {content}
                  </AccordionTrigger>
                ) : (
                  // if subItems not exist then simple Button (No Arrow)
                  <div
                    onClick={() => item.path && navigate(item.path)}
                    className={`flex items-center justify-between cursor-pointer py-3 px-2 mt-2 rounded-lg transition-all ${
                      item.path && isActive(item.path)
                        ? "bg-secondary-bg text-primary"
                        : "hover:bg-slate-50 text-accent"
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
                          className={`text-[12px] text-accent font-normal hover:text-primary flex items-center gap-1 py-2`}
                          onClick={() => {
                            setActiveHistory(!activeHistory);
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
                          >
                            <AccordionItem
                              value="recent-history"
                              className="border-none"
                            >
                              {/* Accordion Trigger for Recent Chats */}
                              <AccordionTrigger
                                className="flex items-center gap-1 py-1 px-0 text-[12px] font-normal text-accent tracking-tighter hover:no-underline hover:text-slate-600 transition-colors"
                                // onClick={() => setActiveHistory(false)}
                              >
                                <span>Recent Chats</span>
                              </AccordionTrigger>

                              {/* Accordion Content for History List */}
                              <AccordionContent className="pt-1 pb-0 h-38 border-none overflow-y-auto hide-scrollbar">
                                <div className="space-y-1 mt-1">
                                  {recentChats.slice(0, 4).map((chat, i) => (
                                    <div
                                      key={i}
                                      className="group relative flex items-center justify-between px-3 py-1 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                                    >
                                      <span className="text-[12px] text-accent truncate pr-4">
                                        {chat}
                                      </span>
                                      <MoreHorizontal
                                        size={25}
                                        className="text-accent transition-opacity"
                                      />
                                    </div>
                                  ))}
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
                            onClick={() => handleTabClick(sub)}
                            className="text-[12px] text-accent hover:text-primary text-left py-1.5 transition-colors"
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
