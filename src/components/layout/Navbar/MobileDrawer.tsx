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
  const base = href.split("?")[0].split("#")[0];
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
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 dark:bg-black/70 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          // Use theme tokens for background + borders + text
          "fixed right-0 top-0 z-50 h-full w-[82%] max-w-[360px] bg-background text-foreground shadow-xl",
          "border-l border-border",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-xl font-semibold text-foreground">Menu</span>

          <button
            type="button"
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-lg",
              "hover:bg-muted transition-colors"
            )}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} className="text-foreground" />
          </button>
        </div>

        {/* Nav */}
        <nav className="px-4 pt-3">
          <ul className="flex flex-col gap-2">
            {items.map((item) => {
              const hrefPath = normalizePath(item.href);
              const isActive =
                currentPath === hrefPath ||
                (hrefPath !== "/" && currentPath.startsWith(hrefPath + "/"));

              return (
                <li key={item.key}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium transition-colors",
                      isActive
                        ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <span>{item.label}</span>

                    {item.hasDropdown ? (
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground"
                        )}
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
                className={cn(
                  "w-full rounded-xl py-6 text-[18px] shadow-sm",
                  // keep your gradient, but ensure it looks good in dark mode too
                  "btn-gradient text-white",
                  // optional: subtle border that adapts
                  "border border-primary/40"
                )}
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
