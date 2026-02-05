"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
  CircleDollarSign,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import LogoutModal from "@/components/models/LogoutAccountModal";
import { PATH } from "@/constants/paths";


interface IProp {
  setToggle: (val: boolean) => void;
  toggle: boolean;
}

export default function Header({ setToggle, toggle }: IProp) {
  const navigate = useNavigate();

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  // ✅ You can centralize routes here
  const routes = useMemo(
    () => ({
      notification: "/notification",
      billing: "/billing", // change to your upgrade route
      profile: "/settings/profile", // change as needed
      terms: "/terms",
      privacy: "/privacy",
      login: "/auth/login", // change as needed
    }),
    []
  );

  const go = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const handleUpgrade = useCallback(() => {
    go(PATH.PRICING);
  }, [go, PATH.PRICING]);

  const handleLogoutConfirm = useCallback(async () => {
    try {
      setLogoutLoading(true);

      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      setLogoutOpen(false);
      navigate(routes.login, { replace: true });
    } finally {
      setLogoutLoading(false);
    }
  }, [navigate, routes.login]);

  return (
    <>
      <header className="h-16 w-full border-b border-border flex items-center justify-between px-4 md:px-10 xl:px-16 sticky top-0">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="lg:hidden cursor-pointer font-semibold text-xl text-foreground"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

      
          <h1 className="text-base sm:text-xl font-semibold truncate">
            Chat Workspace
          </h1>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Credits */}
          <div className="hidden auth-primary-btn h-8 sm:flex sm:items-center gap-1 px-2 py-3 rounded-lg">
            <CircleDollarSign className="w-4 h-4" />
            <span className="text-xs font-semibold">100 +</span>
          </div>

          {/* Upgrade */}
          <div className="flex items-center border-l border-r pl-1 pr-1">
            <button
              type="button"
              onClick={handleUpgrade}
              className="text-foreground w-40 hidden md:flex md:justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-6 h-6 text-primary" />
              <span className="text-sm md:text-[16px] font-medium">
                Upgrade plan
              </span>
            </button>

            {/* Mobile Icon only */}
            <button
              type="button"
              onClick={handleUpgrade}
              className="md:hidden text-primary cursor-pointer"
              aria-label="Upgrade plan"
            >
              <CreditCard className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Notification Bell */}
          <button
            type="button"
            onClick={() => go(routes.notification)}
            aria-label="Open notifications"
            className="relative text-primary h-8 w-7 flex items-center justify-center cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <Bell className="w-6 h-6 fill-primary" />
            <span className="bg-red-500 h-1.5 w-1.5 rounded-full absolute top-0.5 right-1" />
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer hover:bg-hover p-1 rounded-lg transition-colors"
                aria-label="Open user menu"
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-accent hidden sm:block" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 p-2 shadow-xl rounded-xl border-border"
            >
              {/* Header Section: User Info */}
              <DropdownMenuLabel className="font-normal p-2">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <div className="w-[1px] h-6 bg-accent" />
                    <span className="font-bold text-foreground text-base">
                      Michael Smith
                    </span>
                  </div>
                </div>

                {/* Credit Card Section */}
                <div className="bg-card-soft rounded-xl p-3 border-border">
                  <div className="text-[16px] font-semibold text-primary mb-2">
                    Free
                  </div>

                  <Progress value={20} className="h-1.5 mb-4 bg-slate-100" />

                  <div className="text-sm text-accent font-normal">
                    5/150 credits left
                  </div>
                </div>
              </DropdownMenuLabel>

              {/* Menu Items */}
              <div className="px-1 py-1">
                <DropdownMenuItem
                  className="py-2.5 cursor-pointer text-accent font-medium focus:bg-card focus:text-accent/70"
                  onSelect={() => go(PATH.SETTING)}
                >
                  Profile
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-border mx-1" />

                <DropdownMenuItem
                  className="py-2.5 cursor-pointer text-accent font-medium focus:bg-card focus:text-accent/70"
                  onSelect={() => go(PATH.TERMS)}
                >
                  Terms and Conditions
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-border mx-1" />

                <DropdownMenuItem
                  className="py-2.5 cursor-pointer text-accent font-medium focus:bg-card focus:text-accent/70"
                  onSelect={() => go(PATH.PRIVACY)}
                >
            
                  Privacy Policy
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-border mx-1" />

                <DropdownMenuItem
                  className="py-2.5 cursor-pointer text-accent font-medium focus:bg-card focus:text-accent/70"
                  onSelect={() => setLogoutOpen(true)}
                >
                  Logout
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </header>

      {/* ✅ Logout Modal */}
      <LogoutModal
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        onConfirm={handleLogoutConfirm}
        loading={logoutLoading}
      />
    </>
  );
}
