import { payment } from "@/constants/static-data";
import { useLocation } from "react-router-dom";

interface IProp{
  visible?: string;
  font: string;
  Record: payment[];
  
  Credits?: string;
  Invoices?: string;
}

export default function PaymentHistory({visible, font, Record, Credits, Invoices}: IProp) {
  const location = useLocation();
  const isFullView = location.pathname === Credits || location.pathname === Invoices;
  const displayData = isFullView ? Record : Record.slice(0,5);
  return (
    <div className="flex flex-col gap-8 w-full mx-auto mt-5">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse bg-background rounded-lg min-w-[700px]">
          <thead>
            <tr className="text-xs font-bold uppercase text-foreground tracking-widest border-b border-border/50">
              <th className="px-4 py-4 w-[180px] whitespace-nowrap">Invoice ID</th>
              <th className="px-4 py-4 w-[180px] whitespace-nowrap">Billing Date</th>
              <th className="px-4 py-4 w-[180px] whitespace-nowrap">Plan</th>
              <th className="px-4 py-4 w-[180px] whitespace-nowrap">Amount</th>
              <th className="px-4 py-4 w-[180px] whitespace-nowrap">
                Payment Method
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {displayData.map((inv, i) => (
              <tr
                key={i}
                className="bg-transparent hover:bg-input/20 transition-colors group"
              >
                <td className="px-4 py-3 font-normal text-xs text-foreground group-hover:text-foreground">
                  {inv.id}
                </td>
                <td className="px-4 py-3 font-normal text-xs text-foreground whitespace-nowrap">
                  {inv.date}
                </td>
                <td className="px-4 py-3 font-normal text-xs text-foreground whitespace-nowrap">
                  {inv.plan}
                </td>
                <td className={`px-4 py-3 text-xs text-foreground ${font} whitespace-nowrap`}>
                  <p>{inv.amount}<span className={`text-accent font-normal ${visible}`}> USD</span></p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5 bg-input rounded text-[8px] flex items-center justify-center font-bold">
                      <img src={inv.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span>••••</span>
                      <span className="text-xs font-medium">{inv.method}</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
