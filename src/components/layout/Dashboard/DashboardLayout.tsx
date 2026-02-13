import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import {messages} from "@/constants/static-data"
import AnimatedOutletContent from "@/routes/AnimatedOutletContent";

export default function DashboardLayout() {
  const [toggle, setToggle] = useState(false);
  const [activeHistory, setActiveHistory] = useState<Boolean>(false);
  const [activeView, setActiveView] = useState<String>("");
  const [reqGenerate, setReqGenerate] = useState<Boolean>(false);
  const [reqVideoGenerate, setReqVideoGenerate] = useState<Boolean>(false);
  const [reqChatGenerate, setReqChatGenerate] = useState<Boolean>(false);
  const [reqAgentGenerate, setReqAgentGenerate] = useState<Boolean>(false);
  const [selectedChat, setSelectedChat] = useState(Object.entries(messages)[0]);

  return (
    <>
      <div className="flex h-screen">
        <Sidebar
          toggle={toggle}
          setToggle={setToggle}
          activeHistory={activeHistory}
          setActiveHistory={setActiveHistory}
          activeView={activeView}
          setActiveView={setActiveView}
          setReqGenerate={setReqGenerate}
          setReqVideoGenerate={setReqVideoGenerate}
          setReqChatGenerate={setReqChatGenerate}
          setReqAgentGenerate={setReqAgentGenerate}
          selectedHeading={selectedChat[0]}
          onSelectChat={(heading, data) => {
            setSelectedChat([heading, data]);
            setReqChatGenerate(true);
            // setActiveHistory(false);
          }}
        />
        {toggle && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        <div className="flex flex-col flex-1 min-w-0">
          <Header setToggle={setToggle} toggle={toggle} />
          {/* <main className="flex-1 overflow-auto">
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
                reqAgentGenerate, 
                setReqAgentGenerate,
                selectedChat,
                setSelectedChat
              }}
            />
          </main> */}
          <main className="flex-1 overflow-auto">
  <AnimatedOutletContent
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
      reqAgentGenerate,
      setReqAgentGenerate,
      selectedChat,
      setSelectedChat,
    }}
  />
</main>
        </div>
      </div>
    </>
  );
}


// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { useState } from "react";
// import { messages } from "@/constants/static-data";
// import AnimatedOutlet from "@/routes/AnimatedOutlet";

// export default function DashboardLayout() {
//   const [toggle, setToggle] = useState(false);
//   const [activeHistory, setActiveHistory] = useState<Boolean>(false);
//   const [activeView, setActiveView] = useState<String>("");
//   const [reqGenerate, setReqGenerate] = useState<Boolean>(false);
//   const [reqVideoGenerate, setReqVideoGenerate] = useState<Boolean>(false);
//   const [reqChatGenerate, setReqChatGenerate] = useState<Boolean>(false);
//   const [reqAgentGenerate, setReqAgentGenerate] = useState<Boolean>(false);
//   const [selectedChat, setSelectedChat] = useState(Object.entries(messages)[0]);

//   return (
//     <div className="flex h-screen">
//       <Sidebar
//         toggle={toggle}
//         setToggle={setToggle}
//         activeHistory={activeHistory}
//         setActiveHistory={setActiveHistory}
//         activeView={activeView}
//         setActiveView={setActiveView}
//         setReqGenerate={setReqGenerate}
//         setReqVideoGenerate={setReqVideoGenerate}
//         setReqChatGenerate={setReqChatGenerate}
//         setReqAgentGenerate={setReqAgentGenerate}
//         selectedHeading={selectedChat[0]}
//         onSelectChat={(heading, data) => {
//           setSelectedChat([heading, data]);
//           setReqChatGenerate(true);
//         }}
//       />

//       {toggle && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setToggle(false)}
//         />
//       )}

//       <div className="flex flex-col flex-1 min-w-0">
//         <Header setToggle={setToggle} toggle={toggle} />

//         {/* animate ONLY route content */}
//         <main className="flex-1 overflow-auto">
//           <AnimatedOutlet
//             context={{
//               activeHistory,
//               setActiveHistory,
//               activeView,
//               reqGenerate,
//               setReqGenerate,
//               reqVideoGenerate,
//               setReqVideoGenerate,
//               reqChatGenerate,
//               setReqChatGenerate,
//               reqAgentGenerate,
//               setReqAgentGenerate,
//               selectedChat,
//               setSelectedChat,
//             }}
//           />
//         </main>
//       </div>
//     </div>
//   );
// }
