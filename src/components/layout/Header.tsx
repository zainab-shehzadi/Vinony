import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HIDE_GET_STARTED_ON, NAV } from "@/types/navbar";
import DesktopNav from "./Navbar/DesktopNav";
import HeaderActions from "./Navbar/HeaderActions";
import MobileDrawer from "./Navbar/MobileDrawer";



export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const hideGetStarted = HIDE_GET_STARTED_ON.has(location.pathname);

  // close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-background border-b border-black/5 dark:border-border">
      <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20 py-2 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-[24px] font-semibold text-primary dark:text-foreground">Logo Here</span>
          </Link>

          <DesktopNav items={NAV} />

          <HeaderActions
            hideGetStarted={hideGetStarted}
            onGetStarted={() => navigate("/login")}
            onOpenMenu={() => setOpen(true)}
          />
        </div>
      </div>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        items={NAV}
        hideGetStarted={hideGetStarted}
        onGetStarted={() => navigate("/login")}
      />
    </header>
  );
}

