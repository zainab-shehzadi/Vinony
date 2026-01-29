import { useEffect, useState } from "react";
import {
  Receipt,
  Settings,
  MoreHorizontal,
} from "lucide-react";
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
  setActiveHistory: (a: Boolean) => void;
}


const Sidebar = ({ toggle, setActiveHistory }: IProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recentChats, ] = useState([
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
    return "";
  };
  const [activeAccordion, setActiveAccordion] = useState(getActiveAccordion());

  useEffect(() => {
    setActiveAccordion(getActiveAccordion());
  }, [location.pathname]);

  const hasHistory = recentChats.length > 0;
  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={`fixed z-50 w-64 h-full bg-white border-r flex flex-col p-4 lg:relative transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${toggle ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-2 px-2 mt-5 mb-10">
        <p className="text-xl font-semibold text-primary">LOGO HERE</p>
      </div>

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
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-none group overflow-hidden rounded-lg  transition-all data-[state=open]:bg-[#F3F4F8]"
              >
                <AccordionTrigger
                  onClick={() => item.path && navigate(item.path)}
                  className={`hover:no-underline py-3 px-2 mt-2 rounded-lg transition-all ${item.path && isActive(item.path) ? "data-[state=open]:bg-[#F3F4F8] data-[state=open]:text-primary group" : "hover:bg-slate-50 text-accent"}`}
                >
                  <div
                    className={`flex items-center gap-3 text-accent font-medium ${item.path && isActive(item.path) ? "group-data-[state=open]:text-primary" : "text-accent"}`}
                  >
                    {item.icon}
                    <span
                      className={`text-[14px] transition-all ${item.path && isActive(item.path) && "group-data-[state=open]:font-semibold group-data-[state=open]:text-[16px]"}`}
                    >
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className=" pb- px-4 group-data-[state=open]:bg-[#F3F4F8] group-data-[state=open]:rounded-b-lg">
                  <div className="flex flex-col ml-6">
                    {item.type === "chat" && (
                      <button
                        className={`text-[12px] ${hasHistory ? "text-primary" : "text-accent"} font-medium flex items-center gap-1 py-2 hover:opacity-80 transition-opacity1`}
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
                              onClick={() => setActiveHistory(false)}
                            >
                              <span>Recent Chats</span>
                            </AccordionTrigger>

                            {/* Accordion Content for History List */}
                            <AccordionContent className="pt-1 pb-0 h-36 border-none overflow-y-auto hide-scrollbar">
                              <div className="space-y-1 mt-1">
                                {recentChats.map((chat, i) => (
                                  <div
                                    key={i}
                                    className="group relative flex items-center justify-between px-3 py-1 rounded-lg hover:bg-primary/5 cursor-pointer transition-colors"
                                    onClick={() => setActiveHistory(true)}
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
                      item.subItems.map((sub, i) => (
                        <button
                          key={i}
                          className="text-[12px] text-accent hover:text-primary text-left py-1.5 transition-colors"
                        >
                          {sub}
                        </button>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Static Footer Links */}
        <div className="space-y-1">
          <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors">
            <Receipt className="w-5 h-5" />
            <span className="text-sm font-medium">Billings</span>
          </button>
          <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </nav>

      {/* Credit Section */}
      <CreditSection />
    </div>
  );
};

export default Sidebar;