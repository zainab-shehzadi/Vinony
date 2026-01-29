import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/navbar";

type Props = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  hideGetStarted: boolean;
  onGetStarted: () => void;
};

function normalizePath(href: string) {
  // remove query/hash if accidentally passed
  const base = href.split("?")[0].split("#")[0];
  // remove trailing slash except root
  if (base.length > 1 && base.endsWith("/")) return base.slice(0, -1);
  return base;
}

export default function MobileDrawer({
  open,
  onClose,
  items,
  hideGetStarted,
  onGetStarted,
}: Props) {
  const location = useLocation();

  const currentPath = normalizePath(location.pathname);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[82%] max-w-[360px] bg-[#F1E4FF] shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-semibold text-primary">Menu</span>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 pt-2">
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const hrefPath = normalizePath(item.href);
              const isActive =
                currentPath === hrefPath ||
                (hrefPath !== "/" && currentPath.startsWith(hrefPath + "/")); // supports nested routes

              return (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium transition",
                      isActive
                        ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                        : "text-black hover:bg-white/60"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? (
                      <ChevronDown
                        size={16}
                        className={cn(isActive ? "text-primary" : "text-black/70")}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          {!hideGetStarted ? (
            <div className="mt-6">
              <Button
                type="button"
                onClick={() => {
                  onClose();
                  onGetStarted();
                }}
                className="w-full rounded-xl border border-primary py-6 text-white text-[18px] btn-gradient shadow-sm"
              >
                Get Started
              </Button>
            </div>
          ) : null}
        </nav>
      </aside>
    </>
  );
}