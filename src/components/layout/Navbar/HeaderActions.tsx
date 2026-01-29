import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    hideGetStarted: boolean;
    onGetStarted: () => void;
    onOpenMenu: () => void;
};

export default function HeaderActions({
    hideGetStarted,
    onGetStarted,
    onOpenMenu,
}: Props) {
    return (
        <div className="flex items-center gap-3">
            {!hideGetStarted ? (
                <div className="hidden lg:block">
                    <Button
                        type="button"
                        onClick={onGetStarted}
                        className="rounded-xl border border-primary px-6 py-6 text-white text-[20px] btn-gradient shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)] dark:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.6)]"
                    >
                        Get Started
                    </Button>
                </div>
            ) : (
                <div className="hidden lg:block w-[170px]" />
            )}


            <button
                type="button"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-primary/50"
                onClick={onOpenMenu}
                aria-label="Open menu"
            >
                <Menu size={20} />
            </button>
        </div>
    );
}
