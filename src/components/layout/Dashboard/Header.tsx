import {
  Bell,
  ChevronDown,
  Menu,
  CircleDollarSign,
  CreditCard,
} from "lucide-react";
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

interface IProp {
  setToggle: (val: boolean) => void;
  toggle: boolean;
}

export default function Header({ setToggle, toggle }: IProp) {
  return (
    <>
      <header className="h-16 w-full border-b flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div
            className="lg:hidden cursor-pointer font-semibold text-xl text-primaryDark"
            onClick={() => setToggle(!toggle)}
          >
            <Menu className="w-6 h-6" />
          </div>
          <h1 className="text-sm lg:text-base font-semibold truncate">
            Chat Workspace
          </h1>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden auth-primary-btn h-8 sm:flex sm:items-center gap-1 px-2 py-3 rounded-lg">
            <CircleDollarSign className="w-4 h-4" />
            <span className="text-xs font-semibold">100 +</span>
          </div>

          <div className="flex items-center border-l border-r pl-1 pr-1">
            <div className="text-primaryDark w-40 hidden md:flex md:justify-center gap-2 cursor-pointer">
              <CreditCard className="w-6 h-6 text-primary" />
              <span className="text-sm md:text-[16px] font-medium">Upgrade plan</span>
            </div>
            {/* Mobile Icon only version */}
            <div className="md:hidden text-primary cursor-pointer">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <div className="text-primary h-8 w-7 flex items-center justify-center relative cursor-pointer">
              <Bell className="w-6 h-6 fill-primary" />
              <span className="bg-red-500 h-1.5 w-1.5 rounded-full absolute top-0.5 right-1"></span>
            </div>
          </div>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded-lg transition-colors">
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-accent hidden sm:block" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-64 p-2 shadow-xl rounded-xl"
            >
              {/* Header Section: User Info */}
              <DropdownMenuLabel className="font-normal p-2">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2">
                    <div className="w-[1px] h-6 bg-accent" />{" "}
                    {/* Vertical Line */}
                    <span className="font-bold text-primaryDark text-base">
                      Michael Smith
                    </span>
                  </div>
                </div>

                {/* Credit Card Section */}
                <div className="bg-[#E9DAF8]/50 rounded-xl p-3 border border-purple-100">
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
                <DropdownMenuItem className="py-2.5 cursor-pointer text-accent font-medium focus:bg-slate-50 focus:text-[#131316]">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100 mx-1" />

                <DropdownMenuItem className="py-2.5 cursor-pointer text-accent font-medium focus:bg-slate-50 focus:text-[#131316]">
                  Terms
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100 mx-1" />

                <DropdownMenuItem className="py-2.5 cursor-pointer text-accent font-medium focus:bg-slate-50 focus:text-[#131316]">
                  Privacy
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-100 mx-1" />

                <DropdownMenuItem className="py-2.5 cursor-pointer text-accent font-medium focus:bg-slate-50 focus:text-[#131316]">
                  Logout
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
