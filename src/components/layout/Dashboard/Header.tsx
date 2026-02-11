"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
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
import { Icons } from "@/constants/aiModelData";

interface IProp {
  setToggle: (val: boolean) => void;
  toggle: boolean;
}

export default function Header({ setToggle, toggle }: IProp) {
  const navigate = useNavigate();

  const [logoutOpen, setLogoutOpen] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  //  You can centralize routes here
  const routes = useMemo(
    () => ({
      notification: "/notification",
      billing: "/billing", // change to your upgrade route
      profile: "/settings/profile", // change as needed
      terms: "/terms",
      privacy: "/privacy",
      login: "/auth/login", // change as needed
    }),
    [],
  );

  const go = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7702 8.77713C13.3005 7.94483 13.5814 6.9781 13.5798 5.99122C13.5798 3.12342 11.2552 0.798832 8.38741 0.798832C7.36212 0.798832 6.40632 1.096 5.6015 1.60844C5.06591 1.63866 4.53578 1.73225 4.02222 1.88724C4.58188 1.29061 5.2581 0.815259 6.00897 0.490631C6.75984 0.166002 7.56937 -0.000988195 8.38741 4.39911e-06C11.6962 4.39911e-06 14.3786 2.68247 14.3786 5.99122C14.3796 6.80926 14.2126 7.61879 13.888 8.36966C13.5634 9.12053 13.088 9.79674 12.4914 10.3564C12.6436 9.85195 12.7394 9.32313 12.7702 8.77713Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.553 9.02796C13.2641 9.51901 12.9066 9.96633 12.4914 10.3564C12.6436 9.85195 12.739 9.32313 12.7698 8.77713C13.3002 7.94488 13.5813 6.97815 13.5798 5.99122C13.5798 3.12343 11.2552 0.798836 8.38741 0.798836C7.36212 0.798836 6.40632 1.096 5.6015 1.60845C5.06591 1.63867 4.53578 1.73225 4.02222 1.88724C4.4123 1.47199 4.85963 1.11451 5.35067 0.825596C6.27073 0.283451 7.3195 -0.00167451 8.38741 7.39813e-06C11.6962 7.39813e-06 14.3786 2.68247 14.3786 5.99122C14.3786 6.0514 14.3777 6.11144 14.3758 6.17135C14.3476 7.17783 14.0645 8.16069 13.553 9.02796Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9824 8.3877C11.9824 11.6964 9.29996 14.3789 5.99121 14.3789C2.68246 14.3789 0 11.6964 0 8.3877C0 5.07895 2.68246 2.39648 5.99121 2.39648C9.29996 2.39648 11.9824 5.07895 11.9824 8.3877ZM5.5918 6.39062C5.37993 6.39062 5.17675 6.47479 5.02694 6.6246C4.87713 6.77441 4.79297 6.97759 4.79297 7.18945C4.79297 7.40132 4.87713 7.6045 5.02694 7.75431C5.17675 7.90412 5.37993 7.98828 5.5918 7.98828V6.39062ZM6.39062 5.5918V5.19238H5.5918V5.5918C5.16807 5.5918 4.7617 5.76012 4.46208 6.05974C4.16247 6.35936 3.99414 6.76573 3.99414 7.18945C3.99414 7.61318 4.16247 8.01955 4.46208 8.31917C4.7617 8.61878 5.16807 8.78711 5.5918 8.78711V10.3848C5.24431 10.3848 4.94834 10.1631 4.8381 9.85235C4.82175 9.80151 4.79536 9.75446 4.76051 9.714C4.72565 9.67354 4.68304 9.64047 4.63518 9.61676C4.58733 9.59306 4.53521 9.57919 4.4819 9.57598C4.42859 9.57277 4.37518 9.58028 4.32482 9.59807C4.27447 9.61586 4.22819 9.64357 4.18873 9.67956C4.14927 9.71554 4.11743 9.75908 4.09509 9.80759C4.07275 9.8561 4.06037 9.90859 4.05867 9.96197C4.05697 10.0153 4.06599 10.0685 4.08521 10.1184C4.19533 10.4299 4.39936 10.6997 4.66918 10.8905C4.939 11.0812 5.26134 11.1836 5.5918 11.1836V11.583H6.39062V11.1836C6.81435 11.1836 7.22072 11.0153 7.52034 10.7157C7.81996 10.416 7.98828 10.0097 7.98828 9.58594C7.98828 9.16221 7.81996 8.75584 7.52034 8.45622C7.22072 8.15661 6.81435 7.98828 6.39062 7.98828V6.39062C6.73812 6.39062 7.03408 6.6123 7.14432 6.92304C7.16067 6.97388 7.18706 7.02093 7.22191 7.06139C7.25677 7.10186 7.29938 7.13492 7.34724 7.15863C7.39509 7.18233 7.44722 7.1962 7.50052 7.19941C7.55383 7.20263 7.60725 7.19511 7.6576 7.17732C7.70796 7.15953 7.75423 7.13182 7.79369 7.09583C7.83315 7.05985 7.86499 7.01631 7.88733 6.9678C7.90967 6.91929 7.92206 6.8668 7.92375 6.81342C7.92545 6.76004 7.91643 6.70686 7.89721 6.65703C7.78709 6.34547 7.58306 6.07572 7.31324 5.88494C7.04342 5.69416 6.72108 5.59174 6.39062 5.5918ZM6.39062 8.78711V10.3848C6.60249 10.3848 6.80567 10.3006 6.95548 10.1508C7.10529 10.001 7.18945 9.7978 7.18945 9.58594C7.18945 9.37407 7.10529 9.17089 6.95548 9.02108C6.80567 8.87127 6.60249 8.78711 6.39062 8.78711Z"
                fill="white"
              />
            </svg>

            <span className="text-xs font-semibold">100 +</span>
          </div>

          {/* Upgrade */}
          <div className="flex items-center border-l border-r border-border pl-1 pr-1">
            <button
              type="button"
              onClick={handleUpgrade}
              className="text-foreground w-40 hidden md:flex md:justify-center gap-2 cursor-pointer"
            >
              <Icons
                filling="#805AF5"
                width={24}
                height={24}
                path={[
                  "M16.83 4.25H7.17C6.635 4.25 6.19 4.25 5.825 4.28C5.445 4.31 5.089 4.378 4.752 4.55C4.23445 4.81367 3.81367 5.23445 3.55 5.752C3.46 5.929 3.424 6.148 3.404 6.278C3.37696 6.47054 3.35695 6.664 3.344 6.858C3.312 7.288 3.291 7.822 3.277 8.368C3.25 9.46 3.25 10.638 3.25 11.198V11.2C3.25 11.3989 3.32902 11.5897 3.46967 11.7303C3.61032 11.871 3.80109 11.95 4 11.95C4.19891 11.95 4.38968 11.871 4.53033 11.7303C4.67098 11.5897 4.75 11.3989 4.75 11.2C4.75 10.92 4.75 10.492 4.753 10H19.25V14.8C19.25 15.372 19.25 15.757 19.225 16.052C19.202 16.34 19.16 16.477 19.114 16.567C18.9941 16.8026 18.8026 16.9941 18.567 17.114C18.477 17.16 18.34 17.202 18.052 17.225C17.757 17.249 17.372 17.25 16.8 17.25H12C11.8011 17.25 11.6103 17.329 11.4697 17.4697C11.329 17.6103 11.25 17.8011 11.25 18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75H16.83C17.365 18.75 17.81 18.75 18.175 18.72C18.555 18.69 18.911 18.622 19.248 18.45C19.7654 18.1866 20.1862 17.7662 20.45 17.249C20.622 16.911 20.69 16.555 20.72 16.175C20.75 15.81 20.75 15.365 20.75 14.831V8.17C20.75 7.635 20.75 7.19 20.72 6.825C20.69 6.445 20.622 6.089 20.45 5.752C20.1869 5.23475 19.7668 4.81401 19.25 4.55C18.912 4.378 18.556 4.31 18.176 4.28C17.811 4.25 17.365 4.25 16.83 4.25ZM19.25 8H4.789C4.801 7.616 4.819 7.261 4.839 6.969C4.855 6.77033 4.87133 6.61367 4.888 6.499C4.89667 6.445 4.90267 6.41033 4.906 6.395C5.02688 6.1765 5.21044 5.99922 5.433 5.886C5.523 5.84 5.66 5.798 5.947 5.775C6.243 5.751 6.627 5.75 7.2 5.75H16.8C17.372 5.75 17.757 5.75 18.052 5.775C18.34 5.798 18.477 5.84 18.567 5.886C18.803 6.006 18.994 6.197 19.114 6.433C19.16 6.523 19.202 6.66 19.225 6.947C19.246 7.207 19.249 7.536 19.25 8Z",
                  "M9.31399 15.8766L8.59399 16.5766C9.04599 17.4296 8.90399 18.5016 8.16499 19.2176L7.01699 20.3316C6.56857 20.7601 5.97222 20.9992 5.35199 20.9992C4.73176 20.9992 4.1354 20.7601 3.68699 20.3316C3.47008 20.1243 3.29744 19.8753 3.17949 19.5994C3.06154 19.3235 3.00073 19.0266 3.00073 18.7266C3.00073 18.4266 3.06154 18.1297 3.17949 17.8538C3.29744 17.578 3.47008 17.3289 3.68699 17.1216L4.40699 16.4236C4.18121 15.9966 4.10084 15.5077 4.17808 15.0309C4.25532 14.5541 4.48595 14.1155 4.83499 13.7816L5.98299 12.6676C6.4314 12.2391 7.02775 12 7.64799 12C8.26822 12 8.86457 12.2391 9.31299 12.6676C9.52989 12.8749 9.70253 13.124 9.82048 13.3998C9.93843 13.6757 9.99924 13.9726 9.99924 14.2726C9.99924 14.5726 9.93843 14.8695 9.82048 15.1454C9.70253 15.4213 9.52989 15.6703 9.31299 15.8776M8.66199 15.2676C8.79605 15.1391 8.90273 14.9848 8.9756 14.814C9.04848 14.6431 9.08605 14.4593 9.08605 14.2736C9.08605 14.0879 9.04848 13.9041 8.9756 13.7333C8.90273 13.5625 8.79605 13.4081 8.66199 13.2796C8.38917 13.0177 8.02565 12.8715 7.64749 12.8715C7.26932 12.8715 6.90581 13.0177 6.63299 13.2796L5.48399 14.3936C5.30225 14.5684 5.17187 14.7896 5.10699 15.0332C5.04212 15.2769 5.04523 15.5336 5.11599 15.7756C5.54715 15.4759 6.06412 15.3245 6.58888 15.3443C7.11363 15.3642 7.61769 15.5541 8.02499 15.8856L8.66199 15.2676ZM7.37399 16.4996C7.12099 16.3125 6.81464 16.2116 6.49999 16.2116C6.18533 16.2116 5.87898 16.3125 5.62599 16.4996C5.87898 16.6867 6.18533 16.7877 6.49999 16.7877C6.81464 16.7877 7.12099 16.6867 7.37399 16.4996ZM4.33699 17.7326C4.20292 17.8611 4.09625 18.0155 4.02337 18.1863C3.95049 18.3571 3.91293 18.5409 3.91293 18.7266C3.91293 18.9123 3.95049 19.0961 4.02337 19.267C4.09625 19.4378 4.20292 19.5921 4.33699 19.7206C4.60981 19.9825 4.97332 20.1287 5.35149 20.1287C5.72965 20.1287 6.09317 19.9825 6.36599 19.7206L7.51499 18.6066C7.89999 18.2336 8.02299 17.7006 7.88299 17.2246C7.45182 17.5244 6.93485 17.6758 6.4101 17.6559C5.88534 17.6361 5.38128 17.4461 4.97399 17.1146L4.33699 17.7326ZM14 12.9996C13.7348 12.9996 13.4804 13.105 13.2929 13.2925C13.1053 13.4801 13 13.7344 13 13.9996C13 14.2648 13.1053 14.5192 13.2929 14.7067C13.4804 14.8943 13.7348 14.9996 14 14.9996H17C17.2652 14.9996 17.5196 14.8943 17.7071 14.7067C17.8946 14.5192 18 14.2648 18 13.9996C18 13.7344 17.8946 13.4801 17.7071 13.2925C17.5196 13.105 17.2652 12.9996 17 12.9996H14Z",
                ]}
                viewBox="0 0 24 24"
                className="text-primary"
              />
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
              <Icons
                filling="#805AF5"
                width={24}
                height={24}
                path={[
                  "M16.83 4.25H7.17C6.635 4.25 6.19 4.25 5.825 4.28C5.445 4.31 5.089 4.378 4.752 4.55C4.23445 4.81367 3.81367 5.23445 3.55 5.752C3.46 5.929 3.424 6.148 3.404 6.278C3.37696 6.47054 3.35695 6.664 3.344 6.858C3.312 7.288 3.291 7.822 3.277 8.368C3.25 9.46 3.25 10.638 3.25 11.198V11.2C3.25 11.3989 3.32902 11.5897 3.46967 11.7303C3.61032 11.871 3.80109 11.95 4 11.95C4.19891 11.95 4.38968 11.871 4.53033 11.7303C4.67098 11.5897 4.75 11.3989 4.75 11.2C4.75 10.92 4.75 10.492 4.753 10H19.25V14.8C19.25 15.372 19.25 15.757 19.225 16.052C19.202 16.34 19.16 16.477 19.114 16.567C18.9941 16.8026 18.8026 16.9941 18.567 17.114C18.477 17.16 18.34 17.202 18.052 17.225C17.757 17.249 17.372 17.25 16.8 17.25H12C11.8011 17.25 11.6103 17.329 11.4697 17.4697C11.329 17.6103 11.25 17.8011 11.25 18C11.25 18.1989 11.329 18.3897 11.4697 18.5303C11.6103 18.671 11.8011 18.75 12 18.75H16.83C17.365 18.75 17.81 18.75 18.175 18.72C18.555 18.69 18.911 18.622 19.248 18.45C19.7654 18.1866 20.1862 17.7662 20.45 17.249C20.622 16.911 20.69 16.555 20.72 16.175C20.75 15.81 20.75 15.365 20.75 14.831V8.17C20.75 7.635 20.75 7.19 20.72 6.825C20.69 6.445 20.622 6.089 20.45 5.752C20.1869 5.23475 19.7668 4.81401 19.25 4.55C18.912 4.378 18.556 4.31 18.176 4.28C17.811 4.25 17.365 4.25 16.83 4.25ZM19.25 8H4.789C4.801 7.616 4.819 7.261 4.839 6.969C4.855 6.77033 4.87133 6.61367 4.888 6.499C4.89667 6.445 4.90267 6.41033 4.906 6.395C5.02688 6.1765 5.21044 5.99922 5.433 5.886C5.523 5.84 5.66 5.798 5.947 5.775C6.243 5.751 6.627 5.75 7.2 5.75H16.8C17.372 5.75 17.757 5.75 18.052 5.775C18.34 5.798 18.477 5.84 18.567 5.886C18.803 6.006 18.994 6.197 19.114 6.433C19.16 6.523 19.202 6.66 19.225 6.947C19.246 7.207 19.249 7.536 19.25 8Z",
                  "M9.31399 15.8766L8.59399 16.5766C9.04599 17.4296 8.90399 18.5016 8.16499 19.2176L7.01699 20.3316C6.56857 20.7601 5.97222 20.9992 5.35199 20.9992C4.73176 20.9992 4.1354 20.7601 3.68699 20.3316C3.47008 20.1243 3.29744 19.8753 3.17949 19.5994C3.06154 19.3235 3.00073 19.0266 3.00073 18.7266C3.00073 18.4266 3.06154 18.1297 3.17949 17.8538C3.29744 17.578 3.47008 17.3289 3.68699 17.1216L4.40699 16.4236C4.18121 15.9966 4.10084 15.5077 4.17808 15.0309C4.25532 14.5541 4.48595 14.1155 4.83499 13.7816L5.98299 12.6676C6.4314 12.2391 7.02775 12 7.64799 12C8.26822 12 8.86457 12.2391 9.31299 12.6676C9.52989 12.8749 9.70253 13.124 9.82048 13.3998C9.93843 13.6757 9.99924 13.9726 9.99924 14.2726C9.99924 14.5726 9.93843 14.8695 9.82048 15.1454C9.70253 15.4213 9.52989 15.6703 9.31299 15.8776M8.66199 15.2676C8.79605 15.1391 8.90273 14.9848 8.9756 14.814C9.04848 14.6431 9.08605 14.4593 9.08605 14.2736C9.08605 14.0879 9.04848 13.9041 8.9756 13.7333C8.90273 13.5625 8.79605 13.4081 8.66199 13.2796C8.38917 13.0177 8.02565 12.8715 7.64749 12.8715C7.26932 12.8715 6.90581 13.0177 6.63299 13.2796L5.48399 14.3936C5.30225 14.5684 5.17187 14.7896 5.10699 15.0332C5.04212 15.2769 5.04523 15.5336 5.11599 15.7756C5.54715 15.4759 6.06412 15.3245 6.58888 15.3443C7.11363 15.3642 7.61769 15.5541 8.02499 15.8856L8.66199 15.2676ZM7.37399 16.4996C7.12099 16.3125 6.81464 16.2116 6.49999 16.2116C6.18533 16.2116 5.87898 16.3125 5.62599 16.4996C5.87898 16.6867 6.18533 16.7877 6.49999 16.7877C6.81464 16.7877 7.12099 16.6867 7.37399 16.4996ZM4.33699 17.7326C4.20292 17.8611 4.09625 18.0155 4.02337 18.1863C3.95049 18.3571 3.91293 18.5409 3.91293 18.7266C3.91293 18.9123 3.95049 19.0961 4.02337 19.267C4.09625 19.4378 4.20292 19.5921 4.33699 19.7206C4.60981 19.9825 4.97332 20.1287 5.35149 20.1287C5.72965 20.1287 6.09317 19.9825 6.36599 19.7206L7.51499 18.6066C7.89999 18.2336 8.02299 17.7006 7.88299 17.2246C7.45182 17.5244 6.93485 17.6758 6.4101 17.6559C5.88534 17.6361 5.38128 17.4461 4.97399 17.1146L4.33699 17.7326ZM14 12.9996C13.7348 12.9996 13.4804 13.105 13.2929 13.2925C13.1053 13.4801 13 13.7344 13 13.9996C13 14.2648 13.1053 14.5192 13.2929 14.7067C13.4804 14.8943 13.7348 14.9996 14 14.9996H17C17.2652 14.9996 17.5196 14.8943 17.7071 14.7067C17.8946 14.5192 18 14.2648 18 13.9996C18 13.7344 17.8946 13.4801 17.7071 13.2925C17.5196 13.105 17.2652 12.9996 17 12.9996H14Z",
                ]}
                viewBox="0 0 24 24"
                className="text-primary"
              />
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

      {/* Logout Modal */}
      <LogoutModal
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        onConfirm={handleLogoutConfirm}
        loading={logoutLoading}
      />
    </>
  );
}
