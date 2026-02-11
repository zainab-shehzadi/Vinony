import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SETTINGS_TABS } from "@/constants/settings";

export default function SettingsTabs() {
  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto hide-scrollbar lg:overflow-visible">
        <nav className="inline-flex w-max gap-6 sm:gap-10 border-b-4 border-border whitespace-nowrap">
          {SETTINGS_TABS.map((t) => (
            <NavLink
              key={t.id}
              to={t.to}
              className={({ isActive }) =>
                cn(
                  "relative px-2 sm:px-3 pt-2 pb-4 text-base sm:text-[18px] font-bold transition-colors",
                  "after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-4px] after:h-[4px] after:rounded-full after:transition-all after:content-['']",
                  isActive
                    ? "text-foreground after:w-[70px] sm:after:w-[100px] after:btn-gradient"
                    : "text-[#475569] dark:text-accent hover:text-foreground after:w-0 after:bg-transparent"
                )
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
