import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

export default function DashboardLayout() {
  const [toggle, setToggle] = useState(false);
  const [activeHistory, setActiveHistory] = useState<Boolean>(false);
  const [activeView, setActiveView] = useState<String>("");
  const [reqGenerate, setReqGenerate] = useState<Boolean>(false);
  const [reqVideoGenerate, setReqVideoGenerate] = useState<Boolean>(false);
  const [reqChatGenerate, setReqChatGenerate] = useState<Boolean>(false);

  return (
    <>
      <div className="flex h-screen">
        <Sidebar
          toggle={toggle}
          activeHistory={activeHistory}
          setActiveHistory={setActiveHistory}
          setActiveView={setActiveView}
          setReqGenerate={setReqGenerate}
          setReqVideoGenerate={setReqVideoGenerate}
          setReqChatGenerate={setReqChatGenerate}
        />
        {toggle && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        <div className="flex flex-col flex-1 min-w-0">
          <Header setToggle={setToggle} toggle={toggle} />
          <main className="flex-1 overflow-auto">
            <Outlet
              context={{
                activeHistory,
                setActiveHistory,
                activeView,
                reqGenerate,
                setReqGenerate,
                reqVideoGenerate,
                setReqVideoGenerate,
                reqChatGenerate,
                setReqChatGenerate,
              }}
            />
          </main>
        </div>
      </div>
    </>
  );
}
